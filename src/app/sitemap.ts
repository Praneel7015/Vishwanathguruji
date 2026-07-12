import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { SERVICES } from '@/constants/services';
import { BLOG } from '@/constants/blog';
import { SERVICE_AREAS } from '@/constants/areas';

export const dynamic = 'force-static';

const SITE_URL = SITE_CONFIG.siteUrl.replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    { url: `${SITE_URL}/pujas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    {
      url: `${SITE_URL}/testimonials`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/best-astrologer-in`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const areaRoutes: MetadataRoute.Sitemap = SERVICE_AREAS.map((a) => ({
    url: `${SITE_URL}/best-astrologer-in/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...areaRoutes];
}
