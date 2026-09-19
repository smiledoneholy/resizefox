import Link from "next/link";

const rows = [
  { platform: "Etsy listing photo", dimensions: "2000 × 2000 px or larger on both sides", ratio: "Square or landscape; leave room for thumbnail crops", format: "JPG / PNG", size: "Aim for 1 MB or less", note: "Upload guidance, not a hard maximum: Etsy warns that larger files may fail on slow connections.", href: "https://help.etsy.com/hc/en-us/articles/115015663347-Requirements-and-Best-Practices-for-Images-in-Your-Etsy-Shop", source: "Etsy requirements" },
  { platform: "Instagram feed photo", dimensions: "1080 × 1080 or 1080 × 1350 px", ratio: "1:1 square / 4:5 portrait · practical export sizes", format: "JPG", size: "Suggested target: 1–2 MB", note: "ResizeFox target, not an Instagram upload limit. Other supported ratios may also work.", href: "https://help.instagram.com/1631821640426723", source: "Instagram photo guidance" },
  { platform: "Facebook feed photo", dimensions: "1080 × 1080 px", ratio: "1:1 square · practical export size, not a required size", format: "JPG / PNG", size: "Suggested target: 1–2 MB", note: "ResizeFox target, not a Facebook upload limit. Check the specific post or ad uploader.", href: "https://www.facebook.com/help/266520536764594", source: "Facebook photo guidance" },
  { platform: "Instagram / Facebook Story or TikTok artwork", dimensions: "1080 × 1920 px", ratio: "9:16 vertical · suggested image canvas", format: "JPG / PNG", size: "Suggested target: 1–2 MB", note: "Image preparation only; video limits do not apply here. Confirm the limit in your chosen uploader.", href: null, source: "ResizeFox export suggestion" },
  { platform: "Pinterest standard image ad", dimensions: "1000 × 1500 px", ratio: "2:3 · Pinterest recommendation", format: "JPG / PNG", size: "Maximum: 20 MB desktop / 32 MB in app", note: "For standard image ads created through Pinterest’s business tools.", href: "https://help.pinterest.com/en/business/article/pinterest-product-specs", source: "Pinterest specifications" },
];

export default function ImageSizeReference() {
  return <section aria-label="Photo dimensions and file sizes" className="mx-auto my-8 max-w-6xl px-4 sm:px-6">
    <div className="overflow-hidden rounded-2xl border border-orange-200 bg-white">
      <div className="border-b border-orange-100 bg-orange-50 px-4 py-4 sm:px-5">
        <h2 className="text-lg font-bold text-slate-950">Photo dimensions &amp; file-size quick reference</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">Dimensions are width × height in pixels. Suggested file sizes are compression targets, not platform limits.</p>
      </div>
      <div className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-orange-500" tabIndex={0} role="region" aria-label="Photo size reference table — scroll horizontally on small screens">
        <table className="w-full min-w-[680px] text-left text-sm text-slate-700">
          <caption className="sr-only">Suggested photo dimensions, export formats and file-size guidance by destination</caption>
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600"><tr><th scope="col" className="px-4 py-3">Destination</th><th scope="col" className="px-4 py-3">Dimensions / ratio</th><th scope="col" className="px-4 py-3">Export</th><th scope="col" className="px-4 py-3">File size / limit</th></tr></thead>
          <tbody>{rows.map(row => <tr key={row.platform} className="border-t border-slate-100 align-top">
            <th scope="row" className="w-[22%] px-4 py-3 font-semibold text-slate-950">{row.platform}</th>
            <td className="w-[29%] px-4 py-3"><span className="font-semibold">{row.dimensions}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{row.ratio}</span></td>
            <td className="whitespace-nowrap px-4 py-3">{row.format}</td>
            <td className="px-4 py-3"><span className="font-semibold">{row.size}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{row.note}</span></td>
          </tr>)}</tbody>
        </table>
      </div>
      <div className="border-t border-slate-100 px-4 py-3 text-xs leading-5 text-slate-600 sm:px-5">
        <p>Need another shape? <Link href="/crop-image" className="font-semibold text-orange-800 underline">Crop first</Link>, then resize and compress. Keep your original; do not sacrifice detail just to reach a suggested target. JPG is usually suitable for photos. Etsy does not preserve PNG transparency.</p>
        <details className="mt-2"><summary className="cursor-pointer font-semibold text-slate-700">Sources and scope · Etsy/Pinterest checked September 19, 2026</summary><p className="mt-2">Etsy and Pinterest guidance was checked on this date. Instagram, Facebook and vertical-canvas entries are practical ResizeFox suggestions, not a complete list of accepted dimensions or verified maximum file sizes. Check the destination’s uploader for its current limit: posting apps, advertising tools and APIs may have different requirements.</p><ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">{rows.filter(row=>row.href).map(row=><li key={row.platform}><a className="text-orange-800 underline" href={row.href!} target="_blank" rel="noopener noreferrer">{row.source}</a></li>)}</ul></details>
      </div>
    </div>
  </section>;
}
