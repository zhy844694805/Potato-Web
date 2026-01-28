// TechZone Home Products Data - 30+ products across new lifestyle categories
export const products = [
  // --- SMART LIVING (5) ---
  {
    id: 'smart-001',
    name: { zh: 'Google Nest Hub (第二代)', en: 'Google Nest Hub (2nd Gen)', it: 'Google Nest Hub (2a Gen)' },
    brand: 'google',
    category: 'smart-living',
    price: 99,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 456,
    stock: 50,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1593121925328-369cc8459c08?w=600&q=80'
    ],
    description: {
      zh: '您的智能家居控制中心。配备睡眠感应功能，无需穿戴设备即可追踪睡眠质量。',
      en: 'The center of your helpful home. With Sleep Sensing, track your sleep without wearing a device.',
      it: 'Il centro della tua casa intelligente. Con il monitoraggio del sonno senza dispositivi indossabili.'
    },
    specifications: {
      Display: '7" Touchscreen',
      Audio: 'Full-range speaker',
      Sensors: 'Motion Sense (Soli)',
      Connectivity: 'Wi-Fi, Bluetooth, Thread'
    },
    saleEndsAt: null
  },
  {
    id: 'smart-002',
    name: { zh: 'Amazon Echo Studio', en: 'Amazon Echo Studio', it: 'Amazon Echo Studio' },
    brand: 'amazon',
    category: 'smart-living',
    price: 199,
    originalPrice: 239,
    discount: 17,
    rating: 4.8,
    reviewCount: 890,
    stock: 35,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1543512214-318c77a07298?w=600&q=80'
    ],
    description: {
      zh: '高保真智能音箱，支持杜比全景声，自动适应房间声学环境。',
      en: 'High-fidelity smart speaker with Dolby Atmos and spatial audio processing technology.',
      it: 'Altoparlante intelligente ad alta fedeltà con Dolby Atmos e tecnologia audio spaziale.'
    },
    specifications: {
      Audio: '5 speakers, 330W peak',
      Format: 'Dolby Atmos, Sony 360',
      Hub: 'Built-in Zigbee hub',
      Size: '206 x 175 mm'
    },
    saleEndsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'smart-003',
    name: { zh: 'Sonos Era 300', en: 'Sonos Era 300', it: 'Sonos Era 300' },
    brand: 'sonos',
    category: 'smart-living',
    price: 499,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 125,
    stock: 20,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?w=600&q=80'
    ],
    description: {
      zh: '为空间音频而生。六个驱动单元将声音投射到四周，带来沉浸式听觉体验。',
      en: 'Built for spatial audio. Six drivers project sound all around for an immersive listening experience.',
      it: 'Costruito per l\'audio spaziale. Sei driver proiettano il suono ovunque per un\'esperienza immersiva.'
    },
    specifications: {
      Audio: '6 Class-D amps',
      Control: 'Touch, App, Voice',
      Connectivity: 'Wi-Fi 6, Bluetooth 5.2',
      Feature: 'Trueplay tuning'
    },
    saleEndsAt: null
  },
  {
    id: 'smart-004',
    name: { zh: 'Apple HomePod (第二代)', en: 'Apple HomePod (2nd Gen)', it: 'Apple HomePod (2a Gen)' },
    brand: 'apple',
    category: 'smart-living',
    price: 349,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 312,
    stock: 40,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80'
    ],
    description: {
      zh: '震撼音质，智能中枢。计算音频技术带来突破性声学表现。',
      en: 'Profound sound. Intelligent assistant. Computational audio pushes performance further.',
      it: 'Suono profondo. Assistente intelligente. L\'audio computazionale spinge le prestazioni oltre.'
    },
    specifications: {
      Woofer: 'High-excursion',
      Tweeters: '5 beamforming',
      Sensors: 'Room sensing',
      Chip: 'S7'
    },
    saleEndsAt: null
  },
  {
    id: 'smart-005',
    name: { zh: 'Samsung SmartThings Station', en: 'Samsung SmartThings Station', it: 'Samsung SmartThings Station' },
    brand: 'samsung',
    category: 'smart-living',
    price: 79,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 88,
    stock: 120,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1558002038-1091a1661116?w=600&q=80'
    ],
    description: {
      zh: '多合一智能家居中心和快速无线充电板。',
      en: 'All-in-one smart home hub and fast wireless charging pad.',
      it: 'Hub smart home tutto-in-uno e pad di ricarica wireless veloce.'
    },
    specifications: {
      Charging: '15W Wireless',
      Protocol: 'Matter, Thread, Zigbee',
      Button: 'Smart Button',
      Color: 'Black/White'
    },
    saleEndsAt: null
  },

  // --- KITCHEN (6) ---
  {
    id: 'kitchen-001',
    name: { zh: 'Smeg 50年代复古电水壶', en: 'Smeg 50s Retro Kettle', it: 'Bollitore Smeg Anni 50' },
    brand: 'smeg',
    category: 'kitchen',
    price: 169,
    originalPrice: 189,
    discount: 10,
    rating: 4.8,
    reviewCount: 567,
    stock: 30,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80'
    ],
    description: {
      zh: '标志性的复古设计，不锈钢机身，软开盖系统。',
      en: 'Iconic retro design, stainless steel body, soft-opening lid system.',
      it: 'Design retrò iconico, corpo in acciaio inossidabile, sistema di apertura soft.'
    },
    specifications: {
      Capacity: '1.7L',
      Power: '2400W',
      Material: 'Stainless Steel',
      Filter: 'Removable Limescale'
    },
    saleEndsAt: null
  },
  {
    id: 'kitchen-002',
    name: { zh: 'Nespresso Vertuo Next', en: 'Nespresso Vertuo Next', it: 'Nespresso Vertuo Next' },
    brand: 'nespresso',
    category: 'kitchen',
    price: 149,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 890,
    stock: 60,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1517080315808-16148eb84310?w=600&q=80'
    ],
    description: {
      zh: '离心萃取技术，一键制作5种杯量咖啡。环保再生材料制造。',
      en: 'Centrifusion technology, 5 cup sizes at the touch of a button. Made from recycled materials.',
      it: 'Tecnologia Centrifusion, 5 formati di tazza con un tocco. Realizzata con materiali riciclati.'
    },
    specifications: {
      Sizes: 'Espresso to Alto',
      Heatup: '30 seconds',
      Connectivity: 'Bluetooth/Wi-Fi',
      Material: '54% Recycled Plastic'
    },
    saleEndsAt: null
  },
  {
    id: 'kitchen-003',
    name: { zh: 'Philips Premium Airfryer XXL', en: 'Philips Premium Airfryer XXL', it: 'Philips Premium Airfryer XXL' },
    brand: 'philips',
    category: 'kitchen',
    price: 299,
    originalPrice: 349,
    discount: 14,
    rating: 4.9,
    reviewCount: 1200,
    stock: 25,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1626154670067-96a84f3eb438?w=600&q=80'
    ],
    description: {
      zh: '智能感应技术，自动调整时间和温度。去油技术，更健康。',
      en: 'Smart Sensing technology adjusts time and temperature automatically. Fat Removal technology.',
      it: 'Tecnologia Smart Sensing regola tempo e temperatura. Tecnologia Fat Removal.'
    },
    specifications: {
      Capacity: '1.4kg / 7.3L',
      Technology: 'Twin TurboStar',
      Programs: '5 Presets',
      Cleaning: 'Dishwasher safe parts'
    },
    saleEndsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'kitchen-004',
    name: { zh: 'Balmuda The Toaster', en: 'Balmuda The Toaster', it: 'Balmuda The Toaster' },
    brand: 'balmuda',
    category: 'kitchen',
    price: 299,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 345,
    stock: 15,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1588612509892-0b79148d8869?w=600&q=80'
    ],
    description: {
      zh: '独特的蒸汽技术和精准的温度控制，烤出完美的吐司。',
      en: 'Unique steam technology and precise temperature control for the perfect toast.',
      it: 'Tecnologia a vapore unica e controllo preciso della temperatura per il toast perfetto.'
    },
    specifications: {
      Modes: '5 Cooking Modes',
      Technology: 'Steam',
      Control: 'Digital Precision',
      Design: 'Award Winning'
    },
    saleEndsAt: null
  },
  {
    id: 'kitchen-005',
    name: { zh: 'Xiaomi 智能搅拌机', en: 'Xiaomi Smart Blender', it: 'Xiaomi Smart Blender' },
    brand: 'xiaomi',
    category: 'kitchen',
    price: 89,
    originalPrice: 109,
    discount: 18,
    rating: 4.5,
    reviewCount: 230,
    stock: 80,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=600&q=80'
    ],
    description: {
      zh: '冷热双打，OLED旋钮控制，App智能食谱联动。',
      en: 'Hot and cold blending, OLED knob control, smart app recipes.',
      it: 'Frullatura calda e fredda, controllo manopola OLED, ricette smart app.'
    },
    specifications: {
      Capacity: '1.6L',
      Motor: 'Variable Freq',
      Control: 'Mi Home App',
      Heating: 'Integrated'
    },
    saleEndsAt: null
  },
  {
    id: 'kitchen-006',
    name: { zh: 'Anova Precision Cooker 3.0', en: 'Anova Precision Cooker 3.0', it: 'Anova Precision Cooker 3.0' },
    brand: 'amazon', // using generic for Anova
    category: 'kitchen',
    price: 199,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 156,
    stock: 40,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1599321151608-8cc474668b31?w=600&q=80'
    ],
    description: {
      zh: '最新一代低温慢煮棒，双频Wi-Fi，精准温控。',
      en: 'Latest gen sous vide cooker, dual-band Wi-Fi, precise temp control.',
      it: 'Sous vide di ultima generazione, Wi-Fi dual-band, controllo temperatura preciso.'
    },
    specifications: {
      Power: '1100W',
      Flow: '8L/min',
      Connectivity: 'Wi-Fi',
      Water: 'IPX7 Resistant'
    },
    saleEndsAt: null
  },

  // --- CLEANING (5) ---
  {
    id: 'clean-001',
    name: { zh: 'Dyson V15 Detect', en: 'Dyson V15 Detect', it: 'Dyson V15 Detect' },
    brand: 'dyson',
    category: 'cleaning',
    price: 749,
    originalPrice: 799,
    discount: 6,
    rating: 4.9,
    reviewCount: 2300,
    stock: 45,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1558317374-a3594743e9d7?w=600&q=80'
    ],
    description: {
      zh: '激光探测微尘，压电式声学传感器实时统计灰尘数量。',
      en: 'Laser reveals microscopic dust. Piezo sensor counts and sizes dust particles.',
      it: 'Il laser rivela la polvere microscopica. Il sensore piezoelettrico conta le particelle.'
    },
    specifications: {
      Suction: '240 AW',
      Runtime: '60 mins',
      Bin: '0.77L',
      Screen: 'LCD'
    },
    saleEndsAt: null
  },
  {
    id: 'clean-002',
    name: { zh: 'Roborock S8 Pro Ultra', en: 'Roborock S8 Pro Ultra', it: 'Roborock S8 Pro Ultra' },
    brand: 'roborock',
    category: 'cleaning',
    price: 1499,
    originalPrice: 1599,
    discount: 6,
    rating: 4.8,
    reviewCount: 450,
    stock: 15,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1563714272213-333e72183c53?w=600&q=80'
    ],
    description: {
      zh: '全能基站，自动洗拖布、烘干、集尘、补水。6000Pa超强吸力。',
      en: 'All-in-one dock: washes, dries, empties, refills. 6000Pa suction.',
      it: 'Dock tutto-in-uno: lava, asciuga, svuota, riempie. Aspirazione 6000Pa.'
    },
    specifications: {
      Suction: '6000Pa',
      Mop: 'VibraRise 2.0',
      Navigation: 'PreciSense LiDAR',
      Avoidance: '3D Reactive'
    },
    saleEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'clean-003',
    name: { zh: 'Philips 8000 Series 空气净化器', en: 'Philips Air Purifier 8000', it: 'Purificatore Philips 8000' },
    brand: 'philips',
    category: 'cleaning',
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.7,
    reviewCount: 180,
    stock: 25,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1565355651532-8df95204480e?w=600&q=80'
    ],
    description: {
      zh: '去除99.9%的病毒和气溶胶。智能感应，静音运行。',
      en: 'Removes 99.9% of viruses and aerosols. Smart sensing, quiet operation.',
      it: 'Rimuove il 99.9% di virus e aerosol. Rilevamento intelligente, silenzioso.'
    },
    specifications: {
      Coverage: '135 m²',
      CADR: '520 m³/h',
      Filter: 'HEPA & Active Carbon',
      App: 'CleanHome+'
    },
    saleEndsAt: null
  },
  {
    id: 'clean-004',
    name: { zh: 'Xiaomi 蒸汽清洁机', en: 'Xiaomi Steam Cleaner', it: 'Pulitore a Vapore Xiaomi' },
    brand: 'xiaomi',
    category: 'cleaning',
    price: 129,
    originalPrice: null,
    discount: 0,
    rating: 4.4,
    reviewCount: 95,
    stock: 50,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80'
    ],
    description: {
      zh: '高温高压蒸汽，物理除菌99.99%。多刷头设计。',
      en: 'High temp & pressure steam, 99.99% sterilization. Multiple brush heads.',
      it: 'Vapore ad alta temperatura e pressione, sterilizzazione 99.99%. Testine multiple.'
    },
    specifications: {
      Temp: '105°C',
      Pressure: '3-5 Bar',
      Tank: '350ml',
      Heatup: '20s'
    },
    saleEndsAt: null
  },
  {
    id: 'clean-005',
    name: { zh: 'Blueair Blue 3210', en: 'Blueair Blue 3210', it: 'Blueair Blue 3210' },
    brand: 'philips', // generic proxy
    category: 'cleaning',
    price: 199,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 112,
    stock: 30,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1617105268482-a07997424d86?w=600&q=80'
    ],
    description: {
      zh: '极简设计，一键控制。360度进风，适合卧室使用。',
      en: 'Minimalist design, one-button control. 360-degree intake, ideal for bedrooms.',
      it: 'Design minimalista, controllo a un pulsante. Presa a 360 gradi, ideale per camere.'
    },
    specifications: {
      Coverage: '17 m²',
      Noise: '18-48 dB',
      Energy: '2-10W',
      Filter: 'HEPASilent'
    },
    saleEndsAt: null
  },

  // --- CLIMATE (4) ---
  {
    id: 'clim-001',
    name: { zh: 'Dyson Purifier Hot+Cool', en: 'Dyson Purifier Hot+Cool', it: 'Dyson Purifier Hot+Cool' },
    brand: 'dyson',
    category: 'climate',
    price: 699,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 560,
    stock: 22,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80'
    ],
    description: {
      zh: '净化空气，同时制暖或吹送凉风。全机密封符合HEPA H13标准。',
      en: 'Purifies air, heats and cools. Fully sealed to HEPA H13 standard.',
      it: 'Purifica l\'aria, riscalda e raffredda. Completamente sigillato standard HEPA H13.'
    },
    specifications: {
      Function: 'Purify, Heat, Cool',
      Oscillation: '350°',
      Sensors: 'Real-time LCD',
      Control: 'Voice & App'
    },
    saleEndsAt: null
  },
  {
    id: 'clim-002',
    name: { zh: 'Google Nest Thermostat', en: 'Google Nest Thermostat', it: 'Google Nest Thermostat' },
    brand: 'google',
    category: 'climate',
    price: 129,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 340,
    stock: 65,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1563456009-b6b668d298f2?w=600&q=80'
    ],
    description: {
      zh: '节能环保，远程控制。自动检测家中是否有人并调整温度。',
      en: 'Energy saving, remote control. Detects presence and adjusts temp automatically.',
      it: 'Risparmio energetico, controllo remoto. Rileva presenza e regola temp.'
    },
    specifications: {
      Display: 'Mirrored',
      Sensors: 'Motion, Temp, Light',
      Power: 'HVAC wiring',
      Compatibility: 'Matter'
    },
    saleEndsAt: null
  },
  {
    id: 'clim-003',
    name: { zh: 'Xiaomi 智米加湿器', en: 'Xiaomi Smartmi Evaporative Humidifier', it: 'Xiaomi Smartmi Humidifier' },
    brand: 'xiaomi',
    category: 'climate',
    price: 119,
    originalPrice: 149,
    discount: 20,
    rating: 4.6,
    reviewCount: 120,
    stock: 45,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80'
    ],
    description: {
      zh: '无雾蒸发技术，自然加湿。4L大水箱，15小时持久保湿。',
      en: 'Mist-free evaporation, natural humidification. 4L tank, 15h duration.',
      it: 'Evaporazione senza nebbia. Serbatoio 4L, durata 15h.'
    },
    specifications: {
      Type: 'Evaporative',
      Capacity: '4L',
      Rate: '240ml/h',
      Control: 'Mi Home App'
    },
    saleEndsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'clim-004',
    name: { zh: 'Stadler Form Otto Fan', en: 'Stadler Form Otto Fan', it: 'Ventilatore Stadler Form Otto' },
    brand: 'philips', // generic
    category: 'climate',
    price: 199,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 85,
    stock: 15,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1618941716939-553df9c692f8?w=600&q=80'
    ],
    description: {
      zh: '瑞士设计，竹制框架。工业风与自然材质的完美结合。',
      en: 'Swiss design, bamboo frame. Perfect blend of industrial style and nature.',
      it: 'Design svizzero, telaio in bambù. Mix perfetto di stile industriale e natura.'
    },
    specifications: {
      Frame: 'Bamboo',
      Speeds: '3 Levels',
      Tilt: 'Adjustable',
      Design: 'Carlo Borer'
    },
    saleEndsAt: null
  },

  // --- LIGHTING (5) ---
  {
    id: 'light-001',
    name: { zh: 'Philips Hue 入门套装', en: 'Philips Hue Starter Kit', it: 'Kit Base Philips Hue' },
    brand: 'philips',
    category: 'lighting',
    price: 189,
    originalPrice: 199,
    discount: 5,
    rating: 4.8,
    reviewCount: 1200,
    stock: 60,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80'
    ],
    description: {
      zh: '1600万色智能灯泡，支持Apple HomeKit, Alexa, Google。',
      en: '16 million colors smart bulbs. Supports HomeKit, Alexa, Google.',
      it: 'Lampadine smart 16 milioni di colori. Supporta HomeKit, Alexa, Google.'
    },
    specifications: {
      Included: '3 Bulbs + Bridge',
      Socket: 'E27 / E26',
      Lumens: '1100 per bulb',
      Colors: '16 Million'
    },
    saleEndsAt: null
  },
  {
    id: 'light-002',
    name: { zh: 'Dyson Solarcycle Morph', en: 'Dyson Solarcycle Morph', it: 'Dyson Solarcycle Morph' },
    brand: 'dyson',
    category: 'lighting',
    price: 599,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 150,
    stock: 20,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1513506003013-195c91171f15?w=600&q=80'
    ],
    description: {
      zh: '智能追踪本地日光。四种照明模式：任务、反射、展示、氛围。',
      en: 'Intelligently tracks local daylight. 4 modes: Task, Indirect, Feature, Ambient.',
      it: 'Traccia intelligentemente la luce diurna. 4 modalità: Lavoro, Indiretta, Feature, Ambiente.'
    },
    specifications: {
      Lifespan: '60 years',
      Motion: 'PIR Sensor',
      Control: 'Slide-touch',
      USB: 'USB-C charger'
    },
    saleEndsAt: null
  },
  {
    id: 'light-003',
    name: { zh: 'Nanoleaf Shapes Hexagons', en: 'Nanoleaf Shapes Hexagons', it: 'Nanoleaf Shapes Hexagons' },
    brand: 'google', // Generic proxy
    category: 'lighting',
    price: 199,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 340,
    stock: 45,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80'
    ],
    description: {
      zh: '模块化智能光板，音乐律动功能。打造个性化光影墙。',
      en: 'Modular smart light panels with music visualizer. Create personalized light walls.',
      it: 'Pannelli luminosi modulari con visualizzatore musica. Crea pareti luminose personalizzate.'
    },
    specifications: {
      Pack: '9 Panels',
      Mount: 'Double-sided tape',
      Feature: 'Touch reactive',
      Sync: 'Screen Mirror'
    },
    saleEndsAt: null
  },
  {
    id: 'light-004',
    name: { zh: 'Xiaomi 米家台灯 1S', en: 'Mi LED Desk Lamp 1S', it: 'Mi LED Desk Lamp 1S' },
    brand: 'xiaomi',
    category: 'lighting',
    price: 49,
    originalPrice: 59,
    discount: 17,
    rating: 4.8,
    reviewCount: 560,
    stock: 100,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=600&q=80'
    ],
    description: {
      zh: '国标A级照度，无可视频闪。支持HomeKit和米家App。',
      en: 'A-Class illumination, no video flicker. Supports HomeKit and Mi Home.',
      it: 'Illuminazione Classe A, nessun sfarfallio. Supporta HomeKit e Mi Home.'
    },
    specifications: {
      Modes: '4 Scene Modes',
      CRI: 'Ra90',
      Control: 'Knob + Voice',
      Design: 'Red Dot Award'
    },
    saleEndsAt: null
  },
  {
    id: 'light-005',
    name: { zh: 'Govee 电视背景灯 T2', en: 'Govee Envisual TV Backlight T2', it: 'Govee Envisual TV T2' },
    brand: 'amazon', // Generic proxy
    category: 'lighting',
    price: 139,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 210,
    stock: 40,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1593305841991-05c29736f87e?w=600&q=80'
    ],
    description: {
      zh: '双摄像头技术，精准捕捉屏幕色彩并同步到灯带。',
      en: 'Dual-camera technology captures screen colors accurately for backlight sync.',
      it: 'Tecnologia a doppia fotocamera cattura accuratamente i colori per la sincronizzazione.'
    },
    specifications: {
      Cameras: 'Dual',
      LEDs: '60 LEDs/m',
      Size: '55-65 inch TV',
      Control: 'App & Voice'
    },
    saleEndsAt: null
  },

  // --- WELLNESS (4) ---
  {
    id: 'well-001',
    name: { zh: 'Withings Body+ 智能秤', en: 'Withings Body+ Smart Scale', it: 'Bilancia Smart Withings Body+' },
    brand: 'amazon', // Generic proxy
    category: 'wellness',
    price: 99,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 320,
    stock: 40,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80'
    ],
    description: {
      zh: '完整身体成分分析：体重、体脂、水分、骨量、肌肉量。',
      en: 'Full body composition: weight, fat, water, bone, muscle.',
      it: 'Composizione corporea completa: peso, grasso, acqua, ossa, muscoli.'
    },
    specifications: {
      Metrics: 'Full Composition',
      Users: 'Up to 8',
      Sync: 'Wi-Fi & Bluetooth',
      App: 'Health Mate'
    },
    saleEndsAt: null
  },
  {
    id: 'well-002',
    name: { zh: 'Philips Sonicare DiamondClean', en: 'Philips Sonicare DiamondClean', it: 'Philips Sonicare DiamondClean' },
    brand: 'philips',
    category: 'wellness',
    price: 249,
    originalPrice: 299,
    discount: 17,
    rating: 4.8,
    reviewCount: 670,
    stock: 35,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1559676641-a675034c214c?w=600&q=80'
    ],
    description: {
      zh: '声波震动技术，去除多达10倍牙菌斑。高端充电玻璃杯。',
      en: 'Sonic technology removes up to 10x more plaque. Premium charging glass.',
      it: 'Tecnologia sonica rimuove fino a 10 volte più placca. Bicchiere di ricarica premium.'
    },
    specifications: {
      Modes: '5 Modes',
      Speed: '62000 movements/min',
      Battery: '14 days',
      Case: 'USB Charging'
    },
    saleEndsAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'well-003',
    name: { zh: 'Theragun Pro', en: 'Theragun Pro', it: 'Theragun Pro' },
    brand: 'amazon', // Generic proxy
    category: 'wellness',
    price: 599,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 180,
    stock: 15,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80'
    ],
    description: {
      zh: '专业级筋膜枪，深层肌肉治疗。静音电机，可调节力臂。',
      en: 'Professional-grade percussive therapy. Quiet motor, adjustable arm.',
      it: 'Terapia a percussione professionale. Motore silenzioso, braccio regolabile.'
    },
    specifications: {
      Amplitude: '16mm',
      Force: '60 lbs',
      Arm: 'Rotating',
      Batteries: '2 Swappable'
    },
    saleEndsAt: null
  },
  {
    id: 'well-004',
    name: { zh: 'Dyson Supersonic 吹风机', en: 'Dyson Supersonic Hair Dryer', it: 'Asciugacapelli Dyson Supersonic' },
    brand: 'dyson',
    category: 'wellness',
    price: 399,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 2500,
    stock: 50,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&q=80'
    ],
    description: {
      zh: '快速干发，无叶设计，智能温控防止秀发过热损伤。',
      en: 'Fast drying, no heat damage. Intelligent heat control.',
      it: 'Asciugatura rapida, nessun danno da calore. Controllo intelligente del calore.'
    },
    specifications: {
      Motor: 'V9 Digital',
      Airflow: '41L/s',
      Ions: 'Negative',
      Attachments: '5 included'
    },
    saleEndsAt: null
  }
];

