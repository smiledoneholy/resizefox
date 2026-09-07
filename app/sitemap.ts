import type { MetadataRoute } from "next";
import { guides, published } from "./blog/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://resizefox.com";
  const expandedTools = ["tools", "crop-image", "rotate-image", "flip-image", "bulk-resize-images", "convert-image", "resize-jpg", "resize-png", "resize-webp", "compress-png", "compress-webp", "png-to-jpg", "jpg-to-png", "webp-to-jpg"];

  return [
    ...expandedTools.map(path => ({ url: `${baseUrl}/${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "tools" ? 0.95 : 0.85 })),
    { url: `${baseUrl}/blog`, lastModified: "2026-09-07", changeFrequency: "monthly", priority: 0.8 },
    ...guides.map(guide => ({ url: `${baseUrl}/blog/${guide.slug}`, lastModified: guide.date ?? published, changeFrequency: "monthly" as const, priority: 0.7 })),
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compress-image`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/compress-image-for-email`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compress-jpg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resize-image`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/etsy-image-resizer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
  url: `${baseUrl}/resize-image-to-100kb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
  },
  {
  url: `${baseUrl}/resize-image-to-50kb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
  },
  {
  url: `${baseUrl}/resize-image-to-20kb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-200kb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-500kb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-1mb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
 },
 {
  url: `${baseUrl}/resize-image-to-250kb`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
 },
  ];
}
