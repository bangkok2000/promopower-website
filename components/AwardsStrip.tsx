const awards = [
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
];

export default function AwardsStrip() {
  return (
    <section className="relative z-20 border-y border-white/5 bg-charcoal-dark py-8 md:py-10" aria-label="Accreditations and credentials">
      <div className="page-container flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-16">
        {awards.map((award, index) => (
          <div key={award.title} className="flex items-center gap-4">
            {index > 0 ? <div className="hidden md:block w-px h-12 bg-white/10 mr-0" aria-hidden="true" /> : null}
            <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-lg shrink-0">
              <span className={`material-symbols-outlined text-3xl ${award.iconClass}`}>{award.icon}</span>
            </div>
            <div className="text-left text-on-surface-variant">
              <span className="font-bold tracking-widest text-sm uppercase block text-primary">{award.title}</span>
              <span className="text-sm font-medium">{award.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
