import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";

export const metadata: Metadata = {
  title: { absolute: "Contact Pillos | Korean Ocean Carrier, Seoul" },
  description:
    "Contact Pillos, a Korean ocean carrier based in Jung-gu, Seoul. Enquiries from shippers, charterers, and partners are welcome — info@pillos.co.kr, +82-2-318-1703.",
};

export default function ContactPage() {
  return (
    <main id="main" className="relative">
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
