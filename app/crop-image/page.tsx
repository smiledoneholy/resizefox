import type { Metadata } from "next";
import AdvancedImageTool from "../tools/AdvancedImageTool";
import ToolGuidePage from "../tools/ToolGuidePage";
import { cropGuide } from "../tools/guide-data";
export const metadata: Metadata = { title: "Crop Image Online — Free & Private", description: cropGuide.intro, alternates: { canonical: "/crop-image" } };
export default function Page(){ return <ToolGuidePage guide={cropGuide} tool={<AdvancedImageTool action="crop" />} />; }
