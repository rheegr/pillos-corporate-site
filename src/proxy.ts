import { NextResponse, type NextRequest } from "next/server";

import { LANG_HEADER, type Lang } from "@/data/lang";

/**
 * Redirect without inheriting the request's trailing slash. NextURL copies
 * that flag onto Location, which turned /about/ into /ko/about/ and looped.
 * Geo redirects are 307 and vary by country so a shared cache cannot pin one
 * visitor's target. Slash-normalization of /ko and /en is 308: the target
 * does not depend on who is asking.
 */
function redirectTo(request: NextRequest, pathname: string, status: 307 | 308) {
  const url = new URL(request.url);
  url.pathname = pathname;
  const response = NextResponse.redirect(url, status);
  if (status === 307) {
    response.headers.set("Vary", "x-vercel-ip-country");
  }
  return response;
}

/**
 * Korean IPs use the Korean URLs. Everyone else, including an absent or
 * unknown country (local dev, some crawlers), uses English. Accept-Language
 * and cookies are not consulted: the same country header always gets the
 * same target, for browsers and for Googlebot.
 */
function localeFromCountry(request: NextRequest): Lang {
  const country = request.headers.get("x-vercel-ip-country");
  return country?.trim().toUpperCase() === "KR" ? "ko" : "en";
}

function localized(locale: Lang, bare: string): string {
  if (bare === "/" || bare === "") return `/${locale}`;
  return `/${locale}${bare.startsWith("/") ? bare : `/${bare}`}`;
}

/**
 * /ko and /en are rewritten onto the shared page and always return 200.
 * They are not geo-redirected, so a US crawler can fetch /ko and a visitor
 * can switch language with the header link. Unprefixed paths 307 to the
 * locale selected above.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const noslash = pathname.replace(/\/+$/, "") || "/";

  // /ko/faq and /en/faq (with or without a trailing slash) stay on that
  // locale's home. next.config.ts declares the slash-less forms too.
  if (noslash === "/ko/faq" || noslash === "/en/faq") {
    return redirectTo(request, noslash === "/en/faq" ? "/en" : "/ko", 308);
  }

  // Retired /faq address: same destination as the locale FAQ redirects
  // (the locale home), chosen by country instead of always Korean.
  if (noslash === "/faq") {
    return redirectTo(request, `/${localeFromCountry(request)}`, 307);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const stripped = pathname.slice(0, -1);
    // /ko/ and /en/about/ normalize for everyone. Not a geo decision.
    if (stripped === "/ko" || stripped === "/en" || /^\/(ko|en)\//.test(stripped)) {
      return redirectTo(request, stripped, 308);
    }
    // /about/ → /ko/about or /en/about in one hop, not via /about.
    return redirectTo(request, localized(localeFromCountry(request), stripped), 307);
  }

  const prefixed = pathname.match(/^\/(ko|en)(\/.*)?$/);
  if (prefixed) {
    const headers = new Headers(request.headers);
    headers.set(LANG_HEADER, prefixed[1]);
    const url = request.nextUrl.clone();
    const rest = prefixed[2];
    url.pathname = rest && rest !== "/" ? rest : "/";
    return NextResponse.rewrite(url, { request: { headers } });
  }

  return redirectTo(request, localized(localeFromCountry(request), pathname), 307);
}

export const config = {
  // Pages only - skip API routes, Next internals and static files.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
