"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { cta } from "@/data/content";
import Reveal from "./Reveal";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#f1ece3]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
        <div className="relative border border-[#0e2a47]/15 bg-[#f8f6f3] p-10 lg:p-16 xl:p-20">
          {/* Inner hairline (bezel) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[6px] border border-[#0e2a47]/8"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow text-[#f9441d]">{t(cta.leftEyebrow)}</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="tx-h2 balance mt-6 text-[#0e2a47] max-w-[620px]">
                  {t(cta.leftHeading)}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-serif-kr mt-5 text-[1.0625rem] leading-[1.7] text-[#1a1a1a]/75 max-w-[520px]">
                  {t(cta.leftSub)}
                </p>
              </Reveal>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center lg:border-l lg:border-[#0e2a47]/12 lg:pl-12">
              <Reveal>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#1a1a1a]/60 font-medium">
                  {t(cta.rightEyebrow)}
                </div>
              </Reveal>
              <Reveal delay={80}>
                <a
                  href={`mailto:${cta.email}`}
                  className="mt-5 inline-flex items-baseline gap-3 border-b border-[#0e2a47]/40 pb-2 font-serif text-[1.375rem] lg:text-[1.625rem] text-[#0e2a47] tracking-[-0.01em] transition-colors duration-[var(--duration-base)] [transition-timing-function:var(--ease-spring)] hover:text-[#f9441d] hover:border-[#f9441d]"
                >
                  {cta.email}
                </a>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-4 text-[13px] text-[#1a1a1a]/65 tracking-wide tabular">
                  {cta.phone}
                </div>
              </Reveal>
              <Reveal delay={240}>
                <a href={`mailto:${cta.email}`} className="btn-primary mt-8" style={{ background: "#f9441d" }}>
                  {t(cta.rightHeading)}
                  <span aria-hidden className="btn-icon">→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
