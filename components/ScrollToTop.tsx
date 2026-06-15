"use client";

import { syncScrollOffsetVars } from "@/lib/scroll-offset";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/** Reset scroll position on route changes before paint (standard multi-page behaviour). */
export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    syncScrollOffsetVars({ includeSectionNav: pathname === "/" });

    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
