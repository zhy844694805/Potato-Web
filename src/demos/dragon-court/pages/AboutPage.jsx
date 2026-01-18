import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import GoldParticles from '../components/GoldParticles'
import { siteInfo, heritageData } from '../data/siteData'

function AboutPage() {
  const { language, t } = useDCLanguage()

  return (
    <div className="dc-about-page">
      <Helmet>
        <title>{language === 'zh' ? '百年传承' : 'Heritage'} | {t(siteInfo.name)}</title>
      </Helmet>

      <GoldParticles />

      {/* Page Hero */}
      <section className="dc-page-hero">
        <div className="dc-page-hero-bg">
          <img src="https://images.pexels.com/photos/6542774/pexels-photo-6542774.jpeg?auto=compress&w=1920" alt="" />
          <div className="dc-page-hero-overlay"></div>
        </div>
        <div className="dc-page-hero-content">
          <span className="dc-page-icon">傳</span>
          <h1>{language === 'zh' ? '百年传承' : 'Century of Heritage'}</h1>
          <p>{language === 'zh' ? '御膳精髓，代代相传' : 'Imperial excellence, passed through generations'}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="dc-section dc-story">
        <div className="dc-container">
          <div className="dc-story-content">
            <h2>{language === 'zh' ? '龙庭的故事' : 'The Dragon Court Story'}</h2>
            <p className="dc-story-intro">{t(heritageData.intro)}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="dc-section dc-timeline light">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '历史沿革' : 'Our Journey'}</h2>
          </div>
          <div className="dc-timeline-list">
            {heritageData.milestones.map((item, i) => (
              <div key={i} className="dc-timeline-item">
                <div className="dc-timeline-year">{item.year}</div>
                <div className="dc-timeline-content">
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="dc-section dc-values">
        <div className="dc-container">
          <div className="dc-section-header">
            <span className="dc-section-icon">道</span>
            <h2>{language === 'zh' ? '御膳之道' : 'Our Philosophy'}</h2>
          </div>
          <div className="dc-values-grid">
            {heritageData.values.map((item, i) => (
              <div key={i} className="dc-value-card">
                <div className="dc-value-image">
                  <img src={item.image} alt={t(item.title)} loading="lazy" />
                </div>
                <div className="dc-value-content">
                  <span className="dc-value-icon">{item.icon}</span>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Awards Preview */}
      <section className="dc-section dc-awards-preview light">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '荣誉认证' : 'Awards & Recognition'}</h2>
          </div>
          <div className="dc-awards-grid">
            <div className="dc-award-item">
              <span className="dc-award-icon">⭐⭐⭐</span>
              <h4>{language === 'zh' ? '米其林三星' : 'Michelin 3 Stars'}</h4>
              <p>2010 - {language === 'zh' ? '至今' : 'Present'}</p>
            </div>
            <div className="dc-award-item">
              <span className="dc-award-icon">🏆</span>
              <h4>{language === 'zh' ? '亚洲50最佳' : "Asia's 50 Best"}</h4>
              <p>2015, 2018, 2021</p>
            </div>
            <div className="dc-award-item">
              <span className="dc-award-icon">🎖️</span>
              <h4>{language === 'zh' ? '意大利美食大奖' : 'Italian Gastronomy Award'}</h4>
              <p>2018</p>
            </div>
            <div className="dc-award-item">
              <span className="dc-award-icon">👨‍🍳</span>
              <h4>{language === 'zh' ? '世界华人厨师金奖' : 'World Chinese Chef Gold'}</h4>
              <p>2020</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
