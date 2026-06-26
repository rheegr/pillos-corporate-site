"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { services } from "@/data/content";
import Reveal from "./Reveal";

export default function Services() {
  const { t } = useLanguage();
  const [bulk, gas, chem] = services.cards;

  return (
    <section
      id="services"
      className="relative bg-[#0e2a47] text-[#f8f6f3] py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(services.overline)}</div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-serif mt-5 text-[#f8f6f3] tracking-[-0.01em]"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                  lineHeight: "1.15",
                }}
              >
                {t(services.heading)}
                <br />
                <span className="italic text-[#f9441d]">{t(services.headingItalic)}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="max-w-[340px]">
            <p className="text-[14px] leading-[1.7] text-[#f8f6f3]/55">{t(services.sub)}</p>
          </Reveal>
        </div>

        {/* Bento grid: left tall + right top/bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-px bg-[#f8f6f3]/12 border border-[#f8f6f3]/12">
          {/* Bulk - spans 2 rows on md */}
          <Reveal className="md:row-span-2">
            <Card card={bulk} t={t} large />
          </Reveal>
          {/* Gas */}
          <Reveal delay={100}>
            <Card card={gas} t={t} />
          </Reveal>
          {/* Chemical (accent) */}
          <Reveal delay={200}>
            <Card card={chem} t={t} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type CardData = typeof services.cards[number];

function Card({
  card,
  t,
  large,
}: {
  card: CardData;
  t: <T extends { en: string; ko: string }>(v: T) => string;
  large?: boolean;
}) {
  const accent = card.accent;
  return (
    <div
      className={`service-card relative flex h-full min-h-[280px] flex-col justify-between p-8 lg:p-12 ${
        accent ? "bg-[#0e2a47]" : "bg-[#0e2a47]"
      }`}
      style={
        accent
          ? {
              boxShadow: "inset 0 0 0 1px rgba(232, 119, 34, 0.55)",
              backgroundImage:
                "linear-gradient(180deg, rgba(232,119,34,0.06), rgba(232,119,34,0.02))",
            }
          : { backgroundColor: large ? "#0e2a47" : "#0e2a47" }
      }
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <span className="font-serif text-[#f9441d] text-[22px] leading-none">{card.number}</span>
        <span
          className={`text-[10px] uppercase tracking-[0.24em] ${
            accent ? "text-[#f9441d]" : "text-[#f8f6f3]/45"
          }`}
        >
          {t(card.tag)}
        </span>
      </div>

      {/* Body */}
      <div className={large ? "mt-16" : "mt-10"}>
        <div className="flex items-baseline gap-3">
          <h3
            className="font-serif text-[#f8f6f3] leading-[1.1]"
            style={{ fontSize: large ? "clamp(2.25rem,3.2vw,3rem)" : "clamp(1.75rem,2.4vw,2.25rem)" }}
          >
            {t(card.title)}
          </h3>
          {accent && <span className="h-2 w-2 rounded-full bg-[#f9441d]" aria-hidden />}
        </div>
        <p
          className="mt-6 max-w-[420px] text-[14px] leading-[1.75] text-[#f8f6f3]/70"
          style={accent ? { color: "rgba(248,246,243,0.78)" } : undefined}
        >
          {t(card.body)}
        </p>
      </div>
    </div>
  );
}
