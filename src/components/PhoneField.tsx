"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { inquiryForm } from "@/data/content";
import { COMMON_ISO, countryCodes, type CountryCode } from "@/data/countryCodes";

const DEFAULT_ISO = "KR";

export default function PhoneField({
  dial,
  number,
  onDialChange,
  onNumberChange,
}: {
  dial: string;
  number: string;
  onDialChange: (value: string) => void;
  onNumberChange: (value: string) => void;
}) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = useMemo(
    () => countryCodes.find((c) => c.dial === dial) ?? countryCodes.find((c) => c.iso === DEFAULT_ISO)!,
    [dial],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      const common = COMMON_ISO.map((iso) => countryCodes.find((c) => c.iso === iso)!).filter(Boolean);
      const rest = countryCodes
        .filter((c) => !COMMON_ISO.includes(c.iso))
        .sort((a, b) => a[lang].localeCompare(b[lang], lang === "ko" ? "ko" : "en"));
      return [...common, ...rest];
    }
    const bare = q.replace(/^\+/, "");
    return countryCodes.filter(
      (c) =>
        c.en.toLowerCase().includes(q) ||
        c.ko.includes(query.trim()) ||
        c.iso.toLowerCase().includes(q) ||
        c.dial.replace("+", "").startsWith(bare),
    );
  }, [query, lang]);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const onPointerDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (c: CountryCode) => {
    onDialChange(c.dial);
    setOpen(false);
    setQuery("");
  };

  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] uppercase tracking-[0.18em] text-[#1a1a1a]/65 font-medium">
        {t(inquiryForm.fields.phone)}
      </span>

      <div ref={wrapRef} className="relative flex items-end gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="shrink-0 flex items-center gap-1.5 border-b border-[#0e2a47]/25 py-2.5 text-[15px] text-[#0e2a47] hover:border-[#f9441d] focus:border-[#f9441d] outline-none"
        >
          <span className="tabular-nums">{selected.dial}</span>
          <span className="text-[#1a1a1a]/45 text-[11px]">{selected.iso}</span>
          <span aria-hidden className="text-[10px] text-[#1a1a1a]/45 leading-none">
            ▼
          </span>
        </button>

        <input
          type="tel"
          inputMode="tel"
          value={number}
          onChange={(e) => onNumberChange(e.target.value)}
          placeholder={t(inquiryForm.phonePlaceholder)}
          className="min-w-0 flex-1 border-b border-[#0e2a47]/25 bg-transparent py-2.5 text-[16px] md:text-[15px] text-[#0e2a47] outline-none focus:border-[#f9441d] placeholder:text-[#1a1a1a]/30"
        />

        {open && (
          <div
            role="listbox"
            className="absolute left-0 top-full z-30 mt-2 w-full max-w-[340px] border border-[#0e2a47]/15 bg-[#f8f6f3] shadow-[0_12px_28px_-14px_rgba(14,42,71,0.35)]"
          >
            <div className="p-2.5 border-b border-[#0e2a47]/10">
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t(inquiryForm.countrySearch)}
                className="w-full border border-[#0e2a47]/20 bg-white px-3 py-2 text-[16px] md:text-[14px] text-[#0e2a47] outline-none focus:border-[#f9441d] placeholder:text-[#1a1a1a]/35"
              />
            </div>

            <ul className="max-h-[260px] overflow-y-auto overscroll-contain">
              {results.length === 0 && (
                <li className="px-3 py-4 text-[13.5px] text-[#1a1a1a]/50">
                  {t(inquiryForm.countryEmpty)}
                </li>
              )}
              {results.map((c) => (
                <li key={`${c.iso}-${c.dial}`}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={c.dial === selected.dial && c.iso === selected.iso}
                    onClick={() => choose(c)}
                    className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[14px] text-[#0e2a47] hover:bg-[#0e2a47]/6"
                  >
                    <span className="truncate">{t(c)}</span>
                    <span className="shrink-0 tabular-nums text-[#1a1a1a]/55">{c.dial}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </label>
  );
}
