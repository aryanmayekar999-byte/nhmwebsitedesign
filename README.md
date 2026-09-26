# Woodward Avenue by NHM — website

Homepage for **Woodward Avenue by NHM**, the American-classics counterpart to [Nihon Heritage Motors](https://aryanmayekar999-byte.github.io/nhmwebsitedesign/index.html). It offers NHM's concierge service for vintage American cars: a collector in India finds a car in the US with our help, has it inspected, buys it in their own name, and we ship it to India and maintain it. Like NHM, Woodward Avenue is launching and the copy says so.

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
| `design/canvas/` | Source of the first design canvas (desktop and mobile artboards). It predates the NHM service copy, so `index.html` is the current version. Its image links only resolve inside the canvas |
| `design/key-logo.py` | Rebuilds the transparent logo PNGs from the source image (`python3 design/key-logo.py`, needs Pillow and numpy) |
| `docs/concept-brief.md` | The identity brief |

## Brand

- Deep charcoal `#202527` and warm ivory `#F7F3E9`, alternating by section
- Muted copper `#B77A46` for rules and detail. Text uses `#C98E5A` on charcoal and `#8A5A30` on ivory so it meets contrast requirements
- NHM red `#DC010F` appears only as the dot in the logo
- Fonts from Google Fonts: Marcellus for headings, Josefin Sans for uppercase labels, Instrument Sans for body text

## Before launch

- **Enquiries:** the contact section says Woodward Avenue isn't taking clients yet and has no form, as on the NHM site. Add a working channel (an email link or a form service) once you're ready. Never show a form that doesn't send.
- **Launch status:** remove the "launching" notes when you open.
- **Links to NHM:** the NHM links point at `https://aryanmayekar999-byte.github.io/nhmwebsitedesign/`. If Woodward Avenue is published from this same repo's GitHub Pages, it will take over that address. Give one of the two sites its own repo or domain first.
- **Import rule:** the copy assumes India's rolling 50-year vintage rule, as the NHM site does. Update both if the rule changes.
- **Photography:** the storefront, plaque and stationery images are concept renders. Replace them with real photography before launch.
- **Logo:** redraw the wordmark as a vector master, as the brief asks. The PNGs are keyed from a generated image.
