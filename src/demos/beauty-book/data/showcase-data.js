// 美丽预约小程序 - 展示数据
// BellaBook Mini Program - Showcase Data

export const translations = {
  it: {
    title: 'BellaBook Mini Program',
    subtitle: 'Prenota il tuo appuntamento di bellezza',
    description: 'Un mini programma WeChat elegante per saloni di bellezza che permette ai clienti di prenotare servizi, visualizzare disponibilità e gestire appuntamenti. Perfetto per saloni che vogliono digitalizzare la gestione clienti.',
    features: {
      title: 'Funzionalità Principali',
      subtitle: 'Tutto ciò che serve al tuo salone',
      list: [
        { icon: '📅', title: 'Prenotazione Smart', desc: 'Visualizza disponibilità in tempo reale e prenota con un click' },
        { icon: '💇', title: 'Catalogo Servizi', desc: 'Sfoglia tutti i trattamenti con prezzi e durata' },
        { icon: '👩‍💼', title: 'Scegli Stilista', desc: 'Seleziona il tuo professionista preferito' },
        { icon: '🔔', title: 'Promemoria', desc: 'Notifiche automatiche 24h prima dell\'appuntamento' },
        { icon: '⭐', title: 'Recensioni', desc: 'Sistema di valutazione integrato per ogni servizio' },
        { icon: '🎁', title: 'Programma Fedeltà', desc: 'Punti e sconti per clienti abituali' },
        { icon: '💳', title: 'Pagamento Online', desc: 'Paga direttamente nell\'app con WeChat Pay' },
        { icon: '📊', title: 'Dashboard Admin', desc: 'Gestisci prenotazioni e clienti facilmente' }
      ]
    },
    screens: {
      title: 'Schermate App',
      subtitle: 'Un\'esperienza utente intuitiva',
      list: ['Home', 'Servizi', 'Prenotazione', 'Conferma', 'Profilo']
    },
    stats: {
      users: 'Utenti Attivi',
      bookings: 'Prenotazioni/Mese',
      rating: 'Valutazione',
      salons: 'Saloni Partner'
    },
    howItWorks: {
      title: 'Come Funziona',
      subtitle: 'Prenota in 3 semplici passi',
      steps: [
        { num: '1', title: 'Scegli il Servizio', desc: 'Sfoglia il catalogo e seleziona il trattamento desiderato' },
        { num: '2', title: 'Prenota l\'Appuntamento', desc: 'Scegli data, ora e il tuo stilista preferito' },
        { num: '3', title: 'Conferma e Vai', desc: 'Ricevi conferma e promemoria automatici' }
      ]
    },
    pricing: {
      title: 'Piani e Prezzi',
      subtitle: 'Scegli il piano adatto al tuo salone',
      monthly: '/mese',
      popular: 'Più Popolare',
      cta: 'Inizia Ora',
      features: {
        clients: 'Gestione clienti',
        bookings: 'Prenotazioni illimitate',
        reminders: 'Promemoria automatici',
        catalog: 'Catalogo servizi',
        analytics: 'Analytics avanzati',
        multiStaff: 'Multi-operatore',
        payment: 'Pagamenti online',
        priority: 'Supporto prioritario',
        api: 'API personalizzate'
      }
    },
    testimonials: {
      title: 'Cosa Dicono i Nostri Clienti',
      subtitle: 'Saloni che hanno scelto BellaBook'
    },
    faq: {
      title: 'Domande Frequenti',
      subtitle: 'Trova le risposte alle tue domande',
      questions: [
        { q: 'Come integro BellaBook nel mio salone?', a: 'Il processo è semplice: dopo la registrazione, ti guideremo nella configurazione del catalogo servizi e degli operatori. In 24 ore sarai operativo.' },
        { q: 'È necessario avere un account WeChat?', a: 'Sì, BellaBook funziona come mini programma WeChat. I tuoi clienti possono accedere direttamente dall\'app WeChat senza download aggiuntivi.' },
        { q: 'Posso personalizzare l\'aspetto dell\'app?', a: 'Certamente! Puoi personalizzare colori, logo e stile per riflettere il brand del tuo salone.' },
        { q: 'Come funzionano i pagamenti?', a: 'I pagamenti sono gestiti tramite WeChat Pay. I fondi vengono trasferiti direttamente sul tuo conto business.' },
        { q: 'Offrite supporto tecnico?', a: 'Sì, offriamo supporto via chat e email. I piani Professional e Enterprise includono supporto prioritario.' }
      ]
    },
    demo: {
      title: 'Richiedi una Demo',
      subtitle: 'Scopri come BellaBook può trasformare il tuo salone',
      form: {
        name: 'Nome',
        salon: 'Nome Salone',
        phone: 'Telefono',
        email: 'Email',
        employees: 'Numero Operatori',
        message: 'Messaggio',
        submit: 'Richiedi Demo Gratuita',
        submitting: 'Invio in corso...'
      },
      success: 'Grazie! Ti contatteremo entro 24 ore.'
    },
    newsletter: {
      title: 'Resta Aggiornato',
      subtitle: 'Iscriviti per novità e consigli per il tuo salone',
      placeholder: 'La tua email',
      button: 'Iscriviti',
      success: 'Iscrizione confermata!'
    },
    cta: 'Richiedi Demo Gratuita',
    contact: 'Contattaci',
    back: 'Torna al portfolio',
    footer: {
      rights: '© 2024 BellaBook. Tutti i diritti riservati.',
      privacy: 'Privacy Policy',
      terms: 'Termini di Servizio'
    }
  },
  en: {
    title: 'BellaBook Mini Program',
    subtitle: 'Book your beauty appointment',
    description: 'An elegant WeChat mini program for beauty salons that allows customers to book services, view availability, and manage appointments seamlessly. Perfect for salons looking to digitize their client management.',
    features: {
      title: 'Key Features',
      subtitle: 'Everything your salon needs',
      list: [
        { icon: '📅', title: 'Smart Booking', desc: 'View real-time availability and book with one click' },
        { icon: '💇', title: 'Service Catalog', desc: 'Browse all treatments with prices and duration' },
        { icon: '👩‍💼', title: 'Choose Stylist', desc: 'Select your preferred professional' },
        { icon: '🔔', title: 'Reminders', desc: 'Automatic notifications 24h before appointment' },
        { icon: '⭐', title: 'Reviews', desc: 'Integrated rating system for every service' },
        { icon: '🎁', title: 'Loyalty Program', desc: 'Points and discounts for regular customers' },
        { icon: '💳', title: 'Online Payment', desc: 'Pay directly in the app with WeChat Pay' },
        { icon: '📊', title: 'Admin Dashboard', desc: 'Manage bookings and clients easily' }
      ]
    },
    screens: {
      title: 'App Screens',
      subtitle: 'An intuitive user experience',
      list: ['Home', 'Services', 'Booking', 'Confirmation', 'Profile']
    },
    stats: {
      users: 'Active Users',
      bookings: 'Bookings/Month',
      rating: 'Rating',
      salons: 'Partner Salons'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Book in 3 simple steps',
      steps: [
        { num: '1', title: 'Choose Service', desc: 'Browse the catalog and select your desired treatment' },
        { num: '2', title: 'Book Appointment', desc: 'Pick your date, time, and preferred stylist' },
        { num: '3', title: 'Confirm and Go', desc: 'Receive confirmation and automatic reminders' }
      ]
    },
    pricing: {
      title: 'Plans & Pricing',
      subtitle: 'Choose the right plan for your salon',
      monthly: '/month',
      popular: 'Most Popular',
      cta: 'Get Started',
      features: {
        clients: 'Client management',
        bookings: 'Unlimited bookings',
        reminders: 'Automatic reminders',
        catalog: 'Service catalog',
        analytics: 'Advanced analytics',
        multiStaff: 'Multi-staff support',
        payment: 'Online payments',
        priority: 'Priority support',
        api: 'Custom API access'
      }
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Salons that chose BellaBook'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to your questions',
      questions: [
        { q: 'How do I integrate BellaBook into my salon?', a: 'The process is simple: after registration, we\'ll guide you through setting up your service catalog and staff. You\'ll be operational within 24 hours.' },
        { q: 'Do I need a WeChat account?', a: 'Yes, BellaBook works as a WeChat mini program. Your clients can access it directly from the WeChat app without additional downloads.' },
        { q: 'Can I customize the app\'s appearance?', a: 'Absolutely! You can customize colors, logo, and style to reflect your salon\'s brand.' },
        { q: 'How do payments work?', a: 'Payments are handled through WeChat Pay. Funds are transferred directly to your business account.' },
        { q: 'Do you offer technical support?', a: 'Yes, we offer chat and email support. Professional and Enterprise plans include priority support.' }
      ]
    },
    demo: {
      title: 'Request a Demo',
      subtitle: 'Discover how BellaBook can transform your salon',
      form: {
        name: 'Name',
        salon: 'Salon Name',
        phone: 'Phone',
        email: 'Email',
        employees: 'Number of Staff',
        message: 'Message',
        submit: 'Request Free Demo',
        submitting: 'Sending...'
      },
      success: 'Thank you! We\'ll contact you within 24 hours.'
    },
    newsletter: {
      title: 'Stay Updated',
      subtitle: 'Subscribe for news and tips for your salon',
      placeholder: 'Your email',
      button: 'Subscribe',
      success: 'Subscription confirmed!'
    },
    cta: 'Request Free Demo',
    contact: 'Contact Us',
    back: 'Back to portfolio',
    footer: {
      rights: '© 2024 BellaBook. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  zh: {
    title: '美丽预约小程序',
    subtitle: '一键预约您的美容服务',
    description: '为美容院设计的微信小程序，让客户轻松预约服务、查看空闲时段、管理预约记录。界面优雅，操作简单，是美容院数字化转型的理想选择。',
    features: {
      title: '核心功能',
      subtitle: '美容院所需的一切功能',
      list: [
        { icon: '📅', title: '智能预约', desc: '实时查看可预约时段，一键预约' },
        { icon: '💇', title: '服务目录', desc: '浏览所有美容服务，含价格和时长' },
        { icon: '👩‍💼', title: '选择技师', desc: '挑选您喜欢的美容师' },
        { icon: '🔔', title: '预约提醒', desc: '预约前24小时自动发送提醒' },
        { icon: '⭐', title: '评价系统', desc: '服务后可打分评价，提升服务质量' },
        { icon: '🎁', title: '会员积分', desc: '积分兑换折扣优惠，留住老客户' },
        { icon: '💳', title: '在线支付', desc: '支持微信支付，方便快捷' },
        { icon: '📊', title: '管理后台', desc: '轻松管理预约和客户信息' }
      ]
    },
    screens: {
      title: '应用截图',
      subtitle: '直观的用户体验',
      list: ['首页', '服务', '预约', '确认', '我的']
    },
    stats: {
      users: '活跃用户',
      bookings: '月预约量',
      rating: '用户评分',
      salons: '合作门店'
    },
    howItWorks: {
      title: '使用流程',
      subtitle: '三步轻松预约',
      steps: [
        { num: '1', title: '选择服务', desc: '浏览服务目录，选择心仪的美容项目' },
        { num: '2', title: '预约时间', desc: '选择日期、时间和喜欢的技师' },
        { num: '3', title: '确认到店', desc: '收到确认通知，准时到店即可' }
      ]
    },
    pricing: {
      title: '套餐价格',
      subtitle: '选择适合您门店的方案',
      monthly: '/月',
      popular: '最受欢迎',
      cta: '立即开通',
      features: {
        clients: '客户管理',
        bookings: '无限预约',
        reminders: '自动提醒',
        catalog: '服务目录',
        analytics: '数据分析',
        multiStaff: '多员工支持',
        payment: '在线支付',
        priority: '优先支持',
        api: '自定义API'
      }
    },
    testimonials: {
      title: '客户评价',
      subtitle: '选择BellaBook的美容院'
    },
    faq: {
      title: '常见问题',
      subtitle: '解答您的疑问',
      questions: [
        { q: '如何将BellaBook接入我的门店？', a: '流程很简单：注册后，我们会指导您配置服务目录和员工信息。24小时内即可上线运营。' },
        { q: '需要微信账号吗？', a: '是的，BellaBook是微信小程序。您的客户可以直接从微信访问，无需额外下载。' },
        { q: '可以自定义外观吗？', a: '当然可以！您可以自定义颜色、logo和风格，打造专属品牌形象。' },
        { q: '支付如何处理？', a: '通过微信支付处理，资金直接进入您的商户账户。' },
        { q: '提供技术支持吗？', a: '提供在线客服和邮件支持。专业版和企业版享有优先支持服务。' }
      ]
    },
    demo: {
      title: '预约演示',
      subtitle: '了解BellaBook如何助力您的美容院',
      form: {
        name: '姓名',
        salon: '门店名称',
        phone: '联系电话',
        email: '邮箱',
        employees: '员工人数',
        message: '留言',
        submit: '预约免费演示',
        submitting: '提交中...'
      },
      success: '感谢您的咨询！我们将在24小时内联系您。'
    },
    newsletter: {
      title: '订阅资讯',
      subtitle: '获取最新功能和美容院经营技巧',
      placeholder: '您的邮箱',
      button: '订阅',
      success: '订阅成功！'
    },
    cta: '预约免费演示',
    contact: '联系我们',
    back: '返回案例',
    footer: {
      rights: '© 2024 BellaBook. 版权所有。',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  }
}

export const appScreens = [
  {
    id: 'home',
    gradient: 'linear-gradient(180deg, #fce4ec 0%, #fff 100%)',
    mockupContent: {
      header: '美丽预约',
      greeting: '欢迎回来，王小姐',
      sections: ['推荐服务', '热门技师', '最新优惠']
    }
  },
  {
    id: 'services',
    gradient: 'linear-gradient(180deg, #f3e5f5 0%, #fff 100%)',
    mockupContent: {
      categories: ['护肤', '美发', '美甲', '按摩'],
      items: ['深层清洁 ¥288', '精剪造型 ¥168', '日式美甲 ¥188']
    }
  },
  {
    id: 'booking',
    gradient: 'linear-gradient(180deg, #e8f5e9 0%, #fff 100%)',
    mockupContent: {
      service: '深层清洁护理',
      date: '2024年12月25日',
      time: '14:00 - 15:00',
      stylist: 'Lisa 高级美容师'
    }
  },
  {
    id: 'confirm',
    gradient: 'linear-gradient(180deg, #e3f2fd 0%, #fff 100%)',
    mockupContent: {
      icon: '✓',
      message: '预约成功',
      details: '已发送确认短信'
    }
  },
  {
    id: 'profile',
    gradient: 'linear-gradient(180deg, #fff3e0 0%, #fff 100%)',
    mockupContent: {
      avatar: '👩',
      name: '王小姐',
      points: '2,580 积分',
      menu: ['我的预约', '历史记录', '优惠券', '设置']
    }
  }
]

export const stats = {
  users: '12,000+',
  bookings: '8,500+',
  rating: '4.9',
  salons: '150+'
}

export const pricingPlans = [
  {
    id: 'basic',
    name: { it: 'Base', en: 'Basic', zh: '基础版' },
    price: { it: '€99', en: '€99', zh: '¥688' },
    desc: { it: 'Per piccoli saloni', en: 'For small salons', zh: '适合小型门店' },
    features: ['clients', 'bookings', 'reminders', 'catalog'],
    highlighted: false
  },
  {
    id: 'professional',
    name: { it: 'Professionale', en: 'Professional', zh: '专业版' },
    price: { it: '€199', en: '€199', zh: '¥1,388' },
    desc: { it: 'Per saloni in crescita', en: 'For growing salons', zh: '适合成长型门店' },
    features: ['clients', 'bookings', 'reminders', 'catalog', 'analytics', 'multiStaff', 'payment'],
    highlighted: true
  },
  {
    id: 'enterprise',
    name: { it: 'Enterprise', en: 'Enterprise', zh: '企业版' },
    price: { it: '€399', en: '€399', zh: '¥2,788' },
    desc: { it: 'Per catene e gruppi', en: 'For chains and groups', zh: '适合连锁品牌' },
    features: ['clients', 'bookings', 'reminders', 'catalog', 'analytics', 'multiStaff', 'payment', 'priority', 'api'],
    highlighted: false
  }
]

export const testimonials = [
  {
    id: 1,
    author: { it: 'Maria Rossi', en: 'Maria Rossi', zh: 'Maria Rossi' },
    salon: { it: 'Bella Vita Salon, Milano', en: 'Bella Vita Salon, Milan', zh: 'Bella Vita Salon, 米兰' },
    rating: 5,
    text: {
      it: 'BellaBook ha rivoluzionato il nostro salone! Le prenotazioni sono aumentate del 40% e i clienti adorano la comodità dell\'app.',
      en: 'BellaBook revolutionized our salon! Bookings increased by 40% and clients love the convenience of the app.',
      zh: 'BellaBook彻底改变了我们的美容院！预约量增加了40%，客户都喜欢这个应用的便捷性。'
    },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 2,
    author: { it: 'Chen Mei', en: 'Chen Mei', zh: '陈梅' },
    salon: { it: 'Bellezza Orientale, Roma', en: 'Oriental Beauty, Rome', zh: '东方美颜, 罗马' },
    rating: 5,
    text: {
      it: 'Gestire le prenotazioni era un incubo prima di BellaBook. Ora è tutto automatico e posso concentrarmi sui clienti.',
      en: 'Managing bookings was a nightmare before BellaBook. Now everything is automatic and I can focus on clients.',
      zh: '以前管理预约是噩梦。现在一切都自动化了，我可以专注于服务客户。'
    },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100'
  },
  {
    id: 3,
    author: { it: 'Giulia Bianchi', en: 'Giulia Bianchi', zh: 'Giulia Bianchi' },
    salon: { it: 'Stile & Bellezza, Firenze', en: 'Style & Beauty, Florence', zh: 'Stile & Bellezza, 佛罗伦萨' },
    rating: 5,
    text: {
      it: 'Il programma fedeltà ha fidelizzato i nostri clienti. I punti e gli sconti li fanno tornare sempre!',
      en: 'The loyalty program retained our clients. Points and discounts keep them coming back!',
      zh: '会员积分系统留住了我们的客户。积分和折扣让他们不断回来！'
    },
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  }
]

export const techStack = [
  { name: 'WeChat Mini Program', icon: '📱' },
  { name: 'Cloud Functions', icon: '☁️' },
  { name: 'WeChat Pay', icon: '💳' },
  { name: 'Real-time Sync', icon: '🔄' }
]
