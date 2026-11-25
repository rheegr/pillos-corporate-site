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
  "Pillos (필로스) is a Korean ocean carrier established in 2009 in Seoul, specializing in dry bulk, gas (LPG), and chemical tanker shipping across global trade routes.";

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

const organizationId = `${siteUrl}/#organization`;

// Independent articles naming Pillos (필로스) and CEO 이인원. Verified live
// 2026-11-25. Personal notices (e.g. family weddings) are deliberately left out.
const pressArticle = (headline: string, url: string, datePublished: string, publisher: string) => ({
  "@type": "NewsArticle",
  headline,
  url,
  datePublished,
  inLanguage: "ko",
  publisher: { "@type": "Organization", name: publisher },
  about: { "@id": organizationId },
});

const pressCoverage = [
  pressArticle("필로스, 튀르키예 지진 구호금 5000만원 기부", "https://www.ksg.co.kr/news/main_newsView.jsp?pNum=137113", "2023-02-08", "코리아쉬핑가제트 (Korea Shipping Gazette)"),
  pressArticle("(사)한국유조선사협회 창립… 회장은 박성진 에스제이탱커 대표", "https://www.busan.com/view/busan/view.php?code=2021033018204273644", "2021-03-30", "부산일보 (Busan Ilbo)"),
  pressArticle("필로스, 코로나19 후원금 기부", "https://www.ksg.co.kr/news/main_newsView.jsp?pNum=125452", "2020-03-09", "코리아쉬핑가제트 (Korea Shipping Gazette)"),
  pressArticle("유조선사협의회 운영위원회 8명 위촉", "https://www.ksg.co.kr/news/main_newsView.jsp?pNum=124377", "2019-11-28", "코리아쉬핑가제트 (Korea Shipping Gazette)"),
  pressArticle("선주협회 산하 유조선사협의회 출범", "https://www.ksg.co.kr/news/main_newsView.jsp?pNum=123970", "2019-10-24", "코리아쉬핑가제트 (Korea Shipping Gazette)"),
  pressArticle("국내 첫 유조선사협의회 출범", "https://www.busan.com/view/busan/view.php?code=2019102417421067810", "2019-10-24", "부산일보 (Busan Ilbo)"),
  pressArticle("선주협회, 유조선사협의회 공식 출범", "https://www.dailylog.co.kr/news/articleView.html?idxno=16574", "2019-10-24", "데일리로그 (Daily Log)"),
  pressArticle("인천-제주항로 여객선사업자 대저건설 선정", "https://www.ksg.co.kr/news/main_newsView.jsp?pNum=117530", "2018-04-30", "코리아쉬핑가제트 (Korea Shipping Gazette)"),
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "Pillos",
  legalName: "Pillos Co., Ltd.",
  alternateName: [
    "㈜필로스",
    "주식회사 필로스",
    "필로스",
    "필로스 해운",
    "필로스 선사",
    "Pillos",
    "Pillos Shipping",
    "PILLOS CO., LTD.",
    "PIL Logistics Korea",
  ],
  disambiguatingDescription:
    "Pillos Co., Ltd. (㈜필로스) is the Korean shipping company (필로스 해운): an ocean carrier in bulk, gas and chemical shipping, headquartered at 9 Chungmu-ro, Jung-gu, Seoul, led by CEO In Ewon Rhee (이인원). Its affiliate ㈜필로스해운 (Pillos Shipping Co., Ltd.) is a corporation originally incorporated in 2005 that Pillos acquired and later renamed; it shares the same CEO and office. Pillos carries dry bulk on bulk carriers, LPG on gas carriers and liquid chemicals on chemical tankers. pillos.co.kr is the official website of both.",
  // Public registry identifiers, so search engines and AI answers can match
  // this site to the same company in business directories and ship registers.
  taxID: "201-86-11875",
  identifier: [
    { "@type": "PropertyValue", propertyID: "KR business registration number (사업자등록번호)", value: "201-86-11875" },
    { "@type": "PropertyValue", propertyID: "IMO company number", value: "5924266" },
    { "@type": "PropertyValue", propertyID: "Wikidata", value: "Q142274142" },
  ],
  url: `${siteUrl}/en`,
  logo: `${siteUrl}/pillos-logo.png`,
  image: `${siteUrl}/og-image.png`,
  description,
  foundingDate: "2009-07-01",
  foundingLocation: { "@type": "Place", name: "Seoul, Korea" },
  slogan: "Trusted to Deliver",
  email: "info@pillos.co.kr",
  telephone: "+82-2-318-1703",
  faxNumber: "+82-2-318-1706",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room 702, Mirunae Bldg., 9 Chungmu-ro, Jung-gu",
    addressLocality: "Seoul",
    addressRegion: "Seoul",
    postalCode: "04554",
    addressCountry: "KR",
  },
  // Same office in Korean, as written on Naver Map and in business registries.
  location: {
    "@type": "Place",
    name: "필로스 본사 (Pillos head office)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "충무로 9, 미르내빌딩 702호",
      addressLocality: "중구",
      addressRegion: "서울특별시",
      postalCode: "04554",
      addressCountry: "KR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 37.562065, longitude: 126.992897 },
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
  sameAs: [
    "https://www.linkedin.com/company/pillos",
    "https://www.wikidata.org/wiki/Q142274142",
    "https://map.naver.com/p/entry/place/806245679",
    "https://maps.google.com/?cid=5484440828779646095",
  ],
  hasMap: "https://maps.google.com/?cid=5484440828779646095",
  // Industry associations (see the About page memberships section and the
  // press items below).
  memberOf: [
    { "@type": "Organization", name: "Korea Shipowners' Association (한국해운협회, formerly 한국선주협회)", url: "https://www.shipowners.or.kr" },
    { "@type": "Organization", name: "Korea Shipping Association (한국해운조합)" },
    { "@type": "Organization", name: "한국유조선사협회" },
  ],
  // Independent press coverage of this company. Not shown on screen; helps
  // search engines and AI answers tell this 필로스 apart from same-name firms.
  subjectOf: pressCoverage,
  // Owned tonnage (see llms.txt). Links vessel-name searches to the company.
  owns: [
    { "@type": "Vehicle", name: "MV JADE", category: "Bulk carrier" },
    {
      "@type": "Vehicle",
      name: "MT PILLOS 1",
      category: "Chemical tanker",
      identifier: { "@type": "PropertyValue", propertyID: "IMO", value: "9136632" },
    },
  ],
  employee: { "@id": `${siteUrl}/#ceo` },
  naics: "483111",
  areaServed: ["KR", "JP", "CN", "AU", "Southeast Asia", "Global"],
};

