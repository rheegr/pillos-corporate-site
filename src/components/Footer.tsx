"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { footer } from "@/data/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0e2a47] text-[#f8f6f3]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 py-12">
        <div className="flex flex-col items-center gap-5">
          {/* Logo + hairline brackets */}
          <div className="flex items-center gap-5" aria-hidden>
            <span className="h-px w-10 bg-[#f8f6f3]/25" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pillos-wordmark-orange.svg" alt="Pillos" className="h-[19px] w-auto" />
            <span className="h-px w-10 bg-[#f8f6f3]/25" />
          </div>
          <div className="flex flex-col items-center text-center text-[10.5px] leading-[1.6] text-[#f8f6f3]/60 tabular">
            <span>© Pillos CO., LTD. Since 2009. All rights reserved.</span>
            <span className="mt-1">{t(footer.addressLine)}</span>
            <span>{t(footer.phoneLine)}</span>
            <span>{t(footer.emailLine)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
