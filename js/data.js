/* Nihon Heritage Motors — shared site data.
   Listings are model profiles of the cars NHM plans to source, not stock for sale. */

window.NHM = window.NHM || {};

/* India treats a car as vintage once it is 50 years old, on a rolling basis. */
NHM.VINTAGE_AGE = 50;

NHM.eligibility = function (from, to, year) {
  year = year || new Date().getFullYear();
  var cutoff = year - NHM.VINTAGE_AGE;
  if (to <= cutoff) return { status: 'now', label: 'Eligible now', year: from + NHM.VINTAGE_AGE };
  if (from <= cutoff) return { status: 'partial', label: 'Eligible now (' + from + '–' + cutoff + ' cars)', year: from + NHM.VINTAGE_AGE };
  return { status: 'upcoming', label: 'From ' + (from + NHM.VINTAGE_AGE), year: from + NHM.VINTAGE_AGE };
};

NHM.years = function (from, to) {
  if (from === to) return String(from);
  return from + '–' + (String(from).slice(0, 2) === String(to).slice(0, 2) ? String(to).slice(2) : to);
};

NHM.listings = [
  {
    id: 'toyota-2000gt',
    make: 'Toyota', model: '2000GT', chassis: 'MF10',
    from: 1967, to: 1970, body: 'Coupe',
    engine: '2.0-litre 3M straight-six, twin cam',
    summary: "Japan's first supercar, built with Yamaha. Only about 350 were made, so every car is known and most change hands privately or at collector auctions.",
    checks: [
      'Match the chassis and engine numbers to the build records.',
      'Ask for restoration photographs and invoices; many cars have been fully restored.',
      'Beware of replicas built on other Toyota chassis.'
    ]
  },
  {
    id: 'nissan-skyline-2000gt-r-c10',
    make: 'Nissan', model: 'Skyline 2000GT-R', chassis: 'PGC10 / KPGC10',
    from: 1969, to: 1972, body: 'Sedan and coupe',
    engine: '2.0-litre S20 straight-six, twin cam',
    summary: "The original GT-R, known in Japan as the Hakosuka. The four-door PGC10 came first; the two-door KPGC10 followed in 1971.",
    checks: [
      'Many GT-X and GT models have been converted to GT-R spec. The chassis plate must read PGC10 or KPGC10.',
      'Check for a genuine S20 engine; they are scarce and often swapped for an L-series six.',
      'Inspect the rear arches, floors and boot floor for rust.'
    ]
  },
  {
    id: 'nissan-skyline-gt-r-kpgc110',
    make: 'Nissan', model: 'Skyline 2000GT-R', chassis: 'KPGC110',
    from: 1973, to: 1973, body: 'Coupe',
    engine: '2.0-litre S20 straight-six, twin cam',
    summary: "The 'Ken & Mary' GT-R. Emissions rules ended production after about 197 cars, making it one of the rarest Nissans.",
    checks: [
      'Verify the chassis number against known production records.',
      'Expect restoration history; ask for evidence of original panels.',
      'Treat any car without paperwork as a clone until proven otherwise.'
    ]
  },
  {
    id: 'datsun-240z',
    make: 'Nissan', model: 'Datsun 240Z / Fairlady Z', chassis: 'HS30 / S30',
    from: 1969, to: 1973, body: 'Coupe',
    engine: '2.4-litre L24 straight-six (Japanese-market Fairlady Z: 2.0-litre L20)',
    summary: 'The affordable six-cylinder sports car that took on Europe. Japanese-market cars are right-hand drive, as India drives.',
    checks: [
      'Rust is the enemy: floors, sills, battery tray, rear hatch and the frame rails.',
      'Some left-hand-drive export cars have been converted to right-hand drive; check which you are buying.',
      'The Z432 (PS30) with the S20 engine is a different, far rarer car.'
    ]
  },
  {
    id: 'mazda-cosmo-sport',
    make: 'Mazda', model: 'Cosmo Sport', chassis: 'L10A / L10B',
    from: 1967, to: 1972, body: 'Coupe',
    engine: '10A twin-rotor rotary',
    summary: "Mazda's first rotary car. About 1,176 were built by hand, and it looks like nothing else from the period.",
    checks: [
      'Ask for a compression test on each rotor and for rebuild records.',
      'Parts are scarce; check that trim and glass are present.',
      'Series I (L10A) and Series II (L10B) differ in wheelbase and gearbox.'
    ]
  },
  {
    id: 'honda-s800',
    make: 'Honda', model: 'S800', chassis: 'AS800',
    from: 1966, to: 1970, body: 'Roadster and coupe',
    engine: '791 cc straight-four, twin cam',
    summary: 'A tiny, high-revving roadster from the years when Honda built motorcycles first. Early cars drive the rear wheels by chain.',
    checks: [
      'Check whether it is an early chain-drive car or a later live-axle car.',
      'Listen for a healthy engine at high revs; rebuilds need specialist parts.',
      'Inspect the floors and the bottoms of the doors for rust.'
    ]
  },
  {
    id: 'mitsubishi-galant-gto',
    make: 'Mitsubishi', model: 'Galant GTO', chassis: 'A53C / A57C',
    from: 1970, to: 1977, body: 'Coupe',
    engine: '1.6 to 2.0-litre straight-four (MR: 4G32 twin cam)',
    summary: "Mitsubishi's fastback coupe, with a ducktail styled after American muscle cars. The twin-cam MR is the one collectors want.",
    checks: [
      'Confirm the trim level; many cars have been dressed up as an MR.',
      'Check the sills, wheel arches and rear valance for rust.',
      'Later cars (after 1976) are not yet eligible for India.'
    ]
  },
  {
    id: 'toyota-celica-ta22',
    make: 'Toyota', model: 'Celica', chassis: 'TA22',
    from: 1970, to: 1977, body: 'Coupe',
    engine: '1.6-litre 2T-G straight-four, twin cam (GT)',
    summary: "Toyota's first specialty coupe. The GT's twin-cam 2T-G makes it the model to find.",
    checks: [
      'The chassis code confirms a genuine GT (TA22); lesser models are often converted.',
      'Check the rear quarters, floors and windscreen surround for rust.',
      'Only cars built in 1976 or earlier are eligible in 2026.'
    ]
  },
  {
    id: 'toyota-corolla-levin-te27',
    make: 'Toyota', model: 'Corolla Levin', chassis: 'TE27',
    from: 1972, to: 1974, body: 'Coupe',
    engine: '1.6-litre 2T-G straight-four, twin cam',
    summary: 'A lightweight Corolla with the Celica GT engine and bolt-on arch flares. A favourite in Japanese club racing.',
    checks: [
      'Check that the 2T-G engine is original to the car.',
      'Many have been raced; look for crash repair under the flares.',
      'Inspect the floors and strut towers for rust.'
    ]
  },
  {
    id: 'datsun-bluebird-510',
    make: 'Nissan', model: 'Datsun Bluebird 1600 SSS', chassis: 'P510',
    from: 1967, to: 1972, body: 'Sedan and coupe',
    engine: '1.6-litre L16 straight-four',
    summary: 'The practical sports sedan with independent rear suspension that made Datsun a name abroad.',
    checks: [
      'Confirm the SSS specification from the chassis plate.',
      'Check the rear suspension mounts and floors for rust.',
      'Many have been modified; decide whether you want original or tuned.'
    ]
  },
  {
    id: 'mazda-savanna-rx-7',
    make: 'Mazda', model: 'Savanna RX-7', chassis: 'SA22C',
    from: 1978, to: 1985, body: 'Coupe',
    engine: '12A twin-rotor rotary',
    summary: 'The first RX-7: light, balanced and rotary-powered. The first cars become eligible for India in 2028.',
    checks: [
      'Ask for a compression test on each rotor.',
      'Check the rear hatch, arches and floors for rust.',
      'Watch the calendar: each model year becomes eligible 50 years after it was built.'
    ]
  },
  {
    id: 'nissan-skyline-rs-dr30',
    make: 'Nissan', model: 'Skyline 2000RS', chassis: 'DR30',
    from: 1981, to: 1985, body: 'Sedan and coupe',
    engine: '2.0-litre FJ20 straight-four, twin cam (Turbo RS: FJ20ET)',
    summary: "The racing Skyline that never wore a GT-R badge, because Nissan kept that name for six-cylinder cars. Later cars are called 'iron mask' for their grille-less nose. The first become eligible for India in 2031.",
    checks: [
      'Confirm a genuine FJ20 engine; many have been swapped for RB-series sixes.',
      "Check the chassis plate reads DR30; lesser R30s are often dressed up as RS models, or given an 'iron mask' nose.",
      'Inspect the sills, rear arches and floors for rust.'
    ]
  },
  {
    id: 'nissan-skyline-gts-r-hr31',
    make: 'Nissan', model: 'Skyline GTS / GTS-R', chassis: 'HR31',
    from: 1985, to: 1989, body: 'Sedan and coupe',
    engine: '2.0-litre RB20DET turbo straight-six (GTS-R: RB20DET-R)',
    summary: 'The last Skyline before the GT-R returned. About 800 GTS-R coupes were built in 1987 to homologate the car for Group A racing. The first HR31s become eligible for India in 2035.',
    checks: [
      'Verify a GTS-R by its chassis and engine numbers; replica body kits are common.',
      'Check the HICAS four-wheel steering, which is often faulty or removed.',
      'Inspect the sills, rear arches and the base of the rear window for rust.'
    ]
  }
];

