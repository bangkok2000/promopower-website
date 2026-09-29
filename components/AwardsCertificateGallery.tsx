"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { AwardCertificate } from "@/lib/awards";

type AwardsCertificateGalleryProps = {
  certificates: readonly AwardCertificate[];
};

export default function AwardsCertificateGallery({ certificates }: AwardsCertificateGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i !== null ? (i - 1 + certificates.length) % certificates.length : null)),
    [certificates.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % certificates.length : null)),
    [certificates.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <ul className="awards-certificate-grid">
        {certificates.map((cert, i) => (
          <li key={cert.src}>
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="awards-certificate-card group"
              aria-label={`View certificate: ${cert.caption}`}
            >
              <span className="awards-certificate-thumb">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-contain p-1"
                />
              </span>
              <span className="awards-certificate-caption">{cert.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {lightbox !== null ? (
        <div
          className="gallery-lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate lightbox"
        >
          <div
            className="relative max-w-[min(90vw,36rem)] max-h-[90vh] flex flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certificates[lightbox]!.src}
              alt={certificates[lightbox]!.alt}
              className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl bg-white"
            />
            <p className="text-center text-sm text-white/80 max-w-md px-4">{certificates[lightbox]!.caption}</p>
            <span className="gallery-lightbox-counter static translate-x-0 text-white/70 text-sm font-medium tabular-nums">
              {lightbox + 1} / {certificates.length}
            </span>
          </div>

          <button type="button" onClick={close} aria-label="Close lightbox" className="gallery-lightbox-btn gallery-lightbox-close">
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              close
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous certificate"
            className="gallery-lightbox-btn gallery-lightbox-prev"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              chevron_left
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next certificate"
            className="gallery-lightbox-btn gallery-lightbox-next"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              chevron_right
            </span>
          </button>
        </div>
      ) : null}
    </>
  );
}
