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
| Logo files | `public/brand/`, used by `src/components/Logo.astro`; favicon `public/favicon.svg` |
| Colours and fonts | `src/styles/global.css` (`@theme`) |

## Languages

English at `/`, Arabic (right-to-left) at `/ar/`. Every page has a language switch in the header.
Each route in `src/pages/` and `src/pages/ar/` is a thin wrapper around a view in `src/views/`.

## Pages

`/` Home · `/about` · `/hse` · `/services` + 6 detail pages · `/sectors` · `/contact` ·
`/company-profile` (printable A4 brochure, "Save as PDF") · `/projects` (hidden until real projects exist)

## Go-live checklist

Confirmed by the client (Sept 2026): contacts (WhatsApp +971 54 214 3054, landline +971 6 521 7126,
info@babalhidaya.com), office map pin, hours (Mon–Sat 8 AM – 8 PM), services, quote-only pricing, payment methods.

**Privacy rule:** licence/registration numbers, owner details, VAT and other legal information are
deliberately **not** shown on the website.

- [x] `babalhidaya.com` bought (GoDaddy); indexing on, sitemap at `/sitemap-index.xml`
- [ ] Connect the domain in Netlify (DNS at GoDaddy: `A @ → 75.2.60.5`, `CNAME www → <site>.netlify.app`)
- [ ] Create the `info@babalhidaya.com` mailbox
- [ ] Headline figures in `statValues` (`src/data/site.ts`) are estimates: confirm with the client
- [ ] Real photos to replace stock photos in `public/images/`
- [ ] Optional sections in `show` (projects, testimonials, HSE figures) only with real content

## Brand

Logo files (vector, text outlined) in `public/brand/`: horizontal, horizontal-white, stacked, stacked-white,
mark, plus PNG exports. Concept: an arched doorway (*bab*) framing a guiding star (*hidaya*) that doubles as a
cleaning sparkle. Colours: navy `#0B2545`, gold `#C9A227`, teal `#14968C`.

## Hosting (Netlify)

`netlify.toml` holds the build settings. Connect the repo in Netlify and it builds automatically:
English at `/`, Arabic at `/ar/`, both from one site. Every push to the production branch redeploys.
`SITE_URL` defaults to `https://babalhidaya.com` (in `astro.config.mjs`), so no environment variable is needed.

## Custom domain

Primary domain `babalhidaya.com`, DNS kept at GoDaddy:

| Type | Name | Value |
|---|---|---|
| A | `@` | `75.2.60.5` (Netlify load balancer) |
| CNAME | `www` | `<site-name>.netlify.app` |

In Netlify: *Domain management → Add a domain* → `babalhidaya.com` (www is added and redirected automatically),
then *HTTPS → Verify DNS configuration*. Let's Encrypt certificates are issued automatically.

## Roadmap

- Form backend (e.g. Web3Forms/Formspree) in addition to WhatsApp/email
- Photo gallery once real project photos exist