// Helper functions (Unchanged)
export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter(p => p.category === category && p.isActive);

export const getProductsByBrand = (brand) =>
  products.filter(p => p.brand === brand && p.isActive);

export const getFeaturedProducts = () =>
  products.filter(p => p.isFeatured && p.isActive);

export const getNewProducts = () =>
  products.filter(p => p.isNew && p.isActive);

export const getSaleProducts = () =>
  products.filter(p => p.discount > 0 && p.isActive);

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p =>
    p.isActive && (
      p.name.en.toLowerCase().includes(lowercaseQuery) ||
      p.name.zh.includes(query) ||
      p.name.it.toLowerCase().includes(lowercaseQuery) ||
      p.brand.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
    )
  );
};

export const filterProducts = (filters) => {
  let result = products.filter(p => p.isActive);

  if (filters.category) {
    result = result.filter(p => p.category === filters.category);
  }

  if (filters.brand) {
    result = result.filter(p => p.brand === filters.brand);
  }

  if (filters.minPrice !== undefined) {
    result = result.filter(p => p.price >= filters.minPrice);
  }

  if (filters.maxPrice !== undefined) {
    result = result.filter(p => p.price <= filters.maxPrice);
  }

  if (filters.minRating !== undefined) {
    result = result.filter(p => p.rating >= filters.minRating);
  }

  if (filters.onSale) {
    result = result.filter(p => p.discount > 0);
  }

  return result;
};

export const sortProducts = (productList, sortBy) => {
  const sorted = [...productList];

  switch (sortBy) {
    case 'priceAsc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'priceDesc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'nameAsc':
      return sorted.sort((a, b) => a.name.en.localeCompare(b.name.en));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    default:
      return sorted;
  }
};
