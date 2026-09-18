"use client";

import { ChangeEvent, useState } from "react";
import { degrees, PDFDocument } from "pdf-lib";

type PdfMode = "images-to-pdf" | "pdf-to-jpg" | "merge" | "split" | "rotate" | "compress";
type Result = { name: string; url: string; detail: string };

async function renderPdf(file: File, scale = 1.5) {
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
  const source = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjs.getDocument({ data: source });
  const pdf = await loadingTask.promise;
  const pages: { canvas: HTMLCanvasElement; width: number; height: number }[] = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const context = canvas.getContext("2d");
    if (!context) continue;
    await page.render({ canvas, canvasContext: context, viewport }).promise;
    const original = page.getViewport({ scale: 1 });
    pages.push({ canvas, width: original.width, height: original.height });
  }
  await loadingTask.destroy();
  return pages;
}

function canvasBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob | null>(resolve => canvas.toBlob(resolve, "image/jpeg", quality));
}

export default function PdfTool({ mode }: { mode: PdfMode }) {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState("");
  const [range, setRange] = useState("");
  const [angle, setAngle] = useState(90);
  const [quality, setQuality] = useState(70);

  const imagesMode = mode === "images-to-pdf";
  const multiple = imagesMode || mode === "merge";
  const accept = imagesMode ? "image/jpeg,image/png" : "application/pdf";

  function select(event: ChangeEvent<HTMLInputElement>) {
    results.forEach(result => URL.revokeObjectURL(result.url));
    setResults([]); setError("");
    setFiles(Array.from(event.target.files ?? []));
  }

  function makeResult(bytes: Uint8Array, name: string, detail: string, type = "application/pdf"): Result {
    const copy = new Uint8Array(bytes);
    return { name, detail, url: URL.createObjectURL(new Blob([copy], { type })) };
  }

  async function process() {
    if (!files.length) return;
    setWorking(true); setError(""); setResults([]);
    try {
      if (mode === "images-to-pdf") {
        const pdf = await PDFDocument.create();
        for (const file of files) {
          const bytes = new Uint8Array(await file.arrayBuffer());
          const image = file.type === "image/png" ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
          const page = pdf.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        }
        const bytes = await pdf.save();
        setResults([makeResult(bytes, "resizefox-images.pdf", `${files.length} page${files.length > 1 ? "s" : ""}`)]);
      } else if (mode === "merge") {
        const merged = await PDFDocument.create();
        for (const file of files) {
          const source = await PDFDocument.load(await file.arrayBuffer());
          const pages = await merged.copyPages(source, source.getPageIndices());
          pages.forEach(page => merged.addPage(page));
        }
        const bytes = await merged.save();
        setResults([makeResult(bytes, "resizefox-merged.pdf", `${merged.getPageCount()} pages merged`)]);
      } else if (mode === "split") {
        const source = await PDFDocument.load(await files[0].arrayBuffer());
        const wanted = range.trim() ? range.split(",").flatMap(part => {
          const [start, end] = part.trim().split("-").map(Number);
          if (!start) return [];
          return end ? Array.from({ length: end - start + 1 }, (_, index) => start + index) : [start];
        }) : source.getPageIndices().map(index => index + 1);
        const valid = [...new Set(wanted)].filter(page => page >= 1 && page <= source.getPageCount());
        if (!valid.length) throw new Error("Enter at least one valid page number.");
        const created = await Promise.all(valid.map(async pageNumber => {
          const output = await PDFDocument.create();
          const [page] = await output.copyPages(source, [pageNumber - 1]);
          output.addPage(page);
          return makeResult(await output.save(), `resizefox-page-${pageNumber}.pdf`, `Page ${pageNumber}`);
        }));
        setResults(created);
      } else if (mode === "rotate") {
        const pdf = await PDFDocument.load(await files[0].arrayBuffer());
        pdf.getPages().forEach(page => page.setRotation(degrees((page.getRotation().angle + angle) % 360)));
        setResults([makeResult(await pdf.save(), "resizefox-rotated.pdf", `${pdf.getPageCount()} pages rotated ${angle}°`)]);
      } else if (mode === "pdf-to-jpg") {
        const pages = await renderPdf(files[0], 1.7);
        const created = await Promise.all(pages.map(async ({ canvas }, index) => {
          const blob = await canvasBlob(canvas, quality / 100);
          if (!blob) throw new Error("A page could not be converted.");
          return { name: `resizefox-page-${index + 1}.jpg`, url: URL.createObjectURL(blob), detail: `${canvas.width} × ${canvas.height}px` };
        }));
        setResults(created);
      } else {
        const pages = await renderPdf(files[0], quality >= 80 ? 1.5 : quality >= 60 ? 1.2 : 1);
        const output = await PDFDocument.create();
        for (const { canvas, width, height } of pages) {
          const blob = await canvasBlob(canvas, quality / 100);
          if (!blob) continue;
          const image = await output.embedJpg(new Uint8Array(await blob.arrayBuffer()));
          const page = output.addPage([width, height]);
          page.drawImage(image, { x: 0, y: 0, width, height });
        }
        const bytes = await output.save();
        if (bytes.length >= files[0].size) {
          setResults([makeResult(new Uint8Array(await files[0].arrayBuffer()), "resizefox-original.pdf", "No size saving with these settings. Original PDF preserved.")]);
        } else {
          setResults([makeResult(bytes, "resizefox-compressed.pdf", `${Math.round(bytes.length / 1024)} KB · ${(100 * (1 - bytes.length / files[0].size)).toFixed(1)}% smaller · page dimensions preserved · text becomes images`)]);
        }
      }
    } catch (caught) { setError(caught instanceof Error ? caught.message : "The file could not be processed."); }
    finally { setWorking(false); }
  }

  const button = {"images-to-pdf":"Create PDF","pdf-to-jpg":"Convert PDF to JPG","merge":"Merge PDFs","split":"Split PDF","rotate":"Rotate PDF","compress":"Compress PDF"}[mode];
  return <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-8"><div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-orange-200 px-6 py-12 text-center hover:border-orange-500"><span className="block text-4xl">📄</span><span className="mt-4 block text-xl font-bold">Choose {imagesMode ? "JPG or PNG images" : multiple ? "PDF files" : "a PDF file"}</span><span className="mt-2 block text-slate-500">{multiple ? "Multiple selection supported" : "The file is processed in your browser"}</span><input type="file" accept={accept} multiple={multiple} onChange={select} className="hidden" /></label>
    {mode === "compress" && <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">Best for scanned pages. Compression turns pages into images: selectable text, links, forms and accessibility structure are lost. Keep your original. Page dimensions are preserved; if the result is larger, you receive the original file.</p>}
    {files.length > 0 && <div className="mt-6 rounded-2xl bg-slate-50 p-5"><p className="font-bold">{files.length} file{files.length > 1 ? "s" : ""} selected</p><p className="mt-1 truncate text-sm text-slate-500">{files.map(file => file.name).join(", ")}</p>
      {mode === "split" && <label className="mt-4 block text-sm font-semibold">Pages to extract (optional)<input value={range} onChange={event => setRange(event.target.value)} placeholder="Example: 1,3-5" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"/><small className="mt-2 block font-normal text-slate-500">Leave empty to create one PDF for every page.</small></label>}
      {mode === "rotate" && <div className="mt-4 grid grid-cols-3 gap-2">{[90,180,270].map(value => <button key={value} onClick={() => setAngle(value)} className={`rounded-xl border px-3 py-3 font-bold ${angle === value ? "border-orange-500 bg-orange-50 text-orange-700" : "border-slate-200 bg-white"}`}>{value}°</button>)}</div>}
      {(mode === "pdf-to-jpg" || mode === "compress") && <label className="mt-4 block text-sm font-semibold">Output quality: {quality}%<input type="range" min="35" max="90" value={quality} onChange={event => setQuality(Number(event.target.value))} className="mt-2 w-full accent-orange-500"/></label>}
      <button onClick={process} disabled={working} className="mt-5 w-full rounded-xl bg-slate-950 px-5 py-3.5 font-bold text-white disabled:opacity-50">{working ? "Processing…" : button}</button>
    </div>}
    {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}
    {results.length > 0 && <div className="mt-6 space-y-3"><h3 className="text-lg font-bold">Ready to download</h3>{results.map(result => <div key={result.url} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"><span className="min-w-0 truncate text-sm font-semibold">{result.name}<small className="block font-normal text-slate-500">{result.detail}</small></span><a href={result.url} download={result.name} className="shrink-0 rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white">Download</a></div>)}</div>}
  </div></section>;
}
