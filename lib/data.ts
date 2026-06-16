export interface Campaign {
  slug: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  imageUrl: string;
  /** When true, surface this campaign on summary/featured listings. Optional. */
  featured?: boolean;
}

const PORTFOLIO_IMAGE_URLS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA7f9Z8zstYE4mr-MVEbvUyKOq47PuzFn3pIEf9RPoRL11vIjlcKN7bE9-6kTtVYr2XL76Naff9FnB_Fz6eV8QzCXqc6kCKDVexPTCG0DO03AdYiXuKnCUcUTfnWHeTvM2d-ZWmfJaUXDEPAT9Tt-0pVsMmeOAz-Ivw19kKJaeM4BNLMZbVOwJoQ7Wk3yZtbwSLBA2xe-NC62sB8yC1bRs1cQqO4mihkCo_b5zMPG_xRUPUw6cHFXMM-p6AulenC6gEpSR_VAXtnxQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP2SOtLdxFredw6LyC0e7DHwJvFwNQGT2IE1NAMhP3qWRuMayvdElhXj9SWjJbqgP0wW8WQDZvfoQEqgXsRrc7hutiCIhR-4vN2VE-8cUpwEV-KL8l243Vp4aWrCEfZ4RB0BbyhDZcitxnM2ehivDjGWN6jyhnClIeyaLQJ2yP-Hhpm_6hGwAahtQP9jFJTLrdkgrFp0TnbE_JpozXk9Z_BBJXEu1f9HsOsUrWKVgvQ6rRNUy7ovEfmFUWuJG-kTASrFvi1I2WrW0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP2SOtLdxFredw6LyC0e7DHwJvFwNQGT2IE1NAMhP3qWRuMayvdElhXj9SWjJbqgP0wW8WQDZvfoQEqgXsRrc7hutiCIhR-4vN2VE-8cUpwEV-KL8l243Vp4aWrCEfZ4RB0BbyhDZcitxnM2ehivDjGWN6jyhnClIeyaLQJ2yP-Hhpm_6hGwAahtQP9jFJTLrdkgrFp0TnbE_JpozXk9Z_BBJXEu1f9HsOsUrWKVgvQ6rRNUy7ovEfmFUWuJG-kTASrFvi1I2WrW0",
] as const;

