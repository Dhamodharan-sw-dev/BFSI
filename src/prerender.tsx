import { renderToStaticMarkup } from "react-dom/server"
import App from "./App"

// Build-time only entry. scripts/gen-link-pages.mjs compiles this as an SSR
// bundle and scrapes the rendered markup for every in-site href, so the route
// list can never drift from what the components actually link to.
export const html = renderToStaticMarkup(<App />)
