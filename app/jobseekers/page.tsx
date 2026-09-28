import PageHero from "@/components/PageHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageSectionNavGroup from "@/components/PageSectionNavGroup";
import { simplePageBreadcrumb } from "@/lib/page-nav-config";
import JobseekersContent from "./JobseekersContent";

const jobseekerNav = [
  { id: "section-process", label: "Process" },
  { id: "section-benefits", label: "Benefits" },
  { id: "section-apply", label: "Apply" },
];

export default function JobseekersPage() {
  return (
    <>
      <PageSectionNavGroup
        hero={
          <PageHero
            badge="Jobseekers"
            title="Join The PromoPower Talent Pool"
            description="Shifts for promotions, retail activations, events and roadshows in Singapore. Submit your details. Recruitment contacts you only if a campaign matches your profile and availability. An application is not a job offer."
            compact
          >
            <a
              href="#section-apply"
              className="glow-button px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-white font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Your Application
            </a>
          </PageHero>
        }
        breadcrumb={<PageBreadcrumb items={simplePageBreadcrumb("Jobseekers")} />}
        navItems={jobseekerNav}
        navLabel="Jobseeker sections"
        scrollHint="Scroll sideways for more sections"
      >
        <JobseekersContent />
      </PageSectionNavGroup>
    </>
  );
}
