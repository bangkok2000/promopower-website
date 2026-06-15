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

        return (
          <article key={item.question} className="bg-surface border border-white/10 rounded-2xl overflow-hidden">
            <button
              type="button"
              className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <h3 className="text-xl font-headline font-normal text-on-surface">{item.question}</h3>
              <span className="material-symbols-outlined text-primary shrink-0">{isOpen ? "remove" : "add"}</span>
            </button>
            {isOpen ? (
              <div className="px-6 sm:px-8 pb-6 text-on-surface-variant leading-relaxed">{item.answer}</div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
