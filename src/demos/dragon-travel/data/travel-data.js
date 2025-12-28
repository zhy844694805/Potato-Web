// Dragon Travel - Travel Agency Data
// Trilingual: Italian (it), English (en), Chinese (zh)

export const translations = {
  it: {
    nav: { home: 'Home', flights: 'Voli', tours: 'Tour', visa: 'Visti', contact: 'Contatti' },
    hero: {
      tagline: 'Il Ponte tra Italia e Cina',
      subtitle: 'Biglietti aerei, visti e tour personalizzati con oltre 20 anni di esperienza',
      cta: 'Richiedi Preventivo'
    },
    services: {
      flights: 'Biglietti Aerei',
      flightsDesc: 'Voli diretti e con scalo per Cina e Asia',
      tours: 'Pacchetti Tour',
      toursDesc: 'Tour organizzati in Italia, Cina ed Europa',
      visa: 'Servizi Visti',
      visaDesc: 'Assistenza per visti Cina e Schengen'
    },
    routes: {
      title: 'Rotte Popolari',
      subtitle: 'Le migliori tariffe per le destinazioni più richieste',
      from: 'Da',
      price: 'a partire da'
    },
    packages: {
      title: 'Pacchetti Tour',
      subtitle: 'Viaggi organizzati con guida multilingue',
      days: 'giorni',
      book: 'Prenota'
    },
    why: {
      title: 'Perché Sceglierci',
      iata: 'Certificati IATA',
      iataDesc: 'Agenzia autorizzata per emissione biglietti',
      experience: '20+ Anni',
      experienceDesc: 'Di esperienza nel settore viaggi',
      prices: 'Prezzi Competitivi',
      pricesDesc: 'Le migliori tariffe garantite',
      bilingual: 'Servizio Bilingue',
      bilingualDesc: 'Assistenza in italiano e cinese'
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Siamo qui per aiutarti a pianificare il tuo viaggio',
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefono',
        service: 'Servizio',
        selectService: 'Seleziona servizio',
        destination: 'Destinazione',
        date: 'Data partenza',
        message: 'Note aggiuntive',
        send: 'Invia Richiesta',
        success: 'Richiesta inviata! Ti risponderemo entro 24 ore.'
      }
    },
    footer: { rights: '© 2024 Dragon Travel. Tutti i diritti riservati. | IATA: 12345678' }
  },
  en: {
    nav: { home: 'Home', flights: 'Flights', tours: 'Tours', visa: 'Visa', contact: 'Contact' },
    hero: {
      tagline: 'The Bridge Between Italy and China',
      subtitle: 'Flight tickets, visas and custom tours with over 20 years of experience',
      cta: 'Get a Quote'
    },
    services: {
      flights: 'Flight Tickets',
      flightsDesc: 'Direct and connecting flights to China and Asia',
      tours: 'Tour Packages',
      toursDesc: 'Organized tours in Italy, China and Europe',
      visa: 'Visa Services',
      visaDesc: 'Assistance for China and Schengen visas'
    },
    routes: {
      title: 'Popular Routes',
      subtitle: 'Best fares for the most requested destinations',
      from: 'From',
      price: 'starting from'
    },
    packages: {
      title: 'Tour Packages',
      subtitle: 'Organized trips with multilingual guide',
      days: 'days',
      book: 'Book'
    },
    why: {
      title: 'Why Choose Us',
      iata: 'IATA Certified',
      iataDesc: 'Authorized agency for ticket issuance',
      experience: '20+ Years',
      experienceDesc: 'Of experience in travel industry',
      prices: 'Competitive Prices',
      pricesDesc: 'Best rates guaranteed',
      bilingual: 'Bilingual Service',
      bilingualDesc: 'Assistance in Italian and Chinese'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you plan your trip',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        service: 'Service',
        selectService: 'Select service',
        destination: 'Destination',
        date: 'Departure date',
        message: 'Additional notes',
        send: 'Send Request',
        success: 'Request sent! We will reply within 24 hours.'
      }
    },
    footer: { rights: '© 2024 Dragon Travel. All rights reserved. | IATA: 12345678' }
  },
  zh: {
    nav: { home: '首页', flights: '机票', tours: '旅游', visa: '签证', contact: '联系' },
    hero: {
      tagline: '连接中国与意大利的桥梁',
      subtitle: '机票预订、签证办理、定制旅游，二十年专业服务',
      cta: '立即咨询'
    },
    services: {
      flights: '机票预订',
      flightsDesc: '中国及亚洲直飞航班、转机航班',
      tours: '旅游套餐',
      toursDesc: '意大利、中国、欧洲精品团',
      visa: '签证服务',
      visaDesc: '中国签证、申根签证代办'
    },
    routes: {
      title: '热门航线',
      subtitle: '热门目的地最优惠价格',
      from: '出发地',
      price: '起'
    },
    packages: {
      title: '精选旅游套餐',
      subtitle: '多语言导游陪同，品质保障',
      days: '天',
      book: '立即预订'
    },
    why: {
      title: '为什么选择我们',
      iata: 'IATA认证',
      iataDesc: '国际航空运输协会授权代理',
      experience: '20+年经验',
      experienceDesc: '深耕旅游行业二十余年',
      prices: '价格优惠',
      pricesDesc: '保证最优惠票价',
      bilingual: '双语服务',
      bilingualDesc: '中意双语专业团队'
    },
    contact: {
      title: '联系我们',
      subtitle: '我们随时为您规划完美旅程',
      form: {
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        service: '服务类型',
        selectService: '请选择服务',
        destination: '目的地',
        date: '出发日期',
        message: '其他需求',
        send: '提交咨询',
        success: '咨询已提交！我们将在24小时内回复您。'
      }
    },
    footer: { rights: '© 2024 龙腾旅行社 版权所有 | IATA: 12345678' }
  }
}

