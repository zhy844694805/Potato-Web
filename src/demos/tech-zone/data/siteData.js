// TechZone Site Configuration and Translations

export const siteConfig = {
  name: { zh: '智享生活', en: 'TECH HOME', it: 'CASA TECH' },
  tagline: {
    zh: '未来生活，由此开启',
    en: 'Future Living Starts Here',
    it: 'Il Futuro Abita Qui'
  },
  description: {
    zh: '精选全球顶尖智能家居与生活电器。打造舒适、便捷、富有科技感的现代生活空间。',
    en: 'Curating the world\'s finest smart home and lifestyle electronics. Creating comfortable, convenient, and tech-forward living spaces.',
    it: 'Curiamo i migliori prodotti per la casa intelligente e l\'elettronica di lifestyle. Creiamo spazi abitativi confortevoli, convenienti e tecnologicamente avanzati.'
  },
  currency: {
    code: 'EUR',
    symbol: '€'
  },
  contact: {
    email: 'hello@techhome.it',
    phone: '+39 02 8888 9999',
    address: { zh: '米兰市设计区未来路1号', en: 'Via del Futuro 1, Design District, Milano', it: 'Via del Futuro 1, Distretto del Design, Milano' }
  },
  social: {
    facebook: 'https://facebook.com/techhome',
    instagram: 'https://instagram.com/techhome',
    twitter: 'https://twitter.com/techhome',
    youtube: 'https://youtube.com/techhome'
  },
  shipping: {
    freeThreshold: 150,
    standardPrice: 12.99,
    expressPrice: 24.99,
    estimatedDays: {
      standard: { min: 3, max: 7 },
      express: { min: 1, max: 3 }
    }
  }
};

export const categories = [
  { id: 'smart-living', icon: '🏠', name: { zh: '智能生活', en: 'Smart Living', it: 'Smart Living' } },
  { id: 'kitchen', icon: '🍳', name: { zh: '智能厨房', en: 'Smart Kitchen', it: 'Cucina Smart' } },
  { id: 'cleaning', icon: '🧹', name: { zh: '清洁电器', en: 'Cleaning', it: 'Pulizia' } },
  { id: 'climate', icon: '🌡️', name: { zh: '环境控制', en: 'Climate', it: 'Clima' } },
  { id: 'lighting', icon: '💡', name: { zh: '智能照明', en: 'Lighting', it: 'Illuminazione' } },
  { id: 'wellness', icon: '🧘', name: { zh: '健康护理', en: 'Wellness', it: 'Benessere' } },
  { id: 'entertainment', icon: '🎬', name: { zh: '影音娱乐', en: 'Entertainment', it: 'Intrattenimento' } },
  { id: 'security', icon: '🔒', name: { zh: '安防监控', en: 'Security', it: 'Sicurezza' } }
];

export const brands = [
  { id: 'dyson', name: 'Dyson' },
  { id: 'philips', name: 'Philips' },
  { id: 'xiaomi', name: 'Xiaomi' },
  { id: 'roborock', name: 'Roborock' },
  { id: 'nespresso', name: 'Nespresso' },
  { id: 'smeg', name: 'Smeg' },
  { id: 'sonos', name: 'Sonos' },
  { id: 'google', name: 'Google' },
  { id: 'amazon', name: 'Amazon' },
  { id: 'balmuda', name: 'Balmuda' }
];

