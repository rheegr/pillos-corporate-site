import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Only the fixed-language addresses (/ko/..., /en/...) are listed. Unprefixed
// paths 307 by country and are not sitemap URLs. x-default is the English
// canonical (see src/data/seo.ts), which is also the non-KR default.
const pages: { path: string; freq: "monthly" | "yearly"; priority: number; modified?: string }[] = [
  { path: "", freq: "monthly", priority: 1.0 },
  { path: "/about", freq: "monthly", priority: 0.8 },
  { path: "/services", freq: "monthly", priority: 0.8 },
  { path: "/hse", freq: "monthly", priority: 0.6 },
  { path: "/contact", freq: "monthly", priority: 0.7 },
  // Republished 2026-11-08. The Q&A itself is the 2026-10 copy.
  { path: "/faq", freq: "monthly", priority: 0.5, modified: "2026-11-08" },
  { path: "/privacy", freq: "yearly", priority: 0.2 },
  { path: "/terms", freq: "yearly", priority: 0.2 },
  { path: "/cookies", freq: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed dates: an always-"now" lastModified is ignored by crawlers.
  return pages.flatMap(({ path, freq, priority, modified }) =>
    (["ko", "en"] as const).map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified: new Date(modified ?? "2026-10-27"),
      changeFrequency: freq,
      priority,
      alternates: {
        languages: {
          ko: `${siteUrl}/ko${path}`,
          en: `${siteUrl}/en${path}`,
          "x-default": `${siteUrl}/en${path}`,
        },
      },
    })),
  );
}
