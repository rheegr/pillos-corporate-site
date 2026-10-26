import type { Metadata } from "next";
import { headers } from "next/headers";
import { LANG_HEADER } from "@/data/lang";
import { siteUrl } from "@/data/site";

// Per-page <title>, description, canonical and share card, in the language the
// page body is rendered in (src/proxy.ts decides it per request). Korean
// visitors and Naver's crawler get a Korean body, so they must also get a
// Korean title; a single English title over a Korean body splits the signal.
// Every page carries its own canonical: inheriting the layout's "/" told
// search engines that /about, /services etc. were duplicates of the homepage.

type Copy = { title: string; description: string };
type PageKey = "home" | "about" | "services" | "hse" | "contact" | "privacy" | "terms" | "cookies";

const pages: Record<PageKey, { path: string; en: Copy; ko: Copy }> = {
  home: {
    path: "/",
    en: {
      title: "Pillos Co., Ltd. (Pillos Shipping) | Bulk, Gas & Chemical - Trusted to Deliver",
      description:
        "Pillos Co., Ltd. (Pillos Shipping, 필로스) is a Korean ocean carrier established in 2009, specializing in dry bulk, gas (LPG), and chemical tanker shipping across global trade routes. A trusted Korea-based ocean shipping company — trusted to deliver.",
    },
    ko: {
      title: "필로스(Pillos) | 벌크, 가스, 케미컬 해운 - Trusted to Deliver",
      description:
        "필로스(㈜필로스, Pillos)는 2009년 설립된 외항 해운선사입니다. 석탄, 철광석, 곡물, 철강 같은 건화물과 원자재, LPG, 케미컬을 벌크선, 가스선, 케미컬선으로 운송합니다. 대표이사 이인원.",
    },
  },
  about: {
    path: "/about",
    en: {
      title: "About Pillos | Korean Ocean Carrier Since 2009",
      description:
        "Pillos is a Korean ocean carrier established in 2009, moving bulk, gas, and chemical cargo across global routes with more than 15 years of trusted operations.",
    },
    ko: {
      title: "회사소개 | 필로스 이인원 대표, 2009년 설립 해운선사",
      description:
        "필로스는 이인원 대표이사가 이끄는 외항 해운선사로, 2009년 설립 이후 원자재와 에너지, 화학제품을 운송해 왔습니다. 계열사 ㈜필로스해운과 함께 서울 중구 충무로 9에 있습니다.",
    },
  },
  services: {
    path: "/services",
    en: {
      title: "Bulk, Gas & Chemical Shipping Services | Pillos",
      description:
        "Pillos shipping services — dry bulk carriers, gas (LPG) carriers, and chemical tankers carrying coal, ore, grain, olefins, and acids across Korea, Japan and global routes.",
    },
    ko: {
      title: "사업영역 | 건화물, 원자재 벌크 운송, LPG, 케미컬 | 필로스",
      description:
        "필로스는 석탄, 철광석, 곡물, 철강을 싣는 벌크 운송, LPG와 올레핀을 싣는 가스 운송, 벤젠, 베이스오일, 염산을 싣는 케미컬 운송을 한국, 일본, 중국과 글로벌 항로에서 수행합니다.",
    },
  },
  hse: {
    path: "/hse",
    en: {
      title: "HSE — Health, Safety & Environment | Pillos",
      description:
        "Health, Safety and Environment at Pillos — a goal of zero harm to people, the environment, and the cargo we carry, operated in full compliance with the ISM Code.",
    },
    ko: {
      title: "보건, 안전, 환경(HSE) | 필로스",
      description:
        "필로스는 ISM 코드를 비롯한 국내외 관련 법규를 준수해 선박을 운항하고, 사람과 환경, 화물의 안전을 최우선 가치로 두고 HSE 체계를 관리합니다.",
    },
  },
  contact: {
    path: "/contact",
    en: {
      title: "Contact Pillos | Korean Ocean Carrier, Seoul",
      description:
        "Contact Pillos, a Korean ocean carrier based in Jung-gu, Seoul. Enquiries from shippers, charterers, and partners are welcome — info@pillos.co.kr, +82-2-318-1703.",
    },
    ko: {
      title: "해상운송, 용선 문의 | 필로스 해운선사 (서울 중구)",
      description:
        "건화물, 원자재, 가스, 케미컬 해상운송과 용선 문의를 받습니다. 이메일 info@pillos.co.kr, 전화 02-318-1703, 주소 서울특별시 중구 충무로 9, 7층.",
    },
  },
  privacy: {
    path: "/privacy",
    en: { title: "Privacy | Pillos", description: "Privacy policy of Pillos Co., Ltd." },
    ko: { title: "개인정보처리방침 | 필로스", description: "주식회사 필로스의 개인정보처리방침입니다." },
  },
  terms: {
    path: "/terms",
    en: { title: "Terms | Pillos", description: "Terms of use of the Pillos Co., Ltd. website." },
    ko: { title: "이용약관 | 필로스", description: "주식회사 필로스 웹사이트 이용약관입니다." },
  },
  cookies: {
    path: "/cookies",
    en: { title: "Cookies | Pillos", description: "How the Pillos website uses cookies." },
    ko: { title: "쿠키 정책 | 필로스", description: "필로스 웹사이트의 쿠키 사용 방침입니다." },
  },
};

export async function pageMetadata(key: PageKey): Promise<Metadata> {
  const lang = (await headers()).get(LANG_HEADER) === "ko" ? "ko" : "en";
  const page = pages[key];
  const { title, description } = page[lang];
  const langPath = (l: string) => (page.path === "/" ? `/${l}` : `/${l}${page.path}`);
  const url = `${siteUrl}${langPath(lang)}`;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: langPath(lang),
      languages: { ko: langPath("ko"), en: langPath("en"), "x-default": page.path },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: lang === "ko" ? "필로스" : "Pillos",
      type: "website",
      locale: lang === "ko" ? "ko_KR" : "en_GB",
      alternateLocale: [lang === "ko" ? "en_GB" : "ko_KR"],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pillos - Trusted to Deliver" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
