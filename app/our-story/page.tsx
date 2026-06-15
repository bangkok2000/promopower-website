import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | PromoPower",
  description:
    "Learn how PromoPower has supported organisations across Singapore since 2002 through professional staffing solutions, structured processes and reliable operational support.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "Our Story | PromoPower",
    description:
      "Built on experience and strengthened by long-term relationships, PromoPower supports customer-facing campaigns through professional workforce solutions.",
    url: "https://promopower.com.sg/our-story",
    siteName: "PromoPower",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | PromoPower",
    description:
      "Explore PromoPower's experience, philosophy and commitment to professional staffing solutions since 2002.",
  },
};

export default function OurStory() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 sm:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="PromoPower team behind the scenes"
            className="w-full h-full object-cover opacity-50 grayscale blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2SOtLdxFredw6LyC0e7DHwJvFwNQGT2IE1NAMhP3qWRuMayvdElhXj9SWjJbqgP0wW8WQDZvfoQEqgXsRrc7hutiCIhR-4vN2VE-8cUpwEV-KL8l243Vp4aWrCEfZ4RB0BbyhDZcitxnM2ehivDjGWN6jyhnClIeyaLQJ2yP-Hhpm_6hGwAahtQP9jFJTLrdkgrFp0TnbE_JpozXk9Z_BBJXEu1f9HsOsUrWKVgvQ6rRNUy7ovEfmFUWuJG-kTASrFvi1I2WrW0"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl pt-16">
          <span className="text-primary font-headline font-normal tracking-widest text-sm uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-normal text-on-surface tracking-tight mb-6">
            We Build <span className="text-primary italic">Connections</span> That Count.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto">
            Founded on a vision of seamless planning and flawless execution.
          </p>
        </div>
      </section>

      {/* The Narrative Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 bg-surface-light border-y border-black/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-12 sm:mb-20 p-6 sm:p-10 bg-white border border-black/5 rounded-2xl relative shadow-xl">
             <h3 className="text-xl md:text-2xl font-body italic text-on-surface-light leading-loose mb-6 relative z-10">
               &quot;No company has a permanent consumer franchise. No one has the only game in town. The never-ending cycle of destruction and change inherent in a capitalist economy always provides new opportunities for those with determination, goals and concentration.&quot;
             </h3>
             <p className="text-primary font-headline font-normal uppercase tracking-[0.2em] relative z-10">— Harvey Mackay</p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-normal text-on-surface-light mb-8 sm:mb-12 relative z-10">
            The PromoPower Difference
          </h2>
          <p className="text-xl leading-relaxed text-on-surface-light-variant text-left md:text-center relative z-10 space-y-6">
            <span className="block mb-6">
              What started as a vision between two great minds has evolved into Singapore&apos;s premier destination for promotional execution. We know that behind every great product is a need for genuine human connection. 
            </span>
            <span className="block">
              Our mission is simple: take the logistical friction out of your campaigns and inject them with professionalism, dedication, and vibrant energy. We don&apos;t just fill quotas; we provide the faces that make your brand unforgettable.
            </span>
          </p>
        </div>
      </section>

      {/* Compliance & Trust Badge */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 bg-charcoal-dark/50 border-t border-white/5 bokeh-overlay">
        <div className="max-w-4xl mx-auto bg-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center transform hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-10 border border-primary/30 shadow-[0_0_30px_rgba(255,140,0,0.3)]">
            <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-normal text-on-surface mb-6">
            100% MOM Compliant &amp; Licensed
          </h2>
          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-10">
            As a fully licensed employment agency (EA NO: 20C0109), we handle all backend talent management, payroll, and compliance, offering you absolute peace of mind. Let us handle the red tape while you enjoy the spotlight.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 pt-10 border-t border-white/10">
             <div className="flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                <div className="text-left">
                   <p className="font-bold text-on-surface text-sm uppercase tracking-widest leading-tight">SME500 Singapore</p>
                   <p className="text-on-surface-variant text-sm mt-1">Award Winner — 2022</p>
                </div>
             </div>
             <div className="flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-accent-amber text-4xl">emoji_events</span>
                <div className="text-left">
                   <p className="font-bold text-on-surface text-sm uppercase tracking-widest leading-tight">Entrepreneur 100</p>
                   <p className="text-on-surface-variant text-sm mt-1">Award Winner — 2021</p>
                </div>
             </div>
          </div>
          <Link href="/services" className="bg-white/5 border border-white/10 text-on-surface px-8 py-4 rounded-full font-headline font-normal hover:bg-white/10 transition-all inline-flex items-center gap-2">
              View Our Services <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
