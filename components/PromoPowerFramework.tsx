interface FrameworkStep {
  title: string;
  description: string;
  icon: string;
}

interface PromoPowerFrameworkProps {
  id?: string;
  heading?: string;
  intro?: string;
  steps?: FrameworkStep[];
}

const defaultSteps: FrameworkStep[] = [
  { title: "Recruit", description: "Select suitable personnel aligned with campaign requirements.", icon: "group_add" },
  { title: "Prepare", description: "Provide structured briefings and campaign preparation.", icon: "school" },
  { title: "Deploy", description: "Assign the right people to the right locations.", icon: "location_on" },
  { title: "Support", description: "Provide active campaign coordination and operational support.", icon: "support_agent" },
  { title: "Review", description: "Capture learnings to improve future outcomes.", icon: "insights" },
];

export default function PromoPowerFramework({
  id,
  heading = "A Structured Approach To Campaign Execution",
  intro = "Recruit, brief, roster, support the live campaign, then record how people performed.",
  steps = defaultSteps,
}: PromoPowerFrameworkProps) {
  return (
    <section id={id || undefined} className="page-section section-elevated">
      <div className="page-container">
        <div className="page-container-prose mb-12 sm:mb-16">
          <h2 className="section-title">{heading}</h2>
          <p className="page-intro">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="border-t border-slate-200 pt-5 h-full">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">
                Step {index + 1}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
