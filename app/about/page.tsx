import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how ResizeFox provides free browser-based tools and practical guides for editing images and working with PDF documents privately.",
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
          Practical image and PDF tools that work in your browser
        </h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              What ResizeFox does
            </h2>
            <p className="mt-3">
              ResizeFox provides browser-based tools for resizing, cropping,
              rotating, compressing and converting JPG, PNG and WebP images.
              It also creates, converts, merges, separates, rotates and
              compresses PDF documents without requiring an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Files stay on your device
            </h2>
            <p className="mt-3">
              Image and PDF processing happens locally inside your web browser.
              Your selected files do not need to be uploaded to ResizeFox
              servers for the editing or conversion process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Our goal
            </h2>
            <p className="mt-3">
              The goal of ResizeFox is to make common image and document tasks
              simple, clear and free. The tools explain what changes they make,
              their practical limits and which output is appropriate for the
              user&apos;s next step.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              How our guides are prepared
            </h2>
            <p className="mt-3">
              ResizeFox tutorials are written for specific tasks such as social
              image preparation, marketplace photographs, document uploads and
              file-format decisions. Where a platform or government authority
              sets requirements, the guide identifies the relevant source and
              reminds readers to verify rules that can change. The instructions
              are reviewed against the controls available in the linked tool so
              they do not promise features the tool cannot perform.
            </p>
          </section>

          <section><h2 className="text-2xl font-bold text-slate-900">Corrections and reproducible examples</h2><p className="mt-3">Our <a href="/compression-lab" className="text-orange-700 underline">Image Compression Lab</a> uses original generated patterns and measures exports in your browser. It labels mathematical examples separately from measured results. We correct instructions when tools change and record specific changes in our <a href="/updates" className="text-orange-700 underline">update log</a>. When reporting a problem, include the page, browser and settings so we can reproduce it. Please do not send private identity documents.</p></section>
          <section className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Questions, feedback and problem reports are welcome. Email us at{" "}
              <a
                href="mailto:hmaidasouhail@gmail.com"
                className="font-bold text-orange-600 hover:text-orange-700"
              >
                hmaidasouhail@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
