/**
 * ─────────────────────────────────────────────────────────────────────────
 *  LANGUAGE-NEUTRAL COMPANY DETAILS (numbers, contacts)
 * ─────────────────────────────────────────────────────────────────────────
 *  Contacts and map confirmed by the client (Sept 2026).
 *  Legal/registration details (licence, register, owner, VAT) are kept off
 *  the website on the client's instruction; do not add them here.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Shows the "preview" banner. Off: contact details are confirmed. */
export const isSampleData = false;

/** Search-engine indexing. Switch on once the site runs on its own domain. */
export const allowIndexing = false;

export const company = {
  founded: 2026,
  domain: 'babalhidaya.com',
};

export const contact = {
  phone: '+971 6 521 7126',
  phoneHref: 'tel:+97165217126',
  mobile: '+971 54 214 3054',
  whatsapp: '971542143054', // digits only, used for wa.me links
  email: 'info@babalhidaya.com', // mailbox to be created once the domain is bought
  mapLink: 'https://maps.app.goo.gl/px5u4ESidL8FQdmz7',
  mapEmbed: 'https://www.google.com/maps?q=24.8306092,56.0645647&z=16&output=embed',
};

/** Sections that stay hidden until real content exists. */
export const show = {
  projects: false, // completed projects
  testimonials: false, // genuine client reviews
  hseKpis: false, // measured safety / satisfaction figures
};

/**
 * Headline figures. ESTIMATES agreed with the agency: confirm with the
 * client before presenting the site to banks or investors.
 * [team experience (owner: 10 yrs), emirates covered, trained staff, hiring options]
 */
export const statValues = ['10+', '7', '40+', '4'];

export const hseKpiValues = ['0', '1.2M', '100%', '96%'];

export const whatsappLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