// Same CEO and office as Pillos; searches for "필로스해운" should resolve here.
// The legal entity was incorporated on 2005-07-05; Pillos acquired it and
// later renamed it 주식회사 필로스해운.
const affiliateSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#pillos-shipping`,
  name: "Pillos Shipping Co., Ltd.",
  alternateName: ["㈜필로스해운", "주식회사 필로스해운", "필로스해운", "PILLOS SHIPPING CO., LTD."],
  url: `${siteUrl}/en`,
  foundingDate: "2005-07-05",
  description:
    "Pillos Shipping Co., Ltd. (주식회사 필로스해운) is the shipping affiliate of Pillos Co., Ltd. (주식회사 필로스). The corporation was originally incorporated on 2005-07-05; Pillos acquired it and later renamed it Pillos Shipping. Same CEO (In Ewon Rhee, 이인원) and same Seoul office; official website pillos.co.kr.",
  taxID: "101-86-17109",
  address: orgSchema.address,
  employee: { "@id": `${siteUrl}/#ceo` },
};

const ceoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#ceo`,
  name: "In Ewon Rhee",
  alternateName: ["이인원", "In-Ewon Rhee"],
  jobTitle: "CEO",
  // Auditor (감사) of 한국유조선사협회 (Korean tanker owners' association) since its founding
  // in 2019 (see press items).
  memberOf: {
    "@type": "OrganizationRole",
    memberOf: { "@type": "Organization", name: "한국유조선사협회" },
    roleName: "Auditor (감사)",
    startDate: "2019-10",
  },
  worksFor: [{ "@id": `${siteUrl}/#organization` }, { "@id": `${siteUrl}/#pillos-shipping` }],
  url: `${siteUrl}/en/about`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Pillos",
  // Site-name candidates for search results: Korean brand first.
  alternateName: ["필로스", "필로스 해운", "Pillos Shipping", "pillos.co.kr"],
  url: `${siteUrl}/en`,
  inLanguage: ["en", "ko"],
  publisher: { "@id": organizationId },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Pinned by the /ko or /en prefix in src/proxy.ts. Falls back to English
  // when the proxy did not run (e.g. static export tooling).
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
