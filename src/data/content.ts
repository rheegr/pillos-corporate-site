export type Bi = { en: string; ko: string };

export const nav: { id: string; href: string; label: Bi }[] = [
  { id: "home", href: "/", label: { en: "Home", ko: "홈" } },
  { id: "about", href: "/about", label: { en: "About", ko: "회사소개" } },
  { id: "services", href: "/services", label: { en: "Services", ko: "사업영역" } },
  { id: "hse", href: "/hse", label: { en: "HSE", ko: "HSE" } },
  { id: "contact", href: "/contact", label: { en: "Contact", ko: "문의하기" } },
];

export const ctaLabel: Bi = { en: "Contact", ko: "문의하기" };

// Slogan - used in hero, footer, metadata
export const slogan: Bi = {
  en: "Trusted to Deliver",
  ko: "확실한 운송, 그 이상의 신뢰",
};

export const hero = {
  overline: {
    en: "OCEAN SHIPPING, KOREA",
    ko: "대한민국 해운",
  },
  titleLine1: { en: "Trusted to", ko: "확실한 운송," },
  titleLine2: { en: "Deliver", ko: "그 이상의 신뢰" },
  sub: {
    en: "Trusted partner in global ocean carriage since 2009, specializing in bulk, gas, and chemical sectors",
    ko: "필로스는 오랜 신뢰와 경험을 바탕으로 고객사와 함께 성장해 온 벌크, 가스, 케미컬 전문 해상운송선사입니다. 2009년부터 산업의 원자재와 에너지, 화학제품을 세계 각지로 운송해왔습니다",
  },
  primaryBtn: { en: "About us", ko: "회사소개" },
  metrics: [
    {
      value: "Since 2009",
      label: { en: "Carrying for global industry", ko: "산업의 성장을 함께해온 항해" },
    },
  ] as { value: string; label: Bi }[],
};

export const trustedBy = {
  label: { en: "TRUSTED ACROSS BORDERS", ko: "국경을 넘어 검증된 신뢰" },
  sub: {
    en: "Long-standing relationships with shippers and counterparts across global trade routes",
    ko: "전 세계 주요 항로에서 국내외 화주 및 협력사와 오랜 신뢰 관계를 이어가고 있습니다",
  },
  categories: [
    {
      en: "Steelmakers & Industrial Groups",
      ko: "철강 및 산업 기업",
      detail: {
        en: "Coking coal, iron ore, and mill cargoes",
        ko: "원료탄, 철광석 등 제철 원자재",
      },
    },
    {
      en: "Petrochemical & Refining Companies",
      ko: "석유화학 및 정유 기업",
      detail: {
        en: "Olefins, base chemicals, and feedstocks",
        ko: "석유화학 원료 및 기초 화학제품",
      },
    },
    {
      en: "Power & Utility Companies",
      ko: "발전 및 에너지 기업",
      detail: {
        en: "Thermal coal and power-plant fuels",
        ko: "발전용 석탄 등 에너지 연료",
      },
    },
    {
      en: "Global Trading Companies",
      ko: "글로벌 트레이딩 기업",
      detail: {
        en: "Grain, minerals, and dry bulk cargoes",
        ko: "곡물, 광물 등 다양한 건화물",
      },
    },
    {
      en: "Integrated Logistics Companies",
      ko: "종합 물류 기업",
      detail: {
        en: "Steel products, plant, and industrial cargoes",
        ko: "철강 제품, 설비 등 산업 화물",
      },
    },
  ],
};

