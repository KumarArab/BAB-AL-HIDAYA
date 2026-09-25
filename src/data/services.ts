import { t, type Lang } from '../i18n/utils';

export type IconName =
  | 'wrench' | 'contract' | 'sparkle' | 'droplet' | 'snow' | 'bolt'
  | 'building' | 'shield' | 'leaf' | 'clock' | 'check' | 'users'
  | 'phone' | 'mail' | 'pin' | 'whatsapp' | 'doc' | 'star' | 'arrow' | 'hardhat';

/** Language-neutral service metadata; text lives in src/i18n/{en,ar}.ts in the same order. */
const serviceMeta: { slug: string; icon: IconName; image: string }[] = [
  { slug: 'cleaners-technicians-on-demand', icon: 'users', image: '/images/team-walking.jpg' },
  { slug: 'building-maintenance', icon: 'wrench', image: '/images/electrician.jpg' },
  { slug: 'annual-maintenance-contracts', icon: 'contract', image: '/images/contract-handshake.jpg' },
  { slug: 'hvac-ac-maintenance', icon: 'snow', image: '/images/hvac.jpg' },
  { slug: 'cleaning-services', icon: 'sparkle', image: '/images/cleaning-service.jpg' },
  { slug: 'facade-window-cleaning', icon: 'building', image: '/images/facade-rope-access.jpg' },
  { slug: 'water-tank-disinfection', icon: 'droplet', image: '/images/plumbing.jpg' },
];

export const serviceSlugs = serviceMeta.map((s) => s.slug);

export const getServices = (lang: Lang) =>
  serviceMeta.map((m, i) => ({ ...m, ...t(lang).services[i] }));

export type Service = ReturnType<typeof getServices>[number];
