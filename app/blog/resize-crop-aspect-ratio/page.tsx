import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "resize-crop-aspect-ratio";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
