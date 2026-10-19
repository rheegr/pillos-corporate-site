import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("contact");
}

export default function ContactPage() {
  return (
    <main id="main" className="relative">
      <BreadcrumbJsonLd crumbs={[{ name: "Contact", path: "/contact" }]} />
      <Header />
      <PageHero
        overline={pageHeroes.contact.overline}
        latinOverline
        heading={pageHeroes.contact.heading}
        sub={pageHeroes.contact.sub}
        image="/hero-contact.jpg"
        imageAlt="Typewriter with the word contact on paper"
        imagePosition="center 40%"
      />
      <Contact />
      <InquiryForm />
      <Footer />
    </main>
  );
}
