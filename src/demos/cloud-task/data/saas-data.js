// CloudTask SaaS - Project Management Demo Data
// Trilingual: Italian (it), English (en), Chinese (zh)

export const translations = {
  it: {
    nav: { features: 'Funzionalita', pricing: 'Prezzi', testimonials: 'Testimonianze', demo: 'Demo', contact: 'Contatti' },
    hero: {
      tagline: 'Gestione Progetti Semplificata',
      subtitle: 'La piattaforma tutto-in-uno per team che vogliono collaborare meglio, consegnare piu velocemente e raggiungere i propri obiettivi.',
      cta: 'Inizia Gratis',
      secondaryCta: 'Guarda Demo'
    },
    features: {
      title: 'Tutto cio di cui hai bisogno',
      subtitle: 'Strumenti potenti per ogni aspetto della gestione progetti'
    },
    pricing: {
      title: 'Piani Semplici e Trasparenti',
      subtitle: 'Scegli il piano perfetto per il tuo team',
      monthly: 'Mensile',
      yearly: 'Annuale',
      perMonth: '/mese',
      perUser: 'per utente',
      popular: 'Piu Popolare',
      startFree: 'Inizia Gratis',
      startTrial: 'Prova 14 Giorni',
      contactSales: 'Contatta Vendite'
    },
    dashboard: {
      title: 'Dashboard Intuitiva',
      subtitle: 'Visualizza tutto il tuo lavoro in un unico posto con grafici interattivi e report in tempo reale'
    },
    testimonials: {
      title: 'Amato dai Team di Tutto il Mondo',
      subtitle: 'Scopri cosa dicono i nostri clienti'
    },
    cta: {
      title: 'Pronto a Trasformare il Tuo Team?',
      subtitle: 'Unisciti a migliaia di team che usano CloudTask per lavorare meglio insieme',
      button: 'Inizia la Prova Gratuita',
      noCreditCard: 'Nessuna carta di credito richiesta'
    },
    footer: {
      rights: '2024 CloudTask. Tutti i diritti riservati.',
      product: 'Prodotto',
      company: 'Azienda',
      support: 'Supporto',
      about: 'Chi Siamo',
      blog: 'Blog',
      careers: 'Lavora con Noi',
      help: 'Centro Assistenza',
      docs: 'Documentazione',
      status: 'Stato Sistema'
    }
  },
  en: {
    nav: { features: 'Features', pricing: 'Pricing', testimonials: 'Testimonials', demo: 'Demo', contact: 'Contact' },
    hero: {
      tagline: 'Project Management Made Simple',
      subtitle: 'The all-in-one platform for teams who want to collaborate better, deliver faster, and achieve their goals.',
      cta: 'Start Free',
      secondaryCta: 'Watch Demo'
    },
    features: {
      title: 'Everything You Need',
      subtitle: 'Powerful tools for every aspect of project management'
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the perfect plan for your team',
      monthly: 'Monthly',
      yearly: 'Yearly',
      perMonth: '/month',
      perUser: 'per user',
      popular: 'Most Popular',
      startFree: 'Start Free',
      startTrial: 'Start 14-Day Trial',
      contactSales: 'Contact Sales'
    },
    dashboard: {
      title: 'Intuitive Dashboard',
      subtitle: 'See all your work in one place with interactive charts and real-time reports'
    },
    testimonials: {
      title: 'Loved by Teams Worldwide',
      subtitle: 'See what our customers have to say'
    },
    cta: {
      title: 'Ready to Transform Your Team?',
      subtitle: 'Join thousands of teams using CloudTask to work better together',
      button: 'Start Free Trial',
      noCreditCard: 'No credit card required'
    },
    footer: {
      rights: '2024 CloudTask. All rights reserved.',
      product: 'Product',
      company: 'Company',
      support: 'Support',
      about: 'About Us',
      blog: 'Blog',
      careers: 'Careers',
      help: 'Help Center',
      docs: 'Documentation',
      status: 'System Status'
    }
  },
  zh: {
    nav: { features: '功能', pricing: '价格', testimonials: '客户评价', demo: '演示', contact: '联系' },
    hero: {
      tagline: '项目管理，化繁为简',
      subtitle: '一站式团队协作平台，助您高效协作、快速交付、达成目标。',
      cta: '免费开始',
      secondaryCta: '观看演示'
    },
    features: {
      title: '您需要的一切',
      subtitle: '强大的工具，覆盖项目管理的方方面面'
    },
    pricing: {
      title: '简单透明的定价',
      subtitle: '为您的团队选择最适合的方案',
      monthly: '月付',
      yearly: '年付',
      perMonth: '/月',
      perUser: '每用户',
      popular: '最受欢迎',
      startFree: '免费开始',
      startTrial: '14天免费试用',
      contactSales: '联系销售'
    },
    dashboard: {
      title: '直观的仪表盘',
      subtitle: '在一个地方查看所有工作，配有交互式图表和实时报告'
    },
    testimonials: {
      title: '全球团队的信赖之选',
      subtitle: '听听我们的客户怎么说'
    },
    cta: {
      title: '准备好改变您的团队了吗？',
      subtitle: '加入数千个使用CloudTask的团队，一起更好地工作',
      button: '开始免费试用',
      noCreditCard: '无需信用卡'
    },
    footer: {
      rights: '2024 CloudTask. 保留所有权利。',
      product: '产品',
      company: '公司',
      support: '支持',
      about: '关于我们',
      blog: '博客',
      careers: '加入我们',
      help: '帮助中心',
      docs: '文档',
      status: '系统状态'
    }
  }
}

