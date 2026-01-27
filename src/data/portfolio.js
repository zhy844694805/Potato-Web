// 作品集数据 - 意大利华人企业网站案例
export const portfolioData = [
  // 1. 意大利寿司餐厅 (Sakura Milano - Live Demo)
  {
    id: 1,
    slug: 'sakura-milano',
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
    thumbnail: '/images/portfolio/sushi-1.jpg',
    images: [
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '精致寿司摆盘', en: 'Exquisite Sushi Plating' } }
    ]
  },

  // 1b. Sushi Moto (Live Demo)
  {
    id: 101,
    slug: 'sushi-moto',
    category: 'restaurant',
    title: { zh: 'Sushi Moto - 现代大胆风格', en: 'Sushi Moto - Modern Bold Style' },
    industry: { zh: '餐饮行业', en: 'Restaurant Industry' },
    year: '2024',
    color: '#CB1B33',
    shortDesc: { zh: '大胆现代的连锁寿司品牌', en: 'Bold modern sushi chain brand' },
    client: { zh: 'Sushi Moto 米兰', en: 'Sushi Moto Milan' },
    description: {
      zh: '参考Monster Sushi的设计风格，采用深黑背景配鲜红强调色，打造年轻、大胆、充满活力的现代寿司品牌形象。',
      en: 'Inspired by Monster Sushi design style, featuring deep black background with vibrant red accents for a young, bold, and energetic modern sushi brand.'
    },
    challenge: { zh: '如何打造年轻潮流的寿司品牌形象？', en: 'How to create a trendy sushi brand targeting young audiences?' },
    solution: { zh: '深黑背景+红色强调，粗体排版，多门店展示，动态菜单卡片。', en: 'Deep black + red accents, bold typography, multi-location display, dynamic menu cards.' },
    results: [
      { value: '现代', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '大胆', label: { zh: '品牌调性', en: 'Brand Tone' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'CSS3', 'Modern Design'],
    demoUrl: '/demo/sushi-moto',
    features: [
      { icon: '🔴', title: { zh: '大胆配色', en: 'Bold Colors' }, desc: { zh: '黑+红现代感', en: 'Black + Red modern' } },
      { icon: '📍', title: { zh: '多门店', en: 'Multi-Location' }, desc: { zh: '连锁展示', en: 'Chain display' } },
      { icon: '🍱', title: { zh: '动态菜单', en: 'Dynamic Menu' }, desc: { zh: '分类切换', en: 'Category switch' } }
    ],
    thumbnail: '/images/portfolio/sushi-1.jpg',
    images: [
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '首页展示', en: 'Homepage' } },
      { url: '/images/portfolio/sushi-2.jpg', caption: { zh: '菜单页面', en: 'Menu Page' } },
      { url: '/images/portfolio/sushi-3.jpg', caption: { zh: '门店信息', en: 'Location Info' } }
    ]
  },

  // 2. 普拉托时装品牌 (Prato Fashion - Live Demo)
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
      en: 'An elegant website for a Chinese fashion brand in Prato\\'s textile district. The brand combines Italian tailoring with Chinese manufacturing excellence.'
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
    thumbnail: '/images/portfolio/fashion-1.jpg',
    images: [
      { url: '/images/portfolio/fashion-1.jpg', caption: { zh: '时装系列展示', en: 'Fashion Collection' } }
    ]
  },

  // 3. 进出口贸易公司 (Dragon Trade - Live Demo)
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
    thumbnail: '/images/portfolio/hairsalon-1.jpg',
    images: [
      { url: '/images/portfolio/hairsalon-1.jpg', caption: { zh: '国际贸易物流', en: 'International Trade Logistics' } }
    ]
  },

  // 4. 美容按摩养生馆 (Jade Spa - Live Demo)
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
    thumbnail: '/images/portfolio/spa-1.jpg',
    images: [
      { url: '/images/portfolio/spa-1.jpg', caption: { zh: '放松按摩体验', en: 'Relaxing Massage Experience' } }
    ]
  },

  // 5. 外卖点餐APP (Hungry Dragon - Live Demo)
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
    thumbnail: '/images/portfolio/chinese-food.jpg',
    images: [
      { url: '/images/portfolio/chinese-food.jpg', caption: { zh: '外卖点餐界面', en: 'Food Ordering Interface' } }
    ]
  },

  // 6. 美容预约小程序 (Beauty Book - Live Demo)
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
    thumbnail: '/images/portfolio/beauty-1.jpg',
    images: [
      { url: '/images/portfolio/beauty-1.jpg', caption: { zh: '美容预约界面', en: 'Beauty Booking Interface' } }
    ]
  },

  // 7. 华人超市小程序 (China Mart - Live Demo)
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
    thumbnail: '/images/portfolio/supermarket-1.jpg',
    images: [
      { url: '/images/portfolio/supermarket-1.jpg', caption: { zh: '超市购物界面', en: 'Supermarket Shopping Interface' } }
    ]
  },

  // 11. 房产中介 (Casa Milano - Live Demo)
  {
    id: 11,
    slug: 'casa-milano',
    category: 'professional',
    title: { zh: 'Casa Milano 房产中介', en: 'Casa Milano Real Estate Agency' },
    industry: { zh: '房产中介', en: 'Real Estate' },
    year: '2024',
    color: '#c9a962',
    shortDesc: { zh: '专为华人社区服务的米兰房产中介', en: 'Milan real estate agency specialized for Chinese community' },
    client: { zh: 'Casa Milano 房产', en: 'Casa Milano Real Estate' },
    description: {
      zh: '为米兰华人房产中介打造的高端官网。提供房屋买卖、出租、投资咨询等全方位服务，支持意英中三语，帮助华人客户在米兰找到理想的家。',
      en: 'A premium website for a Chinese real estate agency in Milan. Offering property sales, rentals, and investment consulting with trilingual support to help Chinese clients find their ideal home in Milan.'
    },
    challenge: {
      zh: '如何展示房源信息并提供便捷的筛选功能？需要优雅的设计、清晰的房源卡片、多条件筛选和便捷的联系方式。',
      en: 'How to display property listings with convenient filtering? Need elegant design, clear property cards, multi-criteria filtering and easy contact options.'
    },
    solution: {
      zh: '采用深蓝+金色高端配色，卡片式房源展示，支持类型、区域、价格、卧室数量多维筛选，集成WeChat/WhatsApp联系方式。',
      en: 'Deep blue + gold premium color scheme, card-style property display, multi-dimensional filtering by type, area, price, bedrooms, integrated WeChat/WhatsApp contact options.'
    },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '10套房源', label: { zh: '房源展示', en: 'Properties' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站设计很高端，房源展示清晰，客户反馈很好。',
        en: 'Premium website design, clear property display, great client feedback.'
      },
      author: { zh: '陈经理', en: 'Manager Chen' },
      role: { zh: '经理', en: 'Manager' }
    },
    technologies: ['React', 'CSS Variables', 'Responsive Design'],
    demoUrl: '/demo/casa-milano',
    features: [
      { icon: '🏠', title: { zh: '房源展示', en: 'Property Display' }, desc: { zh: '卡片式房源列表', en: 'Card-style listings' } },
      { icon: '🔍', title: { zh: '智能筛选', en: 'Smart Filtering' }, desc: { zh: '多条件筛选', en: 'Multi-criteria filter' } },
      { icon: '🌍', title: { zh: '三语支持', en: 'Trilingual' }, desc: { zh: '意/英/中', en: 'IT/EN/ZH' } }
    ],
    thumbnail: '/images/portfolio/fashion-2.jpg',
    images: [
      { url: '/images/portfolio/fashion-2.jpg', caption: { zh: '米兰房产', en: 'Milan Real Estate' } }
    ]
  },

  // 15. 律师事务所 (Zheng Law - Live Demo)
  {
    id: 16,
    slug: 'zheng-law',
    category: 'professional',
    title: { zh: '郑氏律师事务所', en: 'Zheng Law Firm Website' },
    industry: { zh: '法律服务', en: 'Legal Services' },
    year: '2024',
    color: '#1a365d',
    shortDesc: { zh: '专业华人律师团队，提供中意双语法律服务', en: 'Professional Chinese lawyer team with bilingual legal services' },
    client: { zh: 'Studio Legale Zheng', en: 'Studio Legale Zheng' },
    description: {
      zh: '为米兰华人律师事务所打造的专业官网。事务所提供居留许可、家庭团聚、入籍申请、公司法务、刑事辩护等全方位法律服务，服务华人社区15年。',
      en: 'A professional website for a Chinese law firm in Milan. The firm provides comprehensive legal services including residence permits, family reunification, citizenship applications, corporate law, and criminal defense, serving the Chinese community for 15 years.'
    },
    challenge: {
      zh: '如何建立专业可信的律师事务所形象？需要清晰展示服务范围、律师团队资质，并提供便捷的咨询渠道。',
      en: 'How to build a professional and trustworthy law firm image? Need to clearly display services, lawyer qualifications, and provide convenient consultation channels.'
    },
    solution: {
      zh: '采用深蓝+金色专业配色，展示15年经验数据，6大法律服务分类，律师团队资质介绍，在线咨询表单，三语支持。',
      en: 'Professional deep blue + gold color scheme, 15-year experience statistics, 6 legal service categories, lawyer team qualifications, online consultation form, trilingual support.'
    },
    results: [
      { value: '15年', label: { zh: '执业经验', en: 'Experience' } },
      { value: '2000+', label: { zh: '成功案例', en: 'Cases Won' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站设计很专业，客户查看服务和律师资质很方便。',
        en: 'Professional website design. Clients can easily check services and lawyer credentials.'
      },
      author: { zh: '郑律师', en: 'Avv. Zheng' },
      role: { zh: '创始合伙人', en: 'Founding Partner' }
    },
    technologies: ['React', 'CSS Variables', 'Responsive Design'],
    demoUrl: '/demo/zheng-law',
    features: [
      { icon: '⚖️', title: { zh: '法律服务', en: 'Legal Services' }, desc: { zh: '6大专业领域', en: '6 practice areas' } },
      { icon: '👔', title: { zh: '律师团队', en: 'Legal Team' }, desc: { zh: '资深中意律师', en: 'Senior Chinese-Italian lawyers' } },
      { icon: '🌍', title: { zh: '三语支持', en: 'Trilingual' }, desc: { zh: '意/英/中', en: 'IT/EN/ZH' } }
    ],
    thumbnail: '/images/portfolio/law-1.jpg',
    images: [
      { url: '/images/portfolio/law-1.jpg', caption: { zh: '专业法律服务', en: 'Professional Legal Services' } }
    ]
  },

  // 19. CloudTask SaaS产品 (Cloud Task - Live Demo)
  {
    id: 20,
    slug: 'cloud-task',
    category: 'saas',
    title: { zh: 'CloudTask 项目管理平台', en: 'CloudTask Project Management SaaS' },
    industry: { zh: 'SaaS软件', en: 'SaaS Software' },
    year: '2024',
    color: '#2563eb',
    shortDesc: { zh: '团队协作与项目管理SaaS平台', en: 'Team collaboration and project management SaaS platform' },
    client: { zh: 'CloudTask Inc.', en: 'CloudTask Inc.' },
    description: {
      zh: '为SaaS创业公司打造的项目管理平台官网。展示任务管理、团队协作、时间追踪、第三方集成等核心功能，包含多层级定价方案展示。',
      en: 'A project management platform website for a SaaS startup. Showcasing task management, team collaboration, time tracking, third-party integrations with multi-tier pricing display.'
    },
    challenge: { zh: '如何清晰展示SaaS产品的功能价值？', en: 'How to clearly present SaaS product value proposition?' },
    solution: { zh: '清晰的功能模块展示，直观的定价对比表，产品预览截图，用户推荐语，试用CTA。', en: 'Clear feature modules, intuitive pricing comparison, product preview screenshots, testimonials, trial CTA.' },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '3档', label: { zh: '定价方案', en: 'Pricing Tiers' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'SaaS Design', 'Pricing Tables'],
    demoUrl: '/demo/cloud-task',
    features: [
      { icon: '📋', title: { zh: '任务管理', en: 'Task Management' }, desc: { zh: '看板/列表视图', en: 'Kanban/List views' } },
      { icon: '👥', title: { zh: '团队协作', en: 'Collaboration' }, desc: { zh: '实时同步', en: 'Real-time sync' } },
      { icon: '💰', title: { zh: '定价展示', en: 'Pricing' }, desc: { zh: '多层级方案', en: 'Multi-tier plans' } }
    ],
    thumbnail: '/images/portfolio/saas-1.jpg',
    images: [
      { url: '/images/portfolio/saas-1.jpg', caption: { zh: '产品首页', en: 'Product Homepage' } },
      { url: '/images/portfolio/finance-1.jpg', caption: { zh: '功能展示', en: 'Features Display' } },
      { url: '/images/portfolio/trade-1.jpg', caption: { zh: '定价方案', en: 'Pricing Plans' } }
    ]
  },

  // 26. TechZone 科技领域 - 电商独立站 (Tech Zone - Live Demo)
  {
    id: 26,
    slug: 'tech-zone',
    category: 'ecommerce',
    title: { zh: 'TechZone 科技领域电商', en: 'TechZone E-commerce Platform' },
    industry: { zh: '电子商务', en: 'E-commerce' },
    year: '2024',
    color: '#3b82f6',
    shortDesc: { zh: '全功能电商独立站，含后台管理系统', en: 'Full-featured e-commerce with admin dashboard' },
    client: { zh: 'TechZone 科技', en: 'TechZone Tech' },
    description: {
      zh: '一个完整的电商独立站解决方案，包含商品展示、购物车、结账流程、心愿单等完整购物功能，以及管理员后台系统。支持商品管理、用户管理、订单管理等全方位电商运营功能。',
      en: 'A complete e-commerce solution featuring product catalog, shopping cart, checkout flow, wishlist, and a full admin dashboard. Supports product management, user management, and order management for comprehensive e-commerce operations.'
    },
    challenge: {
      zh: '如何构建一个既有完整购物体验，又具备强大后台管理能力的电商系统？需要在前端展示与后台管理之间实现无缝衔接。',
      en: 'How to build an e-commerce system with both complete shopping experience and powerful backend management? Seamless integration between frontend and admin panel was essential.'
    },
    solution: {
      zh: '采用React组件化架构，Context API管理全局状态，localStorage持久化购物车和心愿单数据，独立的管理员认证系统和仪表盘。',
      en: 'React component architecture with Context API for global state, localStorage for cart and wishlist persistence, independent admin authentication and dashboard system.'
    },
    results: [
      { value: '30+', label: { zh: '商品数量', en: 'Products' } },
      { value: '8', label: { zh: '商品分类', en: 'Categories' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'Context API', 'LocalStorage', 'CSS3'],
    demoUrl: '/demo/tech-zone',
    features: [
      { icon: '🛒', title: { zh: '购物车系统', en: 'Shopping Cart' }, desc: { zh: '实时更新，持久化存储', en: 'Real-time updates, persistent storage' } },
      { icon: '❤️', title: { zh: '心愿单', en: 'Wishlist' }, desc: { zh: '收藏喜欢的商品', en: 'Save favorite products' } },
      { icon: '🔐', title: { zh: '管理后台', en: 'Admin Panel' }, desc: { zh: '商品/用户/订单管理', en: 'Products/Users/Orders management' } },
      { icon: '🔍', title: { zh: '商品搜索', en: 'Product Search' }, desc: { zh: '智能搜索和筛选', en: 'Smart search and filtering' } }
    ],
    thumbnail: '/images/portfolio/tech-1.jpg',
    images: [
      { url: '/images/portfolio/tech-1.jpg', caption: { zh: '商城首页', en: 'Store Homepage' } },
      { url: '/images/portfolio/tech-2.jpg', caption: { zh: '商品列表', en: 'Product Listing' } },
      { url: '/images/portfolio/tech-3.jpg', caption: { zh: '管理后台', en: 'Admin Dashboard' } }
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
  { value: 'professional', label: { zh: '专业服务', en: 'Professional Services' } },
  { value: 'app', label: { zh: '移动应用', en: 'Mobile App' } },
  { value: 'miniprogram', label: { zh: '小程序', en: 'Mini Program' } },
  { value: 'saas', label: { zh: 'SaaS产品', en: 'SaaS Product' } },
  { value: 'ecommerce', label: { zh: '电子商务', en: 'E-commerce' } }
]