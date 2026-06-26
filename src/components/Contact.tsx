"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { contact } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { t, lang } = useLanguage();

  // Map UI follows the site language (hl=) so non-Korean visitors can read it.
  const mapSrc =
    lang === "ko"
      ? "https://maps.google.com/maps?cid=5484440828779646095&z=18&hl=ko&output=embed"
      : "https://maps.google.com/maps?cid=5484440828779646095&z=18&hl=en&output=embed";

  return (
    <section
      id="contact"
      className="relative bg-[#f8f6f3] text-[#0e2a47] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT - overline + heading + address rows */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="eyebrow text-[#f9441d]">{t(contact.overline)}</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="tx-h2 balance mt-5 text-[#0e2a47]">{t(contact.heading)}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#1a1a1a]/65 max-w-[460px]">
                {t(contact.sub)}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 border-t border-[#0e2a47]/15">
                {contact.rows.map((row) => (
                  <div
                    key={row.label.en}
                    className="grid grid-cols-[6rem_1fr] gap-6 py-4 border-b border-[#0e2a47]/12"
                  >
                    <div className="text-[11px] uppercase tracking-[var(--tracking-eyebrow-loud)] text-[#1a1a1a]/55 pt-1">
                      {t(row.label)}
                    </div>
                    <div className="text-[14px] leading-[1.6] text-[#0e2a47] whitespace-pre-line tabular">
                      {t(row.value)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT - location map */}
          <Reveal className="lg:col-span-6" delay={250}>
            <div
              className="text-[11px] uppercase tracking-[0.22em] text-[#1a1a1a]/55 flex items-center gap-3 mb-3"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <span className="h-px w-6 bg-[#f9441d]/60" aria-hidden />
              <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>Location</span>
            </div>
            <div className="relative w-full aspect-[4/3] border border-[#0e2a47]/15 overflow-hidden shadow-[0_24px_56px_-28px_rgba(14, 42, 71,0.4)]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(40%) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pillos Head Office - Google Map"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
