export const translations = {
  it: {
    nav: { locations: 'Ristoranti', menu: 'Menu', about: 'Chi Siamo', delivery: 'Delivery', order: 'ORDINA' },
    hero: { subtitle: 'Sushi moderno e audace nel cuore d\'Italia', order: 'ORDINA ORA', book: 'PRENOTA' },
    locations: { title: 'I Nostri Ristoranti', subtitle: '9 location in Italia e Spagna', book: 'Prenota', order: 'Ordina' },
    menu: {
      title: 'Il Menu', subtitle: 'Sapori audaci, qualità premium',
      categories: { signature: 'Signature', rolls: 'Rolls', sashimi: 'Sashimi', hot: 'Caldi', drinks: 'Drinks' },
      popular: 'POPULAR', viewAll: 'VEDI MENU COMPLETO'
    },
    about: { title: 'NO SUSHI NO LIFE', text: 'Dal 2009, Sushi Moto porta il sushi contemporaneo nelle città più dinamiche. Ingredienti premium, creatività audace, atmosfera unica.', restaurants: 'Ristoranti', years: 'Anni', customers: 'Clienti' },
    delivery: { title: 'Sushi a Casa Tua', text: 'Ordina online e ricevi il tuo sushi preferito in 30 minuti.', bike: 'Consegna veloce', pickup: 'Ritiro in negozio', orderNow: 'ORDINA DELIVERY' },
    footer: { tagline: 'Sushi moderno e audace', company: 'Azienda', careers: 'Lavora con noi', press: 'Press', help: 'Assistenza', contact: 'Contatti', faq: 'FAQ', allergens: 'Allergeni', follow: 'Seguici', rights: 'Tutti i diritti riservati.' }
  },
  en: {
    nav: { locations: 'Locations', menu: 'Menu', about: 'About', delivery: 'Delivery', order: 'ORDER' },
    hero: { subtitle: 'Bold modern sushi in the heart of Italy', order: 'ORDER NOW', book: 'BOOK TABLE' },
    locations: { title: 'Our Restaurants', subtitle: '9 locations across Italy and Spain', book: 'Book', order: 'Order' },
    menu: {
      title: 'The Menu', subtitle: 'Bold flavors, premium quality',
      categories: { signature: 'Signature', rolls: 'Rolls', sashimi: 'Sashimi', hot: 'Hot Dishes', drinks: 'Drinks' },
      popular: 'POPULAR', viewAll: 'VIEW FULL MENU'
    },
    about: { title: 'NO SUSHI NO LIFE', text: 'Since 2009, Sushi Moto brings contemporary sushi to the most dynamic cities. Premium ingredients, bold creativity, unique atmosphere.', restaurants: 'Restaurants', years: 'Years', customers: 'Customers' },
    delivery: { title: 'Sushi at Your Door', text: 'Order online and receive your favorite sushi in 30 minutes.', bike: 'Fast delivery', pickup: 'Store pickup', orderNow: 'ORDER DELIVERY' },
    footer: { tagline: 'Bold modern sushi', company: 'Company', careers: 'Careers', press: 'Press', help: 'Help', contact: 'Contact', faq: 'FAQ', allergens: 'Allergens', follow: 'Follow Us', rights: 'All rights reserved.' }
  },
  zh: {
    nav: { locations: '门店', menu: '菜单', about: '关于', delivery: '外送', order: '点餐' },
    hero: { subtitle: '意大利心脏地带的大胆现代寿司', order: '立即点餐', book: '预订座位' },
    locations: { title: '我们的餐厅', subtitle: '意大利和西班牙9家门店', book: '预订', order: '点餐' },
    menu: {
      title: '菜单', subtitle: '大胆风味，顶级品质',
      categories: { signature: '招牌', rolls: '卷物', sashimi: '刺身', hot: '热菜', drinks: '饮品' },
      popular: '人气', viewAll: '查看完整菜单'
    },
    about: { title: 'NO SUSHI NO LIFE', text: '自2009年以来，Sushi Moto将现代寿司带到最具活力的城市。顶级食材，大胆创意，独特氛围。', restaurants: '家餐厅', years: '年', customers: '位顾客' },
    delivery: { title: '寿司送到家', text: '在线点餐，30分钟送达。', bike: '快速配送', pickup: '到店自取', orderNow: '点外卖' },
    footer: { tagline: '大胆现代寿司', company: '公司', careers: '招聘', press: '媒体', help: '帮助', contact: '联系', faq: '常见问题', allergens: '过敏原', follow: '关注我们', rights: '版权所有' }
  }
}

