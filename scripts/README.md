# scripts/

Source HTML used to generate static brand images in `public/`. Not part of the
app bundle — they're rendered once with headless Chrome and the PNGs are
committed.

## Regenerate

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# OG share image → public/og.png (1200×630)
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 \
  --screenshot="$PWD/public/og.png" "file://$PWD/scripts/og-card.html"

# Apple touch icon → public/apple-touch-icon.png (180×180)
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=180,180 \
  --screenshot="$PWD/public/apple-touch-icon.png" "file://$PWD/scripts/touch-icon.html"
```

Run from the project root. Edit the `.html` files to change branding, then
re-run.
