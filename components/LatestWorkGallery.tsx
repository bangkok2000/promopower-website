"use client";

import GalleryGrid from "@/components/GalleryGrid";
import { usePublishedPortfolio } from "@/lib/use-site-content";

export default function LatestWorkGallery() {
  const { latestWork } = usePublishedPortfolio();
  if (latestWork.length === 0) return null;

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

      <GalleryGrid photos={latestWork} label="Latest campaign photography" eagerCount={4} />
    </section>
  );
}
