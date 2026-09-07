"use client";

import { ChangeEvent, useState } from "react";

type Output = { name: string; url: string; width: number; height: number };

export default function BulkResizeTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [width, setWidth] = useState(1200);
  const [outputs, setOutputs] = useState<Output[]>([]);
  const [working, setWorking] = useState(false);

  function select(event: ChangeEvent<HTMLInputElement>) {
    setFiles(Array.from(event.target.files ?? []).filter(file => file.type.startsWith("image/")));
    outputs.forEach(output => URL.revokeObjectURL(output.url));
    setOutputs([]);
  }

  async function resizeAll() {
    setWorking(true);
    const results = await Promise.all(files.map(file => new Promise<Output | null>((resolve) => {
      const source = URL.createObjectURL(file);
      const image = new Image();
      image.onload = () => {
        const height = Math.max(1, Math.round(image.height * width / image.width));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")?.drawImage(image, 0, 0, width, height);
        canvas.toBlob(blob => {
          URL.revokeObjectURL(source);
          resolve(blob ? { name: `resizefox-${file.name.replace(/\.[^.]+$/, "")}-${width}x${height}.jpg`, url: URL.createObjectURL(blob), width, height } : null);
        }, "image/jpeg", 0.9);
      };
      image.onerror = () => { URL.revokeObjectURL(source); resolve(null); };
      image.src = source;
    })));
    setOutputs(results.filter((item): item is Output => Boolean(item)));
    setWorking(false);
  }

  return <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-8">
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-orange-200 px-6 py-12 text-center hover:border-orange-500">
        <span className="block text-4xl">🗂️</span><span className="mt-4 block text-xl font-bold">Choose several images</span><span className="mt-2 block text-slate-500">Select JPG, PNG or WebP files together</span>
        <input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={select} className="hidden" />
      </label>
      {files.length > 0 && <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <p className="font-bold">{files.length} image{files.length > 1 ? "s" : ""} selected</p>
        <label className="mt-4 block text-sm font-semibold">Output width (pixels)<input type="number" min="1" value={width} onChange={e => setWidth(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3" /></label>
        <button disabled={working || width < 1} onClick={resizeAll} className="mt-4 w-full rounded-xl bg-slate-950 px-5 py-3.5 font-bold text-white disabled:opacity-50">{working ? "Processing…" : "Resize all images"}</button>
      </div>}
      {outputs.length > 0 && <div className="mt-6 space-y-3"><h3 className="text-lg font-bold">Your resized images</h3>{outputs.map(output => <div key={output.url} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"><span className="truncate text-sm">{output.name}<small className="block text-slate-500">{output.width} × {output.height}px</small></span><a href={output.url} download={output.name} className="shrink-0 rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white">Download</a></div>)}</div>}
    </div>
  </section>;
}
