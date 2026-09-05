import Image100KBTool from "./resize-image-to-100kb/Image100KBTool";
import { WebApplicationJsonLd } from "./StructuredData";

type Section = {
  heading: string;
  body: string;
};

type Faq = {
  question: string;
  answer: string;
};

type ImageSizeSeoPageProps = {
  badge: string;
  heading: string;
  intro: string;
  path: string;
  targetKB: number;
  sections: Section[];
  faqHeading: string;
  faqs: Faq[];
};

export default function ImageSizeSeoPage({
  badge,
  heading,
  intro,
  path,
  targetKB,
  sections,
  faqHeading,
  faqs,
}: ImageSizeSeoPageProps) {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <WebApplicationJsonLd
        name={heading}
        url={`https://resizefox.com${path}`}
        description={intro}
      />
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="font-bold text-orange-500">{badge}</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">{heading}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {intro}
        </p>

        <Image100KBTool targetKB={targetKB} />

        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-700 p-6 text-left">
          <h2 className="text-2xl font-black">Check your file before submitting it</h2>
          <p className="mt-4 leading-7 text-slate-300">
            {targetKB <= 50
              ? "At this small limit, prioritize readability over the size of the picture. Crop unnecessary background in your image editor first. For a signature, inspect the thinnest strokes; for a headshot, check the eyes and facial outline. If the receiving form also requires minimum pixel dimensions, check those separately: meeting the file-size limit alone is not enough."
              : targetKB <= 200
              ? "For an application image, check both the file limit and the required width and height. Compression can reduce dimensions when quality changes are insufficient. Read any text in the downloaded copy at its normal display size, and keep the original if the compressed version no longer shows the required detail."
              : "For a product or portfolio photo, inspect textures, edges and small labels in the result. A file below the limit can still lose important detail. If quality is insufficient, choose a less restrictive target when the destination allows it, or crop the original to emphasize the subject before compressing again."}
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            This tool measures one KB as 1,024 bytes. A website using decimal KB
            may impose a slightly smaller limit. Files already within the limit are
            preserved. When compression is needed, PNG input becomes JPG and transparent
            areas turn white; keep your original PNG if transparency is required.
          </p>
        </section>

        <section className="mx-auto mt-14 max-w-3xl text-left">
          {sections.map((section, index) => (
            <div key={section.heading} className={index === 0 ? "" : "mt-10"}>
              <h2 className="text-2xl font-black">{section.heading}</h2>
              <p className="mt-4 leading-7 text-slate-300">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto mt-14 max-w-3xl text-left">
          <h2 className="text-2xl font-black">{faqHeading}</h2>
          <div className="mt-7 space-y-7">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
