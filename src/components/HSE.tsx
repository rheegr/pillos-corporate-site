"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { hse } from "@/data/content";
import Reveal from "./Reveal";

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-[#0e2a47]/10 text-[14.5px] leading-[1.6] text-[#1a1a1a]/80">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden
        className="mt-[3px] shrink-0 text-[#f9441d]"
      >
        <path d="M3.5 9.5L7 13L14.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export default function HSE() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#f8f6f3] text-[#0e2a47] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Commitment + policy on the left, portrait on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow text-[#f9441d]">Our Commitment</div>
            <p className="mt-6 font-serif font-bold text-[clamp(1.4rem,2.4vw,1.95rem)] leading-[1.4] tracking-[-0.01em] text-[#0e2a47]">
              {t(hse.lead)}
            </p>
            <p className="mt-7 text-[15px] leading-[1.85] text-[#1a1a1a]/80">
              {t(hse.policy)}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <figure className="relative max-w-[400px] mx-auto lg:mx-0 lg:ml-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hse.image}
                alt={t(hse.imageAlt)}
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.05] shadow-[0_24px_56px_-28px_rgba(14,42,71,0.4)]"
              />
              <span className="absolute -bottom-3 -left-3 h-12 w-12 border-l-2 border-b-2 border-[#f9441d]" aria-hidden />
            </figure>
          </Reveal>
        </div>

        {/* Two objective lists */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
          <Reveal>
            <h2 className="tx-h3 text-[#0e2a47] max-w-[420px]">{t(hse.striveHeading)}</h2>
            <ul className="mt-6 border-t border-[#0e2a47]/10">
              {hse.strive.map((s) => (
                <CheckRow key={s.en}>{t(s)}</CheckRow>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="tx-h3 text-[#0e2a47] max-w-[420px]">{t(hse.manageHeading)}</h2>
            <ul className="mt-6 border-t border-[#0e2a47]/10">
              {hse.manage.map((m) => (
                <CheckRow key={m.en}>{t(m)}</CheckRow>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Closing - accountability */}
        <Reveal delay={100}>
          <div className="mt-16 border-l-2 border-[#f9441d] pl-6 lg:pl-8 max-w-[860px]">
            <p className="font-serif italic text-[clamp(1.125rem,1.8vw,1.4rem)] leading-[1.5] text-[#0e2a47]">
              {t(hse.closing)}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