export const agencyInfo = {
  name: 'Dragon Travel',
  nameChinese: '龙腾旅行社',
  address: {
    street: 'Via Paolo Sarpi 28',
    city: 'Milano',
    postalCode: '20154',
    country: 'Italia'
  },
  phone: '+39 02 9183 4756',
  whatsapp: '+39 320 847 2915',
  wechat: 'DragonTravelMI',
  email: 'info@dragontravel.it',
  iataCode: '12345678',
  hours: {
    weekdays: { it: 'Lun-Ven', en: 'Mon-Fri', zh: '周一至周五' },
    weekdaysTime: '9:00 - 18:30',
    saturday: { it: 'Sabato', en: 'Saturday', zh: '周六' },
    saturdayTime: '9:00 - 13:00'
  }
}

export const routes = [
  {
    id: 1,
    from: { city: 'Milano', code: 'MXP' },
    to: { city: 'Beijing', code: 'PEK', zh: '北京' },
    price: 580,
    airline: 'Air China',
    direct: true,
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400'
  },
  {
    id: 2,
    from: { city: 'Milano', code: 'MXP' },
    to: { city: 'Shanghai', code: 'PVG', zh: '上海' },
    price: 550,
    airline: 'China Eastern',
    direct: true,
    image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=400'
  },
  {
    id: 3,
    from: { city: 'Roma', code: 'FCO' },
    to: { city: 'Guangzhou', code: 'CAN', zh: '广州' },
    price: 520,
    airline: 'China Southern',
    direct: false,
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400'
  },
  {
    id: 4,
    from: { city: 'Milano', code: 'MXP' },
    to: { city: 'Hong Kong', code: 'HKG', zh: '香港' },
    price: 490,
    airline: 'Cathay Pacific',
    direct: true,
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400'
  }
]

