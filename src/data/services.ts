export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  intro: string;
  items: string[];
  benefits: string[];
};

export type IconName =
  | 'wrench' | 'contract' | 'sparkle' | 'droplet' | 'snow' | 'bolt'
  | 'building' | 'shield' | 'leaf' | 'clock' | 'check' | 'users'
  | 'phone' | 'mail' | 'pin' | 'whatsapp' | 'doc' | 'star' | 'arrow' | 'hardhat';

export const services: Service[] = [
  {
    slug: 'building-maintenance',
    title: 'Building Maintenance',
    icon: 'wrench',
    summary: 'Mechanical, electrical, plumbing and civil maintenance by licensed technicians.',
    intro:
      'Our in-house technical teams handle everyday repairs and planned maintenance for towers, offices, villas and commercial units, so small faults are fixed before they become costly failures.',
    items: [
      'Electrical works: DB maintenance, lighting, sockets, fault finding',
      'Plumbing & sanitary: leaks, pumps, water heaters, drainage',
      'Civil works: masonry, tiling, gypsum and false ceilings',
      'Painting: interior, exterior and waterproofing',
      'Carpentry, doors, locks and joinery repairs',
      'Handyman services and minor fit-out works',
    ],
    benefits: ['Trained, uniformed technicians', 'Materials sourced from approved suppliers', 'Photo-documented job reports'],
  },
  {
    slug: 'annual-maintenance-contracts',
    title: 'Annual Maintenance Contracts (AMC)',
    icon: 'contract',
    summary: 'Planned preventive maintenance with committed response times and a fixed yearly cost.',
    intro:
      'An AMC puts your building on a planned maintenance calendar with a single point of contact, agreed response times and a predictable annual budget. Plans are tailored to each property after a free site survey.',
    items: [
      'Free site survey and asset register',
      'Planned preventive maintenance (PPM) schedule',
      'Reactive call-outs within agreed SLA times',
      'Monthly service reports and asset condition logs',
      'Dedicated account manager and WhatsApp support line',
      'Covers HVAC, MEP, fire systems, civil and cleaning',
    ],
    benefits: ['Emergency: 2-hour on-site response', 'Urgent: same-day response', 'Routine: within 48 hours'],
  },
  {
    slug: 'hvac-ac-maintenance',
    title: 'HVAC & AC Maintenance',
    icon: 'snow',
    summary: 'Servicing, repair and duct cleaning for split, ducted, package and chilled-water systems.',
    intro:
      'In the UAE climate, air-conditioning is critical. We keep systems efficient and reliable with scheduled servicing, fast repairs and indoor air-quality treatments.',
    items: [
      'Split, ducted, package and FCU servicing',
      'Chilled-water system and AHU maintenance',
      'Gas top-up, compressor and motor repairs',
      'AC duct cleaning and sanitisation',
      'Thermostat and control upgrades',
      'Energy-efficiency checks',
    ],
    benefits: ['Lower energy bills', 'Longer equipment life', 'Healthier indoor air'],
  },
  {
    slug: 'cleaning-services',
    title: 'Commercial & Residential Cleaning',
    icon: 'sparkle',
    summary: 'Daily janitorial teams, deep cleaning and move-in/move-out cleaning.',
    intro:
      'Supervised, trained cleaning teams for offices, residential buildings, retail and villas, supplied on daily, weekly or one-off contracts with all equipment and consumables.',
    items: [
      'Daily office and building janitorial staff',
      'Common-area, lobby and car park cleaning',
      'Deep cleaning and post-construction cleaning',
      'Move-in / move-out cleaning',
      'Carpet, upholstery and floor polishing',
      'Kitchen and washroom hygiene services',
    ],
    benefits: ['Background-checked staff', 'Eco-friendly, approved chemicals', 'Supervisor quality checks'],
  },
  {
    slug: 'facade-window-cleaning',
    title: 'Facade & Window Cleaning',
    icon: 'building',
    summary: 'High-level glass and facade cleaning using BMU, cradles and rope access.',
    intro:
      'Dust and humidity dull building exteriors quickly. Our certified work-at-height teams restore facades safely and on schedule.',
    items: [
      'External glass and cladding cleaning',
      'BMU and gondola operation',
      'Rope access (IRATA-trained technicians)',
      'Skylight and atrium cleaning',
      'Signage and canopy cleaning',
      'Quarterly and bi-annual programmes',
    ],
    benefits: ['Work-at-height permits handled', 'Full safety method statements', 'Fully insured operations'],
  },
  {
    slug: 'water-tank-disinfection',
    title: 'Water Tank Cleaning & Disinfection',
    icon: 'droplet',
    summary: 'Dubai Municipality–approved water tank cleaning, disinfection and pest control coordination.',
    intro:
      'Dubai Municipality requires regular cleaning of building water tanks. We clean, disinfect and certify tanks and provide the documentation your building needs.',
    items: [
      'Water tank cleaning and disinfection',
      'Water sample testing coordination',
      'Service certificate for DM records',
      'Sanitisation and disinfection of premises',
      'Drainage and grease trap coordination',
      'Pest control through approved partners',
    ],
    benefits: ['DM-approved procedures', 'Certificates after every service', 'Minimal water downtime'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