export const features = [
  {
    id: 1,
    icon: '📋',
    name: { it: 'Gestione Attivita', en: 'Task Management', zh: '任务管理' },
    desc: {
      it: 'Crea, assegna e monitora attivita con facilita. Imposta priorita, scadenze e dipendenze.',
      en: 'Create, assign, and track tasks with ease. Set priorities, deadlines, and dependencies.',
      zh: '轻松创建、分配和跟踪任务。设置优先级、截止日期和依赖关系。'
    },
    highlights: {
      it: ['Kanban boards', 'Liste smart', 'Sottotask', 'Etichette'],
      en: ['Kanban boards', 'Smart lists', 'Subtasks', 'Labels'],
      zh: ['看板视图', '智能列表', '子任务', '标签']
    }
  },
  {
    id: 2,
    icon: '👥',
    name: { it: 'Collaborazione Team', en: 'Team Collaboration', zh: '团队协作' },
    desc: {
      it: 'Lavora insieme in tempo reale. Commenta, condividi file e tieni tutti aggiornati.',
      en: 'Work together in real-time. Comment, share files, and keep everyone in the loop.',
      zh: '实时协作。评论、共享文件，让每个人都保持同步。'
    },
    highlights: {
      it: ['Chat integrata', 'Condivisione file', 'Menzioni', 'Notifiche'],
      en: ['Built-in chat', 'File sharing', 'Mentions', 'Notifications'],
      zh: ['内置聊天', '文件共享', '@提及', '通知']
    }
  },
  {
    id: 3,
    icon: '⏱️',
    name: { it: 'Tracciamento Tempo', en: 'Time Tracking', zh: '时间追踪' },
    desc: {
      it: 'Registra il tempo speso su ogni attivita. Genera report dettagliati per la fatturazione.',
      en: 'Track time spent on every task. Generate detailed reports for billing.',
      zh: '记录每项任务的时间。生成详细的计费报告。'
    },
    highlights: {
      it: ['Timer integrato', 'Report ore', 'Timesheet', 'Esportazione'],
      en: ['Built-in timer', 'Hour reports', 'Timesheets', 'Export'],
      zh: ['内置计时器', '工时报告', '时间表', '导出']
    }
  },
  {
    id: 4,
    icon: '🔗',
    name: { it: 'Integrazioni', en: 'Integrations', zh: '集成' },
    desc: {
      it: 'Connetti gli strumenti che gia usi. Slack, Google, GitHub e oltre 100 altre app.',
      en: 'Connect the tools you already use. Slack, Google, GitHub, and 100+ other apps.',
      zh: '连接您已经使用的工具。Slack、Google、GitHub等100多个应用。'
    },
    highlights: {
      it: ['Slack', 'Google Drive', 'GitHub', 'Zapier'],
      en: ['Slack', 'Google Drive', 'GitHub', 'Zapier'],
      zh: ['Slack', 'Google Drive', 'GitHub', 'Zapier']
    }
  },
  {
    id: 5,
    icon: '📊',
    name: { it: 'Report e Analytics', en: 'Reports & Analytics', zh: '报告与分析' },
    desc: {
      it: 'Visualizza i progressi con dashboard interattive. Identifica colli di bottiglia e ottimizza.',
      en: 'Visualize progress with interactive dashboards. Identify bottlenecks and optimize.',
      zh: '通过交互式仪表盘可视化进度。识别瓶颈并优化。'
    },
    highlights: {
      it: ['Dashboard', 'Grafici Gantt', 'Burndown', 'KPI'],
      en: ['Dashboards', 'Gantt charts', 'Burndown', 'KPIs'],
      zh: ['仪表盘', '甘特图', '燃尽图', 'KPI']
    }
  },
  {
    id: 6,
    icon: '🔒',
    name: { it: 'Sicurezza Enterprise', en: 'Enterprise Security', zh: '企业级安全' },
    desc: {
      it: 'I tuoi dati sono al sicuro. Crittografia, SSO, audit log e conformita GDPR.',
      en: 'Your data is safe. Encryption, SSO, audit logs, and GDPR compliance.',
      zh: '您的数据安全无忧。加密、SSO、审计日志和GDPR合规。'
    },
    highlights: {
      it: ['SSO/SAML', 'Crittografia', 'Audit log', 'GDPR'],
      en: ['SSO/SAML', 'Encryption', 'Audit logs', 'GDPR'],
      zh: ['SSO/SAML', '加密', '审计日志', 'GDPR']
    }
  }
]

