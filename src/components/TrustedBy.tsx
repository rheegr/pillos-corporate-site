"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { trustedBy } from "@/data/content";
import Reveal from "./Reveal";

export default function TrustedBy() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full bg-[#0e2a47] text-[#f8f6f3]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Left label */}
          <Reveal className="md:col-span-3">
            <div className="flex flex-col gap-2">
              <span className="eyebrow !font-bold text-[#f9441d]">{t(trustedBy.label)}</span>
              <span className="text-[12px] text-[#f8f6f3]/55 max-w-[240px] leading-relaxed">
                {t(trustedBy.sub)}
              </span>
            </div>
          </Reveal>

          {/* Right: 3 × 2 grid of industry categories with hairlines */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#f8f6f3]/15">
              {trustedBy.categories.map((c, i) => {
                const name = lang === "ko" ? c.ko : c.en;
                return (
                  <Reveal key={c.en} delay={i * 60}>
                    <div className="partner-cell relative flex h-full flex-col items-start justify-end px-5 pt-14 pb-8 md:pb-10 border-b border-r border-[#f8f6f3]/15 overflow-hidden">
                      {/* Ghost index numeral - editorial rhythm */}
                      <span
                        aria-hidden
                        className="absolute top-3 left-4 font-serif tabular text-[2.25rem] leading-none text-[#f9441d]/70 select-none"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14px] md:text-[15px] tracking-wide text-[#f8f6f3]/85 leading-snug">
                        {name}
                      </span>
                      <span className="mt-2 font-serif italic text-[12px] text-[#f8f6f3]/45 leading-snug">
                        {t(c.detail)}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
