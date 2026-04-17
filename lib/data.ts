export interface Campaign {
  slug: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  imageUrl: string;
}

export const PORTFOLIO_CAMPAIGNS: Campaign[] = [
  {
    slug: "tiger-beer",
    title: "Tiger Beer",
    subtitle: "National Retail Activation",
    challenge: "Drive mass awareness and high-volume, on-ground sampling across 50+ retail touchpoints during the holiday peak season.",
    solution: "Deployed a synchronized taskforce of 120+ high-energy brand ambassadors across all major retail hypermarts, armed with deep product knowledge and engaging digital capture tools.",
    impact: "Over 25,000 samples distributed within a month, resulting in a 40% uplift in retail off-take and zero logistical disruptions.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "dior-beauty",
    title: "Dior Beauty",
    subtitle: "Flagship Counter Launch",
    challenge: "Elevate the luxury unveiling of a new flagship counter by strictly maintaining Dior's premium brand standards across high-volume VIP foot traffic.",
    solution: "Hand-selected 15 premium 'Luminaries' extensively trained in VIP clientele management, luxury aesthetics, and Dior heritage.",
    impact: "Seamless flow management handling 500+ daily VIPs, contributing to record-breaking opening weekend sales and viral social media aesthetics.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "bacardi-rum",
    title: "Bacardi Rum",
    subtitle: "Premium Bar Deployment",
    challenge: "Activate Bacardi's new premium portfolio across 15 high-end nightlife venues simultaneously on a major holiday weekend.",
    solution: "Coordinated an elite, nightlife-ready team of Promoters and Supervisors to execute synchronized bottle-service engagements.",
    impact: "Increased premium portfolio pour rates by 60% compared to previous quarters, driving massive footprint conversion.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "chanel-beauty",
    title: "Chanel Beauty",
    subtitle: "Bespoke Mall Roadshow",
    challenge: "Create a sophisticated, highly-personalized journey for shoppers flowing through an open-concept mall atrium.",
    solution: "Deployed 20 premium brand ambassadors providing one-on-one beauty consultations to intercept and delight organic walk-ins.",
    impact: "Over 8,000 bespoke physical samples handed directly to targeted demographics with a 15% conversion-to-counter tracking footprint.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "heineken",
    title: "Heineken",
    subtitle: "Music Festival Promoters",
    challenge: "Effectively manage an intense, high-stamina environment of over 40,000 festival-goers with zero drop in brand energy.",
    solution: "Trained and staged a roster of 60 dynamic, mobile roaming talents, supported by dedicated on-site logistics management.",
    impact: "100% attendance rate from the promo team, maintaining relentless high-energy crowd engagements for 12 straight hours.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "maison-margiela",
    title: "Maison Margiela",
    subtitle: "Fragrance Launch",
    challenge: "Communicate an avant-garde and nuanced brand aesthetic for a highly anticipated niche fragrance launch.",
    solution: "Sourced 'Luminaries' who fit a specific editorial aesthetic profile, highly educated in fragrance note storytelling.",
    impact: "Generated unprecedented influencer traction driven by the aesthetic accuracy of the brand representatives.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "grey-goose",
    title: "Grey Goose",
    subtitle: "VIP Event Staffing",
    challenge: "Deliver flawless, invisible yet highly responsive service at an ultra-exclusive yacht launch event.",
    solution: "Assembled a specialized strike-team of premium hospitality VIP supervisors capable of autonomous high-level decision making.",
    impact: "Pristine execution resulting in the securing of a multi-year exclusive staffing retainership with the parent agency.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "bvlgari",
    title: "Bvlgari Fragrances",
    subtitle: "Pop-up Retail Experience",
    challenge: "Translate a complex architectural pop-up experience into seamless consumer interactions.",
    solution: "Deployed brand tech experts who effortlessly blended luxury hospitality with complex digital engagement tools to register leads.",
    impact: "Captured over 6,000 highly qualified opt-in leads for luxury CRM retargeting.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "piper-heidsieck",
    title: "Piper-Heidsieck",
    subtitle: "Luxury Champagne Showcase",
    challenge: "Maintain elegance while executing high-volume pouring at an elite industry gala.",
    solution: "Specialized training for 15 talents specifically on the art of luxury beverage handling and etiquette.",
    impact: "Event concluded with perfect inventory reconciliation and flawless VIP satisfaction scores.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "guinness",
    title: "Guinness",
    subtitle: "St. Patrick's Day Campaign",
    challenge: "Coordinate a massive, multi-location simultaneous activation to dominate St. Patrick's Day celebrations island-wide.",
    solution: "A complex matrix deployment of 80 talents across 20 venues, managed via an agile remote command center.",
    impact: "Blanketed the city with brand presence, driving a monumental 75% increase in on-trade visibility.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "edrington-group",
    title: "The Edrington Group",
    subtitle: "Spirits Tasting Deployment",
    challenge: "Deliver an intimate, educational masterclass experience simultaneously across sprawling retail floors.",
    solution: "Equipped talents with iPad-based interactive tasting notes, turning promoters into impromptu masterclass sommeliers.",
    impact: "Significantly elevated consumer dwell time and direct bottle sales by 30%.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  },
  {
    slug: "kiehls",
    title: "Kiehl's",
    subtitle: "Skincare Product Sampling",
    challenge: "Effectively intercept and convert fast-moving transit demographics via instant skin consultations.",
    solution: "Positioned highly charismatic roving talents equipped with mobile diagnostic tools at specific high-traffic choke points.",
    impact: "Achieved an astounding 90% sampling efficiency rate, driving massive direct footfall into flagship stores.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
  }
];

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return PORTFOLIO_CAMPAIGNS.find((c) => c.slug === slug);
}
