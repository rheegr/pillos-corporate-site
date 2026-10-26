import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { LanguageProvider, type Lang } from "@/contexts/LanguageContext";
import { LANG_HEADER } from "@/data/lang";
import { siteUrl } from "@/data/site";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Pillos";
const title = "Pillos — Korean Ocean Carrier | Bulk, Gas & Chemical Shipping";
// Link-share preview card title (kept clean/branded; the SEO <title> above stays keyword-rich)
const ogTitle = "Pillos - Trusted to Deliver";
const description =
  "Pillos (필로스) is a Korean ocean carrier established in 2009, specializing in dry bulk, gas (LPG), and chemical tanker shipping across global trade routes. A trusted Korea-based ocean shipping company — trusted to deliver.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Pillos",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Pillos Co., Ltd." }],
  keywords: [
    "Pillos",
    "Pillos shipping",
    "Pillos Co Ltd",
    "필로스",
    "필로스해운",
    "Korean shipping company",
    "Korea ocean carrier",
    "ocean shipping Korea",
    "Korea ocean shipping",
    "ocean carrier",
    "bulk carrier",
    "Korea bulk carrier",
    "dry bulk shipping",
    "gas carrier",
    "LPG carrier",
    "chemical carrier",
    "chemical tanker",
    "chemical shipping",
    "hydrochloric acid carrier",
    "Seoul shipping company",
    "해운",
    "외항해운",
    "벌크선",
    "가스선",
    "케미컬선",
    "해상운송",
  ],
  // Canonical is set per page (src/data/seo.ts); a layout-level "/" would
  // be inherited by every page and mark them all as copies of the homepage.
  openGraph: {
    title: ogTitle,
    description,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_GB",
    alternateLocale: ["ko_KR"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pillos - Trusted to Deliver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Search ownership for https://pillos.co.kr/ (Google Search Console, owner rheegr@gmail.com;
  // Naver Search Advisor).
  verification: {
    google: "3oeueV7R_a_0OKRYUAOt4HS6rojjulJZeXOdp9WDymI",
    other: {
      "naver-site-verification": "7c95dcda12f13936c4a12030189570b1c72d1077",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
  width: "device-width",
  initialScale: 1,
  // Single-tone cream site: lock light rendering so OS dark mode / forced
  // darkening (Android Chrome auto-dark) can't invert our palette
  colorScheme: "light",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pillos Co., Ltd.",
  legalName: "Pillos Co., Ltd.",
  "@id": `${siteUrl}/#organization`,
  alternateName: ["㈜필로스", "주식회사 필로스", "필로스", "필로스 해운", "Pillos", "Pillos Shipping"],
  disambiguatingDescription:
    "Pillos Co., Ltd. (㈜필로스) is the Korean shipping company (필로스 해운): an ocean carrier in bulk, gas and chemical shipping, headquartered at 9 Chungmu-ro, Jung-gu, Seoul, led by CEO In Ewon Rhee (이인원). Its affiliate ㈜필로스해운 (est. 2005) shares the same CEO and office. pillos.co.kr is the official website of both.",
  url: siteUrl,
  logo: `${siteUrl}/pillos-logo.png`,
  image: `${siteUrl}/og-image.png`,
  description,
  foundingDate: "2009",
  foundingLocation: { "@type": "Place", name: "Seoul, Korea" },
  slogan: "Trusted to Deliver",
  email: "info@pillos.co.kr",
  telephone: "+82-2-318-1703",
  faxNumber: "+82-2-318-1706",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7th Floor, 9 Chungmu-ro, Jung-gu",
    addressLocality: "Seoul",
    postalCode: "04554",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@pillos.co.kr",
    telephone: "+82-2-318-1703",
    areaServed: ["KR", "JP", "CN", "Global"],
    availableLanguage: ["en", "ko"],
  },
  knowsAbout: [
    "Ocean shipping",
    "Maritime transport",
    "Dry bulk shipping",
    "Bulk carrier operations",
    "Gas carrier (LPG) shipping",
    "Chemical tanker shipping",
    "Chemical and petrochemical shipping",
    "Hydrochloric acid transport",
    "Coal, iron ore and grain transport",
  ],
  sameAs: ["https://www.linkedin.com/company/pillos"],
  employee: { "@id": `${siteUrl}/#ceo` },
  naics: "483111",
  areaServed: ["KR", "JP", "CN", "AU", "Southeast Asia", "Global"],
};

// Same CEO and office as Pillos; searches for "필로스해운" should resolve here.
const affiliateSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#pillos-shipping`,
  name: "Pillos Shipping Co., Ltd.",
  alternateName: ["㈜필로스해운", "주식회사 필로스해운", "필로스해운"],
  url: siteUrl,
  foundingDate: "2005",
  address: orgSchema.address,
  employee: { "@id": `${siteUrl}/#ceo` },
};

const ceoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#ceo`,
  name: "In Ewon Rhee",
  alternateName: "이인원",
  jobTitle: "CEO",
  worksFor: [{ "@id": `${siteUrl}/#organization` }, { "@id": `${siteUrl}/#pillos-shipping` }],
  url: `${siteUrl}/about`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pillos",
  alternateName: "필로스",
  url: siteUrl,
  inLanguage: ["en", "ko"],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Decided in src/proxy.ts (saved cookie, else IP country). Falls back to
  // English when the proxy did not run (e.g. static export tooling).
  const initialLang: Lang = (await headers()).get(LANG_HEADER) === "ko" ? "ko" : "en";
  return (
    <html
      lang={initialLang}
      className={`${dmSerif.variable} ${inter.variable} ${notoSansKr.variable} ${notoSerifKr.variable} h-full antialiased`}
    >
      <head>
        {/* Organization structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, affiliateSchema, ceoSchema, websiteSchema]) }}
        />
        {/* Pretendard - Korean web-optimized variable font (replaces Malgun on lang=ko) */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full bg-[#f8f6f3] text-[#1a1a1a]">
        <a href="#main" className="skip-link">Skip to content</a>
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
