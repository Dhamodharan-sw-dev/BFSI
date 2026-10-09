// Generate a real static file for every mock route the app links to.
//
// GitHub Pages has no SPA rewrite, and a 404.html fallback does not help a
// link checker: Pages serves it with an HTTP 404 status, so a HEAD request
// still reads 404 even though a browser renders the page fine. The only way
// to get a 200 is for the path to be a real file on disk.
//
// Rather than keeping a hand-written route list (which drifts the moment
// someone adds a link), this renders <App /> to static markup and scrapes
// every href that starts with the deployment base. Limitation: only markup
// that React actually renders is scraped — if the footer were ever turned
// into a collapsed accordion, only the default-open category's links would
// be captured.

import { build } from "vite"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { pathToFileURL } from "node:url"

const root = process.cwd()
const dist = join(root, "dist")
// Must live inside the project, not the OS temp dir, or the SSR bundle cannot
// resolve react-dom when we import it below.
const outDir = join(root, "node_modules", ".shieldcove-prerender")

const base = process.env.BASE_PATH || "/BFSI/"

await build({
  configFile: false,
  root,
  base,
  logLevel: "warn",
  build: {
    ssr: resolve(root, "src/prerender.tsx"),
    outDir,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "prerender.mjs" } },
  },
  plugins: [(await import("@vitejs/plugin-react")).default()],
})

const { html } = await import(pathToFileURL(join(outDir, "prerender.mjs")).href)

// Only <a href>: React 19 also emits <link rel="preload" as="image"> tags for
// every image during SSR, and those point at real hashed asset files, not routes.
const slugs = new Set()
for (const match of html.matchAll(/<a\b[^>]*?\shref="([^"]+)"/g)) {
  const href = match[1]
  if (!href.startsWith(base)) continue
  const slug = href.slice(base.length).replace(/\/+$/, "")
  // Routes only — never a path into the built asset tree.
  if (slug && !slug.includes("/") && !slug.includes(".")) slugs.add(slug)
}

const shell = await readFile(join(dist, "index.html"), "utf8")

for (const slug of slugs) {
  const dir = join(dist, slug)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, "index.html"), shell)
  await mkdir(dirname(join(dist, `${slug}.html`)), { recursive: true })
  await writeFile(join(dist, `${slug}.html`), shell)
}

// Browser-facing safety net for anything not in the list above.
await writeFile(join(dist, "404.html"), shell)

const sorted = [...slugs].sort()
console.log(`gen-link-pages: ${sorted.length} mock routes under ${base}`)
for (const slug of sorted) console.log(`  ${base}${slug}/`)
