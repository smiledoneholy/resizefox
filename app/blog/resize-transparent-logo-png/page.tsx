import { metadataForGuide, StaticGuidePage } from "../static-guide";
const slug = "resize-transparent-logo-png";
export const metadata = metadataForGuide(slug);
export default function Page() { return <StaticGuidePage slug={slug} />; }
