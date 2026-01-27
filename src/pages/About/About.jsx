import { Link } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { organizationSchema, localBusinessSchema } from '../../utils/schemas'
import { teamStats } from '../../data/team'
import './About.css'

function About() {
  const { t, language } = useLanguageText()

  const seoData = {
    zh: { title: '关于我们', description: '独立开发者团队介绍' },
    en: { title: 'About Us', description: 'Independent Developer Team' },
    it: { title: 'Chi Siamo', description: 'Team di Sviluppo Indipendente' }
  }

  return (
    <div className="about-page">
      <SEO title={seoData[language].title} description={seoData[language].description} path="/about" />
      <StructuredData data={[organizationSchema(language), localBusinessSchema(language)]} />
      
      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// PROFILE</span>
            <span>AGENCY_DATA</span>
          </div>
          <h1 className="page-title-giant">
            {t('关于我们', 'ABOUT US', 'CHI SIAMO')}
          </h1>
          <div className="header-decoration-line"></div>
        </section>

        {/* Intro Grid */}
        <section className="about-grid-intro">
          <div className="intro-text">
            <h2 className="intro-title font-mono">[MISSION_STATEMENT]</h2>
            <p className="intro-para">
              {t(
                '我们是一支专注于高质量技术解决方案的独立开发团队。拒绝平庸，追求卓越。每一行代码都是对未来的承诺。',
                'We are an independent development team focused on high-quality technical solutions. Reject mediocrity, pursue excellence. Every line of code is a promise to the future.',
                'Siamo un team di sviluppo indipendente focalizzato su soluzioni tecniche di alta qualità. Rifiutiamo la mediocrità, perseguiamo l\'eccellenza.'
              )}
            </p>
          </div>
          <div className="intro-stats">
            {Object.values(teamStats).map((stat, index) => (
              <div key={index} className="stat-box">
                <span className="stat-num font-mono">{stat.value}</span>
                <span className="stat-desc font-mono">{stat.label[language]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Team Link Section */}
        <section className="about-team-link">
          <div className="section-divider font-mono">
            <span>// CREW_MANIFEST</span>
          </div>
          <div className="team-link-content">
            <h2 className="team-link-title">
              {t('认识我们的团队', 'MEET OUR TEAM', 'CONOSCI IL NOSTRO TEAM')}
            </h2>
            <p className="team-link-desc font-mono">
              {t(
                '了解更多关于我们专业团队成员的信息',
                'Learn more about our professional team members',
                'Scopri di più sui membri del nostro team professionale'
              )}
            </p>
            <Link to="/team" className="btn-brutalist">
              {t('查看团队', 'VIEW TEAM', 'VEDI TEAM')} →
            </Link>
          </div>
        </section>

        {/* Philosophy */}
        <section className="about-philosophy">
          <div className="philosophy-grid">
            <div className="philo-item">
              <span className="philo-num">01</span>
              <h3>{t('用户至上', 'USER FIRST', 'UTENTI PRIMA')}</h3>
            </div>
            <div className="philo-item">
              <span className="philo-num">02</span>
              <h3>{t('代码洁癖', 'CLEAN CODE', 'CODICE PULITO')}</h3>
            </div>
            <div className="philo-item">
              <span className="philo-num">03</span>
              <h3>{t('持续交付', 'CONTINUOUS DELIVERY', 'CONSEGNA CONTINUA')}</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About