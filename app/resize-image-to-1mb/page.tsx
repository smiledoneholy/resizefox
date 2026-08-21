import type { Metadata } from "next";
import ImageSizeSeoPage from "../ImageSizeSeoPage";

export const metadata: Metadata = {
  title: "Compress Image Under 1MB Online Free",
  description:
    "Compress a large JPG, PNG or WebP image under 1MB while retaining more detail. Free browser-based tool for portals, sharing and storage.",
  alternates: { canonical: "/resize-image-to-1mb" },
};

export default function ResizeImageTo1MB() {
  return <ImageSizeSeoPage
    badge="Private • High Detail • Free"
    heading="Compress an Image Under 1MB"
    intro="Bring a large photo below a common 1MB upload limit while preserving more resolution than smaller compression targets. Nothing needs to be installed or transferred to our servers."
    path="/resize-image-to-1mb"
    targetKB={1024}
    sections={[
      { heading: "Turn a Large Photo Into a 1MB Copy", body: "Add a JPG, PNG or WebP image and let ResizeFox seek the highest usable quality within 1,024KB. Large camera images are tested at different quality levels, with dimension reduction available when the original resolution is too demanding for the limit." },
      { heading: "Why Choose a One-Megabyte Target?", body: "One megabyte gives detailed photos more breathing room. It is a useful ceiling for property submissions, support tickets, school portals and cloud uploads that reject multi-megabyte originals but still need a clear, reasonably large image." },
      { heading: "Preserve Your Original for Future Use", body: "The downloaded copy is intended for convenient sharing and online submission. Keep the untouched source if you may later need to print, crop or edit the photo, since compression cannot restore detail that has been removed." },
    ]}
    faqHeading="Under-1MB Image FAQ"
    faqs={[
      { question: "Does 1MB mean 1,000KB or 1,024KB here?", answer: "ResizeFox uses 1,024KB as the target. If a website explicitly defines 1MB as 1,000KB, choose a slightly smaller custom limit on the main ResizeFox tool." },
      { question: "Will an image under 1MB still be high resolution?", answer: "It can be, especially when the source compresses efficiently. Complex or noisy photos may need smaller dimensions to stay within the limit." },
      { question: "Can I compress more than one image at once?", answer: "This tool processes one image at a time so you can inspect and download each result individually." },
    ]}
  />;
}
