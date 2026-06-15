import Link from "next/link";
import { HERO_IMAGE_URL } from "@/lib/navigation";
import ExpandableProse from "@/components/ExpandableProse";

const heroParagraphs = [
  "For more than two decades, PromoPower has helped organisations connect with customers through professional promoters, brand ambassadors, event personnel and retail support teams.",
  "Behind every successful campaign is a team of people responsible for representing the brand, engaging customers and delivering positive customer experiences. Finding, preparing and managing those people requires more than simply filling positions. It requires experience, planning, operational discipline and a deep understanding of what it takes to execute successfully in real-world environments.",
  "PromoPower provides end-to-end workforce solutions that cover recruitment, screening, preparation, deployment and ongoing campaign support. Whether supporting a single activation or coordinating multiple locations across Singapore, our team helps organisations execute confidently while maintaining the standards their brands deserve.",
];

export default function HomeHero() {
  return (
    <section id="top" className="page-hero relative overflow-hidden min-h-[62vh] lg:min-h-[68vh] flex items-end lg:items-center scroll-mt-nav">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMAGE_URL} alt="" className="hero-photo w-full h-full" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 midnight-gradient opacity-40" />
      </div>
      <div className="hero-glow hero-glow-primary -top-24 -left-20 z-[1]" aria-hidden="true" />
      <div className="hero-glow hero-glow-accent -bottom-16 right-0 z-[1]" aria-hidden="true" />

      <div className="relative z-10 page-section max-w-4xl mx-auto w-full pb-10 lg:pb-12">
        <span className="section-label">PromoPower Singapore</span>
        <h1 className="page-title max-w-3xl">Building Successful Brand Experiences Through Exceptional People</h1>
        <p className="page-intro max-w-2xl mb-8">{heroParagraphs[0]}</p>

        <ExpandableProse
          paragraphs={heroParagraphs.slice(1)}
          visibleCount={0}
          expandLabel="More about how we work"
          className="max-w-2xl mb-8"
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center">
          <Link
            href="#contact"
            className="glow-button text-on-primary px-8 sm:px-10 py-4 rounded-full font-headline font-normal text-base hover:scale-105 active:scale-95 transition-all text-center"
          >
            Get In Touch
          </Link>
          <Link href="#services" className="btn-secondary px-8 sm:px-10 py-4 text-base">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
