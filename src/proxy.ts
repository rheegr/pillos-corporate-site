import { NextResponse, type NextRequest } from "next/server";

import { LANG_HEADER } from "@/data/lang";

/**
 * Permanent redirect that does not inherit the request's trailing slash.
 * NextURL copies that flag onto the Location, which turned /about/ into
 * /ko/about/ and then looped.
 */
function redirect308(request: NextRequest, pathname: string) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return NextResponse.redirect(url, 308);
}

/**
 * /ko and /en are the only indexable addresses of each page. The prefix is
 * rewritten onto the shared page and pinned with a request header, so the
 * HTML language does not depend on Accept-Language, cookies, or IP country.
 * Anything without a prefix permanently redirects to the Korean canonical
 * URL. Googlebot (and every other client) therefore gets the same hop.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // FAQ homes are also declared in next.config.ts. Handle the slashed forms
  // here so /en/faq/ does not stop at /en/faq first (trailing-slash redirects
  // are disabled in next.config so this file owns them).
  const faq = pathname.replace(/\/+$/, "") || "/";
  if (faq === "/faq" || faq === "/ko/faq" || faq === "/en/faq") {
    return redirect308(request, faq === "/en/faq" ? "/en" : "/ko");
  }

  // One hop to a slash-less canonical. Prefixed slugs keep their locale;
  // unprefixed slugs go straight to /ko so /about/ does not bounce via /about.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const stripped = pathname.slice(0, -1);
    if (stripped === "/ko" || stripped === "/en" || /^\/(ko|en)\//.test(stripped)) {
      return redirect308(request, stripped);
    }
    return redirect308(request, stripped === "/" ? "/ko" : `/ko${stripped}`);
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

  return redirect308(request, pathname === "/" ? "/ko" : `/ko${pathname}`);
}

export const config = {
  // Pages only - skip API routes, Next internals and static files.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
