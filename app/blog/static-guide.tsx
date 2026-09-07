import type { Metadata } from "next";
import DynamicGuidePage from "./[slug]/page";
import { guides, published } from "./articles";

export function metadataForGuide(slug: string): Metadata {
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) throw new Error(`Unknown guide: ${slug}`);

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: `https://resizefox.com/blog/${slug}`,
      publishedTime: guide.date ?? published,
    },
  };
}

export function StaticGuidePage({ slug }: { slug: string }) {
  return <DynamicGuidePage params={Promise.resolve({ slug })} />;
}
