import type { MetadataRoute } from "next";
import { guides, published } from "./blog/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://resizefox.com";
  const expandedTools = ["tools", "crop-image", "rotate-image", "flip-image", "bulk-resize-images", "convert-image", "resize-jpg", "resize-png", "resize-webp", "compress-png", "compress-webp", "png-to-jpg", "jpg-to-png", "webp-to-jpg"];
  const pdfTools = ["images-to-pdf", "pdf-to-jpg", "merge-pdf", "split-pdf", "rotate-pdf", "compress-pdf"];

  return [
    { url: `${baseUrl}/compression-lab`, lastModified: "2026-09-18", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/updates`, lastModified: "2026-09-18", changeFrequency: "monthly", priority: 0.4 },
    ...expandedTools.map(path => ({ url: `${baseUrl}/${path}`,  changeFrequency: "monthly" as const, priority: path === "tools" ? 0.95 : 0.85 })),
    ...pdfTools.map(path => ({ url: `${baseUrl}/${path}`,  changeFrequency: "monthly" as const, priority: 0.85 })),
    { url: `${baseUrl}/blog`, lastModified: "2026-09-18", changeFrequency: "monthly", priority: 0.8 },
    ...guides.map(guide => ({ url: `${baseUrl}/blog/${guide.slug}`, lastModified: guide.updated ?? guide.date ?? published, changeFrequency: "monthly" as const, priority: 0.7 })),
    {
      url: baseUrl,

      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compress-image`,

      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/compress-image-for-email`,

      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compress-jpg`,

      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resize-image`,

      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/etsy-image-resizer`,

      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,

      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,

      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,

      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,

      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
  url: `${baseUrl}/resize-image-to-100kb`,

  changeFrequency: "weekly",
  priority: 0.9,
  },
  {
  url: `${baseUrl}/resize-image-to-50kb`,

  changeFrequency: "weekly",
  priority: 0.9,
  },
  {
  url: `${baseUrl}/resize-image-to-20kb`,

  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-200kb`,

  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-500kb`,

  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-1mb`,

  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-250kb`,

  changeFrequency: "weekly",
  priority: 0.9,
 },
  ];
}
