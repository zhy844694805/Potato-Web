// 作品集数据 - 意大利华人企业网站案例
export const portfolioData = [
  // 1. 意大利寿司餐厅
  {
    id: 1,
    slug: 'italian-sushi-restaurant',
    category: 'restaurant',
    title: { zh: '意大利寿司餐厅官网', en: 'Italian Sushi Restaurant Website' },
    industry: { zh: '餐饮行业', en: 'Restaurant Industry' },
    year: '2024',
    color: '#dc2626',
    shortDesc: { zh: '融合意式风情与日本料理的高端餐厅网站', en: 'Premium restaurant website blending Italian style with Japanese cuisine' },
    client: { zh: 'Sakura Milano 餐厅', en: 'Sakura Milano Restaurant' },
    description: {
      zh: '为一家位于米兰的创新融合餐厅打造的品牌官网。这家餐厅将传统日本寿司工艺与意大利烹饪理念完美结合，需要一个能够体现这种独特定位的高端网站。',
      en: 'A brand website created for an innovative fusion restaurant in Milan. This restaurant perfectly combines traditional Japanese sushi craftsmanship with Italian culinary philosophy.'
    },
    challenge: {
      zh: '如何在网站设计中完美融合意大利的优雅与日本的精致？餐厅需要一个既能展示高端形象，又能提供流畅预订体验的网站。',
      en: 'How to perfectly blend Italian elegance with Japanese sophistication in website design? The restaurant needed a website that could both showcase a premium image and provide a smooth reservation experience.'
    },
    solution: {
      zh: '采用极简主义设计风格，以黑、白、金为主色调。集成在线预订系统，实现三语言切换，移动端优化确保完美体验。',
      en: 'Adopted minimalist design style with black, white, and gold colors. Integrated online reservation system with trilingual support and mobile optimization.'
    },
    results: [
      { value: '3周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '5页', label: { zh: '完整页面', en: 'Full Pages' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站做得很漂亮，客人扫码看菜单方便多了。',
        en: 'Beautiful website. Guests find it convenient to scan QR for menu.'
      },
      author: { zh: '马可', en: 'Marco T.' },
      role: { zh: '餐厅老板', en: 'Owner' }
    },
    technologies: ['React', 'Framer Motion', 'i18next'],
    demoUrl: '/demo/sakura-milano',
    features: [
      { icon: '🍣', title: { zh: '精美菜品展示', en: 'Stunning Menu Display' }, desc: { zh: '高清大图展示每道菜品', en: 'High-quality images for each dish' } },
      { icon: '📅', title: { zh: '在线预订系统', en: 'Online Reservation' }, desc: { zh: '实时查看可用时段', en: 'Real-time availability' } },
      { icon: '🌍', title: { zh: '三语言支持', en: 'Trilingual' }, desc: { zh: '意/英/中本地化', en: 'IT/EN/ZH localized' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200', caption: { zh: '精致寿司摆盘', en: 'Exquisite Sushi Plating' } }
    ]
  },

  // 2. 普拉托时装品牌
  {
    id: 2,
    slug: 'prato-fashion',
    category: 'fashion',
    title: { zh: '普拉托时装品牌官网', en: 'Prato Fashion Brand Website' },
    industry: { zh: '服装时尚', en: 'Fashion & Apparel' },
    year: '2024',
    color: '#b8860b',
    shortDesc: { zh: '意式优雅与中华匠心的高端时装品牌', en: 'Premium fashion brand combining Italian elegance with Chinese craftsmanship' },
    client: { zh: 'Prato Fashion 时装', en: 'Prato Fashion' },
    description: {
      zh: '为普拉托纺织区的华人时装品牌打造的优雅官网。该品牌融合意大利精致裁剪与中国制造工艺，需要一个能展示系列产品和品牌故事的高端网站。',
      en: 'An elegant website for a Chinese fashion brand in Prato\'s textile district. The brand combines Italian tailoring with Chinese manufacturing excellence.'
    },
    challenge: {
      zh: '如何在网站上体现"意式优雅遇见中华匠心"的品牌定位？需要展示高质量产品图片，同时传达品牌的独特故事。',
      en: 'How to convey "Italian elegance meets Chinese craftsmanship" on the website? Need to showcase high-quality product images while telling the brand story.'
    },
    solution: {
      zh: '采用极简黑白金配色，大尺寸产品摄影，流畅的滚动动画。突出"Made in Italy"和可持续时尚理念。',
      en: 'Minimalist black, white, and gold color scheme with large-scale product photography and smooth scroll animations. Highlighting "Made in Italy" and sustainability.'
    },
    results: [
      { value: '2周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '响应式', label: { zh: '设计适配', en: 'Responsive Design' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '比以前用的模板网站好看多了，发名片时有面子。',
        en: 'Much better than our old template site. Looks professional on business cards.'
      },
      author: { zh: '陈女士', en: 'Ms. Chen' },
      role: { zh: '创始人', en: 'Founder' }
    },
    technologies: ['React', 'CSS Animations', 'Responsive Design'],
    demoUrl: '/demo/prato-fashion',
    features: [
      { icon: '👗', title: { zh: '系列展示', en: 'Collection Showcase' }, desc: { zh: '精美产品画廊', en: 'Beautiful product gallery' } },
      { icon: '✂️', title: { zh: '工艺故事', en: 'Craftsmanship Story' }, desc: { zh: '品牌理念传达', en: 'Brand philosophy' } },
      { icon: '🌍', title: { zh: '三语支持', en: 'Trilingual' }, desc: { zh: '意/英/中', en: 'IT/EN/ZH' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200', caption: { zh: '时装系列展示', en: 'Fashion Collection' } }
    ]
  },

  // 3. 进出口贸易公司
  {
    id: 3,
    slug: 'dragon-trade',
    category: 'trade',
    title: { zh: '龙腾贸易公司官网', en: 'Dragon Trade Company Website' },
    industry: { zh: '进出口贸易', en: 'Import/Export Trade' },
    year: '2024',
    color: '#1e3a5f',
    shortDesc: { zh: '连接欧亚的专业进出口贸易公司', en: 'Professional import/export company bridging Europe and Asia' },
    client: { zh: 'Dragon Trade 贸易公司', en: 'Dragon Trade Srl' },
    description: {
      zh: '为米兰的华人进出口贸易公司打造的专业B2B网站。公司专注于意中贸易，需要展示服务能力、产品类别，并建立客户信任。',
      en: 'A professional B2B website for a Chinese import/export company in Milan. The company focuses on Italy-China trade and needs to showcase services and build trust.'
    },
    challenge: {
      zh: '如何在网站上建立B2B客户的信任？需要清晰展示公司实力、服务流程、完整的服务链条。',
      en: 'How to build B2B client trust on the website? Need to clearly present company strength, service process, and complete service chain.'
    },
    solution: {
      zh: '采用专业商务风格，清晰展示服务流程和双办公室优势。集成询盘表单，提供意大利和中国双联系方式。',
      en: 'Professional business style clearly presenting service processes and dual-office advantages. Integrated inquiry form with Italy and China contacts.'
    },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '意+中', label: { zh: '双办公室展示', en: 'Dual Office Display' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站帮我们整理了服务流程，给客户看着清楚。',
        en: 'Website helped organize our services clearly for clients to see.'
      },
      author: { zh: '林先生', en: 'Mr. Lin' },
      role: { zh: '总经理', en: 'GM' }
    },
    technologies: ['React', 'Form Validation', 'SEO Optimization'],
    demoUrl: '/demo/dragon-trade',
    features: [
      { icon: '🚢', title: { zh: '服务展示', en: 'Services Display' }, desc: { zh: '完整服务链', en: 'Complete service chain' } },
      { icon: '📊', title: { zh: '数据统计', en: 'Statistics' }, desc: { zh: '建立信任', en: 'Build trust' } },
      { icon: '🌍', title: { zh: '双办公室', en: 'Dual Offices' }, desc: { zh: '意大利+中国', en: 'Italy + China' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200', caption: { zh: '国际贸易物流', en: 'International Trade Logistics' } }
    ]
  },

  // 4. 美容按摩养生馆
  {
    id: 4,
    slug: 'jade-spa',
    category: 'beauty',
    title: { zh: '玉泉养生馆官网', en: 'Jade Wellness Spa Website' },
    industry: { zh: '美容养生', en: 'Beauty & Wellness' },
    year: '2024',
    color: '#1a4d2e',
    shortDesc: { zh: '传统中式养生与现代SPA的完美结合', en: 'Perfect blend of traditional Chinese wellness and modern SPA' },
    client: { zh: 'Jade Wellness 养生馆', en: 'Jade Wellness Spa' },
    description: {
      zh: '为米兰华人养生馆打造的禅意风格网站。提供推拿、足疗、拔罐、针灸等传统中式服务，需要在线预约功能和服务价目展示。',
      en: 'A zen-style website for a Chinese wellness spa in Milan. Offering Tuina, reflexology, cupping, and acupuncture with online booking functionality.'
    },
    challenge: {
      zh: '如何在网站上传达东方禅意和放松氛围？需要直观的服务展示、价格透明、便捷的预约流程。',
      en: 'How to convey Eastern zen and relaxation atmosphere on the website? Need intuitive service display, transparent pricing, and convenient booking.'
    },
    solution: {
      zh: '采用绿色自然配色，禅意设计风格。清晰的服务卡片展示价格和时长，集成在线预约系统，展示理疗师团队。',
      en: 'Green natural color scheme with zen design style. Clear service cards showing prices and duration, integrated online booking, therapist team showcase.'
    },
    results: [
      { value: '3周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '在线预约', label: { zh: '预约功能', en: 'Booking System' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '意大利客人说预约挺方便，不用打电话了。',
        en: 'Italian clients say booking is convenient. No need to call.'
      },
      author: { zh: '梅姐', en: 'Mei' },
      role: { zh: '店主', en: 'Owner' }
    },
    technologies: ['React', 'Booking System', 'Responsive Design'],
    demoUrl: '/demo/jade-spa',
    features: [
      { icon: '💆', title: { zh: '服务展示', en: 'Services Display' }, desc: { zh: '价格透明', en: 'Transparent pricing' } },
      { icon: '📅', title: { zh: '在线预约', en: 'Online Booking' }, desc: { zh: '便捷预约', en: 'Easy booking' } },
      { icon: '👥', title: { zh: '团队介绍', en: 'Team Intro' }, desc: { zh: '专业理疗师', en: 'Professional therapists' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200', caption: { zh: '放松按摩体验', en: 'Relaxing Massage Experience' } }
    ]
  },

  // 5. 外卖点餐APP
  {
    id: 5,
    slug: 'hungry-dragon',
    category: 'app',
    title: { zh: '龙腾外卖APP', en: 'Hungry Dragon Food Delivery App' },
    industry: { zh: '餐饮外卖', en: 'Food Delivery' },
    year: '2024',
    color: '#e53935',
    shortDesc: { zh: '华人中餐厅外卖点餐移动应用', en: 'Chinese restaurant food delivery mobile app' },
    client: { zh: '龙腾餐饮集团', en: 'Dragon Restaurant Group' },
    description: {
      zh: '为米兰华人中餐连锁店开发的外卖点餐APP，支持在线点餐、购物车管理、订单追踪等完整功能。',
      en: 'A food delivery app developed for a Chinese restaurant chain in Milan, supporting online ordering, cart management, and order tracking.'
    },
    challenge: {
      zh: '如何在移动端提供流畅的点餐体验？需要支持菜品分类、购物车实时更新、多语言界面。',
      en: 'How to provide a smooth ordering experience on mobile? Need category filtering, real-time cart updates, and multilingual interface.'
    },
    solution: {
      zh: '采用移动优先设计，底部导航快速切换，分类筛选方便选餐，购物车实时同步，支持三语切换。',
      en: 'Mobile-first design with bottom navigation, category filtering for easy selection, real-time cart sync, and trilingual support.'
    },
    results: [
      { value: '6周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '移动端', label: { zh: '优先适配', en: 'Mobile First' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '老客户用着挺顺手的，省得每次打电话点餐。',
        en: 'Regulars find it handy. Saves calling to order each time.'
      },
      author: { zh: '王老板', en: 'Mr. Wang' },
      role: { zh: '老板', en: 'Owner' }
    },
    technologies: ['React', 'Mobile-First', 'PWA'],
    demoUrl: '/demo/hungry-dragon',
    features: [
      { icon: '🍜', title: { zh: '分类点餐', en: 'Category Menu' }, desc: { zh: '快速筛选菜品', en: 'Quick dish filtering' } },
      { icon: '🛒', title: { zh: '购物车', en: 'Shopping Cart' }, desc: { zh: '实时更新', en: 'Real-time updates' } },
      { icon: '🌍', title: { zh: '三语支持', en: 'Trilingual' }, desc: { zh: '意/英/中', en: 'IT/EN/ZH' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1200', caption: { zh: '外卖点餐界面', en: 'Food Ordering Interface' } }
    ]
  },

  // 6. 美容预约小程序
  {
    id: 6,
    slug: 'beauty-book',
    category: 'miniprogram',
    title: { zh: '美丽预约小程序', en: 'BellaBook Beauty Booking Mini Program' },
    industry: { zh: '美容服务', en: 'Beauty Services' },
    year: '2024',
    color: '#e91e63',
    shortDesc: { zh: '美容院在线预约微信小程序', en: 'WeChat mini program for beauty salon booking' },
    client: { zh: '米兰美丽连锁', en: 'Milano Beauty Chain' },
    description: {
      zh: '为连锁美容院开发的微信小程序，让客户可以在线预约服务、选择技师、管理预约记录。',
      en: 'A WeChat mini program for beauty salon chains, allowing customers to book services, choose stylists, and manage appointments online.'
    },
    challenge: {
      zh: '如何让客户快速找到空闲时段并完成预约？需要整合服务目录、技师排班、会员积分系统。',
      en: 'How to help customers quickly find available slots and complete booking? Need to integrate service catalog, stylist scheduling, and loyalty program.'
    },
    solution: {
      zh: '简洁的预约流程设计，实时显示可用时段，一键选择技师，自动发送预约提醒。',
      en: 'Streamlined booking flow, real-time availability display, one-click stylist selection, and automatic appointment reminders.'
    },
    results: [
      { value: '5周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '预约+会员', label: { zh: '核心功能', en: 'Core Features' } },
      { value: '微信生态', label: { zh: '平台', en: 'Platform' } }
    ],
    testimonial: {
      quote: {
        zh: '客户说比以前打电话预约方便，挺好用的。',
        en: 'Clients say it is easier than calling to book. Works well.'
      },
      author: { zh: '李经理', en: 'Manager Li' },
      role: { zh: '经理', en: 'Manager' }
    },
    technologies: ['WeChat Mini Program', 'Cloud Functions', 'Real-time Sync'],
    demoUrl: '/demo/beauty-book',
    features: [
      { icon: '📅', title: { zh: '智能预约', en: 'Smart Booking' }, desc: { zh: '实时时段查询', en: 'Real-time availability' } },
      { icon: '👩‍💼', title: { zh: '技师选择', en: 'Stylist Select' }, desc: { zh: '查看评价', en: 'View ratings' } },
      { icon: '🎁', title: { zh: '会员积分', en: 'Loyalty Points' }, desc: { zh: '积分兑换', en: 'Redeem rewards' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200', caption: { zh: '美容预约界面', en: 'Beauty Booking Interface' } }
    ]
  },

  // 7. 华人超市小程序
  {
    id: 7,
    slug: 'china-mart',
    category: 'miniprogram',
    title: { zh: '华人超市小程序', en: 'ChinaMart Shopping Mini Program' },
    industry: { zh: '零售电商', en: 'Retail E-commerce' },
    year: '2024',
    color: '#07c160',
    shortDesc: { zh: '华人超市在线购物小程序', en: 'Chinese supermarket online shopping mini program' },
    client: { zh: 'ChinaMart 超市', en: 'ChinaMart Supermarket' },
    description: {
      zh: '为米兰华人超市开发的在线购物小程序，提供商品浏览、在线下单、配送/自提等完整购物体验。',
      en: 'An online shopping mini program for a Chinese supermarket in Milan, offering product browsing, online ordering, delivery/pickup options.'
    },
    challenge: {
      zh: '如何让海外华人方便购买家乡食品？需要直观的分类展示、便捷的购物车、灵活的配送方式。',
      en: 'How to help overseas Chinese easily buy hometown food? Need intuitive categories, convenient cart, and flexible delivery options.'
    },
    solution: {
      zh: '清晰的商品分类（零食、饮料、方便面、调味品等），实时库存显示，支持配送和自提两种方式。',
      en: 'Clear product categories (snacks, drinks, noodles, sauces), real-time stock display, delivery and pickup options.'
    },
    results: [
      { value: '6周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '购物+配送', label: { zh: '核心功能', en: 'Core Features' } },
      { value: '微信生态', label: { zh: '平台', en: 'Platform' } }
    ],
    testimonial: {
      quote: {
        zh: '有些顾客开始用小程序下单了，挺方便的。',
        en: 'Some customers started ordering via mini program. Quite convenient.'
      },
      author: { zh: '张老板', en: 'Mr. Zhang' },
      role: { zh: '老板', en: 'Owner' }
    },
    technologies: ['Mini Program', 'E-commerce', 'Payment Integration'],
    demoUrl: '/demo/china-mart',
    features: [
      { icon: '🛒', title: { zh: '在线购物', en: 'Online Shopping' }, desc: { zh: '便捷下单', en: 'Easy ordering' } },
      { icon: '🚗', title: { zh: '配送/自提', en: 'Delivery/Pickup' }, desc: { zh: '灵活选择', en: 'Flexible options' } },
      { icon: '🔍', title: { zh: '商品搜索', en: 'Product Search' }, desc: { zh: '快速查找', en: 'Quick search' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200', caption: { zh: '超市购物界面', en: 'Supermarket Shopping Interface' } }
    ]
  },

  // 8. 国际物流追踪APP
  {
    id: 8,
    slug: 'dragon-ship',
    category: 'app',
    title: { zh: '龙运物流APP', en: 'DragonShip Logistics Tracking App' },
    industry: { zh: '物流追踪', en: 'Logistics Tracking' },
    year: '2024',
    color: '#1565c0',
    shortDesc: { zh: '国际包裹物流追踪应用', en: 'International package logistics tracking app' },
    client: { zh: '龙运国际物流', en: 'DragonShip Logistics' },
    description: {
      zh: '为华人物流公司开发的包裹追踪APP，支持100+国际物流公司查询，实时推送物流状态更新。',
      en: 'A package tracking app for a Chinese logistics company, supporting 100+ international carriers with real-time status updates.'
    },
    challenge: {
      zh: '如何让用户方便追踪来自中国的包裹？需要整合多个物流公司API，提供统一的追踪体验。',
      en: 'How to help users easily track packages from China? Need to integrate multiple carrier APIs for a unified tracking experience.'
    },
    solution: {
      zh: '一键添加包裹，自动识别物流公司，可视化物流时间线，实时推送通知，支持多包裹管理。',
      en: 'One-click package adding, automatic carrier detection, visual tracking timeline, push notifications, multi-package management.'
    },
    results: [
      { value: '8周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '多物流API', label: { zh: '技术整合', en: 'API Integration' } },
      { value: '实时推送', label: { zh: '通知功能', en: 'Push Notifications' } }
    ],
    testimonial: {
      quote: {
        zh: '查物流不用跑好几个网站了，用着挺顺手。',
        en: 'No more checking multiple sites. Handy to use.'
      },
      author: { zh: '刘先生', en: 'Mr. Liu' },
      role: { zh: '用户', en: 'User' }
    },
    technologies: ['React Native', 'Push Notifications', 'API Integration'],
    demoUrl: '/demo/dragon-ship',
    features: [
      { icon: '📦', title: { zh: '多物流支持', en: 'Multi-Carrier' }, desc: { zh: '100+物流公司', en: '100+ carriers' } },
      { icon: '🔔', title: { zh: '实时推送', en: 'Push Alerts' }, desc: { zh: '状态更新通知', en: 'Status notifications' } },
      { icon: '📍', title: { zh: '物流地图', en: 'Tracking Map' }, desc: { zh: '可视化追踪', en: 'Visual tracking' } }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200', caption: { zh: '物流追踪界面', en: 'Logistics Tracking Interface' } }
    ]
  }
]

export const getPortfolioById = (id) => {
  return portfolioData.find(item => item.id === parseInt(id) || item.slug === id)
}

export const getPortfolioByCategory = (category) => {
  if (!category || category === 'all') return portfolioData
  return portfolioData.filter(item => item.category === category)
}

export const categories = [
  { value: 'all', label: { zh: '全部', en: 'All' } },
  { value: 'restaurant', label: { zh: '餐饮行业', en: 'Restaurant' } },
  { value: 'fashion', label: { zh: '服装时尚', en: 'Fashion' } },
  { value: 'trade', label: { zh: '进出口贸易', en: 'Trade' } },
  { value: 'beauty', label: { zh: '美容养生', en: 'Beauty' } },
  { value: 'app', label: { zh: '移动应用', en: 'Mobile App' } },
  { value: 'miniprogram', label: { zh: '小程序', en: 'Mini Program' } }
]
