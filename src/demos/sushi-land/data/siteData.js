// Sushi Land Demo - Site Data
// All content is trilingual: { it, en, zh }

export const locations = [
  {
    slug: 'vimodrone',
    name: 'Sushi Land Vimodrone',
    shortName: 'Vimodrone',
    province: 'Milano',
    address: 'Via Martiri di Cefalonia, 2, 20090 Vimodrone MI',
    phone: '+39 02 2507 0888',
    whatsapp: '+39 351 555 0101',
    email: 'vimodrone@sushiland.it',
    hours: {
      lunch: '12:00 - 15:00',
      dinner: '19:00 - 23:30',
      days: { it: 'Aperto tutti i giorni', en: 'Open every day', zh: '每天营业' }
    },
    parking: { it: 'Ampio parcheggio gratuito', en: 'Large free parking', zh: '大型免费停车场' },
    heroImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80',
    mapPlaceholder: true
  },
  {
    slug: 'villa-guardia',
    name: 'Sushi Land Villa Guardia',
    shortName: 'Villa Guardia',
    province: 'Como',
    address: 'Via Varesina, 153, 22079 Villa Guardia CO',
    phone: '+39 031 480 0999',
    whatsapp: '+39 351 555 0202',
    email: 'villaguardia@sushiland.it',
    hours: {
      lunch: '12:00 - 15:00',
      dinner: '19:00 - 23:30',
      days: { it: 'Aperto tutti i giorni', en: 'Open every day', zh: '每天营业' }
    },
    parking: { it: 'Parcheggio gratuito disponibile', en: 'Free parking available', zh: '提供免费停车' },
    heroImage: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80',
    mapPlaceholder: true
  },
  {
    slug: 'san-giuliano',
    name: 'Sushi Land San Giuliano',
    shortName: 'San Giuliano',
    province: 'Milano',
    address: 'Via Emilia, 12, 20098 San Giuliano Milanese MI',
    phone: '+39 02 9884 0777',
    whatsapp: '+39 351 555 0303',
    email: 'sangiuliano@sushiland.it',
    hours: {
      lunch: '12:00 - 15:00',
      dinner: '19:00 - 23:30',
      days: { it: 'Aperto tutti i giorni', en: 'Open every day', zh: '每天营业' }
    },
    parking: { it: 'Parcheggio privato', en: 'Private parking', zh: '私人停车场' },
    heroImage: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=80',
    mapPlaceholder: true
  },
  {
    slug: 'mariano-comense',
    name: 'Sushi Land Mariano Comense',
    shortName: 'Mariano Comense',
    province: 'Como',
    address: 'Via IV Novembre, 21, 22066 Mariano Comense CO',
    phone: '+39 031 744 0666',
    whatsapp: '+39 351 555 0404',
    email: 'mariano@sushiland.it',
    hours: {
      lunch: '12:00 - 15:00',
      dinner: '19:00 - 23:30',
      days: { it: 'Aperto tutti i giorni', en: 'Open every day', zh: '每天营业' }
    },
    parking: { it: 'Parcheggio disponibile nelle vicinanze', en: 'Parking available nearby', zh: '附近有停车位' },
    heroImage: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    mapPlaceholder: true
  }
];

export function getLocationBySlug(slug) {
  return locations.find(loc => loc.slug === slug) || null;
}

export const aycePricing = [
  {
    id: 'weekday-lunch',
    label: { it: 'Pranzo Infrasettimanale', en: 'Weekday Lunch', zh: '工作日午餐' },
    subtitle: { it: 'Lunedì - Venerdì', en: 'Monday - Friday', zh: '周一至周五' },
    price: '14.90',
    cover: '1.50',
    childPrice: { it: 'Bambini (4-10 anni): €9.90', en: 'Children (4-10 years): €9.90', zh: '儿童（4-10岁）：€9.90' },
    featured: false
  },
  {
    id: 'weekend-lunch',
    label: { it: 'Pranzo Weekend', en: 'Weekend Lunch', zh: '周末午餐' },
    subtitle: { it: 'Sabato - Domenica - Festivi', en: 'Saturday - Sunday - Holidays', zh: '周六、周日及节假日' },
    price: '19.90',
    cover: '2.00',
    childPrice: { it: 'Bambini (4-10 anni): €12.90', en: 'Children (4-10 years): €12.90', zh: '儿童（4-10岁）：€12.90' },
    featured: false
  },
  {
    id: 'dinner',
    label: { it: 'Cena', en: 'Dinner', zh: '晚餐' },
    subtitle: { it: 'Tutti i giorni', en: 'Every day', zh: '每天' },
    price: '28.90',
    cover: '2.50',
    childPrice: { it: 'Bambini (4-10 anni): €16.90', en: 'Children (4-10 years): €16.90', zh: '儿童（4-10岁）：€16.90' },
    featured: true
  }
];

