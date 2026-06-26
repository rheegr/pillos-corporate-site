"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesTabs } from "@/data/content";
import Reveal from "./Reveal";

export default function ServicesTabs() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>(servicesTabs.tabs[0].id);

  // Scroll-spy: highlight the tab whose section is closest to the viewport top
  useEffect(() => {
    if (typeof window === "undefined") return;

    const headerOffset = 120; // header height + small margin
    const sections = servicesTabs.tabs
      .map((tab) => document.getElementById(tab.id))
      .filter((el): el is HTMLElement => !!el);

    const onScroll = () => {
      const scrollY = window.scrollY + headerOffset;
      let current = sections[0]?.id ?? active;
      for (const sec of sections) {
        if (sec.offsetTop <= scrollY) current = sec.id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash && servicesTabs.tabs.some((tab) => tab.id === hash)) {
      setTimeout(() => scrollToSection(hash), 80);
    }
  }, []);

  return (
    <section className="relative bg-[#f8f6f3] text-[#0e2a47] pt-8 pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Sticky tab nav - clicking jumps to its section */}
        <div className="sticky top-[var(--header-h)] z-30 -mx-6 sm:-mx-10 lg:mx-0 bg-[#f8f6f3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f6f3]/85">
          <div className="border-b border-[#0e2a47]/15 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 sm:px-10 lg:px-0">
            <div className="flex items-end justify-between sm:justify-start gap-4 sm:gap-8 md:gap-12 sm:min-w-max">
              {servicesTabs.tabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => scrollToSection(tab.id)}
                    className={`relative pb-5 pt-4 text-[13px] sm:text-[15px] font-medium uppercase tracking-[0.08em] sm:tracking-[0.16em] transition-colors whitespace-nowrap ${
                      isActive ? "text-[#0e2a47]" : "text-[#1a1a1a]/55 hover:text-[#0e2a47]"
                    }`}
                  >
                    <span className="sm:hidden">{t(tab.shortLabel)}</span>
                    <span className="hidden sm:inline">{t(tab.label)}</span>
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#f9441d]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* All sections rendered vertically, stacked */}
        {servicesTabs.tabs.map((tab, idx) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`scroll-mt-32 ${idx === 0 ? "pt-8 lg:pt-14" : "pt-12 lg:pt-28"} ${
              idx < servicesTabs.tabs.length - 1 ? "pb-4 lg:pb-6" : ""
            }`}
          >
            <div className="grid grid-cols-12 gap-y-6 md:gap-10">
              <div className="col-span-12 md:col-span-3">
                <Reveal>
                  <div className="eyebrow text-[#f9441d]">{t(tab.overline)}</div>
                </Reveal>
              </div>
              <div className="col-span-12 md:col-span-9 max-w-[760px]">
                <Reveal delay={80}>
                  <h2 className="tx-h2 balance text-[#0e2a47]">{t(tab.heading)}</h2>
                </Reveal>

                <div className="mt-10 space-y-6 text-[15px] leading-[1.8] text-[#1a1a1a]/78">
                  {tab.paragraphs.map((p, i) => (
                    <Reveal key={i} delay={150 + i * 80}>
                      <p>{t(p)}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Sector photo, placed below its description */}
            {("image" in tab) && (tab as { image?: string }).image && (
              <Reveal delay={120}>
                <figure className="mt-10 lg:mt-14 -mx-6 sm:-mx-10 lg:mx-0 lg:max-w-[1180px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={(tab as { image: string }).image}
                    alt={t(tab.label)}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    style={{ objectPosition: (tab as { imagePosition?: string }).imagePosition ?? "center" }}
                    className="block w-full aspect-[21/9] object-cover grayscale-[10%] contrast-[1.03] shadow-[0_24px_56px_-28px_rgba(14, 42, 71,0.4)]"
                  />
                </figure>
              </Reveal>
            )}

            {/* Hairline between sectors (not after the last) */}
            {idx < servicesTabs.tabs.length - 1 && (
              <div className="mt-12 lg:mt-28 h-px bg-[#0e2a47]/12" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
