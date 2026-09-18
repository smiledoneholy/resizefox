import Link from "next/link";

export default function UploadChecklist({ targetKB }: { targetKB: number }) {
  return <section className="mx-auto my-10 max-w-3xl rounded-2xl bg-slate-100 p-6 text-left leading-7 text-slate-800">
    <h2 className="text-2xl font-bold">Why an image under {targetKB} KB can still be rejected</h2>
    <p className="mt-4">The file size, dimensions and format are separate checks. This tool uses a limit of {(targetKB * 1024).toLocaleString("en-US")} bytes. A form that defines {targetKB} KB as {(targetKB * 1000).toLocaleString("en-US")} bytes uses a stricter limit. Check the actual bytes in the downloaded file before uploading.</p>
    <ol className="mt-4 list-decimal space-y-3 pl-5"><li><strong>Check the extension:</strong> an oversized PNG becomes JPG in this tool. Its transparent pixels become white. WebP remains WebP, which a JPG-only form may reject.</li><li><strong>Check the dimensions:</strong> compression may shrink width and height. A file can meet the byte limit and still be too small for a form that requires a minimum width.</li><li><strong>Inspect the content:</strong> {targetKB <= 50 ? "look closely at signature strokes, small numbers and facial detail. Crop unrelated background first; a tiny byte budget can make a large document unreadable." : "read labels and fine text at normal viewing size. Start again from the original if compression makes required details unclear."}</li><li><strong>Check the receiving form:</strong> a filename, color-space or document requirement cannot be fixed simply by reducing bytes. Follow the exact error message.</li></ol>
    <p className="mt-4">For a repeatable visual test, use our <Link className="font-bold text-orange-700 underline" href="/compression-lab">image compression lab</Link>. Compare the same sample in three formats before choosing a workflow for your own file.</p>
  </section>;
}
