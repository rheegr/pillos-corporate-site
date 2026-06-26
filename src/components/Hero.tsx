"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { hero } from "@/data/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-[88dvh] text-[#f8f6f3] overflow-hidden pt-[var(--header-h)] flex flex-col bg-[#0e2a47]"
    >
      {/* Background photo - slow Ken Burns. Mobile gets a portrait crop whose
          sky/sea are extended so the vessel is never cropped or letterboxed. */}
      <picture>
        <source media="(max-width: 767px)" srcSet="/hero-jade-mobile.jpg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-jade.jpg"
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover z-0 hero-photo-img"
        />
      </picture>
      {/* Three-layer dark scrim */}
      <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none hero-overlay" />
      {/* Film grain on photo */}
      <div aria-hidden className="absolute inset-0 z-[2] pointer-events-none hero-grain" />

      {/* Slogan block */}
      <div className="relative z-10 flex-1 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 flex items-center">
        <div className="w-full max-w-[760px] py-10">
          {/* Hero title stays in English in both languages (KO rendering felt awkward) */}
          <h1 className="tx-display hero-title balance text-[#f8f6f3]">
            {hero.titleLine1.en}
            <span className="block text-[#f8f6f3]">{hero.titleLine2.en}</span>
          </h1>

          <div className="mt-6 h-[2px] w-24 bg-[#f9441d]" aria-hidden />

          {/* 640px keeps the Korean copy to 2 lines (matches the English); reserve
              that 2-line height so the title above never shifts between locales. */}
          <p className="mt-7 max-w-[640px] text-[16px] leading-[1.75] text-[#f8f6f3]/85 md:min-h-[3.5rem]">
            {t(hero.sub)}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-[#f9441d] px-7 py-3 text-[11px] font-semibold uppercase tracking-[var(--tracking-button)] text-[#f8f6f3] transition-[transform,background-color] duration-[var(--duration-base)] ease-[var(--ease-spring)] hover:bg-[#d2370f] active:scale-[0.98]"
            >
              {t(hero.primaryBtn)}
              <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f8f6f3]/15">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
