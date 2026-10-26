// Shared between src/proxy.ts (the request proxy), the root layout (server)
// and the language context (client).
//
// A /ko or /en prefix is the language of that URL, for every visitor.
// Unprefixed paths are not pages: src/proxy.ts 307s them with
// x-vercel-ip-country (KR → /ko, otherwise /en). The old pillos-lang cookie
// is not read, so a saved choice cannot send one Korean IP to /en and
// another to /ko.

export type Lang = "en" | "ko";

export const LANG_HEADER = "x-pillos-lang";

/** Path with any /ko or /en prefix removed. "/" stays "/". */
export function barePath(pathname: string): string {
  const stripped = pathname.replace(/^\/(ko|en)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/**
 * Prefix an in-site path with a locale. Hash fragments are kept.
 * Non-path hrefs (mailto:, https:) pass through unchanged.
 */
export function localeHref(lang: Lang, href: string): string {
  if (!href.startsWith("/")) return href;
  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  let path = hashAt >= 0 ? href.slice(0, hashAt) : href;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  path = barePath(path || "/");
  return path === "/" ? `/${lang}${hash}` : `/${lang}${path}${hash}`;
}
