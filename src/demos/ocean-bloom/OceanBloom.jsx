import { useState } from 'react'
import './OceanBloom.css'

// Brand Data
const brand = {
  name: 'Ocean Bloom',
  tagline: {
    it: 'Cibo Creato con Audacia',
    en: 'Food Made Boldly',
    zh: '大胆创造美食'
  }
}

const heroContent = {
  title: { it: 'Cibo Creato con Audacia', en: 'Food Made Boldly', zh: '大胆创造美食' },
  subtitle: {
    it: 'Rendi ogni pasto un momento. Ogni morso una svolta. Unisciti a noi a tavola e mangia Audacemente.',
    en: 'Make every meal a moment. Every bite a breakthrough. Join us at the table and eat Boldly.',
    zh: '让每一餐都成为时刻。每一口都是突破。加入我们的餐桌，大胆品尝。'
  },
  cta: { it: 'Scopri i Prodotti', en: 'Explore Products', zh: '探索产品' }
}

const aboutContent = {
  title: { it: 'Cibo Creato con Audacia', en: 'Food Made Boldly', zh: '大胆创造美食' },
  text: {
    it: 'Siamo qui per rivoluzionare il modo in cui pensi ai prodotti ittici. 100% vegetale. 100% delizioso. Senza compromessi sul gusto, sulla texture o sul pianeta.',
    en: 'We\'re here to revolutionize the way you think about seafood. 100% plant-based. 100% delicious. No compromise on taste, texture, or the planet.',
    zh: '我们致力于革新您对海鲜的认知。100%植物基。100%美味。在口味、质地和地球上绝不妥协。'
  },
  cta: { it: 'Scopri di più su di noi', en: 'Learn More About Us', zh: '了解更多' }
}

const requestContent = {
  title: { it: 'Richiedi Ocean Bloom', en: 'Request Ocean Bloom', zh: '申请 Ocean Bloom' },
  subtitle: {
    it: 'Vuoi essere tra i primi a offrire Ocean Bloom? Il lancio ufficiale è in estate — ristoranti e chef possono richiedere campioni in anticipo.',
    en: 'Want to be among the first to offer Ocean Bloom? Official launch this summer — restaurants and chefs can request samples ahead of time.',
    zh: '想成为首批提供 Ocean Bloom 的商家吗？今年夏天正式发布——餐厅和厨师可提前申请样品。'
  },
  namePlaceholder: { it: 'Nome', en: 'Name', zh: '姓名' },
  emailPlaceholder: { it: 'Email', en: 'Email', zh: '邮箱' },
  companyPlaceholder: { it: 'Azienda / Ristorante', en: 'Company / Restaurant', zh: '公司/餐厅' },
  submit: { it: 'Invia Richiesta', en: 'Submit Request', zh: '提交申请' },
  success: { it: 'Grazie! Ti contatteremo presto.', en: 'Thank you! We\'ll be in touch soon.', zh: '谢谢！我们会尽快与您联系。' }
}

