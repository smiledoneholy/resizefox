import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "tiktok-resolution-image-guide";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
