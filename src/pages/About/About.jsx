import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { organizationSchema } from '../../utils/schemas'
import { teamMembers, teamStats } from '../../data/team'
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
      <StructuredData data={organizationSchema(language)} />
      
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

        {/* Team Section */}
        <section className="about-team-section">
          <div className="section-divider font-mono">
            <span>// CREW_MANIFEST</span>
            <span>ACTIVE_MEMBERS: {teamMembers.length}</span>
          </div>
          
          <div className="team-grid-brutalist">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member-card">
                <div className="member-header">
                  <span className="member-role font-mono">{member.role[language]}</span>
                  <span className="member-id font-mono">ID: {member.id}</span>
                </div>
                <h3 className="member-name">{member.name[language]}</h3>
                <div className="member-skills font-mono">
                  {member.skills && member.skills.slice(0, 3).map((skill, i) => (
                    <span key={i}>[{typeof skill.name === 'object' ? skill.name[language] : skill.name}]</span>
                  ))}
                </div>
              </div>
            ))}
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