export const SERVICE_LINKS = [
  { label: "Brand Ambassadors", href: "/services/brand-ambassadors" },
  { label: "Product Promoters", href: "/services/product-promoters" },
  { label: "Event Personnel", href: "/services/event-personnel" },
  { label: "Retail Activation Teams", href: "/services/retail-activation-teams" },
  { label: "Roadshows & Engagement", href: "/services/roadshows-consumer-engagement" },
  { label: "Campaign Support", href: "/services/campaign-support-coordination" },
] as const;

export const HOMEPAGE_SECTIONS = [
  { id: "trust", label: "Trust" },
  { id: "framework", label: "Process" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "contact", label: "Contact" },
] as const;

export type HomepageSectionId = (typeof HOMEPAGE_SECTIONS)[number]["id"];

export const HOMEPAGE_QUICK_PATHS = [
  {
    title: "Workforce Solutions",
    description: "Brand ambassadors, promoters, event teams and campaign coordination.",
    sectionId: "services" as const,
    icon: "groups",
  },
  {
    title: "Why PromoPower",
    description: "Experience, process and accountability built since 2002.",
    sectionId: "industries" as const,
    icon: "verified",
  },
  {
    title: "Speak With Us",
    description: "Discuss objectives, timelines and staffing requirements.",
    sectionId: "contact" as const,
    icon: "forum",
  },
] as const;

/** Shared hero / ambient imagery (copyright-safe stock-style operational photo). */
export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y";
