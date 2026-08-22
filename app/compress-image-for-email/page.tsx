import type { Metadata } from "next";
import Link from "next/link";
import ImageTool from "../ImageTool";
import { WebApplicationJsonLd } from "../StructuredData";

export const metadata: Metadata = {
  title: "Compress Images for Email Attachments — Free Online Tool",
  description:
    "Compress photos and images for email attachments online for free. Reduce JPG, PNG and WebP file size directly in your browser with no signup.",
  alternates: {
    canonical: "/compress-image-for-email",
  },
};

const faqs = [
  {
    question: "What size should an image be for email?",
    answer:
      "There is no single size that suits every email provider, recipient or purpose. Check the sender's current attachment rules, count every file in the message and use the largest practical target that fits comfortably. If you are sending several photos, budget for their combined size rather than treating each image separately.",
  },
  {
    question: "Does email compression change image quality?",
    answer:
      "It can. JPG and lossy WebP reduce size partly by removing visual information, while PNG uses lossless encoding but may remain larger. Strong targets can make photographs look soft or blocky, so inspect the preview and avoid compressing more than the message requires.",
  },
  {
    question: "Should I send a JPG, PNG or WebP image?",
    answer:
      "JPG is often convenient for ordinary photographs and broad compatibility. PNG is useful for transparency, screenshots and sharp graphics, but photo-like PNG files can be large. WebP can be efficient, although you should confirm that the recipient's software or upload workflow accepts it.",
  },
  {
    question: "Can I compress several email photos at once?",
    answer:
      "This tool processes one image at a time. When sending several photos, compress each one and then check their combined size in the email composer. For a very large collection, a cloud-sharing link may be more practical than many attachments.",
  },
  {
    question: "Are my email photos uploaded to ResizeFox?",
    answer:
      "No. ResizeFox processes the selected image locally in your browser. The image does not need to be uploaded to ResizeFox servers for compression.",
  },
];

