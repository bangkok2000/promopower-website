import ExpandableProse from "@/components/ExpandableProse";
import HeroAccolades from "@/components/HeroAccolades";
import HomeHeroActions from "@/components/HomeHeroActions";
import HomeSectionNav from "@/components/HomeSectionNav";
import Image from "next/image";

const HOME_HERO_IMAGE = "/images/hero/home-hero-retail-team.jpg";

const heroLeadMobile =
  "We recruit and prepare the team, roster them across your outlets or event sites, and handle attendance and changes once the campaign is live.";

const heroParagraphs = {
  lead:
    "For more than two decades, PromoPower has helped organisations connect with customers through professional promoters, brand ambassadors, event personnel and retail support teams.",
  campaignPhilosophy:
    "To the customer, the person at the counter is the brand. How well that person is chosen and prepared shows in every conversation.",
  scope:
    "That covers one outlet or several locations across Singapore. After the first shift, the same team handles attendance and changes.",
  fromBrief:
    "Work starts from what the client needs: what customers should hear, which locations are involved, and the standard of presentation the brand expects. People are screened for communication and fit, then walked through the product and campaign rules before they are rostered.",
  whileLive:
    "After the first shift, the operations team handles schedules, attendance and changes on the ground. That covers a single counter or several outlets running at the same time.",
};

export default function HomeHero() {
  return (
    <section
      id="top"
      aria-labelledby="home-hero-title"
      className="magazine-hero relative bg-white scroll-mt-header"
    >
      <div className="home-hero-copy-panel page-container pb-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-slate-900/10 pb-3 sm:gap-x-2.5 text-xs sm:text-[0.6875rem] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-slate-600 font-label">
          <span className="inline-block w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-primary font-bold">Singapore</span>
          <span className="text-slate-400 max-sm:hidden" aria-hidden="true">
            /
          </span>
          <span className="max-sm:hidden">Established 2002</span>
          <span className="text-slate-400 max-sm:hidden" aria-hidden="true">
            /
          </span>
          <span className="max-sm:hidden">MOM EA License 20C0109</span>
          <span className="sm:hidden text-slate-700 normal-case tracking-normal font-medium">
            MOM licensed · EA 20C0109
          </span>
        </div>
      </div>

      <div className="home-hero-copy-panel page-container home-hero-copy-panel-after-strip">
        <div className="home-hero-copy-grid">
          <div className="home-hero-copy-main">
            <h1
              id="home-hero-title"
              className="home-hero-headline font-extrabold tracking-[-0.035em] text-slate-900 font-headline mb-4 sm:mb-5"
            >
              Promoters, ambassadors and event teams in Singapore since 2002
            </h1>
            <p className="home-hero-lead text-slate-800 mb-6 sm:mb-8 max-w-2xl sm:hidden">{heroLeadMobile}</p>
            <p className="home-hero-lead hidden text-slate-800 mb-6 sm:mb-8 max-w-2xl sm:block">{heroParagraphs.lead}</p>
            <HomeHeroActions />
          </div>
        </div>
      </div>

      <div className="home-hero-cinema-strip">
        <Image
          src={HOME_HERO_IMAGE}
          alt=""
          width={1440}
          height={631}
          priority
          sizes="100vw"
          className="home-hero-cinema-strip-photo"
          aria-hidden="true"
        />
      </div>

      <div className="page-container pt-8 pb-10 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200">
        <div className="home-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="home-hero-intro lg:col-span-5 flex flex-col gap-3 sm:gap-5">
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

          <div className="home-hero-accolades lg:col-span-5">
            <p className="home-hero-accolades-label text-xs sm:text-[0.6875rem] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-slate-500 mb-3 font-label">
              Official Accreditations &amp; Recognition
            </p>
            <HeroAccolades />
          </div>

          <div className="home-hero-process lg:col-span-7">
            <div className="home-hero-process-panel">
              <h2 className="home-hero-process-title font-label">How a campaign is staffed</h2>
              <p className="home-hero-process-copy">{heroParagraphs.fromBrief}</p>

              <div className="home-hero-process-live hidden lg:block">
                <h3 className="home-hero-process-subtitle font-label">While the campaign is running</h3>
                <p className="home-hero-process-copy">{heroParagraphs.whileLive}</p>
              </div>

              <ExpandableProse
                paragraphs={[heroParagraphs.whileLive]}
                visibleCount={0}
                expandLabel="While the campaign is running"
                className="home-hero-process-live-mobile lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-hero-section-nav">
        <HomeSectionNav />
      </div>
    </section>
  );
}
