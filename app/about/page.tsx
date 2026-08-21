import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how ResizeFox provides simple, fast and free browser-based tools for resizing and compressing images privately on your device.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="font-bold text-orange-500">ABOUT RESIZEFOX</p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">
          Simple image tools that work in your browser
        </h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              What ResizeFox does
            </h2>
            <p className="mt-3">
              ResizeFox provides browser-based tools for resizing, compressing
              and converting JPG, PNG and WebP images. You can adjust image
              dimensions, reduce a file toward a specific size, or create a
              copy in another supported format without installing software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Images stay on your device
            </h2>
            <p className="mt-3">
              Image processing happens locally inside your web browser. Your
              images do not need to be uploaded to ResizeFox servers for the
              resizing, compression or conversion process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Our goal
            </h2>
            <p className="mt-3">
              The goal of ResizeFox is to make common image tasks simple, fast
              and free. The tools are designed to be straightforward: choose an
              image, select the result you need and download the processed copy.
            </p>
          </section>

          <section className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Questions, feedback and problem reports are welcome. Email us at{" "}
              <a
                href="mailto:hello@resizefox.com"
                className="font-bold text-orange-600 hover:text-orange-700"
              >
                hello@resizefox.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