const products = [
  { id: 'whitefish', name: { it: 'Pesce Bianco', en: 'Whitefish', zh: '白身鱼' }, desc: { it: 'Setoso, sfogliato e pronto per il centro della scena', en: 'Silky, flaky, and ready for center stage', zh: '丝滑、层叠，准备好成为焦点' }, isNew: false },
  { id: 'salmon', name: { it: 'Salmone', en: 'Salmon', zh: '三文鱼' }, desc: { it: 'Qualità sashimi con texture grassa e sapore umami', en: 'Sashimi-grade with fatty texture and umami flavor', zh: '刺身级品质，油脂丰富，鲜味十足' }, isNew: true },
  { id: 'tuna', name: { it: 'Tonno', en: 'Tuna', zh: '金枪鱼' }, desc: { it: 'Prodotto sashimi con colore vivido e sapore autentico', en: 'Sashimi product with vivid color and authentic flavor', zh: '色泽鲜艳、风味正宗的刺身产品' }, isNew: true },
  { id: 'crabsticks', name: { it: 'Bastoncini di Granchio', en: 'Crabsticks', zh: '蟹肉棒' }, desc: { it: 'Succulenti, dolce-salati e infinitamente versatili', en: 'Succulent, subtly salty-sweet, and endlessly versatile', zh: '多汁、咸甜适中、用途无限' }, isNew: true },
  { id: 'calamari-steaks', name: { it: 'Bistecche di Calamaro', en: 'Calamari Steaks', zh: '鱿鱼排' }, desc: { it: 'Teneri, primi nel loro genere', en: 'Tender, first-of-their-kind offering', zh: '鲜嫩，同类首创' }, isNew: true },
  { id: 'calamari-rings', name: { it: 'Anelli di Calamaro', en: 'Calamari Rings', zh: '鱿鱼圈' }, desc: { it: "L'antipasto classico reinventato", en: 'The classic appetizer, reinvented', zh: '经典开胃菜，全新演绎' }, isNew: true },
  { id: 'jumbo-prawns', name: { it: 'Gamberoni Jumbo', en: 'Jumbo Prawns', zh: '大虾' }, desc: { it: 'Burrose, ripensate per un futuro sostenibile', en: 'Buttery, reimagined for a sustainable future', zh: '奶油般顺滑，为可持续未来重新定义' }, isNew: true },
  { id: 'shrimp-bites', name: { it: 'Bocconcini di Gambero', en: 'Shrimp Bites', zh: '虾仁小食' }, desc: { it: 'Esplosione di sapore, pronti a conquistare', en: 'Bursting with flavor and ready to conquer', zh: '风味爆棚，准备征服味蕾' }, isNew: true },
  { id: 'baby-shrimp', name: { it: 'Gamberetti', en: 'Baby Shrimp', zh: '小虾仁' }, desc: { it: 'Teneri, dolci e perfetti per ogni piatto', en: 'Tender, sweet, and perfect for any dish', zh: '鲜嫩、甜美，适合任何菜肴' }, isNew: true }
]

const recipes = [
  { id: 1, name: { it: 'Linguine ai Frutti di Mare', en: 'Seafood Linguine', zh: '海鲜意面' }, time: '30 min', servings: 4 },
  { id: 2, name: { it: 'Gamberetti al Sesamo', en: 'Sesame Shrimp Bites', zh: '芝麻虾' }, time: '25 min', servings: 4 },
  { id: 3, name: { it: 'Pesce al Limone', en: 'Lemon Baked Whitefish', zh: '柠檬烤白鱼' }, time: '35 min', servings: 2 },
  { id: 4, name: { it: 'Gamberoni all\'Aglio', en: 'Garlic Chili Prawns', zh: '蒜香辣大虾' }, time: '20 min', servings: 3 },
  { id: 5, name: { it: 'Involtini di Granchio', en: 'Crab Rolls', zh: '蟹肉卷' }, time: '15 min', servings: 4 },
  { id: 6, name: { it: 'Poke Bowl', en: 'Salmon Poke Bowl', zh: '三文鱼波奇碗' }, time: '20 min', servings: 2 }
]

