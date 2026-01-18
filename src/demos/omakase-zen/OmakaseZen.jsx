import { useState, useEffect, useRef, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import './OmakaseZen.css'

// ==================== DATA ====================
const siteData = {
  name: { jp: '鮨 禅', en: 'OMAKASE ZEN' },
  tagline: {
    zh: '极致料理 · 匠心传承',
    en: 'The Ultimate Omakase Experience',
    it: "L'Esperienza Omakase Definitiva"
  }
}

const heroData = {
  video: 'https://videos.pexels.com/video-files/3296396/3296396-uhd_2560_1440_25fps.mp4',
  fallbackImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=90',
  title: '鮨 禅',
  subtitle: {
    zh: '二十道匠心呈现',
    en: 'Twenty Courses of Artistry',
    it: 'Venti Portate di Arte'
  },
  text: {
    zh: '在米兰心脏地带，体验来自东京银座的极致omakase',
    en: 'In the heart of Milan, experience the ultimate omakase from Tokyo Ginza',
    it: "Nel cuore di Milano, vivi l'omakase definitivo da Tokyo Ginza"
  },
  cta: { zh: '立即预约', en: 'Reserve Now', it: 'Prenota Ora' }
}

const statsData = [
  { number: '30+', label: { zh: '年匠心', en: 'Years', it: 'Anni' } },
  { number: '20', label: { zh: '道料理', en: 'Courses', it: 'Portate' } },
  { number: '8', label: { zh: '席位', en: 'Seats', it: 'Posti' } },
  { number: '★★', label: { zh: '米其林', en: 'Michelin', it: 'Michelin' } }
]

const philosophyData = [
  {
    title: { zh: '新鲜至上', en: 'Supreme Freshness', it: 'Freschezza Suprema' },
    jp: '鮮度',
    desc: { zh: '每日空运东京筑地市场顶级食材', en: 'Daily air-shipped from Tokyo Tsukiji Market', it: 'Spedito quotidianamente da Tsukiji' },
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80'
  },
  {
    title: { zh: '匠人精神', en: 'Artisan Spirit', it: 'Spirito Artigianale' },
    jp: '職人',
    desc: { zh: '三十年如一日的坚持与追求', en: 'Thirty years of dedication and pursuit', it: "Trent'anni di dedizione" },
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80'
  },
  {
    title: { zh: '禅意空间', en: 'Zen Atmosphere', it: 'Atmosfera Zen' },
    jp: '空間',
    desc: { zh: '极简设计，宁静致远', en: 'Minimalist design, serene ambiance', it: 'Design minimalista, ambiente sereno' },
    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80'
  }
]

const menuData = {
  courses: [
    { name: { zh: '先付', en: 'Sakizuke' }, jp: '先付け', desc: { zh: '季节前菜', en: 'Seasonal appetizer' }, img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80' },
    { name: { zh: '造り', en: 'Otsukuri' }, jp: 'お造り', desc: { zh: '精选刺身', en: 'Premium sashimi' }, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80' },
    { name: { zh: '握り', en: 'Nigiri' }, jp: '握り寿司', desc: { zh: '十二贯握寿司', en: 'Twelve pieces nigiri' }, img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80' },
    { name: { zh: '甘味', en: 'Kanmi' }, jp: '甘味', desc: { zh: '和风甜点', en: 'Japanese dessert' }, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80' }
  ],
  pricing: [
    { name: { zh: '午间', en: 'Lunch' }, price: '€15.80', courses: '12' },
    { name: { zh: '晚间', en: 'Dinner' }, price: '€21.80', courses: '20' },
    { name: { zh: '特选', en: 'Premium' }, price: '€30.80', courses: '24+' }
  ]
}

const chefData = {
  name: { zh: '田中正道', en: 'Masamichi Tanaka' },
  jp: '田中 正道',
  title: { zh: '行政总厨', en: 'Executive Chef' },
  quote: { zh: '每一贯寿司，都是我与食材的对话', en: 'Every piece of sushi is a dialogue with the ingredients' },
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80'
}

const galleryImages = [
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80',
  'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80',
  'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=800&q=80',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80'
]

const navItems = [
  { id: 'home', label: { zh: '首页', en: 'Home', it: 'Home' } },
  { id: 'philosophy', label: { zh: '理念', en: 'Philosophy', it: 'Filosofia' } },
  { id: 'menu', label: { zh: '料理', en: 'Menu', it: 'Menu' } },
  { id: 'chef', label: { zh: '主厨', en: 'Chef', it: 'Chef' } },
  { id: 'gallery', label: { zh: '空间', en: 'Gallery', it: 'Galleria' } },
  { id: 'reserve', label: { zh: '预约', en: 'Reserve', it: 'Prenota' } }
]

// ==================== PARTICLE SYSTEM ====================
const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2
    })

    const init = () => {
      resize()
      particles = Array.from({ length: 80 }, createParticle)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY
        p.pulse += 0.02

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const glow = Math.sin(p.pulse) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 169, 98, ${p.opacity * glow})`
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `rgba(201, 169, 98, ${p.opacity * glow * 0.3})`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="ozx-particles" />
}

// ==================== TYPEWRITER HOOK ====================
const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayText('')
    setIsComplete(false)

    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayText, isComplete }
}

// ==================== SCROLL ANIMATION HOOK ====================
const useScrollAnimation = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// ==================== 3D CARD COMPONENT ====================
const Card3D = ({ children, className = '' }) => {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -20
    const rotateY = (x - 0.5) * 20

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlowPosition({ x: x * 100, y: y * 100 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTransform('')
    setGlowPosition({ x: 50, y: 50 })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`ozx-card3d ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="ozx-card3d-glow"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(201, 169, 98, 0.3) 0%, transparent 50%)`
        }}
      />
      {children}
    </div>
  )
}

// ==================== PARALLAX SECTION ====================
const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      setOffset(scrolled * speed * 0.1)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translateY(${offset}px)` }}>
        {children}
      </div>
    </div>
  )
}

