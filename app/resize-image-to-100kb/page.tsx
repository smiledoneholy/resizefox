import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resize Image to 100KB Online Free",
  description:
    "Resize and compress an image to 100KB online for free. Fast, private and easy-to-use JPG, PNG and WebP image compressor.",
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

        <div
          style={{
            border: "2px dashed #ff6600",
            borderRadius: "20px",
            padding: "60px 20px",
            marginBottom: "60px",
          }}
        >
          <h2>Compress an Image to 100KB</h2>

          <p style={{ margin: "15px 0 25px" }}>
            Upload your image to get started.
          </p>

          <button
            style={{
              background: "#ff6600",
              color: "white",
              border: "none",
              padding: "16px 30px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Upload Image
          </button>
        </div>

        <section style={{ textAlign: "left" }}>
          <h2>How to Resize an Image to 100KB</h2>

          <p>
            ResizeFox makes it easy to reduce the file size of JPG, PNG and WebP
            images. Choose your image, compress it toward the 100KB target and
            download the optimized image.
          </p>

          <h2 style={{ marginTop: "35px" }}>Why Use ResizeFox?</h2>

          <p>
            ResizeFox processes images directly in your browser. There is no
            signup required, and your images do not need to be uploaded to our
            servers.
          </p>
        </section>
      </section>
    </main>
  );
}