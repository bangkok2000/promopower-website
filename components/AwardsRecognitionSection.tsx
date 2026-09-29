import AwardsCertificateGallery from "@/components/AwardsCertificateGallery";
import HeroAccolades from "@/components/HeroAccolades";
import { AWARD_CERTIFICATES } from "@/lib/awards";

export default function AwardsRecognitionSection() {
  return (
    <section id="section-recognition" className="page-section-anchor">
      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-4 font-label">
        Accreditations &amp; Recognition
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4 max-w-3xl">
        Credentials That Support The Work We Do
      </h2>
      <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
        PromoPower Pte Ltd is a MOM licensed employment agency (EA License No. 20C0109). The business has also been
        recognised under the Singapore SME 500 Award programme, organised by the Association of Trade and Commerce
        (ATC), including five consecutive years through 2025. Entrepreneur 100 recognition was awarded in 2021.
      </p>

      <p className="home-hero-accolades-label text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-slate-400 mb-3 font-label">
        Official Accreditations &amp; Recognition
      </p>
      <HeroAccolades className="mb-10 max-w-3xl" />

      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-slate-400 mb-4 font-label">
        Award Certificates
      </p>
      <AwardsCertificateGallery certificates={AWARD_CERTIFICATES} />
    </section>
  );
}
