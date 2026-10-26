import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slashes are normalized in src/proxy.ts so an unprefixed
  // `/about/` can 308 straight to `/ko/about` instead of bouncing via `/about`.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // The FAQ reference page (2026-10-21) surfaced in search results on its
      // own; its answers now live in llms.txt and every FAQ address goes home.
      // Legacy addresses land on a canonical locale URL in one hop.
      // /ko/faq and /en/faq stay on their own locale home. Unprefixed
      // pages are not destinations: src/proxy.ts 308s those to /ko.
      { source: "/faq", destination: "/ko", permanent: true },
      { source: "/ko/faq", destination: "/ko", permanent: true },
      { source: "/en/faq", destination: "/en", permanent: true },
      { source: "/index.html", destination: "/ko", permanent: true },
      { source: "/about-1.htm", destination: "/ko/about", permanent: true },
      { source: "/about_2.htm", destination: "/ko/about", permanent: true },
      { source: "/about_3.htm", destination: "/ko/about", permanent: true },
      { source: "/our_services_1.htm", destination: "/ko/services", permanent: true },
      { source: "/our_services_2.htm", destination: "/ko/services", permanent: true },
      { source: "/our_services_3.htm", destination: "/ko/services", permanent: true },
      { source: "/our_services_4.htm", destination: "/ko/services", permanent: true },
      { source: "/hse.htm", destination: "/ko/hse", permanent: true },
      { source: "/contact.asp", destination: "/ko/contact", permanent: true },
      { source: "/map.htm", destination: "/ko/contact", permanent: true },
      { source: "/cart.html", destination: "/ko", permanent: true },
      { source: "/checkout.html", destination: "/ko", permanent: true },
      { source: "/single-product.html", destination: "/ko", permanent: true },
    ];
  },
};

export default nextConfig;
