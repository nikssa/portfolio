# Pre-Share / SEO Checklist

Run through this before you put the URL on a job application, your LinkedIn, or
paste it to a recruiter. The big one is the **social share image** — without it,
pasting your link into LinkedIn / Slack / iMessage shows a blank or broken
preview, which reads as unfinished.

Each item below notes whether it's **done**, **missing**, or **optional**, based
on the current `index.html`.

---

## 1. Social share image (Open Graph) — MISSING, highest priority

Right now there is no `og:image`, so link previews unfurl with no image.

**Do this:**

1. Create a 1200×630 PNG/JPG share card (name, title, maybe the amber-on-black
   look of the site). Export it to `public/og.png`.
2. Add these tags to `<head>` in `index.html` (replace the production URL with
   your real one once deployed):

   ```html
   <meta property="og:image" content="https://YOUR-DOMAIN/og.png" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:image" content="https://YOUR-DOMAIN/og.png" />
   ```

   > `og:image` should be an **absolute** URL (scrapers don't resolve relative
   > paths). Set it after you know your final domain.

3. Validate the preview:
   - LinkedIn: <https://www.linkedin.com/post-inspector/>
   - General / Facebook: <https://developers.facebook.com/tools/debug/>
   - (Re-run the inspector after changes — these services cache aggressively.)

---

## 2. Canonical URL & og:url — MISSING

Tells search engines and scrapers the authoritative address. Add once you have
your production domain:

```html
<link rel="canonical" href="https://YOUR-DOMAIN/" />
<meta property="og:url" content="https://YOUR-DOMAIN/" />
```

---

## 3. Twitter / X card tags — MISSING

If you share on X, add (the image tags above cover the visual):

```html
<meta name="twitter:title" content="Nikša Volarević — Senior Frontend Engineer" />
<meta name="twitter:description" content="React · Next.js · TypeScript. 12+ years building React applications at scale." />
```

---

## 4. Title & meta description — DONE

Already in `index.html`:

- `<title>` — "Nikša Volarević — Senior Frontend Engineer"
- `<meta name="description">` — present and accurate.
- `<meta name="author">`, `og:title`, `og:description`, `og:type` — present.

Review the wording one more time; this is the text that shows in Google results
and link previews.

---

## 5. Favicon — DONE

`public/favicon.svg` is the "NV" monogram, linked in `index.html`.

**Optional polish:** some platforms (older browsers, iOS home-screen) prefer a
PNG. If you want full coverage, add a `public/apple-touch-icon.png` (180×180)
and:

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

---

## 6. `robots.txt` — MISSING (optional)

Not required to be indexed, but a clean addition. Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://YOUR-DOMAIN/sitemap.xml
```

If you don't make a sitemap, drop the `Sitemap:` line. For a single-page site a
sitemap is genuinely optional.

---

## 7. `theme-color` — MISSING (optional, nice touch)

Tints the browser UI on mobile to match the site:

```html
<meta name="theme-color" content="#0a0a0b" />
```

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

## Suggested order

1. Make and add the **OG share image** (#1) — biggest visible payoff.
2. Deploy, get your final URL.
3. Fill in the **absolute URLs**: canonical, `og:url`, `og:image` (#1–#3).
4. Add the small niceties: `theme-color`, `robots.txt`, apple-touch-icon
   (#6, #7, #5) if you want them.
5. Run the **functional pass** (#9), then re-validate the link preview with the
   LinkedIn Post Inspector.
