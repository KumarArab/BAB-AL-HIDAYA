/**
 * ─────────────────────────────────────────────────────────────────────────
 *  LANGUAGE-NEUTRAL COMPANY DETAILS (numbers, contacts, references)
 * ─────────────────────────────────────────────────────────────────────────
 *  Every value here and in src/i18n/en.ts + src/i18n/ar.ts is SAMPLE /
 *  MOCK data created for the design preview. Replace with the client's
 *  verified information, then set `isSampleData` to false to remove the
 *  on-site preview banner and allow search-engine indexing.
 *
 *  Do NOT show this site to banks or investors while isSampleData is true.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const isSampleData = true;

export const company = {
  founded: 2019,
  domain: 'babalhidaya.ae',
};

export const contact = {
  phone: '+971 6 123 4567',
  phoneHref: 'tel:+97161234567',
  mobile: '+971 50 123 4567',
  whatsapp: '971501234567', // digits only, used for wa.me links
  email: 'info@babalhidaya.ae',
  careersEmail: 'careers@babalhidaya.ae',
  mapEmbed: 'https://www.google.com/maps?q=Al+Jurf+Industrial+Area+2,+Ajman&output=embed',
};

export const registration = {
  tradeLicenceNo: '1234567',
  vatTrn: '100123456700003',
  chamberNo: '000123456',
};

export const approvalRefs = ['AMPD-PH-2020-00000', 'MOHRE-EST-0000000', ''];

export const certificationCodes = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'];

export const statValues = [`${new Date().getFullYear() - company.founded}+`, '120+', '85+', '7'];

export const hseKpiValues = ['0', '1.2M', '100%', '96%'];

export const whatsappLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