export const about = {
  bigNumber: "2009",
  bigCaption: { en: "Since", ko: "설립년도" },
  heading: {
    en: "Company Overview",
    ko: "회사소개",
  },
  paragraphs: [
    {
      en: "Pillos is a Korean ocean carrier established in 2009. Across bulk, gas, and chemical sectors, we move the essential cargo industry depends on - raw materials, energy, and chemical products. More than fifteen years of operational experience and a global network are our greatest assets, underpinning everything we do. We are not simply a carrier; we are a carrier whose commitments hold.",
      ko: "필로스는 2009년 설립 이래 원자재, 에너지, 화학 제품 등 산업의 기반이 되는 핵심 화물을 안정적으로 수송해 왔습니다. 15년이 넘는 운항 경험과 글로벌 네트워크는 필로스를 지탱하는 가장 큰 자산이자 기반입니다. 우리는 단순히 화물을 나르는 선사를 넘어, 고객사와 맺은 약속을 끝까지 책임지는 해운사입니다.",
    },
    {
      en: "The principle we live by is clear: trust comes before immediate gains, and commitments must be held even tighter during difficult times. Through the turbulence of the pandemic years, despite rising costs and market disruptions, we honoured every contract exactly as agreed. Having weathered those challenging times, our principles have proven right, and the trust we built remains our strongest competitive advantage in maintaining long-standing relationships with our partners worldwide.",
      ko: "우리가 지켜온 원칙은 분명합니다. 신뢰는 눈앞의 이익보다 앞서야 하며, 어려운 시기일수록 약속은 더욱 무겁게 지켜져야 한다는 것입니다. 팬데믹으로 글로벌 물류 환경이 급변하고 큰 비용 부담이 발생하던 시기에도 모든 계약을 조건 그대로 성실히 이행해 냈습니다. 위기 속에서 묵묵히 증명해 온 이 신뢰야말로 오늘날 국내외 화주들과 오랜 인연을 이어갈 수 있는 필로스의 가장 강력한 경쟁력입니다.",
    },
  ] as Bi[],
};

export const fromTheBridge = {
  overline: { en: "CEO'S GREETING", ko: "대표이사 인사말" },
  attribution: {
    en: "In Ewon Rhee, CEO of Pillos",
    ko: "이인원, ㈜필로스 대표이사",
  },
  quote: {
    en: "Carriage alone is not enough. For it to be true carriage, it must be defined by safety and trust.",
    ko: "진정한 운송은 단순히 화물만을 옮기는 일이 아닙니다. 그 여정의 시작과 끝에는 반드시 '안전'과 '신뢰'가 함께해야 합니다.",
  },
  greeting: [
    {
      en: "Since 2009, Pillos has operated on a single principle: trust is the only true foundation on which an ocean carrier can stand. Over the past 15 years, we have partnered with more than a hundred global clients, consistently honouring our commitments through every market cycle.",
      ko: "필로스는 2009년 창립 이래, 해운선사의 유일한 기반은 오직 '신뢰'뿐이라는 믿음으로 항해해 왔습니다. 지난 15년 동안 100여 개가 넘는 글로벌 화주 및 협력사와 인연을 맺어왔고, 어려운 시기마다 약속을 무겁게 지켜내며 그 믿음을 증명해 왔습니다.",
    },
    {
      en: "Above all, we consider ourselves the stewards of the hard-earned trust our partners have reposed in us. Thank you to everyone who has shared our journey, and we look forward to welcoming the next voyage with you with the highest sense of responsibility.",
      ko: "우리를 믿고 화물을 맡겨주신 파트너들이 보내주신 소중한 신뢰를 지켜내는 것이 대표이사로서 저의 가장 큰 책무입니다. 필로스를 성원해 주시는 모든 분께 깊이 감사드리며, 앞으로의 새로운 항해도 최고의 책임감으로 함께하겠습니다.",
    },
  ] as Bi[],
  signature: {
    en: "In Ewon Rhee, CEO of Pillos",
    ko: "이인원, ㈜필로스 대표이사",
  },
};

