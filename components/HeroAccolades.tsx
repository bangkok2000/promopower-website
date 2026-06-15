export const AWARDS = [
  {
    icon: "workspace_premium",
    iconClass: "text-primary",
    title: "SME500 Singapore",
    subtitle: "Award Winner — 2022",
  },
  {
    icon: "emoji_events",
    iconClass: "text-accent-amber",
    title: "Entrepreneur 100",
    subtitle: "Award Winner — 2021",
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
            <div className="hero-accolade-icon">
              <span className={`material-symbols-outlined text-[1.75rem] ${award.iconClass}`}>{award.icon}</span>
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
