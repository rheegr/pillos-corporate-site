"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { visionMissionValues as vmv } from "@/data/content";
import Reveal from "./Reveal";

export default function VisionMissionValues() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-[#f1ece3] text-[#0e2a47] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="eyebrow text-[#f9441d]">{t(vmv.overline)}</div>
        </Reveal>

        {/* Mission */}
        <div className="mt-12 grid grid-cols-12 gap-y-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="text-[14px] uppercase tracking-[var(--tracking-eyebrow-loud)] text-[#1a1a1a]/60 font-bold pt-2">
              {t(vmv.mission.label)}
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={100}>
            <p className="font-serif text-[clamp(1.4rem,2.4vw,2.125rem)] leading-[1.4] tracking-[-0.01em] text-[#0e2a47] max-w-[900px]">
              {t(vmv.mission.body)}
            </p>
          </Reveal>
        </div>

        {/* Our Values */}
        <div className="mt-16 lg:mt-24 grid grid-cols-12 gap-y-8 md:gap-10">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="text-[14px] uppercase tracking-[var(--tracking-eyebrow-loud)] text-[#1a1a1a]/60 font-bold">
              {t(vmv.values.label)}
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-12">
              {vmv.values.items.map((it, i) => (
                <Reveal key={it.title.en} delay={i * 80}>
                  <div className="border-t border-[#0e2a47]/15 pt-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif tabular text-[1.125rem] leading-none text-[#f9441d]/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-[1.375rem] leading-[1.15] text-[#0e2a47]">
                        {t(it.title)}
                        {lang === "ko" && (
                          <span
                            className="ml-2 align-baseline text-[0.72em] font-normal text-[#1a1a1a]/55"
                            style={{ fontFamily: "var(--font-inter), sans-serif" }}
                          >
                            ({it.title.en})
                          </span>
                        )}
                      </h3>
                    </div>
                    <p className="mt-3 text-[14px] leading-[1.7] text-[#1a1a1a]/70 max-w-[420px]">
                      {t(it.body)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
