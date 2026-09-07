import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import FAQ from "@/components/FAQ";
import { faq } from "@/data/content";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Pillos — Korean Ocean Carrier | Bulk, Gas & Chemical Shipping" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q.en,
    acceptedAnswer: { "@type": "Answer", text: item.a.en },
  })),
};

export default function Home() {
  return (
    <main id="main" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <Hero />
      <TrustedBy />
      <AboutTeaser />
      <ServicesTeaser />
      <FAQ />
      <InquiryForm />
      <Footer />
    </main>
  );
}