export const services = {
  overline: { en: "WHAT WE MOVE", ko: "사업 분야" },
  heading: {
    en: "Three Cargo Classes",
    ko: "세 가지 화물",
  },
  headingItalic: {
    en: "One Discipline",
    ko: "하나의 기준",
  },
  sub: {
    en: "Dry bulk, gas, and chemical - every cargo held to one standard of care",
    ko: "벌크, 가스, 케미컬. 모든 화물에 동일한 운항 기준을 적용합니다",
  },
  cards: [
    {
      number: "01",
      title: { en: "Bulk Shipping", ko: "벌크 운송" },
      kr: { en: "벌크 운송", ko: "Bulk" },
      body: {
        en: "Steel coil, coal, grain, and minerals carried for Korea's leading steel, energy, and logistics groups across global routes.",
        ko: "국내 주요 철강, 에너지, 물류 기업의 원자재를 글로벌 항로로 운송합니다",
      },
      tag: { en: "Global Trade Routes", ko: "글로벌 항로" },
      accent: false,
    },
    {
      number: "02",
      title: { en: "Gas Shipping", ko: "가스 운송" },
      kr: { en: "가스 운송", ko: "Gas" },
      body: {
        en: "Olefin gases and LPG - global routes built on Japanese trading-house and petrochemical partnerships.",
        ko: "올레핀 가스, LPG. 일본 종합상사와 석유화학 기업과의 오랜 파트너십으로 글로벌 항로를 운영합니다",
      },
      tag: { en: "Intra-Asia & Beyond", ko: "아시아, 글로벌 항로" },
      accent: false,
    },
    {
      number: "03",
      title: { en: "Chemical Shipping", ko: "케미컬 운송" },
      kr: { en: "화학물질 운송", ko: "Chemical" },
      body: {
        en: "Hydrochloric acid from the port of Yeosu under a long-standing petrochemical partnership. More than a decade incident-free.",
        ko: "여수항에서 국내 석유화학 기업과의 장기 파트너십 아래 염산을 운송합니다. 10년 이상 무사고 운항을 이어오고 있습니다",
      },
      tag: { en: "Hydrochloric Acid · Yeosu", ko: "염산, 여수" },
      accent: true,
    },
  ],
};

export const trackRecord = {
  overline: { en: "COMPANY HISTORY", ko: "회사 연혁" },
  heading: {
    en: "A Heritage Carried, Year by Year",
    ko: "한 해 한 해 쌓아온 시간",
  },
  sub: {
    en: "Company milestones since 2009",
    ko: "2009년 이후 회사의 발자취",
  },
  entries: [
    {
      year: "2026 - Now",
      milestone: true,
      desc: {
        en: "Carrying for global industry, every voyage",
        ko: "글로벌 산업 물류의 든든한 파트너로 성장",
      },
    },
    {
      year: "2020",
      milestone: true,
      desc: {
        en: "Gas shipping commenced. All commitments honoured through the pandemic",
        ko: "가스 운송 사업 진출, 팬데믹 기간에도 모든 계약 이행",
      },
    },
    {
      year: "2018",
      milestone: true,
      desc: {
        en: "Admitted to the Korea Shipowners' Association",
        ko: "한국선주협회 정회원 가입",
      },
    },
    {
      year: "2016",
      milestone: true,
      desc: {
        en: "Admitted to the Korea Shipping Association",
        ko: "한국해운조합 정회원 가입",
      },
    },
    {
      year: "2014",
      milestone: false,
      desc: {
        en: "Annual bulk shipments surpassed one million metric tonnes",
        ko: "연간 벌크 운송 실적 100만 톤 달성",
      },
    },
    {
      year: "2013",
      milestone: false,
      desc: {
        en: "First long-term coal transportation partnership with a major Korean industrial group",
        ko: "국내 주요 산업체와 첫 장기 석탄 운송 계약 체결",
      },
    },
    {
      year: "2009",
      milestone: false,
      desc: {
        en: "Pillos founded in Seoul",
        ko: "서울에서 ㈜필로스 설립",
      },
    },
  ] as { year: string; milestone: boolean; desc: Bi }[],
};

export const cta = {
  leftEyebrow: { en: "GET IN TOUCH", ko: "문의" },
  leftHeading: {
    en: "Looking for a Reliable Shipping Partner?",
    ko: "신뢰할 수 있는 해운 파트너를 찾고 계십니까?",
  },
  leftSub: {
    en: "We welcome enquiries from shippers, partners, and industry counterparts",
    ko: "화주, 파트너, 업계 관계자 여러분의 문의를 환영합니다",
  },
  rightEyebrow: { en: "OUR DOOR IS OPEN", ko: "언제든 연락 주십시오" },
  rightHeading: { en: "Send an Enquiry", ko: "문의하기" },
  email: "info@pillos.co.kr",
  phone: "+82 2 318 1703",
};

