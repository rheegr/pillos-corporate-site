import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import VisionMissionValues from "@/components/VisionMissionValues";
import FromTheBridge from "@/components/FromTheBridge";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";

export const metadata: Metadata = {
  title: { absolute: "About Pillos | Korean Ocean Carrier Since 2009" },
  description:
    "Pillos is a Korean ocean carrier established in 2009, moving bulk, gas, and chemical cargo across global routes with more than 15 years of trusted operations.",
};

export default function AboutPage() {
  return (
    <main id="main" className="relative">
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
