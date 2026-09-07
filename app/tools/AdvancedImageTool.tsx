"use client";

import { ChangeEvent, useRef, useState } from "react";

type Action = "crop" | "rotate" | "flip";

export default function AdvancedImageTool({ action }: { action: Action }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [source, setSource] = useState("");
  const [natural, setNatural] = useState({ width: 0, height: 0 });
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [angle, setAngle] = useState(90);
  const [axis, setAxis] = useState<"horizontal" | "vertical">("horizontal");
  const [result, setResult] = useState("");
  const [resultSize, setResultSize] = useState({ width: 0, height: 0 });

  function choose(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];
    if (!selected || !selected.type.startsWith("image/")) return;
    if (source) URL.revokeObjectURL(source);
    if (result) URL.revokeObjectURL(result);
    const url = URL.createObjectURL(selected);
    setFile(selected);
    setSource(url);
    setResult("");
    const image = new Image();
    image.onload = () => {
      setNatural({ width: image.width, height: image.height });
      setCrop({ x: 0, y: 0, width: image.width, height: image.height });
    };
    image.src = url;
  }

  function process() {
    if (!file || !source) return;
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return;

      if (action === "crop") {
        const x = Math.max(0, Math.min(crop.x, natural.width - 1));
        const y = Math.max(0, Math.min(crop.y, natural.height - 1));
        const width = Math.max(1, Math.min(crop.width, natural.width - x));
        const height = Math.max(1, Math.min(crop.height, natural.height - y));
        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, x, y, width, height, 0, 0, width, height);
      } else if (action === "rotate") {
        const normalized = ((angle % 360) + 360) % 360;
        const swapsSides = normalized === 90 || normalized === 270;
        canvas.width = swapsSides ? natural.height : natural.width;
        canvas.height = swapsSides ? natural.width : natural.height;
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate((normalized * Math.PI) / 180);
        context.drawImage(image, -natural.width / 2, -natural.height / 2);
      } else {
        canvas.width = natural.width;
        canvas.height = natural.height;
        context.translate(axis === "horizontal" ? canvas.width : 0, axis === "vertical" ? canvas.height : 0);
        context.scale(axis === "horizontal" ? -1 : 1, axis === "vertical" ? -1 : 1);
        context.drawImage(image, 0, 0);
      }

      canvas.toBlob((blob) => {
        if (!blob) return;
        if (result) URL.revokeObjectURL(result);
        setResult(URL.createObjectURL(blob));
        setResultSize({ width: canvas.width, height: canvas.height });
      }, file.type === "image/png" ? "image/png" : "image/jpeg", 0.92);
    };
    image.src = source;
  }

  const label = action === "crop" ? "Crop image" : action === "rotate" ? "Rotate image" : "Flip image";

  return (
    <section className="mx-auto max-w-5xl px-5 pb-14 sm:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {!file ? (
          <button onClick={() => inputRef.current?.click()} className="w-full rounded-3xl border-2 border-dashed border-orange-200 px-6 py-16 text-center hover:border-orange-500">
            <span className="block text-4xl">🖼️</span>
            <span className="mt-5 block text-2xl font-bold">Choose an image</span>
            <span className="mt-2 block text-slate-500">JPG, PNG and WebP · processed on your device</span>
          </button>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div className="flex min-h-72 items-center justify-center rounded-2xl bg-slate-100 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result || source} alt="Image preview" className="max-h-[480px] max-w-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-orange-600">{natural.width} × {natural.height}px</p>
              {action === "crop" && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {(["x", "y", "width", "height"] as const).map((field) => (
                    <label key={field} className="text-sm font-semibold capitalize">{field}
                      <input type="number" min="0" value={crop[field]} onChange={(event) => setCrop({ ...crop, [field]: Number(event.target.value) })} className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3" />
                    </label>
                  ))}
                </div>
              )}
              {action === "rotate" && (
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[90, 180, 270].map((value) => <button key={value} onClick={() => setAngle(value)} className={`rounded-xl border px-3 py-3 font-bold ${angle === value ? "border-orange-500 bg-orange-50 text-orange-700" : "border-slate-200"}`}>{value}°</button>)}
                </div>
              )}
              {action === "flip" && (
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {(["horizontal", "vertical"] as const).map((value) => <button key={value} onClick={() => setAxis(value)} className={`rounded-xl border px-3 py-3 font-bold capitalize ${axis === value ? "border-orange-500 bg-orange-50 text-orange-700" : "border-slate-200"}`}>{value}</button>)}
                </div>
              )}
              <button onClick={process} className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3.5 font-bold text-white hover:bg-slate-800">{label}</button>
              {result && <a href={result} download={`resizefox-${action}.${file.type === "image/png" ? "png" : "jpg"}`} className="mt-3 block w-full rounded-xl bg-orange-500 px-5 py-3.5 text-center font-bold text-white hover:bg-orange-600">Download {resultSize.width} × {resultSize.height}px</a>}
              <button onClick={() => { setFile(null); setResult(""); }} className="mt-4 w-full text-sm font-semibold text-slate-500 underline">Choose another image</button>
            </div>
          </div>
        )}
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={choose} className="hidden" />
      </div>
    </section>
  );
}
