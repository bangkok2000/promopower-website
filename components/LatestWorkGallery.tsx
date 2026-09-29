import GalleryGrid from "@/components/GalleryGrid";
import { LATEST_WORK_PHOTOS } from "@/lib/latest-work";

export default function LatestWorkGallery() {
  return (
    <section
      id="latest-work"
      className="page-section-anchor space-y-5 border-b border-slate-200 pb-10 sm:pb-12"
      aria-labelledby="latest-work-heading"
    >
      <div>
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary mb-3 font-label">
          Latest Work
        </p>
        <h2
          id="latest-work-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3"
        >
          Recent Activations In Singapore
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Photography from recent retail, travel retail and customer engagement deployments. The archive below
          includes earlier campaign work organised by client.
        </p>
      </div>

      <GalleryGrid photos={[...LATEST_WORK_PHOTOS]} label="Latest campaign photography" />
    </section>
  );
}
