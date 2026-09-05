import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "./articles";

export const metadata: Metadata = {
  title: "Image Tutorials — Social Sizes, Formats & Upload Guides",
  description: "Practical tutorials for Instagram posts, Facebook Reels artwork, TikTok images, passport photo dimensions, JPG, PNG and WebP.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <main className="min-h-screen bg-[#fafafa] text-slate-950">
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-widest text-orange-600">ResizeFox tutorials</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">The right size.<br />The right format.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Learn how to prepare images for social posts, application forms and the web. Follow worked examples, understand the tradeoffs and open the tool you need.</p>
      <nav aria-label="Tutorial topics" className="mt-8 flex flex-wrap gap-3">
        {[...new Set(guides.map(g => g.category))].map(category => <a key={category} href={`#${category.toLowerCase().replaceAll(" ", "-")}`} className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold hover:bg-orange-50">{category}</a>)}
      </nav>
      {[...new Set(guides.map(g => g.category))].map(category => <section key={category} id={category.toLowerCase().replaceAll(" ", "-")} className="mt-14 scroll-mt-6">
        <h2 className="text-2xl font-black">{category}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.filter(g => g.category === category).map(g => <Link key={g.slug} href={`/blog/${g.slug}`} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-500 hover:shadow-md">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Step-by-step guide</p>
            <h3 className="mt-4 text-xl font-extrabold leading-7">{g.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-slate-600">{g.description}</p>
            <span className="mt-6 font-bold text-orange-700">Read tutorial →</span>
          </Link>)}
        </div>
      </section>)}
    </section>
  </main>;
}
