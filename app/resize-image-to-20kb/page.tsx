import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";

export const metadata: Metadata = {
  title: "Resize Image to 20KB Online Free",
  description:
    "Resize and compress an image to 20KB online for free. Fast, private and easy-to-use JPG, PNG and WebP image compressor.",
  alternates: {
    canonical: "/resize-image-to-20kb",
  },
};

export default function ResizeImageTo20KB() {
  return (
    <main>
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ff6600",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Free • Private • No Signup
        </p>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            marginBottom: "20px",
          }}
        >
          Resize Image to 20KB Online
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          Compress your JPG, PNG or WebP image to approximately 20KB for free.
          Your image is processed directly in your browser.
        </p>

        <Image100KBTool targetKB={20} />
      </section>
    </main>
  );
}