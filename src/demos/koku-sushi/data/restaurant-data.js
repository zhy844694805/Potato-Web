export const translations = {
  it: {
    nav: { reserve: 'Prenota', menu: 'Menu', experience: 'Esperienza', private: 'Eventi Privati', contact: 'Contatti' },
    hero: { subtitle: 'Alta cucina giapponese nel cuore di Milano', cta: 'PRENOTA UN TAVOLO' },
    intro: { title: 'L\'Arte del Sushi', text: 'Koku Sushi offre un\'esperienza culinaria unica dove la tradizione giapponese incontra l\'innovazione contemporanea. Ogni piatto è un\'opera d\'arte, preparata con ingredienti selezionati e maestria artigianale.' },
    menu: {
      title: 'Il Menu', subtitle: 'Selezione dello Chef',
      categories: { omakase: 'Omakase', sushi: 'Sushi', wagyu: 'Wagyu', sake: 'Sake' }
    },
    experience: { title: 'L\'Esperienza Koku', chef: 'Chef\'s Table', chefText: 'Un\'esperienza intima con vista sulla cucina', private: 'Sale Private', privateText: 'Per occasioni speciali e cene aziendali', wine: 'Cantina', wineText: 'Selezione curata di sake e vini pregiati' },
    reserve: { title: 'Prenota la Tua Esperienza', text: 'Per prenotazioni e richieste speciali', call: 'Chiamaci', email: 'Scrivici' },
    footer: { address: 'Via Monte Napoleone 8, Milano', hours: 'Mar-Dom 19:00-23:00', rights: 'Tutti i diritti riservati.' }
  },
  en: {
    nav: { reserve: 'Reserve', menu: 'Menu', experience: 'Experience', private: 'Private Events', contact: 'Contact' },
    hero: { subtitle: 'Fine Japanese cuisine in the heart of Milan', cta: 'RESERVE A TABLE' },
    intro: { title: 'The Art of Sushi', text: 'Koku Sushi offers a unique culinary experience where Japanese tradition meets contemporary innovation. Every dish is a work of art, prepared with selected ingredients and artisanal mastery.' },
    menu: {
      title: 'The Menu', subtitle: 'Chef\'s Selection',
      categories: { omakase: 'Omakase', sushi: 'Sushi', wagyu: 'Wagyu', sake: 'Sake' }
    },
    experience: { title: 'The Koku Experience', chef: 'Chef\'s Table', chefText: 'An intimate experience with kitchen view', private: 'Private Rooms', privateText: 'For special occasions and corporate dinners', wine: 'Cellar', wineText: 'Curated selection of sake and fine wines' },
    reserve: { title: 'Reserve Your Experience', text: 'For reservations and special requests', call: 'Call Us', email: 'Email Us' },
    footer: { address: 'Via Monte Napoleone 8, Milan', hours: 'Tue-Sun 7:00PM-11:00PM', rights: 'All rights reserved.' }
  },
  zh: {
    nav: { reserve: '预订', menu: '菜单', experience: '体验', private: '私人活动', contact: '联系' },
    hero: { subtitle: '米兰市中心的高级日本料理', cta: '预订座位' },
    intro: { title: '寿司艺术', text: 'Koku Sushi提供独特的美食体验，将日本传统与现代创新完美融合。每道菜都是一件艺术品，以精选食材和匠人技艺精心制作。' },
    menu: {
      title: '菜单', subtitle: '主厨精选',
      categories: { omakase: '主厨推荐', sushi: '寿司', wagyu: '和牛', sake: '清酒' }
    },
    experience: { title: 'Koku体验', chef: '主厨餐桌', chefText: '近距离观赏厨艺的私密体验', private: '私人包厢', privateText: '适合特殊场合和商务宴请', wine: '酒窖', wineText: '精选清酒与顶级葡萄酒' },
    reserve: { title: '预订您的体验', text: '预订及特殊需求请联系', call: '致电预订', email: '邮件咨询' },
    footer: { address: '米兰蒙特拿破仑街8号', hours: '周二至周日 19:00-23:00', rights: '版权所有' }
  }
}

export const menuItems = [
  { id: 1, category: 'omakase', name: { it: 'Omakase Classico', en: 'Classic Omakase', zh: '经典主厨推荐' }, description: { it: '12 portate selezionate dallo chef', en: '12 courses selected by the chef', zh: '主厨精选12道菜品' }, price: 150, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600' },
  { id: 2, category: 'omakase', name: { it: 'Omakase Premium', en: 'Premium Omakase', zh: '顶级主厨推荐' }, description: { it: '18 portate con ingredienti rari', en: '18 courses with rare ingredients', zh: '18道稀有食材菜品' }, price: 220, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600' },
  { id: 3, category: 'sushi', name: { it: 'Selezione Nigiri', en: 'Nigiri Selection', zh: '握寿司精选' }, description: { it: '10 pezzi di sushi premium', en: '10 pieces of premium sushi', zh: '10贯顶级寿司' }, price: 68, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600' },
  { id: 4, category: 'sushi', name: { it: 'Sashimi Imperiale', en: 'Imperial Sashimi', zh: '皇家刺身' }, description: { it: 'Selezione di 15 fette premium', en: 'Selection of 15 premium slices', zh: '15片顶级刺身精选' }, price: 78, image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600' },
  { id: 5, category: 'wagyu', name: { it: 'Wagyu A5 Tataki', en: 'A5 Wagyu Tataki', zh: 'A5和牛炙烤' }, description: { it: 'Wagyu giapponese leggermente scottato (100g)', en: 'Lightly seared Japanese wagyu (100g)', zh: '日本A5和牛轻炙(100g)' }, price: 85, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600' },
  { id: 6, category: 'wagyu', name: { it: 'Wagyu Yakiniku', en: 'Wagyu Yakiniku', zh: '和牛烧肉' }, description: { it: 'Wagyu grigliato al tavolo (150g)', en: 'Table-grilled wagyu (150g)', zh: '桌边烤制和牛(150g)' }, price: 95, image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600' },
  { id: 7, category: 'sake', name: { it: 'Dassai 23', en: 'Dassai 23', zh: '獭祭23' }, description: { it: 'Junmai Daiginjo premium (180ml)', en: 'Premium Junmai Daiginjo (180ml)', zh: '顶级纯米大吟酿(180ml)' }, price: 42, image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600' },
  { id: 8, category: 'sake', name: { it: 'Kubota Manju', en: 'Kubota Manju', zh: '久保田万寿' }, description: { it: 'Sake invecchiato, note fruttate (180ml)', en: 'Aged sake with fruity notes (180ml)', zh: '陈年清酒，果香馥郁(180ml)' }, price: 35, image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600' }
]
