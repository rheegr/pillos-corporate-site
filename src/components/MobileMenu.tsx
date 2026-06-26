"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav } from "@/data/content";
import LanguageToggle from "./LanguageToggle";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const { t } = useLanguage();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-white" />
      <div className="relative h-full flex flex-col px-6 pb-10">
        <div className="flex items-center justify-between h-[var(--header-h)]">
          <Link href="/" onClick={onClose} className="inline-flex items-center" aria-label="Pillos - home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pillos-wordmark-orange.svg" alt="Pillos" className="h-[19px] w-auto" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="h-10 w-10 grid place-items-center text-[#1a1a1a]"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 3L19 19M19 3L3 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="font-serif font-bold text-2xl text-[#1a1a1a] py-3 border-b border-[#1a1a1a]/10"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex items-center pt-10">
          <LanguageToggle tone="light" koreanLabel="한국어" />
        </div>
      </div>
    </div>
  );
}
