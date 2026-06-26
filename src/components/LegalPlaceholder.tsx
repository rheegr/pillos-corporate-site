"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Bi } from "@/data/content";
import Reveal from "./Reveal";

type Props = {
  overline: Bi;
  heading: Bi;
  body: Bi;
};

export default function LegalPlaceholder({ overline, heading, body }: Props) {
  const { t } = useLanguage();
  return (
    <section className="relative bg-[#f8f6f3] text-[#0e2a47] pt-[var(--header-h)]">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-10 lg:px-16">
        <div className="grid min-h-[60vh] grid-cols-12 gap-y-6 md:gap-10 py-24 lg:py-32">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(overline)}</div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9 max-w-[680px]">
            <Reveal delay={100}>
              <h1 className="tx-h1 balance text-[#0e2a47]">{t(heading)}</h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 h-[2px] w-20 bg-[#f9441d]" aria-hidden />
            </Reveal>
            <Reveal delay={300}>
              <p className="font-serif italic mt-8 text-[1.0625rem] leading-[1.7] text-[#1a1a1a]/70">
                {t(body)}
              </p>
            </Reveal>
            <Reveal delay={400}>
              <Link href="/" className="btn-ghost mt-12">
                <span aria-hidden className="btn-arrow">←</span> Back to home
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
