import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the ResizeFox privacy policy and learn how your images and data are handled.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-black">Privacy Policy</h1>

        <p className="mt-3 text-sm text-slate-500">
          Last updated: August 20, 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. Overview
            </h2>

            <p className="mt-3">
              ResizeFox provides free browser-based tools for resizing,
              compressing and converting images. We respect your privacy
              and aim to collect as little personal information as
              possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. Your Images
            </h2>

            <p className="mt-3">
              Images processed with ResizeFox are handled locally in your
              web browser. They are not uploaded to our servers as part of
              the image resizing, compression or conversion process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Analytics and Cookies
            </h2>

            <p className="mt-3">
              We may use analytics, advertising and similar technologies
              to understand website usage, improve our services and
              support the operation of ResizeFox. These services may use
              cookies or similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. Advertising
            </h2>

            <p className="mt-3">
              ResizeFox may display third-party advertising. Advertising
              providers may use cookies or similar technologies to deliver
              and measure ads in accordance with their own privacy
              policies and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Changes to This Policy
            </h2>

            <p className="mt-3">
              We may update this Privacy Policy when our services or legal
              requirements change. The latest version will always be
              published on this page.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
