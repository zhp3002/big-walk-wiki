import type { MetadataRoute } from 'next';
import { topics } from '../data/topics';
import { locales, defaultLocale } from '../locale-config/routing';

// 正式域名 —— 部署在 Vercel,绑定 https://www.bigwalkguide.xyz
const BASE = 'https://www.bigwalkguide.xyz';

type ChangeFrequency = MetadataRoute.Sitemap[number]['changeFrequency'];

interface PageEntry {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

// 需要被 Google 索引的全部公开页面:固定页 + 27 个关键词内页
// (topics 列表来自 data/topics.ts,新增内页自动进 sitemap)
const pageEntries: PageEntry[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/topics', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/guide', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  ...topics.map((t) => ({
    path: `/topics/${t.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as ChangeFrequency,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.flatMap((locale) =>
    pageEntries.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${BASE}/${l}${path}`])),
          'x-default': `${BASE}/${defaultLocale}${path}`,
        },
      },
    }))
  );
}