export const packages = [
  {
    id: 1,
    name: { it: 'Italia Classica', en: 'Classic Italy', zh: '意大利经典游' },
    desc: {
      it: 'Roma, Firenze, Venezia, Milano - i tesori d\'Italia',
      en: 'Rome, Florence, Venice, Milan - the treasures of Italy',
      zh: '罗马、佛罗伦萨、威尼斯、米兰 - 意大利精华'
    },
    days: 7,
    price: 1280,
    highlights: {
      it: ['Colosseo', 'Uffizi', 'San Marco', 'Duomo'],
      en: ['Colosseum', 'Uffizi', 'St. Mark\'s', 'Duomo'],
      zh: ['斗兽场', '乌菲兹美术馆', '圣马可广场', '米兰大教堂']
    },
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600'
  },
  {
    id: 2,
    name: { it: 'Cina Imperiale', en: 'Imperial China', zh: '中国帝都之旅' },
    desc: {
      it: 'Pechino, Xi\'an, Shanghai - la Cina millenaria',
      en: 'Beijing, Xi\'an, Shanghai - ancient China',
      zh: '北京、西安、上海 - 探索华夏文明'
    },
    days: 10,
    price: 1680,
    highlights: {
      it: ['Grande Muraglia', 'Esercito di Terracotta', 'Città Proibita', 'Bund'],
      en: ['Great Wall', 'Terracotta Army', 'Forbidden City', 'The Bund'],
      zh: ['长城', '兵马俑', '故宫', '外滩']
    },
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600'
  },
  {
    id: 3,
    name: { it: 'Europa Highlights', en: 'Europe Highlights', zh: '欧洲精华游' },
    desc: {
      it: 'Italia, Francia, Svizzera - il meglio d\'Europa',
      en: 'Italy, France, Switzerland - the best of Europe',
      zh: '意大利、法国、瑞士 - 欧洲经典三国'
    },
    days: 12,
    price: 2180,
    highlights: {
      it: ['Torre Eiffel', 'Alpi Svizzere', 'Costiera Amalfitana', 'Barcellona'],
      en: ['Eiffel Tower', 'Swiss Alps', 'Amalfi Coast', 'Barcelona'],
      zh: ['埃菲尔铁塔', '瑞士雪山', '阿马尔菲海岸', '巴塞罗那']
    },
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600'
  }
]

export const visaServices = [
  {
    id: 1,
    name: { it: 'Visto Cina Turismo', en: 'China Tourist Visa', zh: '中国旅游签证' },
    type: 'L',
    duration: { it: '30/60/90 giorni', en: '30/60/90 days', zh: '30/60/90天' },
    price: 150,
    processing: { it: '5-7 giorni', en: '5-7 days', zh: '5-7工作日' }
  },
  {
    id: 2,
    name: { it: 'Visto Cina Business', en: 'China Business Visa', zh: '中国商务签证' },
    type: 'M',
    duration: { it: '30/60/90 giorni', en: '30/60/90 days', zh: '30/60/90天' },
    price: 180,
    processing: { it: '5-7 giorni', en: '5-7 days', zh: '5-7工作日' }
  },
  {
    id: 3,
    name: { it: 'Visto Schengen', en: 'Schengen Visa', zh: '申根签证' },
    type: 'C',
    duration: { it: 'Fino a 90 giorni', en: 'Up to 90 days', zh: '最长90天' },
    price: 120,
    processing: { it: '10-15 giorni', en: '10-15 days', zh: '10-15工作日' }
  }
]

export const serviceTypes = [
  { id: 'flights', name: { it: 'Biglietti Aerei', en: 'Flight Tickets', zh: '机票预订' } },
  { id: 'tours', name: { it: 'Pacchetti Tour', en: 'Tour Packages', zh: '旅游套餐' } },
  { id: 'visa', name: { it: 'Servizi Visti', en: 'Visa Services', zh: '签证服务' } },
  { id: 'hotel', name: { it: 'Prenotazione Hotel', en: 'Hotel Booking', zh: '酒店预订' } }
]

export const heroImage = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920'
