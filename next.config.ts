import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about-1.htm", destination: "/about", permanent: true },
      { source: "/about_2.htm", destination: "/about", permanent: true },
      { source: "/about_3.htm", destination: "/about", permanent: true },
      { source: "/our_services_1.htm", destination: "/services", permanent: true },
      { source: "/our_services_2.htm", destination: "/services", permanent: true },
      { source: "/our_services_3.htm", destination: "/services", permanent: true },
      { source: "/our_services_4.htm", destination: "/services", permanent: true },
      { source: "/hse.htm", destination: "/hse", permanent: true },
      { source: "/contact.asp", destination: "/contact", permanent: true },
      { source: "/map.htm", destination: "/contact", permanent: true },
      { source: "/cart.html", destination: "/", permanent: true },
      { source: "/checkout.html", destination: "/", permanent: true },
      { source: "/single-product.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
