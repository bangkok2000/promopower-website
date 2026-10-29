import { PORTFOLIO_GROUPS } from "@/lib/data";
import { LATEST_WORK_PHOTOS } from "@/lib/latest-work";
import type { Job, PortfolioContent } from "@/lib/site-content";

/** Shown until the team publishes their own list from /admin. Wording matches promopower.com.sg. */
export const DEFAULT_JOBS: Job[] = [
  {
    id: "fmcg-brand-ambassador",
    title: "Brand Ambassador for FMCG brand (Liquor & Spirits / Perfume & Cosmetic)",
    category: "Full Time",
    typeLabel: "Full Time & Part Time position Available",
    experience: "1",
    scope: [
      "To represent selected FMCG Brand (Liquor/Perfume and Cosmetic) in creating brand awareness and sales.",
      "Approaching customers to introduce them to the selected Brand",
      "Monitoring promotion effectiveness and giving relevant feedback related to on-going promotion activities.",
      "Required to perform housekeeping, merchandising and carrying of stocks Outgoing personality, with pleasant disposition, a team player and have a high level of ownership and accountability.",
      "A minimum pass in English at N or O levels or its equivalent for the ease of communication at the work environment.",
      "Able to speak Mandarin for the purpose of communication with our Mandarin speaking clientele.",
    ],
    applyNote:
      "Interested Candidates do send in resume, with subject 'FMCG Brand Ambassador Fulltime/Part time' to maryann@promopower.com.sg cc Yongchiang@promopower.com.sg Khing@promopower.com.sg Nixon@promopower.com.sg",
    active: true,
  },
];

export const DEFAULT_PORTFOLIO: PortfolioContent = {
  latestWork: [...LATEST_WORK_PHOTOS],
  groups: PORTFOLIO_GROUPS.map((group) => ({ client: group.client, photos: [...group.photos] })),
};
