"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesTeaser } from "@/data/content";
import Reveal from "./Reveal";

export default function ServicesTeaser() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0e2a47] text-[#f8f6f3] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(servicesTeaser.overline)}</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="tx-h2 balance mt-5 text-[#f8f6f3]">{t(servicesTeaser.heading)}</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link href="/services" className="btn-ghost on-dark">
              <span className="whitespace-pre-line">{t(servicesTeaser.viewAll)}</span> <span aria-hidden className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>

        {/* 2px gaps reveal the navy section behind = crisp dividers (vertical on desktop, horizontal on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] border-y border-[#f8f6f3]/15">
          {servicesTeaser.cards.map((c, i) => (
            <Reveal key={c.number} delay={i * 100} className="h-full">
              <Link
                href={`/services#${c.anchor}`}
                className="service-card group flex h-full flex-col bg-[#f1ece3] hover:bg-[#e7ddcd] px-7 py-10 lg:px-9 lg:py-12 transition-colors duration-[var(--duration-base)] [transition-timing-function:var(--ease-spring)]"
              >
                <span className="font-serif tabular text-[#f9441d] text-[26px] leading-none">
                  {c.number}
                </span>
                <h3 className="mt-10 font-serif text-[#0e2a47] leading-[1.1] text-[clamp(1.5rem,2vw,1.875rem)] tracking-[-0.01em]">
                  {t(c.title)}
                </h3>
                <p className="mt-4 text-[13.5px] leading-[1.7] text-[#1a1a1a]/70">
                  {t(c.line)}
                </p>
                <div className="mt-auto pt-9 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[var(--tracking-eyebrow-loud)] text-[#f9441d]">
                  <span>Read</span>
                  <span aria-hidden className="transition-transform duration-[var(--duration-base)] [transition-timing-function:var(--ease-spring)] group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
