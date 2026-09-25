# Nihon Heritage Motors — website design

Marketing site for **Nihon Heritage Motors**, a specialist importer of classic Japanese cars. It's built on the [Nihon Heritage Motors design system](https://claude.ai/artifact/7Yc2Ckmh5WPA2tWS25W5Cd): a precise, understated, archive-like look with black-and-white surfaces, Garamond headings and red used only as a deliberate accent.

## What's here

| Path | What |
| --- | --- |
| `index.html` | Home page: hero, archive ledger, import lane, provenance feature, enquiry form |
| `styleguide.html` | Live style guide: logo, colour, type, spacing, radius, components |
| `css/tokens.css` | Design tokens as CSS custom properties (mirrors `design-system/tokens.json`) |
| `css/site.css` | Site layout and components, built only from tokens |
| `design-system/tokens.json` | Token source copied from the design system |
| `design-system/brand-book.md` | Brand rules: logo, colour, type, space, imagery |
| `assets/brand/` | Master emblem (PNG as supplied), 512px copy, favicon and touch icon |
| `assets/images/` | Showroom, grille badge and stationery concept renders (WebP, 800px and full size) |

## Run it

It's a static site with no build step:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

To publish on GitHub Pages, set **Settings → Pages → Source** to this branch and the `/ (root)` folder.

## Brand rules to keep

- Use the emblem file as supplied, only on light surfaces (`paper`, `warmpaper`, `washi`), at least 48px tall.
- Show at most one `NHMred` element per view. Don't use red for errors, because red already means the brand.
- Keep corners square and add no shadows or gradients. Separate content with `Hairline` rules or a change of surface.
- The dark theme is defined in `css/tokens.css` under `[data-theme="dark"]` but switched off. It stays off until a reversed emblem exists.

## Placeholders before launch

- The archive listings are illustrative. Replace them with live stock.
- All photography is concept rendering, not real premises or cars.
- The enquiry form validates on the client only and needs a backend (for example Formspree, Netlify Forms or your CRM).
- Budget ranges are in GBP. Change them if you trade in another currency.