export const translations = {
  nav: {
    home: { zh: '首页', en: 'Home', it: 'Home' },
    shop: { zh: '商城', en: 'Shop', it: 'Negozio' },
    categories: { zh: '分类', en: 'Categories', it: 'Categorie' },
    about: { zh: '关于我们', en: 'About', it: 'Chi Siamo' },
    contact: { zh: '联系我们', en: 'Contact', it: 'Contatti' },
    wishlist: { zh: '收藏夹', en: 'Wishlist', it: 'Preferiti' },
    cart: { zh: '购物车', en: 'Cart', it: 'Carrello' },
    account: { zh: '账户', en: 'Account', it: 'Account' },
    admin: { zh: '管理后台', en: 'Admin', it: 'Admin' }
  },
  hero: {
    slide1: {
      title: { zh: '重新定义家的温度', en: 'Redefine Home Comfort', it: 'Ridefinisci il Comfort Domestico' },
      subtitle: { zh: '智能科技与美学设计的完美融合', en: 'Perfect fusion of smart tech and aesthetic design', it: 'Fusione perfetta di tecnologia smart e design estetico' }
    },
    slide2: {
      title: { zh: '极简厨房美学', en: 'Minimalist Kitchen', it: 'Cucina Minimalista' },
      subtitle: { zh: '让烹饪成为一种享受', en: 'Make cooking a pure joy', it: 'Rendi la cucina una pura gioia' }
    },
    slide3: {
      title: { zh: '纯净呼吸', en: 'Pure Breathing', it: 'Respiro Puro' },
      subtitle: { zh: '智能空气净化系统', en: 'Intelligent air purification systems', it: 'Sistemi intelligenti di purificazione dell\'aria' }
    },
    cta: { zh: '探索系列', en: 'Explore Collection', it: 'Esplora Collezione' }
  },
  sections: {
    featuredProducts: { zh: '甄选推荐', en: 'Curated Picks', it: 'Scelte Curate' },
    newArrivals: { zh: '本季新品', en: 'Seasonal New', it: 'Novità Stagionali' },
    bestSellers: { zh: '热销单品', en: 'Best Sellers', it: 'Più Venduti' },
    onSale: { zh: '限时特惠', en: 'Limited Offers', it: 'Offerte Limitate' },
    categories: { zh: '浏览分类', en: 'Browse Categories', it: 'Sfoglia Categorie' },
    whyChooseUs: { zh: '服务承诺', en: 'Our Promise', it: 'La Nostra Promessa' },
    newsletter: { zh: '生活灵感', en: 'Lifestyle Journal', it: 'Giornale Lifestyle' }
  },
  features: {
    freeShipping: {
      title: { zh: '免费配送', en: 'Free Shipping', it: 'Spedizione Gratuita' },
      desc: { zh: '订单满€150免运费', en: 'On orders over €150', it: 'Per ordini sopra €150' }
    },
    warranty: {
      title: { zh: '官方质保', en: 'Official Warranty', it: 'Garanzia Ufficiale' },
      desc: { zh: '最高5年品牌质保', en: 'Up to 5 years brand warranty', it: 'Fino a 5 anni di garanzia del marchio' }
    },
    support: {
      title: { zh: '生活管家', en: 'Concierge Support', it: 'Supporto Concierge' },
      desc: { zh: '专业产品咨询服务', en: 'Expert product consultation', it: 'Consulenza esperta sui prodotti' }
    },
    returns: {
      title: { zh: '安心试用', en: 'Home Trial', it: 'Prova a Casa' },
      desc: { zh: '30天居家试用体验', en: '30-day home trial experience', it: 'Esperienza di prova a casa di 30 giorni' }
    }
  },
  common: {
    addToCart: { zh: '加入购物车', en: 'Add to Cart', it: 'Aggiungi al Carrello' },
    addedToCart: { zh: '已添加', en: 'Added', it: 'Aggiunto' },
    buyNow: { zh: '立即购买', en: 'Buy Now', it: 'Acquista Ora' },
    viewDetails: { zh: '查看详情', en: 'View Details', it: 'Vedi Dettagli' },
    viewAll: { zh: '查看全部', en: 'View All', it: 'Vedi Tutti' },
    search: { zh: '搜索生活好物...', en: 'Search for essentials...', it: 'Cerca essenziali...' },
    filter: { zh: '筛选', en: 'Filter', it: 'Filtra' },
    sort: { zh: '排序', en: 'Sort', it: 'Ordina' },
    price: { zh: '价格', en: 'Price', it: 'Prezzo' },
    rating: { zh: '评分', en: 'Rating', it: 'Valutazione' },
    brand: { zh: '品牌', en: 'Brand', it: 'Marca' },
    inStock: { zh: '现货', en: 'In Stock', it: 'Disponibile' },
    outOfStock: { zh: '售罄', en: 'Sold Out', it: 'Esaurito' },
    new: { zh: 'NEW', en: 'NEW', it: 'NOVITÀ' },
    sale: { zh: 'SALE', en: 'SALE', it: 'SALDI' },
    reviews: { zh: '条评价', en: 'reviews', it: 'recensioni' },
    freeShipping: { zh: '免运费', en: 'Free Shipping', it: 'Spedizione Gratuita' },
    subtotal: { zh: '小计', en: 'Subtotal', it: 'Subtotale' },
    total: { zh: '总计', en: 'Total', it: 'Totale' },
    shipping: { zh: '运费', en: 'Shipping', it: 'Spedizione' },
    checkout: { zh: '结算', en: 'Checkout', it: 'Checkout' },
    continueShopping: { zh: '继续逛逛', en: 'Continue Shopping', it: 'Continua lo Shopping' },
    emptyCart: { zh: '购物车是空的', en: 'Your cart is empty', it: 'Il carrello è vuoto' },
    emptyWishlist: { zh: '收藏夹是空的', en: 'Your wishlist is empty', it: 'La tua lista è vuota' },
    removeFromWishlist: { zh: '移除', en: 'Remove', it: 'Rimuovi' },
    addAllToCart: { zh: '全部加入购物车', en: 'Add All to Cart', it: 'Aggiungi Tutto al Carrello' },
    clearWishlist: { zh: '清空收藏夹', en: 'Clear Wishlist', it: 'Svuota Preferiti' },
    clearCart: { zh: '清空购物车', en: 'Clear Cart', it: 'Svuota Carrello' },
    updateCart: { zh: '更新购物车', en: 'Update Cart', it: 'Aggiorna Carrello' },
    quantity: { zh: '数量', en: 'Quantity', it: 'Quantità' },
    results: { zh: '个结果', en: 'results', it: 'risultati' },
    noResults: { zh: '未找到相关商品', en: 'No products found', it: 'Nessun prodotto trovato' },
    clearFilters: { zh: '重置筛选', en: 'Clear Filters', it: 'Cancella Filtri' },
    allCategories: { zh: '所有分类', en: 'All Categories', it: 'Tutte le Categorie' },
    allBrands: { zh: '所有品牌', en: 'All Brands', it: 'Tutti i Marchi' },
    priceRange: { zh: '价格区间', en: 'Price Range', it: 'Fascia di Prezzo' },
    sortBy: {
      default: { zh: '默认排序', en: 'Default', it: 'Predefinito' },
      priceAsc: { zh: '价格从低到高', en: 'Price: Low to High', it: 'Prezzo: Crescente' },
      priceDesc: { zh: '价格从高到低', en: 'Price: High to Low', it: 'Prezzo: Decrescente' },
      nameAsc: { zh: '名称 A-Z', en: 'Name: A to Z', it: 'Nome: A-Z' },
      rating: { zh: '评分最高', en: 'Highest Rated', it: 'Più Votati' },
      newest: { zh: '最新上架', en: 'Newest', it: 'Più Recenti' }
    }
  },
  product: {
    description: { zh: '设计理念', en: 'Design & Concept', it: 'Design & Concept' },
    specifications: { zh: '技术参数', en: 'Technical Specs', it: 'Specifiche Tecniche' },
    customerReviews: { zh: '用户体验', en: 'User Experience', it: 'Esperienza Utente' },
    writeReview: { zh: '分享体验', en: 'Share Experience', it: 'Condividi Esperienza' },
    quantity: { zh: '数量', en: 'Quantity', it: 'Quantità' },
    sku: { zh: '编号', en: 'SKU', it: 'Codice' },
    category: { zh: '分类', en: 'Category', it: 'Categoria' },
    tags: { zh: '标签', en: 'Tags', it: 'Tag' },
    relatedProducts: { zh: '搭配推荐', en: 'Curated Pairings', it: 'Abbinamenti Consigliati' },
    addToWishlist: { zh: '收藏', en: 'Save', it: 'Salva' },
    saleEndsIn: { zh: '优惠倒计时', en: 'Offer ends in', it: 'Offerta termina tra' },
    limitedOffer: { zh: '限时礼遇', en: 'Limited Privilege', it: 'Privilegio Limitato' },
    saveAmount: { zh: '节省', en: 'Save', it: 'Risparmi' },
    helpful: { zh: '有参考价值', en: 'Helpful', it: 'Utile' },
    verifiedPurchase: { zh: '真实买家', en: 'Verified Owner', it: 'Acquirente Verificato' },
    reviewTitle: { zh: '标题', en: 'Title', it: 'Titolo' },
    reviewContent: { zh: '内容', en: 'Content', it: 'Contenuto' },
    submitReview: { zh: '提交', en: 'Submit', it: 'Invia' },
    thankYouReview: { zh: '感谢您的分享！', en: 'Thank you for sharing!', it: 'Grazie per la condivisione!' }
  },
  checkout: {
    title: { zh: '结算', en: 'Checkout', it: 'Checkout' },
    shippingInfo: { zh: '配送地址', en: 'Shipping Address', it: 'Indirizzo di Spedizione' },
    paymentMethod: { zh: '支付方式', en: 'Payment Method', it: 'Metodo di Pagamento' },
    orderSummary: { zh: '购物清单', en: 'Order Summary', it: 'Riepilogo Ordine' },
    firstName: { zh: '名', en: 'First Name', it: 'Nome' },
    lastName: { zh: '姓', en: 'Last Name', it: 'Cognome' },
    email: { zh: '邮箱', en: 'Email', it: 'Email' },
    phone: { zh: '电话', en: 'Phone', it: 'Telefono' },
    address: { zh: '地址', en: 'Address', it: 'Indirizzo' },
    city: { zh: '城市', en: 'City', it: 'Città' },
    postalCode: { zh: '邮编', en: 'Postal Code', it: 'CAP' },
    country: { zh: '国家', en: 'Country', it: 'Paese' },
    standardShipping: { zh: '标准配送', en: 'Standard Shipping', it: 'Spedizione Standard' },
    expressShipping: { zh: '极速达', en: 'Express Delivery', it: 'Consegna Express' },
    days: { zh: '个工作日', en: 'business days', it: 'giorni lavorativi' },
    placeOrder: { zh: '确认支付', en: 'Confirm Payment', it: 'Conferma Pagamento' },
    orderSuccess: { zh: '购买成功！', en: 'Order Successful!', it: 'Ordine Riuscito!' },
    orderNumber: { zh: '订单编号', en: 'Order No.', it: 'N. Ordine' }
  },
  about: {
    title: { zh: '生活哲学', en: 'Living Philosophy', it: 'Filosofia dell\'Abitare' },
    subtitle: { zh: '科技服务于生活', en: 'Technology Serving Life', it: 'La Tecnologia al Servizio della Vita' },
    ourStory: { zh: '品牌起源', en: 'Origins', it: 'Origini' },
    ourMission: { zh: '愿景', en: 'Vision', it: 'Visione' },
    ourValues: { zh: '价值观', en: 'Values', it: 'Valori' },
    ourTeam: { zh: '专家团队', en: 'Specialists', it: 'Specialisti' }
  },
  contact: {
    title: { zh: '客户服务', en: 'Client Services', it: 'Servizio Clienti' },
    getInTouch: { zh: '我们随时为您服务', en: 'We are here to assist you', it: 'Siamo qui per assisterti' },
    sendMessage: { zh: '发送留言', en: 'Send Message', it: 'Invia Messaggio' },
    name: { zh: '姓名', en: 'Name', it: 'Nome' },
    message: { zh: '留言内容', en: 'Message', it: 'Messaggio' },
    messageSent: { zh: '发送成功！', en: 'Sent Successfully!', it: 'Inviato con Successo!' }
  },
  footer: {
    shopLinks: { zh: '选购', en: 'Shop', it: 'Acquista' },
    companyLinks: { zh: '关于', en: 'About', it: 'Chi Siamo' },
    supportLinks: { zh: '服务', en: 'Service', it: 'Servizio' },
    newsletterTitle: { zh: '订阅生活志', en: 'Join Our Community', it: 'Unisciti alla Community' },
    newsletterDesc: { zh: '获取居家灵感与独家礼遇', en: 'Get home inspiration and exclusive privileges', it: 'Ricevi ispirazione per la casa e privilegi esclusivi' },
    subscribe: { zh: '订阅', en: 'Subscribe', it: 'Iscriviti' },
    yourEmail: { zh: '电子邮箱', en: 'Email address', it: 'Indirizzo email' },
    subscribed: { zh: '感谢订阅！', en: 'Thank you!', it: 'Grazie!' },
    privacyPolicy: { zh: '隐私政策', en: 'Privacy Policy', it: 'Privacy Policy' },
    termsOfService: { zh: '服务条款', en: 'Terms of Service', it: 'Termini di Servizio' },
    shippingPolicy: { zh: '配送说明', en: 'Shipping Info', it: 'Info Spedizione' },
    returnPolicy: { zh: '退换说明', en: 'Returns Info', it: 'Info Resi' },
    faq: { zh: '常见问题', en: 'FAQ', it: 'FAQ' },
    careers: { zh: '加入团队', en: 'Careers', it: 'Carriere' },
    copyright: { zh: '保留所有权利', en: 'All rights reserved', it: 'Tutti i diritti riservati' },
    demoNotice: { zh: '演示网站 - 非真实销售', en: 'Demo Website - Not for real sale', it: 'Sito Demo - Non per vendita reale' }
  },
  admin: {
    login: { zh: '后台登录', en: 'Admin Login', it: 'Login Admin' },
    logout: { zh: '退出登录', en: 'Sign Out', it: 'Disconnetti' },
    dashboard: { zh: '概览', en: 'Overview', it: 'Panoramica' },
    products: { zh: '商品管理', en: 'Products', it: 'Prodotti' },
    users: { zh: '客户管理', en: 'Customers', it: 'Clienti' },
    orders: { zh: '订单管理', en: 'Orders', it: 'Ordini' },
    username: { zh: '账号', en: 'Username', it: 'Username' },
    password: { zh: '密码', en: 'Password', it: 'Password' },
    totalSales: { zh: '总销售额', en: 'Total Revenue', it: 'Entrate Totali' },
    totalOrders: { zh: '订单总数', en: 'Total Orders', it: 'Ordini Totali' },
    totalProducts: { zh: 'SKU数量', en: 'SKU Count', it: 'Conteggio SKU' },
    totalUsers: { zh: '会员总数', en: 'Total Members', it: 'Membri Totali' },
    editPrice: { zh: '调整价格', en: 'Adjust Price', it: 'Regola Prezzo' },
    toggleStatus: { zh: '切换上架状态', en: 'Toggle Availability', it: 'Cambia Disponibilità' },
    active: { zh: '在售', en: 'Active', it: 'Attivo' },
    inactive: { zh: '停售', en: 'Inactive', it: 'Inattivo' },
    pending: { zh: '待处理', en: 'Pending', it: 'In Attesa' },
    processing: { zh: '配货中', en: 'Processing', it: 'In Elaborazione' },
    shipped: { zh: '已发货', en: 'Shipped', it: 'Spedito' },
    delivered: { zh: '已送达', en: 'Delivered', it: 'Consegnato' },
    cancelled: { zh: '已取消', en: 'Cancelled', it: 'Annullato' },
    addUser: { zh: '新增会员', en: 'Add Member', it: 'Aggiungi Membro' },
    disableUser: { zh: '冻结账户', en: 'Suspend Account', it: 'Sospendi Account' },
    enableUser: { zh: '恢复账户', en: 'Activate Account', it: 'Attiva Account' },
    resetData: { zh: '重置演示数据', en: 'Reset Demo Data', it: 'Ripristina Dati Demo' },
    quickActions: { zh: '常用操作', en: 'Shortcuts', it: 'Scorciatoie' },
    recentOrders: { zh: '最新订单', en: 'Latest Orders', it: 'Ultimi Ordini' },
    topProducts: { zh: '明星单品', en: 'Star Products', it: 'Prodotti Star' },
    orderStatus: { zh: '订单分布', en: 'Order Distribution', it: 'Distribuzione Ordini' }
  }
};

