import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";

export const metadata: Metadata = {
  title: "Compress Image to 500KB Online Free | ResizeFox",
  description:
    "Compress JPG, PNG and WebP images to 500KB online for free. Reduce image file size quickly with private browser-based processing and no signup.",
  alternates: {
    canonical: "/resize-image-to-500kb",
  },
};

export default function ResizeImageTo500KB() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="font-bold text-orange-500">
          Free • Private • No Signup
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Resize Image to 500KB Online
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Reduce your JPG, PNG or WebP image to approximately 500KB directly
          in your browser. No account or software installation required.
        </p>

        <Image100KBTool targetKB={500} />

        <section className="mx-auto mt-14 max-w-3xl text-left">
          <h2 className="text-2xl font-black">
            How to Compress an Image to 500KB
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Choose an image from your device and ResizeFox will optimize it
            toward a 500KB file-size target. Depending on the original image,
            the tool can adjust compression quality and image dimensions while
            trying to preserve useful visual detail.
          </p>

          <h2 className="mt-10 text-2xl font-black">
            When Is a 500KB Image Useful?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            A 500KB image is a practical size for many websites, online forms,
            email attachments, product images and profile photos. It can reduce
            upload time while keeping more visual detail than very small
            file-size targets such as 20KB or 50KB.
          </p>

          <h2 className="mt-10 text-2xl font-black">
            Does Compressing to 500KB Reduce Image Quality?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Some compression may be required when the original file is much
            larger than 500KB. ResizeFox attempts to use the available file
            size efficiently, but the final quality depends on the original
            image dimensions, format and visual complexity.
          </p>

          <h2 className="mt-10 text-2xl font-black">
            Private Image Processing
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Your image is processed locally in your browser. It does not need
            to be uploaded to ResizeFox servers for the compression process.
          </p>
        </section>

        <section className="mx-auto mt-14 max-w-3xl text-left">
          <h2 className="text-2xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-7 space-y-7">
            <div>
              <h3 className="text-lg font-bold">
                Will the image be exactly 500KB?
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                ResizeFox aims for approximately 500KB or below. The exact
                result depends on the original image and the amount of
                compression required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Can I compress JPG, PNG and WebP images?
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Yes. ResizeFox supports JPG, PNG and WebP images.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Is the 500KB compressor free?
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Yes. You can use the tool for free without creating an
                account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Is 500KB suitable for website images?
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                It can be. The ideal size depends on the image dimensions,
                required visual quality and the website where the image will
                be used.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}