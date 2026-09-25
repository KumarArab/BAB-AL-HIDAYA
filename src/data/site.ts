/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL COMPANY DETAILS
 * ─────────────────────────────────────────────────────────────────────────
 *  Every value below is SAMPLE / MOCK data created for the design preview.
 *  None of it (licence numbers, TRN, people, stats, insurance, approvals)
 *  is real. Replace each value with the client's verified information,
 *  then set `isSampleData` to false to remove the on-site preview banner.
 *
 *  Do NOT show this site to banks or investors while isSampleData is true.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const isSampleData = true;

export const company = {
  name: 'Bab Al Hidaya',
  legalName: 'Bab Al Hidaya Building Maintenance & Cleaning Services L.L.C',
  legalNameAr: 'باب الهداية لخدمات صيانة وتنظيف المباني ش.ذ.م.م',
  tagline: 'Building Maintenance & Cleaning Services',
  shortPitch:
    'A licensed Dubai company keeping residential and commercial buildings clean, safe and running, through planned maintenance contracts and professional cleaning teams.',
  founded: 2019,
  domain: 'babalhidaya.ae',
};

export const contact = {
  phone: '+971 4 123 4567',
  phoneHref: 'tel:+97141234567',
  mobile: '+971 50 123 4567',
  whatsapp: '971501234567', // digits only, used for wa.me links
  email: 'info@babalhidaya.ae',
  careersEmail: 'careers@babalhidaya.ae',
  address: {
    line1: 'Office 204, Building 7',
    line2: 'Al Qusais Industrial Area 2',
    city: 'Dubai',
    country: 'United Arab Emirates',
    poBox: 'P.O. Box 123456',
  },
  hours: [
    { days: 'Monday – Saturday', time: '8:00 AM – 6:00 PM' },
    { days: 'Sunday', time: 'Closed (emergency line open)' },
  ],
  emergency: '24/7 emergency response for AMC clients',
  mapEmbed:
    'https://www.google.com/maps?q=Al+Qusais+Industrial+Area+2,+Dubai&output=embed',
};

/** Legal and regulatory registration (sample values). */
export const registration = {
  tradeLicenceNo: '1234567',
  licenceType: 'Professional Licence',
  issuingAuthority: 'Department of Economy and Tourism (DET), Government of Dubai',
  legalForm: 'Limited Liability Company (L.L.C)',
  licenceIssued: '14 March 2019',
  licenceExpiry: '13 March 2027',
  registeredActivities: [
    'Building Cleaning Services',
    'Building Maintenance',
    'Air-Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance',
    'Plumbing & Sanitary Installation',
    'Electromechanical Equipment Installation & Maintenance',
    'Painting Contracting',
    'Floor & Wall Tiling Works',
  ],
  vatTrn: '100123456700003',
  chamberMembership: 'Dubai Chamber of Commerce: Member No. 000123456',
  ejari: 'Registered commercial office (Ejari) in Al Qusais, Dubai',
};

export const approvals = [
  {
    title: 'Dubai Municipality: Public Health & Safety',
    detail: 'Approved contractor for water tank cleaning and disinfection services.',
    ref: 'DM-PHS-2020-00000',
  },
  {
    title: 'Dubai Civil Defence',
    detail: 'Registered for maintenance of fire alarm and fire fighting systems.',
    ref: 'DCD-FLS-00000',
  },
  {
    title: 'Dubai Municipality: Environment Department',
    detail: 'Registered for waste handling from cleaning operations.',
    ref: 'DM-ENV-00000',
  },
];

export const certifications = [
  { code: 'ISO 9001:2015', name: 'Quality Management System' },
  { code: 'ISO 14001:2015', name: 'Environmental Management System' },
  { code: 'ISO 45001:2018', name: 'Occupational Health & Safety Management' },
];

export const insurance = [
  { type: 'Third-Party / Public Liability', cover: 'AED 2,000,000' },
  { type: "Workmen's Compensation", cover: 'All employees, as per UAE Labour Law' },
  { type: 'Group Medical Insurance', cover: 'All staff, DHA-compliant plans' },
  { type: 'Motor Fleet Insurance', cover: 'Comprehensive, all service vehicles' },
];

export const stats = [
  { value: `${new Date().getFullYear() - company.founded}+`, label: 'Years in operation' },
  { value: '120+', label: 'Trained staff' },
  { value: '85+', label: 'Active AMC contracts' },
  { value: '24/7', label: 'Emergency response' },
];