export const contact = {
  overline: { en: "HEAD OFFICE", ko: "본사 위치" },
  heading: { en: "Seoul, Korea", ko: "대한민국 서울" },
  sub: {
    en: "Our office is in Jung-gu, Seoul.",
    ko: "필로스 본사는 서울 중구 충무로에 있습니다.",
  },
  rows: [
    {
      label: { en: "Head Office", ko: "본사" },
      value: {
        en: "7th Floor, 9 Chungmu-ro, Jung-gu, Seoul, Korea, 04554",
        ko: "서울특별시 중구 충무로 9, 7층, 04554",
      },
    },
    { label: { en: "Tel", ko: "전화" }, value: { en: "+82-2-318-1703", ko: "+82-2-318-1703" } },
    { label: { en: "Fax", ko: "팩스" }, value: { en: "+82-2-318-1706", ko: "+82-2-318-1706" } },
    { label: { en: "Email", ko: "이메일" }, value: { en: "info@pillos.co.kr", ko: "info@pillos.co.kr" } },
  ] as { label: Bi; value: Bi }[],
  card: {
    title: "Pillos Co., Ltd.",
    rows: [
      { label: { en: "CEO", ko: "대표이사" }, value: { en: "In Ewon Rhee", ko: "이인원" } },
      { label: { en: "Established", ko: "설립" }, value: { en: "2009", ko: "2009" } },
      { label: { en: "Head Office", ko: "본사" }, value: { en: "Seoul, Korea", ko: "서울" } },
    ] as { label: Bi; value: Bi }[],
    memberships: [
      "Korea Shipowners' Association",
      "Korea Shipping Association",
    ],
  },
};

// ---------- Page heroes (sub-pages) ----------

export const pageHeroes = {
  about: {
    overline: { en: "ABOUT", ko: "회사소개" },
    heading: {
      en: "Specialist Ocean Carrier Moving Industrial Cargo Across Global Routes Since 2009",
      ko: "2009년부터 글로벌 항로를 무대로 산업 원자재를 수송해 온 전문 해상운송선사",
    },
    sub: {
      en: "Built on long-standing partnerships, kept by the quiet discipline our work demands",
      ko: "고객사와의 약속을 최우선으로, 철저한 운항 원칙을 지켜갑니다",
    },
  },
  services: {
    overline: { en: "SERVICES", ko: "사업영역" },
    heading: {
      en: "Every Cargo, One Standard of Trust",
      ko: "화물의 종류와 상관없이 철저한 기준으로 운송합니다",
    },
    sub: {
      en: "Bulk, gas, and chemical - each operated with the seasoned hand its cargo demands",
      ko: "화물의 특성과 운송 조건에 맞춘 전문적인 해상 운송 서비스를 제공합니다",
    },
  },
  contact: {
    overline: { en: "CONTACT", ko: "CONTACT" },
    heading: {
      en: "Get in Touch",
      ko: "문의하기",
    },
    sub: {
      en: "We welcome enquiries from shippers, partners, and industry counterparts. Please send us an email to info@pillos.co.kr or leave a message below",
      ko: "문의사항은 이메일(info@pillos.co.kr) 또는 아래 양식으로 편하게 연락 주세요",
    },
  },
  hse: {
    overline: { en: "HSE", ko: "HSE" },
    heading: {
      en: "Health, Safety and Environment",
      ko: "보건, 안전, 환경",
    },
    headingNote: "Health, Safety and Environment",
    sub: {
      en: "Zero harm to people, the environment, and the cargo we carry - a goal we hold to in everything we do",
      ko: "저희가 운송하는 화물은 물론, 함께하는 사람과 환경의 안전을 최우선 가치로 두고 모든 운항 과정을 철저히 관리합니다",
    },
  },
};

// ---------- Home page teasers ----------

export const aboutTeaser = {
  overline: { en: "ABOUT", ko: "회사소개" },
  heading: {
    en: "Trusted Since 2009, Voyage After Voyage",
    ko: "2009년부터 쌓아온 신뢰, 매 항해로 증명합니다",
  },
  paragraph: {
    en: "Pillos is a Korean ocean carrier established in 2009. Across bulk, gas, and chemical sectors, we have built long-standing relationships with shippers, charterers, and trading partners - at home and abroad.",
    ko: "필로스는 2009년에 설립된 벌크, 가스, 케미컬 전문 해상운송선사입니다. 전 세계 주요 항로에서 국내외 화주 및 협력사들과 오랜 신뢰 관계를 묵묵히 이어오고 있습니다.",
  },
  readMore: { en: "Read more", ko: "자세히 보기" },
};

