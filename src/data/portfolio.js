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
    thumbnail: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=600&fit=crop',
    images: []
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
    thumbnail: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&h=600&fit=crop',
    images: []
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
    thumbnail: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop',
    images: []
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
    thumbnail: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=600&fit=crop',
    images: []
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
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200', caption: { zh: '专业会计服务', en: 'Professional Accounting Services' } }
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
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200', caption: { zh: '现代装修案例', en: 'Modern Renovation Project' } }
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
    thumbnail: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&h=600&fit=crop',
    images: [
      { url: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200', caption: { zh: '米兰房产', en: 'Milan Real Estate' } }
    ]
  },

  // 12. 奶茶店
  {
    id: 12,
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
    thumbnail: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&h=600&fit=crop',
    images: []
  },

  // 13. 中餐馆
  {
    id: 13,
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
    thumbnail: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
    images: []
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
  { value: 'miniprogram', label: { zh: '小程序', en: 'Mini Program' } }
]
