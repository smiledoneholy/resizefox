import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "jpg-png-webp-file-extensions";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
