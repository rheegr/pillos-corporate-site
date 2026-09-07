"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { faq } from "@/data/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#f1ece3] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="eyebrow text-[#f9441d]">{t(faq.overline)}</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="tx-h2 balance mt-5 text-[#0e2a47]">{t(faq.heading)}</h2>
        </Reveal>

        <div className="mt-14 border-t border-[#0e2a47]/15">
          {faq.items.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="grid grid-cols-1 gap-3 border-b border-[#0e2a47]/15 py-8 md:grid-cols-12 md:gap-8">
                <h3 className="font-serif text-[#0e2a47] leading-[1.3] text-[clamp(1.125rem,1.4vw,1.375rem)] tracking-[-0.01em] md:col-span-5">
                  {t(item.q)}
                </h3>
                <p className="text-[13.5px] leading-[1.75] text-[#1a1a1a]/75 md:col-span-7">
                  {t(item.a)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
