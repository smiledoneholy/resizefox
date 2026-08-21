import type { Metadata } from "next";
import Image100KBTool from "./Image100KBTool";

export const metadata: Metadata = {
  title: "Compress Image to 100KB Online Free | ResizeFox",
  description:
    "Compress and resize JPG, PNG and WebP images to 100KB online for free. Fast, private browser-based image compression with no signup required.",
  alternates: {
    canonical: "/resize-image-to-100kb",
  },
};

export default function ResizeImageTo100KB() {
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
          Resize Image to 100KB Online
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          Compress your JPG, PNG or WebP image to approximately 100KB for free.
          Your image is processed directly in your browser.
        </p>

        <Image100KBTool targetKB={100} />

        <section
          style={{
            textAlign: "left",
            marginTop: "60px",
            lineHeight: 1.7,
          }}
        >
          <h2>How to Compress an Image to 100KB</h2>

          <p>
            Upload your JPG, PNG or WebP image and ResizeFox will automatically
            reduce its file size toward 100KB. The tool adjusts image quality
            and, when necessary, image dimensions to reach the target while
            keeping the image usable.
          </p>

          <h2 style={{ marginTop: "35px" }}>
            Why Reduce an Image to 100KB?
          </h2>

          <p>
            A smaller image can upload faster and use less storage and
            bandwidth. A 100KB file size can also be useful when submitting
            profile photos, application images or other files to websites that
            impose upload-size limits.
          </p>

          <h2 style={{ marginTop: "35px" }}>
            Private Browser-Based Compression
          </h2>

          <p>
            ResizeFox processes your image directly in your browser. Your image
            does not need to be uploaded to our servers, and you do not need to
            create an account.
          </p>

          <h2 style={{ marginTop: "45px" }}>
            Frequently Asked Questions
          </h2>

          <h3 style={{ marginTop: "25px" }}>
            Can I compress an image to exactly 100KB?
          </h3>

          <p>
            ResizeFox aims to produce an image at or below approximately 100KB.
            The exact result can vary depending on the original image,
            dimensions, format and visual complexity.
          </p>

          <h3 style={{ marginTop: "25px" }}>
            Which image formats can I compress?
          </h3>

          <p>
            ResizeFox supports JPG, PNG and WebP images for the 100KB
            compression tool.
          </p>

          <h3 style={{ marginTop: "25px" }}>
            Is the 100KB image compressor free?
          </h3>

          <p>
            Yes. The tool is free to use and does not require signup.
          </p>

          <h3 style={{ marginTop: "25px" }}>
            Are my images uploaded to ResizeFox?
          </h3>

          <p>
            No. Image processing happens locally in your browser, so the image
            does not need to be sent to our servers.
          </p>
        </section>
      </section>
    </main>
  );
}