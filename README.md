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

- [ ] Buy `babalhidaya.com` (and ideally `.ae`), create the `info@` mailbox, connect the domain in Netlify
- [ ] Then set `allowIndexing = true` in `src/data/site.ts` and `SITE_URL` in Netlify
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
Set `SITE_URL` (e.g. `https://babalhidaya.netlify.app`, later `https://babalhidaya.ae`) under
*Site configuration → Environment variables* so canonical and hreflang links use the right domain.

## Custom domain

In Netlify: *Domain management → Add a domain* → `babalhidaya.ae`, then add `babalhidaya.com` as a domain alias
(Netlify redirects it to the primary). HTTPS certificates are issued automatically.

## Roadmap

- Form backend (e.g. Web3Forms/Formspree) in addition to WhatsApp/email
- Photo gallery once real project photos exist
