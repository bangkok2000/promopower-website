import Image from "next/image";

type Award = {
  icon: string;
  iconClass: string;
  title: string;
  subtitle: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export const AWARDS: readonly Award[] = [
  {
    icon: "workspace_premium",
    iconClass: "text-primary",
    title: "SME500 Singapore",
    subtitle: "Award Winner — 2022",
    image: {
      src: "/awards/sme500.jpg",
      alt: "SME500 Singapore Award Winner 2022 badge",
      width: 1600,
      height: 1038,
    },
  },
  {
    icon: "emoji_events",
    iconClass: "text-accent-amber",
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
  },
] as const;

type HeroAccoladesProps = {
  className?: string;
};

export default function HeroAccolades({ className = "" }: HeroAccoladesProps) {
  return (
    <aside className={className} aria-label="Accreditations and credentials">
      <ul className="hero-accolades-list">
        {AWARDS.map((award) => (
          <li key={award.title} className="hero-accolades-item">
            <div className={`hero-accolade-icon ${award.image ? "hero-accolade-icon-badge" : ""}`}>
              {award.image ? (
                <Image
                  src={award.image.src}
                  alt={award.image.alt}
                  width={award.image.width}
                  height={award.image.height}
                  className="hero-accolade-badge-img"
                />
              ) : (
                <span className={`material-symbols-outlined text-[1.75rem] ${award.iconClass}`}>{award.icon}</span>
              )}
            </div>
            <div className="hero-accolade-copy">
              <span className="hero-accolade-title">{award.title}</span>
              <span className="hero-accolade-subtitle">{award.subtitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
