import { headers } from "next/headers";
import { LANG_HEADER, localeHref, type Lang } from "@/data/lang";
import { siteUrl } from "@/data/site";

type Crumb = { name: string; path: string };

export default async function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const lang: Lang = (await headers()).get(LANG_HEADER) === "ko" ? "ko" : "en";
  const abs = (path: string) => `${siteUrl}${localeHref(lang, path)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
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
