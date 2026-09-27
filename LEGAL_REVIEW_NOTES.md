# NHM and Woodward Avenue site review — 26 September 2026

## Verified in source and deployment logs

- Both sites are static previews. Neither has a checkout, account or enquiry form. NHM's planning worksheet stores values in browser local storage only; no values are submitted to a server by that form.
- The Cloudflare account has a Worker named `nhmwebsitedesign`, not a Cloudflare Pages project. Its first two builds failed because Wrangler could not find static files. The later `wrangler.jsonc` asset configuration fixed that production build error; the 26 September 2026 08:39 UTC build successfully deployed `woodward-avenue/site/` to `https://nhmwebsitedesign.aryan-0e3.workers.dev/`.
- Pull request preview builds then failed because `wrangler preview` requires a `previews` configuration block. This branch adds that block. Cloudflare reported a successful build and preview deployment for commit `77b69cf` on 26 September 2026. Direct unauthenticated requests to the preview URL returned HTTP 403, so the preview's public accessibility remains unverified.
- The NHM site and both sites' policy pages are in open GitHub PR #1 for review. They are not merged into `main`.

## Sources used for the import guidance

- [DGFT Notification 58/2024-25](https://content.dgft.gov.in/Website/dgftprod/646b345f-2157-4549-9ae9-94ee7f8c3a71/Notification%20no.%2058%20dated%2007.02.2025.pdf): the import exemption applies to cars classified as vintage under Rule 81A and imported by actual users; public-road use remains subject to motor-vehicle law.
- [G.S.R. 492(E), Central Motor Vehicles Rules amendment](https://transport.mizoram.gov.in/uploads/attachments/2022/02/bdb3aa64497128ccae2fdbd7cc9ab28c/gsr-492e-dt-15-july-2021-vintage-motor-vehicles-rules.pdf): the definition refers to **more than 50 years from first registration after first sale**, originality and no substantial overhaul. Registration and use have further conditions.
- [Customs Act Section 14, CBIC](https://taxinformation.cbic.gov.in/content-page/explore-act/1000028/1000002) and [ICEGATE duty calculator](https://www.icegate.gov.in/cdc): customs valuation and the applicable duties need a vehicle-specific assessment. The site's worksheet therefore uses a broker-quoted tax amount instead of calculating a purported statutory tax bill.
- [Digital Personal Data Protection Rules, 2025](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf): rollout is phased. The policies describe current collection and provide the supplied contact email; update them as operations, providers and effective duties change.

## Items requiring owner or professional confirmation before a paid launch

1. Confirm the actual legal operator, business address and governing jurisdiction. Only `aryanmayekar999@gmail.com` was supplied, so the site policies do not invent an entity or address.
2. Have an Indian customs broker and transport-law adviser verify any vehicle-specific import, tax, left-hand-drive, registration and permitted-use claims before a client relies on them. Model-year labels are only screening estimates.
3. Confirm the real concierge scope, partners, fees, refund policy, contracts and complaint process before accepting clients. The terms are website-use terms, not a service agreement.
4. Recheck every Wikimedia Commons photo attribution and licence against the current source file, including any crop or resize conditions. The existing photo-credit pages remain in place.
5. Confirm the hosting providers' actual log retention and any future analytics, forms or marketing tools, then revise the privacy notices before enabling them.