const CAMPAIGN_DATA: Omit<Campaign, "imageUrl">[] = [
  {
    slug: "fmcg-retail-campaign",
    title: "National FMCG Retail Campaign",
    subtitle: "Multi-Location Retail Activation",
    challenge: "Drive product awareness and sampling across a large number of retail touchpoints during a peak promotional period.",
    solution: "Deployed a coordinated team of brand ambassadors across major retail locations, supported by structured product briefings and deployment management.",
    impact: "Consistent brand representation achieved across all locations with smooth logistical execution and positive client feedback throughout the campaign.",
  },
  {
    slug: "luxury-beauty-counter-launch",
    title: "Luxury Beauty Counter Launch",
    subtitle: "Flagship Counter Opening",
    challenge: "Maintain premium brand standards and deliver a professional customer experience across high foot traffic during a flagship counter opening.",
    solution: "Selected and prepared a team of brand ambassadors with thorough briefings on brand heritage, product knowledge and customer engagement standards.",
    impact: "Professional brand representation delivered throughout the opening period with smooth customer flow management and strong client satisfaction.",
  },
  {
    slug: "premium-spirits-multi-venue",
    title: "Premium Spirits Portfolio",
    subtitle: "Multi-Venue Bar Deployment",
    challenge: "Activate a premium spirits portfolio across multiple on-trade venues simultaneously during a major promotional period.",
    solution: "Coordinated a team of trained promoters and supervisors to support brand engagement across all venues with consistent messaging and product knowledge.",
    impact: "Consistent brand presence delivered across all participating venues with smooth operational execution and strong coordination throughout the campaign.",
  },
  {
    slug: "prestige-cosmetics-roadshow",
    title: "Prestige Cosmetics Roadshow",
    subtitle: "Bespoke Mall Roadshow",
    challenge: "Create an engaging and personalised customer experience across open-concept retail environments over an extended campaign period.",
    solution: "Deployed brand ambassadors trained in product consultation, customer engagement and brand presentation to support the roadshow across multiple locations.",
    impact: "Wide product reach achieved across targeted customer demographics with professional representation maintained consistently throughout the campaign.",
  },
  {
    slug: "beverage-brand-festival",
    title: "International Beverage Brand",
    subtitle: "Consumer Festival Promotion",
    challenge: "Maintain consistent brand engagement across a large-scale consumer event with high footfall and a demanding operational environment.",
    solution: "Trained and deployed a team of promoters with dedicated on-site supervision to support brand engagement throughout the event.",
    impact: "Full deployment maintained throughout the event with consistent brand engagement and professional representation delivered across all hours of operation.",
  },
  {
    slug: "niche-fragrance-launch",
    title: "Niche Fragrance Launch",
    subtitle: "Boutique Product Launch",
    challenge: "Communicate a nuanced brand aesthetic and product story for a specialised fragrance launch requiring high presentation standards.",
    solution: "Selected brand ambassadors aligned with the campaign profile and provided thorough product knowledge briefings prior to deployment.",
    impact: "Brand represented professionally throughout the launch period with positive customer engagement and strong alignment with campaign objectives.",
  },
  {
    slug: "ultra-premium-vip-event",
    title: "Ultra-Premium Spirits Brand",
    subtitle: "VIP Event Staffing",
    challenge: "Deliver professional and responsive service at an exclusive VIP event requiring high standards of presentation and discretion.",
    solution: "Assembled a team of experienced event personnel with thorough briefings on client expectations, service standards and event protocols.",
    impact: "Event executed professionally with strong client satisfaction, smooth operations and positive feedback from the client team.",
  },
  {
    slug: "luxury-popup-retail-experience",
    title: "International Luxury Brand",
    subtitle: "Pop-Up Retail Experience",
    challenge: "Support a complex branded pop-up retail experience with professional customer engagement and lead capture assistance.",
    solution: "Deployed brand ambassadors trained in customer engagement, lead capture processes and brand presentation standards appropriate for the environment.",
    impact: "Strong customer engagement delivered throughout the pop-up period with professional representation and effective support for campaign objectives.",
  },
  {
    slug: "fine-champagne-showcase",
    title: "Fine Champagne Showcase",
    subtitle: "Luxury Beverage Event",
    challenge: "Maintain elegance and professionalism while supporting a high-volume luxury beverage showcase at an industry event.",
    solution: "Provided event personnel with specialised briefings on luxury beverage presentation, customer service protocols and event standards.",
    impact: "Event supported professionally throughout with smooth operations, consistent service standards and strong client satisfaction.",
  },
  {
    slug: "national-beverage-multi-location",
    title: "Established Beverage Brand",
    subtitle: "National Multi-Location Campaign",
    challenge: "Coordinate simultaneous brand activations across multiple venues island-wide during a major promotional period.",
    solution: "Managed a multi-location deployment of promoters and supervisors with structured coordination and real-time operational oversight.",
    impact: "Consistent brand presence maintained across all participating locations with full deployment achieved and smooth coordination throughout.",
  },
  {
    slug: "premium-whisky-retail-deployment",
    title: "Premium Whisky Brand",
    subtitle: "Spirits Tasting Deployment",
    challenge: "Deliver an educational and engaging product tasting experience across multiple retail floors simultaneously.",
    solution: "Equipped promoters with thorough product knowledge briefings and structured engagement approaches to support informed customer conversations.",
    impact: "Consistent brand representation delivered across all retail locations with positive customer engagement and smooth operational execution.",
  },
  {
    slug: "skincare-sampling-campaign",
    title: "International Skincare Brand",
    subtitle: "Product Sampling Campaign",
    challenge: "Engage customers in high-traffic environments and support product trial and awareness for a skincare sampling initiative.",
    solution: "Deployed trained promoters with product knowledge briefings and structured customer engagement approaches suited to the environment.",
    impact: "Effective product sampling achieved across target locations with professional customer engagement and smooth operational execution throughout.",
  },
];

export const PORTFOLIO_CAMPAIGNS: Campaign[] = CAMPAIGN_DATA.map((campaign, index) => ({
  ...campaign,
  imageUrl: PORTFOLIO_IMAGE_URLS[index % PORTFOLIO_IMAGE_URLS.length],
}));

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return PORTFOLIO_CAMPAIGNS.find((c) => c.slug === slug);
}

/**
 * Featured "case study" entries used on the Our Work page above the campaign
 * grid. These intentionally use a slightly different shape (challenge / solution
 * / outcome instead of impact, plus an `id` for the large numeric label) and
 * are kept here so the data layer is the single source of truth.
 */
export interface FeaturedCase {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl: string;
}

