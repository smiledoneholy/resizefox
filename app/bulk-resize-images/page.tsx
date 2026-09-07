import type { Metadata } from "next";
import BulkResizeTool from "../tools/BulkResizeTool";
import ToolGuidePage from "../tools/ToolGuidePage";
import { bulkGuide } from "../tools/guide-data";
export const metadata: Metadata = { title: "Bulk Image Resizer — Resize Multiple Images", description: bulkGuide.intro, alternates: { canonical: "/bulk-resize-images" } };
export default function Page(){ return <ToolGuidePage guide={bulkGuide} tool={<BulkResizeTool />} />; }
