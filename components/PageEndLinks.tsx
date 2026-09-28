"use client";

import { scrollToPageBottom, scrollToPageTop } from "@/lib/section-navigation";

export default function PageEndLinks() {
  return (
    <nav aria-label="Page navigation" className="page-end-links">
      <button type="button" onClick={() => scrollToPageTop()} className="page-end-link">
        Back to top
      </button>
      <span className="page-end-links-sep" aria-hidden="true">
        ·
      </span>
      <button type="button" onClick={() => scrollToPageBottom()} className="page-end-link">
        Jump to footer
      </button>
    </nav>
  );
}
