// Jade Wellness Spa - Beauty & Massage Data
// Trilingual: Italian (it), English (en), Chinese (zh)

export const translations = {
  it: {
    nav: { home: 'Home', services: 'Trattamenti', about: 'Chi Siamo', booking: 'Prenota', contact: 'Contatti' },
    hero: {
      tagline: 'Armonia di Corpo e Mente',
      subtitle: 'Trattamenti tradizionali cinesi nel cuore di Milano',
      cta: 'Prenota Ora'
    },
    services: {
      title: 'I Nostri Trattamenti',
      subtitle: 'Benessere autentico dalla tradizione orientale',
      book: 'Prenota',
      duration: 'Durata'
    },
    about: {
      title: 'Il Nostro Centro',
      text: 'Jade Wellness Spa nasce dalla passione per le antiche tecniche di benessere cinesi. I nostri terapisti certificati combinano massaggi tradizionali, agopuntura e trattamenti erboristici per offrirti un\'esperienza di rilassamento unica.',
      team: 'Il Nostro Team',
      philosophy: 'Filosofia'
    },
    booking: {
      title: 'Prenota il Tuo Trattamento',
      subtitle: 'Scegli data e orario',
      form: { service: 'Trattamento', date: 'Data', time: 'Orario', name: 'Nome', phone: 'Telefono', email: 'Email', notes: 'Note', submit: 'Conferma Prenotazione' },
      success: 'Prenotazione confermata! Ti contatteremo a breve.'
    },
    contact: {
      title: 'Vieni a Trovarci',
      address: 'Indirizzo',
      hours: 'Orari',
      phone: 'Telefono'
    },
    footer: { rights: '© 2024 Jade Wellness Spa. Tutti i diritti riservati.' }
  },
  en: {
    nav: { home: 'Home', services: 'Treatments', about: 'About', booking: 'Book', contact: 'Contact' },
    hero: {
      tagline: 'Harmony of Body and Mind',
      subtitle: 'Traditional Chinese treatments in the heart of Milan',
      cta: 'Book Now'
    },
    services: {
      title: 'Our Treatments',
      subtitle: 'Authentic wellness from Eastern tradition',
      book: 'Book',
      duration: 'Duration'
    },
    about: {
      title: 'Our Center',
      text: 'Jade Wellness Spa was born from a passion for ancient Chinese wellness techniques. Our certified therapists combine traditional massage, acupuncture, and herbal treatments to offer you a unique relaxation experience.',
      team: 'Our Team',
      philosophy: 'Philosophy'
    },
    booking: {
      title: 'Book Your Treatment',
      subtitle: 'Choose date and time',
      form: { service: 'Treatment', date: 'Date', time: 'Time', name: 'Name', phone: 'Phone', email: 'Email', notes: 'Notes', submit: 'Confirm Booking' },
      success: 'Booking confirmed! We will contact you shortly.'
    },
    contact: {
      title: 'Visit Us',
      address: 'Address',
      hours: 'Hours',
      phone: 'Phone'
    },
    footer: { rights: '© 2024 Jade Wellness Spa. All rights reserved.' }
  },
  zh: {
    nav: { home: '首页', services: '服务', about: '关于', booking: '预约', contact: '联系' },
    hero: {
      tagline: '身心和谐',
      subtitle: '米兰中心的传统中式养生',
      cta: '立即预约'
    },
    services: {
      title: '我们的服务',
      subtitle: '源自东方传统的养生体验',
      book: '预约',
      duration: '时长'
    },
    about: {
      title: '关于我们',
      text: 'Jade Wellness Spa源于对中国传统养生技艺的热爱。我们的认证理疗师将传统按摩、针灸和草药疗法相结合，为您带来独特的放松体验。',
      team: '我们的团队',
      philosophy: '理念'
    },
    booking: {
      title: '预约您的服务',
      subtitle: '选择日期和时间',
      form: { service: '服务项目', date: '日期', time: '时间', name: '姓名', phone: '电话', email: '邮箱', notes: '备注', submit: '确认预约' },
      success: '预约成功！我们将尽快与您联系。'
    },
    contact: {
      title: '欢迎光临',
      address: '地址',
      hours: '营业时间',
      phone: '电话'
    },
    footer: { rights: '© 2024 Jade Wellness Spa. 版权所有。' }
  }
}

export const spaInfo = {
  name: 'Jade Wellness Spa',
  address: { street: 'Via Paolo Sarpi 42', city: 'Milano', postalCode: '20154', country: 'Italia' },
  phone: '+39 02 3456 7890',
  email: 'info@jadewellness.it',
  hours: { weekday: '10:00 - 21:00', weekend: '10:00 - 20:00', closed: { it: 'Lunedì', en: 'Monday', zh: '周一' } },
  social: { instagram: '#', facebook: '#', wechat: '#' }
}

export const services = [
  { id: 1, name: { it: 'Massaggio Tuina', en: 'Tuina Massage', zh: '推拿按摩' }, desc: { it: 'Massaggio tradizionale cinese per riequilibrare l\'energia', en: 'Traditional Chinese massage to rebalance energy', zh: '传统中式按摩，调和气血' }, duration: '60 min', price: 80, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400', popular: true },
  { id: 2, name: { it: 'Massaggio ai Piedi', en: 'Foot Reflexology', zh: '足底按摩' }, desc: { it: 'Riflessologia plantare per tutto il corpo', en: 'Foot reflexology for whole body wellness', zh: '足底反射疗法，全身受益' }, duration: '45 min', price: 55, image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400', popular: true },
  { id: 3, name: { it: 'Coppettazione', en: 'Cupping Therapy', zh: '拔罐疗法' }, desc: { it: 'Antica tecnica per eliminare le tossine', en: 'Ancient technique to eliminate toxins', zh: '古法排毒养生' }, duration: '30 min', price: 45, image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400', popular: false },
  { id: 4, name: { it: 'Agopuntura', en: 'Acupuncture', zh: '针灸疗法' }, desc: { it: 'Trattamento con aghi per vari disturbi', en: 'Needle treatment for various conditions', zh: '针刺疗法，调理身体' }, duration: '45 min', price: 70, image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400', popular: false },
  { id: 5, name: { it: 'Massaggio Viso Gua Sha', en: 'Gua Sha Facial', zh: '刮痧美容' }, desc: { it: 'Trattamento viso con pietra di giada', en: 'Facial treatment with jade stone', zh: '玉石刮痧，焕颜美肤' }, duration: '40 min', price: 60, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400', popular: true },
  { id: 6, name: { it: 'Pacchetto Relax Completo', en: 'Complete Relax Package', zh: '全身放松套餐' }, desc: { it: 'Combinazione di massaggio corpo e piedi', en: 'Combination of body and foot massage', zh: '全身按摩+足疗组合' }, duration: '90 min', price: 120, image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400', popular: true }
]

export const team = [
  { name: { it: 'Mei Lin', en: 'Mei Lin', zh: '梅林' }, role: { it: 'Fondatrice & Terapista', en: 'Founder & Therapist', zh: '创始人 & 理疗师' }, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300', specialty: { it: 'Tuina, Agopuntura', en: 'Tuina, Acupuncture', zh: '推拿, 针灸' } },
  { name: { it: 'Marco Bianchi', en: 'Marco Bianchi', zh: 'Marco Bianchi' }, role: { it: 'Terapista Senior', en: 'Senior Therapist', zh: '资深理疗师' }, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300', specialty: { it: 'Riflessologia', en: 'Reflexology', zh: '足疗' } }
]

export const timeSlots = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

export const heroImage = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920'
export const galleryImages = [
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400'
]
