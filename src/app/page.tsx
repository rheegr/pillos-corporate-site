import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Pillos — Korean Ocean Carrier | Bulk, Gas & Chemical Shipping" },
};

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
