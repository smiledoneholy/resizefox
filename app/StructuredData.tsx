type WebApplicationJsonLdProps = {
  name: string;
  url: string;
  description: string;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ResizeFox",
        url: "https://resizefox.com/",
        description:
          "Free browser-based tools for resizing, compressing and converting JPG, PNG and WebP images.",
      }}
    />
  );
}

export function WebApplicationJsonLd({
  name,
  url,
  description,
}: WebApplicationJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name,
        url,
        description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements:
          "Requires JavaScript and a modern web browser with HTML5 Canvas support.",
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD",
        },
      }}
    />
  );
}
