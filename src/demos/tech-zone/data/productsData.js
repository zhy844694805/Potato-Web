// TechZone Products Data - 30+ products across 8 categories
export const products = [
  // PHONES (5)
  {
    id: 'phone-001',
    name: { zh: 'iPhone 15 Pro Max', en: 'iPhone 15 Pro Max', it: 'iPhone 15 Pro Max' },
    brand: 'apple',
    category: 'phones',
    price: 1299,
    originalPrice: 1399,
    discount: 7,
    rating: 4.8,
    reviewCount: 234,
    stock: 45,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80'
    ],
    description: {
      zh: 'Apple iPhone 15 Pro Max 配备 A17 Pro 芯片、钛金属设计、4800万像素主摄和 USB-C 接口。',
      en: 'Apple iPhone 15 Pro Max featuring A17 Pro chip, titanium design, 48MP main camera, and USB-C.',
      it: 'Apple iPhone 15 Pro Max con chip A17 Pro, design in titanio, fotocamera principale da 48MP e USB-C.'
    },
    specifications: {
      Display: '6.7" Super Retina XDR',
      Chip: 'A17 Pro',
      Storage: '256GB',
      Camera: '48MP + 12MP + 12MP',
      Battery: '4422 mAh'
    },
    saleEndsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'phone-002',
    name: { zh: 'Samsung Galaxy S24 Ultra', en: 'Samsung Galaxy S24 Ultra', it: 'Samsung Galaxy S24 Ultra' },
    brand: 'samsung',
    category: 'phones',
    price: 1199,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 189,
    stock: 32,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80'
    ],
    description: {
      zh: 'Samsung Galaxy S24 Ultra 配备 Galaxy AI、S Pen、2亿像素相机和钛金属边框。',
      en: 'Samsung Galaxy S24 Ultra with Galaxy AI, S Pen, 200MP camera, and titanium frame.',
      it: 'Samsung Galaxy S24 Ultra con Galaxy AI, S Pen, fotocamera da 200MP e cornice in titanio.'
    },
    specifications: {
      Display: '6.8" Dynamic AMOLED 2X',
      Chip: 'Snapdragon 8 Gen 3',
      Storage: '256GB',
      Camera: '200MP + 12MP + 50MP + 10MP',
      Battery: '5000 mAh'
    },
    saleEndsAt: null
  },
  {
    id: 'phone-003',
    name: { zh: '小米 14 Ultra', en: 'Xiaomi 14 Ultra', it: 'Xiaomi 14 Ultra' },
    brand: 'xiaomi',
    category: 'phones',
    price: 899,
    originalPrice: 999,
    discount: 10,
    rating: 4.6,
    reviewCount: 156,
    stock: 28,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80'
    ],
    description: {
      zh: '小米 14 Ultra 搭载徕卡光学镜头、骁龙8 Gen 3芯片，专业级影像体验。',
      en: 'Xiaomi 14 Ultra with Leica optics, Snapdragon 8 Gen 3, professional photography experience.',
      it: 'Xiaomi 14 Ultra con ottiche Leica, Snapdragon 8 Gen 3, esperienza fotografica professionale.'
    },
    specifications: {
      Display: '6.73" LTPO AMOLED',
      Chip: 'Snapdragon 8 Gen 3',
      Storage: '256GB',
      Camera: '50MP Leica Quad',
      Battery: '5000 mAh'
    },
    saleEndsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'phone-004',
    name: { zh: 'Google Pixel 8 Pro', en: 'Google Pixel 8 Pro', it: 'Google Pixel 8 Pro' },
    brand: 'google',
    category: 'phones',
    price: 799,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 98,
    stock: 15,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80'
    ],
    description: {
      zh: 'Google Pixel 8 Pro 拥有最强大的 AI 功能、7年更新支持和出色的计算摄影。',
      en: 'Google Pixel 8 Pro with powerful AI features, 7 years of updates, and amazing computational photography.',
      it: 'Google Pixel 8 Pro con potenti funzionalità AI, 7 anni di aggiornamenti e fotografia computazionale.'
    },
    specifications: {
      Display: '6.7" LTPO OLED',
      Chip: 'Google Tensor G3',
      Storage: '128GB',
      Camera: '50MP + 48MP + 48MP',
      Battery: '5050 mAh'
    },
    saleEndsAt: null
  },
  {
    id: 'phone-005',
    name: { zh: 'Sony Xperia 1 V', en: 'Sony Xperia 1 V', it: 'Sony Xperia 1 V' },
    brand: 'sony',
    category: 'phones',
    price: 1099,
    originalPrice: 1199,
    discount: 8,
    rating: 4.4,
    reviewCount: 67,
    stock: 12,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80'
    ],
    description: {
      zh: 'Sony Xperia 1 V 专业影像手机，4K HDR OLED屏幕，蔡司镜头。',
      en: 'Sony Xperia 1 V professional camera phone with 4K HDR OLED display and Zeiss optics.',
      it: 'Sony Xperia 1 V telefono con fotocamera professionale, display 4K HDR OLED e ottiche Zeiss.'
    },
    specifications: {
      Display: '6.5" 4K HDR OLED',
      Chip: 'Snapdragon 8 Gen 2',
      Storage: '256GB',
      Camera: '48MP Zeiss Triple',
      Battery: '5000 mAh'
    },
    saleEndsAt: null
  },

  // TABLETS (4)
  {
    id: 'tablet-001',
    name: { zh: 'iPad Pro 12.9英寸 M4', en: 'iPad Pro 12.9" M4', it: 'iPad Pro 12.9" M4' },
    brand: 'apple',
    category: 'tablets',
    price: 1299,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 312,
    stock: 25,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80'
    ],
    description: {
      zh: 'iPad Pro M4 芯片版，Ultra Retina XDR 显示屏，专业级性能。',
      en: 'iPad Pro with M4 chip, Ultra Retina XDR display, professional performance.',
      it: 'iPad Pro con chip M4, display Ultra Retina XDR, prestazioni professionali.'
    },
    specifications: {
      Display: '12.9" Ultra Retina XDR',
      Chip: 'Apple M4',
      Storage: '256GB',
      Camera: '12MP Wide + LiDAR',
      Battery: 'Up to 10 hours'
    },
    saleEndsAt: null
  },
  {
    id: 'tablet-002',
    name: { zh: 'Samsung Galaxy Tab S9 Ultra', en: 'Samsung Galaxy Tab S9 Ultra', it: 'Samsung Galaxy Tab S9 Ultra' },
    brand: 'samsung',
    category: 'tablets',
    price: 999,
    originalPrice: 1099,
    discount: 9,
    rating: 4.7,
    reviewCount: 145,
    stock: 18,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&q=80'
    ],
    description: {
      zh: 'Samsung Galaxy Tab S9 Ultra，14.6英寸超大屏幕，配备 S Pen。',
      en: 'Samsung Galaxy Tab S9 Ultra with 14.6" display and S Pen included.',
      it: 'Samsung Galaxy Tab S9 Ultra con display da 14.6" e S Pen inclusa.'
    },
    specifications: {
      Display: '14.6" Dynamic AMOLED 2X',
      Chip: 'Snapdragon 8 Gen 2',
      Storage: '256GB',
      Camera: '13MP + 8MP',
      Battery: '11200 mAh'
    },
    saleEndsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'tablet-003',
    name: { zh: '小米平板 6 Pro', en: 'Xiaomi Pad 6 Pro', it: 'Xiaomi Pad 6 Pro' },
    brand: 'xiaomi',
    category: 'tablets',
    price: 449,
    originalPrice: 499,
    discount: 10,
    rating: 4.5,
    reviewCount: 89,
    stock: 35,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&q=80'
    ],
    description: {
      zh: '小米平板 6 Pro，骁龙8+芯片，144Hz高刷屏，出色性价比。',
      en: 'Xiaomi Pad 6 Pro with Snapdragon 8+ Gen 1, 144Hz display, excellent value.',
      it: 'Xiaomi Pad 6 Pro con Snapdragon 8+ Gen 1, display 144Hz, ottimo rapporto qualità-prezzo.'
    },
    specifications: {
      Display: '11" LCD 144Hz',
      Chip: 'Snapdragon 8+ Gen 1',
      Storage: '256GB',
      Camera: '50MP + 20MP',
      Battery: '8600 mAh'
    },
    saleEndsAt: null
  },
  {
    id: 'tablet-004',
    name: { zh: 'Google Pixel Tablet', en: 'Google Pixel Tablet', it: 'Google Pixel Tablet' },
    brand: 'google',
    category: 'tablets',
    price: 599,
    originalPrice: null,
    discount: 0,
    rating: 4.3,
    reviewCount: 56,
    stock: 22,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80'
    ],
    description: {
      zh: 'Google Pixel Tablet，配备充电扬声器底座，智能家居控制中心。',
      en: 'Google Pixel Tablet with Charging Speaker Dock, smart home hub.',
      it: 'Google Pixel Tablet con dock altoparlante di ricarica, hub per casa intelligente.'
    },
    specifications: {
      Display: '10.95" LCD',
      Chip: 'Google Tensor G2',
      Storage: '128GB',
      Camera: '8MP',
      Battery: '27 Wh'
    },
    saleEndsAt: null
  },

  // LAPTOPS (4)
  {
    id: 'laptop-001',
    name: { zh: 'MacBook Pro 16英寸 M3 Max', en: 'MacBook Pro 16" M3 Max', it: 'MacBook Pro 16" M3 Max' },
    brand: 'apple',
    category: 'laptops',
    price: 2999,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 278,
    stock: 15,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
    ],
    description: {
      zh: 'MacBook Pro 16英寸 M3 Max，专业级性能，超长续航，Liquid Retina XDR显示屏。',
      en: 'MacBook Pro 16" M3 Max with pro performance, all-day battery, Liquid Retina XDR display.',
      it: 'MacBook Pro 16" M3 Max con prestazioni professionali, batteria tutto il giorno, display Liquid Retina XDR.'
    },
    specifications: {
      Display: '16.2" Liquid Retina XDR',
      Chip: 'Apple M3 Max',
      Memory: '36GB',
      Storage: '512GB SSD',
      Battery: 'Up to 22 hours'
    },
    saleEndsAt: null
  },
  {
    id: 'laptop-002',
    name: { zh: 'Samsung Galaxy Book4 Ultra', en: 'Samsung Galaxy Book4 Ultra', it: 'Samsung Galaxy Book4 Ultra' },
    brand: 'samsung',
    category: 'laptops',
    price: 2199,
    originalPrice: 2399,
    discount: 8,
    rating: 4.6,
    reviewCount: 89,
    stock: 10,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80'
    ],
    description: {
      zh: 'Samsung Galaxy Book4 Ultra，Intel Core Ultra处理器，RTX 4070显卡。',
      en: 'Samsung Galaxy Book4 Ultra with Intel Core Ultra processor and RTX 4070 graphics.',
      it: 'Samsung Galaxy Book4 Ultra con processore Intel Core Ultra e grafica RTX 4070.'
    },
    specifications: {
      Display: '16" 3K AMOLED',
      Chip: 'Intel Core Ultra 9',
      Memory: '32GB',
      Storage: '1TB SSD',
      GPU: 'NVIDIA RTX 4070'
    },
    saleEndsAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'laptop-003',
    name: { zh: '小米笔记本 Pro 16', en: 'Xiaomi Book Pro 16', it: 'Xiaomi Book Pro 16' },
    brand: 'xiaomi',
    category: 'laptops',
    price: 1299,
    originalPrice: null,
    discount: 0,
    rating: 4.4,
    reviewCount: 67,
    stock: 20,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80'
    ],
    description: {
      zh: '小米笔记本 Pro 16，4K OLED屏幕，轻薄便携，高性能办公。',
      en: 'Xiaomi Book Pro 16 with 4K OLED display, thin and light, high performance.',
      it: 'Xiaomi Book Pro 16 con display 4K OLED, sottile e leggero, alte prestazioni.'
    },
    specifications: {
      Display: '16" 4K OLED',
      Chip: 'Intel Core i7-13700H',
      Memory: '16GB',
      Storage: '512GB SSD',
      GPU: 'Intel Iris Xe'
    },
    saleEndsAt: null
  },
  {
    id: 'laptop-004',
    name: { zh: 'Sony VAIO SX14', en: 'Sony VAIO SX14', it: 'Sony VAIO SX14' },
    brand: 'sony',
    category: 'laptops',
    price: 1899,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 45,
    stock: 8,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
    ],
    description: {
      zh: 'Sony VAIO SX14，超轻碳纤维机身，商务旗舰笔记本。',
      en: 'Sony VAIO SX14, ultra-light carbon fiber body, business flagship laptop.',
      it: 'Sony VAIO SX14, corpo ultra-leggero in fibra di carbonio, laptop business di punta.'
    },
    specifications: {
      Display: '14" 4K UHD',
      Chip: 'Intel Core i7-1360P',
      Memory: '16GB',
      Storage: '512GB SSD',
      Weight: '999g'
    },
    saleEndsAt: null
  },

  // ACCESSORIES (4)
  {
    id: 'acc-001',
    name: { zh: 'Apple MagSafe充电器', en: 'Apple MagSafe Charger', it: 'Caricatore Apple MagSafe' },
    brand: 'apple',
    category: 'accessories',
    price: 49,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 456,
    stock: 120,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'
    ],
    description: {
      zh: 'Apple MagSafe充电器，磁吸对准，快速无线充电。',
      en: 'Apple MagSafe Charger with magnetic alignment for fast wireless charging.',
      it: 'Caricatore Apple MagSafe con allineamento magnetico per ricarica wireless veloce.'
    },
    specifications: {
      Power: '15W',
      Cable: '1m',
      Compatibility: 'iPhone 12+'
    },
    saleEndsAt: null
  },
  {
    id: 'acc-002',
    name: { zh: 'Anker 737 充电宝', en: 'Anker 737 Power Bank', it: 'Anker 737 Power Bank' },
    brand: 'anker',
    category: 'accessories',
    price: 149,
    originalPrice: 169,
    discount: 12,
    rating: 4.8,
    reviewCount: 234,
    stock: 65,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'
    ],
    description: {
      zh: 'Anker 737 充电宝，24000mAh大容量，140W超快充。',
      en: 'Anker 737 Power Bank, 24000mAh capacity, 140W ultra-fast charging.',
      it: 'Anker 737 Power Bank, capacità 24000mAh, ricarica ultra-veloce 140W.'
    },
    specifications: {
      Capacity: '24000mAh',
      'Max Output': '140W',
      Ports: 'USB-C x2, USB-A x1',
      Weight: '630g'
    },
    saleEndsAt: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'acc-003',
    name: { zh: 'Logitech MX Master 3S', en: 'Logitech MX Master 3S', it: 'Logitech MX Master 3S' },
    brand: 'logitech',
    category: 'accessories',
    price: 99,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 567,
    stock: 85,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80'
    ],
    description: {
      zh: 'Logitech MX Master 3S，静音点击，8000DPI，多设备切换。',
      en: 'Logitech MX Master 3S with quiet clicks, 8000 DPI, multi-device switching.',
      it: 'Logitech MX Master 3S con clic silenziosi, 8000 DPI, commutazione multi-dispositivo.'
    },
    specifications: {
      DPI: '8000',
      Buttons: '7',
      Battery: '70 days',
      Connection: 'Bluetooth + USB'
    },
    saleEndsAt: null
  },
  {
    id: 'acc-004',
    name: { zh: 'Samsung 45W超快充', en: 'Samsung 45W Super Fast Charger', it: 'Caricatore Samsung 45W' },
    brand: 'samsung',
    category: 'accessories',
    price: 39,
    originalPrice: 49,
    discount: 20,
    rating: 4.5,
    reviewCount: 189,
    stock: 150,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80'
    ],
    description: {
      zh: 'Samsung 45W超快充充电器，PPS快充技术，兼容多设备。',
      en: 'Samsung 45W Super Fast Charger with PPS technology, multi-device compatible.',
      it: 'Caricatore Samsung 45W con tecnologia PPS, compatibile multi-dispositivo.'
    },
    specifications: {
      Power: '45W',
      Type: 'USB-C PD 3.0',
      Cable: 'Not included'
    },
    saleEndsAt: null
  },

  // AUDIO (5)
  {
    id: 'audio-001',
    name: { zh: 'AirPods Pro 2', en: 'AirPods Pro 2', it: 'AirPods Pro 2' },
    brand: 'apple',
    category: 'audio',
    price: 249,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 789,
    stock: 95,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80'
    ],
    description: {
      zh: 'AirPods Pro 2，自适应音频，主动降噪，MagSafe充电盒。',
      en: 'AirPods Pro 2 with Adaptive Audio, Active Noise Cancellation, MagSafe case.',
      it: 'AirPods Pro 2 con Audio Adattivo, Cancellazione Attiva del Rumore, custodia MagSafe.'
    },
    specifications: {
      'Noise Cancellation': 'Active',
      Chip: 'H2',
      Battery: '6h + 30h case',
      'Water Resistance': 'IPX4'
    },
    saleEndsAt: null
  },
  {
    id: 'audio-002',
    name: { zh: 'Sony WH-1000XM5', en: 'Sony WH-1000XM5', it: 'Sony WH-1000XM5' },
    brand: 'sony',
    category: 'audio',
    price: 349,
    originalPrice: 399,
    discount: 13,
    rating: 4.9,
    reviewCount: 456,
    stock: 42,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'
    ],
    description: {
      zh: 'Sony WH-1000XM5，业界领先降噪，30小时续航，Hi-Res音质。',
      en: 'Sony WH-1000XM5 with industry-leading noise cancellation, 30h battery, Hi-Res audio.',
      it: 'Sony WH-1000XM5 con cancellazione del rumore leader del settore, batteria 30h, audio Hi-Res.'
    },
    specifications: {
      'Noise Cancellation': '8 Microphones',
      Battery: '30 hours',
      Drivers: '30mm',
      Weight: '250g'
    },
    saleEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'audio-003',
    name: { zh: 'Bose QuietComfort Ultra', en: 'Bose QuietComfort Ultra', it: 'Bose QuietComfort Ultra' },
    brand: 'bose',
    category: 'audio',
    price: 429,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 234,
    stock: 28,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80'
    ],
    description: {
      zh: 'Bose QuietComfort Ultra，沉浸式音效，世界级降噪。',
      en: 'Bose QuietComfort Ultra with Immersive Audio and world-class noise cancellation.',
      it: 'Bose QuietComfort Ultra con Audio Immersivo e cancellazione del rumore di classe mondiale.'
    },
    specifications: {
      'Spatial Audio': 'Immersive Audio',
      Battery: '24 hours',
      'Noise Cancellation': 'World-class',
      Connection: 'Bluetooth 5.3'
    },
    saleEndsAt: null
  },
  {
    id: 'audio-004',
    name: { zh: 'JBL Flip 6', en: 'JBL Flip 6', it: 'JBL Flip 6' },
    brand: 'jbl',
    category: 'audio',
    price: 129,
    originalPrice: 149,
    discount: 13,
    rating: 4.6,
    reviewCount: 678,
    stock: 75,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80'
    ],
    description: {
      zh: 'JBL Flip 6 蓝牙音箱，IP67防水，12小时播放。',
      en: 'JBL Flip 6 Bluetooth speaker, IP67 waterproof, 12 hours playtime.',
      it: 'Altoparlante Bluetooth JBL Flip 6, IP67 impermeabile, 12 ore di riproduzione.'
    },
    specifications: {
      'Water Resistance': 'IP67',
      Battery: '12 hours',
      Power: '30W',
      Weight: '550g'
    },
    saleEndsAt: null
  },
  {
    id: 'audio-005',
    name: { zh: 'Samsung Galaxy Buds2 Pro', en: 'Samsung Galaxy Buds2 Pro', it: 'Samsung Galaxy Buds2 Pro' },
    brand: 'samsung',
    category: 'audio',
    price: 179,
    originalPrice: 229,
    discount: 22,
    rating: 4.5,
    reviewCount: 345,
    stock: 55,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80'
    ],
    description: {
      zh: 'Samsung Galaxy Buds2 Pro，24bit Hi-Fi音质，智能降噪。',
      en: 'Samsung Galaxy Buds2 Pro with 24bit Hi-Fi sound and Intelligent ANC.',
      it: 'Samsung Galaxy Buds2 Pro con suono Hi-Fi 24bit e ANC Intelligente.'
    },
    specifications: {
      Audio: '24bit Hi-Fi',
      ANC: 'Intelligent',
      Battery: '5h + 18h case',
      Weight: '5.5g each'
    },
    saleEndsAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString()
  },

  // GAMING (4)
  {
    id: 'gaming-001',
    name: { zh: 'PlayStation 5', en: 'PlayStation 5', it: 'PlayStation 5' },
    brand: 'sony',
    category: 'gaming',
    price: 499,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 1234,
    stock: 20,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80'
    ],
    description: {
      zh: 'PlayStation 5 游戏主机，4K游戏，超快SSD，DualSense手柄。',
      en: 'PlayStation 5 console with 4K gaming, ultra-fast SSD, DualSense controller.',
      it: 'Console PlayStation 5 con gaming 4K, SSD ultra-veloce, controller DualSense.'
    },
    specifications: {
      GPU: '10.28 TFLOPS',
      SSD: '825GB Custom',
      Resolution: '4K 120Hz',
      'Ray Tracing': 'Yes'
    },
    saleEndsAt: null
  },
  {
    id: 'gaming-002',
    name: { zh: 'Logitech G Pro X 键盘', en: 'Logitech G Pro X Keyboard', it: 'Tastiera Logitech G Pro X' },
    brand: 'logitech',
    category: 'gaming',
    price: 149,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 234,
    stock: 45,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&q=80'
    ],
    description: {
      zh: 'Logitech G Pro X 机械键盘，可换轴体，RGB灯效。',
      en: 'Logitech G Pro X mechanical keyboard with swappable switches and RGB lighting.',
      it: 'Tastiera meccanica Logitech G Pro X con switch intercambiabili e illuminazione RGB.'
    },
    specifications: {
      Switches: 'GX Hot-swappable',
      Lighting: 'LIGHTSYNC RGB',
      Type: 'Tenkeyless',
      Cable: 'Detachable'
    },
    saleEndsAt: null
  },
  {
    id: 'gaming-003',
    name: { zh: 'Sony DualSense Edge', en: 'Sony DualSense Edge', it: 'Sony DualSense Edge' },
    brand: 'sony',
    category: 'gaming',
    price: 199,
    originalPrice: 219,
    discount: 9,
    rating: 4.6,
    reviewCount: 156,
    stock: 30,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600&q=80'
    ],
    description: {
      zh: 'Sony DualSense Edge 专业手柄，可自定义按键，可更换摇杆。',
      en: 'Sony DualSense Edge pro controller with customizable buttons and replaceable sticks.',
      it: 'Controller pro Sony DualSense Edge con pulsanti personalizzabili e stick sostituibili.'
    },
    specifications: {
      'Custom Buttons': 'Yes',
      'Stick Modules': 'Replaceable',
      'Trigger Stops': 'Adjustable',
      Battery: 'Rechargeable'
    },
    saleEndsAt: null
  },
  {
    id: 'gaming-004',
    name: { zh: 'Logitech G502 X Plus', en: 'Logitech G502 X Plus', it: 'Logitech G502 X Plus' },
    brand: 'logitech',
    category: 'gaming',
    price: 159,
    originalPrice: 179,
    discount: 11,
    rating: 4.8,
    reviewCount: 289,
    stock: 60,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80'
    ],
    description: {
      zh: 'Logitech G502 X Plus 无线游戏鼠标，LIGHTFORCE混合开关，HERO 25K传感器。',
      en: 'Logitech G502 X Plus wireless gaming mouse with LIGHTFORCE switches and HERO 25K sensor.',
      it: 'Mouse gaming wireless Logitech G502 X Plus con switch LIGHTFORCE e sensore HERO 25K.'
    },
    specifications: {
      Sensor: 'HERO 25K',
      Switches: 'LIGHTFORCE',
      DPI: '25,600',
      Battery: '130 hours'
    },
    saleEndsAt: null
  },

  // SMART HOME (4)
  {
    id: 'smarthome-001',
    name: { zh: 'Google Nest Hub Max', en: 'Google Nest Hub Max', it: 'Google Nest Hub Max' },
    brand: 'google',
    category: 'smarthome',
    price: 229,
    originalPrice: 249,
    discount: 8,
    rating: 4.5,
    reviewCount: 345,
    stock: 40,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80'
    ],
    description: {
      zh: 'Google Nest Hub Max，10英寸智能显示屏，内置摄像头，Google Assistant。',
      en: 'Google Nest Hub Max, 10" smart display with built-in camera and Google Assistant.',
      it: 'Google Nest Hub Max, display intelligente 10" con fotocamera integrata e Google Assistant.'
    },
    specifications: {
      Display: '10" HD',
      Camera: '6.5MP Nest Cam',
      Speakers: 'Stereo',
      Assistant: 'Google'
    },
    saleEndsAt: null
  },
  {
    id: 'smarthome-002',
    name: { zh: 'Apple HomePod mini', en: 'Apple HomePod mini', it: 'Apple HomePod mini' },
    brand: 'apple',
    category: 'smarthome',
    price: 99,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 567,
    stock: 85,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&q=80'
    ],
    description: {
      zh: 'Apple HomePod mini，小巧音箱，Siri智能控制，智能家居中心。',
      en: 'Apple HomePod mini, compact speaker with Siri and smart home hub.',
      it: 'Apple HomePod mini, altoparlante compatto con Siri e hub per casa intelligente.'
    },
    specifications: {
      Audio: 'Full-range driver',
      Assistant: 'Siri',
      Connectivity: 'Wi-Fi, Thread',
      Height: '84.3mm'
    },
    saleEndsAt: null
  },
  {
    id: 'smarthome-003',
    name: { zh: 'DJI Mini 3 Pro', en: 'DJI Mini 3 Pro', it: 'DJI Mini 3 Pro' },
    brand: 'dji',
    category: 'smarthome',
    price: 759,
    originalPrice: 829,
    discount: 8,
    rating: 4.8,
    reviewCount: 234,
    stock: 18,
    isActive: true,
    isNew: false,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80'
    ],
    description: {
      zh: 'DJI Mini 3 Pro 无人机，4K HDR视频，三向避障，249g轻量化。',
      en: 'DJI Mini 3 Pro drone with 4K HDR video, tri-directional obstacle sensing, 249g.',
      it: 'Drone DJI Mini 3 Pro con video 4K HDR, sensori ostacoli tri-direzionali, 249g.'
    },
    specifications: {
      Camera: '48MP, 4K/60fps',
      'Flight Time': '34 min',
      Weight: '249g',
      'Obstacle Sensing': 'Tri-directional'
    },
    saleEndsAt: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'smarthome-004',
    name: { zh: '小米扫地机器人 S10+', en: 'Xiaomi Robot Vacuum S10+', it: 'Xiaomi Robot Vacuum S10+' },
    brand: 'xiaomi',
    category: 'smarthome',
    price: 449,
    originalPrice: 499,
    discount: 10,
    rating: 4.5,
    reviewCount: 189,
    stock: 35,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
    ],
    description: {
      zh: '小米扫地机器人 S10+，4000Pa吸力，自动集尘，LDS激光导航。',
      en: 'Xiaomi Robot Vacuum S10+ with 4000Pa suction, auto-empty station, LDS navigation.',
      it: 'Xiaomi Robot Vacuum S10+ con aspirazione 4000Pa, svuotamento automatico, navigazione LDS.'
    },
    specifications: {
      Suction: '4000Pa',
      Battery: '5200mAh',
      Navigation: 'LDS Laser',
      'Dust Bin': 'Auto-empty'
    },
    saleEndsAt: null
  },

  // WEARABLES (4)
  {
    id: 'wearable-001',
    name: { zh: 'Apple Watch Ultra 2', en: 'Apple Watch Ultra 2', it: 'Apple Watch Ultra 2' },
    brand: 'apple',
    category: 'wearables',
    price: 799,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 456,
    stock: 25,
    isActive: true,
    isNew: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80'
    ],
    description: {
      zh: 'Apple Watch Ultra 2，钛金属外壳，双频GPS，100米防水。',
      en: 'Apple Watch Ultra 2 with titanium case, dual-frequency GPS, 100m water resistant.',
      it: 'Apple Watch Ultra 2 con cassa in titanio, GPS dual-frequency, resistente 100m.'
    },
    specifications: {
      Case: '49mm Titanium',
      Display: 'Always-On Retina',
      'Water Resistance': '100m',
      Battery: '36 hours'
    },
    saleEndsAt: null
  },
  {
    id: 'wearable-002',
    name: { zh: 'Samsung Galaxy Watch 6 Classic', en: 'Samsung Galaxy Watch 6 Classic', it: 'Samsung Galaxy Watch 6 Classic' },
    brand: 'samsung',
    category: 'wearables',
    price: 399,
    originalPrice: 449,
    discount: 11,
    rating: 4.6,
    reviewCount: 234,
    stock: 35,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
    ],
    description: {
      zh: 'Samsung Galaxy Watch 6 Classic，旋转表圈，钛金属表壳，健康监测。',
      en: 'Samsung Galaxy Watch 6 Classic with rotating bezel, titanium case, health monitoring.',
      it: 'Samsung Galaxy Watch 6 Classic con ghiera rotante, cassa in titanio, monitoraggio salute.'
    },
    specifications: {
      Case: '47mm Titanium',
      Display: 'Super AMOLED',
      'Health Sensors': 'BioActive',
      Battery: '40+ hours'
    },
    saleEndsAt: null
  },
  {
    id: 'wearable-003',
    name: { zh: '小米手环 8 Pro', en: 'Xiaomi Smart Band 8 Pro', it: 'Xiaomi Smart Band 8 Pro' },
    brand: 'xiaomi',
    category: 'wearables',
    price: 69,
    originalPrice: 79,
    discount: 13,
    rating: 4.4,
    reviewCount: 567,
    stock: 150,
    isActive: true,
    isNew: false,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80'
    ],
    description: {
      zh: '小米手环 8 Pro，1.74英寸AMOLED屏，独立GPS，14天续航。',
      en: 'Xiaomi Smart Band 8 Pro with 1.74" AMOLED, built-in GPS, 14-day battery.',
      it: 'Xiaomi Smart Band 8 Pro con AMOLED 1.74", GPS integrato, batteria 14 giorni.'
    },
    specifications: {
      Display: '1.74" AMOLED',
      GPS: 'Built-in',
      Battery: '14 days',
      'Water Resistance': '5ATM'
    },
    saleEndsAt: null
  },
  {
    id: 'wearable-004',
    name: { zh: 'Google Pixel Watch 2', en: 'Google Pixel Watch 2', it: 'Google Pixel Watch 2' },
    brand: 'google',
    category: 'wearables',
    price: 349,
    originalPrice: null,
    discount: 0,
    rating: 4.3,
    reviewCount: 123,
    stock: 28,
    isActive: true,
    isNew: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
    ],
    description: {
      zh: 'Google Pixel Watch 2，Wear OS，Fitbit健康追踪，全天电池。',
      en: 'Google Pixel Watch 2 with Wear OS, Fitbit health tracking, all-day battery.',
      it: 'Google Pixel Watch 2 con Wear OS, monitoraggio salute Fitbit, batteria tutto il giorno.'
    },
    specifications: {
      Case: '41mm Aluminum',
      OS: 'Wear OS 4',
      Health: 'Fitbit sensors',
      Battery: '24 hours'
    },
    saleEndsAt: null
  }
];

// Helper functions
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