export const pricingPlans = [
  {
    id: 'free',
    name: { it: 'Free', en: 'Free', zh: '免费版' },
    price: { monthly: 0, yearly: 0 },
    desc: {
      it: 'Perfetto per iniziare con piccoli team',
      en: 'Perfect for getting started with small teams',
      zh: '适合小型团队入门使用'
    },
    features: {
      it: ['Fino a 5 utenti', 'Progetti illimitati', 'Kanban base', '1GB storage', 'Supporto email'],
      en: ['Up to 5 users', 'Unlimited projects', 'Basic Kanban', '1GB storage', 'Email support'],
      zh: ['最多5个用户', '无限项目', '基础看板', '1GB存储', '邮件支持']
    },
    highlighted: false
  },
  {
    id: 'pro',
    name: { it: 'Pro', en: 'Pro', zh: '专业版' },
    price: { monthly: 12, yearly: 9 },
    desc: {
      it: 'Per team in crescita che vogliono di piu',
      en: 'For growing teams that want more',
      zh: '适合成长中的团队'
    },
    features: {
      it: ['Utenti illimitati', 'Time tracking', 'Gantt charts', '10GB storage', 'Integrazioni', 'Supporto prioritario'],
      en: ['Unlimited users', 'Time tracking', 'Gantt charts', '10GB storage', 'Integrations', 'Priority support'],
      zh: ['无限用户', '时间追踪', '甘特图', '10GB存储', '集成', '优先支持']
    },
    highlighted: true
  },
  {
    id: 'business',
    name: { it: 'Business', en: 'Business', zh: '企业版' },
    price: { monthly: 24, yearly: 19 },
    desc: {
      it: 'Per aziende che necessitano controllo totale',
      en: 'For businesses that need complete control',
      zh: '适合需要完全控制的企业'
    },
    features: {
      it: ['Tutto in Pro', 'SSO/SAML', 'Audit log avanzati', 'Storage illimitato', 'API access', 'Account manager dedicato'],
      en: ['Everything in Pro', 'SSO/SAML', 'Advanced audit logs', 'Unlimited storage', 'API access', 'Dedicated account manager'],
      zh: ['包含专业版所有功能', 'SSO/SAML', '高级审计日志', '无限存储', 'API访问', '专属客户经理']
    },
    highlighted: false
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Marco Chen',
    nameChinese: '陈明远',
    role: { it: 'CTO, TechStart Milano', en: 'CTO, TechStart Milano', zh: 'CTO, TechStart Milano' },
    text: {
      it: 'CloudTask ha rivoluzionato il modo in cui il nostro team lavora. La visibilita sui progetti e migliorata del 200% e le consegne sono sempre puntuali.',
      en: 'CloudTask has revolutionized how our team works. Project visibility improved by 200% and deliveries are always on time.',
      zh: 'CloudTask彻底改变了我们团队的工作方式。项目可见性提高了200%，交付始终准时。'
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Sofia Wang',
    nameChinese: '王晓菲',
    role: { it: 'Project Manager, Design Studio', en: 'Project Manager, Design Studio', zh: '项目经理, Design Studio' },
    text: {
      it: 'Finalmente una piattaforma che supporta italiano, inglese e cinese! Perfetta per il nostro team internazionale.',
      en: 'Finally a platform that supports Italian, English, and Chinese! Perfect for our international team.',
      zh: '终于有一个支持意大利语、英语和中文的平台！非常适合我们的国际团队。'
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    id: 3,
    name: 'Luca Bianchi',
    nameChinese: '卢卡',
    role: { it: 'Founder, Import Export Srl', en: 'Founder, Import Export Srl', zh: '创始人, Import Export Srl' },
    text: {
      it: 'Il time tracking integrato ci ha fatto risparmiare ore di lavoro ogni settimana. Reportistica impeccabile per i clienti.',
      en: 'The integrated time tracking has saved us hours of work every week. Impeccable reporting for clients.',
      zh: '集成的时间追踪每周为我们节省了数小时的工作。为客户提供完美的报告。'
    },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    id: 4,
    name: 'Mei Lin Zhang',
    nameChinese: '张美琳',
    role: { it: 'Operations Director, Fashion Brand', en: 'Operations Director, Fashion Brand', zh: '运营总监, Fashion Brand' },
    text: {
      it: 'Abbiamo migrato da 3 strumenti diversi a CloudTask. Ora tutto e in un unico posto e il team e molto piu produttivo.',
      en: 'We migrated from 3 different tools to CloudTask. Now everything is in one place and the team is much more productive.',
      zh: '我们从3个不同的工具迁移到了CloudTask。现在一切都在一个地方，团队的生产力大大提高。'
    },
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    rating: 5
  }
]

export const stats = [
  { value: '10,000+', key: 'teams', label: { it: 'Team Attivi', en: 'Active Teams', zh: '活跃团队' } },
  { value: '50M+', key: 'tasks', label: { it: 'Attivita Completate', en: 'Tasks Completed', zh: '已完成任务' } },
  { value: '99.9%', key: 'uptime', label: { it: 'Uptime Garantito', en: 'Guaranteed Uptime', zh: '保证正常运行时间' } },
  { value: '4.9/5', key: 'rating', label: { it: 'Valutazione Media', en: 'Average Rating', zh: '平均评分' } }
]

export const dashboardData = {
  projects: [
    { name: { it: 'Redesign App Mobile', en: 'Mobile App Redesign', zh: '移动端重设计' }, progress: 75, status: 'active' },
    { name: { it: 'Migrazione Backend', en: 'Backend Migration', zh: '后端迁移' }, progress: 45, status: 'active' },
    { name: { it: 'Campagna Marketing Q1', en: 'Q1 Marketing Campaign', zh: 'Q1营销活动' }, progress: 90, status: 'review' }
  ],
  taskStats: {
    total: 156,
    completed: 98,
    inProgress: 42,
    todo: 16
  },
  teamMembers: [
    { name: 'Marco C.', avatar: 'MC', tasks: 12 },
    { name: 'Sofia W.', avatar: 'SW', tasks: 8 },
    { name: 'Luca B.', avatar: 'LB', tasks: 15 },
    { name: 'Mei L.', avatar: 'ML', tasks: 10 }
  ]
}

export const companyInfo = {
  name: 'CloudTask',
  tagline: { it: 'Gestione Progetti Cloud', en: 'Cloud Project Management', zh: '云端项目管理' },
  email: 'info@cloudtask.io',
  supportEmail: 'support@cloudtask.io',
  social: {
    twitter: '@cloudtask',
    linkedin: 'cloudtask-hq',
    github: 'cloudtask'
  }
}
