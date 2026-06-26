import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import HSE from "@/components/HSE";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";

export const metadata: Metadata = {
  title: { absolute: "HSE — Health, Safety & Environment | Pillos" },
  description:
    "Health, Safety and Environment at Pillos — a goal of zero harm to people, the environment, and the cargo we carry, operated in full compliance with the ISM Code.",
};

export default function HsePage() {
  return (
    <main id="main" className="relative">
      <Header />
      <PageHero
        overline={pageHeroes.hse.overline}
        latinOverline
        heading={pageHeroes.hse.heading}
        headingNote={pageHeroes.hse.headingNote}
        sub={pageHeroes.hse.sub}
        image="/hero-hse.jpg"
        imageAlt="Safety helmets at a worksite"
        imagePosition="center 60%"
      />
      <HSE />
      <Footer />
    </main>
  );
}
