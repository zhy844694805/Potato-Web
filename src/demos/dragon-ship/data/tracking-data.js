// 龙运物流APP展示数据 - DragonShip
export const translations = {
  it: {
    title: 'DragonShip',
    subtitle: 'Traccia i tuoi pacchi dalla Cina',
    description: 'App professionale per il tracciamento di pacchi internazionali. Supporta tutti i corrieri principali con notifiche in tempo reale e stima tempi di consegna.',
    features: {
      title: 'Funzionalità',
      list: [
        { icon: '📦', title: 'Multi-Corriere', desc: 'Supporta 100+ corrieri internazionali' },
        { icon: '🔔', title: 'Notifiche Push', desc: 'Aggiornamenti in tempo reale' },
        { icon: '📍', title: 'Mappa Live', desc: 'Visualizza posizione del pacco' },
        { icon: '📊', title: 'Statistiche', desc: 'Cronologia e analisi spedizioni' },
        { icon: '🔄', title: 'Auto-Sync', desc: 'Sincronizzazione automatica' },
        { icon: '📱', title: 'Scansione QR', desc: 'Aggiungi pacchi velocemente' }
      ]
    },
    screens: {
      title: 'Schermate App',
      list: ['Tracciamento', 'Dettagli', 'I Miei Pacchi', 'Notifiche']
    },
    stats: { packages: 'Pacchi Tracciati', users: 'Utenti Attivi', countries: 'Paesi Supportati' },
    cta: 'Scarica App',
    back: 'Torna al portfolio'
  },
  en: {
    title: 'DragonShip',
    subtitle: 'Track your packages from China',
    description: 'Professional app for international package tracking. Supports all major carriers with real-time notifications and delivery time estimates.',
    features: {
      title: 'Features',
      list: [
        { icon: '📦', title: 'Multi-Carrier', desc: 'Supports 100+ international carriers' },
        { icon: '🔔', title: 'Push Notifications', desc: 'Real-time status updates' },
        { icon: '📍', title: 'Live Map', desc: 'Visualize package location' },
        { icon: '📊', title: 'Statistics', desc: 'Shipment history and analytics' },
        { icon: '🔄', title: 'Auto-Sync', desc: 'Automatic synchronization' },
        { icon: '📱', title: 'QR Scan', desc: 'Quickly add packages' }
      ]
    },
    screens: {
      title: 'App Screens',
      list: ['Tracking', 'Details', 'My Packages', 'Notifications']
    },
    stats: { packages: 'Packages Tracked', users: 'Active Users', countries: 'Countries Supported' },
    cta: 'Download App',
    back: 'Back to portfolio'
  },
  zh: {
    title: '龙运物流',
    subtitle: '追踪您的国际包裹',
    description: '专业国际包裹追踪应用，支持全球100+物流公司，实时推送物流状态，预估到达时间，让您轻松掌握包裹动态。',
    features: {
      title: '核心功能',
      list: [
        { icon: '📦', title: '多物流支持', desc: '支持100+国际物流公司' },
        { icon: '🔔', title: '推送通知', desc: '实时物流状态更新' },
        { icon: '📍', title: '地图追踪', desc: '可视化包裹位置' },
        { icon: '📊', title: '数据统计', desc: '历史记录与分析' },
        { icon: '🔄', title: '自动同步', desc: '自动更新物流信息' },
        { icon: '📱', title: '扫码添加', desc: '快速录入运单号' }
      ]
    },
    screens: {
      title: '应用截图',
      list: ['物流追踪', '详情页面', '我的包裹', '消息通知']
    },
    stats: { packages: '已追踪包裹', users: '活跃用户', countries: '覆盖国家' },
    cta: '下载应用',
    back: '返回案例'
  }
}

export const stats = {
  packages: '500K+',
  users: '85,000+',
  countries: '50+'
}

// Sample tracking timeline for mockup
export const trackingTimeline = [
  { status: 'delivered', location: 'Milano, IT', time: '12月20日 14:30', desc: '已签收' },
  { status: 'out', location: 'Milano, IT', time: '12月20日 08:15', desc: '派送中' },
  { status: 'arrived', location: 'Milano Hub', time: '12月19日 22:00', desc: '到达目的地' },
  { status: 'customs', location: 'Roma Customs', time: '12月18日 10:30', desc: '清关完成' },
  { status: 'transit', location: 'Dubai, UAE', time: '12月15日 18:00', desc: '转运中' },
  { status: 'departed', location: 'Shanghai, CN', time: '12月12日 06:00', desc: '已发出' },
  { status: 'picked', location: 'Yiwu, CN', time: '12月10日 14:00', desc: '已揽收' }
]

export const samplePackages = [
  { id: 'SF1234567890', carrier: '顺丰国际', status: 'delivered', eta: '已送达' },
  { id: 'YT9876543210', carrier: '圆通国际', status: 'transit', eta: '预计3天' },
  { id: 'ZTO456789012', carrier: '中通国际', status: 'customs', eta: '清关中' }
]
