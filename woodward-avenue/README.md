# Woodward Avenue by NHM — website

Homepage for **Woodward Avenue by NHM**, the American-classics counterpart to [Nihon Heritage Motors](https://aryanmayekar999-byte.github.io/nhmwebsitedesign/index.html). It offers NHM's concierge service for vintage American cars: a collector in India finds a car in the US with our help, has it inspected, buys it in their own name, and we ship it to India and maintain it. Like NHM, Woodward Avenue is launching and the copy says so.

A static site with no build step. Everything that goes live is in `site/`. Open `site/index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000 --directory woodward-avenue/site
```

## Hosting on its own domain

This repo also holds the Nihon Heritage Motors site, which GitHub Pages serves from the repo root. GitHub Pages allows only one site and one custom domain per repo, so Woodward Avenue is hosted separately, from this folder, on Cloudflare Pages (free). Both sites stay in this repo.

1. **Create the project.** In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**, and pick `aryanmayekar999-byte/nhmwebsitedesign`.
2. **Configure the build.**
   - Production branch: `main`
   - Framework preset: None
   - Build command: leave empty
   - Build output directory: `woodward-avenue/site`

   Under **Build watch paths**, include only `woodward-avenue/site/*`, so NHM changes don't redeploy Woodward Avenue. The site is then live at `https://<project-name>.pages.dev`.
3. **Add the domain.** Register a domain, for example `woodwardavenue.in` (check it's available). In the project, open **Custom domains → Set up a custom domain**. If the domain's DNS is on Cloudflare, the record is added for you. Otherwise, add the CNAME record Cloudflare shows at your registrar. HTTPS is issued automatically.
4. **Update the site.** Once the domain is live, add `<link rel="canonical" href="https://<your-domain>/">` to `site/index.html`.

Netlify works the same way: set base directory `woodward-avenue/site`, leave the build command empty, and set the publish directory to `.`.

## Layout

| Path | What it is |
| --- | --- |
| `site/index.html` | The homepage, responsive from phone to desktop |
| `site/css/styles.css` | All styles; the palette and fonts are CSS variables at the top |
| `site/js/main.js` | Mobile menu toggle |
| `site/assets/logo/` | Wordmark in ivory (`-light`, for dark backgrounds) and charcoal (`-dark`, for light backgrounds) |
| `site/assets/images/` | Concept renders: storefront, display plaque, stationery |
| `design/canvas/` | Source of the design canvas (desktop and mobile artboards), kept in step with the site. Its image links only resolve inside the canvas |
| `design/woodward-logo-source.jpg` | The supplied logo image |
| `design/key-logo.py` | Rebuilds the transparent logo PNGs from the source image (`python3 woodward-avenue/design/key-logo.py`, needs Pillow and numpy) |
| `docs/concept-brief.md` | The identity brief |

## Brand

- Deep charcoal `#202527` and warm ivory `#F7F3E9`, alternating by section
- Muted copper `#B77A46` for rules and detail. Text uses `#C98E5A` on charcoal and `#8A5A30` on ivory so it meets contrast requirements
- NHM red `#DC010F` appears only as the dot in the logo
- Fonts from Google Fonts: Marcellus for headings, Josefin Sans for uppercase labels, Instrument Sans for body text

## Before launch

- **Enquiries:** the contact section says Woodward Avenue isn't taking clients yet and has no form, as on the NHM site. Add a working channel (an email link or a form service) once you're ready. Never show a form that doesn't send.
- **Launch status:** remove the "launching" notes when you open.
- **Domain:** set up hosting and the domain as described above. The NHM links point at `https://aryanmayekar999-byte.github.io/nhmwebsitedesign/`. Update them if NHM moves to its own domain.
- **Import rule:** the copy assumes India's rolling 50-year vintage rule, as the NHM site does. Update both if the rule changes.
- **Photography:** the storefront, plaque and stationery images are concept renders. Replace them with real photography before launch.
- **Logo:** redraw the wordmark as a vector master, as the brief asks. The PNGs are keyed from a generated image.
