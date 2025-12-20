// Dragon Trade - Import/Export Company Data
// Trilingual: Italian (it), English (en), Chinese (zh)

export const translations = {
  it: {
    nav: { home: 'Home', services: 'Servizi', products: 'Prodotti', about: 'Chi Siamo', contact: 'Contatti' },
    hero: {
      tagline: 'Il Ponte tra Europa e Asia',
      subtitle: 'Import-Export professionale dal 2008',
      cta: 'Richiedi Preventivo'
    },
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Soluzioni complete per il commercio internazionale'
    },
    products: {
      title: 'Categorie Prodotti',
      subtitle: 'Ampia gamma di prodotti di qualità'
    },
    stats: {
      years: 'Anni di Esperienza',
      clients: 'Clienti Soddisfatti',
      countries: 'Paesi Serviti',
      shipments: 'Spedizioni/Anno'
    },
    about: {
      title: 'Chi Siamo',
      text: 'Dragon Trade è leader nell\'import-export tra Italia e Cina. Con sede a Milano e uffici a Guangzhou, offriamo soluzioni commerciali complete: dalla ricerca fornitori alla logistica, dalla certificazione doganale alla consegna.',
      mission: 'La nostra missione è semplificare il commercio internazionale per le PMI italiane.'
    },
    contact: {
      title: 'Contattaci',
      italy: 'Sede Italia',
      china: 'Ufficio Cina',
      form: { company: 'Azienda', name: 'Nome', email: 'Email', phone: 'Telefono', message: 'Richiesta', send: 'Invia Richiesta' }
    },
    footer: { rights: '© 2024 Dragon Trade Srl. P.IVA: IT12345678901' }
  },
  en: {
    nav: { home: 'Home', services: 'Services', products: 'Products', about: 'About', contact: 'Contact' },
    hero: {
      tagline: 'The Bridge Between Europe and Asia',
      subtitle: 'Professional Import-Export since 2008',
      cta: 'Request Quote'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete solutions for international trade'
    },
    products: {
      title: 'Product Categories',
      subtitle: 'Wide range of quality products'
    },
    stats: {
      years: 'Years Experience',
      clients: 'Satisfied Clients',
      countries: 'Countries Served',
      shipments: 'Shipments/Year'
    },
    about: {
      title: 'About Us',
      text: 'Dragon Trade is a leader in import-export between Italy and China. With headquarters in Milan and offices in Guangzhou, we offer complete commercial solutions: from supplier sourcing to logistics, customs certification to delivery.',
      mission: 'Our mission is to simplify international trade for Italian SMEs.'
    },
    contact: {
      title: 'Contact Us',
      italy: 'Italy Office',
      china: 'China Office',
      form: { company: 'Company', name: 'Name', email: 'Email', phone: 'Phone', message: 'Inquiry', send: 'Send Request' }
    },
    footer: { rights: '© 2024 Dragon Trade Srl. VAT: IT12345678901' }
  },
  zh: {
    nav: { home: '首页', services: '服务', products: '产品', about: '关于', contact: '联系' },
    hero: {
      tagline: '连接欧亚的贸易桥梁',
      subtitle: '专业进出口服务 始于2008',
      cta: '获取报价'
    },
    services: {
      title: '我们的服务',
      subtitle: '国际贸易一站式解决方案'
    },
    products: {
      title: '产品类别',
      subtitle: '优质产品，品类丰富'
    },
    stats: {
      years: '年行业经验',
      clients: '满意客户',
      countries: '服务国家',
      shipments: '年发货量'
    },
    about: {
      title: '关于我们',
      text: 'Dragon Trade是意中进出口贸易的领导者。总部位于米兰，在广州设有办事处，我们提供完整的商业解决方案：从供应商寻找到物流，从海关认证到交付。',
      mission: '我们的使命是为意大利中小企业简化国际贸易。'
    },
    contact: {
      title: '联系我们',
      italy: '意大利总部',
      china: '中国办事处',
      form: { company: '公司名称', name: '姓名', email: '邮箱', phone: '电话', message: '咨询内容', send: '提交咨询' }
    },
    footer: { rights: '© 2024 Dragon Trade Srl. 税号: IT12345678901' }
  }
}

export const companyInfo = {
  name: 'Dragon Trade',
  italy: { address: 'Via Tortona 25, 20144 Milano, Italia', phone: '+39 02 1234 5678', email: 'italy@dragontrade.eu' },
  china: { address: '广州市天河区天河路385号', phone: '+86 20 8888 9999', email: 'china@dragontrade.eu' },
  social: { linkedin: '#', wechat: '#' }
}

export const services = [
  { id: 1, icon: '🔍', name: { it: 'Ricerca Fornitori', en: 'Supplier Sourcing', zh: '供应商寻源' }, desc: { it: 'Troviamo i migliori fornitori cinesi per le tue esigenze', en: 'We find the best Chinese suppliers for your needs', zh: '为您寻找最优质的中国供应商' } },
  { id: 2, icon: '✅', name: { it: 'Controllo Qualità', en: 'Quality Control', zh: '质量控制' }, desc: { it: 'Ispezioni in fabbrica e controlli pre-spedizione', en: 'Factory inspections and pre-shipment controls', zh: '工厂检验和发货前质检' } },
  { id: 3, icon: '🚢', name: { it: 'Logistica', en: 'Logistics', zh: '物流运输' }, desc: { it: 'Spedizioni marittime, aeree e ferroviarie', en: 'Sea, air, and rail freight', zh: '海运、空运、铁路运输' } },
  { id: 4, icon: '📋', name: { it: 'Sdoganamento', en: 'Customs Clearance', zh: '清关服务' }, desc: { it: 'Gestione completa pratiche doganali', en: 'Complete customs documentation handling', zh: '全套海关手续办理' } },
  { id: 5, icon: '📦', name: { it: 'Magazzino', en: 'Warehousing', zh: '仓储服务' }, desc: { it: 'Stoccaggio in Italia e Cina', en: 'Storage in Italy and China', zh: '意大利和中国仓储' } },
  { id: 6, icon: '💼', name: { it: 'Consulenza', en: 'Consulting', zh: '商务咨询' }, desc: { it: 'Supporto strategico per il tuo business', en: 'Strategic support for your business', zh: '为您的业务提供战略支持' } }
]

export const productCategories = [
  { id: 1, name: { it: 'Tessile & Abbigliamento', en: 'Textile & Apparel', zh: '纺织服装' }, image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400' },
  { id: 2, name: { it: 'Elettronica', en: 'Electronics', zh: '电子产品' }, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400' },
  { id: 3, name: { it: 'Arredamento', en: 'Furniture', zh: '家具家居' }, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400' },
  { id: 4, name: { it: 'Macchinari', en: 'Machinery', zh: '机械设备' }, image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400' }
]

export const stats = [
  { value: '16+', key: 'years' },
  { value: '500+', key: 'clients' },
  { value: '35', key: 'countries' },
  { value: '2000+', key: 'shipments' }
]

export const heroImage = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920'
