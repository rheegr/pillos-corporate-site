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
