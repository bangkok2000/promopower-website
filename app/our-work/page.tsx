import Link from "next/link";
import type { Metadata } from "next";
import { PORTFOLIO_CAMPAIGNS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | PromoPower",
  description: "Browse PromoPower's portfolio of high-impact brand activations for leading global brands across Singapore.",
  alternates: { canonical: "/our-work" },
};

export default function OurWork() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center px-6 sm:px-8 overflow-hidden bg-charcoal-dark border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mt-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-normal text-on-surface tracking-tight mb-6 flex flex-col items-center gap-4">
            See the <span className="text-primary italic neon-text-glow">Spark in Action.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            High-impact activations powered by our elite roster of <span className="text-primary font-bold">Luminaries</span>.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bokeh-overlay opacity-30 pointer-events-none"></div>
        <div className="px-6 sm:px-8 md:px-16 max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-center mb-12 sm:mb-24 opacity-80 uppercase tracking-widest text-on-surface-variant">Featured Case Studies</h2>
          <div className="space-y-16 sm:space-y-48">
            
            {/* Case Study 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-16 md:gap-32 group">
              <div className="md:w-3/5 relative">
                <div className="bg-primary/20 absolute -inset-6 rounded-lg transform -rotate-3 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Case Study 1"
                  className="relative z-10 w-full aspect-video object-cover rounded-lg shadow-2xl border border-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7f9Z8zstYE4mr-MVEbvUyKOq47PuzFn3pIEf9RPoRL11vIjlcKN7bE9-6kTtVYr2XL76Naff9FnB_Fz6eV8QzCXqc6kCKDVexPTCG0DO03AdYiXuKnCUcUTfnWHeTvM2d-ZWmfJaUXDEPAT9Tt-0pVsMmeOAz-Ivw19kKJaeM4BNLMZbVOwJoQ7Wk3yZtbwSLBA2xe-NC62sB8yC1bRs1cQqO4mihkCo_b5zMPG_xRUPUw6cHFXMM-p6AulenC6gEpSR_VAXtnxQ"
                />
              </div>
              <div className="md:w-2/5">
                <span className="text-primary font-black text-8xl opacity-10 block mb-2 leading-none">01</span>
                <h3 className="text-3xl sm:text-4xl font-headline font-normal mb-4 sm:mb-8 text-on-surface">Major Global Tech Brand</h3>
                <div className="space-y-6 text-lg text-on-surface-variant">
                  <div><strong className="text-on-surface">The Challenge:</strong> Deploy and manage 50 highly technical promoters across 3 days at a massive convention.</div>
                  <div><strong className="text-on-surface">The Solution:</strong> End-to-end management, comprehensive pre-event tech briefing, and 2 dedicated on-site supervisors.</div>
                  <div><strong className="text-primary">The Impact:</strong> 100% attendance rate, 4,500+ qualified leads generated, zero logistical friction.</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-16 md:gap-32 group">
              <div className="md:w-3/5 relative">
                <div className="bg-accent-amber/20 absolute -inset-6 rounded-lg transform rotate-3 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Case Study 2"
                  className="relative z-10 w-full aspect-video object-cover rounded-lg shadow-2xl border border-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2SOtLdxFredw6LyC0e7DHwJvFwNQGT2IE1NAMhP3qWRuMayvdElhXj9SWjJbqgP0wW8WQDZvfoQEqgXsRrc7hutiCIhR-4vN2VE-8cUpwEV-KL8l243Vp4aWrCEfZ4RB0BbyhDZcitxnM2ehivDjGWN6jyhnClIeyaLQJ2yP-Hhpm_6hGwAahtQP9jFJTLrdkgrFp0TnbE_JpozXk9Z_BBJXEu1f9HsOsUrWKVgvQ6rRNUy7ovEfmFUWuJG-kTASrFvi1I2WrW0"
                />
              </div>
              <div className="md:w-2/5">
                <span className="text-primary font-black text-8xl opacity-10 block mb-2 leading-none">02</span>
                <h3 className="text-3xl sm:text-4xl font-headline font-normal mb-4 sm:mb-8 text-on-surface">Luxury Cosmetics Label</h3>
                <div className="space-y-6 text-lg text-on-surface-variant">
                  <div><strong className="text-on-surface">The Challenge:</strong> Create high-volume brand awareness for a flagship product launch.</div>
                  <div><strong className="text-on-surface">The Solution:</strong> Deployment of 15 premium roving talents equipped with bespoke brand knowledge.</div>
                  <div><strong className="text-primary">The Impact:</strong> 1,200+ samples distributed, massive social media uplift, and seamless crowd flow.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Expanded Portfolio Grid */}
      <section id="portfolio" className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="text-center mb-16 relative z-10">
            <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase mb-4 block">Visual Archive</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface mb-6">Our Full Portfolio</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">A visual journey through hundreds of flawless activations, bespoke campaigns, and dedicated staffing achievements across Singapore.</p>
         </div>

         <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-6 gap-y-6 space-y-6 relative z-10">
            {PORTFOLIO_CAMPAIGNS.map((campaign, i) => (
               <Link href={`/our-work/${campaign.slug}`} passHref key={campaign.slug} className="block break-inside-avoid w-full">
                 <div className={`bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer w-full relative ${i % 4 === 0 ? 'aspect-[3/4]' : (i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square')}`}>
                    <div className="w-full h-full bg-surface-container relative">
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-color-dodge"></div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" />
                      <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                         <p className="font-headline font-normal text-2xl text-on-surface drop-shadow-md">{campaign.title}</p>
                         <p className="text-white/80 text-sm italic font-medium">{campaign.subtitle}</p>
                      </div>
                    </div>
                 </div>
               </Link>
            ))}
         </div>
         <div className="mt-16 text-center">
            <button className="bg-charcoal-dark border border-white/20 text-on-surface px-10 py-5 rounded-full font-headline font-normal hover:bg-white/10 transition-all inline-flex items-center gap-2">
               Load More Campaigns <span className="material-symbols-outlined">expand_more</span>
            </button>
         </div>
      </section>

      {/* The Luminaries Spotlight */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-charcoal-dark/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-headline font-normal text-on-surface mb-8 sm:mb-16">Meet Our Top-Tier Talent</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 -mx-4 scroll-smooth custom-scrollbar">
            
            {/* Spotlight Card 1 */}
            <div className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[300px] snap-center shrink-0 bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 group shadow-xl">
              <div className="h-64 bg-surface-container relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAkDfZjSIzWuipfD0wziDUkpjtBK3uz5EFgCdvUSFISkiWKsRdsv5x6CDrSz-4i2kfWKMowoswUjKPifDvFyE3433mp_zmkVCqylnZVOOXr8bcYwVvhM8bN0u3Mn-eEBSie5W0RMzECovUSz_evE4vU12L_dckjBqntVoMmBs3okPZr7YhVMZjGTwO7ukk9BVz-IqzsOkY22nELZaSOEL6ZUB8C0Y2IBOPQDWAz9qICesKBCsT9LwksY7HnLoxLxakBt9j_0ECyf4" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Sarah" />
              </div>
              <div className="p-6 text-left relative z-10">
                <h3 className="text-2xl font-headline font-normal text-on-surface">Sarah</h3>
                <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Top Tier Ambassador</p>
                <p className="text-on-surface-variant text-sm italic">&quot;Events aren&apos;t about logistics; they&apos;re about the feeling people take home.&quot;</p>
              </div>
            </div>

            {/* Spotlight Card 2 */}
            <div className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[300px] snap-center shrink-0 bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent-amber/50 transition-all hover:-translate-y-2 group shadow-xl">
              <div className="h-64 bg-surface-container relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-accent-amber transition-colors">person</span>
              </div>
              <div className="p-6 text-left relative z-10">
                <h3 className="text-2xl font-headline font-normal text-on-surface">Marcus</h3>
                <p className="text-accent-amber text-sm font-bold tracking-widest uppercase mb-4">Lead Supervisor</p>
                <p className="text-on-surface-variant text-sm italic">&quot;I thrive on the kinetic energy of a perfectly managed high-volume crowd.&quot;</p>
              </div>
            </div>

            {/* Spotlight Card 3 */}
            <div className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[300px] snap-center shrink-0 bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 group shadow-xl">
               <div className="h-64 bg-surface-container relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-primary transition-colors">person</span>
              </div>
              <div className="p-6 text-left relative z-10">
                <h3 className="text-2xl font-headline font-normal text-on-surface">Chloe</h3>
                <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Roving Talent</p>
                <p className="text-on-surface-variant text-sm italic">&quot;Breaking the ice and making someone smile is the best part of the job.&quot;</p>
              </div>
            </div>

            {/* Spotlight Card 4 */}
            <div className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[300px] snap-center shrink-0 bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent-amber/50 transition-all hover:-translate-y-2 group shadow-xl">
               <div className="h-64 bg-surface-container relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-accent-amber transition-colors">person</span>
              </div>
              <div className="p-6 text-left relative z-10">
                <h3 className="text-2xl font-headline font-normal text-on-surface">David</h3>
                <p className="text-accent-amber text-sm font-bold tracking-widest uppercase mb-4">Brand Tech Expert</p>
                <p className="text-on-surface-variant text-sm italic">&quot;Connecting people with the tech of tomorrow is my absolute passion.&quot;</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
