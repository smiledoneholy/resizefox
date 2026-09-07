import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, published } from "../articles";

export function generateStaticParams() { return guides.map(g => ({ slug: g.slug })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide) notFound();
  return { title: guide.title, description: guide.description, alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", title: guide.title, description: guide.description, url: `https://resizefox.com/blog/${slug}`, publishedTime: guide.date ?? published },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide) notFound();
  const related = guides.filter(g => g.slug !== slug).sort((a,b) => Number(b.category === guide.category) - Number(a.category === guide.category)).slice(0,3);
  return <main className="bg-[#fafafa] text-slate-950">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BlogPosting", headline: guide.title, description: guide.description,
      datePublished: guide.date ?? published, dateModified: guide.date ?? published, mainEntityOfPage: `https://resizefox.com/blog/${slug}`,
      author: { "@type": "Organization", name: "ResizeFox", url: "https://resizefox.com/about" },
    }).replace(/</g, "\\u003c") }} />
    <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600"><Link href="/">Home</Link> / <Link href="/blog" className="underline">Tutorials</Link> / {guide.category}</nav>
      <p className="mt-10 text-sm font-bold uppercase tracking-widest text-orange-600">{guide.category}</p>
      <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{guide.title}</h1>
      <p className="mt-5 text-sm text-slate-500">By <Link href="/about" className="underline">ResizeFox</Link> · Published <time dateTime={guide.date ?? published}>{new Date(`${guide.date ?? published}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p>
      <p className="mt-8 text-lg leading-8 text-slate-700">{guide.intro}</p>
      <nav aria-label="On this page" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="font-bold">In this tutorial</p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm text-orange-700"><a href="#reference" className="underline">Quick reference</a><a href="#steps" className="underline">Step by step</a>{guide.sections.map((s,i) => <a key={s.title} href={`#section-${i}`} className="underline">{s.title}</a>)}</div>
      </nav>
      <section id="reference" className="mt-12 scroll-mt-6">
        <h2 className="text-2xl font-black">Quick reference</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm"><caption className="sr-only">{guide.title}: reference values</caption><thead className="bg-slate-950 text-white"><tr><th scope="col" className="p-4">Use</th><th scope="col" className="p-4">Size or purpose</th><th scope="col" className="p-4">Note</th></tr></thead><tbody>{guide.dimensions.map(row => <tr key={row[0]} className="border-t border-slate-200"><th scope="row" className="p-4 font-semibold">{row[0]}</th><td className="p-4">{row[1]}</td><td className="p-4">{row[2]}</td></tr>)}</tbody></table>
        </div>
      </section>
      {guide.category === "Social media" && <figure className="mt-8 rounded-2xl bg-slate-100 p-6">
        <div className="flex items-end justify-center gap-5" aria-hidden="true">{[["1:1",108,108],["4:5",108,135],["9:16",108,192]].map(([ratio,w,h]) => <div key={ratio} style={{width: Number(w), aspectRatio: `${w} / ${h}`}} className="flex max-w-[28%] items-center justify-center rounded-lg border-2 border-orange-500 bg-orange-50 font-bold text-orange-800">{ratio}</div>)}</div>
        <figcaption className="mt-5 text-center text-sm text-slate-600">Same width, different shapes: square 1:1, portrait 4:5 and vertical 9:16. Changing shape requires cropping or a new canvas to avoid stretching.</figcaption>
      </figure>}
      <section id="steps" className="mt-12 scroll-mt-6"><h2 className="text-2xl font-black">Step by step</h2><ol className="mt-6 list-decimal space-y-5 pl-6 leading-8 text-slate-700">{guide.steps.map(step => <li key={step} className="pl-2">{step}</li>)}</ol></section>
      {guide.sections.map((section,i) => <section key={section.title} id={`section-${i}`} className="mt-12 scroll-mt-6"><h2 className="text-2xl font-black">{section.title}</h2>{section.paragraphs.map(p => <p key={p} className="mt-5 leading-8 text-slate-700">{p}</p>)}</section>)}
      <aside className="mt-12 rounded-2xl bg-slate-950 p-7 text-white"><h2 className="text-2xl font-black">Put the guide into practice</h2><p className="mt-3 leading-7 text-slate-300">Work from a copy of your original and check the downloaded result against your destination requirements.</p><Link href={guide.tool} className="mt-5 inline-block rounded-xl bg-orange-500 px-5 py-3 font-bold text-slate-950 hover:bg-orange-400">{guide.toolLabel} →</Link></aside>
      {guide.sources.length > 0 && <section className="mt-10"><h2 className="text-xl font-bold">Sources and further reading</h2><ul className="mt-4 space-y-3">{guide.sources.map(s => <li key={s.url}><a href={s.url} rel="noopener noreferrer" className="break-words text-orange-700 underline">{s.label}</a></li>)}</ul><p className="mt-4 text-sm leading-6 text-slate-600">Platform specifications and application rules can change. Refer to the current destination instructions; the worked calculations and preparation choices in this tutorial are not a guarantee of acceptance.</p></section>}
      <section className="mt-12 border-t border-slate-200 pt-8"><h2 className="text-2xl font-black">Keep learning</h2><ul className="mt-5 space-y-4">{related.map(g => <li key={g.slug}><Link href={`/blog/${g.slug}`} className="font-semibold text-orange-700 underline">{g.title}</Link></li>)}</ul><Link href="/blog" className="mt-6 inline-block font-bold">← All tutorials</Link></section>
    </article>
  </main>;
}
