import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";

export const metadata: Metadata = {
  title: "Resize Image to 50KB Online Free",
  description:
    "Resize and compress an image to 50KB online for free. Fast, private and easy-to-use JPG, PNG and WebP image compressor.",
  alternates: {
    canonical: "/resize-image-to-50kb",
  },
};

export default function ResizeImageTo50KB() {
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
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Resize Image to 50KB Online
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          Compress your JPG, PNG or WebP image to approximately 50KB for free.
          Your image is processed directly in your browser.
        </p>

        <Image100KBTool targetKB={50} />

        <section style={{ textAlign: "left", marginTop: "60px" }}>
          <h2>How to Resize an Image to 50KB</h2>

          <p>
            Upload your image, choose a target size of 50KB and ResizeFox will
            reduce image quality and dimensions when needed to reach the target.
          </p>

          <h2 style={{ marginTop: "35px" }}>Why Compress Images to 50KB?</h2>

          <p>
            Smaller images are useful for forms, websites, profile photos and
            services that limit upload file size. ResizeFox processes everything
            directly in your browser.
          </p>
        </section>
      </section>
    </main>
  );
}