NHM.findListing = function (id) {
  for (var i = 0; i < NHM.listings.length; i++) if (NHM.listings[i].id === id) return NHM.listings[i];
  return null;
};

/* Build a listing card. Uses textContent throughout, never innerHTML. */
NHM.card = function (car) {
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var elig = NHM.eligibility(car.from, car.to);
  var li = el('li', 'card');
  var a = el('a', 'card__link');
  a.href = 'listing.html?id=' + encodeURIComponent(car.id);
  var photo = NHM.photos && NHM.photos[car.id];
  if (photo) {
    var img = el('img', 'card__img');
    img.src = photo.src + '-640.webp';
    img.srcset = photo.src + '-640.webp 640w, ' + photo.src + '-1200.webp 1200w';
    img.sizes = '(min-width: 1200px) 280px, (min-width: 640px) 45vw, 100vw';
    img.alt = ''; img.loading = 'lazy'; img.width = 640; img.height = 427;
    a.appendChild(img);
  } else {
    a.appendChild(el('span', 'card__plate', car.chassis.split(' / ')[0]));
  }
  var body = el('span', 'card__body');
  body.appendChild(el('span', 'eyebrow', NHM.years(car.from, car.to) + ' · ' + car.make));
  body.appendChild(el('span', 'card__title', car.model));
  body.appendChild(el('span', 'card__meta', car.chassis + ' · ' + car.body));
  body.appendChild(el('span', 'card__elig card__elig--' + elig.status, elig.label));
  a.appendChild(body);
  li.appendChild(a);
  return li;
};

/* Photo credit as a caption: "Photo: Author, licence (linked), via Wikimedia Commons". */
NHM.credit = function (photo) {
  var cap = document.createElement('figcaption');
  cap.className = 'caption';
  var link = function (href, text) {
    var a = document.createElement('a');
    a.href = href; a.textContent = text; a.rel = 'noopener'; a.target = '_blank';
    return a;
  };
  cap.append('Photo: ' + photo.author + ', ');
  cap.append(photo.licenseUrl ? link(photo.licenseUrl, photo.license) : photo.license);
  cap.append(', via ');
  cap.append(link(photo.page, 'Wikimedia Commons'));
  if (photo.note) cap.append('. ' + photo.note);
  return cap;
};