export const servicesTeaser = {
  overline: { en: "SERVICES", ko: "사업영역" },
  heading: {
    en: "Every Cargo, One Standard of Trust",
    ko: "벌크부터 가스, 케미컬까지, 전 세계를 잇는 글로벌 운송",
  },
  viewAll: { en: "View all services", ko: "사업영역\n전체 보기" },
  cards: [
    {
      number: "01",
      anchor: "bulk",
      title: { en: "Bulk Shipping", ko: "벌크 운송" },
      line: {
        en: "Coal, iron ore, grain, and steel - the raw materials industry runs on.",
        ko: "석탄, 철광석, 곡물, 철강 등 산업 원자재 운송",
      },
      accent: false,
    },
    {
      number: "02",
      anchor: "gas",
      title: { en: "Gas Shipping", ko: "가스 운송" },
      line: {
        en: "LPG and olefin gases, carried on specialised, certified vessels.",
        ko: "LPG, 올레핀 등 가스 화물 전용 운송",
      },
      accent: false,
    },
    {
      number: "03",
      anchor: "chemical",
      title: { en: "Chemical Shipping", ko: "케미컬 운송" },
      line: {
        en: "Benzene, base oil, hydrochloric acid, and other liquid chemical cargoes.",
        ko: "벤젠, 베이스오일, 염산 등 케미컬 화물 운송",
      },
      accent: true,
    },
  ],
};

// ---------- Services page - long-form tab content ----------

