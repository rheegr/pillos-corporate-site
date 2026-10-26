import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slashes are normalized in src/proxy.ts. Unprefixed paths are
  // a country 307 there (not a fixed hop), so this file does not redirect them.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // The FAQ reference page (2026-10-21) surfaced in search results on its
      // own; its answers now live in llms.txt and every FAQ address goes home.
      // /ko/faq and /en/faq stay on their own locale home. Unprefixed /faq is
      // a country 307 in src/proxy.ts (next.config runs first, so it must not
      // claim /faq here). Old .htm/.html addresses were the Korean site.
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
