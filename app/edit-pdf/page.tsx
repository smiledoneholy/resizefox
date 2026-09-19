import type { Metadata } from "next";
import PdfEditor from "./PdfEditor";
import ToolGuidePage, { type ToolGuide } from "../tools/ToolGuidePage";

export const metadata: Metadata = {
  title: "Edit PDF Online — Add Text, Images & Signatures",
  description: "Add text, highlights, images and drawn signatures to a PDF. Reorder or remove pages, preview your changes and download privately in your browser.",
  alternates: { canonical: "/edit-pdf" },
};
const guide: ToolGuide = {
  eyebrow: "PRIVATE PDF EDITOR · NO SIGNUP",
  title: "Edit a PDF online",
  intro: "Add a note, place an image, highlight a passage or draw a signature. Arrange your pages, check the preview and save a new PDF. Your document stays on your device.",
  steps: [
    ["Open your document", "Choose an unencrypted PDF under 50 MB with up to 100 pages. Pick the page you want to work on from the page selector."],
    ["Add and arrange", "Enter text and choose its size and color, add a JPG or PNG, or draw a signature. Drag additions into position or enter their left and top percentages. Move pages earlier or later to change their order."],
    ["Save a new copy", "Select Save edited PDF, then Download edited PDF. Open the downloaded file to review every edited page before sharing. Your original file is unchanged."],
  ],
  uses: [
    ["Add a note to a handout", "Place a short comment beside a paragraph. Choose a smaller font size if the note does not fit, and add another text item for a second line."],
    ["Mark a passage", "Add a translucent highlight and adjust its width, height and position over the passage. Text underneath remains readable and is still present in the file."],
    ["Prepare a visual signature", "Draw in the signature pad with a mouse, pen or finger, then add the result to the page. Resize and place it above the signature line."],
    ["Arrange a document", "Select a page and use Move page earlier or Move page later. Remove unwanted pages, or use Restore all pages to recover the original page set and order."],
  ],
  notes: [
    { title: "A practical example: annotate a two-page report", paragraphs: ["Open the report and select page 1. Enter ‘Please review the total’, set the font to 16, and select Add text. Drag the note into a blank margin. Add a highlight over the total and narrow it with the width control. Select page 2 and add your drawn signature at the bottom. Save the PDF and check both pages in a PDF reader.", "Position percentages are relative to the displayed page: Left 10% starts one tenth of the page width from the left, and Top 20% starts one fifth of the page height from the top. These controls also let you position additions without dragging."] },
    { title: "What is preserved, and what this editor does not do", paragraphs: ["The editor keeps original page content instead of turning each page into a screenshot. Existing selectable text stays selectable. Added text, images and highlights become part of the saved page content; they are not separate review comments.", "This tool adds content over a page. It cannot rewrite or delete existing text, perform OCR, redact sensitive information or apply a certificate-based digital signature. A highlight does not hide or remove the underlying data. Editing an already digitally signed file can invalidate its signature.", "Use simple documents and check the exported copy. Complex forms, bookmarks, cross-page links and specialized PDF features may not behave as expected after page deletion or reordering. Added text supports Latin characters and common punctuation; use another editor for scripts requiring additional fonts or shaping."] },
  ],
  faqs: [
    ["Are my files uploaded?", "No. PDF rendering and editing run in your browser. The file and drawn signature are not sent to a ResizeFox server."],
    ["Can I change a sentence that is already in the PDF?", "No. You can add a new text item or note, but the editor cannot replace existing page text."],
    ["Can I undo a removed page or addition?", "Restore all pages recovers the original page set and order while keeping your additions. Select an unwanted addition and choose Remove addition. Removed additions cannot be restored automatically; add them again if needed."],
    ["Why did the download link disappear?", "Making another edit clears the previous download so you do not accidentally save an outdated copy. Select Save edited PDF again to generate a fresh download."],
    ["Will my work remain if I close the tab?", "No. Save and download before leaving or refreshing. The editor does not store an editing session."],
    ["Is the signature a digital certificate?", "No. It is an image of your drawing. Check the recipient’s requirements before using it on a document."],
  ],
  related: [
    { href: "/merge-pdf", title: "Merge PDFs", description: "Combine documents before editing." },
    { href: "/split-pdf", title: "Extract PDF pages", description: "Save individual pages from a larger file." },
    { href: "/images-to-pdf", title: "Images to PDF", description: "Create a document from JPG and PNG files." },
  ],
};
export default function Page() { return <ToolGuidePage guide={guide} tool={<PdfEditor />} />; }
