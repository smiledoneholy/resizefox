import type { ReactNode } from "react";
import Link from "next/link";

export type ToolGuide = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: [string, string][];
  uses: [string, string][];
  notes: { title: string; paragraphs: string[] }[];
  faqs: [string, string][];
  related: { href: string; title: string; description: string }[];
};

export default function ToolGuidePage({ guide, tool }: { guide: ToolGuide; tool: ReactNode }) {
  return <main className="min-h-screen bg-[#fafafa] text-slate-950">
    <section className="mx-auto max-w-5xl px-5 pb-9 pt-16 text-center sm:px-8 sm:pt-20">
      <p className="font-bold uppercase tracking-wider text-orange-600">{guide.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{guide.title}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{guide.intro}</p>
    </section>
    {tool}
    <section className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <h2 className="text-3xl font-black">How to use this tool</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{guide.steps.map(([title, text], index) => <div key={title} className="rounded-2xl border border-slate-200 p-6"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 font-black text-white">{index + 1}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div>)}</div>
    </div></section>
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      {guide.notes.map(note => <article key={note.title} className="mb-12"><h2 className="text-3xl font-black tracking-tight">{note.title}</h2>{note.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 leading-8 text-slate-600">{paragraph}</p>)}</article>)}
      <h2 className="text-3xl font-black">Common uses</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">{guide.uses.map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div>)}</div>
    </section>
    <section className="bg-slate-950 text-white"><div className="mx-auto max-w-5xl px-5 py-16 sm:px-8"><h2 className="text-3xl font-black">Related tools</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{guide.related.map(item => <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-700 p-5 hover:border-orange-400"><h3 className="font-bold text-orange-400">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p></Link>)}</div><Link href="/tools" className="mt-7 inline-block font-bold text-orange-400 underline">Browse every tool →</Link></div></section>
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8"><p className="font-bold uppercase tracking-wider text-orange-600">FAQ</p><h2 className="mt-3 text-3xl font-black">Questions about {guide.title.toLowerCase()}</h2><div className="mt-8 space-y-7">{guide.faqs.map(([question, answer]) => <div key={question}><h3 className="text-lg font-bold">{question}</h3><p className="mt-2 leading-7 text-slate-600">{answer}</p></div>)}</div></section>
  </main>;
}
