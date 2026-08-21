import Link from "next/link";

const navigation = [
  { href: "/#image-tools", label: "Image Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white text-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl" aria-hidden="true">🦊</span>
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">
            Resize<span className="text-orange-500">Fox</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-3 text-xs font-semibold text-slate-600 sm:gap-6 sm:text-sm"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-orange-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
            <span aria-hidden="true">🦊</span>
            ResizeFox
          </Link>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Free browser-based tools for resizing, compressing and converting
            JPG, PNG and WebP images without uploading them to our servers.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-300"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
