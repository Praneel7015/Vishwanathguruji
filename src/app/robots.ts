import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const dynamic = 'force-static';

const SITE_URL = SITE_CONFIG.siteUrl.replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // Welcome AI crawlers — they drive a meaningful share of intent-led
      // discovery in 2026; explicitly allow rather than relying on defaults.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
