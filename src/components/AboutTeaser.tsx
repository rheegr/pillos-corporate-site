"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutTeaser } from "@/data/content";
import Reveal from "./Reveal";

export default function AboutTeaser() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#f8f6f3] text-[#0e2a47] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-6 md:gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="eyebrow text-[#f9441d]">{t(aboutTeaser.overline)}</div>
          </Reveal>
          <div className="col-span-12 md:col-span-5 max-w-[640px]">
            <Reveal delay={100}>
              <h2 className="tx-h2 balance text-[#0e2a47]">{t(aboutTeaser.heading)}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-[640px] text-[15px] leading-[1.75] text-[#1a1a1a]/75">
                {t(aboutTeaser.paragraph)}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link href="/about" className="btn-ghost mt-10">
                {t(aboutTeaser.readMore)} <span aria-hidden className="btn-arrow">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Side editorial photo */}
          <Reveal className="col-span-12 md:col-span-4" delay={250}>
            <figure className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ship-bulk-deck.jpg"
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.05] shadow-[0_24px_56px_-28px_rgba(14, 42, 71,0.4)]"
              />
              <span className="absolute -bottom-3 -left-3 h-12 w-12 border-l-2 border-b-2 border-[#f9441d]" aria-hidden />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
