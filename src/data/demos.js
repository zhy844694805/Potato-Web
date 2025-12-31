/**
 * Demo Sites Data
 * Contains metadata for all demo sites in the portfolio
 */

export const demoCategories = [
  { value: 'all', label: { zh: '全部', en: 'All', it: 'Tutti' } },
  { value: 'restaurant', label: { zh: '餐饮', en: 'Restaurant', it: 'Ristorante' } },
  { value: 'beauty', label: { zh: '美容', en: 'Beauty', it: 'Bellezza' } },
  { value: 'professional', label: { zh: '专业服务', en: 'Professional', it: 'Professionale' } },
  { value: 'retail', label: { zh: '零售', en: 'Retail', it: 'Vendita' } },
  { value: 'saas', label: { zh: 'SaaS', en: 'SaaS', it: 'SaaS' } },
  { value: 'education', label: { zh: '教育', en: 'Education', it: 'Educazione' } },
  { value: 'healthcare', label: { zh: '医疗', en: 'Healthcare', it: 'Sanità' } },
  { value: 'travel', label: { zh: '旅游', en: 'Travel', it: 'Viaggi' } }
]

export const demos = [
  {
    id: 'sakura-milano',
    slug: 'sakura-milano',
    name: { zh: '樱花米兰', en: 'Sakura Milano', it: 'Sakura Milano' },
    description: {
      zh: '高端日式料理餐厅网站，包含菜单、预订和关于页面',
      en: 'Premium Japanese restaurant website with menu, reservations, and about pages',
      it: 'Sito web di ristorante giapponese premium con menu, prenotazioni e pagine informative'
    },
    category: 'restaurant',
    color: '#d4a574',
    features: ['menu', 'reservation', 'about', 'contact'],
    thumbnail: '/images/demos/sakura-milano.jpg'
  },
  {
    id: 'sushi-moto',
    slug: 'sushi-moto',
    name: { zh: '寿司元', en: 'Sushi Moto', it: 'Sushi Moto' },
    description: {
      zh: '现代寿司外卖平台，简洁设计',
      en: 'Modern sushi takeaway platform with clean design',
      it: 'Piattaforma moderna per sushi da asporto con design pulito'
    },
    category: 'restaurant',
    color: '#e74c3c',
    features: ['menu', 'ordering'],
    thumbnail: '/images/demos/sushi-moto.jpg'
  },
  {
    id: 'koku-sushi',
    slug: 'koku-sushi',
    name: { zh: '谷寿司', en: 'Koku Sushi', it: 'Koku Sushi' },
    description: {
      zh: '传统日式寿司店网站',
      en: 'Traditional Japanese sushi restaurant website',
      it: 'Sito web di ristorante sushi tradizionale giapponese'
    },
    category: 'restaurant',
    color: '#2c3e50',
    features: ['menu', 'about'],
    thumbnail: '/images/demos/koku-sushi.jpg'
  },
  {
    id: 'yume-sushi',
    slug: 'yume-sushi',
    name: { zh: '梦寿司', en: 'Yume Sushi', it: 'Yume Sushi' },
    description: {
      zh: '创意寿司餐厅展示网站',
      en: 'Creative sushi restaurant showcase website',
      it: 'Sito web vetrina per ristorante sushi creativo'
    },
    category: 'restaurant',
    color: '#9b59b6',
    features: ['menu', 'gallery'],
    thumbnail: '/images/demos/yume-sushi.jpg'
  },
  {
    id: 'golden-koi',
    slug: 'golden-koi',
    name: { zh: '金鲤', en: 'Golden Koi', it: 'Golden Koi' },
    description: {
      zh: '中式高端餐厅网站',
      en: 'Upscale Chinese restaurant website',
      it: 'Sito web di ristorante cinese di lusso'
    },
    category: 'restaurant',
    color: '#f39c12',
    features: ['menu', 'reservation', 'events'],
    thumbnail: '/images/demos/golden-koi.jpg'
  },
  {
    id: 'mama-chen',
    slug: 'mama-chen',
    name: { zh: '陈妈妈厨房', en: 'Mama Chen', it: 'Mama Chen' },
    description: {
      zh: '家常中餐馆网站，温馨风格',
      en: 'Home-style Chinese restaurant with warm design',
      it: 'Ristorante cinese casalingo con design accogliente'
    },
    category: 'restaurant',
    color: '#e67e22',
    features: ['menu', 'about', 'delivery'],
    thumbnail: '/images/demos/mama-chen.jpg'
  },
  {
    id: 'hungry-dragon',
    slug: 'hungry-dragon',
    name: { zh: '饿龙外卖', en: 'Hungry Dragon', it: 'Hungry Dragon' },
    description: {
      zh: '中餐外卖平台',
      en: 'Chinese food delivery platform',
      it: 'Piattaforma di consegna cibo cinese'
    },
    category: 'restaurant',
    color: '#c0392b',
    features: ['menu', 'ordering', 'tracking'],
    thumbnail: '/images/demos/hungry-dragon.jpg'
  },
  {
    id: 'boba-tea',
    slug: 'boba-tea',
    name: { zh: '珍珠奶茶', en: 'Boba Tea', it: 'Boba Tea' },
    description: {
      zh: '奶茶店网站，年轻时尚',
      en: 'Bubble tea shop website with trendy design',
      it: 'Sito web di negozio bubble tea con design alla moda'
    },
    category: 'restaurant',
    color: '#ff6b9d',
    features: ['menu', 'ordering'],
    thumbnail: '/images/demos/boba-tea.jpg'
  },
  {
    id: 'jade-spa',
    slug: 'jade-spa',
    name: { zh: '翡翠养生', en: 'Jade Spa', it: 'Jade Spa' },
    description: {
      zh: '高端中式养生SPA网站',
      en: 'Luxury Chinese wellness spa website',
      it: 'Sito web spa benessere cinese di lusso'
    },
    category: 'beauty',
    color: '#1abc9c',
    features: ['services', 'booking', 'about'],
    thumbnail: '/images/demos/jade-spa.jpg'
  },
  {
    id: 'beauty-book',
    slug: 'beauty-book',
    name: { zh: '美丽预约', en: 'Beauty Book', it: 'Beauty Book' },
    description: {
      zh: '美容预约平台',
      en: 'Beauty appointment booking platform',
      it: 'Piattaforma di prenotazione appuntamenti bellezza'
    },
    category: 'beauty',
    color: '#e91e63',
    features: ['services', 'booking', 'gallery'],
    thumbnail: '/images/demos/beauty-book.jpg'
  },
  {
    id: 'milan-hair',
    slug: 'milan-hair',
    name: { zh: '米兰发廊', en: 'Milan Hair', it: 'Milan Hair' },
    description: {
      zh: '时尚发型设计工作室',
      en: 'Trendy hair design studio website',
      it: 'Sito web studio di design per capelli alla moda'
    },
    category: 'beauty',
    color: '#673ab7',
    features: ['services', 'gallery', 'booking'],
    thumbnail: '/images/demos/milan-hair.jpg'
  },
  {
    id: 'zheng-law',
    slug: 'zheng-law',
    name: { zh: '郑氏律所', en: 'Zheng Law', it: 'Zheng Law' },
    description: {
      zh: '华人律师事务所网站，专业可信',
      en: 'Chinese law firm website with professional design',
      it: 'Sito web studio legale cinese con design professionale'
    },
    category: 'professional',
    color: '#1a365d',
    features: ['services', 'cases', 'faq', 'contact'],
    thumbnail: '/images/demos/zheng-law.jpg'
  },
  {
    id: 'euro-tax',
    slug: 'euro-tax',
    name: { zh: '欧洲税务', en: 'Euro Tax', it: 'Euro Tax' },
    description: {
      zh: '税务咨询公司网站',
      en: 'Tax consulting company website',
      it: 'Sito web società di consulenza fiscale'
    },
    category: 'professional',
    color: '#2980b9',
    features: ['services', 'about', 'contact'],
    thumbnail: '/images/demos/euro-tax.jpg'
  },
  {
    id: 'dragon-design',
    slug: 'dragon-design',
    name: { zh: '龙腾设计', en: 'Dragon Design', it: 'Dragon Design' },
    description: {
      zh: '创意设计工作室网站',
      en: 'Creative design studio website',
      it: 'Sito web studio di design creativo'
    },
    category: 'professional',
    color: '#e74c3c',
    features: ['portfolio', 'services', 'about'],
    thumbnail: '/images/demos/dragon-design.jpg'
  },
  {
    id: 'prato-fashion',
    slug: 'prato-fashion',
    name: { zh: '普拉托时尚', en: 'Prato Fashion', it: 'Prato Fashion' },
    description: {
      zh: '服装批发电商网站',
      en: 'Fashion wholesale e-commerce website',
      it: 'Sito web e-commerce moda all\'ingrosso'
    },
    category: 'retail',
    color: '#8e44ad',
    features: ['catalog', 'about', 'contact'],
    thumbnail: '/images/demos/prato-fashion.jpg'
  },
  {
    id: 'dragon-trade',
    slug: 'dragon-trade',
    name: { zh: '龙腾贸易', en: 'Dragon Trade', it: 'Dragon Trade' },
    description: {
      zh: '进出口贸易公司网站',
      en: 'Import/export trading company website',
      it: 'Sito web società di commercio import/export'
    },
    category: 'retail',
    color: '#c0392b',
    features: ['products', 'services', 'about'],
    thumbnail: '/images/demos/dragon-trade.jpg'
  },
  {
    id: 'china-mart',
    slug: 'china-mart',
    name: { zh: '华超商城', en: 'China Mart', it: 'China Mart' },
    description: {
      zh: '中国超市在线商城',
      en: 'Chinese supermarket online store',
      it: 'Negozio online supermercato cinese'
    },
    category: 'retail',
    color: '#e74c3c',
    features: ['products', 'ordering', 'delivery'],
    thumbnail: '/images/demos/china-mart.jpg'
  },
  {
    id: 'dragon-ship',
    slug: 'dragon-ship',
    name: { zh: '龙船物流', en: 'Dragon Ship', it: 'Dragon Ship' },
    description: {
      zh: '国际物流货运网站',
      en: 'International logistics shipping website',
      it: 'Sito web spedizioni logistica internazionale'
    },
    category: 'retail',
    color: '#3498db',
    features: ['services', 'tracking', 'quote'],
    thumbnail: '/images/demos/dragon-ship.jpg'
  },
  {
    id: 'casa-milano',
    slug: 'casa-milano',
    name: { zh: '米兰之家', en: 'Casa Milano', it: 'Casa Milano' },
    description: {
      zh: '房产中介网站',
      en: 'Real estate agency website',
      it: 'Sito web agenzia immobiliare'
    },
    category: 'professional',
    color: '#27ae60',
    features: ['listings', 'search', 'contact'],
    thumbnail: '/images/demos/casa-milano.jpg'
  },
  {
    id: 'cloud-task',
    slug: 'cloud-task',
    name: { zh: '云任务', en: 'Cloud Task', it: 'Cloud Task' },
    description: {
      zh: 'SaaS项目管理平台',
      en: 'SaaS project management platform',
      it: 'Piattaforma SaaS di gestione progetti'
    },
    category: 'saas',
    color: '#3498db',
    features: ['dashboard', 'tasks', 'team'],
    thumbnail: '/images/demos/cloud-task.jpg'
  },
  {
    id: 'milan-drive',
    slug: 'milan-drive',
    name: { zh: '米兰驾校', en: 'Milan Drive', it: 'Milan Drive' },
    description: {
      zh: '华人驾校网站',
      en: 'Chinese driving school website',
      it: 'Sito web scuola guida cinese'
    },
    category: 'education',
    color: '#2ecc71',
    features: ['courses', 'booking', 'about'],
    thumbnail: '/images/demos/milan-drive.jpg'
  },
  {
    id: 'lingo-bridge',
    slug: 'lingo-bridge',
    name: { zh: '语桥学院', en: 'Lingo Bridge', it: 'Lingo Bridge' },
    description: {
      zh: '语言培训学校网站',
      en: 'Language training school website',
      it: 'Sito web scuola di formazione linguistica'
    },
    category: 'education',
    color: '#9b59b6',
    features: ['courses', 'teachers', 'enrollment'],
    thumbnail: '/images/demos/lingo-bridge.jpg'
  },
  {
    id: 'vita-care',
    slug: 'vita-care',
    name: { zh: '维塔健康', en: 'Vita Care', it: 'Vita Care' },
    description: {
      zh: '健康诊所网站',
      en: 'Health clinic website',
      it: 'Sito web clinica sanitaria'
    },
    category: 'healthcare',
    color: '#1abc9c',
    features: ['services', 'doctors', 'booking'],
    thumbnail: '/images/demos/vita-care.jpg'
  },
  {
    id: 'yikang-tcm',
    slug: 'yikang-tcm',
    name: { zh: '怡康中医', en: 'Yikang TCM', it: 'Yikang TCM' },
    description: {
      zh: '中医诊所网站',
      en: 'Traditional Chinese medicine clinic website',
      it: 'Sito web clinica medicina tradizionale cinese'
    },
    category: 'healthcare',
    color: '#8b4513',
    features: ['services', 'doctors', 'booking'],
    thumbnail: '/images/demos/yikang-tcm.jpg'
  },
  {
    id: 'dragon-travel',
    slug: 'dragon-travel',
    name: { zh: '龙腾旅游', en: 'Dragon Travel', it: 'Dragon Travel' },
    description: {
      zh: '旅行社网站',
      en: 'Travel agency website',
      it: 'Sito web agenzia viaggi'
    },
    category: 'travel',
    color: '#e67e22',
    features: ['tours', 'booking', 'about'],
    thumbnail: '/images/demos/dragon-travel.jpg'
  }
]

export const getDemosByCategory = (category) => {
  if (category === 'all') return demos
  return demos.filter(demo => demo.category === category)
}

export const getDemoById = (id) => {
  return demos.find(demo => demo.id === id)
}
