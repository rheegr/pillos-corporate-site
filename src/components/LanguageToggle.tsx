"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { barePath, localeHref, type Lang } from "@/data/lang";

export default function LanguageToggle({
  tone = "light",
  koreanLabel = "Korean",
}: {
  tone?: "light" | "dark";
  koreanLabel?: string;
}) {
  const { lang } = useLanguage();
  const bare = barePath(usePathname() || "/");
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

  const item = (code: Lang, label: string, aria: string) => (
    <a
      href={localeHref(code, bare)}
      hrefLang={code}
      lang={code}
      aria-current={lang === code ? "page" : undefined}
      aria-label={aria}
      className={`${lang === code ? active : base} transition-colors duration-[var(--duration-base)] [transition-timing-function:var(--ease-spring)]`}
      style={fontStyle}
    >
      {label}
    </a>
  );

  return (
    <div
      className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.08em] font-medium uppercase"
      style={fontStyle}
    >
      {item("ko", koreanLabel, "한국어로 보기")}
      <span className={tone === "dark" ? "text-white/25" : "text-[#1a1a1a]/25"} aria-hidden>/</span>
      {item("en", "English", "View in English")}
    </div>
  );
}
