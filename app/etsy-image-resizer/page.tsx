import type { Metadata } from "next";
import Link from "next/link";
import ImageTool from "../ImageTool";
import { WebApplicationJsonLd } from "../StructuredData";

const etsyImageGuidanceUrl =
  "https://help.etsy.com/hc/en-us/articles/115015663347-Requirements-and-Best-Practices-for-Images-in-Your-Etsy-Shop";

export const metadata: Metadata = {
  title: "Etsy Image Resizer — Optimize Listing Photos Online",
  description:
    "Resize and compress Etsy listing photos online for free. Prepare clear product images directly in your browser with no signup or uploads to our servers.",
  alternates: {
    canonical: "/etsy-image-resizer",
  },
};

const faqs = [
  {
    question: "What dimensions should an Etsy listing image use?",
    answer:
      "Etsy currently recommends listing photos with both width and height at 2000 pixels or more. Treat that as platform guidance rather than a reason to enlarge a small source: upscaling cannot restore missing detail. Always recheck Etsy's official image requirements before preparing a new batch of listings.",
  },
  {
    question: "Should the first Etsy listing photo be square or landscape?",
    answer:
      "Etsy says the first listing photo should be horizontal or square so its central focal point works in cropped thumbnail views. Etsy's more detailed thumbnail advice favors horizontal images with room around the product. Whichever composition you choose, keep the important subject near the center and preview the thumbnail in Etsy's listing editor.",
  },
  {
    question: "Can I upload WebP images to Etsy?",
    answer:
      "Etsy's current supported-image list does not include WebP. ResizeFox can open a WebP source, but choose JPG or PNG as the output before uploading it to Etsy. JPG is usually practical for product photographs; PNG may suit graphics but transparent areas are not supported as transparency on Etsy.",
  },
  {
    question: "Why does my Etsy image look blurry after resizing?",
    answer:
      "A small source can become pixelated when enlarged because resizing cannot invent real product detail. Heavy JPG compression can also soften textures and edges. Start with the highest-quality original available, avoid unnecessary upscaling and use a less aggressive compression target when clarity matters.",
  },
  {
    question: "Does ResizeFox upload my product photos?",
    answer:
      "No. Resizing and compression happen locally in your browser. Your product image does not need to be uploaded to ResizeFox servers for processing.",
  },
];