const aboutPageContent = {
  hero: {
    title: { it: 'Cibo Creato con Audacia', en: 'Food Made Boldly', zh: '大胆创造美食' }
  },
  pillars: [
    {
      num: '01',
      title: { it: 'Ogni Pasto Conta', en: 'Making Every Meal Matter', zh: '让每一餐都有意义' },
      text: { it: 'Rendiamo ogni pasto un momento speciale. Audacemente delizioso. Audacemente innovativo.', en: 'We make every meal a moment. Boldly delicious. Boldly disruptive.', zh: '我们让每一餐都成为特别的时刻。大胆美味，大胆创新。' }
    },
    {
      num: '02',
      title: { it: 'Innovazione Alimentare', en: 'Advancing Food Innovation', zh: '推进食品创新' },
      text: { it: 'Spingiamo il cibo verso il futuro con passione e azione collettiva.', en: 'Moving food forward through passion and collective action.', zh: '通过热情和集体行动推动食品向前发展。' }
    },
    {
      num: '03',
      title: { it: 'Impatto Ambientale', en: 'Environmental Impact', zh: '环境影响' },
      text: { it: 'Siamo una forza per cambiare il mondo verso la sostenibilità.', en: 'We are a force to change the world for sustainability.', zh: '我们是推动世界可持续发展的力量。' }
    }
  ],
  team: {
    title: { it: 'Siamo Ossessionati dal Cibo. Proprio Come Te.', en: "We're Food-Obsessed People. Just Like You.", zh: '我们是热爱美食的人，就像你一样。' },
    text: { it: 'Il nostro team condivide i tuoi valori: gusto senza compromessi, innovazione senza limiti.', en: 'Our team shares your values: taste without compromise, innovation without limits.', zh: '我们的团队与您有着共同的价值观：美味不妥协，创新无极限。' }
  },
  stats: [
    { value: '2048', label: { it: 'Anno di esaurimento oceani', en: 'Predicted ocean depletion', zh: '预计海洋枯竭年份' } },
    { value: '93%', label: { it: 'Carbonio negli oceani', en: 'Carbon stored in oceans', zh: '海洋碳储存比例' } },
    { value: '3.9B', label: { it: 'Acri danneggiati/anno', en: 'Acres damaged yearly', zh: '每年受损英亩' } },
    { value: '90%', label: { it: 'Stock ittici sfruttati', en: 'Fish stocks exploited', zh: '被过度捕捞鱼类' } }
  ]
}

const nav = {
  products: { it: 'Prodotti', en: 'Products', zh: '产品' },
  recipes: { it: 'Ricette', en: 'Recipes', zh: '食谱' },
  about: { it: 'Chi Siamo', en: 'About', zh: '关于' },
  findUs: { it: 'Dove Trovarci', en: 'Find Us', zh: '门店' },
  foodService: { it: 'Food Service', en: 'Food Service', zh: '餐饮服务' }
}

const footer = {
  contact: { it: 'Contatti', en: 'Contact', zh: '联系' },
  samples: { it: 'Richiedi Campioni', en: 'Request Samples', zh: '申请样品' },
  privacy: { it: 'Privacy', en: 'Privacy', zh: '隐私' },
  terms: { it: 'Termini', en: 'Terms', zh: '条款' },
  copyright: { it: '© 2024 Ocean Bloom. Tutti i diritti riservati.', en: '© 2024 Ocean Bloom. All rights reserved.', zh: '© 2024 Ocean Bloom. 版权所有。' }
}

// Hero product images (placeholder seafood product images)
const heroProducts = [
  'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&q=80', // salmon fillet
  'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&q=80', // shrimp
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&q=80'  // fish
]

