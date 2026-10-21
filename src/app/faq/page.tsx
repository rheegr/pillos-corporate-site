import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { faq } from "@/data/content";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

// Reference page for search engines and AI answer engines. Deliberately not
// linked from the nav: it is reached through the sitemap and llms.txt, so the
// visitor-facing pages stay as designed.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("faq");
}

export default function FaqPage() {
  return (
    <main id="main" className="relative">
      <BreadcrumbJsonLd crumbs={[{ name: "FAQ", path: "/faq" }]} />
      <Header />
      <PageHero overline={faq.overline} latinOverline heading={faq.heading} />
      <Faq />
      <Footer />
    </main>
  );
}
