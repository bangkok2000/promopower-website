import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE_URL } from "@/lib/navigation";

export default function DualAudiencePanel() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0 bg-charcoal-dark" aria-hidden="true">
        <Image
          src={HERO_IMAGE_URL}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 grayscale"
        />
        <div className="absolute inset-0 bg-charcoal-dark/60" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-[42vh]">
        <div className="flex-1 md:hover:flex-[1.15] transition-all duration-700 ease-out bg-black/50 md:bg-black/40 md:hover:bg-black/25 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-center items-center md:items-start text-center md:text-left py-14 px-8 md:p-16 lg:p-20 group/card">
          <div className="md:group-hover/card:translate-x-2 transition-transform duration-700 max-w-md">
            <span className="section-label">For Clients</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-normal text-white mb-4 drop-shadow-lg">
              Plan Your Campaign Workforce
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Discuss your objectives, timeline and staffing requirements with our team. We will recommend a practical workforce solution aligned with your campaign goals.
            </p>
            <Link href="/contact-us" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Speak With Our Team
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 md:hover:flex-[1.15] transition-all duration-700 ease-out bg-primary/30 md:hover:bg-primary/20 flex flex-col justify-center items-center md:items-end text-center md:text-right py-14 px-8 md:p-16 lg:p-20 group/card">
          <div className="md:group-hover/card:-translate-x-2 transition-transform duration-700 max-w-md">
            <span className="section-label">For Jobseekers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-normal text-white mb-4 drop-shadow-lg">
              Join Our Talent Pool
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Looking for flexible customer-facing opportunities? Submit your profile and our recruitment team will contact you when suitable assignments are available.
            </p>
            <Link href="/jobseekers" className="glow-button text-on-primary px-8 py-4 rounded-full font-headline font-normal inline-flex items-center gap-2">
              Submit Application
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
