import type { Metadata } from "next";
import ImageSizeSeoPage from "../ImageSizeSeoPage";

export const metadata: Metadata = {
  title: "Resize Image to 200KB for Faster Uploads",
  description:
    "Resize an image to 200KB or less for web forms, listings and profile photos. Compress JPG, PNG or WebP files privately in your browser.",
  alternates: { canonical: "/resize-image-to-200kb" },
};

export default function ResizeImageTo200KB() {
  return <ImageSizeSeoPage
    badge="Free • Browser-Based • Simple"
    heading="Resize an Image to 200KB"
    intro="Find a useful balance between image clarity and a smaller download. ResizeFox compresses your file toward 200KB for faster uploads and everyday online use."
    path="/resize-image-to-200kb"
    targetKB={200}
    sections={[
      { heading: "Compress to 200KB Without Guesswork", body: "Upload an image and let the tool compare multiple compression levels automatically. If the full-resolution version remains too large, it progressively reduces the dimensions until it can create a result within the 200KB allowance." },
      { heading: "Where a 200KB File Fits Well", body: "This target is useful for marketplace listings, blog thumbnails, account avatars and online forms that accept a moderate image size. Compared with very small limits, 200KB leaves more space for color gradients, readable details and larger pixel dimensions." },
      { heading: "File Size and Pixel Size Are Different", body: "A 200KB file does not have one fixed width or height. Two images with identical dimensions can have different file sizes because texture, color variation and format affect compression. ResizeFox adapts to the individual source rather than applying one preset." },
    ]}
    faqHeading="200KB Compression FAQ"
    faqs={[
      { question: "Is 200KB small enough for a website?", answer: "It is a reasonable target for many content images, although thumbnails may benefit from smaller files and hero images may need more detail." },
      { question: "What happens if my original is already below 200KB?", answer: "The tool will still create an optimized copy. Compare it with the source and keep the version that best suits your needs." },
      { question: "Is the processing private?", answer: "Yes. Your browser performs the image processing locally instead of uploading the file to ResizeFox." },
    ]}
  />;
}
