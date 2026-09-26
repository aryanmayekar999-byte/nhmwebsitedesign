/* Woodward Avenue by NHM — shared site data.
   Listings are model profiles of American cars we can help you find, not stock for sale. */

window.WA = window.WA || {};

/* India treats a car as vintage once it is 50 years old, on a rolling basis. */
WA.VINTAGE_AGE = 50;

/* Parent site. */
WA.NHM_URL = 'https://aryanmayekar999-byte.github.io/nhmwebsitedesign/';

WA.eligibility = function (from, to, year) {
  year = year || new Date().getFullYear();
  var cutoff = year - WA.VINTAGE_AGE;
  if (to <= cutoff) return { status: 'now', label: 'Eligible now', year: from + WA.VINTAGE_AGE };
  if (from <= cutoff) return { status: 'partial', label: 'Eligible now (' + from + '–' + cutoff + ' cars)', year: from + WA.VINTAGE_AGE };
  return { status: 'upcoming', label: 'From ' + (from + WA.VINTAGE_AGE), year: from + WA.VINTAGE_AGE };
};

WA.years = function (from, to) {
  if (from === to) return String(from);
  return from + '–' + (String(from).slice(0, 2) === String(to).slice(0, 2) ? String(to).slice(2) : to);
};

WA.CATEGORIES = {
  luxury: 'Luxury cruisers',
  personal: 'Personal luxury',
  sports: 'Sports and muscle'
};