// ==================== ANIMATED SECTION ====================
const AnimatedSection = ({ children, animation = 'fadeUp', delay = 0, className = '' }) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`ozx-animated ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ==================== MAGNETIC BUTTON ====================
const MagneticButton = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`ozx-magnetic-btn ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// ==================== CURSOR GLOW ====================
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className={`ozx-cursor-glow ${visible ? 'visible' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  )
}

// ==================== MAIN COMPONENT ====================
function OmakaseZen() {
  const [lang, setLang] = useState('zh')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedCourse, setSelectedCourse] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '' })
  const [submitted, setSubmitted] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)

  const videoRef = useRef(null)
  const t = (obj) => obj?.[lang] || obj?.en || obj

  // Typewriter for hero title
  const { displayText: heroTitle, isComplete: titleComplete } = useTypewriter(heroData.title, 200, 500)

  // Initialize hero
  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      const sections = [...navItems].reverse()
      for (const item of sections) {
        const el = document.getElementById(item.id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(item.id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.date) setSubmitted(true)
  }

  return (
    <div className="ozx">
      <Helmet>
        <title>鮨 禅 | Omakase Zen - Premium Japanese Dining</title>
        <meta name="description" content={t(heroData.text)} />
      </Helmet>

      {/* Cursor Glow Effect */}
      <CursorGlow />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <header className={`ozx-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="ozx-header-inner">
          <button className="ozx-logo" onClick={() => scrollToSection('home')}>
            <span className="ozx-logo-jp">{siteData.name.jp}</span>
            <span className="ozx-logo-en">{siteData.name.en}</span>
          </button>

          <div className="ozx-header-actions">
            <div className="ozx-lang-switch">
              {['zh', 'en', 'it'].map(l => (
                <button key={l} onClick={() => setLang(l)} className={lang === l ? 'active' : ''}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <MagneticButton className="ozx-cta-btn" onClick={() => scrollToSection('reserve')}>
              {t(heroData.cta)}
            </MagneticButton>
          </div>

          <button className={`ozx-menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Navigation - 独立于 header 避免 stacking context 问题 */}
      <nav className={`ozx-nav ${menuOpen ? 'open' : ''}`}>
        <button className="ozx-nav-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <span></span>
          <span></span>
        </button>
        {navItems.map((item, i) => (
          <button
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => scrollToSection(item.id)}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {t(item.label)}
          </button>
        ))}
        <div className="ozx-mobile-lang">
          {['zh', 'en', 'it'].map(l => (
            <button key={l} onClick={() => setLang(l)} className={lang === l ? 'active' : ''}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="ozx-hero">
        <div className="ozx-hero-media">
          <video ref={videoRef} autoPlay loop muted playsInline poster={heroData.fallbackImage} className="ozx-hero-video">
            <source src={heroData.video} type="video/mp4" />
          </video>
          <div className="ozx-hero-overlay" />
          <div className="ozx-hero-grain" />
        </div>

        <div className={`ozx-hero-content ${heroLoaded ? 'loaded' : ''}`}>
          <div className="ozx-hero-badge">
            <span className="ozx-badge-stars">★★</span>
            <span>MICHELIN GUIDE</span>
          </div>

          <h1 className="ozx-hero-title">
            <span className="ozx-title-text">{heroTitle}</span>
            <span className={`ozx-title-cursor ${titleComplete ? 'hidden' : ''}`}>|</span>
          </h1>

          <p className="ozx-hero-subtitle">{t(heroData.subtitle)}</p>
          <p className="ozx-hero-text">{t(heroData.text)}</p>

          <div className="ozx-hero-actions">
            <MagneticButton className="ozx-btn-primary" onClick={() => scrollToSection('reserve')}>
              <span>{t(heroData.cta)}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
          </div>
        </div>

        <div className="ozx-hero-stats">
          {statsData.map((stat, i) => (
            <div key={i} className="ozx-stat" style={{ animationDelay: `${1.5 + i * 0.2}s` }}>
              <span className="ozx-stat-number">{stat.number}</span>
              <span className="ozx-stat-label">{t(stat.label)}</span>
            </div>
          ))}
        </div>

        <div className="ozx-hero-scroll" onClick={() => scrollToSection('philosophy')}>
          <span>{lang === 'zh' ? '探索' : 'Explore'}</span>
          <div className="ozx-scroll-indicator" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="ozx-section ozx-philosophy">
        <div className="ozx-container">
          <AnimatedSection animation="fadeUp">
            <div className="ozx-section-header">
              <span className="ozx-section-label">PHILOSOPHY</span>
              <h2 className="ozx-section-title">{lang === 'zh' ? '匠心理念' : 'Our Philosophy'}</h2>
              <div className="ozx-section-line" />
            </div>
          </AnimatedSection>

          <div className="ozx-philosophy-grid">
            {philosophyData.map((item, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 150}>
                <Card3D className="ozx-philosophy-card">
                  <div className="ozx-philosophy-image">
                    <img src={item.image} alt={t(item.title)} loading="lazy" />
                  </div>
                  <div className="ozx-philosophy-content">
                    <div className="ozx-philosophy-jp">{item.jp}</div>
                    <h3 className="ozx-philosophy-title">{t(item.title)}</h3>
                    <p className="ozx-philosophy-desc">{t(item.desc)}</p>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="ozx-section ozx-menu">
        <ParallaxSection speed={0.3} className="ozx-menu-bg">
          <div className="ozx-menu-bg-text">鮨</div>
        </ParallaxSection>

        <div className="ozx-container">
          <AnimatedSection animation="fadeUp">
            <div className="ozx-section-header">
              <span className="ozx-section-label">OMAKASE</span>
              <h2 className="ozx-section-title">{lang === 'zh' ? '御品料理' : 'Omakase Journey'}</h2>
              <div className="ozx-section-line" />
            </div>
          </AnimatedSection>

          <div className="ozx-menu-showcase">
            <AnimatedSection animation="fadeLeft" className="ozx-menu-tabs">
              {menuData.courses.map((course, i) => (
                <button
                  key={i}
                  className={`ozx-course-tab ${selectedCourse === i ? 'active' : ''}`}
                  onClick={() => setSelectedCourse(i)}
                >
                  <span className="ozx-course-jp">{course.jp}</span>
                  <span className="ozx-course-name">{t(course.name)}</span>
                </button>
              ))}
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" className="ozx-menu-display">
              <Card3D className="ozx-menu-card">
                <div className="ozx-menu-image">
                  <img src={menuData.courses[selectedCourse].img} alt={t(menuData.courses[selectedCourse].name)} />
                  <div className="ozx-menu-image-overlay">
                    <span className="ozx-menu-jp-large">{menuData.courses[selectedCourse].jp}</span>
                  </div>
                </div>
                <div className="ozx-menu-info">
                  <h3>{t(menuData.courses[selectedCourse].name)}</h3>
                  <p>{t(menuData.courses[selectedCourse].desc)}</p>
                </div>
              </Card3D>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="ozx-pricing-grid">
              {menuData.pricing.map((item, i) => (
                <Card3D key={i} className={`ozx-pricing-card ${i === 1 ? 'featured' : ''}`}>
                  {i === 1 && <span className="ozx-pricing-badge">SIGNATURE</span>}
                  <h4 className="ozx-pricing-name">{t(item.name)}</h4>
                  <div className="ozx-pricing-courses">{item.courses} {lang === 'zh' ? '道' : 'courses'}</div>
                  <div className="ozx-pricing-amount">{item.price}</div>
                  <MagneticButton className="ozx-pricing-btn" onClick={() => scrollToSection('reserve')}>
                    {lang === 'zh' ? '预约' : 'Reserve'}
                  </MagneticButton>
                </Card3D>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Chef Section */}
      <section id="chef" className="ozx-section ozx-chef">
        <div className="ozx-container">
          <div className="ozx-chef-content">
            <AnimatedSection animation="fadeLeft" className="ozx-chef-image-wrapper">
              <div className="ozx-chef-image-container">
                <img src={chefData.image} alt={t(chefData.name)} className="ozx-chef-image" />
                <div className="ozx-chef-image-frame" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" className="ozx-chef-info">
              <span className="ozx-section-label">MASTER CHEF</span>
              <h2 className="ozx-chef-name">{t(chefData.name)}</h2>
              <div className="ozx-chef-jp">{chefData.jp}</div>
              <div className="ozx-chef-title">{t(chefData.title)}</div>
              <blockquote className="ozx-chef-quote">"{t(chefData.quote)}"</blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="ozx-section ozx-gallery">
        <div className="ozx-container">
          <AnimatedSection animation="fadeUp">
            <div className="ozx-section-header">
              <span className="ozx-section-label">GALLERY</span>
              <h2 className="ozx-section-title">{lang === 'zh' ? '空间艺术' : 'The Art of Space'}</h2>
              <div className="ozx-section-line" />
            </div>
          </AnimatedSection>

          <div className="ozx-gallery-grid">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} animation="scale" delay={i * 100} className="ozx-gallery-item">
                <Card3D>
                  <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
                  <div className="ozx-gallery-overlay" />
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="ozx-section ozx-reserve">
        <div className="ozx-container">
          <div className="ozx-reserve-wrapper">
            <AnimatedSection animation="fadeLeft" className="ozx-reserve-info">
              <span className="ozx-section-label">RESERVATION</span>
              <h2 className="ozx-section-title">{lang === 'zh' ? '预约体验' : 'Make a Reservation'}</h2>
              <p className="ozx-reserve-desc">
                {lang === 'zh' ? '仅设8个席位，建议提前2周预约' : 'Only 8 seats available. Book 2 weeks in advance'}
              </p>
              <div className="ozx-contact-info">
                <div className="ozx-contact-item">
                  <span className="ozx-contact-label">{lang === 'zh' ? '营业时间' : 'Hours'}</span>
                  <span>Tue - Sat: 18:00 - 23:00</span>
                </div>
                <div className="ozx-contact-item">
                  <span className="ozx-contact-label">{lang === 'zh' ? '地址' : 'Address'}</span>
                  <span>Via Monte Napoleone 8, Milano</span>
                </div>
                <div className="ozx-contact-item">
                  <span className="ozx-contact-label">{lang === 'zh' ? '电话' : 'Phone'}</span>
                  <span>+39 02 1234 5678</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" className="ozx-reserve-form-wrapper">
              <Card3D className="ozx-form-card">
                {submitted ? (
                  <div className="ozx-form-success">
                    <div className="ozx-success-icon">✓</div>
                    <h3>{lang === 'zh' ? '预约成功' : 'Confirmed'}</h3>
                    <p>{lang === 'zh' ? '我们会尽快与您联系' : 'We will contact you soon'}</p>
                  </div>
                ) : (
                  <form className="ozx-form" onSubmit={handleSubmit}>
                    <h3>{lang === 'zh' ? '在线预约' : 'Book Online'}</h3>
                    <div className="ozx-form-grid">
                      <input type="text" placeholder={lang === 'zh' ? '姓名 *' : 'Name *'} value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                      <input type="email" placeholder="Email *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                      <input type="tel" placeholder={lang === 'zh' ? '电话' : 'Phone'} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                      <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} required>
                        <option value="">{lang === 'zh' ? '人数 *' : 'Guests *'}</option>
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} required />
                      <select value={form.time} onChange={e => setForm({...form, time: e.target.value})} required>
                        <option value="">{lang === 'zh' ? '时间 *' : 'Time *'}</option>
                        {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <MagneticButton type="submit" className="ozx-form-submit">
                      {lang === 'zh' ? '确认预约' : 'Confirm'}
                    </MagneticButton>
                  </form>
                )}
              </Card3D>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ozx-footer">
        <div className="ozx-container">
          <div className="ozx-footer-main">
            <div className="ozx-footer-brand">
              <div className="ozx-logo">
                <span className="ozx-logo-jp">{siteData.name.jp}</span>
                <span className="ozx-logo-en">{siteData.name.en}</span>
              </div>
              <p>{t(siteData.tagline)}</p>
            </div>
            <div className="ozx-footer-links">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollToSection(item.id)}>{t(item.label)}</button>
              ))}
            </div>
            <div className="ozx-footer-contact">
              <p>Via Monte Napoleone 8</p>
              <p>20121 Milano, Italia</p>
              <p>+39 02 1234 5678</p>
            </div>
          </div>
          <div className="ozx-footer-bottom">
            <p>© 2024 Omakase Zen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OmakaseZen