export const leadership = [
  {
    name: 'Ahmed Khalid Al Mansoori',
    role: 'Founder & Managing Director',
    bio: 'Over 18 years in UAE property and facilities operations. Oversees company strategy, key client relationships and regulatory compliance.',
  },
  {
    name: 'Rajesh Menon',
    role: 'Operations Manager',
    bio: 'MEP engineer with 15 years of building maintenance experience across Dubai and Sharjah. Leads technical teams and AMC delivery.',
  },
  {
    name: 'Fatima Noor',
    role: 'HSE & Quality Manager',
    bio: 'NEBOSH-certified safety professional responsible for the ISO management systems, site safety and staff training.',
  },
  {
    name: 'Imran Siddiqui',
    role: 'Finance & Administration Manager',
    bio: 'Chartered accountant managing finance, VAT compliance, payroll (WPS) and procurement.',
  },
];

export const values = [
  { title: 'Integrity', text: 'Transparent pricing, honest reporting and full regulatory compliance.' },
  { title: 'Safety', text: 'Every job is risk-assessed. Every technician is trained and equipped.' },
  { title: 'Reliability', text: 'Committed response times, planned schedules and work that is done right.' },
  { title: 'Care', text: 'We look after our clients’ buildings, and our own people, with the same respect.' },
];

export const sectors = [
  { title: 'Residential Towers & Communities', text: 'Common areas, MEP plant rooms, pools, facades and owner association contracts.' },
  { title: 'Commercial Offices', text: 'Daily janitorial teams, after-hours cleaning and preventive maintenance of office systems.' },
  { title: 'Retail & Showrooms', text: 'Early-morning cleaning, lighting and HVAC upkeep that keeps stores trading.' },
  { title: 'Hospitality & F&B', text: 'Kitchen deep cleans, grease-trap coordination and fast maintenance response.' },
  { title: 'Schools & Nurseries', text: 'Child-safe cleaning chemicals, holiday deep cleans and safety system checks.' },
  { title: 'Warehouses & Light Industrial', text: 'High-level cleaning, roof and drainage upkeep, electrical and DB maintenance.' },
  { title: 'Villas & Private Residences', text: 'Villa AMCs, AC servicing, move-in and move-out cleaning.' },
  { title: 'Clinics & Healthcare', text: 'Disinfection protocols and infection-control cleaning to DHA guidelines.' },
];

/** Anonymised sample engagements. Replace with real, client-approved projects. */
export const projects = [
  { title: '38-storey residential tower', location: 'Jumeirah Lake Towers', scope: 'Full MEP AMC, common-area cleaning, 2 × annual water tank cleaning', duration: 'Since 2021' },
  { title: 'Grade-A office floors (4 floors)', location: 'Business Bay', scope: 'Daily janitorial team of 6, monthly deep clean, HVAC preventive maintenance', duration: 'Since 2022' },
  { title: 'Community of 120 townhouses', location: 'Dubailand', scope: 'Villa AMC programme: AC, plumbing, electrical and handyman services', duration: 'Since 2023' },
  { title: 'Retail showroom chain (5 outlets)', location: 'Dubai & Sharjah', scope: 'Pre-opening cleaning, lighting and AC maintenance', duration: 'Since 2022' },
  { title: 'Logistics warehouse, 18,000 sq ft', location: 'Al Quoz', scope: 'Post-construction cleaning, electrical DB maintenance, high-level cleaning', duration: '2024 project' },
  { title: 'Private school campus', location: 'Al Barsha', scope: 'Summer deep clean, AC duct cleaning, fire alarm maintenance', duration: 'Annual contract' },
];

export const testimonials = [
  {
    quote: 'Response times are exactly what the contract says. The monthly reports make owner association meetings much easier.',
    author: 'Property Manager',
    org: 'Residential tower, JLT',
  },
  {
    quote: 'Their cleaning team has been with us for over two years: consistent, well supervised and always in uniform.',
    author: 'Office Administrator',
    org: 'Corporate office, Business Bay',
  },
  {
    quote: 'We moved all 120 villas to their AMC. Residents book through WhatsApp and jobs are closed the same week.',
    author: 'Community Manager',
    org: 'Townhouse community, Dubailand',
  },
];

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Overview', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Licences & Compliance', href: '/licences' },
      { label: 'HSE & Quality', href: '/hse' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const whatsappLink = (text = 'Hello Bab Al Hidaya, I would like a quotation.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
