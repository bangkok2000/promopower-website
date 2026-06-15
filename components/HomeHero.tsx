import ExpandableProse from "@/components/ExpandableProse";
import HeroAccolades from "@/components/HeroAccolades";
import HomeHeroActions from "@/components/HomeHeroActions";
import { HERO_IMAGE_URL } from "@/lib/navigation";

const heroParagraphs = [
  "For more than two decades, PromoPower has helped organisations connect with customers through professional promoters, brand ambassadors, event personnel and retail support teams.",
  "Behind every successful campaign is a team of people responsible for representing the brand, engaging customers and delivering positive customer experiences. Finding, preparing and managing those people requires more than simply filling positions. It requires experience, planning, operational discipline and a deep understanding of what it takes to execute successfully in real-world environments.",
  "PromoPower provides end-to-end workforce solutions that cover recruitment, screening, preparation, deployment and ongoing campaign support. Whether supporting a single activation or coordinating multiple locations across Singapore, our team helps organisations execute confidently while maintaining the standards their brands deserve.",
];

export default function HomeHero() {
  return (
    <section id="top" className="page-hero relative overflow-hidden min-h-[62vh] lg:min-h-[68vh] flex items-end lg:items-center scroll-mt-header">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMAGE_URL} alt="" className="hero-photo w-full h-full" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 midnight-gradient opacity-40" />
      </div>
      <div className="hero-glow hero-glow-primary -top-24 -left-20 z-[1]" aria-hidden="true" />
      <div className="hero-glow hero-glow-accent -bottom-16 right-0 z-[1]" aria-hidden="true" />

      <div className="relative z-10 page-section w-full pb-10 lg:pb-12">
        <div className="page-container grid lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] gap-10 lg:gap-12 xl:gap-16 items-end lg:items-center">
          <HeroAccolades className="hidden lg:block" />

          <div className="max-w-4xl lg:max-w-3xl xl:max-w-4xl">
            <span className="section-label">PromoPower Singapore</span>
            <h1 className="page-title max-w-3xl">Building Successful Brand Experiences Through Exceptional People</h1>
            <p className="page-intro max-w-2xl mb-8">{heroParagraphs[0]}</p>

            <ExpandableProse
              paragraphs={heroParagraphs.slice(1)}
              visibleCount={0}
              expandLabel="More about how we work"
              className="max-w-2xl mb-8"
            />

            <HomeHeroActions />

            <HeroAccolades className="lg:hidden mt-10 pt-8 border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
