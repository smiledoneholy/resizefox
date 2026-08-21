import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";
import { WebApplicationJsonLd } from "../StructuredData";

export const metadata: Metadata = {
  title: "Compress Image to 250KB Online Free",
  description:
    "Compress and resize images to 250KB online for free. Reduce JPG, PNG and WebP image size to 250KB quickly with no signup or upload required.",
  alternates: {
    canonical: "/resize-image-to-250kb",
  },
};

export default function ResizeImageTo250KBPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <WebApplicationJsonLd
        name="Resize Image to 250KB Online"
        url="https://resizefox.com/resize-image-to-250kb"
        description="Compress your JPG, PNG or WebP image to approximately 250KB for free. Your image is processed directly in your browser."
      />
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
        <p className="font-bold text-orange-500">
          Free • Private • No Signup
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Resize Image to 250KB Online
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          Compress your JPG, PNG or WebP image to approximately 250KB for free.
          Your image is processed directly in your browser.
        </p>

        <Image100KBTool targetKB={250} />
        <section className="mx-auto mt-12 max-w-3xl text-left">
  <h2 className="text-2xl font-black">
    How to Compress an Image to 250KB
  </h2>

  <p className="mt-4 leading-7 text-slate-300">
    Upload your JPG, PNG or WebP image and ResizeFox will automatically reduce
    the file size to approximately 250KB. The tool adjusts image quality and,
    when needed, image dimensions while keeping the process fast and simple.
  </p>

  <h2 className="mt-10 text-2xl font-black">
    Why Reduce an Image to 250KB?
  </h2>

  <p className="mt-4 leading-7 text-slate-300">
    Many websites, application forms and online platforms set limits on image
    file size. Compressing an image to 250KB can make uploads faster and help
    your file meet those requirements without installing any software.
  </p>

  <h2 className="mt-10 text-2xl font-black">
    Is My Image Uploaded to a Server?
  </h2>

  <p className="mt-4 leading-7 text-slate-300">
    No. ResizeFox processes your image directly in your browser, so your image
    does not need to be uploaded to our servers.
  </p>
</section>
<section className="mx-auto mt-12 max-w-3xl text-left">
  <h2 className="text-2xl font-black">
    Frequently Asked Questions
  </h2>

  <div className="mt-6 space-y-6">
    <div>
      <h3 className="text-lg font-bold">
        Can I compress an image to exactly 250KB?
      </h3>
      <p className="mt-2 leading-7 text-slate-300">
        ResizeFox aims to reduce your image to approximately 250KB or below.
        The exact result can vary depending on the original image, format and
        image complexity.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold">
        Which image formats are supported?
      </h3>
      <p className="mt-2 leading-7 text-slate-300">
        You can use JPG, PNG and WebP images with the 250KB compressor.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold">
        Is the 250KB image compressor free?
      </h3>
      <p className="mt-2 leading-7 text-slate-300">
        Yes. You can use ResizeFox for free without creating an account.
      </p>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}
