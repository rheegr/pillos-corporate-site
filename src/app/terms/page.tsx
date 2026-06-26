import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPlaceholder from "@/components/LegalPlaceholder";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main className="relative">
      <Header />
      <LegalPlaceholder
        overline={{ en: "LEGAL", ko: "법적 고지" }}
        heading={{ en: "Terms of Use", ko: "이용약관" }}
        body={{
          en: "Terms governing the use of this website and any related correspondence are being finalised. A complete notice will be published in due course.",
          ko: "본 웹사이트 이용 및 관련 문의에 적용되는 약관을 준비 중입니다. 정식 고지문은 곧 게재될 예정입니다.",
        }}
      />
      <Footer />
    </main>
  );
}
