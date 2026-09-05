import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the ResizeFox team.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-bold text-orange-500">CONTACT</p>

        <h1 className="mt-2 text-4xl font-black">
          Get in touch
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-600">
          Have a question, found a problem or have an idea for a new
          ResizeFox feature? We&apos;d be happy to hear from you.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold">
            Email
          </h2>

          <p className="mt-3 text-slate-600">
            Contact us at:
          </p>

          <a
            href="mailto:hello@resizefox.com"
            className="mt-2 inline-block font-bold text-orange-500 hover:text-orange-600"
          >
            hello@resizefox.com
          </a>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            We aim to respond to legitimate inquiries as soon as possible.
          </p>
        </div>
      </section>
    </main>
  );
}
