# Pre-Share / SEO Checklist

Run through this before you put the URL on a job application, your LinkedIn, or
paste it to a recruiter.

Each item below notes whether it's **done**, **missing**, or **optional**, based
on the current `index.html`.

> **Production URL:** the absolute-URL tags (canonical, `og:url`, `og:image`,
> `twitter:image`) point at the live deployment,
> `https://portfolio-cyan-two-15.vercel.app/`. If you later add a custom domain,
> change it in the single marked block at the top of `index.html`'s `<head>`,
> then redeploy.

---

## 1. Social share image (Open Graph) — DONE

A 1200×630 share card is generated at `public/og.png` (on-brand: serif name,
amber accent, "FE" watermark). The source is `scripts/og-card.html` — see
[`scripts/README.md`](../scripts/README.md) to regenerate after branding tweaks.

The tags are in `index.html`:

```html
<meta property="og:image" content="https://portfolio-cyan-two-15.vercel.app/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://portfolio-cyan-two-15.vercel.app/og.png" />
```

**Still to do — validate the live preview after deploying** (the URL must
resolve for these to work):

- LinkedIn: <https://www.linkedin.com/post-inspector/>
- General / Facebook: <https://developers.facebook.com/tools/debug/>
- Re-run the inspector after any change — these services cache aggressively.

---

## 2. Canonical URL & og:url — DONE

Both present in `index.html` (pointing at the live deployment — update if you
add a custom domain):

```html
<link rel="canonical" href="https://portfolio-cyan-two-15.vercel.app/" />
<meta property="og:url" content="https://portfolio-cyan-two-15.vercel.app/" />
```

---

## 3. Twitter / X card tags — DONE

Present in `index.html`: `twitter:card` (`summary_large_image`),
`twitter:title`, `twitter:description`, and `twitter:image`.

---

## 4. Title & meta description — DONE

Already in `index.html`:

- `<title>` — "Nikša Volarević — Senior Frontend Engineer"
- `<meta name="description">` — present and accurate.
- `<meta name="author">`, `og:title`, `og:description`, `og:type` — present.

Review the wording one more time; this is the text that shows in Google results
and link previews.

---

## 5. Favicon & touch icon — DONE

- `public/favicon.svg` — "NV" monogram, linked in `index.html`.
- `public/apple-touch-icon.png` — 180×180 PNG for iOS home-screen, linked via
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`. Source:
  `scripts/touch-icon.html`.

---

## 6. `robots.txt` — DONE

`public/robots.txt` allows all crawlers:

```
User-agent: *
Allow: /
```

No `Sitemap:` line — a sitemap is genuinely optional for a single-page site.

---

## 7. `theme-color` — DONE

`<meta name="theme-color" content="#0a0a0b" />` is in `index.html` — tints the
mobile browser UI to match the dark canvas.

---

## 8. `lang` attribute — DONE

`<html lang="en">` is set.

---

## 9. Final functional pass

- [ ] `npm run build` passes (no type errors).
- [ ] Open the deployed URL on a **phone** — check the Hero, nav, and Work
      timeline reflow correctly.
- [ ] Test with reduced motion on (macOS: System Settings → Accessibility →
      Display → Reduce motion) — content should appear immediately, no missing
      sections.
- [ ] Tab through the page with the keyboard — focus ring is visible, links
      reachable.
- [ ] Click every contact link — `mailto:` opens, LinkedIn/GitHub go to the
      right profiles.
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse) — aim for green on
      Performance, Accessibility, Best Practices, SEO. Easy wins here look good
      to engineering reviewers who peek at the tab.

---

## What's left

Items 1–8 are implemented. The only remaining steps depend on having a live URL:

1. **Deploy** and confirm your actual domain (see
   [`deploy-to-vercel.md`](./deploy-to-vercel.md)).
2. **If you add a custom domain** (not `portfolio-cyan-two-15.vercel.app`),
   update it in the marked block at the top of `index.html`'s `<head>`, then
   redeploy.
3. **Validate the share preview** with the LinkedIn Post Inspector and the
   Facebook debugger (they cache — re-run after changes).
4. Run the **functional pass** (#9) on the live site, including Lighthouse.
