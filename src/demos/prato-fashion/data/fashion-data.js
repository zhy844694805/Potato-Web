// Prato Fashion - Italian-Chinese Fashion Brand Data
// Trilingual: Italian (it), English (en), Chinese (zh)

export const translations = {
  it: {
    nav: { home: 'Home', collections: 'Collezioni', about: 'Chi Siamo', contact: 'Contatti' },
    hero: {
      tagline: 'Eleganza Italiana, Maestria Cinese',
      subtitle: 'Alta moda dal cuore di Prato',
      cta: 'Scopri la Collezione'
    },
    collections: {
      title: 'Le Nostre Collezioni',
      subtitle: 'Dove tradizione incontra innovazione',
      viewAll: 'Vedi Tutti'
    },
    about: {
      title: 'La Nostra Storia',
      text: 'Fondata nel 2015 a Prato, nel cuore del distretto tessile italiano, la nostra maison unisce la raffinata tradizione sartoriale italiana con l\'eccellenza manifatturiera cinese. Ogni capo racconta una storia di qualità, passione e attenzione ai dettagli.',
      craftsmanship: 'Artigianalità',
      quality: 'Qualità Premium',
      sustainable: 'Sostenibilità'
    },
    contact: {
      title: 'Contattaci',
      showroom: 'Showroom',
      email: 'Email',
      phone: 'Telefono',
      form: { name: 'Nome', email: 'Email', message: 'Messaggio', send: 'Invia' }
    },
    footer: { rights: '© 2024 Prato Fashion. Tutti i diritti riservati.' }
  },
  en: {
    nav: { home: 'Home', collections: 'Collections', about: 'About', contact: 'Contact' },
    hero: {
      tagline: 'Italian Elegance, Chinese Craftsmanship',
      subtitle: 'High fashion from the heart of Prato',
      cta: 'Discover Collection'
    },
    collections: {
      title: 'Our Collections',
      subtitle: 'Where tradition meets innovation',
      viewAll: 'View All'
    },
    about: {
      title: 'Our Story',
      text: 'Founded in 2015 in Prato, the heart of Italy\'s textile district, our maison combines refined Italian tailoring tradition with Chinese manufacturing excellence. Each piece tells a story of quality, passion, and attention to detail.',
      craftsmanship: 'Craftsmanship',
      quality: 'Premium Quality',
      sustainable: 'Sustainability'
    },
    contact: {
      title: 'Contact Us',
      showroom: 'Showroom',
      email: 'Email',
      phone: 'Phone',
      form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send' }
    },
    footer: { rights: '© 2024 Prato Fashion. All rights reserved.' }
  },
  zh: {
    nav: { home: '首页', collections: '系列', about: '关于', contact: '联系' },
    hero: {
      tagline: '意式优雅，中华匠心',
      subtitle: '来自普拉托的高级时装',
      cta: '探索系列'
    },
    collections: {
      title: '我们的系列',
      subtitle: '传统与创新的交汇',
      viewAll: '查看全部'
    },
    about: {
      title: '我们的故事',
      text: '2015年创立于普拉托——意大利纺织业的心脏地带，我们的品牌将意大利精致的裁剪传统与中国卓越的制造工艺相结合。每一件作品都诉说着品质、热情与匠心的故事。',
      craftsmanship: '匠人工艺',
      quality: '顶级品质',
      sustainable: '可持续发展'
    },
    contact: {
      title: '联系我们',
      showroom: '展厅',
      email: '邮箱',
      phone: '电话',
      form: { name: '姓名', email: '邮箱', message: '留言', send: '发送' }
    },
    footer: { rights: '© 2024 Prato Fashion. 版权所有。' }
  }
}

export const brandInfo = {
  name: 'Prato Fashion',
  address: { street: 'Via Pistoiese 128', city: 'Prato', postalCode: '59100', country: 'Italia' },
  phone: '+39 0574 123 456',
  email: 'info@pratofashion.it',
  social: { instagram: '#', facebook: '#', pinterest: '#' }
}

export const collections = [
  {
    id: 1,
    name: { it: 'Primavera Estate 2024', en: 'Spring Summer 2024', zh: '2024春夏系列' },
    desc: { it: 'Leggerezza e colori vibranti', en: 'Lightness and vibrant colors', zh: '轻盈与活力色彩' },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    tag: 'NEW'
  },
  {
    id: 2,
    name: { it: 'Autunno Inverno 2024', en: 'Autumn Winter 2024', zh: '2024秋冬系列' },
    desc: { it: 'Eleganza senza tempo', en: 'Timeless elegance', zh: '永恒优雅' },
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600',
    tag: null
  },
  {
    id: 3,
    name: { it: 'Seta & Cashmere', en: 'Silk & Cashmere', zh: '丝绸与羊绒' },
    desc: { it: 'Lusso naturale', en: 'Natural luxury', zh: '天然奢华' },
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600',
    tag: 'BESTSELLER'
  },
  {
    id: 4,
    name: { it: 'Accessori', en: 'Accessories', zh: '配饰系列' },
    desc: { it: 'Dettagli che fanno la differenza', en: 'Details that make the difference', zh: '细节成就不凡' },
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600',
    tag: null
  }
]

export const features = [
  { icon: '✂️', title: { it: 'Taglio Sartoriale', en: 'Tailored Cut', zh: '精裁工艺' } },
  { icon: '🧵', title: { it: 'Tessuti Pregiati', en: 'Premium Fabrics', zh: '优质面料' } },
  { icon: '🌿', title: { it: 'Moda Sostenibile', en: 'Sustainable Fashion', zh: '可持续时尚' } },
  { icon: '🏆', title: { it: 'Made in Italy', en: 'Made in Italy', zh: '意大利制造' } }
]

export const heroImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920'
