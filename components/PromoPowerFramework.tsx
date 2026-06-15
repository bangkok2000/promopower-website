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
  intro = "PromoPower's framework supports quality, accountability and consistency across customer-facing campaigns.",
  steps = defaultSteps,
}: PromoPowerFrameworkProps) {
  return (
    <section id={id} className="page-section section-elevated scroll-mt-section">
      <div className="page-container">
        <div className="page-container-prose mb-12 sm:mb-16">
          <h2 className="section-title">{heading}</h2>
          <p className="page-intro">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="content-card h-full">
              <div className="icon-badge">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Step {index + 1}</p>
              <h3 className="text-2xl font-headline font-normal text-on-surface mb-3">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
