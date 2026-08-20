import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resizefox.com"),

  title: {
    default: "ResizeFox - Free Image Resizer & Compressor",
    template: "%s | ResizeFox",
  },

  description:
    "Resize, compress and convert JPG, PNG and WebP images online for free. Fast, private browser-based image tools with no signup required.",

  keywords: [
    "image resizer",
    "resize image online",
    "image compressor",
    "compress image online",
    "image converter",
    "JPG compressor",
    "PNG resizer",
    "WebP converter",
    "resize image free",
    "compress image to 500KB",
  ],

  openGraph: {
    title: "ResizeFox - Free Image Resizer & Compressor",
    description:
      "Resize, compress and convert images online for free. Fast, private and no signup required.",
    url: "https://resizefox.com",
    siteName: "ResizeFox",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ResizeFox - Free Image Resizer & Compressor",
    description:
      "Resize, compress and convert images online for free. Fast, private and no signup required.",
  },

  alternates: {
    canonical: "https://resizefox.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}