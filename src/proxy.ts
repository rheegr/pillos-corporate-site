import { NextResponse, type NextRequest } from "next/server";

import { LANG_COOKIE, LANG_HEADER } from "@/data/lang";

/**
 * Decide the language for this request:
 *  - a `pillos-lang` cookie (written by the KO / EN toggle) always wins;
 *  - otherwise Korean IPs (Vercel's `x-vercel-ip-country`) get Korean,
 *    everyone else English.
 * The result is forwarded to the root layout via a request header so the very
 * first server render is already in the right language (no EN flash). The
 * geo default is deliberately not written to a cookie: only an explicit
 * choice is remembered, so the site follows the visitor's location until
 * they pick a language themselves.
 */
export function proxy(request: NextRequest) {
  // /ko/... and /en/... are fixed-language addresses of the same pages. They
  // exist for crawlers: Googlebot fetches from US IPs, so without them it
  // only ever sees (and indexes) the English render.
  const prefixed = request.nextUrl.pathname.match(/^\/(ko|en)(\/.*)?$/);
  if (prefixed) {
    const headers = new Headers(request.headers);
    headers.set(LANG_HEADER, prefixed[1]);
    const url = request.nextUrl.clone();
    url.pathname = prefixed[2] || "/";
    return NextResponse.rewrite(url, { request: { headers } });
  }

  const saved = request.cookies.get(LANG_COOKIE)?.value;
  const country = request.headers.get("x-vercel-ip-country");
  const lang = saved === "ko" || saved === "en" ? saved : country === "KR" ? "ko" : "en";

  const headers = new Headers(request.headers);
  headers.set(LANG_HEADER, lang);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Pages only - skip API routes, Next internals and static files.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
