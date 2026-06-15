import Link from "next/link";

const paths = [
  {
    title: "Workforce Solutions",
    description: "Brand ambassadors, promoters, event teams and campaign coordination.",
    href: "#services",
    icon: "groups",
  },
  {
    title: "Why PromoPower",
    description: "Experience, process and accountability built since 2002.",
    href: "#why-us",
    icon: "verified",
  },
  {
    title: "Speak With Us",
    description: "Discuss objectives, timelines and staffing requirements.",
    href: "#contact",
    icon: "forum",
  },
];

export default function QuickPaths() {
  return (
    <section className="relative z-20 -mt-6 pb-2" aria-label="Quick links">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="quick-path-card group"
            >
              <div className="icon-badge mb-4 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined">{path.icon}</span>
              </div>
              <h2 className="text-xl font-headline font-normal text-on-surface mb-2">{path.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">{path.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                Continue
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
