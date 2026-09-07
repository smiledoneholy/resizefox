import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "passport-photo-dimensions-pixels";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
