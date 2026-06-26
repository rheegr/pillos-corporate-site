"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { about } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative bg-[#f8f6f3] text-[#0e2a47] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-12 items-start">
          {/* Left: heading + body */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-start">
            <Reveal>
              <div className="h-[2px] w-12 bg-[#f9441d] mb-6" aria-hidden />
            </Reveal>
            <Reveal>
              <h2 className="tx-h2 balance text-[#0e2a47] max-w-[640px]">{t(about.heading)}</h2>
            </Reveal>

            <div className="mt-10 space-y-6 max-w-[600px] text-[15px] leading-[1.8] text-[#1a1a1a]/75">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={100 + i * 100}>
                  <p>{t(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: SINCE 2009 + editorial photo below */}
          <div className="col-span-12 md:col-span-5 flex flex-col md:items-end">
            <Reveal className="w-full md:text-right">
              <div className="text-[clamp(1rem,1.4vw,1.25rem)] uppercase tracking-[0.28em] text-[#0e2a47]/75 font-semibold">
                {t(about.bigCaption)}
              </div>
              <div
                className="font-serif tabular leading-[0.95] text-[#0e2a47] tracking-[-0.02em] mt-1"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
              >
                {about.bigNumber}
              </div>
            </Reveal>

            <Reveal className="w-full mt-8" delay={150}>
              <figure className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-deck.jpg"
                  alt={t(about.heading)}
                  loading="lazy"
                  decoding="async"
                  className="block w-full aspect-[4/3] object-cover grayscale-[12%] contrast-[1.04] shadow-[0_24px_56px_-28px_rgba(14, 42, 71,0.45)]"
                />
                <span className="absolute -bottom-3 -right-3 h-12 w-12 border-r-2 border-b-2 border-[#f9441d]" aria-hidden />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