export const servicesTabs = {
  intro: {
    en: "Select a sector to explore in depth",
    ko: "사업 분야별 상세 내용",
  },
  tabs: [
    {
      id: "bulk",
      label: { en: "Bulk Shipping", ko: "벌크 운송" },
      shortLabel: { en: "Bulk", ko: "벌크" },
      accent: false,
      image: "/ship-jade-side.jpg",
      overline: { en: "01 - BULK SHIPPING", ko: "01 - 벌크 운송" },
      heading: {
        en: "Powering Industry Across the Seas",
        ko: "해상 운송으로 산업의 기반을 연결합니다",
      },
      paragraphs: [
        {
          en: "Pillos runs dry bulk carriers from Handysize and Supramax up to Panamax and Kamsarmax. Trading in dry bulk since 2010, we utilize our own tonnage alongside chartered vessels to move critical raw materials including coal, iron ore, steel products, cement, and grain.",
          ko: "필로스는 핸디사이즈와 수프라막스부터 파나막스, 캄사르막스에 이르는 다양한 벌크 선형을 운항합니다. 2010년부터 사선과 용선을 효율적으로 운용하며 석탄, 코크스, 철광석, 광물, 석회석, 철강재, 시멘트, 곡물, 보크사이트 등 도시와 산업 기반이 되는 원자재를 안정적으로 수송해 왔습니다.",
        },
        {
          en: "Our operations span key global routes connecting Korea, China, Japan, Indonesia, Vietnam, Australia, Russia, and the South Americas, as well as vital intra-Asia lanes. Successfully handling substantial cargo volumes year after year, we serve as an integrated part of the value chains for major steelmakers, power utilities, and trading houses.",
          ko: "저희는 한국, 일본, 중국, 인도네시아, 베트남, 호주, 러시아, 남미 등 세계 각지를 연결하는 주요 항로를 폭넓게 누비고 있습니다. 매년 대규모 화물을 안정적으로 처리하며, 이제는 국내외 철강사, 발전사, 종합상사 가치사슬의 핵심 축으로 자리 잡고 있습니다.",
        },
      ],
    },
    {
      id: "gas",
      label: { en: "Gas Shipping", ko: "가스 운송" },
      shortLabel: { en: "Gas", ko: "가스" },
      accent: false,
      image: "/ship-chemical.jpg",
      overline: { en: "02 - GAS SHIPPING", ko: "02 - 가스 운송" },
      heading: {
        en: "Energy Carried with Care",
        ko: "안전을 최우선으로 하는 가스 운송",
      },
      paragraphs: [
        {
          en: "Liquefied petroleum gas, olefin gases (ethylene, propylene, butadiene), and vinyl chloride monomer travel under pressure, demanding purpose-built vessels and an uncompromising approach to safety. Pillos maintains a specialized operational framework optimized for handling these hazardous gas cargoes safely and efficiently.",
          ko: "LPG와 에틸렌, 프로필렌, 부타디엔 등 올레핀 계열 가스, 그리고 VCM(염화비닐단량체)은 가압 상태로 수송되는 고난도 화물입니다. 가스 전용 선박과 타협 없는 안전 기준이 필수적인 만큼, 필로스는 이러한 특수 가스 화물을 안전하게 수송할 수 있는 시스템을 구축하고 있습니다.",
        },
        {
          en: "Spanning key maritime routes from the Middle East and Southeast Asia to Korea, China, and Japan, we leverage our proven gas-carrier expertise and global network to provide reliable transportation solutions for international trading houses and petrochemical producers.",
          ko: "저희는 중동 및 동남아에서 한국, 중국, 일본을 잇는 핵심 항로를 무대로, 검증된 가스선 운항 전문성과 글로벌 네트워크를 통해 글로벌 석유화학 기업과 종합상사들에 차별화된 수송 서비스를 제공합니다.",
        },
      ],
    },
    {
      id: "chemical",
      label: { en: "Chemical Shipping", ko: "케미컬 운송" },
      shortLabel: { en: "Chemical", ko: "케미컬" },
      accent: true,
      image: "/ship-as-sovereign.jpg",
      imagePosition: "center bottom",
      overline: { en: "03 - CHEMICAL SHIPPING", ko: "03 - 케미컬 운송" },
      heading: {
        en: "Demanding Cargo, Carried with Care",
        ko: "안전과 정밀함이 요구되는 케미컬 운송",
      },
      paragraphs: [
        {
          en: "Pillos maintains a robust portfolio in specialized liquid transportation, carrying benzene, base oils, and hydrochloric acid under long-standing petrochemical partnerships. Operating dedicated chemical tankers across Southeast Asia, India, and domestic routes, we handle every voyage under the strictest safety procedures.",
          ko: "필로스는 벤젠, 베이스오일, 염산 등 특수 액체화물 수송 분야에서 탄탄한 포트폴리오를 구축해 왔습니다. 석유화학 기업들과의 오랜 파트너십을 바탕으로 전용 케미컬 탱크선을 운항하며 동남아, 인도 및 역내 주요 항로에서 엄격한 안전 절차에 따라 화물을 처리합니다.",
        },
        {
          en: "Knowing these cargoes serve as essential raw materials for everyday industries from water treatment to steelmaking, our operations are defined by this deep responsibility. In this challenging sector, we focus on rigorous risk management and operational control to ensure the safe and reliable delivery of every cargo.",
          ko: "저희가 수송하는 화물들이 수처리부터 철강 생산에 이르기까지 일상과 국가 기간산업의 필수 원자재로 쓰이는 만큼 매 항해마다 무거운 책임감으로 임하고 있습니다. 다루기 까다로운 특수 케미컬 화물 운송의 전 과정을 철저하게 통제하며 화주의 가치를 안전하게 전달하고 있습니다.",
        },
      ],
    },
  ],
};

// ---------- Memberships (About page bottom) ----------

export const memberships = {
  overline: { en: "MEMBERSHIPS", ko: "가입 협회" },
  heading: {
    en: "Recognised Within the Industry",
    ko: "주요 협회 및 회원 자격",
  },
  items: [
    {
      name: "Korea Shipowners' Association",
      context: {
        en: "Admitted 2018 - the principal national association of Korean ocean carriers",
        ko: "한국선주협회, 2018년 정회원 가입, 국내 외항해운업계를 대표하는 협회",
      },
    },
    {
      name: "Korea Shipping Association",
      context: {
        en: "Admitted 2016 - the national association for Korean shipping operators",
        ko: "한국해운조합, 2016년 정회원 가입, 국내 해운사업자를 대표하는 협회",
      },
    },
  ],
};

// ---------- Inquiry form (Contact page) ----------

