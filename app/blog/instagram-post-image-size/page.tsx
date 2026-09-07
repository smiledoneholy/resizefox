import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "instagram-post-image-size";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
