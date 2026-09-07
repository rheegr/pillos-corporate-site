// Single source of truth for the canonical site URL.
// pillos.co.kr is the only domain Pillos owns (2026-09-07: pillos.com is a
// parked GoDaddy auction page owned by someone else - do NOT canonicalize to
// it). If a new primary domain is ever attached to this Vercel deployment,
// flip this one constant - canonical, sitemap, robots, OpenGraph URLs and
// llms.txt links all follow.
export const siteUrl = "https://pillos.co.kr";