export const inquiryForm = {
  overline: { en: "CONTACT", ko: "CONTACT" },
  heading: {
    en: "Write to Us Directly",
    ko: "문의하기",
  },
  sub: {
    en: "We welcome enquiries from shippers, partners, and industry counterparts. Please reach us at info@pillos.co.kr or +82-2-318-1703, or leave a message below:",
    ko: "필로스는 고객사와 협력사의 목소리에 언제나 열려 있습니다. 이메일 및 전화 (info@pillos.co.kr, +82-2-318-1703) 또는 아래 문의 양식을 통해 연락 주시면 담당자가 확인 후 연락드리겠습니다.",
  },
  fields: {
    company: { en: "Company", ko: "회사명" },
    name: { en: "Name", ko: "성함" },
    email: { en: "E-mail", ko: "이메일" },
    message: { en: "Message", ko: "문의 내용" },
  },
  submit: { en: "Send Message", ko: "문의 발송" },
  recipient: "info@pillos.co.kr",
};

export const footer = {
  addressLine: {
    en: "7th Floor, 9 Chungmu-ro, Jung-gu, Seoul, Korea, 04554",
    ko: "서울특별시 중구 충무로 9, 7층 (우편번호 04554)",
  },
  phoneLine: {
    en: "Tel : +82-2-318-1703 | Fax : +82-2-318-1706",
    ko: "Tel : +82-2-318-1703 | Fax : +82-2-318-1706",
  },
  emailLine: {
    en: "E-mail : info@pillos.co.kr",
    ko: "E-mail : info@pillos.co.kr",
  },
};

// ---------- Mission & Values (About page section) ----------

export const visionMissionValues = {
  overline: { en: "MISSION & VALUES", ko: "미션과 핵심 가치" },
  mission: {
    label: { en: "Mission", ko: "미션" },
    body: {
      en: "Pillos is a shipping partner that shares responsibility for our customers' supply chains. With a diversified fleet and experienced crews, we carry our customers' cargo safely and on schedule. We look beyond any single shipment - partnering for the long haul so our customers' business can go further.",
      ko: "필로스는 고객사의 공급망을 함께 책임지는 해운 파트너입니다. 다양한 선대와 숙련된 선원이 고객사의 화물을 안전하게, 지연 없이 운송합니다. 근시안적으로 단 건 거래만을 생각하기보다 고객사의 장기적 비즈니스의 성장 여정을 함께 하고자 합니다.",
    },
  },
  values: {
    label: { en: "Our Values", ko: "핵심 가치" },
    items: [
      {
        title: { en: "Dependability", ko: "신뢰" },
        body: {
          en: "We deliver what we promise - the right cargo, in the right place, at the right time.",
          ko: "약속한 화물을, 약속한 곳에, 정해진 시간에 전달합니다.",
        },
      },
      {
        title: { en: "Partnership", ko: "동행" },
        body: {
          en: "Our customers' success is our success. We build long-lasting partnerships, not one-off voyages.",
          ko: "고객사의 성공이 곧 저희의 성공입니다. 오래 가는 동행적 파트너십을 지향합니다.",
        },
      },
      {
        title: { en: "Stewardship", ko: "책임" },
        body: {
          en: "We put the safety of our cargo and crew first, and protect the seas and the environment we operate in.",
          ko: "화물과 선원의 안전을 최우선으로, 저희가 항해하는 바다의 환경까지 고려하며 책임감 있게 운송합니다.",
        },
      },
      {
        title: { en: "Initiative", ko: "진취" },
        body: {
          en: "We welcome new ideas and better ways of working, improving our service with every voyage.",
          ko: "저희는 언제나 새롭고 더 나은 방식을 열린 마음으로 받아들이며, 항해를 거듭할수록 서비스를 발전시키고자 합니다.",
        },
      },
    ],
  },
};

// ---------- HSE (Health, Safety and Environment) page ----------

