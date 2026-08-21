import Link from "next/link";
import { WebSiteJsonLd } from "./StructuredData";
import ImageTool from "./ImageTool";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-950">
      <WebSiteJsonLd />
      {/* HERO */}

      <section className="mx-auto max-w-5xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
          <span>⚡</span>
          Free image tools. No signup required.
        </div>

        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Resize, Compress & Convert
          <span className="block text-orange-500">
            Images Online — Free
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Fast and private image tools that work directly in your
          browser. Your images are never uploaded to our servers.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm font-medium text-slate-600">
          <span>✓ JPG, PNG & WEBP</span>
          <span>✓ No signup</span>
          <span>✓ Browser processing</span>
          <span>✓ Free to use</span>
        </div>
      </section>
      {/* POPULAR IMAGE SIZE TOOLS */}
<section id="image-tools" className="mx-auto max-w-5xl scroll-mt-6 px-5 pb-6 sm:px-8">
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <div className="text-center">
      <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
        Popular Image Size Tools
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-slate-600">
        Quickly compress your image to a specific file size.
      </p>
    </div>

    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      <Link href="/resize-image-to-20kb" className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50">
        20KB
      </Link>

      <Link href="/resize-image-to-50kb" className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50">
        50KB
      </Link>

      <Link href="/resize-image-to-100kb" className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50">
        100KB
      </Link>

      <Link href="/resize-image-to-200kb" className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50">
        200KB
      </Link>
      <Link
      href="/resize-image-to-250kb"
       className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-400 hover:bg-orange-50"
      >
        250KB
      </Link>
      <Link href="/resize-image-to-500kb" className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50">
        500KB
      </Link>
      
      <Link
      href="/resize-image-to-1mb" className="rounded-xl border border-orange-200 px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50"
>      1MB
      </Link>
    </div>
  </div>
</section>
      {/* TOOL */}

      <ImageTool />

      {/* BENEFITS */}

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 p-6">
            <div className="text-3xl">🔒</div>

            <h3 className="mt-4 text-lg font-bold">
              Private by design
            </h3>

            <p className="mt-2 leading-7 text-slate-500">
              Your images are processed locally in your browser and
              never uploaded to our servers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 p-6">
            <div className="text-3xl">⚡</div>

            <h3 className="mt-4 text-lg font-bold">
              Fast processing
            </h3>

            <p className="mt-2 leading-7 text-slate-500">
              Resize and compress images quickly without waiting for
              server uploads or queues.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 p-6">
            <div className="text-3xl">💸</div>

            <h3 className="mt-4 text-lg font-bold">
              Free to use
            </h3>

            <p className="mt-2 leading-7 text-slate-500">
              No account, no subscription and no complicated setup.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <p className="font-bold text-orange-500">
            SIMPLE & FAST
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            How ResizeFox works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["1", "Upload", "Choose or drag your JPG, PNG or WEBP image."],
            ["2", "Customize", "Resize, compress or convert your image."],
            ["3", "Download", "Download your optimized image instantly."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl bg-white p-7 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-white">
                {number}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {title}
              </h3>

              <p className="mt-2 leading-7 text-slate-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <div className="text-center">
            <p className="font-bold text-orange-500">FAQ</p>

            <h2 className="mt-2 text-3xl font-black">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {[
              [
                "Is ResizeFox free?",
                "Yes. ResizeFox is free to use and does not require an account.",
              ],
              [
                "Are my images uploaded?",
                "No. Image processing happens directly inside your browser.",
              ],
              [
                "Which image formats are supported?",
                "ResizeFox currently supports JPG, PNG and WEBP images.",
              ],
              [
                "Can I compress an image to a specific size?",
                "Yes. You can choose common targets such as 100 KB, 250 KB, 500 KB and 1 MB, or enter your own size.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="font-bold">{question}</h3>

                <p className="mt-2 leading-7 text-slate-500">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* POPULAR IMAGE COMPRESSION TOOLS */}
<section className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        Popular Image Compression Tools
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
        Quickly compress your images to a specific file size. Free, private
        and processed directly in your browser.
      </p>
    </div>

    <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <a
        href="/resize-image-to-20kb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 20KB
      </a>

      <a
        href="/resize-image-to-50kb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 50KB
      </a>

      <a
        href="/resize-image-to-100kb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 100KB
      </a>

      <a
        href="/resize-image-to-200kb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 200KB
      </a>

      <a
        href="/resize-image-to-250kb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 250KB
      </a>

      <a
        href="/resize-image-to-500kb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 500KB
      </a>

      <a
        href="/resize-image-to-1mb"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center font-bold text-slate-900 transition hover:border-orange-400 hover:bg-orange-50"
      >
        Compress to 1MB
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
