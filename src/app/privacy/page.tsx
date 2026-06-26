import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPlaceholder from "@/components/LegalPlaceholder";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main className="relative">
      <Header />
      <LegalPlaceholder
        overline={{ en: "LEGAL", ko: "법적 고지" }}
        heading={{ en: "Privacy", ko: "개인정보 처리방침" }}
        body={{
          en: "This document is being prepared in accordance with the Personal Information Protection Act of the Republic of Korea and the EU General Data Protection Regulation. A complete notice will be published in due course.",
          ko: "본 페이지는 대한민국 개인정보 보호법 및 EU GDPR 기준에 따라 준비 중입니다. 정식 고지문은 곧 게재될 예정입니다.",
        }}
      />
      <Footer />
    </main>
  );
}
