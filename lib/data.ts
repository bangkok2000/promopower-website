export interface Campaign {
  slug: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  imageUrl: string;
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
