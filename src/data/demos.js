/**
 * Demo Sites Data
 * Contains metadata for the Premium 12 Portfolio Showcases
 */

export const demoCategories = [
  { value: 'all', label: { zh: '全部', en: 'All', it: 'Tutti' } },
  { value: 'retail', label: { zh: '电商零售', en: 'E-Commerce', it: 'E-Commerce' } },
  { value: 'restaurant', label: { zh: '餐饮美食', en: 'Restaurant', it: 'Ristorazione' } },
  { value: 'service', label: { zh: '专业服务', en: 'Services', it: 'Servizi' } },
  { value: 'saas', label: { zh: '软件平台', en: 'SaaS', it: 'Software' } }
]

export const demos = [
  // --- Retail & E-Commerce ---
  {
    id: 'tech-zone',
    slug: 'tech-zone',
    name: { zh: '数码地带', en: 'Tech Zone', it: 'Tech Zone' },
    description: {
      zh: '全功能数码产品电商平台，包含购物车、结算和后台管理',
      en: 'Full-featured tech e-commerce platform with cart, checkout, and admin dashboard',
      it: 'Piattaforma e-commerce completa per prodotti tecnologici con carrello e dashboard'
    },
    category: 'retail',
    color: '#3b82f6',
    features: ['shop', 'cart', 'admin', 'wishlist'],
    thumbnail: '/images/demos/tech-zone.jpg'
  },
  {
    id: 'china-mart',
    slug: 'china-mart',
    name: { zh: '华超商城', en: 'China Mart', it: 'China Mart' },
    description: {
      zh: '大型中国超市在线生鲜配送平台',
      en: 'Comprehensive online supermarket and fresh food delivery platform',
      it: 'Piattaforma online completa per supermercati e consegna di alimenti freschi'
    },
    category: 'retail',
    color: '#e74c3c',
    features: ['products', 'ordering', 'delivery'],
    thumbnail: '/images/demos/china-mart.jpg'
  },
  {
    id: 'prato-fashion',
    slug: 'prato-fashion',
    name: { zh: '普拉托时尚', en: 'Prato Fashion', it: 'Prato Fashion' },
    description: {
      zh: 'B2B服装批发订货平台，专为时尚行业设计',
      en: 'B2B fashion wholesale ordering platform designed for the industry',
      it: 'Piattaforma di ordinazione all\'ingrosso B2B progettata per il settore moda'
    },
    category: 'retail',
    color: '#8e44ad',
    features: ['catalog', 'b2b', 'bulk-order'],
    thumbnail: '/images/demos/prato-fashion.jpg'
  },
  {
    id: 'dragon-trade',
    slug: 'dragon-trade',
    name: { zh: '龙腾贸易', en: 'Dragon Trade', it: 'Dragon Trade' },
    description: {
      zh: '国际进出口贸易公司展示型官网',
      en: 'Corporate showcase website for international import/export trading',
      it: 'Sito vetrina aziendale per il commercio internazionale import/export'
    },
    category: 'retail',
    color: '#c0392b',
    features: ['products', 'services', 'corporate'],
    thumbnail: '/images/demos/dragon-trade.jpg'
  },

  // --- Restaurant & Food ---
  {
    id: 'sakura-milano',
    slug: 'sakura-milano',
    name: { zh: '樱花米兰', en: 'Sakura Milano', it: 'Sakura Milano' },
    description: {
      zh: '高端日式料理品牌官网，沉浸式视觉体验',
      en: 'Premium Japanese restaurant brand website with immersive visual experience',
      it: 'Sito web del marchio di ristoranti giapponesi premium con esperienza visiva coinvolgente'
    },
    category: 'restaurant',
    color: '#d4a574',
    features: ['menu', 'reservation', 'brand'],
    thumbnail: '/images/demos/sakura-milano.jpg'
  },
  {
    id: 'hungry-dragon',
    slug: 'hungry-dragon',
    name: { zh: '饿龙外卖', en: 'Hungry Dragon', it: 'Hungry Dragon' },
    description: {
      zh: '功能完善的中餐外卖配送平台',
      en: 'Fully functional Chinese food delivery platform',
      it: 'Piattaforma di consegna cibo cinese completamente funzionale'
    },
    category: 'restaurant',
    color: '#c0392b',
    features: ['menu', 'ordering', 'tracking'],
    thumbnail: '/images/demos/hungry-dragon.jpg'
  },
  {
    id: 'sushi-moto',
    slug: 'sushi-moto',
    name: { zh: '寿司元', en: 'Sushi Moto', it: 'Sushi Moto' },
    description: {
      zh: '现代极简风格的寿司外卖与点餐网站',
      en: 'Modern minimalist sushi takeaway and ordering website',
      it: 'Sito web moderno e minimalista per sushi da asporto e ordinazioni'
    },
    category: 'restaurant',
    color: '#e74c3c',
    features: ['menu', 'ordering', 'minimal'],
    thumbnail: '/images/demos/sushi-moto.jpg'
  },

  // --- Services & Professional ---
  {
    id: 'jade-spa',
    slug: 'jade-spa',
    name: { zh: '翡翠养生', en: 'Jade Spa', it: 'Jade Spa' },
    description: {
      zh: '东方美学风格的高端养生SPA会所官网',
      en: 'High-end wellness SPA website with Oriental aesthetic style',
      it: 'Sito web SPA benessere di fascia alta con stile estetico orientale'
    },
    category: 'service',
    color: '#1abc9c',
    features: ['services', 'booking', 'zen'],
    thumbnail: '/images/demos/jade-spa.jpg'
  },
  {
    id: 'beauty-book',
    slug: 'beauty-book',
    name: { zh: '美丽预约', en: 'Beauty Book', it: 'Beauty Book' },
    description: {
      zh: '通用的美容美发行业在线预约管理系统',
      en: 'Universal online appointment management system for beauty industry',
      it: 'Sistema universale di gestione appuntamenti online per il settore bellezza'
    },
    category: 'service',
    color: '#e91e63',
    features: ['booking', 'calendar', 'staff'],
    thumbnail: '/images/demos/beauty-book.jpg'
  },
  {
    id: 'zheng-law',
    slug: 'zheng-law',
    name: { zh: '郑氏律所', en: 'Zheng Law', it: 'Zheng Law' },
    description: {
      zh: '专业严谨的律师事务所官方形象网站',
      en: 'Professional and authoritative official website for law firms',
      it: 'Sito web ufficiale professionale e autorevole per studi legali'
    },
    category: 'service',
    color: '#1a365d',
    features: ['services', 'cases', 'trust'],
    thumbnail: '/images/demos/zheng-law.jpg'
  },
  {
    id: 'casa-milano',
    slug: 'casa-milano',
    name: { zh: '米兰之家', en: 'Casa Milano', it: 'Casa Milano' },
    description: {
      zh: '包含房源搜索与展示的房地产中介平台',
      en: 'Real estate agency platform with property search and listing',
      it: 'Piattaforma agenzia immobiliare con ricerca e inserzione immobili'
    },
    category: 'service',
    color: '#27ae60',
    features: ['listings', 'search', 'map'],
    thumbnail: '/images/demos/casa-milano.jpg'
  },

  // --- SaaS & Software ---
  {
    id: 'cloud-task',
    slug: 'cloud-task',
    name: { zh: '云任务', en: 'Cloud Task', it: 'Cloud Task' },
    description: {
      zh: '现代化SaaS项目管理协作工具界面展示',
      en: 'Interface showcase for modern SaaS project management tool',
      it: 'Vetrina interfaccia per moderno strumento di gestione progetti SaaS'
    },
    category: 'saas',
    color: '#3498db',
    features: ['dashboard', 'kanban', 'analytics'],
    thumbnail: '/images/demos/cloud-task.jpg'
  }
]

export const getDemosByCategory = (category) => {
  if (category === 'all') return demos
  // Map old categories to new simplified ones if needed
  if (category === 'beauty' || category === 'professional' || category === 'healthcare' || category === 'education' || category === 'travel') {
    return demos.filter(demo => demo.category === 'service')
  }
  return demos.filter(demo => demo.category === category)
}

export const getDemoById = (id) => {
  return demos.find(demo => demo.id === id)
}