WA.listings = [
  /* Luxury cruisers */
  {
    id: 'cadillac-eldorado-brougham',
    category: 'luxury',
    make: 'Cadillac', model: 'Eldorado Brougham', series: 'Series 70',
    from: 1957, to: 1958, body: 'Four-door hardtop',
    engine: '365 cu in (6.0-litre) V8, twin four-barrel carburettors',
    summary: "Cadillac's hand-built flagship, with a brushed stainless steel roof, air suspension and a price of more than $13,000. Only 704 were built in Detroit.",
    checks: [
      'Many cars have had the original air suspension replaced with coil springs. Decide whether you want it restored.',
      'Interior fittings, including the vanity sets, are unique to the car and very hard to replace.',
      'Confirm the body number; the 1959–60 Broughams were built in Italy by Pininfarina and are a different car.'
    ]
  },
  {
    id: 'cadillac-1959',
    category: 'luxury',
    make: 'Cadillac', model: 'Series 62 and De Ville', series: 'Series 62 / 6300',
    from: 1959, to: 1959, body: 'Coupe, sedan and convertible',
    engine: '390 cu in (6.4-litre) V8',
    summary: 'The tallest tailfins Detroit ever built, with twin bullet tail lamps. The 1959 Cadillac is the shape most people picture when they think of American chrome.',
    checks: [
      'Check the fins, rear quarters and boot floor for rust and filler.',
      'Stainless and chrome trim is costly to replate; make sure it is all present.',
      'Eldorado Biarritz convertibles are often copied from Series 62 cars. Check the body plate.'
    ]
  },
  {
    id: 'cadillac-eldorado-1967',
    category: 'personal',
    make: 'Cadillac', model: 'Eldorado', series: 'Ninth generation',
    from: 1967, to: 1970, body: 'Two-door hardtop coupe',
    engine: '429, 472 or 500 cu in V8 (7.0 to 8.2 litres)',
    summary: 'A front-wheel-drive Cadillac with a long hood, a short deck and hidden headlamps. It shared its drivetrain layout with the Oldsmobile Toronado.',
    checks: [
      'Service the front-wheel-drive transaxle and check the drive shafts and CV joints.',
      'Test the vacuum-operated headlamp doors (1967–69).',
      'Check the rear window surround and lower quarters for rust.'
    ]
  },
  {
    id: 'cadillac-eldorado-convertible-1971',
    category: 'personal',
    make: 'Cadillac', model: 'Eldorado Convertible', series: 'Tenth generation',
    from: 1971, to: 1976, body: 'Convertible',
    engine: '500 cu in (8.2-litre) V8',
    summary: "Its 500 cu in V8 was the largest engine in a post-war American production car. Cadillac sold the 1976 car as the last American convertible, and they were collected new for that reason.",
    checks: [
      'Work the power top through several cycles and check the hydraulic lines.',
      "Some 1976 cars claim to be special 'last convertible' editions; check the paperwork.",
      'Only cars built in 1976 or earlier are eligible in 2026.'
    ]
  },
  {
    id: 'lincoln-continental-mark-ii',
    category: 'luxury',
    make: 'Continental', model: 'Mark II', series: 'Continental Division, Ford Motor Company',
    from: 1956, to: 1957, body: 'Two-door hardtop coupe',
    engine: '368 cu in (6.0-litre) Lincoln V8',
    summary: "Ford's attempt at an American Rolls-Royce: built largely by hand, priced near $10,000, and sold under the Continental name rather than Lincoln. About 3,000 were made.",
    checks: [
      'Panel fit was exceptional when new; poor gaps suggest past accident repair.',
      'Factory air conditioning was a rare option; verify it if claimed.',
      'Trim and interior parts are scarce. Buy the most complete car you can.'
    ]
  },
  {
    id: 'lincoln-continental-1961',
    category: 'luxury',
    make: 'Lincoln', model: 'Continental', series: 'Fourth generation',
    from: 1961, to: 1969, body: 'Four-door sedan and four-door convertible',
    engine: '430, 462 or 460 cu in V8',
    summary: 'Clean, slab-sided and restrained, with rear-hinged back doors. The four-door convertible, built until 1967, is the one collectors look for.',
    checks: [
      'The convertible top uses a chain of motors, relays and switches. Have it demonstrated.',
      'The car has a unit body; check the floors, rockers and rear frame sections for rust.',
      'Confirm that the rear doors close and seal properly; sagging hinges are common.'
    ]
  },
  {
    id: 'lincoln-continental-mark-iii',
    category: 'personal',
    make: 'Lincoln', model: 'Continental Mark III', series: 'Mark III',
    from: 1969, to: 1971, body: 'Two-door hardtop coupe',
    engine: '460 cu in (7.5-litre) V8',
    summary: "Lincoln's answer to the Eldorado, with a Rolls-Royce-style grille, hidden headlamps and a spare-wheel shape pressed into the boot lid.",
    checks: [
      'Test the vacuum headlamp doors and climate control.',
      'Check the vinyl roof for rust underneath, a common problem.',
      'Sure-Track anti-skid brakes were an option; confirm whether they work or were removed.'
    ]
  },
  {
    id: 'imperial-1957',
    category: 'luxury',
    make: 'Imperial', model: 'Crown and LeBaron', series: 'Forward Look',
    from: 1957, to: 1959, body: 'Hardtop, sedan and convertible',
    engine: '392 cu in Hemi V8 (1957–58); 413 cu in V8 (1959)',
    summary: "Chrysler's flagship, sold as its own make to rival Cadillac. Virgil Exner's 1957 design brought soaring fins and a gunsight tail lamp, with torsion-bar front suspension.",
    checks: [
      'Early Forward Look bodies rusted badly. Inspect the floors, rockers and lower doors closely.',
      'Hemi engine parts are costly; ask for rebuild records.',
      'Confirm the model from the serial number, since Crown and LeBaron trim is often mixed.'
    ]
  },
  {
    id: 'imperial-1961',
    category: 'luxury',
    make: 'Imperial', model: 'Crown and LeBaron', series: 'Exner final series',
    from: 1961, to: 1963, body: 'Hardtop, sedan and convertible',
    engine: '413 cu in (6.8-litre) V8',
    summary: 'The Imperial with free-standing headlamps, like a 1930s classic, and the last of the great finned cars. Built on a separate frame when rivals had moved on.',
    checks: [
      'The free-standing headlamp pods and trim are unique; check that they are present and straight.',
      'Inspect the frame and body mounts for rust.',
      'Push-button transmission controls should work smoothly in every range.'
    ]
  },
  {
    id: 'chrysler-300-letter-series',
    category: 'luxury',
    make: 'Chrysler', model: '300 letter series', series: 'C-300 to 300L',
    from: 1955, to: 1965, body: 'Hardtop coupe and convertible',
    engine: '331 or 392 cu in Hemi V8 (1955–58); 413 cu in V8 (1959–65)',
    summary: "America's fast luxury car. Each year had its own letter, from the 1955 C-300 to the 1965 300L, skipping 'I'. The C-300 was sold with 300 horsepower, hence the name.",
    checks: [
      'Genuine letter cars have their own serial number series. Many plain Chrysler 300s and New Yorkers have been dressed up as letter cars.',
      "Ask about the 300F's cross-ram intake and the rare 400 hp option.",
      'Hemi-engined cars (C-300 to 300D) need a specialist to service.'
    ]
  },
  {
    id: 'packard-caribbean',
    category: 'luxury',
    make: 'Packard', model: 'Caribbean', series: 'Senior Packard',
    from: 1953, to: 1956, body: 'Convertible (and 1956 hardtop)',
    engine: 'Straight-eight (1953–54); 352 or 374 cu in V8 (1955–56)',
    summary: "The last great Packard. The 1955–56 cars have Packard's own V8 and Torsion-Level suspension, which kept the car level whatever its load.",
    checks: [
      'The Torsion-Level suspension relies on an electric levelling motor; check that it works.',
      'The Ultramatic transmission needs specialist care.',
      'Parts are scarce; club support is essential.'
    ]
  },

  /* Sports and muscle */
  {
    id: 'chevrolet-bel-air-1955',
    category: 'sports',
    make: 'Chevrolet', model: 'Bel Air', series: 'Tri-Five',
    from: 1955, to: 1957, body: 'Hardtop, sedan, convertible and Nomad wagon',
    engine: '235 cu in six; 265 or 283 cu in small-block V8',
    summary: "The 'Tri-Five' Chevrolets introduced the small-block V8 in 1955. The 1957 car, with its fins and optional fuel injection, is an American icon.",
    checks: [
      'Fuel-injected 1957 cars are rare and often faked; verify the engine and paperwork.',
      'Check the floors, boot and lower rear quarters for rust.',
      'Many cars are modified (restomods). Decide whether you want an original.'
    ]
  },
  {
    id: 'ford-thunderbird-1955',
    category: 'sports',
    make: 'Ford', model: 'Thunderbird', series: 'First generation',
    from: 1955, to: 1957, body: 'Two-seat convertible with removable hardtop',
    engine: '292 or 312 cu in Y-block V8',
    summary: "Ford's two-seat 'personal car', with a porthole hardtop. It outsold the Corvette and set the pattern for the personal luxury cars that followed.",
    checks: [
      'Check that the removable hardtop is present and original.',
      'The rare 1957 F-code cars are supercharged. Verify with the data plate.',
      'Inspect the floors and the frame around the rear axle for rust.'
    ]
  },
  {
    id: 'chevrolet-corvette-c1',
    category: 'sports',
    make: 'Chevrolet', model: 'Corvette', series: 'C1',
    from: 1953, to: 1962, body: 'Two-seat convertible',
    engine: '235 cu in Blue Flame six (1953–55); 265 or 283 cu in V8, fuel injection from 1957',
    summary: "America's sports car, with a fibreglass body. The first 300 cars of 1953 were all white with red interiors.",
    checks: [
      'The fibreglass body does not rust, but the steel frame under it does.',
      'Check the quality of any fibreglass repairs around the nose and wheel arches.',
      'Fuel-injected cars are valuable and often faked.'
    ]
  },
  {
    id: 'chevrolet-corvette-c2',
    category: 'sports',
    make: 'Chevrolet', model: 'Corvette Sting Ray', series: 'C2',
    from: 1963, to: 1967, body: 'Coupe and convertible',
    engine: '327 cu in small-block V8; 396 or 427 cu in big-block V8 (1965–67)',
    summary: 'The first Corvette coupe, with independent rear suspension. The 1963 split rear window was used for one year only.',
    checks: [
      "Inspect the steel 'birdcage' frame around the cabin for rust; it is hard to repair.",
      'Match the engine stamping to the car; big-block conversions are common.',
      'Some 1964–67 coupes have been converted to a split window.'
    ]
  },
  {
    id: 'studebaker-avanti',
    category: 'personal',
    make: 'Studebaker', model: 'Avanti', series: 'R1 / R2',
    from: 1963, to: 1964, body: 'Two-door coupe',
    engine: '289 cu in V8 (R2: supercharged)',
    summary: "Raymond Loewy's fibreglass coupe, one of the first American cars with front disc brakes. About 4,600 were built before Studebaker closed its South Bend plant.",
    checks: [
      'Later Avanti II cars were built by an independent company from 1965; they are a different car.',
      'Check the supercharger on R2 cars and ask for service records.',
      'Inspect the steel frame and the body mounts under the fibreglass.'
    ]
  },
  {
    id: 'buick-riviera-1963',
    category: 'personal',
    make: 'Buick', model: 'Riviera', series: 'First generation',
    from: 1963, to: 1965, body: 'Two-door hardtop coupe',
    engine: '401 or 425 cu in Nailhead V8',
    summary: "Bill Mitchell's crisp personal luxury coupe, often called one of the best-looking American cars. The 1965 car has hidden headlamps, and the 1965 Gran Sport is the most powerful.",
    checks: [
      'Test the 1965 clamshell headlamp covers.',
      'Check the frame and the lower rear quarters for rust.',
      'Gran Sport cars are often copied; verify the build details.'
    ]
  },
  {
    id: 'oldsmobile-toronado-1966',
    category: 'personal',
    make: 'Oldsmobile', model: 'Toronado', series: 'First generation',
    from: 1966, to: 1970, body: 'Two-door hardtop coupe',
    engine: '425 or 455 cu in Rocket V8',
    summary: "America's first front-wheel-drive car since the 1930s, with a big V8 driving the front wheels through a chain and split automatic gearbox.",
    checks: [
      'Service the drive chain and transmission; check for noise under load.',
      'Test the hidden headlamps and the flow-through ventilation.',
      'Check the rear window area and quarter panels for rust.'
    ]
  },
  {
    id: 'ford-mustang-1965',
    category: 'sports',
    make: 'Ford', model: 'Mustang', series: 'First generation',
    from: 1964, to: 1968, body: 'Hardtop, convertible and fastback',
    engine: 'Six; 260, 289, 390 or 428 cu in V8',
    summary: 'The car that started the pony-car craze in April 1964. Fastbacks and the high-performance K-code 289 are the most sought after.',
    checks: [
      'The engine code in the VIN confirms a K-code or GT; clones are common.',
      'Inspect the floor pans, torque boxes and the cowl for rust.',
      'Shelby GT350 and GT500 cars have their own registry; check any claim against it.'
    ]
  },
  {
    id: 'pontiac-gto-1964',
    category: 'sports',
    make: 'Pontiac', model: 'GTO', series: 'First generation',
    from: 1964, to: 1967, body: 'Hardtop, coupe and convertible',
    engine: '389 cu in V8 (Tri-Power option); 400 cu in (1967)',
    summary: 'A big engine in a mid-size body, and the car usually credited with starting the muscle car era. It began as an option package on the Tempest LeMans.',
    checks: [
      'Order build documents from Pontiac Historic Services to confirm a genuine GTO.',
      'Many LeMans and Tempest cars have been converted. From 1966 a genuine GTO VIN starts with 242.',
      'Inspect the floors, trunk and the rear window channel for rust.'
    ]
  },
  {
    id: 'chevrolet-camaro-1967',
    category: 'sports',
    make: 'Chevrolet', model: 'Camaro', series: 'First generation',
    from: 1967, to: 1969, body: 'Coupe and convertible',
    engine: 'Six; 302, 327, 350 or 396 cu in V8',
    summary: "Chevrolet's reply to the Mustang. The Z/28, built for Trans-Am racing with a high-revving 302, and the big-block SS 396 are the ones to find.",
    checks: [
      'Z/28 and SS cars are widely cloned. Check the cowl tag and any documentation.',
      'Inspect the floors, the rear frame rails and the cowl for rust.',
      'Rally Sport cars have hidden headlamps; check their operation.'
    ]
  },
  {
    id: 'dodge-charger-1968',
    category: 'sports',
    make: 'Dodge', model: 'Charger', series: 'Second generation',
    from: 1968, to: 1970, body: 'Two-door hardtop',
    engine: '318 or 383 cu in V8; 440 or 426 Hemi V8 (R/T)',
    summary: 'A fastback coupe with a full-width hidden-headlamp grille. The 1969 Charger Daytona, with its nose cone and tall wing, was built for NASCAR.',
    checks: [
      'Decode the fender tag and VIN; R/T, Hemi and Daytona cars are often cloned.',
      'Inspect the rear quarters, the floors and the rear window area for rust.',
      'Test the vacuum headlamp doors.'
    ]
  },
  {
    id: 'plymouth-barracuda-1970',
    category: 'sports',
    make: 'Plymouth', model: 'Barracuda and ’Cuda', series: 'E-body',
    from: 1970, to: 1974, body: 'Coupe and convertible',
    engine: 'Six; 318, 340, 383 or 440 cu in V8; 426 Hemi (1970–71)',
    summary: "Chrysler's E-body pony car. The ’Cuda versions carried the big engines, and the 1970–71 Hemi ’Cuda convertible is among the most valuable muscle cars.",
    checks: [
      'Decode the fender tag and VIN; Hemi and 440 clones are common.',
      'Inspect the floors, the rear quarters and the trunk for rust.',
      'Original sheet metal is valued; ask what has been replaced.'
    ]
  }
];

