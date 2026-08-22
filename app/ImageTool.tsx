"use client";

import { ChangeEvent, useRef, useState } from "react";

type Mode = "resize" | "compress" | "convert";

type ImageToolProps = {
  initialMode?: Mode;
  compressOnly?: boolean;
  previewResult?: boolean;
};

export default function ImageTool({
  initialMode = "resize",
  compressOnly = false,
  previewResult = false,
}: ImageToolProps = {}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [mode, setMode] = useState<Mode>(initialMode);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);

  const [keepRatio, setKeepRatio] = useState(true);
  const [format, setFormat] = useState("image/jpeg");
  const [quality, setQuality] = useState(90);
  const [targetKB, setTargetKB] = useState(500);

  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [resultUrl, setResultUrl] = useState("");
  const [processing, setProcessing] = useState(false);

  function loadFile(selectedFile: File) {
    if (!selectedFile.type.startsWith("image/")) return;

    if (preview) URL.revokeObjectURL(preview);
    if (resultUrl) URL.revokeObjectURL(resultUrl);

    setResultBlob(null);
    setResultUrl("");
    setFile(selectedFile);

    const url = URL.createObjectURL(selectedFile);
    setPreview(url);

    const img = new Image();

    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);
      setOriginalWidth(img.width);
      setOriginalHeight(img.height);
    };

    img.src = url;
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    loadFile(selectedFile);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files?.[0];

    if (droppedFile) {
      loadFile(droppedFile);
    }
  }

  function changeWidth(newWidth: number) {
    if (newWidth < 1) {
      setWidth(0);
      return;
    }

    setWidth(newWidth);

    if (keepRatio && originalWidth > 0) {
      const ratio = originalHeight / originalWidth;
      setHeight(Math.round(newWidth * ratio));
    }
  }

  function changeHeight(newHeight: number) {
    if (newHeight < 1) {
      setHeight(0);
      return;
    }

    setHeight(newHeight);

    if (keepRatio && originalHeight > 0) {
      const ratio = originalWidth / originalHeight;
      setWidth(Math.round(newHeight * ratio));
    }
  }

  function getExtension() {
    if (format === "image/png") return "png";
    if (format === "image/webp") return "webp";
    return "jpg";
  }

  function formatBytes(bytes: number) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat(
      (bytes / Math.pow(k, i)).toFixed(2)
    )} ${sizes[i]}`;
  }

  function createCanvasImage(
    callback: (canvas: HTMLCanvasElement) => void
  ) {
    if (!preview || width <= 0 || height <= 0) return;

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      if (format === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(img, 0, 0, width, height);

      callback(canvas);
    };

    img.src = preview;
  }

  function canvasToBlob(
    canvas: HTMLCanvasElement,
    qualityValue: number
  ): Promise<Blob | null> {
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => resolve(blob),
        format,
        qualityValue
      );
    });
  }

  function saveResult(blob: Blob) {
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    const url = URL.createObjectURL(blob);

    setResultBlob(blob);
    setResultUrl(url);
  }

  async function processResize() {
    if (!file) return;

    setProcessing(true);

    createCanvasImage(async (canvas) => {
      const blob = await canvasToBlob(canvas, quality / 100);

      if (blob) {
        saveResult(blob);
      }

      setProcessing(false);
    });
  }

  async function processCompress() {
    if (!file || targetKB <= 0) return;

    setProcessing(true);

    createCanvasImage(async (canvas) => {
      const targetBytes = targetKB * 1024;

      if (format === "image/png") {
        const blob = await canvasToBlob(canvas, 1);

        if (blob) {
          saveResult(blob);
        }

        setProcessing(false);
        return;
      }

      let minQuality = 0.05;
      let maxQuality = 1;
      let bestBlob: Blob | null = null;

      for (let i = 0; i < 14; i++) {
        const currentQuality = (minQuality + maxQuality) / 2;

        const blob = await canvasToBlob(canvas, currentQuality);

        if (!blob) break;

        if (blob.size <= targetBytes) {
          bestBlob = blob;
          minQuality = currentQuality;
        } else {
          maxQuality = currentQuality;
        }
      }

      if (!bestBlob) {
        bestBlob = await canvasToBlob(canvas, 0.05);
      }

      if (bestBlob) {
        saveResult(bestBlob);
      }

      setProcessing(false);
    });
  }

  async function processConvert() {
    if (!file) return;

    setProcessing(true);

    createCanvasImage(async (canvas) => {
      const blob = await canvasToBlob(canvas, quality / 100);

      if (blob) {
        saveResult(blob);
      }

      setProcessing(false);
    });
  }

  function downloadResult() {
    if (!resultBlob || !resultUrl) return;

    const link = document.createElement("a");

    link.href = resultUrl;

    if (mode === "resize") {
      link.download = `resizefox-${width}x${height}.${getExtension()}`;
    } else if (mode === "compress") {
      link.download = `resizefox-compressed.${getExtension()}`;
    } else {
      link.download = `resizefox-converted.${getExtension()}`;
    }

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function resetResult() {
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    setResultBlob(null);
    setResultUrl("");
  }

  function resetImage() {
    if (preview) URL.revokeObjectURL(preview);
    if (resultUrl) URL.revokeObjectURL(resultUrl);

    setFile(null);
    setPreview("");
    setResultBlob(null);
    setResultUrl("");

    setWidth(0);
    setHeight(0);
    setOriginalWidth(0);
    setOriginalHeight(0);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function changeMode(newMode: Mode) {
    setMode(newMode);
    resetResult();
  }

  const savingPercent =
    file && resultBlob
      ? Math.max(
          0,
          Math.round((1 - resultBlob.size / file.size) * 100)
        )
      : 0;


  return (
<section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
  {!file ? (
    <div
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className="mx-auto max-w-3xl cursor-pointer rounded-[32px] border-2 border-dashed border-orange-200 bg-white px-6 py-16 text-center shadow-sm transition hover:border-orange-400 hover:shadow-md"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
        🖼️
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        Drop your image here
      </h2>

      <p className="mt-2 text-slate-500">
        Or choose an image from your device
      </p>

      <button className="mt-7 rounded-xl bg-slate-950 px-7 py-3.5 font-bold text-white transition hover:bg-slate-800">
        Choose Image
      </button>

      <p className="mt-5 text-sm text-slate-400">
        JPG, PNG and WEBP supported
      </p>
    </div>
  ) : (
    <div>
      {/* TABS */}

      {!compressOnly && (
        <div className="mb-6 flex justify-center">
          <div className="grid w-full max-w-xl grid-cols-3 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {(["resize", "compress", "convert"] as Mode[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => changeMode(item)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold capitalize transition ${
                    mode === item
                      ? "bg-slate-950 text-white"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* EDITOR */}

      <div className="grid gap-0 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm lg:grid-cols-[1fr_1.05fr]">
        {/* LEFT */}

        <div className="flex flex-col justify-center bg-slate-50 p-6 sm:p-9">
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-white p-4">
            <img
              src={previewResult && resultUrl ? resultUrl : preview}
              alt={
                previewResult && resultUrl
                  ? "Compressed image preview"
                  : "Image preview"
              }
              className="max-h-[420px] max-w-full rounded-xl object-contain"
            />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span>
              {originalWidth} × {originalHeight}px
            </span>

            <span>{formatBytes(file.size)}</span>

            <span>{file.type.replace("image/", "").toUpperCase()}</span>
          </div>
        </div>

        {/* RIGHT */}

        <div className="p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-orange-500">
                ResizeFox Tool
              </p>

              <h2 className="mt-1 text-3xl font-black capitalize">
                {mode} Image
              </h2>
            </div>

            <button
              onClick={resetImage}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Change Image
            </button>
          </div>

          {/* DIMENSIONS */}

          {(mode === "resize" || mode === "compress") && (
            <>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold">
                    Width
                  </label>

                  <div className="relative mt-2">
                    <input
                      type="number"
                      value={width || ""}
                      min="1"
                      onFocus={(e) => e.target.select()}
                      onChange={(e) =>
                        changeWidth(
                          e.target.value === ""
                            ? 0
                            : Number(e.target.value)
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-10 outline-none transition focus:border-orange-400"
                    />

                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      px
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold">
                    Height
                  </label>

                  <div className="relative mt-2">
                    <input
                      type="number"
                      value={height || ""}
                      min="1"
                      onFocus={(e) => e.target.select()}
                      onChange={(e) =>
                        changeHeight(
                          e.target.value === ""
                            ? 0
                            : Number(e.target.value)
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-10 outline-none transition focus:border-orange-400"
                    />

                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      px
                    </span>
                  </div>
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={keepRatio}
                  onChange={(e) =>
                    setKeepRatio(e.target.checked)
                  }
                  className="h-4 w-4 accent-orange-500"
                />

                Maintain aspect ratio
              </label>
            </>
          )}

          {/* FORMAT */}

          <div className="mt-7">
            <label className="text-sm font-bold">
              Output format
            </label>

            <select
              value={format}
              onChange={(e) => {
                setFormat(e.target.value);
                resetResult();
              }}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-orange-400"
            >
              <option value="image/jpeg">JPG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WEBP</option>
            </select>
          </div>

          {/* QUALITY */}

          {(mode === "resize" || mode === "convert") &&
            format !== "image/png" && (
              <div className="mt-7">
                <div className="flex justify-between">
                  <label className="text-sm font-bold">
                    Quality
                  </label>

                  <span className="text-sm font-bold text-orange-500">
                    {quality}%
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) =>
                    setQuality(Number(e.target.value))
                  }
                  className="mt-4 w-full accent-orange-500"
                />
              </div>
            )}

          {/* COMPRESSION */}

          {mode === "compress" && (
            <div className="mt-7">
              <label className="text-sm font-bold">
                Target file size
              </label>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {[100, 250, 500, 1024].map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setTargetKB(size);
                      resetResult();
                    }}
                    className={`rounded-xl border px-2 py-3 text-sm font-bold transition ${
                      targetKB === size
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {size === 1024 ? "1 MB" : `${size} KB`}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-slate-500">
                  Custom size (KB)
                </label>

                <input
                  type="number"
                  value={targetKB || ""}
                  min="10"
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => {
                    setTargetKB(
                      e.target.value === ""
                        ? 0
                        : Number(e.target.value)
                    );

                    resetResult();
                  }}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-orange-400"
                />
              </div>

              {format === "image/png" && (
                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                  PNG compression is limited. JPG or WEBP usually
                  produces much smaller files.
                </div>
              )}
            </div>
          )}

          {/* PROCESS */}

          {!resultBlob && (
            <button
              disabled={
                processing ||
                width <= 0 ||
                height <= 0 ||
                (mode === "compress" && targetKB <= 0)
              }
              onClick={
                mode === "resize"
                  ? processResize
                  : mode === "compress"
                  ? processCompress
                  : processConvert
              }
              className="mt-8 w-full rounded-xl bg-orange-500 px-6 py-4 text-base font-extrabold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing
                ? "Processing..."
                : mode === "resize"
                ? "Resize Image"
                : mode === "compress"
                ? `Compress Image`
                : "Convert Image"}
            </button>
          )}

          {/* RESULT */}

          {resultBlob && (
            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
              <div className="flex items-center gap-2">
                <span>✅</span>

                <p className="font-extrabold text-green-900">
                  Your image is ready
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Original
                  </p>

                  <p className="mt-1 font-bold">
                    {formatBytes(file.size)}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    New size
                  </p>

                  <p className="mt-1 font-bold">
                    {formatBytes(resultBlob.size)}
                  </p>
                </div>
              </div>

              {resultBlob.size < file.size && (
                <div className="mt-4 rounded-xl bg-white px-4 py-3 text-sm font-bold text-green-700">
                  🎉 Saved {savingPercent}% of the original file
                  size.
                </div>
              )}

              <button
                onClick={downloadResult}
                className="mt-5 w-full rounded-xl bg-slate-950 px-6 py-4 font-extrabold text-white transition hover:bg-slate-800"
              >
                Download Image
              </button>

              <button
                onClick={resetResult}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 hover:bg-slate-50"
              >
                Change Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )}

  <input
    ref={fileInputRef}
    type="file"
    accept="image/jpeg,image/png,image/webp"
    onChange={handleFile}
    className="hidden"
  />
</section>
  );
}
