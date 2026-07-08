"use client";

import { scrollToPageTop } from "@/lib/section-navigation";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => scrollToPageTop()}
      className="back-to-top-fab"
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        arrow_upward
      </span>
    </button>
  );
}
