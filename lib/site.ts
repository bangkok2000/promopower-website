export const SITE = {
  name: "PromoPower Pte Ltd",
  shortName: "PromoPower",
  url: "https://promopower.com.sg",
  email: "admin@promopower.com.sg",
  address: "65 Airport Boulevard, #03-37 Changi Airport Terminal 3, Singapore 819663",
  streetAddress: "65 Airport Boulevard, #03-37 Changi Airport Terminal 3",
  postalCode: "819663",
  locality: "Singapore",
  countryCode: "SG",
  eaLicense: "20C0109",
  companyReg: "200208541K",
  foundingDate: "2002",
  locale: "en_SG",
  defaultDescription:
    "PromoPower provides professional staffing solutions for promotions, retail activations, events, roadshows and customer engagement programmes in Singapore. MOM licensed employment agency since 2002.",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/promopowersg/",
  instagram: "https://www.instagram.com/promopowersg/",
  facebook: "https://www.facebook.com/PromoPower.com.sg",
} as const;

export const SERVICE_PAGES = [
  {
    slug: "brand-ambassadors",
    title: "Brand Ambassadors",
    description:
      "Trained brand ambassadors in Singapore for product launches, retail activations, sampling and customer-facing campaigns.",
  },
  {
    slug: "event-personnel",
    title: "Event Personnel",
    description:
      "Reliable event personnel in Singapore for corporate events, conferences, brand activations and VIP hospitality.",
  },
  {
    slug: "retail-activation-teams",
    title: "Retail Activation Teams",
    description:
      "Coordinated retail activation teams for multi-location campaigns, mall promotions and structured retail rollouts in Singapore.",
  },
  {
    slug: "roadshows-consumer-engagement",
    title: "Roadshows & Consumer Engagement",
    description:
      "Roadshow and consumer engagement staffing for islandwide promotional tours and on-ground brand experiences in Singapore.",
  },
  {
    slug: "campaign-support-coordination",
    title: "Campaign Support & Coordination",
    description:
      "Campaign support and on-ground coordination for promotional rollouts, supervisors and deployment management in Singapore.",
  },
] as const;

/** Demo mode banner until live delivery is configured on the Worker (see TODO.md). */
export const FORM_DEMO_MODE =
  process.env.NEXT_PUBLIC_FORM_DEMO_MODE === "true" ||
  process.env.NEXT_PUBLIC_FORMS_LIVE !== "true";
