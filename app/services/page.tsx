import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | PromoPower",
  description: "Explore PromoPower's end-to-end event staffing services: premium brand ambassadors, roving talents, and full campaign management in Singapore.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 text-center max-w-5xl mx-auto mt-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase mb-6 block drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]">
          Our Expertise
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-normal text-on-surface tracking-tight mb-8 leading-tight">
          Precision Management. <br />
          <span className="text-primary italic">Radiant Execution.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          From sourcing the perfect brand ambassador to managing the crowds, we handle the heavy lifting.
        </p>
      </section>

      {/* Services Z-Pattern */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto space-y-16 sm:space-y-32">
        {/* Module 1: Premium Brand Ambassadors */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-16 group">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform -rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Premium Brand Ambassadors"
              className="relative z-10 w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCngfDSiPUSTPlVZOWwrFiPBp6R3YgjYd8OA0plw1NMFkRvlY_K50b2c5KSwGBD54TQ-pAl0z9WQ1JXbbohFk1HTQy2CaZ3Q2aOeg6OCwBrWR_i_swTYK7in5W6ivD8lIfY7hQ-bBe2_MgU4DhMltFjmtlkEqKYupDM1qfnQpxE5MlZn7d-pVogaC4pKdZpTVKTdR1aBPfQ8exfqJdev_ANmpP6CnVMpWfo-IjY37rvX9rQ8IQ37LaLTHpH4iDrnYwuklFs4cps96Y"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4 mb-2">
               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                 <span className="material-symbols-outlined text-primary">star</span>
               </div>
               <span className="font-headline font-normal text-on-surface-variant tracking-widest uppercase text-sm">Module 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface">Premium Brand Ambassadors</h2>
            <h3 className="text-2xl text-primary font-body font-medium italic">The Face of Your Brand.</h3>
            <ul className="space-y-4 mt-8 text-lg text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Rigorous 4-stage talent vetting process to ensure top-tier representation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Brand-specific training mapped out prior to every deployment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Focused on high-conversion lead generation and audience engagement.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Module 2: Roving Talents */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-16 group">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-accent-amber/10 rounded-2xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Roving Talents"
              className="relative z-10 w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7f9Z8zstYE4mr-MVEbvUyKOq47PuzFn3pIEf9RPoRL11vIjlcKN7bE9-6kTtVYr2XL76Naff9FnB_Fz6eV8QzCXqc6kCKDVexPTCG0DO03AdYiXuKnCUcUTfnWHeTvM2d-ZWmfJaUXDEPAT9Tt-0pVsMmeOAz-Ivw19kKJaeM4BNLMZbVOwJoQ7Wk3yZtbwSLBA2xe-NC62sB8yC1bRs1cQqO4mihkCo_b5zMPG_xRUPUw6cHFXMM-p6AulenC6gEpSR_VAXtnxQ"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4 mb-2">
               <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center border border-accent-amber/30">
                 <span className="material-symbols-outlined text-accent-amber">directions_walk</span>
               </div>
               <span className="font-headline font-normal text-on-surface-variant tracking-widest uppercase text-sm">Module 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface">Roving Talents</h2>
            <h3 className="text-2xl text-accent-amber font-body font-medium italic">Dynamic Crowd Engagement.</h3>
            <ul className="space-y-4 mt-8 text-lg text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-amber mt-1">check_circle</span>
                <span>Proactively take your message directly to the audience, breaking barriers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-amber mt-1">check_circle</span>
                <span>Create spontaneous, highly memorable brand interactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-amber mt-1">check_circle</span>
                <span>Ideal strategy for large-scale festivals, tech expos, and busy transit hubs.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Module 3: Campaign Management & Logistics */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-16 group">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform -rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Campaign Management & Logistics"
              className="relative z-10 w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2SOtLdxFredw6LyC0e7DHwJvFwNQGT2IE1NAMhP3qWRuMayvdElhXj9SWjJbqgP0wW8WQDZvfoQEqgXsRrc7hutiCIhR-4vN2VE-8cUpwEV-KL8l243Vp4aWrCEfZ4RB0BbyhDZcitxnM2ehivDjGWN6jyhnClIeyaLQJ2yP-Hhpm_6hGwAahtQP9jFJTLrdkgrFp0TnbE_JpozXk9Z_BBJXEu1f9HsOsUrWKVgvQ6rRNUy7ovEfmFUWuJG-kTASrFvi1I2WrW0"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4 mb-2">
               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                 <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
               </div>
               <span className="font-headline font-normal text-on-surface-variant tracking-widest uppercase text-sm">Module 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface">Campaign Management</h2>
            <h3 className="text-2xl text-primary font-body font-medium italic">Invisible Execution. Visible Results.</h3>
            <ul className="space-y-4 mt-8 text-lg text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>End-to-end roster management ensuring zero logistical friction for you.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Provide on-site supervisors for strict quality control and real-time reporting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Full MOM compliance, EA licensing, and payroll handled entirely by our team.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Principles */}
      <section className="py-16 sm:py-32 px-6 sm:px-8 md:px-16 bg-[var(--color-surface-light)] border-y border-black/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase mb-4 block">Our Values</span>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-[var(--color-on-surface-light)]">Our Success Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {[
              { title: "Innovation", icon: "lightbulb", text: "Providing innovative solutions to our clients' marketing challenges.", span: false },
              { title: "Integrity", icon: "health_and_safety", text: "Committed to ensuring the professional well-being of our clients.", span: false },
              { title: "Partnership", icon: "handshake", text: "Believing in the building of positive working relationships with all related groups.", span: false },
              { title: "Excellence", icon: "school", text: "Investing in continuous quality training programs to ensure the highest standard in our services.", span: true },
              { title: "Strategy", icon: "trending_up", text: "Enhancing clients' businesses through effective strategy development.", span: false }
            ].map((principle, i) => (
              <div key={i} className={`group relative bg-white border border-black/5 shadow-lg p-6 sm:p-10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${principle.span ? 'lg:col-span-2' : ''}`}>
                {/* Background Hover Bloom */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
                
                {/* Massive Watermark Icon */}
                <span className="material-symbols-outlined absolute -bottom-10 -right-6 text-[180px] text-white opacity-0 group-hover:opacity-20 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 z-0 pointer-events-none">
                  {principle.icon}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:text-white transition-colors duration-500 block">
                      {principle.icon}
                    </span>
                    <h3 className="text-3xl font-headline text-[var(--color-on-surface-light)] group-hover:text-white transition-colors duration-500 mb-4">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-lg text-[var(--color-on-surface-light-variant)] font-medium group-hover:text-white/90 transition-colors duration-500 leading-relaxed max-w-sm mt-8">
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Wrapper */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 text-center bg-surface-container border-t border-white/5 relative overflow-hidden mt-16 sm:mt-24">
        <div className="absolute inset-0 bokeh-overlay opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-headline font-normal text-on-surface mb-8">Ready for deployment?</h2>
          <Link href="/contact-us" className="glow-button px-8 sm:px-10 py-4 sm:py-5 rounded-full text-on-primary font-headline font-normal text-lg sm:text-xl hover:scale-105 transition-transform inline-flex items-center gap-3">
              Plan Your Campaign <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
