# Woodward Avenue by NHM — website

Homepage for **Woodward Avenue by NHM**, the American-classics counterpart to [Nihon Heritage Motors](https://aryanmayekar999-byte.github.io/nhmwebsitedesign/index.html). It offers NHM's concierge service for vintage American cars: a collector in India finds a car in the US with our help, has it inspected, buys it in their own name, and we ship it to India and maintain it. Like NHM, Woodward Avenue is launching and the copy says so.

A static site with no build step. Everything that goes live is in `site/`. Open `site/index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000 --directory woodward-avenue/site
```

## Hosting

Woodward Avenue is hosted on **Cloudflare Pages**, on its free cloud address: **`https://woodward-avenue.pages.dev`**. No domain has to be bought.

This repo also holds the Nihon Heritage Motors site, which GitHub Pages serves from the repo root. GitHub Pages allows only one site per repo, so Woodward Avenue is deployed from this folder by Cloudflare instead. Both sites stay in this repo.

### One-time setup (about 5 minutes)

1. Sign in to Cloudflare. A free account is enough.
2. Go to **Workers & Pages → Create → Pages → Connect to Git**. Authorise GitHub and pick `aryanmayekar999-byte/nhmwebsitedesign`.
3. Fill in the settings:

   | Setting | Value |
   | --- | --- |
   | Project name | `woodward-avenue` (this becomes `woodward-avenue.pages.dev`) |
   | Production branch | `main` |
   | Framework preset | None |
   | Build command | *(leave empty)* |
   | Build output directory | `woodward-avenue/site` |

4. Click **Save and Deploy**. The site is live at `https://woodward-avenue.pages.dev` within a minute.
5. Under **Settings → Build → Build watch paths**, set the include path to `woodward-avenue/site/*`, so changes to the NHM site don't redeploy Woodward Avenue.

If the project name is taken, Cloudflare adds a short suffix to the address. Use whatever address it shows.

### After setup

- **Deploys:** every push to `main` that touches `woodward-avenue/site/` redeploys the site. Other branches and pull requests get their own preview address, shown on the pull request.
- **Before merging:** to put the site live before this branch is merged, set the production branch to `claude/dazzling-albattani-ghayyj` for now, then switch it back to `main`.
- **Canonical link:** once the address is confirmed, add `<link rel="canonical" href="https://woodward-avenue.pages.dev/">` to `site/index.html`.
- **Headers:** `site/_headers` sets security headers and caching for images on Cloudflare Pages. Other hosts ignore the file.
- **Own domain later:** add it under **Custom domains** in the project. The `pages.dev` address keeps working.

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
- **Hosting:** complete the Cloudflare setup above. The NHM links point at `https://aryanmayekar999-byte.github.io/nhmwebsitedesign/`. Update them if NHM moves to its own domain.
- **Import rule:** the copy assumes India's rolling 50-year vintage rule, as the NHM site does. Update both if the rule changes.
- **Photography:** the storefront, plaque and stationery images are concept renders. Replace them with real photography before launch.
- **Logo:** redraw the wordmark as a vector master, as the brief asks. The PNGs are keyed from a generated image.
