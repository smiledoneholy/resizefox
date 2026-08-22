import type { Metadata } from "next";
import Link from "next/link";
import ImageTool from "../ImageTool";
import { WebApplicationJsonLd } from "../StructuredData";

export const metadata: Metadata = {
  title: "Compress Images Online Free — Private & Fast",
  description:
    "Compress JPG, PNG and WebP images online for free. Reduce image file size directly in your browser with no signup or uploads to our servers.",
  alternates: {
    canonical: "/compress-image",
  },
};

const exactSizeTools = [
  { label: "20KB", href: "/resize-image-to-20kb" },
  { label: "50KB", href: "/resize-image-to-50kb" },
  { label: "100KB", href: "/resize-image-to-100kb" },
  { label: "200KB", href: "/resize-image-to-200kb" },
  { label: "250KB", href: "/resize-image-to-250kb" },
  { label: "500KB", href: "/resize-image-to-500kb" },
  { label: "1MB", href: "/resize-image-to-1mb" },
];

const faqs = [
  {
    question: "Which image formats can I compress?",
    answer:
      "ResizeFox accepts JPG, PNG and WebP images. You can save the compressed result as JPG, PNG or WebP, depending on the balance of file size, image detail and transparency you need.",
  },
  {
    question: "Will compressing an image reduce its quality?",
    answer:
      "Compression can remove some image detail, especially at very small file-size targets. Start with a realistic target and compare the preview with the original. If the result looks soft or blocky, use a larger target or reduce the dimensions before applying heavy compression.",
  },
  {
    question: "Does ResizeFox upload my image?",
    answer:
      "No. The compression work happens locally in your browser. Your image does not need to be uploaded to ResizeFox servers for processing.",
  },
  {
    question: "Should I resize or compress my image?",
    answer:
      "Resize when the pixel dimensions are larger than the place where the image will appear. Compress when the dimensions are already suitable but the file still contains more data than you need. For the biggest reduction, resizing first and then compressing often works best.",
  },
  {
    question: "Can every image reach the same file size?",
    answer:
      "No. Photographs with fine detail, noise or many colors usually need more data than simple graphics. Reaching a very small target may require smaller dimensions or a more efficient output format, and the final size can vary by image.",
  },
];

export default function CompressImagePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-950">
      <WebApplicationJsonLd
        name="ResizeFox Image Compressor"
        url="https://resizefox.com/compress-image"
        description="Compress JPG, PNG and WebP images online for free. Reduce image file size directly in your browser with no signup or uploads to ResizeFox servers."
      />

      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-20">
        <p className="font-bold text-orange-500">FREE • PRIVATE • NO SIGNUP</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Compress Images Online Free
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Reduce the file size of JPG, PNG and WebP images without sending them
          to our servers. Choose a sensible maximum size, compare the result and
          download the optimized image directly from your browser.
        </p>
      </section>

      <ImageTool initialMode="compress" compressOnly previewResult />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Three simple steps
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              How to Compress an Image Online
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Choose an image", "Upload a JPG, PNG or WebP file from your device."],
              ["2", "Set the output", "Choose a format and a maximum file-size target that suits where the image will be used."],
              ["3", "Review and download", "Compare the original and compressed sizes, check the preview and download the result."],
            ].map(([number, heading, body]) => (
              <div key={number} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-black text-white">
                  {number}
                </div>
                <h3 className="mt-5 text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div>
          <h2 className="text-3xl font-black tracking-tight">What Image Compression Does</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Image compression reduces the amount of data needed to store a picture.
            Depending on the format, it can simplify color information, encode repeated
            patterns more efficiently or discard detail that is difficult to notice at
            normal viewing size. The goal is not simply to make a number smaller: it is
            to create a file that remains clear enough for its intended use while taking
            less space and transferring faster.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">JPG vs PNG vs WebP Compression</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">JPG</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Usually the practical choice for photographs. JPG can become much smaller
                as quality is reduced, but repeated compression can introduce blockiness
                around edges and fine detail. For a photo-focused workflow with JPG input
                and output, use the{" "}
                <Link href="/compress-jpg" className="font-bold text-orange-600 underline">
                  dedicated JPG compressor
                </Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">PNG</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Useful for graphics, screenshots and transparency. Detailed photographic
                PNG files can remain large, so converting to JPG or WebP may be more
                effective when transparency is not required.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">WebP</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A modern option for photos and web graphics. WebP often keeps comparable
                visual quality at a smaller size, although the result still depends on
                the source image and selected quality.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">
            How to Reduce File Size Without Ruining Quality
          </h2>
          <ul className="mt-6 space-y-4 leading-7 text-slate-600">
            <li><strong className="text-slate-900">Start with the final use.</strong> A thumbnail, application photo and full-width website image do not need the same dimensions or quality.</li>
            <li><strong className="text-slate-900">Avoid an unnecessarily tiny target.</strong> Give detailed photographs more room than simple icons or flat graphics.</li>
            <li><strong className="text-slate-900">Choose the right format.</strong> JPG works well for photos, PNG protects sharp graphics and transparency, and WebP can be efficient for web use.</li>
            <li><strong className="text-slate-900">Inspect the preview.</strong> Look closely at faces, text, gradients and detailed edges before downloading.</li>
            <li><strong className="text-slate-900">Keep the original file.</strong> Work from the original when trying another target instead of repeatedly compressing an already compressed result.</li>
          </ul>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-2xl font-black">When to Resize an Image</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Resize when the pixel dimensions are larger than the destination needs.
              A camera photo several thousand pixels wide wastes space when it will only
              appear as a small profile image or email preview.
            </p>
          </div>
          <div className="rounded-2xl bg-orange-500 p-7 text-white">
            <h2 className="text-2xl font-black">When to Compress an Image</h2>
            <p className="mt-4 leading-7 text-orange-50">
              Compress when the dimensions are already appropriate but the file remains
              too heavy. Compression changes how image data is stored and can reduce size
              without changing width and height. If stronger reduction is needed, lower
              the width and height before compressing again.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">Common Reasons Images Are Too Large</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "The pixel dimensions are much larger than the display area.",
              "A photograph was saved as PNG when transparency was not needed.",
              "The camera or editor exported at maximum quality.",
              "Noise, texture and fine detail make the image harder to compress.",
              "The file was prepared for print instead of screen use.",
              "An application or website enforces a strict upload-size limit.",
            ].map((reason) => (
              <div key={reason} className="rounded-xl border border-slate-200 bg-white p-5 leading-7 text-slate-600">
                {reason}
              </div>
            ))}
          </div>
          <p className="mt-6 leading-7 text-slate-600">
            Preparing photos specifically as attachments? The{" "}
            <Link
              href="/compress-image-for-email"
              className="font-bold text-orange-600 underline"
            >
              email image preparation guide
            </Link>{" "}
            explains combined attachment sizes, dimensions and format choices.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-400">Privacy by design</p>
            <h2 className="mt-3 text-3xl font-black">Browser-Based Image Processing</h2>
          </div>
          <p className="leading-8 text-slate-300">
            ResizeFox performs the compression work inside your browser using local image
            and canvas capabilities. The image you choose does not need to be uploaded to
            ResizeFox servers, which is especially useful for personal photos, application
            images and unpublished work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight">Need a Specific Maximum File Size?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Use a focused ResizeFox tool when a form or website gives you a specific
            upload limit. Results aim to stay at or below the selected target, but the
            exact size depends on the image.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {exactSizeTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-orange-200 bg-white px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50"
            >
              {tool.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Image Compression Questions</h2>
          <div className="mt-8 space-y-7">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
