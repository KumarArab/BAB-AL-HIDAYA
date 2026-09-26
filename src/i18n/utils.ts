import en from './en';
import ar from './ar';

export const languages = { en: 'English', ar: 'العربية' } as const;
export type Lang = keyof typeof languages;

const dictionaries = { en, ar };
export const t = (lang: Lang) => dictionaries[lang];
export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site path with the deploy base (e.g. GitHub Pages sub-path). */
export const asset = (p: string) => `${base}${p}`;

/** Build a localised URL: link('ar', '/services') → `${base}/ar/services`. */
export const link = (lang: Lang, p = '/') => {
  const [path, hash] = p.split('#');
  const clean = path === '/' ? '' : path;
  const url = `${base}${lang === 'ar' ? '/ar' : ''}${clean}/`.replace(/\/+$/, '/');
  return hash ? `${url}#${hash}` : url;
};

/** Strip base and language prefix from a pathname, leaving the logical route. */
export const routeOf = (pathname: string) => {
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  p = p.replace(/^\/ar(?=\/|$)/, '');
  return p.replace(/\/$/, '') || '/';
};
