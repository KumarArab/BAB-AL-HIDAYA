/**
 * ─────────────────────────────────────────────────────────────────────────
 *  LANGUAGE-NEUTRAL COMPANY DETAILS (numbers, contacts, references)
 * ─────────────────────────────────────────────────────────────────────────
 *  VERIFIED from the Ajman DED licence pack (printed 2026-09-02):
 *    licence no., commercial register no., chamber no., licence dates,
 *    founding year, legal name/form, activities, office address, owner.
 *
 *  STILL SAMPLE (awaiting the client form in docs/):
 *    phone, WhatsApp, emails, map pin, VAT TRN, careers openings.
 *  Keep `isSampleData` true until those are confirmed.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const isSampleData = true;

export const company = {
  founded: 2026,
  domain: 'babalhidaya.ae',
};

export const contact = {
  phone: '+971 6 123 4567', // SAMPLE
  phoneHref: 'tel:+97161234567', // SAMPLE
  mobile: '+971 50 123 4567', // SAMPLE
  whatsapp: '971501234567', // SAMPLE, digits only, used for wa.me links
  email: 'info@babalhidaya.ae', // SAMPLE until the domain mailbox exists
  careersEmail: 'careers@babalhidaya.ae', // SAMPLE
  mapEmbed: 'https://www.google.com/maps?q=Masfout,+Ajman,+United+Arab+Emirates&output=embed',
};

export const registration = {
  tradeLicenceNo: '140351',
  commercialRegisterNo: '201843804',
  chamberNo: '223220',
  vatTrn: '', // not in the licence pack; shown only when provided
};

/**
 * Sections that need evidence before they can be shown. Each stays hidden
 * until the client supplies the supporting document or real content.
 */
export const show = {
  approvals: false, // municipality / MOHRE / Civil Defence approvals
  certifications: false, // ISO certificates
  insurance: false, // insurance policies
  projects: false, // completed projects (company registered Aug 2026)
  testimonials: false, // genuine client reviews
  hseKpis: false, // measured safety / satisfaction figures
};

export const approvalRefs = ['', '', ''];

export const certificationCodes = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'];

/** Headline figures: only facts that are true today. */
export const statValues = [String(company.founded), '7', '4', '3'];

export const hseKpiValues = ['0', '1.2M', '100%', '96%'];

export const whatsappLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
