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
| Numbers & contacts (phone, WhatsApp, email, licence no., TRN, approval refs, stats) | `src/data/site.ts` |
| All English text (company, services, leadership, projects, page copy…) | `src/i18n/en.ts` |
| All Arabic text, same structure (type-checked against English) | `src/i18n/ar.ts` |
| Service slugs, icons and photos | `src/data/services.ts` |
| Photos (Pexels, free commercial licence; see `CREDITS.md`) | `public/images/` |
| Page layouts (shared by both languages) | `src/views/` |
| Logo (placeholder mark) | `src/components/Logo.astro`, `public/favicon.svg` |
| Colours and fonts | `src/styles/global.css` (`@theme`) |

## Languages

English at `/`, Arabic (right-to-left) at `/ar/`. Every page has a language switch in the header.
Each route in `src/pages/` and `src/pages/ar/` is a thin wrapper around a view in `src/views/`.

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
- [ ] Founding year, staff count, AMC count, HSE KPIs (`hseKpiValues` in `src/data/site.ts`)
- [ ] Leadership names, roles, bios (add photos if available)
- [ ] Projects and testimonials: only real, client-approved ones
- [ ] Milestones on `/about` and job openings on `/careers`
- [ ] Real logo, plus team, van and site photos (replace stock photos in `public/images/`)
- [ ] Google Maps embed URL for the real office
- [ ] Set `isSampleData = false`

## Preview deployment (GitHub Pages)

`.github/workflows/deploy-pages.yml` builds on every push to `develop` or the working branch and publishes
`dist/` to the `gh-pages` branch. Live at **https://kumararab.github.io/BAB-AL-HIDAYA/**.
One-time setup: *Settings → Pages → Build and deployment → Deploy from a branch → `gh-pages` / root*.

## Production deploy

Any static host works (Vercel, Netlify, Cloudflare Pages): build command `npm run build`, output `dist/`.
Point `babalhidaya.ae` (and `.com` as a redirect) at the host.

## Roadmap

- Form backend (e.g. Web3Forms/Formspree) in addition to WhatsApp/email
- Photo gallery once real project photos exist
