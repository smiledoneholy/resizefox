import type { Metadata } from "next";
import ImageTool from "../ImageTool";
import ToolGuidePage from "../tools/ToolGuidePage";
import { formatGuide } from "../tools/guide-data";
const guide = formatGuide("convert", "JPG, PNG or WebP", "another format");
export const metadata: Metadata = { title: "Convert Images Online — JPG, PNG & WebP", description: guide.intro, alternates: { canonical: "/convert-image" } };
export default function Page(){ return <ToolGuidePage guide={guide} tool={<ImageTool initialMode="convert" convertOnly previewResult />} />; }
