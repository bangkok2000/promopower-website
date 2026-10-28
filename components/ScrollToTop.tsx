"use client";

import { syncScrollOffsetVars } from "@/lib/scroll-offset";
import { scrollToSectionId } from "@/lib/section-navigation";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/** Reset scroll position on route changes before paint (standard multi-page behaviour). */
export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    syncScrollOffsetVars();

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash && document.getElementById(hash)) {
      // Re-align once fonts and the section nav's scroll hint have settled its final height.
      const realign = () => {
        syncScrollOffsetVars();
        scrollToSectionId(hash, "auto");
      };
      realign();
      requestAnimationFrame(() => requestAnimationFrame(realign));
      void document.fonts?.ready.then(realign);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  /** Same-page `#section` links use the same landing offset as the section pills. */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || link.classList.contains("skip-link")) return;
      const id = decodeURIComponent(link.getAttribute("href")!.slice(1));
      if (!id || !document.getElementById(id)) return;

      event.preventDefault();
      history.pushState(null, "", `#${id}`);
      scrollToSectionId(id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
