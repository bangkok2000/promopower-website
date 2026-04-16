import Link from "next/link";
import Image from "next/image";

export default function OurWork() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-charcoal-dark border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mt-16">
          <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface tracking-tight mb-6 flex flex-col items-center gap-4">
            See the <span className="text-primary italic neon-text-glow">Spark in Action.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            High-impact activations powered by our elite roster of <span className="text-primary font-bold">Luminaries</span>.
          </p>
        </div>
      </section>

      {/* Our Client Roster */}
      <section className="py-24 bg-surface-container border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
            <span className="text-accent-amber font-headline font-bold tracking-widest text-sm uppercase mb-4 block">Trusted Partners</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-16">Our Elite Client Roster</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
               {[
                 "APB Singapore", "Bacardi", "Pernod Ricard", "Piper-Heidsieck", "Rémy Cointreau", 
                 "Somersby", "Strongbow Ciders", "VCT Wineries Asia", "Bvlgari", "Chanel", 
                 "Chopard", "Dior", "Elizabeth Arden", "Giorgio Armani", "Guerlain", 
                 "Jo Malone", "Kiehl's", "Kenzo", "La Prairie", "Lancôme Paris", 
                 "Maison Margiela", "Puig", "Shiseido", "Yves Saint Laurent", "Edrington"
               ].map((client, i) => (
                  <div key={i} className="h-20 bg-charcoal-dark border border-white/10 rounded-xl flex items-center justify-center font-headline font-bold text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all cursor-crosshair text-center px-4 leading-tight text-sm">
                     {client}
                  </div>
               ))}
            </div>
            <p className="mt-12 text-on-surface-variant text-sm italic opacity-50">* This is just a fraction of the incredible global brands we represent.</p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bokeh-overlay opacity-30 pointer-events-none"></div>
        <div className="px-8 md:px-16 max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-center mb-24 opacity-80 uppercase tracking-widest text-on-surface-variant">Featured Case Studies</h2>
          <div className="space-y-48">
            
            {/* Case Study 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 group">
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
                <h3 className="text-4xl font-headline font-extrabold mb-8 text-on-surface">Major Global Tech Brand</h3>
                <div className="space-y-6 text-lg text-on-surface-variant">
                  <div><strong className="text-on-surface">The Challenge:</strong> Deploy and manage 50 highly technical promoters across 3 days at a massive convention.</div>
                  <div><strong className="text-on-surface">The Solution:</strong> End-to-end management, comprehensive pre-event tech briefing, and 2 dedicated on-site supervisors.</div>
                  <div><strong className="text-primary">The Impact:</strong> 100% attendance rate, 4,500+ qualified leads generated, zero logistical friction.</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32 group">
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
                <h3 className="text-4xl font-headline font-extrabold mb-8 text-on-surface">Luxury Cosmetics Label</h3>
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
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="text-center mb-16 relative z-10">
            <span className="text-primary font-headline font-bold tracking-widest text-sm uppercase mb-4 block">Visual Archive</span>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-6">Our Full Portfolio</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">A visual journey through hundreds of flawless activations, bespoke campaigns, and dedicated staffing achievements across Singapore.</p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { title: "Tiger Beer", subtitle: "National Retail Activation" },
              { title: "Dior Beauty", subtitle: "Flagship Counter Launch" },
              { title: "Bacardi Rum", subtitle: "Premium Bar Deployment" },
              { title: "Chanel Beauty", subtitle: "Bespoke Mall Roadshow" },
              { title: "Heineken", subtitle: "Music Festival Promoters" },
              { title: "Maison Margiela", subtitle: "Fragrance Launch" },
              { title: "Grey Goose", subtitle: "VIP Event Staffing" },
              { title: "Bvlgari Fragrances", subtitle: "Pop-up Retail Experience" },
              { title: "Piper-Heidsieck", subtitle: "Luxury Champagne Showcase" },
              { title: "Guinness", subtitle: "St. Patrick's Day Campaign" },
              { title: "The Edrington Group", subtitle: "Spirits Tasting Deployment" },
              { title: "Kiehl's", subtitle: "Skincare Product Sampling" }
            ].map((campaign, i) => (
               <div key={i} className={`bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer ${i % 3 === 0 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                  <div className="w-full h-full bg-surface-container relative">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-color-dodge"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y`} alt={campaign.title} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                       <p className="font-headline font-black text-2xl text-on-surface drop-shadow-md">{campaign.title}</p>
                       <p className="text-white/80 text-sm italic font-medium">{campaign.subtitle}</p>
                    </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="mt-16 text-center">
            <button className="bg-charcoal-dark border border-white/20 text-on-surface px-10 py-5 rounded-full font-headline font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2">
               Load More Campaigns <span className="material-symbols-outlined">expand_more</span>
            </button>
         </div>
      </section>

      {/* The Luminaries Spotlight */}
      <section className="py-24 px-8 bg-charcoal-dark/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-headline font-black text-on-surface mb-16">Meet Our Top-Tier Talent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Spotlight Card 1 */}
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 group shadow-xl">
              <div className="h-64 bg-surface-container relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAkDfZjSIzWuipfD0wziDUkpjtBK3uz5EFgCdvUSFISkiWKsRdsv5x6CDrSz-4i2kfWKMowoswUjKPifDvFyE3433mp_zmkVCqylnZVOOXr8bcYwVvhM8bN0u3Mn-eEBSie5W0RMzECovUSz_evE4vU12L_dckjBqntVoMmBs3okPZr7YhVMZjGTwO7ukk9BVz-IqzsOkY22nELZaSOEL6ZUB8C0Y2IBOPQDWAz9qICesKBCsT9LwksY7HnLoxLxakBt9j_0ECyf4" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Sarah" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-headline font-black text-on-surface">Sarah</h3>
                <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Top Tier Ambassador</p>
                <p className="text-on-surface-variant text-sm italic">&quot;Events aren&apos;t about logistics; they&apos;re about the feeling people take home.&quot;</p>
              </div>
            </div>

            {/* Spotlight Card 2 */}
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent-amber/50 transition-all hover:-translate-y-2 group shadow-xl">
              <div className="h-64 bg-surface-container relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-accent-amber transition-colors">person</span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-headline font-black text-on-surface">Marcus</h3>
                <p className="text-accent-amber text-sm font-bold tracking-widest uppercase mb-4">Lead Supervisor</p>
                <p className="text-on-surface-variant text-sm italic">&quot;I thrive on the kinetic energy of a perfectly managed high-volume crowd.&quot;</p>
              </div>
            </div>

            {/* Spotlight Card 3 */}
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 group shadow-xl">
               <div className="h-64 bg-surface-container relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-primary transition-colors">person</span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-headline font-black text-on-surface">Chloe</h3>
                <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Roving Talent</p>
                <p className="text-on-surface-variant text-sm italic">&quot;Breaking the ice and making someone smile is the best part of the job.&quot;</p>
              </div>
            </div>

            {/* Spotlight Card 4 */}
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent-amber/50 transition-all hover:-translate-y-2 group shadow-xl">
               <div className="h-64 bg-surface-container relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-accent-amber transition-colors">person</span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-headline font-black text-on-surface">David</h3>
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
