import ExpandableProse from "@/components/ExpandableProse";
import HeroAccolades from "@/components/HeroAccolades";
import HomeHeroActions from "@/components/HomeHeroActions";

const heroParagraphs = {
  lead:
    "For more than two decades, PromoPower has helped organisations connect with customers through professional promoters, brand ambassadors, event personnel and retail support teams.",
  campaignPhilosophy:
    "Behind every successful campaign is a team of people responsible for representing the brand, engaging customers and delivering positive customer experiences. Finding, preparing and managing those people requires more than simply filling positions. It requires experience, planning, operational discipline and a deep understanding of what it takes to execute successfully in real-world environments.",
  scope:
    "PromoPower provides end-to-end workforce solutions that cover recruitment, screening, preparation, deployment and ongoing campaign support. Whether supporting a single activation or coordinating multiple locations across Singapore, our team helps organisations execute confidently while maintaining the standards their brands deserve.",
  fromBrief:
    "Work starts from the brief: what customers need to hear, which locations are involved, and the standard of presentation the brand expects. People are screened for communication and fit, then briefed on the product and the campaign rules before they are rostered.",
  whileLive:
    "After the first shift, the operations team handles schedules, attendance and changes on the ground. That covers a single counter or several outlets running at the same time.",
};

export default function HomeHero() {
  return (
    <section
      id="top"
      aria-labelledby="home-hero-title"
      className="magazine-hero relative bg-white pt-6 pb-10 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200 scroll-mt-header"
    >
      <div className="page-container">
        <div className="flex flex-wrap items-center justify-between gap-y-2 border-b border-slate-200/90 pb-3 mb-5 sm:mb-8 text-[0.625rem] sm:text-[0.6875rem] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-slate-500 font-label">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-primary font-bold">Singapore</span>
            <span className="text-slate-300 max-sm:hidden" aria-hidden="true">
              /
            </span>
            <span className="max-sm:hidden">Established 2002</span>
            <span className="text-slate-300 max-sm:hidden" aria-hidden="true">
              /
            </span>
            <span className="max-sm:hidden">MOM EA License 20C0109</span>
            <span className="sm:hidden text-slate-600 normal-case tracking-normal font-medium">
              Since 2002 · EA 20C0109
            </span>
          </div>
          <div className="text-slate-400 hidden sm:block tracking-[0.2em]">
            WORKFORCE INTELLIGENCE &amp; DEPLOYMENT
          </div>
        </div>

        <div className="max-w-5xl mb-5 sm:mb-10 lg:mb-14">
          <h1
            id="home-hero-title"
            className="home-hero-headline font-extrabold tracking-[-0.035em] text-slate-900 font-headline"
          >
            Building Successful Brand Experiences Through Exceptional People
          </h1>
        </div>

        <div className="home-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="home-hero-intro lg:col-span-5 flex flex-col gap-3 sm:gap-5">
            <p className="home-hero-lead text-slate-700">
              {heroParagraphs.lead}
            </p>
            <ExpandableProse
              paragraphs={[heroParagraphs.campaignPhilosophy]}
              visibleCount={0}
              expandLabel="Why the people on the ground matter"
              className="home-hero-philosophy"
            />
            <p className="hidden lg:block text-base sm:text-[1.0625rem] leading-relaxed text-slate-600">
              {heroParagraphs.scope}
            </p>
          </div>

          <div className="home-hero-actions-mobile lg:hidden">
            <HomeHeroActions />
          </div>

          <div className="home-hero-accolades lg:col-span-5">
            <p className="home-hero-accolades-label text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-slate-400 mb-3 font-label">
              Official Accreditations &amp; Recognition
            </p>
            <HeroAccolades />
          </div>

          <div className="home-hero-process lg:col-span-7">
            <div className="home-hero-process-panel">
              <h2 className="home-hero-process-title font-label">
                How a campaign is staffed
              </h2>
              <p className="home-hero-process-copy">{heroParagraphs.fromBrief}</p>

              <div className="home-hero-process-live hidden lg:block">
                <h3 className="home-hero-process-subtitle font-label">
                  While the campaign is running
                </h3>
                <p className="home-hero-process-copy">{heroParagraphs.whileLive}</p>
              </div>

              <ExpandableProse
                paragraphs={[heroParagraphs.whileLive]}
                visibleCount={0}
                expandLabel="While the campaign is running"
                className="home-hero-process-live-mobile lg:hidden"
              />

              <div className="home-hero-actions-desktop hidden lg:block">
                <HomeHeroActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
