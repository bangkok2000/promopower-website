import type { MetadataRoute } from "next";
import { SERVICE_PAGES, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/industries`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/why-promopower`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/our-work`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/jobseekers`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/contact-us`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages = SERVICE_PAGES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
