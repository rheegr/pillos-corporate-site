import { headers } from "next/headers";
import { nav, type Bi } from "@/data/content";
import { LANG_HEADER, localeHref, type Lang } from "@/data/lang";
import { siteUrl } from "@/data/site";

type Crumb = { name: string | Bi; path: string };

// Prefer the label already shown in the header. A Korean URL was emitting
// "Home" / "About" while the nav reads 홈 / 회사소개. Names not in the nav
// (the FAQ page) use the bilingual name passed by the page.
function labelFor(name: string | Bi, path: string, lang: Lang): string {
  const fromNav = nav.find((item) => item.href === path);
  if (fromNav) return fromNav.label[lang];
  return typeof name === "string" ? name : name[lang];
}

export default async function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const lang: Lang = (await headers()).get(LANG_HEADER) === "ko" ? "ko" : "en";
  const abs = (path: string) => `${siteUrl}${localeHref(lang, path)}`;
  const home = nav.find((item) => item.href === "/");
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: home ? home.label[lang] : "Home", item: abs("/") },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: labelFor(c.name, c.path, lang),
        item: abs(c.path),
      })),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
