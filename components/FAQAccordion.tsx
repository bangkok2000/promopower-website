"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article key={item.question} className="content-card !p-0 overflow-hidden">
            <button
              id={buttonId}
              type="button"
              className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <h3 className="text-xl font-headline font-normal text-on-surface">{item.question}</h3>
              <span aria-hidden="true" className="material-symbols-outlined text-primary shrink-0">{isOpen ? "remove" : "add"}</span>
            </button>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-6 sm:px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-white/5">
                {item.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
