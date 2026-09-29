export type AwardBadge = {
  icon: string;
  iconClass: string;
  title: string;
  subtitle: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export type AwardCertificate = {
  src: string;
  alt: string;
  caption: string;
};

/** Compact badges — homepage hero and recognition strip. */
export const AWARD_BADGES: readonly AwardBadge[] = [
  {
    icon: "workspace_premium",
    iconClass: "text-primary",
    title: "SME500 Singapore",
    subtitle: "5 consecutive years (through 2025)",
    image: {
      src: "/awards/sme500.jpg",
      alt: "SME500 Singapore Award badge",
      width: 1600,
      height: 1038,
    },
  },
  {
    icon: "emoji_events",
    iconClass: "text-primary",
    title: "Entrepreneur 100",
    subtitle: "Award Winner — 2021",
    image: {
      src: "/awards/entrepreneur-100.jpeg",
      alt: "Singapore Entrepreneur 100 Award Year 2021 Winner badge",
      width: 1176,
      height: 1012,
    },
  },
  {
    icon: "verified_user",
    iconClass: "text-on-surface",
    title: "MOM Licensed Agency",
    subtitle: "EA License No: 20C0109",
    image: {
      src: "/awards/mom-licensed-agency.png",
      alt: "Ministry of Manpower licensed employment agency badge",
      width: 1258,
      height: 1258,
    },
  },
] as const;

/** Full certificate scans — Why PromoPower gallery. */
export const AWARD_CERTIFICATES: readonly AwardCertificate[] = [
  {
    src: "/awards/certificates/sme500-consecutive-five-years-2025.jpeg",
    alt: "Singapore SME 500 Award certificate recognising PromoPower Pte Ltd for five consecutive years through 2025",
    caption: "Singapore SME 500 Award — five consecutive years (through 2025)",
  },
  {
    src: "/awards/certificates/sme500-certificate-2026.jpeg",
    alt: "Singapore 500 SME Company certificate for PromoPower Pte Ltd, year 2026",
    caption: "Singapore 500 SME Company — 2026",
  },
  {
    src: "/awards/certificates/sme500-certificate-2025.jpeg",
    alt: "Singapore 500 SME Company certificate for PromoPower Pte Ltd, year 2025",
    caption: "Singapore 500 SME Company — 2025",
  },
  {
    src: "/awards/certificates/sme500-certificate-2024.jpeg",
    alt: "Singapore 500 SME Company certificate for PromoPower Pte Ltd, year 2024",
    caption: "Singapore 500 SME Company — 2024",
  },
  {
    src: "/awards/certificates/sme500-certificate-2023.jpeg",
    alt: "Singapore 500 SME Company certificate for PromoPower Pte Ltd, year 2023",
    caption: "Singapore 500 SME Company — 2023",
  },
] as const;
