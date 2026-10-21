"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { faq } from "@/data/content";

export default function Faq() {
  const { t } = useLanguage();
  // Built from the same strings that render below, so markup and page agree.
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: t(item.q),
      acceptedAnswer: { "@type": "Answer", text: t(item.a) },
    })),
  };

  return (
    <section className="relative bg-[#f8f6f3] text-[#0e2a47] py-20 lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
  );
}
