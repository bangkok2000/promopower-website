export const SERVICE_LINKS = [
  { label: "Brand Ambassadors", href: "/services/brand-ambassadors" },
  { label: "Event Personnel", href: "/services/event-personnel" },
  { label: "Retail Activation Teams", href: "/services/retail-activation-teams" },
  { label: "Roadshows & Engagement", href: "/services/roadshows-consumer-engagement" },
  { label: "Campaign Support", href: "/services/campaign-support-coordination" },
] as const;

export const HOMEPAGE_SECTIONS = [
  { id: "trust", label: "Trust" },
  { id: "framework", label: "Process" },
  { id: "services", label: "Solutions" },
  { id: "industries", label: "Sectors" },
  { id: "contact", label: "Contact" },
] as const;

export type HomepageSectionId = (typeof HOMEPAGE_SECTIONS)[number]["id"];

export const HOMEPAGE_QUICK_PATHS = [
  {
    title: "Workforce Solutions",
    description: "Brand ambassadors, event teams and campaign coordination.",
    sectionId: "services" as const,
    icon: "groups",
  },
  {
    title: "Sector Experience",
    description: "Beauty, retail, FMCG, events and other customer-facing environments.",
    sectionId: "industries" as const,
    icon: "domain",
  },
  {
    title: "Speak With Us",
    description: "Discuss objectives, timelines and staffing requirements.",
    sectionId: "contact" as const,
    icon: "forum",
  },
] as const;

/** Hero background — served from public/hero-bg.jpg (self-hosted). */
export const HERO_IMAGE_URL = "/hero-bg.jpg";
