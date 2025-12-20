// 美丽预约小程序 - 展示数据
export const translations = {
  it: {
    title: 'BellaBook Mini Program',
    subtitle: 'Prenota il tuo appuntamento di bellezza',
    description: 'Un mini programma WeChat elegante per saloni di bellezza che permette ai clienti di prenotare servizi, visualizzare disponibilità e gestire appuntamenti.',
    features: {
      title: 'Funzionalità Principali',
      list: [
        { icon: '📅', title: 'Prenotazione Smart', desc: 'Visualizza disponibilità in tempo reale' },
        { icon: '💇', title: 'Catalogo Servizi', desc: 'Sfoglia tutti i trattamenti disponibili' },
        { icon: '👩‍💼', title: 'Scegli Stilista', desc: 'Seleziona il tuo professionista preferito' },
        { icon: '🔔', title: 'Promemoria', desc: 'Notifiche automatiche per appuntamenti' },
        { icon: '⭐', title: 'Recensioni', desc: 'Sistema di valutazione integrato' },
        { icon: '🎁', title: 'Programma Fedeltà', desc: 'Punti e sconti per clienti abituali' }
      ]
    },
    screens: {
      title: 'Schermate App',
      list: ['Home', 'Servizi', 'Prenotazione', 'Conferma', 'Profilo']
    },
    stats: { users: 'Utenti Attivi', bookings: 'Prenotazioni/Mese', rating: 'Valutazione' },
    cta: 'Richiedi Demo',
    back: 'Torna al portfolio'
  },
  en: {
    title: 'BellaBook Mini Program',
    subtitle: 'Book your beauty appointment',
    description: 'An elegant WeChat mini program for beauty salons that allows customers to book services, view availability, and manage appointments seamlessly.',
    features: {
      title: 'Key Features',
      list: [
        { icon: '📅', title: 'Smart Booking', desc: 'View real-time availability' },
        { icon: '💇', title: 'Service Catalog', desc: 'Browse all available treatments' },
        { icon: '👩‍💼', title: 'Choose Stylist', desc: 'Select your preferred professional' },
        { icon: '🔔', title: 'Reminders', desc: 'Automatic appointment notifications' },
        { icon: '⭐', title: 'Reviews', desc: 'Integrated rating system' },
        { icon: '🎁', title: 'Loyalty Program', desc: 'Points and discounts for regulars' }
      ]
    },
    screens: {
      title: 'App Screens',
      list: ['Home', 'Services', 'Booking', 'Confirmation', 'Profile']
    },
    stats: { users: 'Active Users', bookings: 'Bookings/Month', rating: 'Rating' },
    cta: 'Request Demo',
    back: 'Back to portfolio'
  },
  zh: {
    title: '美丽预约小程序',
    subtitle: '一键预约您的美容服务',
    description: '为美容院设计的微信小程序，让客户轻松预约服务、查看空闲时段、管理预约记录。界面优雅，操作简单。',
    features: {
      title: '核心功能',
      list: [
        { icon: '📅', title: '智能预约', desc: '实时查看可预约时段' },
        { icon: '💇', title: '服务目录', desc: '浏览所有美容服务项目' },
        { icon: '👩‍💼', title: '选择技师', desc: '挑选您喜欢的美容师' },
        { icon: '🔔', title: '预约提醒', desc: '自动发送预约通知' },
        { icon: '⭐', title: '评价系统', desc: '服务后可打分评价' },
        { icon: '🎁', title: '会员积分', desc: '积分兑换折扣优惠' }
      ]
    },
    screens: {
      title: '应用截图',
      list: ['首页', '服务', '预约', '确认', '我的']
    },
    stats: { users: '活跃用户', bookings: '月预约量', rating: '用户评分' },
    cta: '申请演示',
    back: '返回案例'
  }
}

// Simulated app screens (using colors/gradients to represent screens)
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
  rating: '4.9'
}
