"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ko";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: <T extends { en: string; ko: string }>(value: T) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default English (matches SSR); restore the visitor's saved choice after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("pillos-lang");
      if (saved === "ko" || saved === "en") setLangState(saved);
    } catch {
      /* localStorage unavailable - keep default */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem("pillos-lang", next);
    } catch {
      /* ignore */
    }
  };
  const toggle = () => setLangState((prev) => (prev === "en" ? "ko" : "en"));
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
