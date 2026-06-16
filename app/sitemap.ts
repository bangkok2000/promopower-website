import { MetadataRoute } from "next";
import { PORTFOLIO_CAMPAIGNS } from "@/lib/data";

export const dynamic = "force-static";

const SERVICE_SLUGS = [
  "brand-ambassadors",
  "product-promoters",
  "event-personnel",
  "retail-activation-teams",
  "roadshows-consumer-engagement",
  "campaign-support-coordination",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://promopower.com.sg";
  // Generated at build time; tracks the most recent build/deploy.
  const lastModified = new Date().toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/why-promopower`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/our-work`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/jobseekers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact-us`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioPages = PORTFOLIO_CAMPAIGNS.map((campaign) => ({
    url: `${baseUrl}/our-work/${campaign.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages];
}
