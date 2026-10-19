import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesTabs from "@/components/ServicesTabs";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("services");
}

export default function ServicesPage() {
  return (
    <main id="main" className="relative">
      <BreadcrumbJsonLd crumbs={[{ name: "Services", path: "/services" }]} />
      <Header />
      <PageHero
        overline={pageHeroes.services.overline}
        heading={pageHeroes.services.heading}
        sub={pageHeroes.services.sub}
        image="/hero-services.jpg"
        imageAlt="Bulk carrier loading cargo at port"
      />
      <ServicesTabs />
      <Footer />
    </main>
  );
}
