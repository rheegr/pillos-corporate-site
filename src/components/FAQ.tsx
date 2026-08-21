"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faq } from "@/data/content";
import Reveal from "./Reveal";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`shrink-0 transition-transform duration-200 text-[#f9441d] ${open ? "rotate-180" : ""}`}
    >
      <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#f8f6f3] text-[#0e2a47] py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-8 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(faq.overline)}</div>
              <h2 className="tx-h2 balance mt-4 max-w-[360px] text-[#0e2a47]">{t(faq.heading)}</h2>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8 max-w-[760px]">
            <div className="border-t border-[#0e2a47]/15">
              {faq.items.map((item, i) => {
                const open = openIndex === i;
                return (
                  <Reveal key={item.q.en} delay={Math.min(i * 40, 200)}>
                    <div className="border-b border-[#0e2a47]/15">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : i)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left"
                      >
                        <span className="text-[15px] sm:text-[16px] font-medium leading-[1.5] text-[#0e2a47]">
                          {t(item.q)}
                        </span>
                        <ChevronIcon open={open} />
                      </button>
                      {open && (
                        <p className="pb-6 pr-8 text-[14.5px] leading-[1.75] text-[#1a1a1a]/75">
                          {t(item.a)}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FAQPage structured data — always emits both EN and KO Q&A so
          AI answer engines (ChatGPT, Perplexity, Gemini) and Google's
          FAQ rich results can cite this page directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.items.flatMap((item) => [
              {
                "@type": "Question",
                name: item.q.en,
                acceptedAnswer: { "@type": "Answer", text: item.a.en },
              },
              {
                "@type": "Question",
                name: item.q.ko,
                acceptedAnswer: { "@type": "Answer", text: item.a.ko },
              },
            ]),
          }),
        }}
      />
    </section>
  );
}
