# Nihon Heritage Motors — website design

Site for **Nihon Heritage Motors**, a planned importer of classic Japanese cars for collectors in India. The copy describes NHM as in development, not as an operating business. It's built on the [Nihon Heritage Motors design system](https://claude.ai/artifact/7Yc2Ckmh5WPA2tWS25W5Cd): a precise, understated, archive-like look with black-and-white surfaces, Garamond headings and red used only as a deliberate accent.

## What's here

| Path | What |
| --- | --- |
| `index.html` | Home page: hero, why Japanese classics, example archive, how it will work, provenance, contact (enquiries not open yet) |
| `styleguide.html` | Live style guide: logo, colour, type, spacing, radius, components |
| `css/tokens.css` | Design tokens as CSS custom properties (mirrors `design-system/tokens.json`) |
| `css/site.css` | Site layout and components, built only from tokens |
| `design-system/tokens.json` | Token source copied from the design system |
| `design-system/brand-book.md` | Brand rules: logo, colour, type, space, imagery |
| `assets/brand/` | Master emblem (PNG as supplied), 512px copy, favicon and touch icon |
| `assets/images/` | Showroom, Datsun 240Z (cropped from the campaign poster), grille badge and stationery concept renders (WebP, 800px and full size) |

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

## Before launch

- **Enquiries:** the contact section says enquiries open soon and has no form. Add a working channel (an email link, or a form service such as Formspree or your CRM) once you're ready to receive enquiries. Never show a form that doesn't send.
- **Claims:** the sourcing, inspection, documentation and delivery copy is written as the plan. Change it to present tense only once those partners and processes exist.
- **Archive:** it's an example of the models NHM plans to source, with no stock or status. Replace it with real cars when there is stock.
- **Import eligibility:** the site assumes India's vintage rule is a rolling 50-year cutoff. The archive's "India import" column is recalculated from the current year in the browser; each row's `data-built-from` and `data-built-to` attributes drive it. Update the copy and script if the rule changes.
- **Photography:** all images are concept renders, not real premises or cars.