export const takeawayInfo = {
  pickup: {
    discount: '20%',
    minOrder: '€10',
    description: {
      it: 'Ritira il tuo ordine direttamente al ristorante e risparmia il 20% su tutto il menu.',
      en: 'Pick up your order directly at the restaurant and save 20% on the entire menu.',
      zh: '直接到餐厅取餐，全菜单享受20%折扣。'
    }
  },
  delivery: {
    discount: '10%',
    minOrder: '€30',
    maxDistance: '5km',
    description: {
      it: 'Consegna a domicilio entro 5km dal ristorante. Sconto del 10% su tutto il menu.',
      en: 'Home delivery within 5km of the restaurant. 10% discount on the entire menu.',
      zh: '餐厅5公里范围内送货上门。全菜单享受10%折扣。'
    }
  },
  boxes: [
    { name: 'Sushi Land Box S', pieces: 24, price: '15.90' },
    { name: 'Sushi Land Box M', pieces: 36, price: '22.90' },
    { name: 'Sushi Land Box L', pieces: 48, price: '29.90' },
    { name: 'Sushi Land Box XL', pieces: 60, price: '36.90' },
    { name: 'Sushi Land Box Family', pieces: 80, price: '45.90' },
    { name: 'Sushi Land Box Party', pieces: 100, price: '54.90' }
  ],
  freeDrinkTiers: [
    { minOrder: '€30', drink: { it: 'Bibita omaggio', en: 'Free soft drink', zh: '免费饮料' } },
    { minOrder: '€50', drink: { it: 'Bottiglia di vino omaggio', en: 'Free bottle of wine', zh: '免费葡萄酒' } },
    { minOrder: '€80', drink: { it: 'Bottiglia di sake omaggio', en: 'Free bottle of sake', zh: '免费清酒' } }
  ]
};