export const FEATURED_CASES: FeaturedCase[] = [
  {
    id: "01",
    title: "Major Global Technology Brand",
    challenge:
      "Deploy and manage a large promoter team across a multi-day convention environment while maintaining service consistency.",
    solution:
      "Provided end-to-end staffing operations, structured campaign briefings and dedicated on-site supervision.",
    outcome:
      "Full deployment achieved across all locations with consistent customer-facing delivery and smooth operations.",
    imageUrl: PORTFOLIO_IMAGE_URLS[1],
  },
  {
    id: "02",
    title: "International Beauty Campaign",
    challenge:
      "Support high-volume customer engagement for a flagship launch while preserving premium brand presentation standards.",
    solution:
      "Selected and prepared campaign personnel with clear brand and customer-interaction briefings.",
    outcome:
      "Strong campaign execution and consistent representation maintained throughout the launch period.",
    imageUrl: PORTFOLIO_IMAGE_URLS[2],
  },
];

// ---------------------------------------------------------------------------
// Gallery photos — hotlinked from existing site while DNS migration is pending.
// After cutover, migrate files to public/gallery/ and update paths.
// ---------------------------------------------------------------------------
const WP = "https://promopower.com.sg/wp-content/uploads";

export const GALLERY_PHOTOS: string[] = [
  `${WP}/2020/06/20200122_193317-1-scaled.jpg`,
  `${WP}/2020/06/IMG-20200117-WA0116-1.jpg`,
  `${WP}/2020/06/WhatsApp-Image-2019-08-11-at-15.59.25-2.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-08-12-at-19.29.33-1-1.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-08-12-at-19.29.33.jpeg`,
  `${WP}/2020/06/20200117_192318-1-scaled.jpg`,
  `${WP}/2020/06/20200122_193110-1-scaled.jpg`,
  `${WP}/2020/06/IMG_9997-1-scaled.jpg`,
  `${WP}/2020/06/IMG_4812-1-scaled.jpg`,
  `${WP}/2020/06/IMG_4818-1-scaled.jpg`,
  `${WP}/2020/06/IMG_9434-1-scaled.jpg`,
  `${WP}/2020/06/WhatsApp-Image-2019-07-05-at-09.56.26.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-11-01-at-11.57.16.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-11-01-at-11.57.18.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-11-08-at-13.14.09.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-11-26-at-11.37.07.jpeg`,
  `${WP}/2020/06/WhatsApp-Image-2019-12-16-at-10.38.12.jpeg`,
  `${WP}/2020/06/IMG_5523-4-scaled.jpg`,
  `${WP}/2020/06/IMG_9271-4-scaled.jpg`,
  `${WP}/2020/06/5c2bf1f7-78ce-4160-a4e5-7f80f3cd7129-4.jpg`,
  `${WP}/2020/06/b88342ab-24dd-47eb-91ad-00af762b524c-4.jpg`,
  `${WP}/2020/06/IMG_3439-4-scaled.jpg`,
  `${WP}/2020/05/7edb2733-e4f6-4c8b-af9c-2c1395b1d7fa.jpg`,
  `${WP}/2020/05/09e5b651-d8d7-43bb-b991-25f033021262-2.jpg`,
  `${WP}/2020/05/a98b217b-80e1-40c9-8b43-97871fcff0c4.jpg`,
  `${WP}/2020/05/aec2293b-94a8-40d2-9250-ba3630571cef-2.jpg`,
  `${WP}/2020/05/IMG_5735-scaled.jpg`,
  `${WP}/2020/05/IMG_7167-scaled.jpg`,
  `${WP}/2020/05/IMG_7321-scaled.jpg`,
  `${WP}/2020/06/IMG_3533-3-scaled.jpg`,
  `${WP}/2020/06/IMG_4228-3-scaled.jpg`,
  `${WP}/2020/06/IMG_6030-3-scaled.jpg`,
  `${WP}/2020/06/975b5f5b-0066-4720-811d-56a6a468853b-2.jpg`,
  `${WP}/2020/06/20180707_195622-2-scaled.jpg`,
  `${WP}/2020/06/a3960608-79eb-44e9-a802-3cda124a3f37-2.jpg`,
  `${WP}/2020/06/d2689c40-714f-457c-b953-58f69bbc2cf9-2.jpg`,
  `${WP}/2020/06/IMG_8656-2-scaled.jpg`,
  `${WP}/2020/06/IMG-20190404-WA0015.jpg`,
  `${WP}/2020/06/IMG-20190404-WA0017-1.jpg`,
  `${WP}/2020/06/WhatsApp-Image-2019-05-24-at-17.12.32-1.jpeg`,
  `${WP}/2020/06/IMG-20190401-WA0082-1.jpg`,
  `${WP}/2020/06/IMG-20190402-WA0014-1.jpg`,
  `${WP}/2020/05/Website-2.jpg`,
  `${WP}/2020/05/Website-3.jpg`,
  `${WP}/2020/05/Website-4.jpg`,
  `${WP}/2020/05/Website.jpg`,
  `${WP}/2020/05/ribbon-cutting.jpg`,
  `${WP}/2020/05/Website-2-1.jpg`,
  `${WP}/2020/05/Website-4-1.jpg`,
  `${WP}/2020/06/20191108_123512-1-scaled.jpg`,
  `${WP}/2020/06/IMG_1589-1-scaled.jpg`,
  `${WP}/2020/06/Website-3-3-scaled.jpg`,
  `${WP}/2020/06/20191125_123858-1-scaled.jpg`,
  `${WP}/2020/06/Website-2-3-scaled.jpg`,
  `${WP}/2020/06/Website-6-scaled.jpg`,
  `${WP}/2020/06/Website-2-4-scaled.jpg`,
  `${WP}/2020/06/Website-3-4-scaled.jpg`,
  `${WP}/2020/06/Website-4-2-scaled.jpg`,
  `${WP}/2020/06/Love-Chopard-4-1.jpg`,
  `${WP}/2020/06/IMG-20200207-WA0036-1.jpg`,
  `${WP}/2020/06/IMG-20200214-WA0022-1.jpg`,
  `${WP}/2020/06/IMG-20200214-WA0023-1.jpg`,
  `${WP}/2020/06/IMG-20200219-WA0024-1.jpg`,
  `${WP}/2020/06/IMG-20200219-WA0025-1.jpg`,
  `${WP}/2020/06/IMG-20200114-WA0063-1.jpg`,
  `${WP}/2020/06/IMG-20200114-WA0064-1.jpg`,
  `${WP}/2020/06/IMG-20200114-WA0065-1.jpg`,
  `${WP}/2020/06/IMG-20200219-WA0023-1.jpg`,
  `${WP}/2020/06/Website-3-6.jpg`,
  `${WP}/2020/06/Website-8-scaled.jpg`,
  `${WP}/2020/06/Website-4-4-scaled.jpg`,
  `${WP}/2020/06/Website-5-2-scaled.jpg`,
  `${WP}/2020/06/Website-2-6-scaled.jpg`,
  `${WP}/2020/06/EA-2.jpeg`,
  `${WP}/2020/06/EA-1.jpeg`,
  `${WP}/2020/05/Website-2-2-scaled.jpg`,
  `${WP}/2020/05/Website-3-1-scaled.jpg`,
  `${WP}/2020/05/Website-4-2.jpg`,
  `${WP}/2020/05/Website-5-scaled.jpg`,
  `${WP}/2020/05/Website-1-scaled.jpg`,
  `${WP}/2020/05/IMG-20200114-WA0068.jpg`,
  `${WP}/2020/05/PHOTO-2020-01-03-11-40-56.jpg`,
  `${WP}/2020/05/PHOTO-2020-01-03-11-40-57.jpg`,
  `${WP}/2020/06/20190703_175145-1-scaled.jpg`,
  `${WP}/2020/06/20190704_065710-1-scaled.jpg`,
  `${WP}/2020/06/20190704_065728-1-scaled.jpg`,
  `${WP}/2020/06/20190705_141156-1-scaled.jpg`,
  `${WP}/2020/06/20190715_161250-1-scaled.jpg`,
  `${WP}/2020/06/20190715_174516-1-scaled.jpg`,
  `${WP}/2020/06/20190715_174814-1-scaled.jpg`,
  `${WP}/2020/06/20190715_181128-1-scaled.jpg`,
  `${WP}/2020/06/Photo-2-3-17-9-28-36-PM-1-scaled.jpg`,
  `${WP}/2020/06/Photo-11-3-17-12-56-04-PM-1-scaled.jpg`,
  `${WP}/2020/06/Photo-13-4-17-6-15-18-PM-1-scaled.jpg`,
  `${WP}/2020/06/20190330_144901-2-scaled.jpg`,
  `${WP}/2020/06/IMG_0823-2-scaled.jpg`,
  `${WP}/2020/06/20190625_141654-3.jpg`,
  `${WP}/2020/06/20190625_141027-3-scaled.jpg`,
  `${WP}/2020/06/4.jpg`,
  `${WP}/2020/06/5-scaled.jpg`,
  `${WP}/2020/06/6-scaled.jpg`,
  `${WP}/2020/06/7.jpg`,
  `${WP}/2020/06/1-scaled.jpg`,
  `${WP}/2020/06/2.jpg`,
  `${WP}/2020/06/3.jpeg`,
  `${WP}/2020/06/2-1-scaled.jpg`,
  `${WP}/2020/06/3-scaled.jpg`,
  `${WP}/2020/06/4-1-scaled.jpg`,
  `${WP}/2020/06/5-1.jpg`,
  `${WP}/2020/06/1-1.jpg`,
  `${WP}/2020/06/IMG_1819-1-scaled.jpg`,
  `${WP}/2020/06/IMG_1792-1-scaled.jpg`,
  `${WP}/2020/06/2-2-scaled.jpg`,
  `${WP}/2020/06/3-1-scaled.jpg`,
  `${WP}/2020/06/4-2-scaled.jpg`,
  `${WP}/2020/06/5-2-scaled.jpg`,
  `${WP}/2020/06/6-1-scaled.jpg`,
  `${WP}/2020/06/7-1-scaled.jpg`,
  `${WP}/2020/06/8-scaled.jpg`,
  `${WP}/2020/06/2-3-scaled.jpg`,
  `${WP}/2020/06/1-2-scaled.jpg`,
  `${WP}/2020/06/IMG_5648-1-scaled.jpg`,
  `${WP}/2020/06/IMG_5660-1-scaled.jpg`,
  `${WP}/2020/06/IMG_5673-1-scaled.jpg`,
  `${WP}/2020/06/IMG_5679-1-scaled.jpg`,
  `${WP}/2020/06/IMG_5691-1-scaled.jpg`,
  `${WP}/2020/06/MQFB6076-1.jpg`,
  `${WP}/2020/06/QNFV4720-1.jpg`,
  `${WP}/2020/06/RDZZ0704-1-scaled.jpg`,
  `${WP}/2020/06/20200121_152934-1-scaled.jpg`,
  `${WP}/2020/06/20200121_162556-1-scaled.jpg`,
  `${WP}/2020/06/20200121_163245-1-scaled.jpg`,
  `${WP}/2020/06/IMG_5578-1-scaled.jpg`,
  `${WP}/2020/06/IMG_5623-1-scaled.jpg`,
  `${WP}/2020/06/20190802_155603-1-scaled.jpg`,
  `${WP}/2020/06/20190802_163118-1-scaled.jpg`,
  `${WP}/2020/06/20190824_121534-1-scaled.jpg`,
  `${WP}/2020/06/IMG_2340-1.jpg`,
  `${WP}/2020/06/IMG_2341-1.jpg`,
  `${WP}/2020/06/IMG_2342-1.jpg`,
  `${WP}/2020/06/IMG_2343-1.jpg`,
  `${WP}/2020/06/IMG_2362-1.jpg`,
  `${WP}/2020/06/IMG_2360-1.jpg`,
  `${WP}/2020/06/IMG_2356-1.jpg`,
  `${WP}/2020/06/IMG_2354-1.jpg`,
  `${WP}/2020/06/IMG_2355-1.jpg`,
  `${WP}/2020/06/IMG_3159-1-scaled.jpg`,
  `${WP}/2020/06/IMG_3158-1-scaled.jpg`,
  `${WP}/2020/06/2-6.jpg`,
  `${WP}/2020/06/3-4.jpg`,
  `${WP}/2020/06/1-5.jpg`,
  `${WP}/2020/06/6-3-scaled.jpg`,
  `${WP}/2020/06/1-6.jpg`,
  `${WP}/2020/06/2-7-scaled.jpg`,
  `${WP}/2020/06/3-5-scaled.jpg`,
  `${WP}/2020/06/4-4-scaled.jpg`,
  `${WP}/2020/06/5-4-scaled.jpg`,
  `${WP}/2020/06/IMG_0937-2-scaled.jpg`,
  `${WP}/2020/06/20190513_172659-2-scaled.jpg`,
  `${WP}/2020/06/Photo-9-5-17-12-17-04-PM-2-scaled.jpg`,
  `${WP}/2020/06/Photo-18-5-17-2-42-02-PM-2-scaled.jpg`,
  `${WP}/2020/06/2-10-scaled.jpg`,
  `${WP}/2020/06/3-8-scaled.jpg`,
  `${WP}/2020/06/4-7-scaled.jpg`,
  `${WP}/2020/06/5-7-scaled.jpg`,
  `${WP}/2020/06/6-6-scaled.jpg`,
  `${WP}/2020/06/7-3.jpeg`,
  `${WP}/2020/06/8-3.jpeg`,
  `${WP}/2020/06/1-9.jpg`,
];
