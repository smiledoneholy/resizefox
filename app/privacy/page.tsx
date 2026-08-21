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
          Last updated: August 21, 2026
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
              3. Google Analytics 4
            </h2>

            <p className="mt-3">
              ResizeFox uses Google Analytics 4 (GA4), provided by Google, to
              understand how people use the site and to help us improve the
              tools and user experience. Our GA4 Measurement ID is
              G-64KRV3M9TN.
            </p>

            <p className="mt-3">
              Google Analytics may collect browser and device information,
              approximate location, pages viewed, interactions with the site,
              session and usage information, and cookies or similar
              identifiers. Google may also receive information such as your IP
              address and the URL of the page you visit. This analytics
              information does not include the image files you process with
              ResizeFox.
            </p>

            <p className="mt-3">
              To learn more, read{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                how Google uses information from sites that use its services
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. Cookies and Your Choices
            </h2>

            <p className="mt-3">
              You can control or delete cookies through your browser settings.
              Blocking some cookies or similar technologies may affect how
              certain website features or analytics work. Where applicable,
              you may also be offered consent controls that let you accept,
              reject or adjust particular uses of cookies and data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Advertising and Google AdSense
            </h2>

            <p className="mt-3">
              ResizeFox does not currently display Google AdSense ads. If
              Google AdSense is enabled in the future, Google and other
              advertising partners may use cookies or similar technologies to
              serve, personalize where permitted, and measure advertising.
              Users may be offered controls for personalized advertising where
              applicable. We will update this policy and provide any required
              notices or consent controls before or when advertising is
              introduced.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              6. Changes to This Policy
            </h2>

            <p className="mt-3">
              We may update this Privacy Policy when our services or legal
              requirements change. The latest version will always be
              published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              7. Privacy Contact
            </h2>

            <p className="mt-3">
              If you have a question about this Privacy Policy or how ResizeFox
              handles information, email us at{" "}
              <a
                href="mailto:hello@resizefox.com"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                hello@resizefox.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