export default function CompressImageForEmailPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-950">
      <WebApplicationJsonLd
        name="ResizeFox Email Image Compressor"
        url="https://resizefox.com/compress-image-for-email"
        description="Compress JPG, PNG and WebP images for email attachments with a preview, file-size comparison and private browser-based processing."
      />

      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-20">
        <p className="font-bold text-orange-500">EMAIL-READY • PRIVATE • NO SIGNUP</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Compress Images for Email Attachments
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Make photos and graphics easier to attach by reducing their file size
          before you open your email composer. Process JPG, PNG and WebP images
          locally, compare the result and download a lighter copy.
        </p>
      </section>

      <ImageTool initialMode="compress" compressOnly previewResult />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Before you attach
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            How to Compress Photos Before Emailing
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Choose the image", "Select a JPG, PNG or WebP photo or graphic from your device."],
              ["2", "Choose a target", "Allow room for the message and any other attachments, then set a sensible maximum file size."],
              ["3", "Review before sending", "Inspect the preview, compare both sizes and download the compressed image to attach to your email."],
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
          <h2 className="text-3xl font-black tracking-tight">Why Email Attachments Can Be Too Large</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Modern phones and cameras create images with millions of pixels,
            often at settings intended for editing or printing. A single original
            may contain far more detail than someone needs to view it in an email.
            The total message also matters: text, signatures and every attachment
            contribute, and the recipient&apos;s system may enforce a different rule
            from the sender&apos;s provider.
          </p>
          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6 leading-7 text-slate-700">
            Attachment policies are not universal and can change. Check the
            current guidance for your account. See Google&apos;s official{" "}
            <a
              href="https://support.google.com/mail/answer/6584?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-700 underline"
            >
              Gmail attachment guidance
            </a>{" "}
            or Microsoft&apos;s official advice on{" "}
            <a
              href="https://support.microsoft.com/en-us/outlook/reduce-attachment-size-to-send-large-files-with-outlook"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-700 underline"
            >
              reducing attachment size in Outlook
            </a>.
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-2xl font-black">File Size</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Measured in KB or MB, file size determines how much data the
              attachment adds to the message. Compression changes the stored
              data and can reduce size without necessarily changing dimensions.
            </p>
          </div>
          <div className="rounded-2xl bg-orange-500 p-7 text-white">
            <h2 className="text-2xl font-black">Image Dimensions</h2>
            <p className="mt-4 leading-7 text-orange-50">
              Width and height describe the pixel grid. A photo can have suitable
              file size but excessive dimensions, or useful dimensions but a heavy
              file. Use the <Link href="/resize-image" className="font-bold underline">image resizer</Link> when the pixels are the main problem.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">Choosing a Sensible Target Size</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Start from the email provider&apos;s current rule and the number of files
            you plan to attach. Leave a margin rather than aiming at the absolute
            maximum, because the complete encoded message can be larger than the
            files shown on disk. Choose the least aggressive target that solves
            the problem, then inspect faces, text and detailed edges in the preview.
            If one target looks rough, try a larger one or reduce the dimensions.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">One Photo vs Several Photos</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">Sending one image</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Give a single important photo enough room to preserve useful
                detail. A portfolio sample or product photo may deserve a larger
                target than a casual snapshot.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">Sending a group</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Add the compressed sizes together. Four files that each fit alone
                may still make the combined message too large. Compress individually
                or use a sharing link when the collection is substantial.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">JPG, PNG or WebP for Email?</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[
              ["JPG for photos", "JPG often gives photographs a practical balance of compatibility and size. Compression is lossy, so very small targets can reduce visible detail. For a JPG-only workflow, use the dedicated JPG compressor."],
              ["PNG for graphics", "PNG preserves transparency and sharp graphic detail with lossless encoding. A photographic PNG may remain much larger because it cannot discard detail in the same way as lossy JPG."],
              ["WebP for efficiency", "WebP can produce smaller photo or graphic files at useful visual quality. It is a good option when you know the recipient's software supports the format."],
            ].map(([heading, body]) => (
              <div key={heading} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-7 text-slate-600">
            Need focused JPG output? Try the{" "}
            <Link href="/compress-jpg" className="font-bold text-orange-600 underline">
              JPG compressor
            </Link>. For a general-purpose workflow, use the{" "}
            <Link href="/compress-image" className="font-bold text-orange-600 underline">
              image compressor
            </Link>.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">When Resizing Dimensions Helps</h2>
          <p className="mt-5 leading-8 text-slate-600">
            If a phone photo is several thousand pixels wide but will only be
            viewed inside an email, reducing width and height can remove data the
            recipient is unlikely to use. Resizing first may preserve better visual
            quality than forcing a full-resolution photo into an extremely small
            target. Keep the aspect ratio locked to avoid stretching the image.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-400">Privacy by design</p>
            <h2 className="mt-3 text-3xl font-black">Private Browser-Based Processing</h2>
          </div>
          <p className="leading-8 text-slate-300">
            ResizeFox compresses the selected image locally using browser image
            and canvas capabilities. The photo does not need to be uploaded to
            ResizeFox servers. Only the downloaded result is available for you
            to attach in your own email service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight">Useful Email Attachment Targets</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            These tools are convenient when you have already chosen a suitable
            maximum. They are not statements about any provider&apos;s current limit.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["100KB", "/resize-image-to-100kb"],
            ["200KB", "/resize-image-to-200kb"],
            ["500KB", "/resize-image-to-500kb"],
            ["1MB", "/resize-image-to-1mb"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-orange-200 bg-white px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">Troubleshooting</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">If the Image Still Will Not Send</h2>
          <ul className="mt-7 space-y-4 leading-7 text-slate-600">
            <li><strong className="text-slate-900">Check the combined size.</strong> Other attachments may be using the available allowance.</li>
            <li><strong className="text-slate-900">Try a smaller target.</strong> Return to the original image, choose a lower maximum and inspect the new preview.</li>
            <li><strong className="text-slate-900">Reduce dimensions.</strong> An oversized camera photo may need fewer pixels as well as stronger compression.</li>
            <li><strong className="text-slate-900">Confirm the format.</strong> The recipient&apos;s system may accept JPG more reliably than a newer format.</li>
            <li><strong className="text-slate-900">Use a sharing link.</strong> For many originals or files that must retain maximum detail, cloud sharing may be more appropriate.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Email Image Compression Questions</h2>
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
