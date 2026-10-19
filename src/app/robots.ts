import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Training, search-index and live-fetch agents of each AI vendor, plus Naver's
// crawler (Yeti). All allowed: the goal is to be cited.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Yeti",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI search/answer crawlers — explicitly allowed
      ...aiCrawlers.map((agent) => ({ userAgent: agent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
