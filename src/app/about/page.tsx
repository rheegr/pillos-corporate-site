import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import VisionMissionValues from "@/components/VisionMissionValues";
import FromTheBridge from "@/components/FromTheBridge";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("about");
}

export default function AboutPage() {
  return (
    <main id="main" className="relative">
      <BreadcrumbJsonLd crumbs={[{ name: "About", path: "/about" }]} />
      <Header />
      <PageHero
        overline={pageHeroes.about.overline}
        heading={pageHeroes.about.heading}
        sub={pageHeroes.about.sub}
        image="/hero-about.jpg"
        imageAlt="Aerial view of bulk carriers at sea"
      />
      <About />
      <FromTheBridge />
      <VisionMissionValues />
      <Footer />
    </main>
  );
}
