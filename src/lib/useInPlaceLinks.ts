import { useEffect } from "react"

/**
 * Keep mock links on the page.
 *
 * Every in-site href points at a real generated file so a link checker gets a
 * 200 (see scripts/gen-link-pages.mjs), but those files are all copies of this
 * same page — actually navigating to one just reloads an identical document in
 * a fresh tab. So for an ordinary left click we swallow the navigation and only
 * push the URL into the address bar; the page itself stays put.
 *
 * Modifier and middle clicks are left alone, so the real file is still
 * reachable if someone deliberately opens it in a new tab.
 */
export function useInPlaceLinks() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return

      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith(base)) return

      event.preventDefault()
      if (href !== window.location.pathname) {
        window.history.pushState({}, "", href)
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
}
