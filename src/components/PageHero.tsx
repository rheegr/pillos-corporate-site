"use client";

import { useLanguage, type Lang } from "@/contexts/LanguageContext";
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

const LANGS: Lang[] = ["en", "ko"];

/**
 * One language's copy block. Both locales are rendered into the same grid cell
 * (the inactive one invisible) so the hero band is always as tall as the taller
 * copy and never resizes when the visitor toggles KO / EN. Each copy carries its
 * own `lang` attribute so the :lang(ko) font rules apply per copy, not per page.
 */
function HeroCopy({
  lang,
  active,
  dark,
  overline,
  heading,
  sub,
  headingNote,
  eyebrowClass,
}: {
  lang: Lang;
  active: boolean;
  dark: boolean;
  overline: Bi;
  heading: Bi;
  sub?: Bi;
  headingNote?: string;
  eyebrowClass: string;
}) {
  const pick = (v: Bi) => v[lang];
  const showNote = headingNote && lang === "ko";
  const headingColor = dark ? "text-[#f8f6f3]" : "text-[#0e2a47]";
  const noteColor = dark ? "text-[#f8f6f3]/55" : "text-[#1a1a1a]/50";
  const subColor = dark ? "text-[#f8f6f3]/85" : "text-[#1a1a1a]/70";
  const headingMt = dark ? "mt-6" : "mt-7";

  return (
    <div
      lang={lang}
      aria-hidden={active ? undefined : true}
      className={`col-start-1 row-start-1 flex flex-col justify-end ${active ? "" : "invisible pointer-events-none select-none"}`}
    >
      <div className={`${eyebrowClass} flex items-center gap-3 text-[#f9441d]`}>
        <span className="h-px w-8 bg-[#f9441d]" />
        <span>{pick(overline)}</span>
      </div>
      <h1 className={`tx-h1 balance ${headingMt} max-w-[920px] ${headingColor}`}>{pick(heading)}</h1>
      {showNote && (
        <p className={`mt-2 text-[0.9rem] font-light tracking-wide ${noteColor}`}>{headingNote}</p>
      )}
      <div className="mt-6 h-[2px] w-20 bg-[#f9441d]" aria-hidden />
      {sub && (
        <p className={`font-serif mt-7 max-w-[640px] italic text-[1.0625rem] leading-[1.7] ${subColor}`}>
          {pick(sub)}
        </p>
      )}
    </div>
  );
}

export default function PageHero({ overline, heading, sub, headingNote, latinOverline, image, imageAlt, imagePosition }: Props) {
  const { lang } = useLanguage();
  const eyebrowClass = `page-eyebrow${latinOverline ? " page-eyebrow-latin" : ""}`;

  const copies = (dark: boolean) =>
    LANGS.map((l) => (
      <HeroCopy
        key={l}
        lang={l}
        active={l === lang}
        dark={dark}
        overline={overline}
        heading={heading}
        sub={sub}
        headingNote={headingNote}
        eyebrowClass={eyebrowClass}
      />
    ));

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
          <div className="grid min-h-[44vh] lg:min-h-[48vh] pt-24 lg:pt-32 pb-14 lg:pb-20">
            {copies(true)}
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
        <div className="grid pt-20 lg:pt-28 pb-14 lg:pb-20">{copies(false)}</div>
      </div>
    </section>
  );
}
