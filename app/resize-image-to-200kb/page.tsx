import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";

export const metadata: Metadata = {
  title: "Resize Image to 200KB Online Free",
  description:
    "Resize and compress an image to 200KB online for free. Fast, private and easy-to-use JPG, PNG and WebP image compressor.",
  alternates: {
    canonical: "/resize-image-to-200kb",
  },
};

export default function ResizeImageTo200KB() {
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
          Resize Image to 200KB Online
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          Compress your JPG, PNG or WebP image to approximately 200KB for free.
          Your image is processed directly in your browser.
        </p>

        <Image100KBTool targetKB={200} />

        <section style={{ textAlign: "left", marginTop: "60px" }}>
          <h2>How to Resize an Image to 200KB</h2>

          <p>
            Upload your image and ResizeFox will automatically adjust image
            quality and dimensions when needed to reduce the file size to
            approximately 200KB.
          </p>

          <h2 style={{ marginTop: "35px" }}>
            Why Compress an Image to 200KB?
          </h2>

          <p>
            A 200KB image can be useful for online forms, profile photos,
            websites and services with file-size limits. ResizeFox processes
            your image directly in your browser.
          </p>
        </section>
      </section>
    </main>
  );
}