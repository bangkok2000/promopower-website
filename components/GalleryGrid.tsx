"use client";

import { useState, useEffect, useCallback } from "react";

interface Props {
  photos: string[];
  label?: string;
}

export default function GalleryGrid({ photos, label = "campaign" }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length],
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
      {/* Uniform grid — all cells share the same 4:3 aspect ratio */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`View ${label} photo ${i + 1}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`PromoPower ${label} activation ${i + 1}`}
              loading={i < 12 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
            />
            {/* subtle expand hint on hover */}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 drop-shadow"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Image container — stop click propagation so clicking the image doesn't close */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[lightbox]}
              alt={`PromoPower ${label} activation ${lightbox + 1}`}
              className="max-w-[90vw] max-h-[90vh] rounded-lg object-contain shadow-2xl"
            />

            {/* Counter */}
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tabular-nums">
              {lightbox + 1} / {photos.length}
            </span>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/40 rounded-full p-2 hover:bg-black/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/40 rounded-full p-2 hover:bg-black/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
