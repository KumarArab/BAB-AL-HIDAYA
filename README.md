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

## Go-live checklist

Verified from the Ajman DED licence pack (Sept 2026): legal name (EN/AR), legal form, licence no. 140351,
commercial register no. 201843804, Ajman Chamber no. 223220, licence dates, licensed activities,
office (Office No. 109, Masfout 8, Ajman), owner/manager, founding year 2026.

Still needed from the client (see `docs/BAB-AL-HIDAYA-Website-Information-Form.docx`):

- [ ] Phone, WhatsApp, emails, Google Maps pin (placeholders in `src/data/site.ts`)
- [ ] VAT TRN, if registered (row appears automatically when `registration.vatTrn` is set)
- [ ] Owner bio and photo; any other managers
- [ ] Confirm services outside the three licensed activities (AC, staffing on hourly/monthly basis)
- [ ] Logo and real photos (replace stock photos in `public/images/`)
- [ ] Evidence-gated sections, switched on in `show` in `src/data/site.ts` only with documents or real content:
      approvals, ISO certificates, insurance, projects, testimonials, HSE figures
- [ ] Set `isSampleData = false`

## Hosting (Netlify)

`netlify.toml` holds the build settings. Connect the repo in Netlify and it builds automatically:
English at `/`, Arabic at `/ar/`, both from one site. Every push to the production branch redeploys.
Set `SITE_URL` (e.g. `https://babalhidaya.netlify.app`, later `https://babalhidaya.ae`) under
*Site configuration → Environment variables* so canonical and hreflang links use the right domain.

## Custom domain

In Netlify: *Domain management → Add a domain* → `babalhidaya.ae`, then add `babalhidaya.com` as a domain alias
(Netlify redirects it to the primary). HTTPS certificates are issued automatically.

## Roadmap

- Form backend (e.g. Web3Forms/Formspree) in addition to WhatsApp/email
- Photo gallery once real project photos exist
