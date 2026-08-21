import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://resizefox.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
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
