import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="high-energy event staff laughing at a vibrant event in Singapore with light trails and warm bokeh"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
          />
          <div className="absolute inset-0 bg-charcoal-dark/70"></div>
          <div className="absolute inset-0 midnight-gradient mix-blend-color-dodge"></div>
        </div>
        <div className="relative z-10 max-w-5xl pt-10">
          <span className="inline-block py-2 px-4 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 border border-primary/30 backdrop-blur-md uppercase">
            Singapore&apos;s Premier Staffing
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-on-surface leading-[1.05] tracking-tight mb-8">
            POWERING FLAWLESS <span className="text-primary italic">BRAND</span> ACTIVATIONS
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl leading-relaxed">
            We combine operational precision with kinetic human energy to execute flawless on-site activations, from luxury retail launches to massive tech expos.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/contact-us">
              <button className="glow-button text-on-primary px-12 py-5 rounded-full font-headline font-extrabold text-lg hover:scale-105 active:scale-95 transition-all">
                Hire Event Talent
              </button>
            </Link>
            <Link href="/jobseekers">
              <button className="bg-white/10 backdrop-blur-md text-on-surface border border-white/20 px-12 py-5 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-all">
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

      {/* Social Proof */}
      <section className="bg-on-surface py-16 px-8 border-y border-white/5 relative overflow-hidden">
        <p className="text-center font-headline font-bold text-charcoal-dark uppercase tracking-widest text-sm mb-10">
          Trusted By Leading Brands To Deliver Seamless Experiences
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
          <div className="h-8 md:h-12 w-32 bg-charcoal-dark/10 rounded-full flex items-center justify-center font-black italic text-xl text-charcoal-dark">
            TECHGIANT
          </div>
          <div className="h-8 md:h-12 w-32 bg-charcoal-dark/10 rounded-full flex items-center justify-center font-black italic text-xl text-charcoal-dark">
            LUXURY CO.
          </div>
          <div className="h-8 md:h-12 w-32 bg-charcoal-dark/10 rounded-full flex items-center justify-center font-black italic text-xl text-charcoal-dark">
            LIFESTYLE
          </div>
          <div className="h-8 md:h-12 w-32 bg-charcoal-dark/10 rounded-full flex items-center justify-center font-black italic text-xl text-charcoal-dark">
            F&amp;B GROUP
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto bokeh-overlay">
        <div className="mb-24 text-center">
          <span className="text-primary font-headline font-extrabold tracking-widest uppercase text-sm">
            End-to-End Campaign Execution
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-black text-on-surface mt-4">
            Flawless Execution. Radiant Talent.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface rounded-lg p-10 border border-white/5 hover:border-primary/30 transition-all group group relative">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">star</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Dynamic Promoters</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Vetted, high-energy ambassadors built to represent your brand with absolute professionalism and measurable impact.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-10 border border-white/5 hover:border-primary/30 transition-all group group relative">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">directions_walk</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Roving Talent</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Specialized engagement staff and performers ready to captivate moving crowds in transit hubs, expos, and festivals.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-10 border border-white/5 hover:border-primary/30 transition-all group group relative">
             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">On-Site Management</h3>
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

      {/* Dual-Conversion Footer Section (Before actual Footer) */}
      <section className="flex flex-col md:flex-row h-auto md:h-[60vh]">
        <div className="w-full md:w-1/2 bg-charcoal-dark p-16 md:p-32 flex flex-col justify-center items-start border-t border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-6 relative z-10">Clients</h2>
          <p className="text-xl text-on-surface-variant mb-12 relative z-10 max-w-sm">Ready to make an impact? Let&apos;s map out your next activation.</p>
          <Link href="/contact-us" className="relative z-10">
            <button className="bg-white/10 text-on-surface border border-white/20 px-10 py-4 rounded-full font-headline font-bold hover:bg-white/20 transition-all flex items-center gap-3">
              Contact Us <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 bg-primary p-16 md:p-32 flex flex-col justify-center items-start relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-on-primary mb-6 relative z-10">Talent</h2>
          <p className="text-xl text-on-primary/80 mb-12 relative z-10 max-w-sm">Got the energy? Step into the spotlight with top global brands.</p>
          <Link href="/jobseekers" className="relative z-10">
            <button className="bg-charcoal-dark text-primary px-10 py-4 rounded-full font-headline font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center gap-3">
              Apply Now <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
