# Woodward Avenue by NHM — website

Homepage for **Woodward Avenue by NHM**, the American-classics counterpart to [Nihon Heritage Motors](https://aryanmayekar999-byte.github.io/nhmwebsitedesign/index.html). It offers NHM's concierge service for vintage American cars: a collector in India finds a car in the US with our help, has it inspected, buys it in their own name, and we ship it to India and maintain it. Like NHM, Woodward Avenue is launching and the copy says so.

A static site with no build step. Everything that goes live is in `site/`. Open `site/index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000 --directory woodward-avenue/site
```

## Hosting

Woodward Avenue is hosted on **Cloudflare**, as a Worker that serves static files, at its free cloud address: **`https://nhmwebsitedesign.<your-account>.workers.dev`**. No domain has to be bought.

This repo also holds the Nihon Heritage Motors site, which GitHub Pages serves from the repo root. GitHub Pages allows only one site per repo, so Woodward Avenue is deployed to Cloudflare instead. Both sites stay in this repo.

`wrangler.jsonc` at the repo root tells Cloudflare what to deploy: the files in `woodward-avenue/site/`, and nothing else. Check it locally with `npx wrangler deploy --dry-run`.

### One-time setup

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository**, and pick `aryanmayekar999-byte/nhmwebsitedesign`.
2. Fill in the settings:

   | Setting | Value |
   | --- | --- |
   | Project name | `nhmwebsitedesign` (the current Worker). It must match `name` in `wrangler.jsonc`; rename both together |
   | Build command | *(leave empty)* |
   | Deploy command | `npx wrangler deploy` (the default) |
   | Root directory | `/` (the default) |

3. Deploy. The address is shown on the project's overview page. It's `nhmwebsitedesign.<your-account>.workers.dev`.
4. Under **Settings → Build → Branch control**, set the production branch to `main`. To go live before this branch is merged, use `claude/dazzling-albattani-ghayyj` for now, then switch back.
5. Under **Settings → Build → Build watch paths**, include `woodward-avenue/site/*` and `wrangler.jsonc`, so changes to the NHM site don't redeploy Woodward Avenue.

### After setup

- **Deploys:** every push to the production branch that touches the site redeploys it. Other branches get preview addresses.
- **Canonical link:** once the address is confirmed, add `<link rel="canonical" href="https://<your address>/">` to `site/index.html`.
- **Headers:** `site/_headers` sets security headers and caching for images. Cloudflare applies it; it isn't served as a file.
- **Own domain later:** add it under **Settings → Domains & Routes**. The `workers.dev` address keeps working.

## Layout

| Path | What it is |
| --- | --- |
| `site/index.html` | The homepage, responsive from phone to desktop, with featured listings |
| `site/listings.html` | All listings, with search, type, make and sort filters (kept in the URL) |
| `site/listing.html?id=…` | One model's profile: photo, specification, India eligibility, what to check |
| `site/credits.html` | Photo credits and licences |
| `site/css/styles.css` | All styles; the palette and fonts are CSS variables at the top |
| `site/js/main.js` | Mobile menu toggle |
| `site/js/data.js` | Listings data, the rolling 50-year eligibility rule, and the shared card and credit helpers |
| `site/js/photos.js` | Listing photo credits (author, licence, source) |
| `site/js/listings.js` | Listings page filters |
| `site/assets/listings/` | Listing photos from Wikimedia Commons, cropped to 3:2 at 640 and 1200 px (WebP) |
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
- Type matches Nihon Heritage Motors: Cormorant Garamond (600) for headings and Inter for text, at NHM's sizes (display 64/68, heading-1 44/50, heading-2 32/38, eyebrow 12/16 at 0.14em). Headings use lining figures so years read cleanly

## Listings

Listings are model profiles, not cars for sale. To add or edit one, change the `WA.listings` array in `site/js/data.js`; eligibility is calculated from `from` and `to` in the visitor's browser, so a model qualifies automatically once it is 50 years old. Each listing needs a `category` (`luxury`, `personal` or `sports`).

Photos are optional. To add one, save 3:2 crops as `site/assets/listings/<id>-640.webp` and `<id>-1200.webp`, and add an entry to `site/js/photos.js` with the author, licence and Commons page. The listing and credits pages show the credit automatically. The licences (CC BY, CC BY-SA, CC0, public domain) require that credit, so keep it whenever a photo changes.

## Before launch

- **Enquiries:** the contact section says Woodward Avenue isn't taking clients yet and has no form, as on the NHM site. Add a working channel (an email link or a form service) once you're ready. Never show a form that doesn't send.
- **Launch status:** remove the "launching" notes when you open.
- **Hosting:** complete the Cloudflare setup above. The NHM links point at `https://aryanmayekar999-byte.github.io/nhmwebsitedesign/`. Update them if NHM moves to its own domain.
- **Import rule:** the copy assumes India's rolling 50-year vintage rule, as the NHM site does. Update both if the rule changes.
- **Photography:** the storefront, plaque and stationery images are concept renders. Replace them with real photography before launch.
- **Logo:** redraw the wordmark as a vector master, as the brief asks. The PNGs are keyed from a generated image.
