import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Ship the compact Tailwind stylesheet with HTML to avoid a blocking request.
  experimental: { inlineCss: true },
};

export default nextConfig;
