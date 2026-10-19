import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("home");
}

export default function Home() {
  return (
    <main id="main" className="relative">
      <Header />
      <Hero />
      <TrustedBy />
      <AboutTeaser />
      <ServicesTeaser />
      <InquiryForm />
      <Footer />
    </main>
  );
}
