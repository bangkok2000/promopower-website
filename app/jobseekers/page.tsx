import PageHero from "@/components/PageHero";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import JobseekersContent from "./JobseekersContent";

const jobseekerNav = [
  { id: "section-process", label: "Process" },
  { id: "section-benefits", label: "Benefits" },
  { id: "section-apply", label: "Apply" },
];

export default function JobseekersPage() {
  return (
    <>
      <PageHero
        badge="Jobseekers"
        title="Join The PromoPower Talent Pool"
        description="Looking for flexible customer-facing opportunities? Submit your profile and our recruitment team will contact you when suitable assignments are available."
      >
        <a
          href="#section-apply"
          className="glow-button px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-on-primary font-headline font-normal text-lg sm:text-xl hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-3"
        >
          Start Your Application
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_downward
          </span>
        </a>
      </PageHero>

      <PageSectionNavGroup navItems={jobseekerNav} navLabel="Jobseeker sections" scrollHint="Scroll sideways for more sections">
        <JobseekersContent />
      </PageSectionNavGroup>
    </>
  );
}
