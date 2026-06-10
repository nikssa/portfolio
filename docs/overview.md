# Portfolio — Overview

Personal portfolio site for Nikša Volarević, Senior Frontend Engineer. A
single-page React app with an editorial Swiss-grid dark aesthetic, built from
scratch (no UI kit) and deployed to Vercel.

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Build tool     | Vite                                                |
| UI library     | React 19                                            |
| Language       | TypeScript                                          |
| Styling        | Plain CSS with design tokens (CSS custom properties)|
| Fonts          | Fraunces (display), JetBrains Mono (labels), Manrope (body) |
| Animation      | CSS keyframes + `IntersectionObserver` scroll reveal |
| Hosting        | Vercel (free / Hobby tier)                          |

There is no CSS framework and no component library — every component, grid, and
animation is hand-authored.

## Project structure

```
portfolio/
├── index.html              # HTML shell: meta tags, font <link>s, #root
├── vercel.json             # Vercel framework pin + SPA rewrite
├── vite.config.ts          # Vite config
├── public/
│   └── favicon.svg         # "NV" monogram favicon
├── src/
│   ├── main.tsx            # React entry — mounts <App>
│   ├── App.tsx             # Section composition + shared section CSS
│   ├── App.css             # Section scaffolding + reveal baseline
│   ├── index.css           # Design tokens (CSS variables), base styles, grain
│   ├── data/
│   │   └── resume.ts       # ALL site content as typed data (edit here)
│   ├── hooks/
│   │   └── useReveal.ts     # IntersectionObserver scroll-reveal hook
│   └── components/
│       ├── Nav.tsx/.css        # Sticky nav, scrollspy, progress-aware
│       ├── Hero.tsx/.css       # Landing — staggered load animation
│       ├── Work.tsx/.css       # Experience timeline
│       ├── About.tsx/.css      # Bio + facts grid
│       ├── Skills.tsx/.css     # Capability grid
│       ├── Contact.tsx/.css    # Contact links + footer
│       └── ScrollProgress.tsx/.css  # Top scroll-progress bar
└── docs/                   # This documentation
```

## Content model

All visible copy lives in **`src/data/resume.ts`** as typed objects
(`profile`, `summary`, `experience`, `skillGroups`, `about`). Components render
from this data — to update the site's content, edit that one file. No copy is
hardcoded inside components.

Key shapes:

- `profile` — name, title, tagline, location, availability, email, links.
- `experience` — array of companies, each with one or more `roles` (client,
  title, period, location, optional summary, optional stack, highlights).
- `skillGroups` — labelled groups of skill chips.
- `about` — bio paragraphs, certifications, education.

## Sections

1. **Hero** — name, role, key facts, availability indicator, scroll cue. Plays a
   staggered CSS load animation on first paint.
2. **Work** — numbered timeline of all roles, with a "Current" badge, per-role
   stack chips, and hover states.
3. **About** — bio paragraphs (sticky heading) plus a facts grid (education,
   certification, languages, years of experience).
4. **Skills** — capabilities grouped into a hairline grid with hover accents.
5. **Contact** — oversized mailto headline, social/contact links, footer.

## Design system

Defined as CSS custom properties in `src/index.css` (`:root`):

- **Palette** — near-black canvas (`--ink`), warm amber accent (`--accent`),
  paper-toned text (`--paper`, `--paper-dim`, `--paper-mute`).
- **Type** — `--font-display` (Fraunces), `--font-mono` (JetBrains Mono),
  `--font-sans` (Manrope).
- **Rhythm** — `--maxw`, fluid `--gutter`, fluid `--section-y`, shared
  `--ease` easing curve.
- Subtle film-grain overlay and atmospheric radial glows for depth.

## Accessibility & motion

- Honors `prefers-reduced-motion`: load and scroll-reveal animations are
  disabled, and revealed content shows immediately.
- Visible keyboard focus ring (`:focus-visible`).
- Semantic landmarks (`header`, `main`, `nav`, `footer`, `section` with ids).

## Local development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check (tsc -b) + production build → dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

Requires Node 18+ (developed on Node 22).

## Deployment

Hosted on Vercel's free tier. See
[`deploy-to-vercel.md`](./deploy-to-vercel.md) for step-by-step instructions.
The production build output is `dist/`; `vercel.json` pins the Vite framework
preset and adds an SPA rewrite so client-side navigation and deep-link refreshes
resolve to `index.html`.
