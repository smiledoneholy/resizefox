import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using ResizeFox.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-black">Terms of Use</h1>

        <p className="mt-3 text-sm text-slate-500">
          Last updated: August 20, 2026
        </p>

        <div className="mt-10 space-y-8 leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>

            <p className="mt-3">
              By using ResizeFox, you agree to these Terms of Use. If you
              do not agree with these terms, please do not use the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. Use of the Service
            </h2>

            <p className="mt-3">
              ResizeFox is provided for lawful personal and commercial use.
              You are responsible for ensuring that you have the necessary
              rights to any images you process using the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Availability
            </h2>

            <p className="mt-3">
              We aim to keep ResizeFox available and reliable, but we do
              not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. Limitation of Liability
            </h2>

            <p className="mt-3">
              ResizeFox is provided on an as-is basis. To the maximum
              extent permitted by law, we are not responsible for losses
              resulting from the use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Changes
            </h2>

            <p className="mt-3">
              We may update these Terms of Use from time to time. Continued
              use of ResizeFox after changes are published means you accept
              the updated terms.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
