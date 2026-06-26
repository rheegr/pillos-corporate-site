"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle({
  tone = "light",
  koreanLabel = "Korean",
}: {
  tone?: "light" | "dark";
  koreanLabel?: string;
}) {
  const { lang, setLang } = useLanguage();
  const base =
    tone === "dark"
      ? "text-white/55 hover:text-white"
      : "text-[#1a1a1a]/50 hover:text-[#1a1a1a]";
  const active = tone === "dark" ? "text-white" : "text-[#f9441d]";

  // Pin one font stack for both languages so the toggle never reflows when the
  // site switches between Inter (en) and the Korean webfont (ko).
  const fontStyle = {
    fontFamily: "var(--font-inter), 'Pretendard Variable', var(--font-noto-sans-kr), sans-serif",
  } as const;

  return (
    <div
      className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.08em] font-medium uppercase"
      style={fontStyle}
    >
      <button
        type="button"
        onClick={() => setLang("ko")}
        className={`${lang === "ko" ? active : base} transition-colors duration-[var(--duration-base)] [transition-timing-function:var(--ease-spring)]`}
        style={fontStyle}
        aria-pressed={lang === "ko"}
        aria-label="한국어로 보기"
      >
        {koreanLabel}
      </button>
      <span className={tone === "dark" ? "text-white/25" : "text-[#1a1a1a]/25"} aria-hidden>/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${lang === "en" ? active : base} transition-colors duration-[var(--duration-base)] [transition-timing-function:var(--ease-spring)]`}
        style={fontStyle}
        aria-pressed={lang === "en"}
        aria-label="View in English"
      >
        English
      </button>
    </div>
  );
}
