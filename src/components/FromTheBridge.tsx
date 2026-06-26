"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { fromTheBridge } from "@/data/content";
import Reveal from "./Reveal";

export default function FromTheBridge() {
  const { t } = useLanguage();

  return (
    <section
      id="from-the-bridge"
      className="relative bg-[#0e2a47] text-[#f8f6f3] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-12 lg:gap-16 md:items-center">
          {/* Left - message: overline, leading pull quote, greeting, signature */}
          <div className="col-span-12 md:col-span-7 max-w-[640px]">
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(fromTheBridge.overline)}</div>
            </Reveal>

            {/* Pull quote - leads the message */}
            <Reveal delay={80}>
              <blockquote className="relative mt-6">
                <p
                  className="font-serif italic text-[#f8f6f3] tracking-[-0.01em]"
                  style={{
                    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)",
                    lineHeight: "1.45",
                  }}
                >
                  &ldquo;{t(fromTheBridge.quote)}&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-[#f8f6f3]/80">
              {fromTheBridge.greeting.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p>{t(p)}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#f9441d]" aria-hidden />
                <span className="font-serif italic text-[14px] text-[#f8f6f3]/70">
                  {t(fromTheBridge.signature)}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right - editorial portrait */}
          <Reveal className="col-span-12 md:col-span-5" delay={150}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ceo-photo.jpg"
              alt={t(fromTheBridge.attribution)}
              loading="lazy"
              decoding="async"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              className="block w-full max-w-[340px] md:ml-auto aspect-[4/5] object-cover shadow-[0_26px_50px_-22px_rgba(0,0,0,0.5)] ring-1 ring-[#f8f6f3]/15"
              style={{ objectPosition: "center 22%" }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
