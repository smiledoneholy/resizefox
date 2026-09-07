import type { Metadata } from "next";
import AdvancedImageTool from "../tools/AdvancedImageTool";
import ToolGuidePage from "../tools/ToolGuidePage";
import { rotateGuide } from "../tools/guide-data";
export const metadata: Metadata = { title: "Rotate Image Online — 90°, 180° or 270°", description: rotateGuide.intro, alternates: { canonical: "/rotate-image" } };
export default function Page(){ return <ToolGuidePage guide={rotateGuide} tool={<AdvancedImageTool action="rotate" />} />; }
