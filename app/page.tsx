"use client";

import { ChangeEvent, useState } from "react";

type Mode = "resize" | "compress";

export default function Home() {
  const [mode, setMode] = useState<Mode>("resize");

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

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

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

  async function processResize() {
    if (!file) return;

    setProcessing(true);

    createCanvasImage(async (canvas) => {
      const blob = await canvasToBlob(
        canvas,
        quality / 100
      );

      if (blob) {
        saveResult(blob);
      }

      setProcessing(false);
    });
  }

  async function processCompress() {
    if (!file) return;

    setProcessing(true);

    createCanvasImage(async (canvas) => {
      const targetBytes = targetKB * 1024;

      // PNG does not respond to quality reduction
      // the same way as JPG / WebP.
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

      for (let i = 0; i < 12; i++) {
        const currentQuality =
          (minQuality + maxQuality) / 2;

        const blob = await canvasToBlob(
          canvas,
          currentQuality
        );

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

  function saveResult(blob: Blob) {
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    const url = URL.createObjectURL(blob);

    setResultBlob(blob);
    setResultUrl(url);
  }

  function downloadResult() {
    if (!resultBlob || !resultUrl) return;

    const link = document.createElement("a");

    link.href = resultUrl;

    link.download =
      mode === "compress"
        ? `resizefox-compressed.${getExtension()}`
        : `resizefox-${width}x${height}.${getExtension()}`;

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function resetImage() {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    setFile(null);
    setPreview("");
    setResultBlob(null);
    setResultUrl("");

    setWidth(0);
    setHeight(0);
    setOriginalWidth(0);
    setOriginalHeight(0);
  }

  const savingPercent =
    file && resultBlob
      ? Math.max(
          0,
          Math.round(
            (1 - resultBlob.size / file.size) * 100
          )
        )
      : 0;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-14">

        <div className="text-center">
          <div className="mb-4 text-5xl">🦊</div>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Resize & Compress Images Online
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Resize, compress and convert images for free.
            Fast, private and no signup required.
          </p>
        </div>

        {!file ? (
          <label className="mx-auto mt-10 block max-w-2xl cursor-pointer rounded-3xl border-2 border-dashed border-gray-300 p-12 text-center transition hover:border-gray-500">

            <p className="text-xl font-semibold">
              Drop your image here
            </p>

            <p className="mt-2 text-gray-500">
              JPG, PNG and WEBP
            </p>

            <span className="mt-6 inline-block rounded-xl bg-black px-7 py-3 font-semibold text-white">
              Choose Image
            </span>

            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFile}
              className="hidden"
            />

          </label>
        ) : (
          <div className="mx-auto mt-10 max-w-5xl">

            <div className="mb-6 flex justify-center">
              <div className="flex rounded-xl bg-gray-100 p-1">

                <button
                  onClick={() => {
                    setMode("resize");
                    setResultBlob(null);
                    setResultUrl("");
                  }}
                  className={`rounded-lg px-6 py-2 font-semibold ${
                    mode === "resize"
                      ? "bg-black text-white"
                      : "text-gray-600"
                  }`}
                >
                  Resize
                </button>

                <button
                  onClick={() => {
                    setMode("compress");
                    setResultBlob(null);
                    setResultUrl("");
                  }}
                  className={`rounded-lg px-6 py-2 font-semibold ${
                    mode === "compress"
                      ? "bg-black text-white"
                      : "text-gray-600"
                  }`}
                >
                  Compress
                </button>

              </div>
            </div>

            <div className="grid gap-8 rounded-3xl border border-gray-200 p-6 shadow-sm md:grid-cols-2">

              <div>
                <img
                  src={preview}
                  alt="Image preview"
                  className="max-h-96 w-full rounded-2xl object-contain"
                />

                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>
                    {originalWidth} × {originalHeight}px
                  </p>

                  <p className="mt-1">
                    Original size: {formatBytes(file.size)}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  {mode === "resize"
                    ? "Resize Image"
                    : "Compress Image"}
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm font-medium">
                      Width
                    </label>

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
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Height
                    </label>

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
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
                    />
                  </div>

                </div>

                <label className="mt-5 flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={keepRatio}
                    onChange={(e) =>
                      setKeepRatio(e.target.checked)
                    }
                  />

                  Maintain aspect ratio
                </label>

                <div className="mt-6">

                  <label className="text-sm font-medium">
                    Output format
                  </label>

                  <select
                    value={format}
                    onChange={(e) => {
                      setFormat(e.target.value);
                      setResultBlob(null);
                      setResultUrl("");
                    }}
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
                  >

                    <option value="image/jpeg">
                      JPG
                    </option>

                    <option value="image/png">
                      PNG
                    </option>

                    <option value="image/webp">
                      WEBP
                    </option>

                  </select>
                </div>

                {mode === "resize" &&
                  format !== "image/png" && (
                    <div className="mt-6">

                      <div className="flex justify-between">
                        <label className="text-sm font-medium">
                          Quality
                        </label>

                        <span className="text-sm text-gray-500">
                          {quality}%
                        </span>
                      </div>

                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={quality}
                        onChange={(e) =>
                          setQuality(
                            Number(e.target.value)
                          )
                        }
                        className="mt-3 w-full"
                      />

                    </div>
                  )}

                {mode === "compress" && (
                  <div className="mt-6">

                    <label className="text-sm font-medium">
                      Target file size
                    </label>

                    <div className="mt-3 grid grid-cols-4 gap-2">

                      {[100, 250, 500, 1024].map(
                        (size) => (
                          <button
                            key={size}
                            onClick={() =>
                              setTargetKB(size)
                            }
                            className={`rounded-lg border px-2 py-2 text-sm ${
                              targetKB === size
                                ? "border-black bg-black text-white"
                                : "border-gray-300"
                            }`}
                          >
                            {size === 1024
                              ? "1 MB"
                              : `${size} KB`}
                          </button>
                        )
                      )}

                    </div>

                    <div className="mt-3">

                      <label className="text-xs text-gray-500">
                        Custom size (KB)
                      </label>

                      <input
                        type="number"
                        value={targetKB || ""}
                        min="10"
                        onFocus={(e) =>
                          e.target.select()
                        }
                        onChange={(e) =>
                          setTargetKB(
                            e.target.value === ""
                              ? 0
                              : Number(e.target.value)
                          )
                        }
                        className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3"
                      />

                    </div>

                    {format === "image/png" && (
                      <p className="mt-3 text-sm text-amber-600">
                        PNG compression is limited.
                        For smaller files, JPG or WEBP
                        usually works better.
                      </p>
                    )}

                  </div>
                )}

                {!resultBlob && (
                  <button
                    disabled={processing}
                    onClick={
                      mode === "resize"
                        ? processResize
                        : processCompress
                    }
                    className="mt-7 w-full rounded-xl bg-black px-6 py-3 font-semibold text-white disabled:opacity-50"
                  >
                    {processing
                      ? "Processing..."
                      : mode === "resize"
                      ? "Resize Image"
                      : `Compress to ${targetKB} KB`}
                  </button>
                )}

                {resultBlob && (
                  <div className="mt-7 rounded-2xl bg-gray-50 p-5">

                    <p className="font-semibold">
                      Image ready 🎉
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">

                      <div>
                        <p className="text-gray-500">
                          Original
                        </p>

                        <p className="font-semibold">
                          {formatBytes(file.size)}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">
                          New size
                        </p>

                        <p className="font-semibold">
                          {formatBytes(
                            resultBlob.size
                          )}
                        </p>
                      </div>

                    </div>

                    {resultBlob.size < file.size && (
                      <p className="mt-3 text-sm font-medium">
                        Saved {savingPercent}%
                      </p>
                    )}

                    <button
                      onClick={downloadResult}
                      className="mt-4 w-full rounded-xl bg-black px-6 py-3 font-semibold text-white"
                    >
                      Download Image
                    </button>

                    <button
                      onClick={() => {
                        setResultBlob(null);

                        if (resultUrl) {
                          URL.revokeObjectURL(
                            resultUrl
                          );
                        }

                        setResultUrl("");
                      }}
                      className="mt-2 w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold"
                    >
                      Change Settings
                    </button>

                  </div>
                )}

                <button
                  onClick={resetImage}
                  className="mt-3 w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold"
                >
                  Choose Another Image
                </button>

              </div>
            </div>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-gray-500">
          Your images are processed directly in your
          browser and are never uploaded to our servers.
        </p>

      </section>
    </main>
  );
}