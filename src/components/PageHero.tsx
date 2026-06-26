"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Bi } from "@/data/content";

type Props = {
  overline: Bi;
  heading: Bi;
  sub?: Bi;
  /** Small reference note under the heading, shown only in Korean (e.g. English of an HSE title). */
  headingNote?: string;
  /** Overline is Latin-only (e.g. "HSE", "CONTACT") — keep English styling in both locales. */
  latinOverline?: boolean;
  /** Background photo for the hero band. When set, the hero renders dark with light text. */
  image?: string;
  imageAlt?: string;
  /** object-position for the background photo (default "center"). */
  imagePosition?: string;
};

export default function PageHero({ overline, heading, sub, headingNote, latinOverline, image, imageAlt, imagePosition }: Props) {
  const { t, lang } = useLanguage();
  const showNote = headingNote && lang === "ko";
  const eyebrowClass = `page-eyebrow${latinOverline ? " page-eyebrow-latin" : ""}`;

  // ---- Image variant: dark hero band with scrim + light text ----
  if (image) {
    return (
      <section className="relative overflow-hidden bg-[#0e2a47] text-[#f8f6f3] pt-[var(--header-h)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt ?? ""}
          aria-hidden={imageAlt ? undefined : true}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover z-0"
          style={{ objectPosition: imagePosition ?? "center" }}
        />
        <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none page-hero-scrim" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="flex min-h-[44vh] lg:min-h-[48vh] flex-col justify-end pt-24 lg:pt-32 pb-14 lg:pb-20">
            <div className={`${eyebrowClass} flex items-center gap-3 text-[#f9441d]`}>
              <span className="h-px w-8 bg-[#f9441d]" />
              <span>{t(overline)}</span>
            </div>
            <h1 className="tx-h1 balance mt-6 max-w-[920px] text-[#f8f6f3]">{t(heading)}</h1>
            {showNote && (
              <p className="mt-2 text-[0.9rem] font-light tracking-wide text-[#f8f6f3]/55">{headingNote}</p>
            )}
            <div className="mt-6 h-[2px] w-20 bg-[#f9441d]" aria-hidden />
            {sub && (
              <p className="font-serif mt-7 max-w-[640px] italic text-[1.0625rem] leading-[1.7] text-[#f8f6f3]/85">
                {t(sub)}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ---- Light fallback (no image) ----
  return (
    <section className="relative bg-[#f8f6f3] text-[#0e2a47] pt-[var(--header-h)] overflow-hidden">
      <div aria-hidden className="hero-ambient opacity-70" />
      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col pt-20 lg:pt-28 pb-14 lg:pb-20">
          <div className="page-eyebrow flex items-center gap-3 text-[#f9441d]">
            <span className="h-px w-8 bg-[#f9441d]" />
            <span>{t(overline)}</span>
          </div>
          <h1 className="tx-h1 balance mt-7 max-w-[920px] text-[#0e2a47]">{t(heading)}</h1>
          {showNote && (
            <p className="mt-2 text-[0.9rem] font-light tracking-wide text-[#1a1a1a]/50">{headingNote}</p>
          )}
          <div className="mt-6 h-[2px] w-20 bg-[#f9441d]" aria-hidden />
          {sub && (
            <p className="font-serif mt-7 max-w-[640px] italic text-[1.0625rem] leading-[1.7] text-[#1a1a1a]/70">
              {t(sub)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
