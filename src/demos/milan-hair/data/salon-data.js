// Milan Hair Studio - Hair Salon Data
// Trilingual: Italian (it), English (en), Chinese (zh)

export const translations = {
  it: {
    nav: { home: 'Home', services: 'Servizi', gallery: 'Galleria', team: 'Team', booking: 'Prenota' },
    hero: {
      tagline: 'Stile Orientale, Eleganza Italiana',
      subtitle: 'Esperti in tagli asiatici e colorazioni moderne',
      cta: 'Prenota Ora'
    },
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Trattamenti professionali per ogni esigenza',
      men: 'Uomo',
      women: 'Donna',
      treatment: 'Trattamenti'
    },
    gallery: {
      title: 'Le Nostre Creazioni',
      subtitle: 'Guarda i nostri lavori più recenti'
    },
    team: {
      title: 'Il Nostro Team',
      subtitle: 'Stilisti professionisti al vostro servizio'
    },
    reviews: {
      title: 'Recensioni Clienti',
      subtitle: 'Cosa dicono di noi'
    },
    booking: {
      title: 'Prenota Appuntamento',
      subtitle: 'Scegli il servizio, lo stilista e l\'orario',
      form: {
        service: 'Servizio',
        stylist: 'Stilista',
        date: 'Data',
        time: 'Orario',
        name: 'Nome',
        phone: 'Telefono',
        notes: 'Note',
        submit: 'Conferma Prenotazione',
        success: 'Prenotazione confermata! Ti aspettiamo.'
      }
    },
    contact: {
      address: 'Indirizzo',
      hours: 'Orari',
      phone: 'Telefono'
    },
    footer: { rights: '© 2024 Milan Hair Studio. Tutti i diritti riservati.' }
  },
  en: {
    nav: { home: 'Home', services: 'Services', gallery: 'Gallery', team: 'Team', booking: 'Book' },
    hero: {
      tagline: 'Oriental Style, Italian Elegance',
      subtitle: 'Experts in Asian cuts and modern coloring',
      cta: 'Book Now'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional treatments for every need',
      men: 'Men',
      women: 'Women',
      treatment: 'Treatments'
    },
    gallery: {
      title: 'Our Creations',
      subtitle: 'See our latest work'
    },
    team: {
      title: 'Our Team',
      subtitle: 'Professional stylists at your service'
    },
    reviews: {
      title: 'Customer Reviews',
      subtitle: 'What they say about us'
    },
    booking: {
      title: 'Book Appointment',
      subtitle: 'Choose service, stylist and time',
      form: {
        service: 'Service',
        stylist: 'Stylist',
        date: 'Date',
        time: 'Time',
        name: 'Name',
        phone: 'Phone',
        notes: 'Notes',
        submit: 'Confirm Booking',
        success: 'Booking confirmed! We look forward to seeing you.'
      }
    },
    contact: {
      address: 'Address',
      hours: 'Hours',
      phone: 'Phone'
    },
    footer: { rights: '© 2024 Milan Hair Studio. All rights reserved.' }
  },
  zh: {
    nav: { home: '首页', services: '服务', gallery: '作品', team: '团队', booking: '预约' },
    hero: {
      tagline: '东方美学，意式风尚',
      subtitle: '亚洲发型专家，现代染发技术',
      cta: '立即预约'
    },
    services: {
      title: '服务项目',
      subtitle: '满足您各种美发需求',
      men: '男士',
      women: '女士',
      treatment: '护理'
    },
    gallery: {
      title: '作品展示',
      subtitle: '欣赏我们的最新作品'
    },
    team: {
      title: '发型师团队',
      subtitle: '专业发型师为您服务'
    },
    reviews: {
      title: '客户评价',
      subtitle: '听听顾客怎么说'
    },
    booking: {
      title: '预约服务',
      subtitle: '选择服务、发型师和时间',
      form: {
        service: '服务项目',
        stylist: '发型师',
        date: '日期',
        time: '时间',
        name: '姓名',
        phone: '电话',
        notes: '备注',
        submit: '确认预约',
        success: '预约成功！我们期待您的光临。'
      }
    },
    contact: {
      address: '地址',
      hours: '营业时间',
      phone: '电话'
    },
    footer: { rights: '© 2024 米兰发艺 版权所有' }
  }
}

export const salonInfo = {
  name: 'Milan Hair Studio',
  nameChinese: '米兰发艺',
  address: {
    street: 'Via Bramante 8',
    city: 'Milano',
    postalCode: '20154',
    country: 'Italia'
  },
  phone: '+39 02 8934 7162',
  email: 'info@milanhairstudio.it',
  instagram: '@milanhairstudio',
  hours: {
    tueSat: { days: { it: 'Mar-Sab', en: 'Tue-Sat', zh: '周二至周六' }, time: '9:00 - 20:00' },
    sunday: { days: { it: 'Domenica', en: 'Sunday', zh: '周日' }, time: '10:00 - 18:00' },
    monday: { it: 'Lunedì: Chiuso', en: 'Monday: Closed', zh: '周一休息' }
  },
  rating: 4.8,
  reviewCount: 156
}

