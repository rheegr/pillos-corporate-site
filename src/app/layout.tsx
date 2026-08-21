import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

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

const siteUrl = "https://pillos.co.kr";
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
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "ko-KR": "/",
    },
  },
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
  alternateName: ["㈜필로스", "필로스", "Pillos", "Pillos Shipping", "Pillos Co., Ltd."],
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
  naics: "483111",
  areaServed: ["KR", "JP", "CN", "AU", "Southeast Asia", "Global"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pillos",
  alternateName: "필로스",
  url: siteUrl,
  inLanguage: ["en", "ko"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${notoSansKr.variable} ${notoSerifKr.variable} h-full antialiased`}
    >
      <head>
        {/* Organization structured data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
