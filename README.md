# Woodward Avenue by NHM — website

Homepage for **Woodward Avenue by NHM**, the American-classics counterpart to Nihon Heritage Motors: the same sourcing, inspection, provenance and import service, for vintage American cars.

A static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The homepage, responsive from phone to desktop |
| `css/styles.css` | All styles; the palette and fonts are CSS variables at the top |
| `js/main.js` | Mobile menu toggle |
| `assets/logo/` | Wordmark in ivory (`-light`, for dark backgrounds) and charcoal (`-dark`, for light backgrounds), plus the supplied source image |
| `assets/images/` | Concept renders: storefront, display plaque, stationery |
| `design/canvas/` | Source of the design canvas (desktop and mobile artboards). Its image links point at the canvas's uploaded assets, so they only resolve inside the canvas |
| `design/key-logo.py` | Rebuilds the transparent logo PNGs from the source image (`python3 design/key-logo.py`, needs Pillow and numpy) |
| `docs/concept-brief.md` | The identity brief |

## Brand

- Deep charcoal `#202527` and warm ivory `#F7F3E9`, alternating by section
- Muted copper `#B77A46` for rules and detail. Text uses `#C98E5A` on charcoal and `#8A5A30` on ivory so it meets contrast requirements
- NHM red `#DC010F` appears only as the dot in the logo
- Fonts from Google Fonts: Marcellus for headings, Josefin Sans for uppercase labels, Instrument Sans for body text

## Before launch

- Replace the bracketed placeholders: `[YOUR PHONE]`, `[YOUR EMAIL]`, the addresses, `[X working days]`, the budget ranges, `[NHM WEBSITE]`
- Point the request form's `action="[FORM ENDPOINT]"` at a real handler
- Confirm the six services match what NHM actually offers
- Replace the concept renders with real photography. The site currently says "Imagery shown is illustrative"
- Redraw the wordmark as a vector master, as the brief asks; the PNGs are keyed from a generated image
