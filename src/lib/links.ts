/**
 * URL helpers for the mock site.
 *
 * Every placeholder link resolves to a real, base-prefixed path so the static
 * build can ship an actual file for it (see scripts/gen-link-pages.mjs), and
 * every asset reference resolves from nested pages, not just the root.
 */

const BASE = import.meta.env.BASE_URL

/** The site root — used for logo and "Home" links. */
export const HOME = BASE

/**
 * Turn a link's own visible label into a mock route:
 * "About Us" -> "<base>aboutus/", "Press & Media" -> "<base>pressandmedia/".
 */
export function toPath(label: string): string {
  const slug = label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "")
  return `${BASE}${slug}/`
}

/** Resolve a public asset path against the deployment base. */
export function asset(path: string): string {
  return `${BASE}${path.replace(/^\/+/, "")}`
}
