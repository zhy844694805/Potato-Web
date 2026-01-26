// TechZone Site Configuration and Translations

export const siteConfig = {
  name: { zh: '赛博核心', en: 'CYBER CORE', it: 'CYBER CORE' },
  tagline: {
    zh: '您的科技产品首选商城',
    en: 'Your Premier Tech Destination',
    it: 'La Tua Destinazione Tech Premier'
  },
  description: {
    zh: '探索最新的电子产品、智能设备和科技配件。优质品牌，优惠价格，快速配送。',
    en: 'Discover the latest electronics, smart devices, and tech accessories. Premium brands, competitive prices, fast delivery.',
    it: 'Scopri i più recenti prodotti elettronici, dispositivi smart e accessori tech. Marchi premium, prezzi competitivi, consegna veloce.'
  },
  currency: {
    code: 'EUR',
    symbol: '€'
  },
  contact: {
    email: 'info@techzone.it',
    phone: '+39 02 1234 5678',
    address: { zh: '米兰市科技大道88号', en: 'Via della Tecnologia 88, Milano', it: 'Via della Tecnologia 88, Milano' }
  },
  social: {
    facebook: 'https://facebook.com/techzone',
    instagram: 'https://instagram.com/techzone',
    twitter: 'https://twitter.com/techzone',
    youtube: 'https://youtube.com/techzone'
  },
  shipping: {
    freeThreshold: 99,
    standardPrice: 9.99,
    expressPrice: 19.99,
    estimatedDays: {
      standard: { min: 3, max: 5 },
      express: { min: 1, max: 2 }
    }
  }
};

export const categories = [
  { id: 'phones', icon: '📱', name: { zh: '手机', en: 'Phones', it: 'Telefoni' } },
  { id: 'tablets', icon: '📲', name: { zh: '平板', en: 'Tablets', it: 'Tablet' } },
  { id: 'laptops', icon: '💻', name: { zh: '笔记本', en: 'Laptops', it: 'Laptop' } },
  { id: 'accessories', icon: '🔌', name: { zh: '配件', en: 'Accessories', it: 'Accessori' } },
  { id: 'audio', icon: '🎧', name: { zh: '音频', en: 'Audio', it: 'Audio' } },
  { id: 'gaming', icon: '🎮', name: { zh: '游戏', en: 'Gaming', it: 'Gaming' } },
  { id: 'smarthome', icon: '🏠', name: { zh: '智能家居', en: 'Smart Home', it: 'Casa Smart' } },
  { id: 'wearables', icon: '⌚', name: { zh: '穿戴设备', en: 'Wearables', it: 'Indossabili' } }
];

