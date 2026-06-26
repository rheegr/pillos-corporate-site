"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { trackRecord } from "@/data/content";
import Reveal from "./Reveal";

export default function TrackRecord() {
  const { t } = useLanguage();

  return (
    <section
      id="track-record"
      className="relative bg-[#f8f6f3] text-[#0e2a47] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Timeline */}
        <div className="border-t border-[#0e2a47]/15">
          {trackRecord.entries.map((entry, i) => {
            const isLatest = i === 0;
            return (
              <Reveal key={entry.year + i} delay={Math.min(i * 40, 240)}>
                <div
                  className={`tr-row group grid grid-cols-12 items-baseline gap-4 md:gap-8 py-7 pr-2 ${
                    isLatest ? "bg-[#f9441d]/[0.03]" : ""
                  }`}
                >
                  {/* Year column with dot */}
                  <div className="col-span-3 md:col-span-2 flex items-baseline gap-3">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${
                        isLatest
                          ? "bg-[#f9441d] ring-4 ring-[#f9441d]/15"
                          : entry.milestone
                          ? "bg-[#f9441d]"
                          : "bg-transparent border border-[#0e2a47]/25"
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`font-serif tabular leading-none ${
                        isLatest
                          ? "italic text-[#f9441d] text-[clamp(1.5rem,2.1vw,2rem)]"
                          : "text-[#0e2a47] text-[clamp(1.75rem,2.4vw,2.25rem)]"
                      }`}
                    >
                      {entry.year}
                    </span>
                  </div>
                  {/* Description */}
                  <div className="col-span-9 md:col-span-10">
                    <p
                      className={`text-[15px] leading-[1.7] text-[#0e2a47] ${
                        isLatest ? "font-medium" : ""
                      }`}
                    >
                      {t(entry.desc)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
