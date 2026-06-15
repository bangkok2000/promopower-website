import { MetadataRoute } from 'next';
import { PORTFOLIO_CAMPAIGNS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://promopower.com.sg';
  const lastModified = '2026-06-15';

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/our-story`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobseekers`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...PORTFOLIO_CAMPAIGNS.map((campaign) => ({
      url: `${baseUrl}/our-work/${campaign.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
