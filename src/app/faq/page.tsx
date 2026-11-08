import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMetadata } from "@/data/seo";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { faq } from "@/data/content";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { LANG_HEADER, type Lang } from "@/data/lang";

// Reachable at /ko/faq and /en/faq. It is not in the header or footer.
// FAQPage JSON-LD repeats the visible questions. It does not by itself make
// the page eligible for a Google FAQ rich result.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("faq");
}

export default async function FaqPage() {
  const lang: Lang = (await headers()).get(LANG_HEADER) === "ko" ? "ko" : "en";
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q[lang],
      acceptedAnswer: { "@type": "Answer", text: item.a[lang] },
    })),
  };

  return (
    <main id="main" className="relative">
      <BreadcrumbJsonLd crumbs={[{ name: faq.overline, path: "/faq" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <Faq lang={lang} />
      <Footer />
    </main>
  );
}
