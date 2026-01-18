// ==================== DRAGON COURT SITE DATA ====================

export const siteInfo = {
  name: { zh: '龙庭', en: 'DRAGON COURT', it: 'DRAGON COURT' },
  tagline: {
    zh: '皇家御膳 · 匠心传承',
    en: 'Imperial Cuisine · Timeless Tradition',
    it: 'Cucina Imperiale · Tradizione Senza Tempo'
  }
}

export const navItems = [
  { id: 'home', path: '', label: { zh: '首页', en: 'Home', it: 'Home' } },
  { id: 'about', path: 'about', label: { zh: '传承', en: 'Heritage', it: 'Eredità' } },
  { id: 'menu', path: 'menu', label: { zh: '菜单', en: 'Menu', it: 'Menu' } },
  { id: 'chef', path: 'chef', label: { zh: '主厨', en: 'Chef', it: 'Chef' } },
  { id: 'gallery', path: 'gallery', label: { zh: '空间', en: 'Gallery', it: 'Galleria' } },
  { id: 'reservation', path: 'reservation', label: { zh: '预约', en: 'Reserve', it: 'Prenota' } },
  { id: 'contact', path: 'contact', label: { zh: '联系', en: 'Contact', it: 'Contatto' } }
]

export const heroData = {
  video: 'https://videos.pexels.com/video-files/5765669/5765669-uhd_2560_1440_25fps.mp4',
  fallbackImage: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=1920',
  subtitle: {
    zh: '米兰顶级中华料理',
    en: 'Premium Chinese Cuisine in Milan',
    it: 'Alta Cucina Cinese a Milano'
  },
  text: {
    zh: '传承千年宫廷御膳精髓，融合现代创意，呈现极致中华美食体验',
    en: 'Inheriting the essence of thousand-year imperial cuisine, blending modern creativity',
    it: "Ereditando l'essenza della cucina imperiale millenaria, fondendo creatività moderna"
  }
}

export const statsData = [
  { number: '1888', label: { zh: '创立年份', en: 'Est. Year', it: 'Anno' } },
  { number: '50+', label: { zh: '特色佳肴', en: 'Signature Dishes', it: 'Piatti Firma' } },
  { number: '★★★', label: { zh: '米其林', en: 'Michelin', it: 'Michelin' } },
  { number: '御厨', label: { zh: '传承', en: 'Legacy', it: 'Eredità' } }
]

export const heritageData = {
  intro: {
    zh: '龙庭源自清朝御膳房，传承六代皇家御厨秘方。自1888年创立以来，我们始终坚持以最高标准呈现正宗宫廷料理，让每一位宾客品尝到真正的皇家盛宴。',
    en: 'Dragon Court originates from the Qing Dynasty imperial kitchen, inheriting six generations of royal chef secrets. Since 1888, we have always maintained the highest standards to present authentic palace cuisine.',
    it: 'Dragon Court ha origine dalla cucina imperiale della dinastia Qing, ereditando sei generazioni di segreti degli chef reali.'
  },
  milestones: [
    { year: '1888', title: { zh: '龙庭创立', en: 'Founded' }, desc: { zh: '御膳房传人陈德龙在北京创立龙庭', en: 'Chen Delong founded Dragon Court in Beijing' } },
    { year: '1920', title: { zh: '声名远扬', en: 'Fame Spreads' }, desc: { zh: '成为京城名流权贵的首选餐厅', en: 'Became the preferred restaurant for Beijing elite' } },
    { year: '1985', title: { zh: '欧洲首店', en: 'First in Europe' }, desc: { zh: '第四代传人在米兰开设欧洲首家分店', en: 'Fourth generation opened first European branch in Milan' } },
    { year: '2010', title: { zh: '米其林三星', en: 'Three Michelin Stars' }, desc: { zh: '获得意大利米其林指南三星评级', en: 'Awarded three Michelin stars in Italy' } },
    { year: '2024', title: { zh: '百年传承', en: 'Century Legacy' }, desc: { zh: '第六代传人继续弘扬御膳文化', en: 'Sixth generation continues the imperial legacy' } }
  ],
  values: [
    {
      icon: '龍',
      title: { zh: '皇家传承', en: 'Imperial Legacy', it: 'Eredità Imperiale' },
      desc: { zh: '源自清朝御膳房，传承六代皇家御厨秘方', en: 'From the Qing Dynasty imperial kitchen, six generations of royal chefs' },
      image: 'https://images.pexels.com/photos/6542774/pexels-photo-6542774.jpeg?auto=compress&w=800'
    },
    {
      icon: '鳳',
      title: { zh: '臻选食材', en: 'Premium Ingredients', it: 'Ingredienti Premium' },
      desc: { zh: '全球甄选顶级食材，每一口都是极致享受', en: 'Globally sourced finest ingredients, every bite is pure luxury' },
      image: 'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&w=800'
    },
    {
      icon: '藝',
      title: { zh: '匠心工艺', en: 'Artisan Craft', it: 'Arte Artigianale' },
      desc: { zh: '传统技艺与现代创意的完美融合', en: 'Perfect fusion of traditional techniques and modern creativity' },
      image: 'https://images.pexels.com/photos/3338521/pexels-photo-3338521.jpeg?auto=compress&w=800'
    }
  ]
}

