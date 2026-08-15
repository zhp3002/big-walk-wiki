import type { MetadataRoute } from 'next';

// 允许所有爬虫(含 Googlebot)抓取全站,并指向 sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.bigwalkguide.xyz/sitemap.xml',
  };
}
