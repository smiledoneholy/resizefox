import type { Metadata } from "next";
import Link from "next/link";
import ImageTool from "../ImageTool";
import { WebApplicationJsonLd } from "../StructuredData";

export const metadata: Metadata = {
  title: "Compress JPG Images Online — Free Private JPG Compressor",
  description:
    "Compress JPG and JPEG images online for free. Reduce photo file size while controlling quality directly in your browser with no signup.",
  alternates: {
    canonical: "/compress-jpg",
  },
};

const sizeLinks = [
  { label: "Compress to 20KB", href: "/resize-image-to-20kb" },
  { label: "Compress to 50KB", href: "/resize-image-to-50kb" },
  { label: "Compress to 100KB", href: "/resize-image-to-100kb" },
  { label: "Compress to 200KB", href: "/resize-image-to-200kb" },
  { label: "Compress to 250KB", href: "/resize-image-to-250kb" },
  { label: "Compress to 500KB", href: "/resize-image-to-500kb" },
  { label: "Compress to 1MB", href: "/resize-image-to-1mb" },
];

const faqs = [
  {
    question: "Is JPG compression lossless?",
    answer:
      "Standard JPG compression is lossy. It reduces file size partly by discarding image information, so stronger compression can introduce softness, blocks or halos around detailed edges. A sensible target can make those changes difficult to notice at normal viewing size, but it is not accurate to promise zero quality loss.",
  },
  {
    question: "Are JPG and JPEG the same format?",
    answer:
      "Yes. .jpg and .jpeg are filename extensions for the same JPEG image format. ResizeFox accepts both when the browser identifies the file as a JPEG image, and downloads the compressed result as a .jpg file.",
  },
  {
    question: "What target size should I choose for a JPG?",
    answer:
      "Use the largest file size that satisfies your email, website or form limit. A detailed photo generally needs more data than a simple image. Starting with a realistic target helps preserve more detail than forcing every photo into an unnecessarily small file.",
  },
  {
    question: "Should I reduce the dimensions before compressing?",
    answer:
      "Reduce the pixel dimensions when the photo is larger than its destination requires. A camera image several thousand pixels wide does not need to remain that large for a small profile photo, email preview or website card. Resizing first often reduces the amount of compression needed.",
  },
  {
    question: "Does ResizeFox upload my JPG?",
    answer:
      "No. JPG decoding, resizing and compression happen locally in your browser. The image does not need to be uploaded to ResizeFox servers for processing.",
  },
];