export const brands = [
  { id: 'apple', name: 'Apple' },
  { id: 'samsung', name: 'Samsung' },
  { id: 'sony', name: 'Sony' },
  { id: 'xiaomi', name: 'Xiaomi' },
  { id: 'dji', name: 'DJI' },
  { id: 'bose', name: 'Bose' },
  { id: 'jbl', name: 'JBL' },
  { id: 'anker', name: 'Anker' },
  { id: 'logitech', name: 'Logitech' },
  { id: 'google', name: 'Google' }
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
      title: { zh: '探索最新科技', en: 'Discover Latest Tech', it: 'Scopri le Ultime Novità Tech' },
      subtitle: { zh: '顶级品牌，卓越品质', en: 'Premium brands, exceptional quality', it: 'Marchi premium, qualità eccezionale' }
    },
    slide2: {
      title: { zh: '冬季大促销', en: 'Winter Sale', it: 'Saldi Invernali' },
      subtitle: { zh: '全场最高立减50%', en: 'Up to 50% off on selected items', it: 'Fino al 50% di sconto su articoli selezionati' }
    },
    slide3: {
      title: { zh: '游戏新时代', en: 'Next-Gen Gaming', it: 'Gaming di Nuova Generazione' },
      subtitle: { zh: '体验极致游戏世界', en: 'Experience the ultimate gaming world', it: 'Vivi l\'esperienza di gioco definitiva' }
    },
    cta: { zh: '立即选购', en: 'Shop Now', it: 'Acquista Ora' }
  },
  sections: {
    featuredProducts: { zh: '热门商品', en: 'Featured Products', it: 'Prodotti in Evidenza' },
    newArrivals: { zh: '新品上市', en: 'New Arrivals', it: 'Nuovi Arrivi' },
    bestSellers: { zh: '畅销榜', en: 'Best Sellers', it: 'Più Venduti' },
    onSale: { zh: '特价商品', en: 'On Sale', it: 'In Offerta' },
    categories: { zh: '商品分类', en: 'Shop by Category', it: 'Acquista per Categoria' },
    whyChooseUs: { zh: '为什么选择我们', en: 'Why Choose Us', it: 'Perché Sceglierci' },
    newsletter: { zh: '订阅资讯', en: 'Newsletter', it: 'Newsletter' }
  },
  features: {
    freeShipping: {
      title: { zh: '免费配送', en: 'Free Shipping', it: 'Spedizione Gratuita' },
      desc: { zh: '订单满€99免运费', en: 'On orders over €99', it: 'Per ordini sopra €99' }
    },
    warranty: {
      title: { zh: '品质保证', en: '2 Year Warranty', it: 'Garanzia 2 Anni' },
      desc: { zh: '全部产品2年质保', en: 'On all products', it: 'Su tutti i prodotti' }
    },
    support: {
      title: { zh: '专业客服', en: '24/7 Support', it: 'Supporto 24/7' },
      desc: { zh: '全天候技术支持', en: 'Round the clock assistance', it: 'Assistenza sempre disponibile' }
    },
    returns: {
      title: { zh: '无忧退换', en: 'Easy Returns', it: 'Reso Facile' },
      desc: { zh: '30天无理由退货', en: '30-day return policy', it: 'Politica di reso 30 giorni' }
    }
  },
  common: {
    addToCart: { zh: '加入购物车', en: 'Add to Cart', it: 'Aggiungi al Carrello' },
    addedToCart: { zh: '已添加', en: 'Added', it: 'Aggiunto' },
    buyNow: { zh: '立即购买', en: 'Buy Now', it: 'Acquista Ora' },
    viewDetails: { zh: '查看详情', en: 'View Details', it: 'Vedi Dettagli' },
    viewAll: { zh: '查看全部', en: 'View All', it: 'Vedi Tutti' },
    search: { zh: '搜索商品...', en: 'Search products...', it: 'Cerca prodotti...' },
    filter: { zh: '筛选', en: 'Filter', it: 'Filtra' },
    sort: { zh: '排序', en: 'Sort', it: 'Ordina' },
    price: { zh: '价格', en: 'Price', it: 'Prezzo' },
    rating: { zh: '评分', en: 'Rating', it: 'Valutazione' },
    brand: { zh: '品牌', en: 'Brand', it: 'Marca' },
    inStock: { zh: '有货', en: 'In Stock', it: 'Disponibile' },
    outOfStock: { zh: '缺货', en: 'Out of Stock', it: 'Esaurito' },
    new: { zh: '新品', en: 'New', it: 'Nuovo' },
    sale: { zh: '促销', en: 'Sale', it: 'Offerta' },
    reviews: { zh: '条评价', en: 'reviews', it: 'recensioni' },
    freeShipping: { zh: '免运费', en: 'Free Shipping', it: 'Spedizione Gratuita' },
    subtotal: { zh: '小计', en: 'Subtotal', it: 'Subtotale' },
    total: { zh: '总计', en: 'Total', it: 'Totale' },
    shipping: { zh: '运费', en: 'Shipping', it: 'Spedizione' },
    checkout: { zh: '结算', en: 'Checkout', it: 'Checkout' },
    continueShopping: { zh: '继续购物', en: 'Continue Shopping', it: 'Continua lo Shopping' },
    emptyCart: { zh: '购物车是空的', en: 'Your cart is empty', it: 'Il carrello è vuoto' },
    emptyWishlist: { zh: '收藏夹是空的', en: 'Your wishlist is empty', it: 'La tua lista è vuota' },
    removeFromWishlist: { zh: '移除收藏', en: 'Remove from Wishlist', it: 'Rimuovi dai Preferiti' },
    addAllToCart: { zh: '全部加入购物车', en: 'Add All to Cart', it: 'Aggiungi Tutto al Carrello' },
    clearWishlist: { zh: '清空收藏夹', en: 'Clear Wishlist', it: 'Svuota Preferiti' },
    clearCart: { zh: '清空购物车', en: 'Clear Cart', it: 'Svuota Carrello' },
    updateCart: { zh: '更新购物车', en: 'Update Cart', it: 'Aggiorna Carrello' },
    quantity: { zh: '数量', en: 'Quantity', it: 'Quantità' },
    results: { zh: '个结果', en: 'results', it: 'risultati' },
    noResults: { zh: '未找到商品', en: 'No products found', it: 'Nessun prodotto trovato' },
    clearFilters: { zh: '清除筛选', en: 'Clear Filters', it: 'Cancella Filtri' },
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
    description: { zh: '商品描述', en: 'Description', it: 'Descrizione' },
    specifications: { zh: '规格参数', en: 'Specifications', it: 'Specifiche' },
    customerReviews: { zh: '用户评价', en: 'Customer Reviews', it: 'Recensioni Clienti' },
    writeReview: { zh: '写评价', en: 'Write a Review', it: 'Scrivi una Recensione' },
    quantity: { zh: '数量', en: 'Quantity', it: 'Quantità' },
    sku: { zh: '商品编号', en: 'SKU', it: 'Codice' },
    category: { zh: '分类', en: 'Category', it: 'Categoria' },
    tags: { zh: '标签', en: 'Tags', it: 'Tag' },
    relatedProducts: { zh: '相关商品', en: 'Related Products', it: 'Prodotti Correlati' },
    addToWishlist: { zh: '加入收藏', en: 'Add to Wishlist', it: 'Aggiungi ai Preferiti' },
    saleEndsIn: { zh: '促销倒计时', en: 'Sale ends in', it: 'Offerta termina tra' },
    limitedOffer: { zh: '限时优惠', en: 'Limited Offer', it: 'Offerta Limitata' },
    saveAmount: { zh: '立省', en: 'Save', it: 'Risparmi' },
    helpful: { zh: '有帮助', en: 'Helpful', it: 'Utile' },
    verifiedPurchase: { zh: '已购买用户', en: 'Verified Purchase', it: 'Acquisto Verificato' },
    reviewTitle: { zh: '评价标题', en: 'Review Title', it: 'Titolo Recensione' },
    reviewContent: { zh: '评价内容', en: 'Your Review', it: 'La Tua Recensione' },
    submitReview: { zh: '提交评价', en: 'Submit Review', it: 'Invia Recensione' },
    thankYouReview: { zh: '感谢您的评价！', en: 'Thank you for your review!', it: 'Grazie per la tua recensione!' }
  },
  checkout: {
    title: { zh: '结算', en: 'Checkout', it: 'Checkout' },
    shippingInfo: { zh: '配送信息', en: 'Shipping Information', it: 'Informazioni di Spedizione' },
    paymentMethod: { zh: '支付方式', en: 'Payment Method', it: 'Metodo di Pagamento' },
    orderSummary: { zh: '订单摘要', en: 'Order Summary', it: 'Riepilogo Ordine' },
    firstName: { zh: '名', en: 'First Name', it: 'Nome' },
    lastName: { zh: '姓', en: 'Last Name', it: 'Cognome' },
    email: { zh: '邮箱', en: 'Email', it: 'Email' },
    phone: { zh: '电话', en: 'Phone', it: 'Telefono' },
    address: { zh: '地址', en: 'Address', it: 'Indirizzo' },
    city: { zh: '城市', en: 'City', it: 'Città' },
    postalCode: { zh: '邮编', en: 'Postal Code', it: 'CAP' },
    country: { zh: '国家', en: 'Country', it: 'Paese' },
    standardShipping: { zh: '标准配送', en: 'Standard Shipping', it: 'Spedizione Standard' },
    expressShipping: { zh: '快速配送', en: 'Express Shipping', it: 'Spedizione Express' },
    days: { zh: '个工作日', en: 'business days', it: 'giorni lavorativi' },
    placeOrder: { zh: '确认下单', en: 'Place Order', it: 'Conferma Ordine' },
    orderSuccess: { zh: '下单成功！', en: 'Order Placed Successfully!', it: 'Ordine Confermato!' },
    orderNumber: { zh: '订单号', en: 'Order Number', it: 'Numero Ordine' }
  },
  about: {
    title: { zh: '核心身份', en: 'Identity Core', it: 'Nucleo Identità' },
    subtitle: { zh: '构建未来的数字架构', en: 'Architecting the Digital Future', it: 'Architettando il Futuro Digitale' },
    ourStory: { zh: '初始化序列', en: 'Initialization', it: 'Inizializzazione' },
    ourMission: { zh: '最高指令', en: 'Prime Directive', it: 'Direttiva Primaria' },
    ourValues: { zh: '核心协议', en: 'Core Protocols', it: 'Protocolli Core' },
    ourTeam: { zh: '执行单元', en: 'Active Units', it: 'Unità Attive' }
  },
  contact: {
    title: { zh: '建立连接', en: 'Establish Uplink', it: 'Stabilire Connessione' },
    getInTouch: { zh: '准备数据传输...', en: 'Ready for data transmission...', it: 'Pronto per la trasmissione dati...' },
    sendMessage: { zh: '发送指令', en: 'Transmit Data', it: 'Trasmetti Dati' },
    name: { zh: '用户ID', en: 'User ID', it: 'ID Utente' },
    message: { zh: '数据包内容', en: 'Data Payload', it: 'Carico Dati' },
    messageSent: { zh: '传输成功！', en: 'Transmission Successful!', it: 'Trasmissione Riuscita!' }
  },
  footer: {
    shopLinks: { zh: '购物指南', en: 'Shop', it: 'Negozio' },
    companyLinks: { zh: '公司信息', en: 'Company', it: 'Azienda' },
    supportLinks: { zh: '客户服务', en: 'Support', it: 'Supporto' },
    newsletterTitle: { zh: '订阅最新资讯', en: 'Stay Updated', it: 'Resta Aggiornato' },
    newsletterDesc: { zh: '订阅获取最新优惠和新品信息', en: 'Subscribe for exclusive offers and updates', it: 'Iscriviti per offerte esclusive e aggiornamenti' },
    subscribe: { zh: '订阅', en: 'Subscribe', it: 'Iscriviti' },
    yourEmail: { zh: '您的邮箱', en: 'Your email', it: 'La tua email' },
    subscribed: { zh: '订阅成功！', en: 'Successfully subscribed!', it: 'Iscrizione completata!' },
    privacyPolicy: { zh: '隐私政策', en: 'Privacy Policy', it: 'Privacy Policy' },
    termsOfService: { zh: '服务条款', en: 'Terms of Service', it: 'Termini di Servizio' },
    shippingPolicy: { zh: '配送政策', en: 'Shipping Policy', it: 'Politica di Spedizione' },
    returnPolicy: { zh: '退换政策', en: 'Return Policy', it: 'Politica di Reso' },
    faq: { zh: '常见问题', en: 'FAQ', it: 'FAQ' },
    careers: { zh: '加入我们', en: 'Careers', it: 'Lavora con Noi' },
    copyright: { zh: '版权所有', en: 'All rights reserved', it: 'Tutti i diritti riservati' },
    demoNotice: { zh: '这是一个演示网站', en: 'This is a demo website', it: 'Questo è un sito demo' }
  },
  admin: {
    login: { zh: '登录', en: 'Login', it: 'Accedi' },
    logout: { zh: '退出', en: 'Logout', it: 'Esci' },
    dashboard: { zh: '仪表盘', en: 'Dashboard', it: 'Dashboard' },
    products: { zh: '商品管理', en: 'Products', it: 'Prodotti' },
    users: { zh: '用户管理', en: 'Users', it: 'Utenti' },
    orders: { zh: '订单管理', en: 'Orders', it: 'Ordini' },
    username: { zh: '用户名', en: 'Username', it: 'Nome Utente' },
    password: { zh: '密码', en: 'Password', it: 'Password' },
    totalSales: { zh: '总销售额', en: 'Total Sales', it: 'Vendite Totali' },
    totalOrders: { zh: '总订单数', en: 'Total Orders', it: 'Ordini Totali' },
    totalProducts: { zh: '商品数量', en: 'Total Products', it: 'Prodotti Totali' },
    totalUsers: { zh: '用户数量', en: 'Total Users', it: 'Utenti Totali' },
    editPrice: { zh: '编辑价格', en: 'Edit Price', it: 'Modifica Prezzo' },
    toggleStatus: { zh: '切换状态', en: 'Toggle Status', it: 'Cambia Stato' },
    active: { zh: '上架', en: 'Active', it: 'Attivo' },
    inactive: { zh: '下架', en: 'Inactive', it: 'Inattivo' },
    pending: { zh: '待处理', en: 'Pending', it: 'In Attesa' },
    processing: { zh: '处理中', en: 'Processing', it: 'In Elaborazione' },
    shipped: { zh: '已发货', en: 'Shipped', it: 'Spedito' },
    delivered: { zh: '已送达', en: 'Delivered', it: 'Consegnato' },
    cancelled: { zh: '已取消', en: 'Cancelled', it: 'Annullato' },
    addUser: { zh: '添加用户', en: 'Add User', it: 'Aggiungi Utente' },
    disableUser: { zh: '禁用用户', en: 'Disable User', it: 'Disabilita Utente' },
    enableUser: { zh: '启用用户', en: 'Enable User', it: 'Abilita Utente' },
    resetData: { zh: '重置数据', en: 'Reset Data', it: 'Ripristina Dati' },
    quickActions: { zh: '快捷操作', en: 'Quick Actions', it: 'Azioni Rapide' },
    recentOrders: { zh: '最近订单', en: 'Recent Orders', it: 'Ordini Recenti' },
    topProducts: { zh: '热销商品', en: 'Top Products', it: 'Prodotti Più Venduti' },
    orderStatus: { zh: '订单状态', en: 'Order Status', it: 'Stato Ordini' }
  }
};

