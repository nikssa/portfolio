# Editing Content

All visible text on the site comes from a single file:
**[`src/data/resume.ts`](../src/data/resume.ts)**. Components render from it —
you never edit copy inside the components themselves.

After any edit, check it locally:

```bash
npm run dev      # http://localhost:5173 — live reload
npm run build    # confirms types still compile before you deploy
```

The file is typed, so if a field is missing or misspelled, `npm run build`
fails with a clear error pointing at the problem.

---

## The exports, at a glance

| Export        | Drives                                  |
| ------------- | --------------------------------------- |
| `profile`     | Hero name/title/tagline, nav brand, contact links |
| `summary`     | (Available for reuse; long-form summary string) |
| `experience`  | The Work timeline                       |
| `skillGroups` | The Skills grid                         |
| `about`       | The About section (bio, certs, education) |

---

## Update your headline details

Edit the `profile` object:

```ts
export const profile: Profile = {
  name: "Nikša Volarević",
  title: "Senior Frontend Engineer",
  tagline: "React · Next.js · TypeScript",
  location: "Belgrade, Serbia",
  availability: "Open to remote — EU / US",
  yearsExperience: "12+ years",
  email: "nikssa@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nikssa", handle: "in/nikssa" },
    { label: "GitHub",   href: "https://github.com/nikssa",          handle: "github.com/nikssa" },
    { label: "Email",    href: "mailto:nikssa@gmail.com",            handle: "nikssa@gmail.com" },
  ],
};
```

- `tagline` and `availability` show in the Hero.
- `links` render in the Contact section. `href` is the real link; `handle` is
  the text shown. Add or remove entries freely.

---

## Add a new job

`experience` is an array of companies. Each company has one or more `roles`
(use multiple roles for distinct engagements at the same employer — e.g. two
teams at one client).

**Add a new company to the _top_ of the array** (most recent first):

```ts
export const experience: ResumeExperience[] = [
  {
    company: "New Employer Ltd.",
    title: "Staff Frontend Engineer",
    context: "Client: Acme Corp",          // shown as a sub-line; optional context
    period: "Jul 2026 — Present",
    location: "Remote",
    current: true,                           // shows the "Current" badge on the first role
    roles: [
      {
        client: "Acme Corp — Platform Team",
        title: "Staff Frontend Engineer",
        period: "Jul 2026 — Present",
        location: "Remote",
        summary: "One-line description of the engagement.",  // optional, italic
        stack: ["React", "TypeScript", "GraphQL"],            // optional chips
        highlights: [
          "Led the redesign of the design-system component library.",
          "Cut bundle size 40% by code-splitting the editor surface.",
        ],
      },
    ],
  },
  // ...existing entries below
];
```

Field notes:

- **`current`** — set `true` only on your present employer. The "Current" badge
  renders on that company's first role.
- **`summary`** and **`stack`** are optional — omit them and that part just
  doesn't render.
- **`highlights`** is required (at least one). These are the bullet points.
- The role number ("01", "02", …) in the timeline is **automatic** — it counts
  every role across all companies, top to bottom. You don't set it.

### Add a second engagement at the same employer

Add another object to that company's `roles` array (newest first):

```ts
roles: [
  { client: "Acme — Marketing Team", /* ...newer... */ },
  { client: "Acme — Platform Team",  /* ...older... */ },
],
```

---

## Reorder or remove roles

- **Reorder:** move objects within the `experience` array (or within a `roles`
  array). Order in the file = order on the page, top to bottom. Numbering
  re-computes automatically.
- **Remove:** delete the object. If you remove the only role from a company,
  delete the whole company entry too.

---

## Update skills

`skillGroups` is an array of `{ label, items }`. Each becomes one cell in the
Skills grid:

```ts
export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend",  items: ["React 19", "Next.js 16", "MUI"] },
  // add / remove groups; add / remove items within a group
];
```

The grid reflows automatically — add as many groups as you like.

---

## Update the About section

Edit the `about` object:

```ts
export const about = {
  paragraphs: [
    "First paragraph — rendered larger, as the lead.",
    "Second paragraph.",
    "Third paragraph.",
  ],
  certifications: ["Cert name — Issuer, Year"],
  education: "University — Field (Years)",
};
```

- The **first** paragraph is styled as the visual lead (serif, larger).
- The facts grid pulls `education`, `certifications[0]`, and
  `profile.yearsExperience`.

---

## Tailoring for a specific application

Because everything is one data file, tailoring is quick:

1. Edit `experience` highlights / `summary` / `profile.tagline` to emphasize
   what the role wants.
2. `npm run build` to confirm it compiles.
3. Deploy (see [`deploy-to-vercel.md`](./deploy-to-vercel.md)).

If you tailor often, consider keeping the master version on `main` and doing
throwaway edits on a branch — Vercel gives each branch its own preview URL.

---

## Common mistakes

| Symptom                                 | Cause / fix                                            |
| --------------------------------------- | ------------------------------------------------------ |
| `npm run build` fails with a type error | A required field (`company`, `title`, `period`, `location`, `highlights`) is missing, or a typo in a key name. |
| A bullet didn't appear                  | `highlights` entry empty or removed.                   |
| "Current" badge on the wrong job        | More than one company has `current: true`. Only the present one should. |
| Trailing-comma / quote error            | Keep the existing object syntax; every string in double quotes, items comma-separated. |
