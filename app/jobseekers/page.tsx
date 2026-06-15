import PageHero from "@/components/PageHero";
import JobseekersContent from "./JobseekersContent";

export default function JobseekersPage() {
  return (
    <>
      <PageHero
        badge="Jobseekers"
        title="Join The PromoPower Talent Pool"
        description="Looking for flexible customer-facing opportunities? Submit your profile and our recruitment team will contact you when suitable assignments are available."
      >
        <a
          href="#apply"
          className="glow-button px-8 sm:px-10 py-4 sm:py-5 rounded-full text-on-primary font-headline font-normal text-lg sm:text-xl hover:scale-105 transition-transform inline-flex items-center gap-3"
        >
          Start Your Application <span className="material-symbols-outlined">arrow_downward</span>
        </a>
      </PageHero>
      <JobseekersContent />
    </>
  );
}
