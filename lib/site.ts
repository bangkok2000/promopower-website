/** Full entity summary for meta tags and JSON-LD. */
export const HOME_ENTITY_SUMMARY =
  "PromoPower Pte Ltd is a Ministry of Manpower licensed employment agency in Singapore (EA License No. 20C0109; UEN 200208541K), established in 2002. We provide end-to-end workforce solutions—recruitment, screening, preparation, deployment and ongoing campaign support—for brand ambassadors, event personnel, retail activations, roadshows and customer engagement programmes across Singapore. We are a workforce staffing partner for customer-facing campaigns, not a creative or experiential agency.";

/** Visible homepage copy — omits facts already shown in the stat band above. */
export const HOME_ENTITY_SUMMARY_VISIBLE =
  "We recruit the team, walk them through the product, and put them on the roster. Then we stay on attendance and changes. One outlet or several across Singapore (UEN 200208541K).";

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
  defaultDescription: HOME_ENTITY_SUMMARY,
  /** Singapore mobile — WhatsApp click-to-chat (E.164 without +). */
  whatsappE164: "6588250505",
  whatsappDisplay: "8825 0505",
  whatsappUrl: "https://wa.me/6588250505",
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
      "Roadshow staffing for mall tours, public sites and sampling drives in Singapore.",
  },
  {
    slug: "campaign-support-coordination",
    title: "Campaign Support & Coordination",
    description:
      "Rosters, attendance and one contact while a promotional campaign is running in Singapore.",
  },
] as const;

