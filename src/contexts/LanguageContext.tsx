"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANG_COOKIE, LANG_COOKIE_MAX_AGE } from "@/data/lang";

export type Lang = "en" | "ko";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: <T extends { en: string; ko: string }>(value: T) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LEGACY_STORAGE_KEY = "pillos-lang";

function persist(lang: Lang) {
  try {
    // Cookie is what the server reads (src/proxy.ts) so the next page load is
    // rendered in this language from the first byte.
    document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=${LANG_COOKIE_MAX_AGE}; samesite=lax`;
  } catch {
    /* ignore */
  }
  try {
    window.localStorage.setItem(LEGACY_STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  /** Decided server-side (saved cookie, else visitor's IP country). */
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Visitors from before the cookie existed have their choice only in
  // localStorage: honour it once and move it into the cookie.
  useEffect(() => {
    let saved: string | null = null;
    let hasCookie = true;
    try {
      saved = window.localStorage.getItem(LEGACY_STORAGE_KEY);
      hasCookie = document.cookie.split("; ").some((c) => c.startsWith(`${LANG_COOKIE}=`));
    } catch {
      return; /* storage unavailable - keep server decision */
    }
    if (hasCookie || (saved !== "ko" && saved !== "en")) return;
    persist(saved);
    if (saved === initialLang) return;
    const legacy = saved;
    const id = window.setTimeout(() => setLangState(legacy), 0);
    return () => window.clearTimeout(id);
  }, [initialLang]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    persist(next);
  };
  const toggle = () => setLang(lang === "en" ? "ko" : "en");
  const t = <T extends { en: string; ko: string }>(value: T) => value[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
