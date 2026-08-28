# ShieldCove Insurance

A responsive car insurance marketing site built with React 19, Vite, and Tailwind CSS v4.

## Tech Stack

- **React 19** + **React DOM 19**
- **Vite 8** for dev server and builds
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **TypeScript 5.7**
- **pnpm** as the package manager

## Getting Started

```bash
pnpm install
pnpm run dev
```

The dev server runs at `http://localhost:8443` by default (override with the `PORT` env var).

## Scripts

| Command          | Description                        |
| ---------------- | ----------------------------------- |
| `pnpm run dev`     | Start the Vite dev server           |
| `pnpm run build`   | Type-check-free production build to `dist/` |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run format`  | Format source files with oxfmt      |

## Project Structure

- `src/main.tsx` — React entrypoint; mounts `src/App.tsx` into `#root`
- `src/App.tsx` — Primary application component
- `src/components/` — Header, Footer, login modal, and page sections
- `src/index.css` — Global CSS entrypoint and Tailwind import
- `vite.config.ts` — Vite config (React, Tailwind, dev/preview server settings)

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages via `.github/workflows/deploy-pages.yml`. The workflow can also be triggered manually from the Actions tab.

## Design Fidelity

The layout is fully responsive from 320px phones up through wide desktop, while preserving the original pixel-perfect design at 1440px and above.