export const locations = [
  { name: 'Sushi Moto Brera', city: 'MILANO', address: 'Via Brera 28', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400' },
  { name: 'Sushi Moto Navigli', city: 'MILANO', address: 'Ripa di Porta Ticinese 55', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400' },
  { name: 'Sushi Moto Centro', city: 'BARCELONA', address: 'Plaça Catalunya 15', image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400' },
  { name: 'Sushi Moto Born', city: 'BARCELONA', address: 'Carrer del Rec 45', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400' }
]

export const menuItems = [
  { id: 1, category: 'signature', name: { it: 'Dragon Roll Supreme', en: 'Dragon Roll Supreme', zh: '至尊龙卷' }, description: { it: 'Gambero tempura, anguilla, avocado, salsa speciale', en: 'Tempura shrimp, eel, avocado, special sauce', zh: '天妇罗虾、鳗鱼、牛油果、特制酱汁' }, price: 22, image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400', isPopular: true },
  { id: 2, category: 'signature', name: { it: 'Black Mamba Roll', en: 'Black Mamba Roll', zh: '黑曼巴卷' }, description: { it: 'Tonno piccante, riso nero, tartufo', en: 'Spicy tuna, black rice, truffle', zh: '辣金枪鱼、黑米、松露' }, price: 26, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400', isPopular: true },
  { id: 3, category: 'signature', name: { it: 'Moto Special', en: 'Moto Special', zh: 'Moto特选' }, description: { it: 'Salmone fiammeggiato, foie gras, yuzu', en: 'Torched salmon, foie gras, yuzu', zh: '炙烤三文鱼、鹅肝、柚子' }, price: 28, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400', isPopular: false },
  { id: 4, category: 'rolls', name: { it: 'California Classic', en: 'California Classic', zh: '经典加州卷' }, description: { it: 'Granchio, avocado, cetriolo', en: 'Crab, avocado, cucumber', zh: '蟹肉、牛油果、黄瓜' }, price: 14, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400', isPopular: false },
  { id: 5, category: 'rolls', name: { it: 'Spicy Salmon Roll', en: 'Spicy Salmon Roll', zh: '辣三文鱼卷' }, description: { it: 'Salmone piccante, cipollotto', en: 'Spicy salmon, scallion', zh: '辣三文鱼、葱花' }, price: 16, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400', isPopular: true },
  { id: 6, category: 'sashimi', name: { it: 'Sashimi Premium', en: 'Premium Sashimi', zh: '顶级刺身' }, description: { it: '15 fette miste premium', en: '15 premium mixed slices', zh: '15片顶级综合刺身' }, price: 36, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400', isPopular: true },
  { id: 7, category: 'sashimi', name: { it: 'Tartare di Tonno', en: 'Tuna Tartare', zh: '金枪鱼塔塔' }, description: { it: 'Tonno rosso, avocado, ponzu', en: 'Bluefin tuna, avocado, ponzu', zh: '蓝鳍金枪鱼、牛油果、柚子醋' }, price: 24, image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400', isPopular: false },
  { id: 8, category: 'hot', name: { it: 'Gyoza al Vapore', en: 'Steamed Gyoza', zh: '蒸饺' }, description: { it: '6 gyoza di maiale e verdure', en: '6 pork and vegetable gyoza', zh: '6个猪肉蔬菜煎饺' }, price: 10, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400', isPopular: false },
  { id: 9, category: 'hot', name: { it: 'Ramen Moto', en: 'Moto Ramen', zh: 'Moto拉面' }, description: { it: 'Brodo tonkotsu, chashu, uovo', en: 'Tonkotsu broth, chashu, egg', zh: '豚骨汤、叉烧、溏心蛋' }, price: 16, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400', isPopular: true },
  { id: 10, category: 'drinks', name: { it: 'Sake Selection', en: 'Sake Selection', zh: '清酒精选' }, description: { it: '3 sake premium degustazione', en: '3 premium sake tasting', zh: '3款顶级清酒品鉴' }, price: 18, image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400', isPopular: false },
  { id: 11, category: 'drinks', name: { it: 'Matcha Latte', en: 'Matcha Latte', zh: '抹茶拿铁' }, description: { it: 'Matcha premium con latte', en: 'Premium matcha with milk', zh: '顶级抹茶配牛奶' }, price: 5, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400', isPopular: false }
]
