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
      <ul className="flex flex-col gap-6 lg:gap-7">
        {AWARDS.map((award, index) => (
          <li key={award.title}>
            {index > 0 ? <div className="mb-6 lg:mb-7 h-px w-full max-w-[16rem] bg-white/10" aria-hidden="true" /> : null}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-surface/90 border border-white/10 flex items-center justify-center shadow-lg shrink-0 backdrop-blur-sm">
                <span className={`material-symbols-outlined text-2xl lg:text-3xl ${award.iconClass}`}>{award.icon}</span>
              </div>
              <div className="text-left text-on-surface-variant min-w-0">
                <span className="font-bold tracking-widest text-xs sm:text-sm uppercase block text-primary leading-snug">
                  {award.title}
                </span>
                <span className="text-xs sm:text-sm font-medium">{award.subtitle}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
