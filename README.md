# BAB AL HIDAYA: Company Website

Corporate website for **Bab Al Hidaya Building Maintenance & Cleaning Services L.L.C** (Dubai, UAE).
Built with [Astro](https://astro.build) + Tailwind CSS as a fully static site.

> ⚠️ **All company details on the site are currently SAMPLE DATA.** A "Preview" banner and
> `noindex` tag stay on until `isSampleData` is set to `false` in `src/data/site.ts`.
> Do not show the site to banks or investors until the real details are in.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Where the content lives

| What | File |
|---|---|
| Company name, contact, licence, TRN, approvals, ISO, insurance, stats, leadership, sectors, projects, testimonials, navigation | `src/data/site.ts` |
| Services and service detail pages | `src/data/services.ts` |
| Logo (placeholder mark) | `src/components/Logo.astro`, `public/favicon.svg` |
| Colours and fonts | `src/styles/global.css` (`@theme`) |

## Pages

`/` Home · `/about` · `/leadership` · `/licences` (Licences & Compliance) · `/hse` · `/services` + 6 detail pages ·
`/sectors` · `/projects` · `/careers` · `/contact` · `/company-profile` (printable A4, "Save as PDF" for banks)

## Go-live checklist (replace sample data)

- [ ] Trade licence no., issue/expiry dates, exact licensed activities (from the DET licence)
- [ ] VAT TRN, Chamber of Commerce no., Ejari/office address, P.O. Box
- [ ] Phone, WhatsApp number, email addresses (on the company domain)
- [ ] Dubai Municipality / Civil Defence approvals: **remove any the company does not actually hold**
- [ ] ISO certificates: **remove if not certified**
- [ ] Insurance policies and cover amounts
- [ ] Founding year, staff count, AMC count, HSE KPIs (`src/pages/hse.astro`)
- [ ] Leadership names, roles, bios (add photos if available)
- [ ] Projects and testimonials: only real, client-approved ones
- [ ] Milestones on `/about` and job openings on `/careers`
- [ ] Real logo, plus team, van and site photos
- [ ] Google Maps embed URL for the real office
- [ ] Set `isSampleData = false`

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages): build command `npm run build`, output `dist/`.
Point `babalhidaya.ae` (and `.com` as a redirect) at the host.

## Roadmap

- Arabic version (RTL)
- Form backend (e.g. Web3Forms/Formspree) in addition to WhatsApp/email
- Photo gallery once real project photos exist
