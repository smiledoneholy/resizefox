import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";

export const metadata: Metadata = {
  title: "Resize Image to 250KB Online Free | ResizeFox",
  description:
    "Resize and compress JPG, PNG or WebP images to approximately 250KB online for free. Fast, private and no signup required.",
};

export default function ResizeImageTo250KBPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
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
      </section>
    </main>
  );
}