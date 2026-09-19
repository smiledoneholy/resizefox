import type { Metadata } from "next";
import AdvancedImageTool from "../tools/AdvancedImageTool";
import ToolGuidePage from "../tools/ToolGuidePage";
import { flipGuide } from "../tools/guide-data";
export const metadata: Metadata = { title: "Flip Image Online — Mirror Horizontally or Vertically", description: flipGuide.intro, alternates: { canonical: "/flip-image" } };
export default function Page(){ return <ToolGuidePage imageReference guide={flipGuide} tool={<AdvancedImageTool action="flip" />} />; }
