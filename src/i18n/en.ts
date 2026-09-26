// English content. Must stay in the same shape as ar.ts (enforced by the Content type).
// SAMPLE DATA: see the note in src/data/site.ts.

const en = {
  meta: { lang: 'en', switchLabel: 'العربية', titleSuffix: 'Cleaning & Maintenance Services across the UAE' },

  company: {
    name: 'Bab Al Hidaya',
    logoLine1: 'BAB AL HIDAYA',
    logoLine2: 'Cleaning Services',
    legalName: 'Bab Al Hidaya Cleaning Services',
    shortPitch:
      'A licensed UAE cleaning and maintenance company, registered in Ajman, providing trained cleaners and maintenance technicians by the hour, day, week or month, and annual maintenance contracts for homes and businesses across all seven emirates.',
  },

  common: {
    preview: 'Preview:',
    previewText: 'phone numbers, emails and some details on this site are placeholders and will be replaced with the company’s confirmed contact information before launch.',
    home: 'Home',
    requestQuote: 'Get a Quote',
    whatsapp: 'WhatsApp',
    chatWhatsapp: 'Chat on WhatsApp',
    learnMore: 'Learn more',
    viewDetails: 'View details',
    allServices: 'All services',
    menuOpen: 'Open menu',
    waDefault: 'Hello Bab Al Hidaya, I would like to know your charges and get a quotation.',
    waService: (s: string) => `Hello, I would like a quotation for ${s}.`,
    emergency: 'Sat–Thu, 10 AM – 8 PM · Friday closed',
    ctaTitle: 'Need cleaners or technicians? Ask for our rates.',
    ctaText: 'Tell us what you need (by the hour, day, week or month, or a yearly contract) and we will send you prices and a quotation, usually the same day.',
    footerServices: 'Services',
    footerCompany: 'Company',
    footerContact: 'Contact',
    rights: 'All rights reserved.',
    ref: 'Ref.',
    notFoundTitle: 'This page could not be found',
    notFoundText: 'The page may have moved. Try one of these instead.',
    page: 'Page not found',
    comma: ', ',
  },

  nav: {
    home: 'Home', about: 'About', overview: 'Company Overview',
    hse: 'HSE & Quality', services: 'Services', sectors: 'Sectors',
    projects: 'Projects', contact: 'Contact', profile: 'Company Profile', aboutUs: 'About Us',
  },

  address: {
    line1: 'Office No. 109',
    line2: 'Masfout 8',
    poBox: '',
    city: 'Ajman',
    country: 'United Arab Emirates',
    short: 'UAE',
  },

  hours: [
    { days: 'Monday – Thursday', time: '10:00 AM – 8:00 PM' },
    { days: 'Friday', time: 'Closed' },
    { days: 'Saturday – Sunday', time: '10:00 AM – 8:00 PM' },
  ],





  stats: ['Years of team experience', 'Emirates covered', 'Trained staff', 'Hiring options: hourly to monthly'],


  values: [
    { title: 'Integrity', text: 'Transparent pricing, honest reporting and full regulatory compliance.' },
    { title: 'Safety', text: 'Every job is risk-assessed. Every technician is trained and equipped.' },
    { title: 'Reliability', text: 'Committed response times, planned schedules and work that is done right.' },
    { title: 'Care', text: 'We look after our clients’ buildings, and our own people, with the same respect.' },
  ],

  sectors: [
    { title: 'Residential Towers & Communities', text: 'Common areas, MEP plant rooms, pools, facades and owner association contracts.' },
    { title: 'Commercial Offices', text: 'Daily janitorial teams, after-hours cleaning and preventive maintenance of office systems.' },
    { title: 'Retail & Showrooms', text: 'Early-morning cleaning, lighting and HVAC upkeep that keeps stores trading.' },
    { title: 'Hospitality & F&B', text: 'Kitchen deep cleans, grease-trap coordination and fast maintenance response.' },
    { title: 'Schools & Nurseries', text: 'Child-safe cleaning chemicals, holiday deep cleans and safety system checks.' },
    { title: 'Warehouses & Light Industrial', text: 'High-level cleaning, roof and drainage upkeep, electrical and DB maintenance.' },
    { title: 'Villas & Private Residences', text: 'Villa AMCs, AC servicing, move-in and move-out cleaning.' },
    { title: 'Clinics & Healthcare', text: 'Disinfection protocols and infection-control cleaning to DHA guidelines.' },
  ],

  projects: [
    { title: '38-storey residential tower', location: 'Jumeirah Lake Towers', scope: 'Full MEP AMC, common-area cleaning, 2 × annual water tank cleaning', duration: 'Since 2021' },
    { title: 'Grade-A office floors (4 floors)', location: 'Business Bay', scope: 'Daily janitorial team of 6, monthly deep clean, HVAC preventive maintenance', duration: 'Since 2022' },
    { title: 'Community of 120 townhouses', location: 'Al Zahya, Ajman', scope: 'Villa AMC programme: AC, plumbing, electrical and handyman services', duration: 'Since 2023' },
    { title: 'Retail showroom chain (5 outlets)', location: 'Sharjah & Ajman', scope: 'Pre-opening cleaning, lighting and AC maintenance', duration: 'Since 2022' },
    { title: 'Logistics warehouse, 18,000 sq ft', location: 'Al Jurf, Ajman', scope: 'Post-construction cleaning, electrical DB maintenance, high-level cleaning', duration: '2024 project' },
    { title: 'Private school campus', location: 'Al Barsha', scope: 'Summer deep clean, AC duct cleaning, fire alarm maintenance', duration: 'Annual contract' },
  ],

  testimonials: [
    { quote: 'Response times are exactly what the contract says. The monthly reports make owner association meetings much easier.', author: 'Property Manager', org: 'Residential tower, JLT' },
    { quote: 'Their cleaning team has been with us for over two years: consistent, well supervised and always in uniform.', author: 'Office Administrator', org: 'Corporate office, Business Bay' },
    { quote: 'We moved all 120 villas to their AMC. Residents book through WhatsApp and jobs are closed the same week.', author: 'Community Manager', org: 'Villa community, Ajman' },
  ],

  services: [
    {
      title: 'Cleaners & Technicians on Demand',
      summary: 'Trained cleaners and maintenance experts by the hour, day, week or month.',
      intro: 'Need extra hands without hiring? We supply uniformed, supervised cleaners and maintenance technicians on hourly, daily, weekly or monthly terms, with equipment, transport and all visa and labour obligations handled by us.',
      items: ['Hourly home and office cleaners (minimum booking applies)', 'Daily staff for deep cleaning, events and move-ins', 'Weekly scheduled cleaning visits', 'Monthly on-site cleaners and housekeeping staff', 'Maintenance technicians (electrician, plumber, AC, handyman) on call or on site', 'Supervisors for larger teams'],
      benefits: ['No visa or sponsorship costs', 'Replacement staff if someone is absent', 'Clear hourly and monthly rates'],
    },
    {
      title: 'Building Maintenance',
      summary: 'Mechanical, electrical, plumbing and civil maintenance by licensed technicians.',
      intro: 'Our in-house technical teams handle everyday repairs and planned maintenance for towers, offices, villas and commercial units, so small faults are fixed before they become costly failures.',
      items: ['Electrical works: DB maintenance, lighting, sockets, fault finding', 'Plumbing & sanitary: leaks, pumps, water heaters, drainage', 'Civil works: masonry, tiling, gypsum and false ceilings', 'Painting: interior, exterior and waterproofing', 'Carpentry, doors, locks and joinery repairs', 'Handyman services and minor fit-out works'],
      benefits: ['Trained, uniformed technicians', 'Materials sourced from approved suppliers', 'Photo-documented job reports'],
    },
    {
      title: 'Annual Maintenance Contracts (AMC)',
      summary: 'Planned preventive maintenance with committed response times and a fixed yearly cost.',
      intro: 'An AMC puts your building on a planned maintenance calendar with a single point of contact, agreed response times and a predictable annual budget. Plans are tailored to each property after a free site survey.',
      items: ['Free site survey and asset register', 'Planned preventive maintenance (PPM) schedule', 'Reactive call-outs within agreed SLA times', 'Monthly service reports and asset condition logs', 'Dedicated account manager and WhatsApp support line', 'Covers HVAC, MEP, fire systems, civil and cleaning'],
      benefits: ['Emergency: 2-hour on-site response', 'Urgent: same-day response', 'Routine: within 48 hours'],
    },
    {
      title: 'HVAC & AC Maintenance',
      summary: 'Servicing, repair and duct cleaning for split, ducted, package and chilled-water systems.',
      intro: 'In the UAE climate, air-conditioning is critical. We keep systems efficient and reliable with scheduled servicing, fast repairs and indoor air-quality treatments.',
      items: ['Split, ducted, package and FCU servicing', 'Chilled-water system and AHU maintenance', 'Gas top-up, compressor and motor repairs', 'AC duct cleaning and sanitisation', 'Thermostat and control upgrades', 'Energy-efficiency checks'],
      benefits: ['Lower energy bills', 'Longer equipment life', 'Healthier indoor air'],
    },
    {
      title: 'Commercial & Residential Cleaning',
      summary: 'Daily janitorial teams, deep cleaning and move-in/move-out cleaning.',
      intro: 'Supervised, trained cleaning teams for offices, residential buildings, retail and villas, supplied on daily, weekly or one-off contracts with all equipment and consumables.',
      items: ['Daily office and building janitorial staff', 'Common-area, lobby and car park cleaning', 'Deep cleaning and post-construction cleaning', 'Move-in / move-out cleaning', 'Carpet, upholstery and floor polishing', 'Kitchen and washroom hygiene services'],
      benefits: ['Background-checked staff', 'Eco-friendly, approved chemicals', 'Supervisor quality checks'],
    },
    {
      title: 'Facade & Window Cleaning',
      summary: 'High-level glass and facade cleaning using BMU, cradles and rope access.',
      intro: 'Dust and humidity dull building exteriors quickly. Our certified work-at-height teams restore facades safely and on schedule.',
      items: ['External glass and cladding cleaning', 'BMU and gondola operation', 'Rope access (IRATA-trained technicians)', 'Skylight and atrium cleaning', 'Signage and canopy cleaning', 'Quarterly and bi-annual programmes'],
      benefits: ['Work-at-height permits handled', 'Full safety method statements', 'Fully insured operations'],
    },
  ],

  home: {
    since: (y: number) => `Based in Ajman · Serving all UAE`,
    heroA: 'Cleaning & maintenance staff,',
    heroB: 'whenever you need them.',
    heroCta: 'Get Prices & Quotation',
    heroChecks: ['Hourly · Daily · Weekly · Monthly', 'Licensed in Ajman', 'Service across all 7 emirates'],
    quickTitle: 'Why clients call us',
    quickPoints: ['Cleaners & technicians by the hour, day, week or month', 'Male and female cleaners available', 'Service in all seven emirates', 'Free quotation, usually the same day', 'Pay by bank transfer, card or cash'],
    quickCall: 'Call',
    servicesEyebrow: 'What we do',
    servicesTitle: 'Maintenance and cleaning under one contract',
    servicesLead: 'One accountable partner for the technical upkeep and cleanliness of your building.',
    whyEyebrow: 'Why Bab Al Hidaya',
    whyTitle: 'A small company, run to big-company standards',
    whyLead: 'A licensed local company that combines personal attention with the clear quotations, supervision and reporting that property managers and corporate clients expect.',
    reasons: [
      { title: 'Licensed & accountable', text: 'A UAE-licensed company based in Ajman, with clear written quotations, supervised staff and one point of contact.' },
      { title: 'Committed response times', text: '2-hour emergency response for AMC clients, written into every contract.' },
      { title: 'In-house, trained teams', text: 'Our own technicians and cleaners, not subcontractors. Uniformed, supervised and certified.' },
      { title: 'Transparent reporting', text: 'Photo job reports and monthly service summaries for owners and managers.' },
    ],
    amcEyebrow: 'Annual Maintenance Contracts',
    amcTitle: 'How an AMC with us works',
    amcLead: 'Predictable costs, planned maintenance and a response time you can hold us to.',
    steps: [
      { title: 'Free site survey', text: 'We inspect your property and build an asset register.' },
      { title: 'Tailored proposal', text: 'A clear scope, PPM schedule, SLA and fixed annual price.' },
      { title: 'Mobilisation', text: 'Dedicated account manager, team induction and a helpdesk line.' },
      { title: 'Report & improve', text: 'Monthly reports, quarterly reviews and continuous improvement.' },
    ],
    sla: [
      { label: 'Emergency', value: '2 hours on-site' },
      { label: 'Urgent', value: 'Same day' },
      { label: 'Routine', value: 'Within 48 hours' },
    ],
    sectorsEyebrow: 'Sectors',
    sectorsTitle: 'Properties we look after',
    testimonialsEyebrow: 'Client feedback',
    testimonialsTitle: 'What our clients say',
    flexEyebrow: 'Flexible hiring',
    flexTitle: 'Cleaners and technicians, for as long as you need',
    flexLead: 'Book trained, uniformed staff (male or female) for a few hours or a full month. Equipment and supervision included; no visas or sponsorship on your side.',
    flexPlans: [
      { title: 'Hourly', text: 'Home and office cleaning, booked by the hour.', tag: 'Most popular for homes' },
      { title: 'Daily', text: 'Full-day cleaners or technicians for deep cleans, events and move-ins.', tag: 'Per staff, per day' },
      { title: 'Weekly', text: 'Regular visits on fixed days for villas, offices and shops.', tag: 'Fixed schedule' },
      { title: 'Monthly', text: 'Dedicated cleaners, maintenance technicians or supervisors placed on your site.', tag: 'Best value' },
    ],
    flexCta: 'Ask for rates',
    coverageEyebrow: 'Coverage',
    coverageTitle: 'Serving homes and businesses across all seven emirates',
    coverageText: 'Based in Ajman, our mobile cleaning and technical teams travel to clients in every emirate, for a single visit or a long-term placement.',
    emirates: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'],
    badgeTitle: 'In-house teams',
    badgeText: 'No subcontracting of core services',
    photoAlt: { hero: 'Business Bay skyline in Dubai at night', team: 'Uniformed cleaning team', tech: 'Technician in safety gear servicing an electrical panel', contract: 'Signing a maintenance contract' },
  },

  servicesPage: {
    title: 'Services',
    description: 'Building maintenance, AMC contracts, HVAC, commercial cleaning, facade cleaning and water tank disinfection across the UAE.',
    eyebrow: 'Our services',
    heading: 'Everything your building needs, from one licensed partner',
    subtitle: 'Technical maintenance and professional cleaning, available as one-off jobs or as a single annual contract.',
    serviceEyebrow: 'Service',
    included: 'What’s included',
    why: 'Why clients choose us',
    quoteTitle: 'Get a quotation',
    quoteText: 'Tell us about your property. We reply within one working day.',
    others: 'Other services',
  },

  about: {
    title: 'About Us',
    eyebrow: 'About us',
    heading: 'A UAE company built on doing the basics right',
    subtitle: 'Clean buildings, working systems and honest service. Established in Ajman in 2026.',
    whoEyebrow: 'Who we are',
    whoTitle: 'Your building’s long-term care partner',
    p1: (name: string) => `${name} is a licensed cleaning and maintenance company based in Ajman, United Arab Emirates, led by a founder with more than 10 years of experience in the UAE cleaning and maintenance sector.`,
    p2: 'Founded in 2026 in Ajman, we supply trained cleaners and maintenance technicians by the hour, day, week or month, and take on cleaning and maintenance contracts for villas, towers, offices, shops and schools across all seven emirates.',
    p3: 'We employ our own staff, follow clear safety and quality procedures, and keep our licensing fully up to date, so clients can work with us with confidence from day one.',
    vision: 'Our Vision',
    visionText: 'To be the most trusted mid-sized building maintenance and cleaning company in the UAE, known for reliability, safety and integrity.',
    mission: 'Our Mission',
    missionText: 'To protect the value of our clients’ properties through planned maintenance, professional cleaning and transparent service, delivered by well-trained and well-treated people.',
    valuesEyebrow: 'Our values',
    valuesTitle: 'What we stand for',
    journeyEyebrow: 'Our journey',
    journeyTitle: 'Milestones',
    milestones: [
      { year: '2026', text: 'Company established in Ajman by a founder with 10+ years of UAE industry experience.' },
    ],
  },



  hsePage: {
    title: 'HSE & Quality',
    description: 'Health, safety, environment and quality management at Bab Al Hidaya.',
    eyebrow: 'HSE & quality',
    heading: 'Safety first, quality always',
    subtitle: 'Our commitments to safe, high-quality and responsible work on every job.',
    kpis: ['Lost-time injuries (last 12 months)', 'Safe man-hours', 'Staff with safety induction', 'Client satisfaction score'],
    policyEyebrow: 'Our commitment',
    policyTitle: 'HSE & quality policy',
    policyLead: 'Management is committed to preventing injury and ill health, protecting the environment, complying with all UAE legal requirements, and continually improving the quality of our services.',
    pillars: [
      { title: 'Health & Safety', points: ['Risk assessment and method statement for every job', 'Permit-to-work for height, electrical and confined spaces', 'PPE issued and inspected for all staff', 'Toolbox talks before every shift'] },
      { title: 'Quality', points: ['Supervisor inspection checklists', 'Photo-documented job completion', 'Monthly client service reports', 'Quarterly client satisfaction reviews'] },
      { title: 'Environment', points: ['Eco-certified, biodegradable cleaning chemicals', 'Water-saving cleaning equipment', 'Segregation and licensed disposal of waste', 'Energy-efficiency recommendations in AMCs'] },
      { title: 'People & Welfare', points: ['Induction and trade training for all new staff', 'Heat-stress programme and midday break compliance', 'Company-provided accommodation and transport', 'Salaries paid on time through WPS'] },
    ],
  },

  sectorsPage: {
    title: 'Sectors We Serve',
    description: 'Building maintenance and cleaning for residential, commercial, retail, hospitality, education, industrial and healthcare properties in the UAE.',
    eyebrow: 'Sectors',
    heading: 'Maintenance and cleaning for every type of property',
    subtitle: 'Each sector has its own risks, schedules and standards. Our service plans are built around them.',
  },

  projectsPage: {
    title: 'Projects',
    description: 'Selected building maintenance and cleaning engagements by Bab Al Hidaya across the UAE.',
    eyebrow: 'Projects',
    heading: 'Selected engagements',
    subtitle: 'Client names are kept confidential. References are available to qualified enquiries on request.',
    soonTitle: 'Our first projects will be published here soon',
    soonText: 'Bab Al Hidaya was registered in Ajman in August 2026. Completed work will be added here with our clients’ permission. In the meantime, contact us to discuss your requirements.',
  },


  contactPage: {
    title: 'Contact Us',
    description: 'Contact Bab Al Hidaya for building maintenance, AMC and cleaning quotations anywhere in the UAE.',
    eyebrow: 'Contact',
    heading: 'Let’s talk about your property',
    subtitle: 'Ask about our hourly, daily, weekly or monthly rates, request a quotation or book a free site survey. We usually reply the same day.',
    office: 'Office',
    hoursTitle: 'Working hours',
    paymentTitle: 'Payment options',
    payment: 'Bank transfer · Card (POS) · Cash',
    directions: 'Get directions',
    formTitle: 'Ask for prices & quotation',
    formLead: 'Fill in the details and send them to us on WhatsApp or by email.',
    fields: {
      name: 'Full name', company: 'Company', phone: 'Phone', email: 'Email', service: 'Service required',
      property: 'Property type', basis: 'Hiring basis', staff: 'Number of staff', location: 'Emirate & area', message: 'Details',
    },
    selectService: 'Select a service',
    multiple: 'Multiple / not sure',
    select: 'Select',
    locationPh: 'e.g. Al Nuaimiya Ajman, JLT Dubai, Al Khan Sharjah',
    messagePh: 'What work is needed, size of property, preferred dates and timings…',
    basisOptions: ['One-time job', 'Hourly', 'Daily', 'Weekly', 'Monthly', 'Annual contract (AMC)'],
    propertyTypes: ['Residential tower', 'Office / commercial', 'Retail', 'Villa / townhouse', 'School', 'Warehouse / industrial', 'Hotel / F&B', 'Other'],
    sendWa: 'Send via WhatsApp',
    sendEmail: 'Send via Email',
    msgHeader: 'Quotation request',
    mapTitle: 'Office location map',
  },

  profile: {
    title: 'Company Profile',
    back: '← Back to website',
    print: 'Download / Print PDF',
    preview: 'Preview: contains sample data.',
    intro: (y: number, auth: string) => `Established in ${y} in Ajman and led by a founder with 10+ years of UAE industry experience.`,
    s1: 'Company Registration', s2: 'Services', s3: 'Management', s4: 'Approvals & Certifications',
    s5: 'Insurance', s6: 'Sectors We Serve', s7: 'Our Values',
    validity: 'Validity', to: 'to', activitiesLabel: 'Licensed activities:',
    thProperty: 'Property', thLocation: 'Location', thScope: 'Scope', thPeriod: 'Period',
  },
};

export default en;
export type Content = typeof en;
