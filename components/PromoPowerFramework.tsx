interface FrameworkStep {
  title: string;
  description: string;
  icon: string;
}

interface PromoPowerFrameworkProps {
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
  heading = "A Structured Approach To Campaign Execution",
  intro = "PromoPower's framework supports quality, accountability and consistency across customer-facing campaigns.",
  steps = defaultSteps,
}: PromoPowerFrameworkProps) {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-4">
            {heading}
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-primary">{step.icon}</span>
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
