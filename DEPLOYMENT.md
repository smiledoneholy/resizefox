# ResizeFox static hosting

Run `npm run build` to generate `out/`. Run `npm start -- --port 3018` to preview with Cloudflare Wrangler. `npm run dev` still starts Next.js development mode.

Cloudflare Workers Builds publishes the existing `resizefox` service from GitHub main with `npx wrangler deploy`. `wrangler.jsonc` builds and uploads `out/` as static assets. There is no runtime Worker script and no request-time Next.js rendering. This avoids the resource-limit errors (1102) observed with the previous auto-generated OpenNext deployment. File processing remains client-side.

Do not enable SPA fallback: unknown URLs must return a real 404. HTML paths use no trailing slash. Keep the domain assignment on the existing Cloudflare service. No paid plan or DNS change is required by this configuration.

Run `node scripts/quality-check.cjs` against the preview. Set `PLAYWRIGHT_MODULE` to an installed Playwright module if needed, and `TEST_BASE_URL` for another origin. Chrome must be installed. Verify exports, client-side navigation, sitemap URLs, robots.txt, ads.txt and an unknown route. Repeat public HTTP checks after deploying. Build success is not evidence of AdSense eligibility.
