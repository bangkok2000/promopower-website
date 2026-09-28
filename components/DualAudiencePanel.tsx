import Link from "next/link";

export default function DualAudiencePanel() {
  return (
    <section className="relative overflow-hidden border-t border-black/8 bg-background">
      <div className="relative z-10 flex flex-col md:flex-row min-h-[42vh]">
        <div className="flex-1 md:hover:flex-[1.05] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black/8 flex flex-col justify-center items-center md:items-start text-center md:text-left py-14 px-8 md:p-16 lg:p-20 group/card bg-surface">
          <div className="md:group-hover/card:translate-x-1 transition-transform duration-500 max-w-md">
            <span className="section-label">For Clients</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-normal text-on-surface mb-4">
              Plan Your Campaign Workforce
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Include the service, headcount, dates and locations. We will reply with who we would field and how the roster would be run.
            </p>
            <Link href="/contact-us" className="px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:border-primary hover:text-primary transition-all">
              Speak With Our Team
            </Link>
          </div>
        </div>

        <div className="flex-1 md:hover:flex-[1.05] transition-all duration-500 ease-out flex flex-col justify-center items-center md:items-end text-center md:text-right py-14 px-8 md:p-16 lg:p-20 group/card bg-background border-t md:border-t-0 md:border-l border-black/8">
          <div className="md:group-hover/card:-translate-x-1 transition-transform duration-500 max-w-md">
            <span className="section-label">For Jobseekers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-normal text-on-surface mb-4">
              Join Our Talent Pool
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Apply for promotional, retail and event shifts. Recruitment contacts you only when a campaign matches your profile and availability. An application is not a job offer.
            </p>
            <Link href="/jobseekers" className="glow-button px-6 py-3 text-white font-semibold hover:scale-[1.02] transition-all">
              Submit Application
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
