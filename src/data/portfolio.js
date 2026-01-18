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
    thumbnail: '/images/portfolio/sushi-1.jpg',
    images: [
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '精致寿司摆盘', en: 'Exquisite Sushi Plating' } }
    ]
  },

  // 1b. Sushi Moto - Monster Sushi风格 (暗黑+红色)
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

  // 1c. Koku Sushi - Nobu风格 (金+黑奢华)
  {
    id: 102,
    slug: 'koku-sushi',
    category: 'restaurant',
    title: { zh: 'Koku Sushi - 奢华高端风格', en: 'Koku Sushi - Luxury Premium Style' },
    industry: { zh: '餐饮行业', en: 'Restaurant Industry' },
    year: '2024',
    color: '#C9A227',
    shortDesc: { zh: '金色奢华的高端Omakase餐厅', en: 'Gold luxury premium Omakase restaurant' },
    client: { zh: 'Koku Sushi 米兰', en: 'Koku Sushi Milan' },
    description: {
      zh: '参考Nobu的设计风格，采用黑色背景配金色点缀，优雅衬线字体，打造米其林级别的高端日料体验。',
      en: 'Inspired by Nobu design style, featuring black background with gold accents and elegant serif typography for Michelin-level fine dining experience.'
    },
    challenge: { zh: '如何传达高端奢华的品牌定位？', en: 'How to convey luxury premium brand positioning?' },
    solution: { zh: '黑金配色，衬线字体，日式汉字元素，优雅留白，预约驱动体验。', en: 'Black + gold palette, serif typography, Japanese kanji elements, elegant whitespace, reservation-driven experience.' },
    results: [
      { value: '奢华', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '高端', label: { zh: '品牌定位', en: 'Brand Position' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'Luxury Design', 'Typography'],
    demoUrl: '/demo/koku-sushi',
    features: [
      { icon: '✨', title: { zh: '金色奢华', en: 'Gold Luxury' }, desc: { zh: '黑金配色', en: 'Black + Gold' } },
      { icon: '🍶', title: { zh: 'Omakase', en: 'Omakase' }, desc: { zh: '主厨推荐', en: 'Chef\'s choice' } },
      { icon: '📞', title: { zh: '预约体验', en: 'Reservation' }, desc: { zh: '专属服务', en: 'Exclusive service' } }
    ],
    thumbnail: '/images/portfolio/shipping-1.jpg',
    images: [
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '奢华首页', en: 'Luxury Homepage' } },
      { url: '/images/portfolio/sushi-2.jpg', caption: { zh: 'Omakase菜单', en: 'Omakase Menu' } },
      { url: '/images/portfolio/sushi-3.jpg', caption: { zh: '预约系统', en: 'Reservation System' } }
    ]
  },

  // 1d. Yume Sushi - IYO风格 (白色极简)
  {
    id: 103,
    slug: 'yume-sushi',
    category: 'restaurant',
    title: { zh: 'Yume Sushi - 极简高雅风格', en: 'Yume Sushi - Minimal Elegant Style' },
    industry: { zh: '餐饮行业', en: 'Restaurant Industry' },
    year: '2024',
    color: '#1A1A1A',
    shortDesc: { zh: '白色极简的高端品鉴餐厅', en: 'White minimal premium tasting restaurant' },
    client: { zh: 'Yume Sushi 米兰', en: 'Yume Sushi Milan' },
    description: {
      zh: '参考IYO的设计风格，采用纯白背景配简洁黑色文字，大量留白，季节性菜单卡片，打造宁静优雅的用餐体验。',
      en: 'Inspired by IYO design style, featuring pure white background with minimal black text, generous whitespace, seasonal menu cards for a serene elegant dining experience.'
    },
    challenge: { zh: '如何用极简设计传达高端品鉴体验？', en: 'How to convey premium tasting experience through minimal design?' },
    solution: { zh: '白色背景，简洁排版，季节性菜单卡片，横向画廊滚动，沉浸式体验。', en: 'White background, minimal typography, seasonal menu cards, horizontal gallery scroll, immersive experience.' },
    results: [
      { value: '极简', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '高雅', label: { zh: '品牌气质', en: 'Brand Essence' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'Minimal Design', 'Card Layout'],
    demoUrl: '/demo/yume-sushi',
    features: [
      { icon: '⬜', title: { zh: '纯白极简', en: 'Pure Minimal' }, desc: { zh: '优雅留白', en: 'Elegant space' } },
      { icon: '🌸', title: { zh: '季节菜单', en: 'Seasonal Menu' }, desc: { zh: '四季品鉴', en: 'Four seasons' } },
      { icon: '🖼️', title: { zh: '画廊展示', en: 'Gallery' }, desc: { zh: '横向滚动', en: 'Horizontal scroll' } }
    ],
    thumbnail: '/images/portfolio/sushi-2.jpg',
    images: [
      { url: '/images/portfolio/sushi-2.jpg', caption: { zh: '极简首页', en: 'Minimal Homepage' } },
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '季节菜单', en: 'Seasonal Menu' } },
      { url: '/images/portfolio/sushi-3.jpg', caption: { zh: '画廊展示', en: 'Gallery Display' } }
    ]
  },

  // 1e. Golden Koi - Finger's风格 (金棕奢华)
  {
    id: 104,
    slug: 'golden-koi',
    category: 'restaurant',
    title: { zh: 'Golden Koi - 金棕奢华风格', en: 'Golden Koi - Gold Luxury Style' },
    industry: { zh: '餐饮行业', en: 'Restaurant Industry' },
    year: '2024',
    color: '#c4a35a',
    shortDesc: { zh: '金棕配色的多门店高端日料品牌', en: 'Gold-brown luxury multi-location Japanese restaurant' },
    client: { zh: 'Golden Koi 金鲤', en: 'Golden Koi Restaurant' },
    description: {
      zh: '参考Finger\'s的设计风格，采用金棕配色、优雅衬线字体和中文装饰元素，打造多门店高端日料品牌形象，包含完整预约系统。',
      en: 'Inspired by Finger\'s design style, featuring gold-brown palette, elegant serif typography and Chinese decorative elements for a multi-location luxury Japanese restaurant with full reservation system.'
    },
    challenge: { zh: '如何展示多门店品牌的统一形象？', en: 'How to showcase unified branding across multiple locations?' },
    solution: { zh: '金棕奢华配色，多门店展示，完整预约表单，Omakase体验板块，三语支持。', en: 'Gold-brown luxury palette, multi-location display, full reservation form, Omakase experience section, trilingual support.' },
    results: [
      { value: '奢华', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '3门店', label: { zh: '多店展示', en: 'Locations' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'Luxury Design', 'Reservation System'],
    demoUrl: '/demo/golden-koi',
    features: [
      { icon: '🏆', title: { zh: '金棕奢华', en: 'Gold Luxury' }, desc: { zh: '高端品牌感', en: 'Premium branding' } },
      { icon: '📍', title: { zh: '多门店', en: 'Multi-Location' }, desc: { zh: '3城市展示', en: '3 cities display' } },
      { icon: '📝', title: { zh: '预约系统', en: 'Reservation' }, desc: { zh: '完整表单', en: 'Full booking form' } }
    ],
    thumbnail: '/images/portfolio/sushi-2.jpg',
    images: [
      { url: '/images/portfolio/sushi-2.jpg', caption: { zh: '金棕首页', en: 'Gold Homepage' } },
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '多门店展示', en: 'Multi-Location' } },
      { url: '/images/portfolio/sushi-3.jpg', caption: { zh: '预约表单', en: 'Booking Form' } }
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
    thumbnail: '/images/portfolio/fashion-1.jpg',
    images: [
      { url: '/images/portfolio/fashion-1.jpg', caption: { zh: '时装系列展示', en: 'Fashion Collection' } }
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
    thumbnail: '/images/portfolio/hairsalon-1.jpg',
    images: [
      { url: '/images/portfolio/hairsalon-1.jpg', caption: { zh: '国际贸易物流', en: 'International Trade Logistics' } }
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
    thumbnail: '/images/portfolio/spa-1.jpg',
    images: [
      { url: '/images/portfolio/spa-1.jpg', caption: { zh: '放松按摩体验', en: 'Relaxing Massage Experience' } }
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
    thumbnail: '/images/portfolio/chinese-food.jpg',
    images: [
      { url: '/images/portfolio/chinese-food.jpg', caption: { zh: '外卖点餐界面', en: 'Food Ordering Interface' } }
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
    thumbnail: '/images/portfolio/beauty-1.jpg',
    images: [
      { url: '/images/portfolio/beauty-1.jpg', caption: { zh: '美容预约界面', en: 'Beauty Booking Interface' } }
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
    thumbnail: '/images/portfolio/supermarket-1.jpg',
    images: [
      { url: '/images/portfolio/supermarket-1.jpg', caption: { zh: '超市购物界面', en: 'Supermarket Shopping Interface' } }
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
    thumbnail: '/images/portfolio/trade-1.jpg',
    images: [
      { url: '/images/portfolio/trade-1.jpg', caption: { zh: '物流追踪界面', en: 'Logistics Tracking Interface' } }
    ]
  },

  // 9. 会计事务所官网
  {
    id: 9,
    slug: 'euro-tax',
    category: 'professional',
    title: { zh: '欧税会计事务所官网', en: 'Euro Tax Accounting Firm Website' },
    industry: { zh: '专业服务', en: 'Professional Services' },
    year: '2024',
    color: '#1e40af',
    shortDesc: { zh: '为在意华人提供专业税务和会计服务', en: 'Professional tax and accounting services for Chinese community in Italy' },
    client: { zh: 'Euro Tax 会计事务所', en: 'Euro Tax Studio' },
    description: {
      zh: '为米兰华人会计事务所打造的专业官网。事务所提供记账、报税、公司注册、居留咨询等全方位服务，需要展示专业形象并方便客户咨询。',
      en: 'A professional website for a Chinese accounting firm in Milan. The firm offers bookkeeping, tax filing, company registration, and residence permit consulting services.'
    },
    challenge: {
      zh: '如何在网站上建立专业可信赖的形象？需要清晰展示服务范围、团队资质，并提供便捷的咨询渠道。',
      en: 'How to build a professional and trustworthy image on the website? Need to clearly display services, team qualifications, and provide convenient consultation channels.'
    },
    solution: {
      zh: '采用深蓝色专业配色，Bento网格布局展示服务，团队资质认证展示，集成在线咨询表单，三语支持服务华人客户。',
      en: 'Professional dark blue color scheme, Bento grid layout for services, team certification display, integrated consultation form, trilingual support for Chinese clients.'
    },
    results: [
      { value: '3周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '6项服务', label: { zh: '服务展示', en: 'Services' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站很专业，客户查服务方便，咨询表单也好用。',
        en: 'Professional website. Clients can easily check services and the form works great.'
      },
      author: { zh: '陈马可', en: 'Marco Chen' },
      role: { zh: '创始人', en: 'Founder' }
    },
    technologies: ['React', 'Bento Grid', 'Dark Theme'],
    demoUrl: '/demo/euro-tax',
    features: [
      { icon: '📒', title: { zh: '服务展示', en: 'Services Display' }, desc: { zh: 'Bento网格布局', en: 'Bento grid layout' } },
      { icon: '👥', title: { zh: '团队介绍', en: 'Team Intro' }, desc: { zh: '专业资质展示', en: 'Professional credentials' } },
      { icon: '🌍', title: { zh: '三语支持', en: 'Trilingual' }, desc: { zh: '意/英/中', en: 'IT/EN/ZH' } }
    ],
    thumbnail: '/images/portfolio/finance-1.jpg',
    images: [
      { url: '/images/portfolio/finance-1.jpg', caption: { zh: '专业会计服务', en: 'Professional Accounting Services' } }
    ]
  },

  // 10. 装修设计公司
  {
    id: 10,
    slug: 'dragon-design',
    category: 'trade',
    title: { zh: 'Dragon Design 装修设计', en: 'Dragon Design Renovation Company' },
    industry: { zh: '装修设计', en: 'Interior Design & Renovation' },
    year: '2024',
    color: '#ff6b00',
    shortDesc: { zh: '现代工业风装修设计公司官网', en: 'Modern industrial style renovation company website' },
    client: { zh: 'Dragon Design 装修公司', en: 'Dragon Design Srl' },
    description: {
      zh: '为米兰华人装修公司打造的现代工业风官网。公司提供室内设计、住宅装修、商业装修、餐厅装修等全方位服务，需要展示作品案例和在线报价功能。',
      en: 'A modern industrial style website for a Chinese renovation company in Milan. The company offers interior design, residential and commercial renovations with portfolio showcase and online quote functionality.'
    },
    challenge: {
      zh: '如何展示装修公司的专业实力和作品案例？需要清晰的服务分类、项目画廊展示、在线报价表单。',
      en: 'How to showcase the renovation company\'s expertise and portfolio? Need clear service categories, project gallery, and online quote form.'
    },
    solution: {
      zh: '采用黑色+橙色现代工业风配色，网格布局展示作品案例，详细的服务卡片和报价表单，三语支持覆盖意大利和华人客户。',
      en: 'Modern industrial black + orange color scheme, grid layout for portfolio display, detailed service cards and quote form, trilingual support for Italian and Chinese clients.'
    },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '6项服务', label: { zh: '服务展示', en: 'Services' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站作品展示效果很好，客户看了就能了解我们的水平。',
        en: 'Portfolio showcase works great. Clients understand our quality at a glance.'
      },
      author: { zh: '龙师傅', en: 'Master Long' },
      role: { zh: '创始人', en: 'Founder' }
    },
    technologies: ['React', 'CSS Grid', 'Responsive Design'],
    demoUrl: '/demo/dragon-design',
    features: [
      { icon: '🏠', title: { zh: '作品展示', en: 'Portfolio Gallery' }, desc: { zh: '项目案例网格', en: 'Project grid display' } },
      { icon: '🛠️', title: { zh: '服务分类', en: 'Service Categories' }, desc: { zh: '住宅/商业/餐饮', en: 'Residential/Commercial/Restaurant' } },
      { icon: '📝', title: { zh: '在线报价', en: 'Quote Form' }, desc: { zh: '快速获取报价', en: 'Quick quote request' } }
    ],
    thumbnail: '/images/portfolio/realestate-1.jpg',
    images: [
      { url: '/images/portfolio/realestate-1.jpg', caption: { zh: '现代装修案例', en: 'Modern Renovation Project' } }
    ]
  },

  // 11. 房产中介
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

  // 12. 驾校
  {
    id: 12,
    slug: 'milan-drive',
    category: 'professional',
    title: { zh: 'Milan Drive 米兰驾校', en: 'Milan Drive Driving School' },
    industry: { zh: '驾驶培训', en: 'Driving Education' },
    year: '2024',
    color: '#16a34a',
    shortDesc: { zh: '专业驾驶培训学校，中文教学服务', en: 'Professional driving school with Chinese instruction' },
    client: { zh: 'Milan Drive 驾校', en: 'Milan Drive School' },
    description: {
      zh: '为米兰华人驾校打造的现代官网。提供汽车、摩托车等多种驾照培训课程，配备中文教练，支持意大利驾照理论和路考全程指导。',
      en: 'A modern website for a Chinese driving school in Milan. Offering car and motorcycle license courses with Chinese instructors, supporting full Italian driving license theory and road test guidance.'
    },
    challenge: { zh: '如何向华人学员清晰展示意大利驾照考取流程？', en: 'How to clearly present Italian driving license process to Chinese students?' },
    solution: { zh: '绿色现代配色，清晰的课程卡片展示，驾照类型分类，中文教练介绍，在线报名表单。', en: 'Green modern colors, clear course cards, license type categories, Chinese instructor profiles, online registration form.' },
    results: [
      { value: '现代', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '5类驾照', label: { zh: '课程覆盖', en: 'License Types' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站帮助学员了解考试流程，报名咨询方便多了。',
        en: 'Website helps students understand the exam process. Much easier to inquire and register.'
      },
      author: { zh: '马教练', en: 'Coach Ma' },
      role: { zh: '首席教练', en: 'Head Instructor' }
    },
    technologies: ['React', 'CSS Grid', 'Modern UI'],
    demoUrl: '/demo/milan-drive',
    features: [
      { icon: '🚗', title: { zh: '多类驾照', en: 'Multiple Licenses' }, desc: { zh: '汽车/摩托车/商用车', en: 'Car/Motorcycle/Commercial' } },
      { icon: '👨‍🏫', title: { zh: '中文教练', en: 'Chinese Instructors' }, desc: { zh: '双语教学', en: 'Bilingual teaching' } },
      { icon: '📋', title: { zh: '在线报名', en: 'Online Registration' }, desc: { zh: '便捷咨询', en: 'Easy inquiry' } }
    ],
    thumbnail: '/images/portfolio/driving-1.jpg',
    images: [
      { url: '/images/portfolio/driving-1.jpg', caption: { zh: '驾驶培训', en: 'Driving Training' } }
    ]
  },

  // 13. 奶茶店
  {
    id: 14,
    slug: 'boba-tea',
    category: 'restaurant',
    title: { zh: 'Boba Dream 珍珠奶茶', en: 'Boba Dream Bubble Tea Shop' },
    industry: { zh: '茶饮行业', en: 'Beverage Industry' },
    year: '2024',
    color: '#764ba2',
    shortDesc: { zh: '现代潮流的珍珠奶茶品牌', en: 'Trendy modern bubble tea brand' },
    client: { zh: 'Boba Dream 米兰', en: 'Boba Dream Milano' },
    description: {
      zh: '为米兰的网红奶茶店打造的时尚官网。采用渐变色彩设计，展示丰富的饮品菜单，支持在线点单，吸引年轻消费群体。',
      en: 'A trendy website for a popular bubble tea shop in Milan. Featuring gradient color design, rich drink menu, online ordering, targeting young consumers.'
    },
    challenge: { zh: '如何打造年轻潮流的奶茶品牌形象？', en: 'How to create a trendy bubble tea brand image?' },
    solution: { zh: '紫粉渐变配色，圆润现代设计，分类饮品展示，加料选项，购物车功能。', en: 'Purple-pink gradient, rounded modern design, categorized drinks, topping options, cart feature.' },
    results: [
      { value: '潮流', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '12+', label: { zh: '饮品种类', en: 'Drinks' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'CSS Gradient', 'Modern UI'],
    demoUrl: '/demo/boba-tea',
    features: [
      { icon: '🧋', title: { zh: '分类菜单', en: 'Category Menu' }, desc: { zh: '招牌/奶茶/水果茶/冰沙', en: 'Signature/Milk Tea/Fruit Tea/Smoothie' } },
      { icon: '🍡', title: { zh: '加料选项', en: 'Toppings' }, desc: { zh: '多种配料选择', en: 'Various topping choices' } },
      { icon: '🛒', title: { zh: '购物车', en: 'Cart' }, desc: { zh: '便捷点单', en: 'Easy ordering' } }
    ],
    thumbnail: '/images/portfolio/boba-1.jpg',
    images: [
      { url: '/images/portfolio/boba-1.jpg', caption: { zh: '潮流首页', en: 'Trendy Homepage' } },
      { url: '/images/portfolio/chinese-food.jpg', caption: { zh: '饮品菜单', en: 'Drink Menu' } },
      { url: '/images/portfolio/beauty-1.jpg', caption: { zh: '购物车', en: 'Shopping Cart' } }
    ]
  },

  // 14. 中餐馆
  {
    id: 15,
    slug: 'mama-chen',
    category: 'restaurant',
    title: { zh: 'Mama Chen 中餐馆', en: 'Mama Chen Chinese Restaurant' },
    industry: { zh: '餐饮行业', en: 'Restaurant Industry' },
    year: '2024',
    color: '#8b0000',
    shortDesc: { zh: '传统正宗的中式家常菜餐厅', en: 'Authentic traditional Chinese home cooking' },
    client: { zh: '陈妈妈餐厅', en: 'Mama Chen Restaurant' },
    description: {
      zh: '为米兰华人街的传统中餐馆打造的高端官网。红金配色体现中式传统，展示丰富菜品，支持午市套餐预订和在线预约。',
      en: 'A premium website for a traditional Chinese restaurant in Milan Chinatown. Red and gold colors reflecting Chinese tradition, rich menu display, lunch specials and online reservation.'
    },
    challenge: { zh: '如何体现传统中餐的正宗氛围？', en: 'How to convey authentic traditional Chinese atmosphere?' },
    solution: { zh: '深红+金色配色，传统元素融合现代设计，分类菜单展示，午市套餐推广，在线预约系统。', en: 'Dark red + gold colors, traditional elements with modern design, categorized menu, lunch special promotion, online reservation.' },
    results: [
      { value: '传统', label: { zh: '设计风格', en: 'Design Style' } },
      { value: '19道', label: { zh: '招牌菜品', en: 'Signature Dishes' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'CSS', 'Traditional Design'],
    demoUrl: '/demo/mama-chen',
    features: [
      { icon: '🥟', title: { zh: '分类菜单', en: 'Category Menu' }, desc: { zh: '前菜/主菜/面食/饭类', en: 'Appetizer/Main/Noodles/Rice' } },
      { icon: '🍽️', title: { zh: '午市套餐', en: 'Lunch Special' }, desc: { zh: '超值午餐优惠', en: 'Value lunch deal' } },
      { icon: '📅', title: { zh: '在线预约', en: 'Reservation' }, desc: { zh: '便捷订座', en: 'Easy booking' } }
    ],
    thumbnail: '/images/portfolio/restaurant-1.jpg',
    images: [
      { url: '/images/portfolio/restaurant-1.jpg', caption: { zh: '传统首页', en: 'Traditional Homepage' } },
      { url: '/images/portfolio/chinese-food.jpg', caption: { zh: '分类菜单', en: 'Category Menu' } },
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '午市套餐', en: 'Lunch Special' } }
    ]
  },

  // 15. 律师事务所
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

  // 16. 旅行社
  {
    id: 17,
    slug: 'dragon-travel',
    category: 'professional',
    title: { zh: '龙腾旅行社', en: 'Dragon Travel Agency Website' },
    industry: { zh: '旅游服务', en: 'Travel Services' },
    year: '2024',
    color: '#0ea5e9',
    shortDesc: { zh: 'IATA认证旅行社，机票签证旅游一站式服务', en: 'IATA certified travel agency for flights, visas and tours' },
    client: { zh: 'Dragon Travel 旅行社', en: 'Dragon Travel Agency' },
    description: {
      zh: '为米兰华人旅行社打造的现代官网。IATA认证，提供中欧往返机票、签证代办、精品旅游套餐等一站式服务，连接中国与意大利20年。',
      en: 'A modern website for a Chinese travel agency in Milan. IATA certified, offering China-Europe flights, visa services, and premium tour packages, connecting China and Italy for 20 years.'
    },
    challenge: {
      zh: '如何展示多元化的旅游服务？需要清晰的航线展示、签证服务说明、旅游套餐介绍，并建立专业信任。',
      en: 'How to showcase diverse travel services? Need clear flight routes, visa service info, tour packages, and establish professional trust.'
    },
    solution: {
      zh: '采用天蓝+橙色活力配色，Tab切换展示三大服务，热门航线卡片，精品旅游套餐，签证服务流程，IATA认证标志。',
      en: 'Sky blue + orange vibrant colors, tab navigation for 3 main services, hot route cards, premium tour packages, visa process, IATA certification badge.'
    },
    results: [
      { value: '20年', label: { zh: '行业经验', en: 'Experience' } },
      { value: '50000+', label: { zh: '服务旅客', en: 'Travelers Served' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站航线和套餐展示清晰，客户自己就能查价格。',
        en: 'Clear flight routes and packages display. Clients can check prices themselves.'
      },
      author: { zh: '龙经理', en: 'Manager Long' },
      role: { zh: '总经理', en: 'General Manager' }
    },
    technologies: ['React', 'Tab Navigation', 'Card Layout'],
    demoUrl: '/demo/dragon-travel',
    features: [
      { icon: '✈️', title: { zh: '机票预订', en: 'Flight Booking' }, desc: { zh: '中欧热门航线', en: 'China-Europe routes' } },
      { icon: '📋', title: { zh: '签证服务', en: 'Visa Services' }, desc: { zh: '中国/申根签证', en: 'China/Schengen visas' } },
      { icon: '🌏', title: { zh: '旅游套餐', en: 'Tour Packages' }, desc: { zh: '意大利/中国游', en: 'Italy/China tours' } }
    ],
    thumbnail: '/images/portfolio/travel-1.jpg',
    images: [
      { url: '/images/portfolio/travel-1.jpg', caption: { zh: '连接中国与意大利', en: 'Connecting China and Italy' } }
    ]
  },

  // 17. 理发店
  {
    id: 18,
    slug: 'milan-hair',
    category: 'beauty',
    title: { zh: '米兰发艺', en: 'Milan Hair Studio Website' },
    industry: { zh: '美发行业', en: 'Hair Salon' },
    year: '2024',
    color: '#b76e79',
    shortDesc: { zh: '东方美学与意式风尚的时尚美发沙龙', en: 'Fashion hair salon blending Eastern aesthetics and Italian style' },
    client: { zh: 'Milan Hair Studio', en: 'Milan Hair Studio' },
    description: {
      zh: '为米兰华人美发沙龙打造的时尚官网。融合东方发艺与意式设计，提供男女剪发、烫染、护理等全方位服务，在线预约便捷高效。',
      en: 'A fashionable website for a Chinese hair salon in Milan. Blending Eastern hairstyling with Italian design, offering full services for men and women including cuts, perms, coloring, and treatments with convenient online booking.'
    },
    challenge: {
      zh: '如何展示美发沙龙的时尚形象？需要清晰的服务价目表、作品展示、发型师介绍和在线预约功能。',
      en: 'How to showcase the salon\'s fashionable image? Need clear service price list, portfolio gallery, stylist profiles, and online booking.'
    },
    solution: {
      zh: '采用玫瑰金+黑色高端配色，分类服务价目表，作品画廊展示，发型师团队介绍，客户评价展示，在线预约表单。',
      en: 'Rose gold + black premium colors, categorized service price list, portfolio gallery, stylist team profiles, customer reviews, online booking form.'
    },
    results: [
      { value: '4.8/5', label: { zh: '客户评分', en: 'Rating' } },
      { value: '15+', label: { zh: '服务项目', en: 'Services' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站展示效果很好，客户可以直接在线预约时间。',
        en: 'Great website showcase. Clients can book appointments online directly.'
      },
      author: { zh: '林发型师', en: 'Stylist Lin' },
      role: { zh: '创始人', en: 'Founder' }
    },
    technologies: ['React', 'CSS Grid', 'Form Validation'],
    demoUrl: '/demo/milan-hair',
    features: [
      { icon: '✂️', title: { zh: '服务价目', en: 'Price List' }, desc: { zh: '男女分类服务', en: 'Men & women services' } },
      { icon: '🖼️', title: { zh: '作品展示', en: 'Gallery' }, desc: { zh: '发型作品集', en: 'Hairstyle portfolio' } },
      { icon: '📅', title: { zh: '在线预约', en: 'Online Booking' }, desc: { zh: '便捷预约', en: 'Easy booking' } }
    ],
    thumbnail: '/images/portfolio/beauty-1.jpg',
    images: [
      { url: '/images/portfolio/beauty-1.jpg', caption: { zh: '时尚美发服务', en: 'Fashion Hair Services' } }
    ]
  },

  // 18. 中医诊所
  {
    id: 19,
    slug: 'yikang-tcm',
    category: 'beauty',
    title: { zh: '怡康中医诊所', en: 'Yikang TCM Center Website' },
    industry: { zh: '中医养生', en: 'Traditional Chinese Medicine' },
    year: '2024',
    color: '#8B4513',
    shortDesc: { zh: '传承千年中医智慧，守护您的健康', en: 'Ancient TCM wisdom for modern health and wellness' },
    client: { zh: 'Yikang TCM Center', en: 'Yikang TCM Center' },
    description: {
      zh: '为米兰中医诊所打造的温馨专业官网。提供针灸、拔罐、推拿、中药调理等传统中医服务，由资深中医师主诊，服务华人及意大利客户。',
      en: 'A warm and professional website for a TCM clinic in Milan. Offering acupuncture, cupping, Tuina massage, and Chinese herbal medicine by senior TCM practitioners, serving Chinese and Italian clients.'
    },
    challenge: {
      zh: '如何传达中医的传统文化和专业性？需要展示治疗项目、适应症、医师资质，并提供便捷预约。',
      en: 'How to convey TCM\'s traditional culture and professionalism? Need to display treatments, conditions, doctor credentials, and provide easy booking.'
    },
    solution: {
      zh: '采用中医棕+翡翠绿自然配色，阐述中医理念，6大治疗项目卡片，适应症网格展示，医师团队介绍，患者评价，在线预约表单。',
      en: 'TCM brown + jade green natural colors, TCM philosophy explanation, 6 treatment cards, conditions grid, doctor profiles, patient testimonials, online booking form.'
    },
    results: [
      { value: '25年', label: { zh: '医师经验', en: 'Doctor Experience' } },
      { value: '6项', label: { zh: '治疗项目', en: 'Treatments' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    testimonial: {
      quote: {
        zh: '网站帮助意大利客户了解中医，预约也更方便了。',
        en: 'Website helps Italian clients understand TCM. Booking is also more convenient.'
      },
      author: { zh: '张医师', en: 'Dr. Zhang' },
      role: { zh: '主任医师', en: 'Director' }
    },
    technologies: ['React', 'CSS Variables', 'Form Validation'],
    demoUrl: '/demo/yikang-tcm',
    features: [
      { icon: '🏥', title: { zh: '治疗项目', en: 'Treatments' }, desc: { zh: '针灸/拔罐/推拿/中药', en: 'Acupuncture/Cupping/Tuina/Herbs' } },
      { icon: '👨‍⚕️', title: { zh: '医师团队', en: 'Doctors' }, desc: { zh: '资深中医师', en: 'Senior TCM practitioners' } },
      { icon: '📅', title: { zh: '在线预约', en: 'Online Booking' }, desc: { zh: '便捷预约', en: 'Easy booking' } }
    ],
    thumbnail: '/images/portfolio/tcm-1.jpg',
    images: [
      { url: '/images/portfolio/tcm-1.jpg', caption: { zh: '传统中医诊疗', en: 'Traditional Chinese Medicine' } }
    ]
  },

  // 19. CloudTask SaaS产品
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

  // 20. LingoBridge 语言学校
  {
    id: 21,
    slug: 'lingo-bridge',
    category: 'education',
    title: { zh: 'LingoBridge 语言学校', en: 'LingoBridge Language School' },
    industry: { zh: '教育培训', en: 'Education' },
    year: '2024',
    color: '#f59e0b',
    shortDesc: { zh: '专业中意双语教学语言学校', en: 'Professional Chinese-Italian bilingual language school' },
    client: { zh: 'LingoBridge 学校', en: 'LingoBridge School' },
    description: {
      zh: '为语言培训学校打造的现代官网。提供中文、意大利语、商务语言、少儿课程等多元化教学服务，展示教师团队、课程体系和学员评价。',
      en: 'A modern website for a language school. Offering Chinese, Italian, business language, and kids programs with teacher profiles, curriculum system, and student reviews.'
    },
    challenge: { zh: '如何展示语言学校的专业教学实力？', en: 'How to showcase language school teaching expertise?' },
    solution: { zh: '温馨友好的配色，课程分类卡片，教师团队展示，教学方法说明，课程时间表，学员testimonials。', en: 'Warm friendly colors, course category cards, teacher profiles, methodology explanation, schedule, testimonials.' },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '4类课程', label: { zh: '课程体系', en: 'Course Types' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'Education Design', 'Card Layout'],
    demoUrl: '/demo/lingo-bridge',
    features: [
      { icon: '📚', title: { zh: '课程展示', en: 'Courses' }, desc: { zh: '多语种课程', en: 'Multi-language courses' } },
      { icon: '👩‍🏫', title: { zh: '教师团队', en: 'Teachers' }, desc: { zh: '专业师资', en: 'Professional faculty' } },
      { icon: '📅', title: { zh: '课程安排', en: 'Schedule' }, desc: { zh: '灵活时间', en: 'Flexible timing' } }
    ],
    thumbnail: '/images/portfolio/education-1.jpg',
    images: [
      { url: '/images/portfolio/education-1.jpg', caption: { zh: '学校首页', en: 'School Homepage' } },
      { url: '/images/portfolio/finance-1.jpg', caption: { zh: '课程展示', en: 'Courses Display' } },
      { url: '/images/portfolio/beauty-1.jpg', caption: { zh: '教师团队', en: 'Teacher Team' } }
    ]
  },

  // 21. VitaCare 家庭诊所
  {
    id: 22,
    slug: 'vita-care',
    category: 'healthcare',
    title: { zh: 'VitaCare 家庭诊所', en: 'VitaCare Family Clinic' },
    industry: { zh: '医疗健康', en: 'Healthcare' },
    year: '2024',
    color: '#10b981',
    shortDesc: { zh: '专业家庭医疗服务诊所', en: 'Professional family healthcare clinic' },
    client: { zh: 'VitaCare 诊所', en: 'VitaCare Clinic' },
    description: {
      zh: '为家庭诊所打造的专业医疗网站。提供全科医疗、儿科、妇科、中医等综合服务，展示医生团队、营业时间、保险信息和在线预约功能。',
      en: 'A professional healthcare website for a family clinic. Offering general medicine, pediatrics, gynecology, TCM with doctor profiles, hours, insurance info, and online booking.'
    },
    challenge: { zh: '如何建立医疗诊所的专业信任感？', en: 'How to establish professional trust for a medical clinic?' },
    solution: { zh: '柔和清新的医疗配色，服务项目展示，医生资质介绍，营业时间和位置信息，在线预约表单，保险说明。', en: 'Soft calming healthcare colors, service display, doctor credentials, hours and location, online booking form, insurance info.' },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '6科室', label: { zh: '医疗服务', en: 'Services' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'Healthcare Design', 'Booking Form'],
    demoUrl: '/demo/vita-care',
    features: [
      { icon: '🏥', title: { zh: '医疗服务', en: 'Services' }, desc: { zh: '综合医疗', en: 'Comprehensive care' } },
      { icon: '👨‍⚕️', title: { zh: '医生团队', en: 'Doctors' }, desc: { zh: '专业资质', en: 'Professional credentials' } },
      { icon: '📅', title: { zh: '在线预约', en: 'Booking' }, desc: { zh: '便捷预约', en: 'Easy appointment' } }
    ],
    thumbnail: '/images/portfolio/healthcare-1.jpg',
    images: [
      { url: '/images/portfolio/healthcare-1.jpg', caption: { zh: '诊所首页', en: 'Clinic Homepage' } },
      { url: '/images/portfolio/spa-1.jpg', caption: { zh: '医疗服务', en: 'Medical Services' } },
      { url: '/images/portfolio/tcm-1.jpg', caption: { zh: '医生团队', en: 'Doctor Team' } }
    ]
  },

  // 22. Ocean Bloom 植物基海鲜品牌
  {
    id: 23,
    slug: 'ocean-bloom',
    category: 'restaurant',
    title: { zh: 'Ocean Bloom 植物基海鲜', en: 'Ocean Bloom Plant-Based Seafood' },
    industry: { zh: '食品行业', en: 'Food Industry' },
    year: '2024',
    color: '#002922',
    shortDesc: { zh: '创新植物基海鲜品牌官网', en: 'Innovative plant-based seafood brand website' },
    client: { zh: 'Ocean Bloom 食品', en: 'Ocean Bloom Foods' },
    description: {
      zh: '为创新植物基海鲜品牌打造的现代官网。展示环保理念、产品系列、食谱灵感和餐饮服务合作信息，采用深海绿和沙滩色的独特配色方案。',
      en: 'A modern website for an innovative plant-based seafood brand. Showcasing eco-friendly philosophy, product line, recipe inspiration, and food service partnerships with unique deepsea green and shoreline color scheme.'
    },
    challenge: { zh: '如何传达植物基海鲜的创新理念和环保价值？', en: 'How to convey the innovation and environmental value of plant-based seafood?' },
    solution: { zh: '深海绿+沙滩色配色，产品轮播展示，食谱灵感区，海洋保护数据可视化，B2B餐饮合作表单。', en: 'Deepsea green + shoreline colors, product carousel, recipe inspiration section, ocean conservation data visualization, B2B food service form.' },
    results: [
      { value: '5周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '10+', label: { zh: '产品展示', en: 'Products' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'CSS3', 'Modern Animation'],
    demoUrl: '/demo/ocean-bloom',
    features: [
      { icon: '🌊', title: { zh: '环保理念', en: 'Eco Mission' }, desc: { zh: '海洋保护数据', en: 'Ocean protection data' } },
      { icon: '🦐', title: { zh: '产品展示', en: 'Products' }, desc: { zh: '植物基海鲜系列', en: 'Plant-based seafood line' } },
      { icon: '👨‍🍳', title: { zh: '食谱灵感', en: 'Recipes' }, desc: { zh: '创意烹饪方案', en: 'Creative cooking ideas' } }
    ],
    thumbnail: '/images/portfolio/restaurant-1.jpg',
    images: [
      { url: '/images/portfolio/restaurant-1.jpg', caption: { zh: '品牌首页', en: 'Brand Homepage' } },
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '产品展示', en: 'Product Display' } },
      { url: '/images/portfolio/sushi-2.jpg', caption: { zh: '食谱页面', en: 'Recipe Page' } }
    ]
  },

  // 24. 禅庵 Omakase - 高端寿司餐厅
  {
    id: 24,
    slug: 'omakase-zen',
    category: 'restaurant',
    title: { zh: '禅庵 Omakase 高端寿司', en: 'Omakase Zen Premium Sushi' },
    industry: { zh: '高端餐饮', en: 'Fine Dining' },
    year: '2024',
    color: '#c9a962',
    shortDesc: { zh: '米兰顶级日本料理，匠心独运的omakase体验', en: 'Milan\'s finest Japanese cuisine, artisan omakase experience' },
    client: { zh: '禅庵 Omakase Zen', en: 'Omakase Zen' },
    description: {
      zh: '为米兰顶级日本料理餐厅打造的高端品牌网站。禅庵仅设八个席位，主厨田中正道以三十年精湛技艺，为客人呈现最纯粹的omakase体验。网站需要传达出极致的匠心精神与日式美学。',
      en: 'A premium brand website for Milan\'s top Japanese restaurant. With only eight seats, Chef Masamichi Tanaka brings thirty years of expertise to deliver the purest omakase experience. The website needed to convey ultimate craftsmanship and Japanese aesthetics.'
    },
    challenge: {
      zh: '如何通过网站设计传达出高端日料的精致与禅意？需要一个既能展示米其林级别的品质，又能提供优雅预订体验的网站。',
      en: 'How to convey the refinement and Zen spirit of high-end Japanese cuisine through website design? A website was needed that could showcase Michelin-level quality while providing an elegant reservation experience.'
    },
    solution: { zh: '采用金、黑、米白奢华配色，日式书法字体，流畅滚动动画，全屏视觉呈现，优雅的预约表单设计。', en: 'Luxurious gold, black, and cream color palette, Japanese calligraphy typography, smooth scroll animations, full-screen visual presentation, elegant reservation form design.' },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '8席', label: { zh: '限量席位', en: 'Exclusive Seats' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'CSS3', 'Premium Animation'],
    demoUrl: '/demo/omakase-zen',
    features: [
      { icon: '🍣', title: { zh: '极致视觉', en: 'Stunning Visuals' }, desc: { zh: '高端大气设计', en: 'Premium elegant design' } },
      { icon: '👨‍🍳', title: { zh: '主厨介绍', en: 'Chef Profile' }, desc: { zh: '米其林大师', en: 'Michelin master' } },
      { icon: '📅', title: { zh: '优雅预约', en: 'Elegant Booking' }, desc: { zh: '限量席位预订', en: 'Limited seat reservation' } }
    ],
    thumbnail: '/images/portfolio/sushi-1.jpg',
    images: [
      { url: '/images/portfolio/sushi-1.jpg', caption: { zh: '品牌首页', en: 'Brand Homepage' } },
      { url: '/images/portfolio/sushi-2.jpg', caption: { zh: '菜品展示', en: 'Dish Showcase' } },
      { url: '/images/portfolio/restaurant-1.jpg', caption: { zh: '预约页面', en: 'Reservation Page' } }
    ]
  },

  // 25. 龙庭 Dragon Court - 高端中餐厅
  {
    id: 25,
    slug: 'dragon-court',
    category: 'restaurant',
    title: { zh: '龙庭 · 皇家御膳', en: 'Dragon Court Imperial Cuisine' },
    industry: { zh: '高端中餐', en: 'Fine Chinese Dining' },
    year: '2024',
    color: '#d4af37',
    shortDesc: { zh: '米兰顶级中华料理，传承百年宫廷御膳精髓', en: 'Milan\'s premier Chinese restaurant, inheriting century-old imperial cuisine' },
    client: { zh: '龙庭 Dragon Court', en: 'Dragon Court Milano' },
    description: {
      zh: '为米兰顶级中餐厅「龙庭」打造的奢华品牌网站。龙庭传承清朝御膳房六代皇家御厨秘方，将千年宫廷料理精髓与现代创意完美融合。网站需要展现皇家气派、匠心传承与极致美食体验。',
      en: 'A luxurious brand website for Milan\'s premier Chinese restaurant "Dragon Court". Inheriting six generations of Qing Dynasty imperial kitchen recipes, Dragon Court perfectly blends thousand-year palace cuisine with modern creativity. The website needed to showcase royal grandeur, artisan heritage, and ultimate culinary experience.'
    },
    challenge: {
      zh: '如何通过网站设计传达出中华宫廷料理的皇家气派与匠心精神？需要一个既能彰显米其林级别的尊贵品质，又能提供优雅预订体验的高端网站。',
      en: 'How to convey the royal grandeur and artisan spirit of Chinese imperial cuisine through website design? A premium website was needed that could showcase Michelin-level prestige while providing an elegant reservation experience.'
    },
    solution: { zh: '采用金、深红、黑的皇家配色，中式书法元素，金色粒子特效，全屏视频展示，流畅滚动动画，优雅的预约系统设计。', en: 'Imperial gold, deep crimson, and black color palette, Chinese calligraphy elements, gold particle effects, full-screen video showcase, smooth scroll animations, elegant reservation system design.' },
    results: [
      { value: '4周', label: { zh: '开发周期', en: 'Development Time' } },
      { value: '★★★', label: { zh: '米其林评级', en: 'Michelin Stars' } },
      { value: '3语', label: { zh: '语言支持', en: 'Languages' } }
    ],
    technologies: ['React', 'CSS3', 'Canvas Animation', 'Video Background'],
    demoUrl: '/demo/dragon-court',
    features: [
      { icon: '🐉', title: { zh: '皇家视觉', en: 'Imperial Design' }, desc: { zh: '金色粒子特效', en: 'Gold particle effects' } },
      { icon: '👨‍🍳', title: { zh: '御厨传承', en: 'Master Chef' }, desc: { zh: '六代御膳传人', en: 'Six generations legacy' } },
      { icon: '🏮', title: { zh: '中式美学', en: 'Chinese Aesthetics' }, desc: { zh: '宫廷元素设计', en: 'Imperial elements' } },
      { icon: '📅', title: { zh: '尊享预约', en: 'VIP Reservation' }, desc: { zh: '高端预订体验', en: 'Premium booking' } }
    ],
    thumbnail: '/images/portfolio/restaurant-1.jpg',
    images: [
      { url: '/images/portfolio/restaurant-1.jpg', caption: { zh: '品牌首页', en: 'Brand Homepage' } },
      { url: '/images/portfolio/restaurant-2.jpg', caption: { zh: '御膳菜单', en: 'Imperial Menu' } },
      { url: '/images/portfolio/restaurant-3.jpg', caption: { zh: '主厨介绍', en: 'Chef Profile' } }
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
  { value: 'education', label: { zh: '教育培训', en: 'Education' } },
  { value: 'healthcare', label: { zh: '医疗健康', en: 'Healthcare' } }
]
