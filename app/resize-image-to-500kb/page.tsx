import type { Metadata } from "next";
import Image100KBTool from "../resize-image-to-100kb/Image100KBTool";

export const metadata: Metadata = {
  title: "Resize Image to 500KB Online Free",
  description:
    "Resize and compress an image to 500KB online for free. Fast, private and easy-to-use JPG, PNG and WebP image compressor.",
  // 500KB
alternates: {
  canonical: "/resize-image-to-500kb",
},
};

export default function ResizeImageTo500KB() {
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
          Resize Image to 500KB Online
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          Compress your JPG, PNG or WebP image to approximately 500KB for free.
          Your image is processed directly in your browser.
        </p>

        <Image100KBTool targetKB={500} />

        <section style={{ textAlign: "left", marginTop: "60px" }}>
          <h2>How to Resize an Image to 500KB</h2>

          <p>
            Upload your image and ResizeFox will automatically optimize the
            image to keep its file size at or below approximately 500KB.
          </p>

          <h2 style={{ marginTop: "35px" }}>
            Why Reduce an Image to 500KB?
          </h2>

          <p>
            Reducing images to 500KB can make uploads faster and help meet
            file-size limits for websites, online forms and other services.
            ResizeFox processes your image directly in your browser.
          </p>
        </section>
      </section>
    </main>
  );
}