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
          en: "This site uses a single first-party cookie, pillos-lang, which is set only when you choose Korean or English with the language toggle and remembers that choice for one year. It contains no personal data and is not used for tracking. Until you make a choice, the language is selected from your connection's country and nothing is stored. A complete notice will be published in due course.",
          ko: "본 사이트는 자체 쿠키 한 가지(pillos-lang)만 사용합니다. 이 쿠키는 언어 전환 버튼으로 한국어 또는 영어를 직접 선택했을 때에만 저장되며, 선택한 언어를 1년간 기억합니다. 개인정보를 담지 않으며 추적 목적으로 사용하지 않습니다. 언어를 선택하기 전에는 접속 국가에 따라 언어를 표시할 뿐 아무것도 저장하지 않습니다. 정식 고지문은 곧 게재될 예정입니다.",
        }}
      />
      <Footer />
    </main>
  );
}