export const menuCategories = [
  { id: 'signature', name: { zh: '招牌御膳', en: 'Signature Imperial', it: 'Imperiale Firma' } },
  { id: 'appetizer', name: { zh: '前菜凉菜', en: 'Appetizers', it: 'Antipasti' } },
  { id: 'soup', name: { zh: '汤品羹类', en: 'Soups', it: 'Zuppe' } },
  { id: 'seafood', name: { zh: '海鲜珍馐', en: 'Seafood', it: 'Frutti di Mare' } },
  { id: 'meat', name: { zh: '肉类佳肴', en: 'Meat', it: 'Carne' } },
  { id: 'vegetable', name: { zh: '时蔬素食', en: 'Vegetables', it: 'Verdure' } },
  { id: 'rice', name: { zh: '主食面饭', en: 'Rice & Noodles', it: 'Riso e Noodles' } },
  { id: 'dessert', name: { zh: '甜品点心', en: 'Desserts', it: 'Dolci' } }
]

export const menuItems = [
  // Signature
  { id: 1, category: 'signature', name: { zh: '龙凤呈祥', en: 'Dragon Phoenix Supreme' }, desc: { zh: '龙虾鲍鱼双拼，象征吉祥如意', en: 'Lobster & Abalone Duo, symbol of prosperity' }, price: 128, image: 'https://images.pexels.com/photos/5920744/pexels-photo-5920744.jpeg?auto=compress&w=600', featured: true },
  { id: 2, category: 'signature', name: { zh: '御膳烤鸭', en: 'Imperial Peking Duck' }, desc: { zh: '传统挂炉烤制，皮脆肉嫩', en: 'Traditional oven roasted, crispy skin' }, price: 88, image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&w=600', featured: true },
  { id: 3, category: 'signature', name: { zh: '金汤鱼翅', en: 'Golden Shark Fin Soup' }, desc: { zh: '顶级浓汤鱼翅，鲜美绝伦', en: 'Premium fin soup, exquisite flavor' }, price: 168, image: 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&w=600', featured: true },
  { id: 4, category: 'signature', name: { zh: '佛跳墙', en: 'Buddha Jumps Wall' }, desc: { zh: '闽南名菜，集山珍海味于一坛', en: 'Fujian delicacy, premium ingredients' }, price: 198, image: 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&w=600', featured: true },

  // Appetizers
  { id: 5, category: 'appetizer', name: { zh: '翡翠龙珠', en: 'Jade Dragon Pearls' }, desc: { zh: '鲜虾翡翠球，晶莹剔透', en: 'Jade prawn dumplings' }, price: 38, image: 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&w=600' },
  { id: 6, category: 'appetizer', name: { zh: '凤尾虾球', en: 'Phoenix Tail Prawns' }, desc: { zh: '金黄酥脆，鲜嫩可口', en: 'Golden crispy prawns' }, price: 42, image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=600' },
  { id: 7, category: 'appetizer', name: { zh: '御膳春卷', en: 'Imperial Spring Rolls' }, desc: { zh: '皇家秘制，酥脆金黄', en: 'Royal recipe, crispy golden' }, price: 28, image: 'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&w=600' },
  { id: 8, category: 'appetizer', name: { zh: '蜜汁叉烧', en: 'Honey BBQ Pork' }, desc: { zh: '广式蜜汁，肥瘦相间', en: 'Cantonese style honey roast' }, price: 32, image: 'https://images.pexels.com/photos/6542774/pexels-photo-6542774.jpeg?auto=compress&w=600' },

  // Soups
  { id: 9, category: 'soup', name: { zh: '御龙羹', en: 'Imperial Dragon Soup' }, desc: { zh: '清炖龙骨，滋补养生', en: 'Dragon bone broth, nourishing' }, price: 58, image: 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&w=600' },
  { id: 10, category: 'soup', name: { zh: '花胶炖鸡', en: 'Fish Maw Chicken Soup' }, desc: { zh: '名贵花胶，滋阴养颜', en: 'Premium fish maw, beautifying' }, price: 88, image: 'https://images.pexels.com/photos/3338521/pexels-photo-3338521.jpeg?auto=compress&w=600' },

  // Seafood
  { id: 11, category: 'seafood', name: { zh: '清蒸龙虾', en: 'Steamed Lobster' }, desc: { zh: '波士顿龙虾，蒜蓉清蒸', en: 'Boston lobster, garlic steamed' }, price: 158, image: 'https://images.pexels.com/photos/5920744/pexels-photo-5920744.jpeg?auto=compress&w=600' },
  { id: 12, category: 'seafood', name: { zh: '蒜蓉蒸扇贝', en: 'Garlic Steamed Scallops' }, desc: { zh: '新鲜扇贝，蒜蓉粉丝', en: 'Fresh scallops, garlic vermicelli' }, price: 68, image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=600' },
  { id: 13, category: 'seafood', name: { zh: '椒盐皮皮虾', en: 'Salt & Pepper Mantis Shrimp' }, desc: { zh: '外酥内嫩，椒盐调味', en: 'Crispy outside, tender inside' }, price: 78, image: 'https://images.pexels.com/photos/6646361/pexels-photo-6646361.jpeg?auto=compress&w=600' },

  // Meat
  { id: 14, category: 'meat', name: { zh: '宫廷糖醋', en: 'Palace Sweet & Sour' }, desc: { zh: '御膳糖醋里脊，酸甜适口', en: 'Imperial pork tenderloin' }, price: 42, image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=600' },
  { id: 15, category: 'meat', name: { zh: '东坡肉', en: 'Dongpo Pork' }, desc: { zh: '肥而不腻，入口即化', en: 'Braised pork belly, melt in mouth' }, price: 48, image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&w=600' },
  { id: 16, category: 'meat', name: { zh: '蒙古牛肉', en: 'Mongolian Beef' }, desc: { zh: '嫩滑牛肉，香辣可口', en: 'Tender beef, spicy and savory' }, price: 52, image: 'https://images.pexels.com/photos/6542774/pexels-photo-6542774.jpeg?auto=compress&w=600' },

  // Vegetables
  { id: 17, category: 'vegetable', name: { zh: '麻婆豆腐', en: 'Mapo Tofu Royale' }, desc: { zh: '秘制川味豆腐，麻辣鲜香', en: 'Secret Sichuan recipe' }, price: 28, image: 'https://images.pexels.com/photos/6646361/pexels-photo-6646361.jpeg?auto=compress&w=600' },
  { id: 18, category: 'vegetable', name: { zh: '蒜蓉时蔬', en: 'Garlic Seasonal Greens' }, desc: { zh: '新鲜时蔬，蒜香四溢', en: 'Fresh seasonal vegetables' }, price: 22, image: 'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&w=600' },

  // Rice & Noodles
  { id: 19, category: 'rice', name: { zh: '扬州炒饭', en: 'Yangzhou Fried Rice' }, desc: { zh: '经典扬州风味，粒粒分明', en: 'Classic Yangzhou style' }, price: 26, image: 'https://images.pexels.com/photos/3338521/pexels-photo-3338521.jpeg?auto=compress&w=600' },
  { id: 20, category: 'rice', name: { zh: '龙庭炒面', en: 'Dragon Court Noodles' }, desc: { zh: '特制酱料，香气扑鼻', en: 'Special sauce, aromatic' }, price: 28, image: 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&w=600' },

  // Desserts
  { id: 21, category: 'dessert', name: { zh: '宫廷芝麻球', en: 'Imperial Sesame Balls' }, desc: { zh: '外酥内软，香甜可口', en: 'Crispy outside, soft inside' }, price: 18, image: 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&w=600' },
  { id: 22, category: 'dessert', name: { zh: '杏仁豆腐', en: 'Almond Tofu' }, desc: { zh: '清甜爽滑，消暑佳品', en: 'Sweet and smooth, refreshing' }, price: 16, image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=600' }
]

export const setMenus = [
  {
    id: 'imperial',
    name: { zh: '御膳套餐', en: 'Imperial Set', it: 'Menu Imperiale' },
    price: 188,
    desc: { zh: '八道精选佳肴', en: '8-Course Tasting', it: '8 Portate' },
    items: ['翡翠龙珠', '御龙羹', '龙凤呈祥', '御膳烤鸭', '清蒸龙虾', '东坡肉', '扬州炒饭', '宫廷芝麻球'],
    featured: true
  },
  {
    id: 'dragon',
    name: { zh: '龙庭套餐', en: 'Dragon Court Set', it: 'Menu Dragon Court' },
    price: 128,
    desc: { zh: '六道经典料理', en: '6-Course Classic', it: '6 Portate Classiche' },
    items: ['御膳春卷', '花胶炖鸡', '御膳烤鸭', '宫廷糖醋', '蒜蓉时蔬', '杏仁豆腐']
  },
  {
    id: 'business',
    name: { zh: '商务午餐', en: 'Business Lunch', it: 'Pranzo Business' },
    price: 48,
    desc: { zh: '三道精致午餐', en: '3-Course Lunch', it: '3 Portate Pranzo' },
    items: ['例汤', '主菜任选', '甜品']
  }
]

export const chefData = {
  name: { zh: '陈龙', en: 'Chen Long', it: 'Chen Long' },
  title: { zh: '行政总厨 · 御膳第六代传人', en: 'Executive Chef · 6th Generation Imperial Cuisine Master', it: 'Chef Esecutivo · Maestro Imperiale 6ª Generazione' },
  image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&w=800',
  quote: {
    zh: '每一道菜，都是一个关于传承与创新的故事。我们不仅仅是在烹饪，更是在传承一种文化。',
    en: 'Every dish tells a story of heritage and innovation. We are not just cooking, we are preserving a culture.',
    it: 'Ogni piatto racconta una storia di eredità e innovazione.'
  },
  bio: {
    zh: '陈龙师傅出身御膳世家，自幼跟随祖父学习宫廷料理，是龙庭第六代传人。他曾在北京、上海、香港等地的顶级中餐厅磨练技艺，后赴法国蓝带厨艺学院深造，将西方烹饪技法与中华传统料理完美融合。2010年带领龙庭米兰店获得米其林三星评级，成为欧洲首家获此殊荣的中餐厅。',
    en: 'Master Chen Long was born into an imperial cuisine family and learned palace cooking from his grandfather since childhood. He is the sixth generation inheritor of Dragon Court. He honed his skills at top Chinese restaurants in Beijing, Shanghai, and Hong Kong, then studied at Le Cordon Bleu in France, perfectly blending Western techniques with Chinese traditions.',
    it: 'Il Maestro Chen Long è nato in una famiglia di cucina imperiale e ha imparato la cucina di palazzo dal nonno fin dall\'infanzia.'
  },
  awards: [
    { year: '2010', title: { zh: '米其林三星', en: 'Michelin Three Stars', it: 'Tre Stelle Michelin' } },
    { year: '2015', title: { zh: '亚洲50最佳餐厅', en: 'Asia\'s 50 Best Restaurants', it: 'Asia\'s 50 Best' } },
    { year: '2018', title: { zh: '意大利美食大奖', en: 'Italian Gastronomy Award', it: 'Premio Gastronomia' } },
    { year: '2020', title: { zh: '世界华人厨师金奖', en: 'World Chinese Chef Gold', it: 'Oro Chef Cinese' } },
    { year: '2023', title: { zh: '终身成就奖', en: 'Lifetime Achievement', it: 'Premio alla Carriera' } }
  ],
  team: [
    { name: { zh: '王建国', en: 'Wang Jianguo' }, role: { zh: '副主厨', en: 'Sous Chef' }, specialty: { zh: '川菜', en: 'Sichuan Cuisine' }, image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&w=400' },
    { name: { zh: '李美玲', en: 'Li Meiling' }, role: { zh: '糕点主厨', en: 'Pastry Chef' }, specialty: { zh: '宫廷点心', en: 'Imperial Pastries' }, image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&w=400' },
    { name: { zh: '张伟', en: 'Zhang Wei' }, role: { zh: '海鲜主厨', en: 'Seafood Chef' }, specialty: { zh: '粤式海鲜', en: 'Cantonese Seafood' }, image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&w=400' }
  ]
}

export const galleryData = {
  categories: [
    { id: 'all', name: { zh: '全部', en: 'All', it: 'Tutto' } },
    { id: 'interior', name: { zh: '餐厅环境', en: 'Interior', it: 'Interni' } },
    { id: 'dishes', name: { zh: '美食佳肴', en: 'Dishes', it: 'Piatti' } },
    { id: 'events', name: { zh: '活动场景', en: 'Events', it: 'Eventi' } }
  ],
  images: [
    { id: 1, category: 'interior', url: 'https://images.pexels.com/photos/6542774/pexels-photo-6542774.jpeg?auto=compress&w=1200', title: { zh: '主餐厅', en: 'Main Dining Hall' } },
    { id: 2, category: 'interior', url: 'https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&w=1200', title: { zh: '贵宾包厢', en: 'VIP Private Room' } },
    { id: 3, category: 'interior', url: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&w=1200', title: { zh: '中式屏风', en: 'Chinese Screen' } },
    { id: 4, category: 'interior', url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&w=1200', title: { zh: '典雅装饰', en: 'Elegant Decor' } },
    { id: 5, category: 'dishes', url: 'https://images.pexels.com/photos/5920744/pexels-photo-5920744.jpeg?auto=compress&w=1200', title: { zh: '龙凤呈祥', en: 'Dragon Phoenix' } },
    { id: 6, category: 'dishes', url: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&w=1200', title: { zh: '御膳烤鸭', en: 'Peking Duck' } },
    { id: 7, category: 'dishes', url: 'https://images.pexels.com/photos/3338521/pexels-photo-3338521.jpeg?auto=compress&w=1200', title: { zh: '精致摆盘', en: 'Exquisite Plating' } },
    { id: 8, category: 'dishes', url: 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&w=1200', title: { zh: '翡翠龙珠', en: 'Jade Dumplings' } },
    { id: 9, category: 'events', url: 'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&w=1200', title: { zh: '宴会场景', en: 'Banquet Scene' } },
    { id: 10, category: 'events', url: 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&w=1200', title: { zh: '节日庆典', en: 'Festival Celebration' } },
    { id: 11, category: 'interior', url: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=1200', title: { zh: '用餐区域', en: 'Dining Area' } },
    { id: 12, category: 'dishes', url: 'https://images.pexels.com/photos/6646361/pexels-photo-6646361.jpeg?auto=compress&w=1200', title: { zh: '麻婆豆腐', en: 'Mapo Tofu' } }
  ]
}

export const contactInfo = {
  address: 'Via Monte Napoleone 8, 20121 Milano',
  phone: '+39 02 8888 8888',
  email: 'reserve@dragoncourt.it',
  hours: [
    { day: { zh: '周二至周五', en: 'Tue - Fri', it: 'Mar - Ven' }, time: '12:00-14:30 / 18:30-23:00', closed: false },
    { day: { zh: '周六', en: 'Saturday', it: 'Sabato' }, time: '12:00-15:00 / 18:00-23:30', closed: false },
    { day: { zh: '周日', en: 'Sunday', it: 'Domenica' }, time: '12:00-15:00 / 18:00-22:00', closed: false },
    { day: { zh: '周一', en: 'Monday', it: 'Lunedì' }, time: '', closed: true }
  ],
  social: [
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/dragoncourtmilano' },
    { name: 'Facebook', icon: '👥', url: 'https://facebook.com/dragoncourtmilano' },
    { name: 'WeChat', icon: '💬', url: '#wechat' }
  ],
  mapUrl: 'https://maps.google.com/?q=Via+Monte+Napoleone+8+Milano'
}

export const testimonials = [
  {
    id: 1,
    name: { zh: '马可·罗西', en: 'Marco Rossi' },
    role: { zh: '美食评论家', en: 'Food Critic' },
    text: { zh: '龙庭是我在欧洲吃过的最正宗的中华料理，每一道菜都充满了历史和文化的底蕴。', en: 'Dragon Court serves the most authentic Chinese cuisine I have ever had in Europe. Every dish is rich with history and cultural heritage.' },
    rating: 5
  },
  {
    id: 2,
    name: { zh: '索菲亚·比安奇', en: 'Sofia Bianchi' },
    role: { zh: '企业高管', en: 'Business Executive' },
    text: { zh: '完美的商务宴请场所，环境优雅，服务周到，菜品更是无可挑剔。', en: 'Perfect venue for business dinners. Elegant atmosphere, attentive service, and impeccable cuisine.' },
    rating: 5
  },
  {
    id: 3,
    name: { zh: '陈伟明', en: 'Chen Weiming' },
    role: { zh: '华人企业家', en: 'Chinese Entrepreneur' },
    text: { zh: '在异国他乡能品尝到如此地道的家乡味道，龙庭让我感受到了家的温暖。', en: 'Tasting such authentic hometown flavors abroad, Dragon Court makes me feel the warmth of home.' },
    rating: 5
  }
]
