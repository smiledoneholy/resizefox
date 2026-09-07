import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "website-image-size-display-width";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
