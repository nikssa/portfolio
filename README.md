# Nikša Volarević — Portfolio

Personal portfolio for a Senior Frontend Engineer. Editorial Swiss-grid dark
theme, built from scratch with React + Vite + TypeScript. No UI kit — every
component, animation, and grid is hand-authored.

## Stack

- **Vite** + **React 19** + **TypeScript**
- Plain CSS with design tokens (CSS custom properties), no framework
- Fonts: Fraunces (display), JetBrains Mono (labels), Manrope (body)
- Scroll-reveal via `IntersectionObserver`, CSS keyframe load animation
- Respects `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build → dist/
npm run preview  # serve the production build
```

## Content

All resume content lives in [`src/data/resume.ts`](src/data/resume.ts) as typed
data — edit there to update the site; components render from it.

## Deploy (Vercel)

Vercel auto-detects Vite. `vercel.json` pins the framework, build command, and
adds an SPA rewrite so deep-link refreshes resolve. To ship:

```bash
npx vercel        # preview deploy
npx vercel --prod # production
```

Or connect the Git repo in the Vercel dashboard — zero extra config. Full
step-by-step guide: [`docs/deploy-to-vercel.md`](docs/deploy-to-vercel.md).

## Documentation

See [`docs/`](docs/):

- [`overview.md`](docs/overview.md) — architecture, structure, content model,
  design system.
- [`editing-content.md`](docs/editing-content.md) — updating jobs, skills, and
  bio via the single data file.
- [`pre-share-checklist.md`](docs/pre-share-checklist.md) — SEO / social-preview
  checks before sharing the URL.
- [`deploy-to-vercel.md`](docs/deploy-to-vercel.md) — deploying on Vercel's free
  tier (CLI or Git).