export const sortOptions = [
  { value: 'featured', label: { zh: '推荐', en: 'Featured', it: 'In Evidenza' } },
  { value: 'newest', label: { zh: '最新', en: 'Newest', it: 'Più Recenti' } },
  { value: 'price-asc', label: { zh: '价格: 低到高', en: 'Price: Low to High', it: 'Prezzo: Crescente' } },
  { value: 'price-desc', label: { zh: '价格: 高到低', en: 'Price: High to Low', it: 'Prezzo: Decrescente' } },
  { value: 'rating', label: { zh: '评分最高', en: 'Highest Rated', it: 'Più Votati' } },
  { value: 'bestselling', label: { zh: '销量最高', en: 'Best Selling', it: 'Più Venduti' } }
];

export const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80',
    overlay: 'linear-gradient(135deg, rgba(37,99,235,0.85) 0%, rgba(124,58,237,0.85) 100%)',
    title: translations.hero.slide1.title,
    subtitle: translations.hero.slide1.subtitle
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1920&q=80',
    overlay: 'linear-gradient(135deg, rgba(239,68,68,0.85) 0%, rgba(234,88,12,0.85) 100%)',
    title: translations.hero.slide2.title,
    subtitle: translations.hero.slide2.subtitle
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1920&q=80',
    overlay: 'linear-gradient(135deg, rgba(16,185,129,0.85) 0%, rgba(6,182,212,0.85) 100%)',
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
