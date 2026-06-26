"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { nav } from "@/data/content";
import MobileMenu from "./MobileMenu";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Pages whose hero band is a dark background photo - the header sits over dark
  // until scrolled. Legal pages (light) are excluded.
  const darkHeroRoutes = new Set(["/", "/about", "/services", "/hse", "/contact"]);
  const onDarkHero = !scrolled && darkHeroRoutes.has(pathname);

  // Nav link colours
  const navInactive = onDarkHero
    ? "text-[#f8f6f3]/80 hover:text-[#f9441d]"
    : "text-[#1a1a1a]/70 hover:text-[#f9441d]";
  const navActive = onDarkHero ? "text-[#f8f6f3]" : "text-[#0e2a47]";

  // Hamburger colour
  const hamburgerColor = onDarkHero ? "text-[#f8f6f3]" : "text-[#1a1a1a]";

  // Pin one font stack so nav labels render at the same visual size in both
  // locales (otherwise shared labels like "HSE" look smaller under the KO font).
  const navFont = {
    fontFamily: "var(--font-inter), 'Pretendard Variable', var(--font-noto-sans-kr), sans-serif",
  } as const;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "header-scrolled" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 h-[var(--header-h)] flex items-center justify-between">
          <Link href="/" className="inline-flex items-center" aria-label="Pillos - home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pillos-wordmark-orange.svg"
              alt="Pillos"
              className="h-[19px] md:h-[25px] w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link inline-block min-w-[72px] text-center ${active ? "is-active" : ""} text-[0.8rem] uppercase tracking-[var(--tracking-eyebrow-quiet)] ${
                    active ? navActive : navInactive
                  }`}
                  style={navFont}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageToggle tone={onDarkHero ? "dark" : "light"} />
            </div>
            {/* Mobile: language toggle + burger */}
            <div className="md:hidden">
              <LanguageToggle tone={onDarkHero ? "dark" : "light"} />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`md:hidden h-10 w-10 grid place-items-center ${hamburgerColor}`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M3 6H19M3 11H19M3 16H19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
