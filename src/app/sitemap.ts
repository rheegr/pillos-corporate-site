import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Each page is listed under its fixed-language addresses (/ko/..., /en/...)
// with hreflang pairs, so crawlers index the Korean render as well as the
// English one regardless of where they crawl from (see src/proxy.ts).
const pages: { path: string; freq: "monthly" | "yearly"; priority: number }[] = [
  { path: "", freq: "monthly", priority: 1.0 },
  { path: "/about", freq: "monthly", priority: 0.8 },
  { path: "/services", freq: "monthly", priority: 0.8 },
  { path: "/hse", freq: "monthly", priority: 0.6 },
  { path: "/contact", freq: "monthly", priority: 0.7 },
  { path: "/faq", freq: "monthly", priority: 0.7 },
  { path: "/privacy", freq: "yearly", priority: 0.2 },
  { path: "/terms", freq: "yearly", priority: 0.2 },
  { path: "/cookies", freq: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed date: an always-"now" lastModified is ignored by crawlers.
  const lastModified = new Date("2026-10-21");
  return pages.flatMap(({ path, freq, priority }) =>
    (["ko", "en"] as const).map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified,
      changeFrequency: freq,
      priority,
      alternates: {
        languages: { ko: `${siteUrl}/ko${path}`, en: `${siteUrl}/en${path}` },
      },
    })),
  );
}
