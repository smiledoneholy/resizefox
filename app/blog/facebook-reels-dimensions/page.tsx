import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "facebook-reels-dimensions";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