function OceanBloom() {
  const [lang, setLang] = useState('en')
  const [page, setPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [submitted, setSubmitted] = useState(false)

  const t = (obj) => obj[lang] || obj.en

  const navigate = (p) => {
    setPage(p)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.email) {
      setSubmitted(true)
      setForm({ name: '', email: '', company: '' })
    }
  }

  return (
    <div className="ob">
      {/* Header */}
      <header className="ob-header">
        <div className="ob-header-inner">
          <button className="ob-logo" onClick={() => navigate('home')}>
            Ocean Bloom
          </button>

          <nav className={`ob-nav ${menuOpen ? 'open' : ''}`}>
            <button className={page === 'products' ? 'active' : ''} onClick={() => navigate('products')}>{t(nav.products)}</button>
            <button className={page === 'recipes' ? 'active' : ''} onClick={() => navigate('recipes')}>{t(nav.recipes)}</button>
            <button className={page === 'about' ? 'active' : ''} onClick={() => navigate('about')}>{t(nav.about)}</button>
            <button className={page === 'find' ? 'active' : ''} onClick={() => navigate('find')}>{t(nav.findUs)}</button>
            <button className={page === 'service' ? 'active' : ''} onClick={() => navigate('service')}>{t(nav.foodService)}</button>
          </nav>

          <div className="ob-header-right">
            <div className="ob-lang">
              {['IT', 'EN', 'ZH'].map(l => (
                <button key={l} className={lang === l.toLowerCase() ? 'active' : ''} onClick={() => setLang(l.toLowerCase())}>{l}</button>
              ))}
            </div>
            <button className={`ob-menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main className="ob-main">
        {/* HOME */}
        {page === 'home' && (
          <>
            {/* Hero - Boldly Foods Style */}
            <section className="ob-hero">
              <div className="ob-hero-top">
                <h1 className="ob-hero-title">{t(heroContent.title)}</h1>
              </div>

              {/* Product cards with rotation - like Boldly Foods */}
              <div className="ob-hero-products">
                {heroProducts.map((img, i) => (
                  <div key={i} className="ob-hero-product" onClick={() => navigate('products')}>
                    <img src={img} alt={`Product ${i + 1}`} />
                  </div>
                ))}
              </div>

              <div className="ob-hero-bottom">
                <p className="ob-hero-text">{t(heroContent.subtitle)}</p>
                <button className="ob-hero-cta" onClick={() => navigate('products')}>
                  {t(heroContent.cta)} →
                </button>
              </div>
            </section>

            {/* About Block */}
            <section className="ob-about-block">
              <div className="ob-container">
                <h2>{t(aboutContent.title)}</h2>
                <p>{t(aboutContent.text)}</p>
                <button className="ob-btn ob-btn-secondary" onClick={() => navigate('about')}>
                  {t(aboutContent.cta)}
                </button>
              </div>
            </section>

            {/* Request Form */}
            <section className="ob-request">
              <div className="ob-container">
                <h2>{t(requestContent.title)}</h2>
                <p>{t(requestContent.subtitle)}</p>
                {submitted ? (
                  <div className="ob-success">{t(requestContent.success)}</div>
                ) : (
                  <form className="ob-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder={t(requestContent.namePlaceholder)} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    <input type="email" placeholder={t(requestContent.emailPlaceholder)} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                    <input type="text" placeholder={t(requestContent.companyPlaceholder)} value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                    <button type="submit" className="ob-btn ob-btn-primary">{t(requestContent.submit)}</button>
                  </form>
                )}
              </div>
            </section>
          </>
        )}

        {/* PRODUCTS */}
        {page === 'products' && (
          <section className="ob-products-page">
            <div className="ob-container">
              <h1>{t(nav.products)}</h1>
              <div className="ob-products-grid">
                {products.map(p => (
                  <div key={p.id} className="ob-product-card">
                    {p.isNew && <span className="ob-badge">New!</span>}
                    <div className="ob-product-img">
                      <img src={`https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=400&q=80`} alt={t(p.name)} />
                    </div>
                    <div className="ob-product-info">
                      <h3>{t(p.name)}</h3>
                      <p>{t(p.desc)}</p>
                      <div className="ob-product-actions">
                        <button className="ob-link">View Product</button>
                        <button className="ob-link ob-link-primary">Request sample</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* RECIPES */}
        {page === 'recipes' && (
          <section className="ob-recipes-page">
            <div className="ob-container">
              <h1>{t(nav.recipes)}</h1>
              <div className="ob-recipes-grid">
                {recipes.map(r => (
                  <div key={r.id} className="ob-recipe-card">
                    <div className="ob-recipe-img">
                      <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80" alt={t(r.name)} />
                    </div>
                    <div className="ob-recipe-info">
                      <h3>{t(r.name)}</h3>
                      <div className="ob-recipe-meta">
                        <span>{r.time}</span>
                        <span>{r.servings} {lang === 'it' ? 'porzioni' : lang === 'zh' ? '份' : 'servings'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {page === 'about' && (
          <section className="ob-about-page">
            <div className="ob-container">
              <div className="ob-about-hero">
                <h1>{t(aboutPageContent.hero.title)}</h1>
              </div>

              <div className="ob-pillars">
                {aboutPageContent.pillars.map((p, i) => (
                  <div key={i} className="ob-pillar">
                    <span className="ob-pillar-num">{p.num}</span>
                    <h3>{t(p.title)}</h3>
                    <p>{t(p.text)}</p>
                  </div>
                ))}
              </div>

              <div className="ob-team-block">
                <h2>{t(aboutPageContent.team.title)}</h2>
                <p>{t(aboutPageContent.team.text)}</p>
              </div>

              <div className="ob-stats">
                {aboutPageContent.stats.map((s, i) => (
                  <div key={i} className="ob-stat">
                    <span className="ob-stat-value">{s.value}</span>
                    <span className="ob-stat-label">{t(s.label)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FIND US */}
        {page === 'find' && (
          <section className="ob-find-page">
            <div className="ob-container">
              <h1>{t(nav.findUs)}</h1>
              <p className="ob-find-text">
                {lang === 'it' ? 'I nostri prodotti sono disponibili presso selezionati rivenditori in tutta Italia.' :
                 lang === 'zh' ? '我们的产品在意大利精选零售商处有售。' :
                 'Our products are available at selected retailers across Italy.'}
              </p>
              <div className="ob-partners">
                {['Eataly', 'Carrefour', 'Coop', 'Esselunga', 'NaturaSì'].map((p, i) => (
                  <div key={i} className="ob-partner">{p}</div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FOOD SERVICE */}
        {page === 'service' && (
          <section className="ob-service-page">
            <div className="ob-container">
              <h1>{t(nav.foodService)}</h1>
              <p className="ob-service-text">
                {lang === 'it' ? 'Porta Ocean Bloom nel tuo ristorante. Contattaci per partnership e prezzi all\'ingrosso.' :
                 lang === 'zh' ? '将 Ocean Bloom 带入您的餐厅。联系我们了解合作和批发价格。' :
                 'Bring Ocean Bloom to your restaurant. Contact us for partnerships and wholesale pricing.'}
              </p>
              <div className="ob-service-form">
                {submitted ? (
                  <div className="ob-success">{t(requestContent.success)}</div>
                ) : (
                  <form className="ob-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder={t(requestContent.namePlaceholder)} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    <input type="email" placeholder={t(requestContent.emailPlaceholder)} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                    <input type="text" placeholder={t(requestContent.companyPlaceholder)} value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                    <button type="submit" className="ob-btn ob-btn-primary">{t(requestContent.submit)}</button>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="ob-footer">
        <div className="ob-container">
          <div className="ob-footer-grid">
            <div className="ob-footer-brand">
              <span className="ob-footer-logo">Ocean Bloom</span>
            </div>
            <div className="ob-footer-nav">
              <button onClick={() => navigate('products')}>{t(nav.products)}</button>
              <button onClick={() => navigate('recipes')}>{t(nav.recipes)}</button>
              <button onClick={() => navigate('about')}>{t(nav.about)}</button>
              <button onClick={() => navigate('find')}>{t(nav.findUs)}</button>
              <button onClick={() => navigate('service')}>{t(nav.foodService)}</button>
            </div>
            <div className="ob-footer-links">
              <a href="#">{t(footer.contact)}</a>
              <a href="#">{t(footer.samples)}</a>
            </div>
            <div className="ob-footer-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div className="ob-footer-bottom">
            <div className="ob-footer-legal">
              <a href="#">{t(footer.privacy)}</a>
              <a href="#">{t(footer.terms)}</a>
            </div>
            <p>{t(footer.copyright)}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OceanBloom
