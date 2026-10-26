"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "@/data/lang";

export type { Lang };

type LanguageContextValue = {
  lang: Lang;
  t: <T extends { en: string; ko: string }>(value: T) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  /** Locale pinned by the /ko or /en prefix (src/proxy.ts). */
  initialLang?: Lang;
}) {
  const pathname = usePathname() || "/";
  // The visible URL is the language. When the root layout does not re-render
  // on a client navigation, the prefix still updates here. If the pathname has
  // no prefix (the proxy rewrote it), keep the server-pinned locale.
  const prefix = pathname.match(/^\/(ko|en)(?=\/|$)/)?.[1] as Lang | undefined;
  const lang: Lang = prefix ?? initialLang;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = <T extends { en: string; ko: string }>(value: T) => value[lang];

  return <LanguageContext.Provider value={{ lang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
