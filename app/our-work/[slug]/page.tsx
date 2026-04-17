import { notFound } from "next/navigation";
import { getCampaignBySlug } from "@/lib/data";
import Link from "next/link";

export default async function CampaignDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const campaign = getCampaignBySlug(params.slug);

  if (!campaign) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen text-on-surface pb-16">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-charcoal-dark border-b border-white/5">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal-dark/80 to-transparent"></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mt-32">
          <Link href="/our-work" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:text-white transition-colors mb-8">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Portfolio
          </Link>
          <span className="text-accent-amber font-headline font-normal tracking-widest text-sm uppercase mb-4 block">{campaign.subtitle}</span>
          <h1 className="text-5xl md:text-8xl font-headline font-normal text-on-surface tracking-tight mb-6 drop-shadow-lg">
            {campaign.title}
          </h1>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6 bg-surface p-8 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-700"></div>
            <h3 className="text-xl font-headline text-on-surface-variant uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">The Challenge</h3>
            <p className="text-lg leading-relaxed text-on-surface/90 relative z-10">{campaign.challenge}</p>
          </div>
          
          <div className="space-y-6 bg-surface p-8 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-amber/5 rounded-full blur-[50px] group-hover:bg-accent-amber/20 transition-all duration-700"></div>
            <h3 className="text-xl font-headline text-on-surface-variant uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">The Solution</h3>
            <p className="text-lg leading-relaxed text-on-surface/90 relative z-10">{campaign.solution}</p>
          </div>
          
          <div className="space-y-6 bg-charcoal-dark p-8 rounded-2xl border border-primary/20 shadow-2xl relative overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <h3 className="text-xl font-headline text-primary uppercase tracking-widest border-b border-primary/20 pb-4 relative z-10">The Impact</h3>
            <p className="text-xl leading-relaxed text-on-surface font-medium relative z-10">{campaign.impact}</p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mt-24 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[21/9] relative group">
           <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-color-dodge"></div>
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src={campaign.imageUrl} alt={`${campaign.title} Execution`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
           <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-white text-sm font-medium tracking-wide">Live Activation Capture</span>
           </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-normal mb-10 text-on-surface drop-shadow-md">Translate this success to your brand.</h2>
        <Link href="/contact-us">
          <button className="bg-primary hover:bg-accent-amber text-charcoal-dark font-bold px-10 py-5 rounded-full font-headline hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center gap-3">
             Start Your Activation <span className="material-symbols-outlined">bolt</span>
          </button>
        </Link>
      </section>
    </div>
  );
}
