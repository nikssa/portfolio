# How to Deploy to Vercel (Free / Hobby Tier)

This guide walks through deploying the portfolio to Vercel's free **Hobby**
plan. Two paths are covered:

- **Path A — Vercel CLI** (deploy straight from your laptop, no Git required)
- **Path B — Git + Dashboard** (auto-deploy on every push; recommended long-term)

Both are free. Pick one.

---

## Current status (2026-06-10)

- **Live:** <https://portfolio-cyan-two-15.vercel.app> — Vercel account
  `nikssa-8456`, project `portfolio`. First deploy via Path A succeeded.
- **GitHub:** `git@github.com:nikssa/portfolio.git` (branch `main`), pushed but
  not yet connected to Vercel for auto-deploy (Path B).
- **Known issue / pending:** a follow-up redeploy (to point the SEO absolute
  URLs at the real domain) got stuck at Vercel status `UNKNOWN` for 20+ minutes
  on both remote-build and `--prebuilt` paths, so **it did not land**. The fix
  is committed on `main` (`7d24fc0`) but the live `og:image`/canonical still
  serve the wrong domain until a successful deploy completes. Retry the CLI once
  Vercel's queue clears, or connect Path B. See the troubleshooting table below.

---

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free; sign up with GitHub,
  GitLab, Bitbucket, or email).
- Node.js 18+ installed locally (this project was developed on Node 22).
- A clean production build. Verify before deploying:

  ```bash
  cd ~/Apps/portfolio
  npm install
  npm run build      # must finish with no errors → creates dist/
  ```

> This repo already includes `vercel.json`, which pins the **Vite** framework
> preset, the build command, the `dist/` output directory, and an SPA rewrite.
> You do not need to configure build settings manually — Vercel reads this file.

---

## Path A — Deploy with the Vercel CLI

Fastest way to get a live URL. No Git repository needed.

### 1. Run the first deploy

```bash
cd ~/Apps/portfolio
npx vercel
```

The first run is **interactive**. Expected prompts and recommended answers:

| Prompt                                   | Answer                          |
| ---------------------------------------- | ------------------------------- |
| Log in to Vercel                         | Choose your method, authorize   |
| Set up and deploy "~/Apps/portfolio"?    | **Y**                           |
| Which scope should contain this project? | Select your personal account    |
| Link to existing project?                | **N** (this is new)             |
| What's your project's name?              | `portfolio` (or accept default) |
| In which directory is your code located? | `./`                            |
| Want to modify the detected settings?    | **N** (Vite is auto-detected)   |

Vercel builds the project and prints a **preview URL** (e.g.
`https://portfolio-xxxx.vercel.app`). This is a preview deployment.

### 2. Promote to production

```bash
npx vercel --prod
```

This deploys to your production URL (e.g. `https://portfolio.vercel.app`).

### 3. Subsequent deploys

After the first run, the project is linked (a local `.vercel/` folder is
created — already covered by `.gitignore`). Re-deploy any time with:

```bash
npx vercel          # new preview deploy
npx vercel --prod   # promote to production
```

---

## Path B — Deploy via Git + Vercel Dashboard (recommended)

This gives you automatic deploys: every push to your default branch ships to
production, and every pull request gets its own preview URL.

### 1. Put the project on a Git host

If it isn't a repo yet:

```bash
cd ~/Apps/portfolio
git init
git add .
git commit -m "Initial commit: portfolio site"
```

Create an empty repository on GitHub (or GitLab/Bitbucket), then:

```bash
git remote add origin https://github.com/<your-username>/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Import into Vercel

1. Go to <https://vercel.com/new>.
2. Click **Import** next to your `portfolio` repository (authorize Vercel to
   access the repo if prompted).
3. Vercel auto-detects the framework as **Vite**. Confirm:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

   (These match `vercel.json`, so leave them as detected.)
4. Click **Deploy**.

### 3. Done — automatic from here

- Pushes to `main` → production deploy.
- Pushes to other branches / PRs → unique preview deploys.

---

## After deploying

### Custom domain (optional, free)

1. In the Vercel dashboard: **Project → Settings → Domains**.
2. Add your domain and follow the DNS instructions (add the shown `A` /
   `CNAME` records at your registrar).
3. Vercel provisions HTTPS automatically.

A free `*.vercel.app` subdomain is assigned by default — no setup needed.

### Environment variables

This site has none. If you add any later: **Settings → Environment Variables**
in the dashboard, or `vercel env add` via the CLI. Client-exposed variables must
be prefixed `VITE_` to be read by Vite.

---

## Free (Hobby) tier — what you get & limits

The Hobby plan is free and ample for a static portfolio. Key points:

- Unlimited static sites and personal projects.
- Automatic HTTPS and global CDN.
- Generous bandwidth for personal use (currently ~100 GB/month).
- **Non-commercial use only** — the Hobby tier is for personal projects, not
  commercial/business sites. A portfolio is fine.
- No team collaboration features (single user).

Exact quotas change over time — see Vercel's
[pricing page](https://vercel.com/pricing) for current numbers.

---

## Troubleshooting

| Symptom                                   | Fix                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------- |
| Build fails on Vercel                     | Run `npm run build` locally first; fix errors before deploying.     |
| Fonts not loading                         | Check the network tab — the Google Fonts `<link>` is in `index.html`. |
| Page 404s on refresh of a deep link       | Ensure `vercel.json`'s `rewrites` block is present (it is by default). |
| CLI asks to link every time               | Don't delete the generated `.vercel/` folder in the project root.   |
| Wrong framework detected                  | `vercel.json` pins `"framework": "vite"` — keep that file.          |
| Deploy stuck at status `UNKNOWN` for many minutes | Seen 2026-06-10 on both remote-build and `--prebuilt`. A 9s build hanging 20+ min is a Vercel-side queue issue, not your build — retrying locally won't help. Cancel the stuck deploy (`npx vercel remove <url> --yes`), wait, then retry; or use Path B (Git integration) which deploys server-side. |

---

## Quick reference

```bash
# CLI deploy (Path A)
cd ~/Apps/portfolio
npx vercel          # preview
npx vercel --prod   # production

# Local checks before any deploy
npm run build       # type-check + production build
npm run preview     # serve the build at http://localhost:4173
```
