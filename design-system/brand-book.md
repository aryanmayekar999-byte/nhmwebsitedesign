# Nihon Heritage Motors — Brand book

Copied from the [Nihon Heritage Motors design system](https://claude.ai/artifact/7Yc2Ckmh5WPA2tWS25W5Cd). Asset paths point at this repo; that design system is the source of truth.

Nihon Heritage Motors should feel like a specialist automotive archive: precise, understated and historically minded. Use generous white space, strong editorial typography, restrained black-and-white surfaces, and red only as a deliberate accent. Avoid racing graphics, gradients and overly glossy “luxury car” styling.

## Logo

- The master logo is the emblem lockup: the N·H·M monogram in a thin ring, a red dot at lower left, and **NIHON HERITAGE MOTORS** stacked in two lines beneath. File: `assets/brand/nhm-emblem.png` (transparent PNG, 1254 × 1254; ink measures #070604, dot #C80105).
- Use the file as supplied. Never redraw or re-set the monogram or wordmark in live type, and never move or recolour the dot.
- Place it on `paper`, `warmpaper` or `washi`. Its black ink disappears on dark grounds, and there's no reversed version in the files yet, so keep it off the dark theme and `charcoal` until one exists.
- Clear space: at least `space-6` around the ring at hero size. Keep the emblem at least 48px tall.

## Colour

- Page on `paper`; group content on `warmpaper`. Keep surfaces black and white; `washi` cream is for print and the occasional feature panel.
- Text in `ink`; secondary text in `Slate`. Separate sections with a 1px `Hairline`; give controls a 1px `border`.
- `NHMred` is the one accent: links, the single primary button (text in `on-accent`), active states, the dot motif. Use at most one red element per view so it stays deliberate.
- `NHMred` (#DC010F) is brighter than the logo file's dot (#C80105). Use the logo file for the mark and `NHMred` in UI.
- `washi` and `charcoal` were sampled from AI-rendered stationery mockups, so they're approximate until checked against real card stock.
- There are no status colours yet. Red already means the brand, so don't use `NHMred` for errors. Add a distinct danger colour with an icon or a word when forms need one.

## Type

- Headings in `garamond` (Cormorant Garamond, 600): `display`, `heading-1`, `heading-2`, `heading`. It's the closest free Garamond to the wordmark's serif, not the logo's actual font.
- Text in `inter` (Inter): `body` for copy, `body-sm` in dense UI, `label` on buttons and form labels, `caption` under images in `Slate`.
- `eyebrow` (uppercase, 0.14em tracking) goes above a heading. `wordmark-caps` (uppercase, 0.08em) is for signage-style labels only.
- Both load from Google Fonts: `family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600`.

## Space and shape

- Spacing runs from `space-1` (4px) to `space-6` (64px). Pad cards with `space-4` and break sections with `space-6`; err on the side of more white space.
- Corners are square (`radius-none`), like cut card stock. Controls take `radius-sm`. Keep `radius-full` for the ring and dot motif.
- Use no drop shadows or gradients. Separate things with `Hairline` rules or a change of surface.
- Focus ring: 2px solid `focus`, 2px offset.

## Imagery

- Photography is warm and low-key: dusk light, pale plaster, black steel, one classic car per frame. For reference, see the storefront `assets/images/showroom-*.webp`, the grille badge `assets/images/grille-badge-*.webp` (black enamel, chrome ring, red dot) and the stationery set `assets/images/stationery-*.webp` (`washi` and `charcoal` letterpress cards with a debossed logo).
- All three are concept renders, not photos of real premises or stock. Use them to set the mood, never as proof of a location or a car.


