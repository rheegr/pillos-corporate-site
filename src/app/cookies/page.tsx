import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPlaceholder from "@/components/LegalPlaceholder";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <main className="relative">
      <Header />
      <LegalPlaceholder
        overline={{ en: "LEGAL", ko: "법적 고지" }}
        heading={{ en: "Cookie Notice", ko: "쿠키 안내" }}
        body={{
          en: "This site uses minimal first-party cookies required for language preference and basic analytics. A complete notice will be published in due course.",
          ko: "본 사이트는 언어 설정 및 기본 분석에 필요한 최소한의 자체 쿠키만 사용합니다. 정식 고지문은 곧 게재될 예정입니다.",
        }}
      />
      <Footer />
    </main>
  );
}