export const specialDishes = [
  {
    id: 'tartare-flower',
    name: 'Tartare Flower',
    description: {
      it: 'Delicata tartare di salmone fresco presentata come un fiore, con avocado cremoso e salsa ponzu.',
      en: 'Delicate fresh salmon tartare presented as a flower, with creamy avocado and ponzu sauce.',
      zh: '新鲜三文鱼塔塔，呈花朵状，配以奶油牛油果和柚子醋酱。'
    },
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=600&q=80'
  },
  {
    id: 'tropical-salmon',
    name: 'Tropical Salmon Dream',
    description: {
      it: 'Salmone scottato con mango fresco, chips di riso croccante e riduzione di passion fruit.',
      en: 'Seared salmon with fresh mango, crispy rice chips, and passion fruit reduction.',
      zh: '煎三文鱼配新鲜芒果、脆米片和百香果酱。'
    },
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80'
  },
  {
    id: 'capesante-fresh',
    name: 'Capesante Fresh',
    description: {
      it: 'Capesante scottate servite su letto di purea di edamame con olio al tartufo nero.',
      en: 'Seared scallops served on a bed of edamame puree with black truffle oil.',
      zh: '煎扇贝配毛豆泥和黑松露油。'
    },
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600&q=80'
  },
  {
    id: 'dragon-roll',
    name: 'Dragon Roll Special',
    description: {
      it: 'Roll speciale con gambero in tempura, avocado, tobiko e salsa teriyaki fiammeggiata.',
      en: 'Special roll with tempura shrimp, avocado, tobiko, and flamed teriyaki sauce.',
      zh: '特制龙卷：天妇罗虾、牛油果、飞鱼籽和火焰照烧酱。'
    },
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80'
  },
  {
    id: 'sashimi-deluxe',
    name: 'Sashimi Deluxe',
    description: {
      it: 'Selezione premium di sashimi: tonno, salmone, branzino e gambero rosso, serviti su ghiaccio.',
      en: 'Premium sashimi selection: tuna, salmon, sea bass, and red shrimp, served on ice.',
      zh: '高级刺身拼盘：金枪鱼、三文鱼、鲈鱼和红虾，冰镇上桌。'
    },
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80'
  }
];

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80', alt: { it: 'Sushi assortito', en: 'Assorted sushi', zh: '各式寿司' } },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80', alt: { it: 'Sashimi fresco', en: 'Fresh sashimi', zh: '新鲜刺身' } },
  { src: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&q=80', alt: { it: 'Interno ristorante', en: 'Restaurant interior', zh: '餐厅内部' } },
  { src: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80', alt: { it: 'Maki rolls', en: 'Maki rolls', zh: '卷寿司' } },
  { src: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80', alt: { it: 'Dragon roll', en: 'Dragon roll', zh: '龙卷' } },
  { src: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80', alt: { it: 'Sashimi deluxe', en: 'Sashimi deluxe', zh: '豪华刺身' } },
  { src: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=600&q=80', alt: { it: 'Tartare di salmone', en: 'Salmon tartare', zh: '三文鱼塔塔' } },
  { src: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600&q=80', alt: { it: 'Capesante', en: 'Scallops', zh: '扇贝' } },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', alt: { it: 'Piatto speciale', en: 'Special dish', zh: '特色菜' } },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80', alt: { it: 'Nigiri', en: 'Nigiri', zh: '握寿司' } },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', alt: { it: 'Cucina giapponese', en: 'Japanese cuisine', zh: '日本料理' } },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: { it: 'Presentazione piatti', en: 'Dish presentation', zh: '菜品展示' } }
];

export const filosofiaContent = [
  {
    id: 'philosophy',
    heading: { it: 'La nostra', en: 'Our', zh: '我们的' },
    headingAccent: { it: 'FILOSOFIA', en: 'PHILOSOPHY', zh: '理念' },
    text: {
      it: 'Da Sushi Land crediamo che ogni pasto debba essere un\'esperienza unica. La nostra filosofia si basa sulla fusione tra tradizione giapponese e innovazione culinaria, offrendo piatti che deliziano tutti i sensi.',
      en: 'At Sushi Land we believe every meal should be a unique experience. Our philosophy is based on the fusion of Japanese tradition and culinary innovation, offering dishes that delight all the senses.',
      zh: '在Sushi Land，我们相信每顿饭都应该是独特的体验。我们的理念基于日本传统与烹饪创新的融合，提供令所有感官愉悦的菜肴。'
    },
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80'
  },
  {
    id: 'service',
    heading: { it: 'Un servizio al tavolo', en: 'A table service', zh: '一种餐桌服务' },
    headingAccent: { it: 'ACCURATO', en: 'METICULOUS', zh: '一丝不苟' },
    text: {
      it: 'Il nostro team è dedicato a offrirvi un servizio impeccabile. Ogni dettaglio è curato per garantire che la vostra esperienza sia perfetta, dal momento in cui entrate fino all\'ultimo boccone.',
      en: 'Our team is dedicated to offering you impeccable service. Every detail is taken care of to ensure your experience is perfect, from the moment you enter until the last bite.',
      zh: '我们的团队致力于为您提供无可挑剔的服务。从您进门到最后一口，每个细节都精心照料，确保您的体验完美无瑕。'
    },
    image: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=800&q=80'
  },
  {
    id: 'quality',
    heading: { it: 'Sushi e Cucina Orientale', en: 'Sushi and Oriental Cuisine', zh: '寿司与东方美食' },
    headingAccent: { it: 'DI QUALITÀ', en: 'OF QUALITY', zh: '高品质' },
    text: {
      it: 'Utilizziamo solo ingredienti di prima qualità, selezionati con cura ogni giorno. Il nostro pesce arriva fresco quotidianamente, garantendo sapori autentici e la massima freschezza in ogni piatto.',
      en: 'We use only top-quality ingredients, carefully selected every day. Our fish arrives fresh daily, ensuring authentic flavors and maximum freshness in every dish.',
      zh: '我们只使用每天精心挑选的顶级食材。我们的鱼每天新鲜到货，确保每道菜都具有正宗风味和最大新鲜度。'
    },
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80'
  },
  {
    id: 'exclusive',
    heading: { it: 'Amiamo sorprenderti', en: 'We love to surprise you', zh: '我们喜欢给你惊喜' },
    headingAccent: { it: 'CON UNA CUCINA ESCLUSIVA', en: 'WITH EXCLUSIVE CUISINE', zh: '以独家美食' },
    text: {
      it: 'I nostri chef creano piatti unici che combinano tecniche tradizionali con presentazioni moderne. Ogni creazione è un\'opera d\'arte culinaria pensata per stupirvi.',
      en: 'Our chefs create unique dishes that combine traditional techniques with modern presentations. Every creation is a culinary work of art designed to amaze you.',
      zh: '我们的厨师创造独特的菜肴，将传统技术与现代呈现相结合。每一道创作都是一件旨在令您惊叹的烹饪艺术品。'
    },
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80'
  },
  {
    id: 'journey',
    heading: { it: 'Fatti trasportare', en: 'Let yourself be transported', zh: '让自己沉浸' },
    headingAccent: { it: 'NEL LONTANO ORIENTE', en: 'TO THE FAR EAST', zh: '在远东' },
    text: {
      it: 'L\'atmosfera dei nostri ristoranti è progettata per trasportarvi in un viaggio sensoriale verso l\'Oriente. Luci soffuse, musica delicata e un design elegante creano l\'ambiente perfetto.',
      en: 'The atmosphere of our restaurants is designed to transport you on a sensory journey to the East. Soft lights, delicate music, and elegant design create the perfect ambiance.',
      zh: '我们餐厅的氛围旨在带您踏上前往东方的感官之旅。柔和的灯光、优美的音乐和优雅的设计营造出完美的环境。'
    },
    image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=80'
  }
];

export const appInfo = {
  title: {
    it: 'Scarica la nostra App...e buon appetito!',
    en: 'Download our App...and enjoy your meal!',
    zh: '下载我们的应用程序...祝您用餐愉快！'
  },
  description: {
    it: 'Con la nostra app puoi ordinare comodamente da casa, accumulare punti fedeltà e ricevere offerte esclusive. Disponibile per iOS e Android.',
    en: 'With our app you can order comfortably from home, accumulate loyalty points and receive exclusive offers. Available for iOS and Android.',
    zh: '通过我们的应用程序，您可以在家舒适下单、积累积分并接收独家优惠。适用于iOS和Android。'
  },
  features: [
    { it: 'Ordina online', en: 'Order online', zh: '在线订购' },
    { it: 'Punti fedeltà', en: 'Loyalty points', zh: '积分奖励' },
    { it: 'Offerte esclusive', en: 'Exclusive offers', zh: '独家优惠' },
    { it: 'Prenotazione tavolo', en: 'Table booking', zh: '预订桌位' }
  ]
};

export const translations = {
  nav: {
    home: { it: 'Home', en: 'Home', zh: '首页' },
    filosofia: { it: 'Filosofia', en: 'Philosophy', zh: '理念' },
    menu: { it: 'Menu', en: 'Menu', zh: '菜单' },
    takeaway: { it: 'Take Away', en: 'Take Away', zh: '外卖' },
    app: { it: 'App', en: 'App', zh: '应用' },
    contatti: { it: 'Contatti', en: 'Contact', zh: '联系' }
  },
  main: {
    heroTitle: {
      it: 'Scegli il tuo Ristorante...',
      en: 'Choose your Restaurant...',
      zh: '选择您的餐厅...'
    },
    heroSubtitle: {
      it: 'TI ASPETTIAMO',
      en: 'WE ARE WAITING FOR YOU',
      zh: '我们期待您的光临'
    },
    visitButton: {
      it: 'SCOPRI',
      en: 'DISCOVER',
      zh: '探索'
    }
  },
  locationHome: {
    ayceTitle: {
      it: 'Tutto il Sushi che vuoi con formula',
      en: 'All the Sushi you want with the',
      zh: '您想要的所有寿司，尽在'
    },
    ayceAccent: {
      it: 'ALL YOU CAN EAT',
      en: 'ALL YOU CAN EAT',
      zh: '自助畅吃'
    },
    ayceDescription: {
      it: 'Scegli tra oltre 150 piatti del nostro menu e goditi un\'esperienza culinaria senza limiti. Ordina comodamente dal tuo smartphone tramite QR code al tavolo.',
      en: 'Choose from over 150 dishes from our menu and enjoy an unlimited culinary experience. Order conveniently from your smartphone via QR code at the table.',
      zh: '从我们菜单的150多道菜中选择，享受无限的美食体验。通过桌上的二维码，用手机轻松下单。'
    },
    qrTitle: {
      it: 'Ordina dal tuo Smartphone',
      en: 'Order from your Smartphone',
      zh: '从您的智能手机下单'
    },
    qrDescription: {
      it: 'Scansiona il QR code al tuo tavolo e sfoglia il menu completo. Puoi ordinare fino a 5 piatti per volta, in totale comodità.',
      en: 'Scan the QR code at your table and browse the full menu. You can order up to 5 dishes at a time, in total comfort.',
      zh: '扫描桌上的二维码，浏览完整菜单。您每次最多可点5道菜，非常方便。'
    },
    specialsTitle: {
      it: 'I nostri piatti',
      en: 'Our',
      zh: '我们的'
    },
    specialsAccent: {
      it: 'SPECIALI',
      en: 'SPECIALS',
      zh: '特色菜'
    },
    galleryTitle: {
      it: 'La nostra',
      en: 'Our',
      zh: '我们的'
    },
    galleryAccent: {
      it: 'GALLERIA',
      en: 'GALLERY',
      zh: '画廊'
    }
  },
  menu: {
    title: {
      it: 'Il nostro',
      en: 'Our',
      zh: '我们的'
    },
    titleAccent: {
      it: 'MENU',
      en: 'MENU',
      zh: '菜单'
    },
    priceLabel: {
      it: 'a persona',
      en: 'per person',
      zh: '每人'
    },
    coverLabel: {
      it: 'Coperto',
      en: 'Cover charge',
      zh: '座位费'
    },
    qrReminder: {
      it: 'Ordina comodamente dal tuo tavolo tramite QR Code',
      en: 'Order conveniently from your table via QR Code',
      zh: '通过二维码在餐桌上轻松下单'
    },
    downloadPdf: {
      it: 'Scarica Menu PDF',
      en: 'Download PDF Menu',
      zh: '下载PDF菜单'
    },
    pdfButtons: [
      { it: 'Menu All You Can Eat', en: 'All You Can Eat Menu', zh: '自助餐菜单' },
      { it: 'Menu À la Carte', en: 'À la Carte Menu', zh: '单点菜单' },
      { it: 'Menu Bevande', en: 'Drinks Menu', zh: '饮品菜单' }
    ]
  },
  takeaway: {
    title: {
      it: 'Tutta la nostra cucina',
      en: 'All our cuisine',
      zh: '我们所有的美食'
    },
    titleAccent: {
      it: 'A CASA TUA!',
      en: 'AT YOUR HOME!',
      zh: '送到您家！'
    },
    pickupTitle: {
      it: 'Ritiro in negozio',
      en: 'In-store pickup',
      zh: '到店自取'
    },
    deliveryTitle: {
      it: 'Consegna a domicilio',
      en: 'Home delivery',
      zh: '送货上门'
    },
    discount: {
      it: 'Sconto',
      en: 'Discount',
      zh: '折扣'
    },
    minOrder: {
      it: 'Ordine minimo',
      en: 'Minimum order',
      zh: '最低订单'
    },
    maxDistance: {
      it: 'Distanza massima',
      en: 'Maximum distance',
      zh: '最远距离'
    },
    boxesTitle: {
      it: 'Sushi Land Box',
      en: 'Sushi Land Box',
      zh: 'Sushi Land 套餐盒'
    },
    pieces: {
      it: 'pezzi',
      en: 'pieces',
      zh: '片'
    },
    freeDrinkTitle: {
      it: 'Bevanda omaggio',
      en: 'Free drink',
      zh: '免费饮品'
    },
    orderFrom: {
      it: 'Ordine da',
      en: 'Order from',
      zh: '订单满'
    }
  },
  app: {
    appStore: { it: 'Scarica su App Store', en: 'Download on App Store', zh: '在App Store下载' },
    googlePlay: { it: 'Disponibile su Google Play', en: 'Available on Google Play', zh: '在Google Play下载' }
  },
  contatti: {
    title: {
      it: 'Contattaci',
      en: 'Contact Us',
      zh: '联系我们'
    },
    address: { it: 'Indirizzo', en: 'Address', zh: '地址' },
    phone: { it: 'Telefono', en: 'Phone', zh: '电话' },
    whatsapp: { it: 'WhatsApp', en: 'WhatsApp', zh: 'WhatsApp' },
    email: { it: 'Email', en: 'Email', zh: '邮箱' },
    hours: { it: 'Orari', en: 'Hours', zh: '营业时间' },
    lunch: { it: 'Pranzo', en: 'Lunch', zh: '午餐' },
    dinner: { it: 'Cena', en: 'Dinner', zh: '晚餐' },
    parking: { it: 'Parcheggio', en: 'Parking', zh: '停车' },
    mapPlaceholder: { it: 'Mappa', en: 'Map', zh: '地图' }
  },
  footer: {
    allLocations: { it: 'Tutte le sedi', en: 'All locations', zh: '所有分店' },
    followUs: { it: 'Seguici', en: 'Follow us', zh: '关注我们' },
    backToPortfolio: { it: '← Torna al Portfolio', en: '← Back to Portfolio', zh: '← 返回作品集' },
    copyright: '© 2026 Sushi Land - Demo'
  }
};
