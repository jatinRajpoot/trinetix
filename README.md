# trinetix

Static website for TriNetix Atelier — Next.js 15 (App Router) with `output: "export"`, living at the repo root.

## Stack

- **Next.js 15 + React 19 + Tailwind CSS 4** — fully static build, no API server.
- All content (pricing, blog notes, testimonials) lives in `src/data/*.ts` and is compiled into the site at build time.
- Contact form opens a prefilled `mailto:` — no backend required.

## Quick start

```
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```
npm run build      # emits static site to out/
```

Deploy `out/` to any static host or CDN (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages). Optionally, `docker compose up --build` serves it via nginx on port 3000.

## Project structure

```
src/app/          # pages (all statically prerendered)
src/data/         # blogs.ts, testimonials.ts — site content
src/components/   # Header, Footer, LegalLayout
public/           # static assets
Dockerfile        # nginx static server (docker compose)
nginx.conf        # nginx config (clean URLs, OG image MIME)
```