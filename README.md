# Nihon Heritage Motors — website design

Site for **Nihon Heritage Motors**, a concierge that helps collectors in India find, inspect, import and maintain classic Japanese cars. NHM is launching, and the copy says so. It's built on the [Nihon Heritage Motors design system](https://claude.ai/artifact/7Yc2Ckmh5WPA2tWS25W5Cd): a precise, understated, archive-like look with black-and-white surfaces, Garamond headings and red used only as a deliberate accent.

For the business itself (what NHM is, its services and the rules it works within), see [`NHM.md`](NHM.md).

## What's here

| Path | What |
| --- | --- |
| `index.html` | Home: concierge overview, featured eligible listings, research links, provenance, contact |
| `services.html` | The concierge: find, inspect, you buy, ship, maintain; who does what; FAQ |
| `listings.html` | Model listings with search, make, eligibility and sort filters (state kept in the URL) |
| `listing.html?id=…` | One model's profile: specification, India eligibility, what to check, related listings |
| `auctions.html` | Japanese dealer auctions, auction agents, exporter marketplaces and collector auctions that sell abroad |
| `guide.html` | 12-step buying guide with an eligibility checker and landed-cost calculator |
| `woodward.html` | Introduces Woodward Avenue by NHM, the sister concierge for American classics (link to be added) |
| `credits.html` | Photo credits for the listing photographs |
| `styleguide.html` | Live style guide: logo, colour, type, spacing, radius, components |
| `js/data.js` | Listings data, the rolling 50-year eligibility rule and the shared listing card |
| `js/listings.js`, `js/guide.js` | Listings filters; guide tools |
| `css/tokens.css`, `css/site.css` | Design tokens and site styles |
| `design-system/` | Token source and brand book from the design system |
| `assets/` | Emblem, favicon, brand concept renders, and listing photos (`assets/listings/`) |
| `js/photos.js` | Listing photo credits (author, licence, source) |

## Business model

NHM is a concierge, not a dealer. The client finds the car with NHM's help and buys it in their own name. That fits India's vintage import policy, which is for the car's actual user and restricts resale. NHM pre-inspects the car, arranges shipping, customs and registration, and provides service and maintenance afterwards.

## Content to keep current

- **Listings:** to add or edit a model, change the `NHM.listings` array in `js/data.js`. Eligibility is calculated from `from` and `to`.
- **Auctions:** third-party services are listed for reference, without affiliation. Check the names, links and descriptions periodically.
- **Import rules:** the guide cites DGFT Notification 58/2024-25. Update the guide if the policy changes.
- **Calculator:** no duty, tax or exchange rate is pre-filled on purpose. Users enter the rates their broker quotes. Inputs are remembered in the browser only.

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

- **Enquiries:** the contact section says NHM isn't taking clients yet and has no form. Add a working channel (an email link, or a form service such as Formspree or your CRM) once you're ready to receive enquiries. Never show a form that doesn't send.
- **Woodward Avenue link:** when the site is live, replace the "Coming soon" notice (`#woodward-status`) in `woodward.html` with a link to it, and update the home page teaser.
- **Launch status:** pages say NHM is launching and partners aren't in place. Remove those notes when you open.
- **Import eligibility:** the site assumes India's vintage rule is a rolling 50-year cutoff. Listing eligibility is recalculated from the current year in the browser. Update the copy and script if the rule changes.
- **Photography:** the showroom, grille badge and stationery images are concept renders. Listing photos are real cars from Wikimedia Commons under CC0, CC BY or CC BY-SA. Keep their credits in `js/photos.js` whenever you change them, because the licences require attribution.
