import Link from "next/link";
import Image from "next/image";

const eliteClients = [
  "Pernod Ricard", "Japan Tobacco International", "Bacardi", "Chabot Armagnac", "Distell", 
  "Remy Cointreau", "The Edrington Group", "Asia Pacific Breweries", "Carlsberg", "KT&G", 
  "AF Trade Limited", "VCT Group of Wineries Asia", "DFS", "Galleria", "Toscow", 
  "Piper Heidsieck", "Guerlain", "Givenchy", "PUIG", "Sisley", "Dior", "COTY", 
  "SHISEIDO", "Carver Korea", "Clé de Peau Beauté", "Kenzo", "Lancôme", "L'Oréal Luxe", 
  "NARS", "La Prairie", "EuroItalia", "Make Up For Ever", "Biotherm", "Giorgio Armani", 
  "Fresh", "Amorepacific"
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[65vh] lg:min-h-[70vh] py-20 flex items-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
            src="https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-dancing-at-a-music-festival-4286-large.mp4"
          />
          <div className="absolute inset-0 bg-charcoal-dark/70"></div>
          <div className="absolute inset-0 midnight-gradient mix-blend-color-dodge"></div>
        </div>
        <div className="relative z-10 max-w-5xl pt-10">
          <span className="inline-block py-2 px-4 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 border border-primary/30 backdrop-blur-md uppercase">
            Singapore&apos;s Premier Staffing
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-normal text-on-surface leading-[1.05] tracking-tight mb-8">
            POWERING FLAWLESS <span className="text-primary italic">BRAND</span> ACTIVATIONS
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl leading-relaxed">
            We combine operational precision with kinetic human energy to execute flawless on-site activations, from luxury retail launches to massive tech expos.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/contact-us">
              <button className="glow-button text-on-primary px-12 py-5 rounded-full font-headline font-normal text-lg hover:scale-105 active:scale-95 transition-all">
                Hire Event Talent
              </button>
            </Link>
            <Link href="/jobseekers">
              <button className="bg-white/10 backdrop-blur-md text-on-surface border border-white/20 px-12 py-5 rounded-full font-headline font-normal text-lg hover:bg-white/20 transition-all">
                Join Our Roster
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Accreditations */}
      <section className="bg-charcoal-dark border-y border-white/5 py-8 md:py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
          
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-lg">
               <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
             </div>
             <div className="text-left text-on-surface-variant">
                <span className="font-bold tracking-widest text-sm uppercase block text-primary">SME500 Singapore</span>
                <span className="text-sm font-medium">Award Winner - 2022</span>
             </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-lg">
               <span className="material-symbols-outlined text-accent-amber text-3xl">emoji_events</span>
             </div>
             <div className="text-left text-on-surface-variant">
                <span className="font-bold tracking-widest text-sm uppercase block text-accent-amber">Entrepreneur 100</span>
                <span className="text-sm font-medium">Award Winner - 2021</span>
             </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10"></div>

          <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-lg">
               <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
             </div>
             <div className="text-left text-on-surface-variant">
                <span className="font-bold tracking-widest text-sm uppercase block text-white">MOM Compliant</span>
                <span className="text-sm font-medium">Licensed Agency (20C0109)</span>
             </div>
          </div>

        </div>
      </section>

      {/* Social Proof (Ticker Tape) */}
      <section className="bg-on-surface pt-6 pb-6 md:pb-8 relative overflow-hidden flex flex-col justify-center border-y border-charcoal-dark/5">
        <p className="text-center font-label font-bold text-charcoal-dark/70 uppercase tracking-[0.2em] text-xs md:text-sm mb-4 px-8">
          Trusted By Leading Brands To Deliver Seamless Experiences
        </p>
        
        {/* Ticker Tape Ribbon */}
        <div className="w-full flex overflow-hidden border-y border-charcoal-dark py-3 md:py-4 bg-charcoal-dark shadow-inner">
          <div className="flex animate-marquee w-max items-center transition-all duration-500 hover:[animation-play-state:paused] will-change-transform">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {eliteClients.map((client, index) => (
                  <div key={index} className="flex items-center">
                    <span className="whitespace-nowrap px-6 md:px-8 font-headline font-normal uppercase text-base md:text-xl text-primary shrink-0 hover:text-white transition-colors cursor-default drop-shadow-sm">
                      {client}
                    </span>
                    <span className="text-white/30 text-sm md:text-base shrink-0">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto bokeh-overlay">
        <div className="mb-24 text-center">
          <span className="text-primary font-headline font-normal tracking-widest uppercase text-sm">
            End-to-End Campaign Execution
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-normal text-on-surface mt-4">
            Flawless Execution. Radiant Talent.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface rounded-lg p-10 border border-white/5 hover:border-primary/30 transition-all group group relative">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">star</span>
            </div>
            <h3 className="text-2xl font-headline font-normal mb-4 text-on-surface">Dynamic Promoters</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Vetted, high-energy ambassadors built to represent your brand with absolute professionalism and measurable impact.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-10 border border-white/5 hover:border-primary/30 transition-all group group relative">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">directions_walk</span>
            </div>
            <h3 className="text-2xl font-headline font-normal mb-4 text-on-surface">Roving Talent</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Specialized engagement staff and performers ready to captivate moving crowds in transit hubs, expos, and festivals.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-10 border border-white/5 hover:border-primary/30 transition-all group group relative">
             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
            </div>
            <h3 className="text-2xl font-headline font-normal mb-4 text-on-surface">On-Site Management</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Complete back-end and logistical oversight, including full MOM compliance, so you can focus on the big picture.
            </p>
          </div>
        </div>
        <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group">
              Explore Our Services <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
        </div>
      </section>

      {/* Dual-Conversion Footer Section (Vertical Flex Accordion) */}
      <section className="relative overflow-hidden group/background bg-black border-t border-white/10">
        {/* Unified Background Image */}
        <div className="absolute inset-0 z-0 bg-charcoal-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Bvlgari Brand Activation"
            className="w-full h-full object-cover object-bottom scale-105 group-hover/background:scale-100 transition-transform duration-[2000ms] opacity-90"
            src="/bvlgari-bg.png"
          />
        </div>

        {/* Flex Accordion Container */}
        <div className="relative z-10 w-full flex flex-col md:flex-row min-h-[40vh]">

          {/* Left Side: Clients (Dark Tint) */}
          <div className="flex-1 md:hover:flex-[1.4] transition-all duration-700 ease-out bg-black/40 hover:bg-transparent border-r border-white/20 flex flex-col justify-center items-center md:items-start text-center md:text-left py-16 px-10 md:p-24 relative overflow-hidden group/card z-20">
            {/* Smooth hardware-accelerated blur fade */}
            <div className="absolute inset-0 backdrop-blur-md opacity-100 md:group-hover/card:opacity-0 transition-opacity duration-700 pointer-events-none z-0"></div>
            {/* Subtle gradient block behind text for legibility when hover removes tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
            <div className="duration-700 transition-all md:group-hover/card:translate-x-4 relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-normal text-white mb-6 drop-shadow-xl">Clients</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-sm drop-shadow-lg font-medium">Ready to make an impact? Let&apos;s map out your next activation.</p>
              <Link href="/contact-us">
                <button className="bg-white/10 text-white border border-white/40 px-8 py-4 rounded-full font-headline font-medium hover:bg-white/30 hover:scale-105 transition-all flex items-center gap-3 backdrop-blur-md text-sm md:text-base shadow-2xl">
                  Contact Us <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Talent (Orange Tint) */}
          <div className="flex-1 md:hover:flex-[1.4] transition-all duration-700 ease-out bg-primary/40 hover:bg-primary/20 flex flex-col justify-center items-center md:items-end text-center md:text-right py-16 px-10 md:p-24 relative overflow-hidden group/card z-10 border-t md:border-t-0 md:border-l border-white/10">
            {/* Smooth hardware-accelerated blur fade */}
            <div className="absolute inset-0 backdrop-blur-md opacity-100 md:group-hover/card:opacity-0 transition-opacity duration-700 pointer-events-none z-0"></div>
            {/* Subtle gradient block behind text for legibility */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
            <div className="duration-700 transition-all md:group-hover/card:-translate-x-4 flex flex-col items-center md:items-end relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-normal text-white mb-6 drop-shadow-xl">Talent</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-sm tracking-wide drop-shadow-lg font-medium">Got the energy? Step into the spotlight with top global brands.</p>
              <Link href="/jobseekers">
                <button className="bg-primary hover:bg-accent-amber text-charcoal-dark font-bold px-8 py-4 rounded-full font-headline hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3 text-sm md:text-base">
                  Apply Now <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
