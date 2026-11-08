import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slashes are normalized in src/proxy.ts. Unprefixed paths are
  // a country 307 there (not a fixed hop), so this file does not redirect them.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // /ko/faq and /en/faq are a real page (src/app/faq/page.tsx). They must
      // not be sent home: a homepage redirect is a different document, and
      // search engines treat that as a soft 404. Unprefixed /faq is a country
      // 307 in src/proxy.ts, same as /about. Old .htm/.html addresses were the
      // Korean site.
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
