"use client";

import { scrollToPageBottom, scrollToPageTop } from "@/lib/section-navigation";
import { useEffect, useState } from "react";

const SCROLL_EDGE = 360;

export default function PageScrollControls() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollY, innerHeight } = window;
      const scrollHeight = document.documentElement.scrollHeight;
      setCanScrollUp(scrollY > SCROLL_EDGE);
      setCanScrollDown(scrollY + innerHeight < scrollHeight - SCROLL_EDGE);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!canScrollUp && !canScrollDown) return null;

  return (
    <div className="page-scroll-controls" aria-label="Scroll page">
      {canScrollUp ? (
        <button
          type="button"
          onClick={() => scrollToPageTop()}
          className="page-scroll-fab"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_upward
          </span>
        </button>
      ) : null}
      {canScrollDown ? (
        <button
          type="button"
          onClick={() => scrollToPageBottom()}
          className="page-scroll-fab"
          aria-label="Jump to footer"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_downward
          </span>
        </button>
      ) : null}
    </div>
  );
}
