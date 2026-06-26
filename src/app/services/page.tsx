import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesTabs from "@/components/ServicesTabs";
import Footer from "@/components/Footer";
import { pageHeroes } from "@/data/content";

export const metadata: Metadata = {
  title: { absolute: "Bulk, Gas & Chemical Shipping Services | Pillos" },
  description:
    "Pillos shipping services — dry bulk carriers, gas (LPG) carriers, and chemical tankers carrying coal, ore, grain, olefins, and acids across Korea, Japan and global routes.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="relative">
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