export default function CompressJpgPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-950">
      <WebApplicationJsonLd
        name="ResizeFox JPG Compressor"
        url="https://resizefox.com/compress-jpg"
        description="Compress JPG and JPEG photos online for free with a target file size, a result preview and private browser-based processing."
      />

      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-20">
        <p className="font-bold text-orange-500">JPG ONLY • PRIVATE • NO SIGNUP</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Compress JPG Images Online
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Reduce JPG and JPEG photo size in your browser. Choose a maximum file
          size, preview the compressed result, compare the before-and-after sizes
          and download an optimized JPG without sending it to our servers.
        </p>
      </section>

      <ImageTool
        initialMode="compress"
        compressOnly
        previewResult
        acceptedTypes="image/jpeg"
        uploadHint="JPG and JPEG supported"
        fixedFormat="image/jpeg"
      />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Three practical steps
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            How to Compress a JPG Image
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Choose a JPG", "Select a .jpg or .jpeg photo from your device, or drag it into the upload area."],
              ["2", "Set a useful target", "Choose a maximum size that matches the destination. Resize the dimensions too if they are unnecessarily large."],
              ["3", "Inspect and download", "Review the preview, original size, compressed size and percentage saved before downloading the JPG."],
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
          <h2 className="text-3xl font-black tracking-tight">Why JPG Files Can Become Large</h2>
          <p className="mt-5 leading-8 text-slate-600">
            A JPG may be large because its pixel dimensions are far bigger than
            the intended display size, it was exported at a very high quality,
            or the photo contains noise, texture and fine detail that are harder
            to encode efficiently. Camera images can combine all three. Metadata
            can add some bytes too, but dimensions and visual complexity usually
            have a much larger effect.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-3xl font-black tracking-tight">JPG Compression and Image Quality</h2>
          <p className="mt-5 leading-8 text-slate-600">
            JPEG uses lossy compression. It represents blocks of pixels more
            efficiently and removes some visual information, especially detail
            the encoder considers less noticeable. Stronger compression normally
            creates a smaller file but may soften textures, flatten gradients or
            produce visible artifacts around text and sharp edges. ResizeFox
            searches for a JPG quality level that aims to stay within your chosen
            target, so always judge the preview as well as the file-size number.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">What JPEG Quality Percentage Means</h2>
          <p className="mt-5 leading-8 text-slate-600">
            A JPEG quality percentage is an encoder setting, not a promise that
            the saved image retains that percentage of its original detail. A
            setting of 80 does not mean “80% of the quality,” and values are not
            directly comparable between every editor or browser. On this tool,
            you choose a target file size and the compressor tests quality levels
            automatically. A larger target generally gives the encoder more room
            to preserve detail; a smaller target usually requires more loss.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-2xl font-black">When to Resize as Well as Compress</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Lower the dimensions when the image has more pixels than its final
              use needs. This is often the cleanest way to reduce a camera photo
              for email or a website. Use the <Link href="/resize-image" className="font-bold text-orange-400 underline">image resizer</Link> when dimensions are your main concern.
            </p>
          </div>
          <div className="rounded-2xl bg-orange-500 p-7 text-white">
            <h2 className="text-2xl font-black">When Compression Alone Is Enough</h2>
            <p className="mt-4 leading-7 text-orange-50">
              Keep the current dimensions when they already match the destination
              and only the file size is too high. For mixed image formats, the
              general <Link href="/compress-image" className="font-bold underline">image compressor</Link> also accepts PNG and WebP.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">JPG vs PNG vs WebP</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[
              ["JPG", "Usually a strong choice for photographs and broad compatibility. It is lossy and does not support transparency."],
              ["PNG", "Best suited to transparency, screenshots and graphics that need crisp lossless detail. Photo-like PNG files can be large."],
              ["WebP", "A modern format that can be efficient for web photos and graphics. Check the destination when a form requires JPG specifically."],
            ].map(([format, description]) => (
              <div key={format} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-bold">{format}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">JPG Compression for Everyday Tasks</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              ["Photos", "Create a lighter sharing copy while keeping the original high-resolution file safely stored."],
              ["Email", "Reduce attachment size to improve sending speed and stay below a mail provider's attachment limit."],
              ["Websites", "Use appropriately sized JPGs to reduce transferred bytes and help pages display sooner."],
              ["Online forms", "Match the form's stated file-size and dimension rules instead of compressing more than necessary."],
            ].map(([heading, body]) => (
              <div key={heading} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">{heading}</h3>
                <p className="mt-2 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-400">Privacy by design</p>
            <h2 className="mt-3 text-3xl font-black">Browser-Based JPG Processing</h2>
          </div>
          <p className="leading-8 text-slate-300">
            ResizeFox processes your JPG locally with browser image and canvas
            capabilities. The selected photo does not need to be uploaded to
            ResizeFox servers for compression, and the compressed result remains
            on your device unless you choose to send or upload it elsewhere.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight">Need a Specific JPG File Size?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Use the matching tool when a website or form gives you an exact
            maximum. The achievable visual quality still depends on the photo.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {sizeLinks.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-orange-200 bg-white px-4 py-4 text-center text-sm font-bold transition hover:border-orange-500 hover:bg-orange-50"
            >
              {tool.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">JPG Compression Questions</h2>
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
