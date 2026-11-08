import type { Lang } from "@/data/lang";
import { faq } from "@/data/content";

// Server-rendered from the request language. The same `faq.items` strings are
// what the page's FAQPage JSON-LD describes, so the markup cannot add a
// question that is not on the page.
export default function Faq({ lang }: { lang: Lang }) {
  const t = <T extends { en: string; ko: string }>(value: T) => value[lang];

  return (
    <>
      <section className="relative bg-[#f8f6f3] text-[#0e2a47] pt-[var(--header-h)] overflow-hidden">
        <div aria-hidden className="hero-ambient opacity-70" />
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="grid pt-20 lg:pt-28 pb-10 lg:pb-14">
            <div lang={lang} className="flex flex-col justify-end">
              <div className="page-eyebrow flex items-center gap-3 text-[#f9441d]">
                <span className="h-px w-8 bg-[#f9441d]" />
                <span>{t(faq.overline)}</span>
              </div>
              <h1 className="tx-h1 balance mt-7 max-w-[920px] text-[#0e2a47]">{t(faq.heading)}</h1>
              <div className="mt-6 h-[2px] w-20 bg-[#f9441d]" aria-hidden />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#f8f6f3] text-[#0e2a47] pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-6 md:gap-10 items-start">
            <div className="col-span-12 md:col-start-4 md:col-span-9 max-w-[860px]">
              <dl className="divide-y divide-[#0e2a47]/10 border-y border-[#0e2a47]/10">
                {faq.items.map((item) => (
                  <div key={item.q.en} className="py-6">
                    <dt className="text-[17px] font-semibold text-[#0e2a47]">{t(item.q)}</dt>
                    <dd className="mt-3 text-[15px] leading-[1.75] text-[#1a1a1a]/75">{t(item.a)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