export const services = {
  men: [
    { id: 'm1', name: { it: 'Taglio Uomo', en: 'Men\'s Cut', zh: '男士剪发' }, price: 15, duration: 30 },
    { id: 'm2', name: { it: 'Taglio + Lavaggio', en: 'Cut + Wash', zh: '洗剪' }, price: 20, duration: 40 },
    { id: 'm3', name: { it: 'Taglio + Barba', en: 'Cut + Beard', zh: '剪发+修面' }, price: 25, duration: 45 },
    { id: 'm4', name: { it: 'Colorazione Uomo', en: 'Men\'s Color', zh: '男士染发' }, price: 35, duration: 60 },
    { id: 'm5', name: { it: 'Taglio Bambino', en: 'Kids Cut', zh: '儿童剪发' }, price: 12, duration: 25 }
  ],
  women: [
    { id: 'w1', name: { it: 'Taglio Donna', en: 'Women\'s Cut', zh: '女士剪发' }, price: 25, duration: 45 },
    { id: 'w2', name: { it: 'Lavaggio Taglio Piega', en: 'Wash Cut Blow-dry', zh: '洗剪吹' }, price: 35, duration: 60 },
    { id: 'w3', name: { it: 'Piega', en: 'Blow-dry', zh: '吹风造型' }, price: 18, duration: 30 },
    { id: 'w4', name: { it: 'Permanente', en: 'Perm', zh: '烫发' }, price: 70, duration: 120, priceMax: 90 },
    { id: 'w5', name: { it: 'Colorazione', en: 'Color', zh: '染发' }, price: 50, duration: 90, priceMax: 80 },
    { id: 'w6', name: { it: 'Colpi di Sole', en: 'Highlights', zh: '挑染' }, price: 60, duration: 120, priceMax: 100 },
    { id: 'w7', name: { it: 'Stiratura Giapponese', en: 'Japanese Straightening', zh: '日式拉直' }, price: 120, duration: 180, priceMax: 180 }
  ],
  treatment: [
    { id: 't1', name: { it: 'Trattamento Cheratina', en: 'Keratin Treatment', zh: '角蛋白护理' }, price: 80, duration: 90 },
    { id: 't2', name: { it: 'Maschera Ristrutturante', en: 'Restructuring Mask', zh: '深层修护' }, price: 25, duration: 30 },
    { id: 't3', name: { it: 'Trattamento Anti-Caduta', en: 'Anti Hair Loss', zh: '防脱护理' }, price: 40, duration: 45 },
    { id: 't4', name: { it: 'Massaggio Cuoio Capelluto', en: 'Scalp Massage', zh: '头皮按摩' }, price: 20, duration: 20 }
  ]
}

export const stylists = [
  {
    id: 1,
    name: 'Mei Chen',
    nameChinese: '陈美',
    role: { it: 'Fondatrice & Stilista Senior', en: 'Founder & Senior Stylist', zh: '创始人 & 资深发型师' },
    specialty: { it: 'Colorazioni, Tagli Asiatici', en: 'Color, Asian Cuts', zh: '染发、亚洲发型' },
    experience: 15,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Marco Liu',
    nameChinese: '刘马可',
    role: { it: 'Stilista Senior', en: 'Senior Stylist', zh: '资深发型师' },
    specialty: { it: 'Tagli Uomo, Barba', en: 'Men\'s Cuts, Beard', zh: '男士剪发、修面' },
    experience: 10,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Yuki Wang',
    nameChinese: '王雪',
    role: { it: 'Stilista', en: 'Stylist', zh: '发型师' },
    specialty: { it: 'Permanenti, Trattamenti', en: 'Perms, Treatments', zh: '烫发、护理' },
    experience: 6,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop'
  }
]

export const gallery = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
  'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400'
]

export const reviews = [
  {
    id: 1,
    name: 'Laura B.',
    rating: 5,
    text: { it: 'Mei è fantastica! Finalmente ho trovato qualcuno che sa trattare i capelli asiatici.', en: 'Mei is fantastic! Finally found someone who knows how to handle Asian hair.', zh: 'Mei太棒了！终于找到懂亚洲发质的发型师。' },
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Zhang Wei',
    rating: 5,
    text: { it: 'Ambiente pulito e accogliente. Prezzi onesti per la qualità del servizio.', en: 'Clean and welcoming environment. Fair prices for the quality of service.', zh: '环境干净舒适，价格公道，服务质量高。' },
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Giuseppe M.',
    rating: 4,
    text: { it: 'Taglio perfetto, Marco è molto preciso. Consiglio vivamente.', en: 'Perfect cut, Marco is very precise. Highly recommend.', zh: '剪得很好，Marco非常细心，强烈推荐。' },
    date: '2024-01-05'
  }
]

export const timeSlots = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30']

export const heroImage = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920'