WA.findListing = function (id) {
  for (var i = 0; i < WA.listings.length; i++) if (WA.listings[i].id === id) return WA.listings[i];
  return null;
};

/* Build a listing card. Uses textContent throughout, never innerHTML. */
WA.card = function (car) {
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var elig = WA.eligibility(car.from, car.to);
  var li = el('li', 'card');
  var a = el('a', 'card__link');
  a.href = 'listing.html?id=' + encodeURIComponent(car.id);
  var photo = WA.photos && WA.photos[car.id];
  if (photo) {
    var img = el('img', 'card__img');
    img.src = photo.src + '-640.webp';
    img.srcset = photo.src + '-640.webp 640w, ' + photo.src + '-1200.webp 1200w';
    img.sizes = '(min-width: 1200px) 400px, (min-width: 640px) 45vw, 100vw';
    img.alt = ''; img.loading = 'lazy'; img.width = 640; img.height = 427;
    a.appendChild(img);
  } else {
    a.appendChild(el('span', 'card__plate', car.make));
  }
  var body = el('span', 'card__body');
  body.appendChild(el('span', 'eyebrow', WA.years(car.from, car.to) + ' · ' + car.make));
  body.appendChild(el('span', 'card__title', car.model));
  body.appendChild(el('span', 'card__meta', WA.CATEGORIES[car.category] + ' · ' + car.body));
  body.appendChild(el('span', 'card__elig card__elig--' + elig.status, elig.label));
  a.appendChild(body);
  li.appendChild(a);
  return li;
};

/* Photo credit as a caption: "Photo: Author, licence (linked), via Wikimedia Commons". */
WA.credit = function (photo) {
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