export default function EtsyImageResizerPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-950">
      <WebApplicationJsonLd
        name="ResizeFox Etsy Image Resizer"
        url="https://resizefox.com/etsy-image-resizer"
        description="Resize and compress product photos for Etsy listings with adjustable dimensions, previews and private browser-based processing."
      />

      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 text-center sm:px-8 sm:pt-20">
        <p className="font-bold text-orange-500">LISTING PHOTOS • PRIVATE • NO SIGNUP</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Etsy Image Resizer for Listing Photos
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Prepare clear product photos by adjusting pixel dimensions and file
          size in your browser. Preserve the image proportions, preview the
          result and download a JPG or PNG copy ready for your listing workflow.
        </p>
      </section>

      <ImageTool initialMode="resize" previewResult />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            Listing workflow
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            How to Resize an Image for Etsy
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Choose a product photo", "Upload a JPG, PNG or WebP source. Start from the clearest original available."],
              ["2", "Set the dimensions", "Enter a width or height and leave Maintain aspect ratio enabled so the product is not stretched."],
              ["3", "Resize, then compress", "Create the resized result, choose Change Settings, open the Compress tab and set a suitable target before downloading."],
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
          <h2 className="text-3xl font-black tracking-tight">Etsy Listing Image Dimensions</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Etsy currently recommends that listing photos have both width and
            height of at least 2000 pixels. It also says the first listing image
            should be at least 635 pixels in both directions. These are Etsy&apos;s
            current platform recommendations, not a reason to enlarge a low-detail
            source or a guarantee of listing performance.
          </p>
          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6 leading-7 text-slate-700">
            Requirements and recommendations can change. Before uploading, check{" "}
            <a
              href={etsyImageGuidanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-700 underline"
            >
              Etsy&apos;s official image requirements and best practices
            </a>.
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-2xl font-black">Dimensions Matter</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Enough pixels help shoppers inspect product texture and details.
              Dimensions also give Etsy room to produce different display and
              thumbnail sizes without beginning from a tiny source.
            </p>
          </div>
          <div className="rounded-2xl bg-orange-500 p-7 text-white">
            <h2 className="text-2xl font-black">File Size Matters</h2>
            <p className="mt-4 leading-7 text-orange-50">
              Etsy warns that images larger than 1MB may not finish uploading,
              particularly on slower connections. Compression can reduce transfer
              size while keeping the selected width and height.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">Protect Product-Photo Quality</h2>
          <ul className="mt-6 space-y-4 leading-7 text-slate-600">
            <li><strong className="text-slate-900">Work from the original.</strong> Repeatedly editing and saving an already compressed JPG can accumulate visible artifacts.</li>
            <li><strong className="text-slate-900">Keep proportions locked.</strong> Changing width and height independently can distort the product&apos;s shape.</li>
            <li><strong className="text-slate-900">Inspect important details.</strong> Check texture, edges, labels and small text in the result preview.</li>
            <li><strong className="text-slate-900">Leave room around the item.</strong> Negative space gives Etsy&apos;s thumbnail crop more flexibility.</li>
            <li><strong className="text-slate-900">Avoid unnecessary compression.</strong> Choose the largest target that comfortably solves an upload problem.</li>
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">First Listing Image and Thumbnail Considerations</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Etsy uses the first photo to establish the shape shown for the rest
            of the listing and recommends a horizontal or square first image.
            Thumbnail views can crop the photo into different shapes, so keep the
            product&apos;s focal point near the center and avoid filling every edge.
            Use Etsy&apos;s thumbnail adjustment tool to preview the actual crop;
            resizing alone cannot predict every placement across the marketplace.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">Landscape Product Images</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Etsy&apos;s detailed guidance favors horizontal photos because they use
              more thumbnail space and give you flexibility when the same image is
              cropped into multiple views. Landscape is a strong starting point
              for the first listing photo.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">Square Product Images</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Etsy allows a square first image, but its best-practice section
              advises avoiding a tight square crop. If the source is square, leave
              generous space around the item so other thumbnail shapes do not cut
              off important product details.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black tracking-tight">When to Compress an Etsy Image</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Compress when the dimensions are appropriate but the file remains
            heavy or uploads slowly. If the photo is vastly larger than you need,
            resize first and compress second. The general{" "}
            <Link href="/compress-image" className="font-bold text-orange-600 underline">image compressor</Link>{" "}
            is useful when file size is the only issue, while the{" "}
            <Link href="/resize-image" className="font-bold text-orange-600 underline">image resizer</Link>{" "}
            focuses on dimensions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">JPG for Etsy Photos</h2>
            <p className="mt-4 leading-7 text-slate-600">
              JPG is supported by Etsy and often works well for photographs. It
              can achieve a practical file size through lossy compression, but
              strong settings may soften texture or add artifacts. Use the{" "}
              <Link href="/compress-jpg" className="font-bold text-orange-600 underline">JPG compressor</Link>{" "}
              for a JPG-focused workflow.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">PNG for Etsy Graphics</h2>
            <p className="mt-4 leading-7 text-slate-600">
              PNG is supported and can preserve crisp graphic detail, but photo-like
              PNG files may remain large. Etsy says transparent PNG backgrounds are
              not supported as transparency and can appear black, so flatten the
              background before uploading when transparency is present.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-amber-50 p-7">
          <h2 className="text-3xl font-black tracking-tight">Why Upscaling Can Reduce Quality</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Increasing width and height adds calculated pixels, not real product
            detail. Etsy notes that enlargement can reduce resolution and cause
            pixelation. If a source is below the recommended dimensions, use a
            higher-resolution original or retake the photo when possible instead
            of expecting software enlargement to make it genuinely sharper.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-400">Privacy by design</p>
            <h2 className="mt-3 text-3xl font-black">Product Photos Stay in Your Browser</h2>
          </div>
          <p className="leading-8 text-slate-300">
            ResizeFox uses browser image and canvas capabilities to resize and
            compress your product photo locally. The source does not need to be
            uploaded to ResizeFox servers. You decide when to download the result
            and upload it to your Etsy listing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight">Useful File-Size Tools</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            If you have chosen a specific target after checking the current Etsy
            guidance, these tools provide a focused workflow.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-4">
          <Link
            href="/resize-image-to-500kb"
            className="rounded-xl border border-orange-200 bg-white px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50"
          >
            Resize to 500KB
          </Link>
          <Link
            href="/resize-image-to-1mb"
            className="rounded-xl border border-orange-200 bg-white px-4 py-4 text-center font-bold transition hover:border-orange-500 hover:bg-orange-50"
          >
            Resize to 1MB
          </Link>
        </div>
        <p className="mt-6 text-center leading-7 text-slate-600">
          Sending product proofs or originals by email? See the{" "}
          <Link href="/compress-image-for-email" className="font-bold text-orange-600 underline">
            email image compression guide
          </Link>.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">Troubleshooting</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Troubleshooting Etsy Image Uploads</h2>
          <ul className="mt-7 space-y-4 leading-7 text-slate-600">
            <li><strong className="text-slate-900">The upload stalls.</strong> Try a lighter file, confirm the connection is stable and consult Etsy&apos;s current troubleshooting guidance.</li>
            <li><strong className="text-slate-900">The image looks soft.</strong> Return to the highest-resolution original and avoid enlarging a small source or applying an overly small target.</li>
            <li><strong className="text-slate-900">The thumbnail cuts off the product.</strong> Add space around the subject and adjust the thumbnail crop inside Etsy.</li>
            <li><strong className="text-slate-900">Transparent areas turn black.</strong> Flatten the PNG onto an appropriate solid background before uploading.</li>
            <li><strong className="text-slate-900">The format is rejected.</strong> Export as a currently supported Etsy format such as JPG or PNG; do not upload WebP directly.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Etsy Listing Image Questions</h2>
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
