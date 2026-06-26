"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { memberships } from "@/data/content";
import Reveal from "./Reveal";

export default function Memberships() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#f1ece3] text-[#0e2a47] py-24 lg:py-32 border-t border-[#0e2a47]/12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-6 md:gap-10 mb-12">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="eyebrow text-[#f9441d]">{t(memberships.overline)}</div>
          </Reveal>
          <div className="col-span-12 md:col-span-9 max-w-[680px]">
            <Reveal delay={100}>
              <h2 className="tx-h3 balance text-[#0e2a47]">{t(memberships.heading)}</h2>
            </Reveal>
          </div>
        </div>

        {/* 2-column grid breaks the 3-up rhythm of the page */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#0e2a47]/15">
          {memberships.items.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div
                className={`flex flex-col gap-3 py-10 px-2 md:px-10 h-full ${
                  i > 0 ? "md:border-l border-t md:border-t-0 border-[#0e2a47]/15" : ""
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-[clamp(1.625rem,2.4vw,2rem)] text-[#0e2a47] tracking-[-0.01em] leading-none">
                    {m.name}
                  </span>
                  <span className="eyebrow tabular text-[#1a1a1a]/40">
                    {String(i + 1).padStart(2, "0")} / {String(memberships.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-2 h-px w-10 bg-[#f9441d]/60" aria-hidden />
                <span className="mt-1 text-[13.5px] leading-[1.7] text-[#1a1a1a]/72 max-w-[420px]">
                  {t(m.context)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