export const sortOptions = [
  { value: 'featured', label: { zh: '店长推荐', en: 'Curator\'s Pick', it: 'Scelta del Curatore' } },
  { value: 'newest', label: { zh: '最新上架', en: 'New Arrivals', it: 'Nuovi Arrivi' } },
  { value: 'price-asc', label: { zh: '价格: 低到高', en: 'Price: Low to High', it: 'Prezzo: Crescente' } },
  { value: 'price-desc', label: { zh: '价格: 高到低', en: 'Price: High to Low', it: 'Prezzo: Decrescente' } },
  { value: 'rating', label: { zh: '口碑最佳', en: 'Top Rated', it: 'Più Votati' } },
  { value: 'bestselling', label: { zh: '人气热销', en: 'Most Popular', it: 'Più Popolari' } }
];

export const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80', // Modern kitchen/lifestyle
    overlay: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
    title: translations.hero.slide1.title,
    subtitle: translations.hero.slide1.subtitle
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1920&q=80', // Stylish interior/lighting
    overlay: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
    title: translations.hero.slide2.title,
    subtitle: translations.hero.slide2.subtitle
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1595079676614-519d61643ea1?w=1920&q=80', // Smart home devices
    overlay: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
    title: translations.hero.slide3.title,
    subtitle: translations.hero.slide3.subtitle
  }
];

// Standalone features export for HomePage
export const features = [
  {
    icon: '🚚',
    title: translations.features.freeShipping.title,
    desc: translations.features.freeShipping.desc
  },
  {
    icon: '🛡️',
    title: translations.features.warranty.title,
    desc: translations.features.warranty.desc
  },
  {
    icon: '🎧',
    title: translations.features.support.title,
    desc: translations.features.support.desc
  },
  {
    icon: '↩️',
    title: translations.features.returns.title,
    desc: translations.features.returns.desc
  }
];