export const hse = {
  image: "/about-deck.jpg",
  imageAlt: { en: "Pillos vessel at sea", ko: "필로스 선박" },
  lead: {
    en: "At Pillos, the safety of people and the protection of the environment come first. We dedicate our efforts to rigorous risk management, in the deeply held belief that operational incidents can be proactively prevented through systematic oversight.",
    ko: "저희 필로스는 사람의 안전과 환경 보호를 경영의 최우선 가치로 둡니다. 모든 사고는 철저한 관리와 준비를 통해 사전에 예방할 수 있다는 믿음으로 안전 운항에 만전을 기하고 있습니다.",
  },
  policy: {
    en: "Our Health, Safety, and Environment (HSE) policy and objectives apply to every employee, ashore and at sea, carrying equal status with our primary business goals. We operate our vessels in full compliance with all applicable national and international regulations, including the International Safety Management (ISM) Code, while managing our HSE framework in line with internationally recognized standards. Working safely and protecting the environment is a direct responsibility for everyone at Pillos, regardless of position, and we expect the same commitment from our subcontractors and partners.",
    ko: "저희의 보건, 안전, 환경(HSE) 정책과 목표는 육상과 해상의 모든 임직원에게 적용되며, 회사의 다른 핵심 경영 목표와 동등한 위상을 가집니다. 저희는 ISM 코드를 비롯한 국내외 모든 관련 법규를 준수하여 선박을 운항하고, 국제적으로 인정받는 모범 관행에 따라 HSE 체계를 구축하여 관리합니다. 안전하게 일하고 환경을 지키는 것은 직위와 직급을 막론한 저희 모든 구성원의 책임이며, 협력사와 파트너에게도 동일한 실천을 기대합니다.",
  },
  striveHeading: {
    en: "Within this framework, we will strive to:",
    ko: "이 정책 아래에서 저희는 다음을 실천합니다:",
  },
  strive: [
    {
      en: "Eliminate hazards and prevent all conditions that may cause loss of life or personal injury",
      ko: "인명 손실이나 부상을 초래할 수 있는 위험 요인을 선제적으로 예방합니다",
    },
    {
      en: "Ensure safe working practices and empower every individual to stop any work they consider unsafe",
      ko: "안전한 작업 관행을 보장하고, 누구든 위험하다고 판단되는 작업을 현장에서 즉시 멈출 수 있도록 권한을 부여합니다",
    },
    {
      en: "Provide a healthy and safe working environment for our employees",
      ko: "임직원에게 건강하고 안전한 근무 환경을 제공합니다",
    },
    {
      en: "Prevent work-related illness and actively promote the health and well-being of our crews",
      ko: "업무로 인한 질병을 예방하고 선원의 건강과 보건 복지를 적극적으로 증진합니다",
    },
    {
      en: "Prevent incidents that may harm the environment, and minimize emissions, waste, and the risk of pollution",
      ko: "환경에 해를 끼칠 수 있는 사고를 예방하고 배출, 폐기물, 오염 위험을 최소화합니다",
    },
  ] as Bi[],
  manageHeading: {
    en: "To achieve these objectives, management will:",
    ko: "이 목표를 달성하기 위해, 경영진은 다음을 수행합니다:",
  },
  manage: [
    {
      en: "Identify hazards and assess and safeguard against all operational risks through procedures and checklists adapted to our vessels",
      ko: "선박에 맞춘 절차와 체크리스트를 통해 위험을 식별하고 모든 운항 리스크를 상시 평가, 관리합니다",
    },
    {
      en: "Encourage every employee to report near-misses and non-conformities openly, assured that no one will be penalized for raising a concern",
      ko: "현장의 잠재 위험 요인(Near-miss)과 부적합 사항을 자유롭게 보고하도록 장려하며, 문제 제기로 인해 불이익을 받지 않음을 보장합니다",
    },
    {
      en: "Investigate and follow up every report thoroughly to prevent recurrence and share the lessons across our fleet",
      ko: "모든 보고를 철저히 조사하고 후속 조치하여 재발을 막고, 그 교훈을 전 선대에 공유합니다",
    },
    {
      en: "Continuously review and improve our HSE performance, training, and management system",
      ko: "HSE(보건, 안전, 환경) 성과와 교육, 관리 시스템을 지속적으로 점검하고 개선합니다",
    },
  ] as Bi[],
  closing: {
    en: "Every employee at Pillos integrates this commitment into their daily operations, building a sustainable and responsible maritime foundation.",
    ko: "필로스의 모든 임직원은 철저한 책임의식과 적극적인 의무 이행을 통해 안전과 환경을 지키는 일을 일상의 가장 중요한 원칙으로 삼고 지속 가능한 경영 기반을 구축하고 있습니다.",
  },
};
