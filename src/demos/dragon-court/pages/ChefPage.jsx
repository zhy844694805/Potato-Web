import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import GoldParticles from '../components/GoldParticles'
import { siteInfo, chefData } from '../data/siteData'

function ChefPage() {
  const { language, t } = useDCLanguage()

  return (
    <div className="dc-chef-page">
      <Helmet>
        <title>{language === 'zh' ? '御厨团队' : 'Our Chefs'} | {t(siteInfo.name)}</title>
      </Helmet>

      <GoldParticles />

      {/* Page Hero */}
      <section className="dc-page-hero">
        <div className="dc-page-hero-bg">
          <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&w=1920" alt="" />
          <div className="dc-page-hero-overlay"></div>
        </div>
        <div className="dc-page-hero-content">
          <span className="dc-page-icon">廚</span>
          <h1>{language === 'zh' ? '御厨团队' : 'Master Chefs'}</h1>
          <p>{language === 'zh' ? '匠心传承，精益求精' : 'Artisan mastery, pursuing perfection'}</p>
        </div>
      </section>

      {/* Head Chef Section */}
      <section className="dc-section dc-head-chef">
        <div className="dc-container">
          <div className="dc-chef-profile">
            <div className="dc-chef-image-wrapper">
              <img src={chefData.image} alt={t(chefData.name)} />
              <div className="dc-chef-frame"></div>
            </div>
            <div className="dc-chef-info">
              <span className="dc-chef-label">{language === 'zh' ? '行政总厨' : 'Executive Chef'}</span>
              <h2 className="dc-chef-name">{t(chefData.name)}</h2>
              <p className="dc-chef-title">{t(chefData.title)}</p>
              <blockquote className="dc-chef-quote">
                "{t(chefData.quote)}"
              </blockquote>
              <p className="dc-chef-bio">{t(chefData.bio)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Awards */}
      <section className="dc-section dc-chef-awards light">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '荣誉成就' : 'Awards & Achievements'}</h2>
          </div>
          <div className="dc-awards-timeline">
            {chefData.awards.map((award, i) => (
              <div key={i} className="dc-award-card">
                <span className="dc-award-year">{award.year}</span>
                <h4>{t(award.title)}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Team */}
      <section className="dc-section dc-chef-team">
        <div className="dc-container">
          <div className="dc-section-header">
            <span className="dc-section-icon">隊</span>
            <h2>{language === 'zh' ? '厨师团队' : 'Our Team'}</h2>
            <p>{language === 'zh' ? '来自各地的顶尖厨师，共同呈现美食盛宴' : 'Top chefs from around the world, creating culinary excellence together'}</p>
          </div>
          <div className="dc-team-grid">
            {chefData.team.map((member, i) => (
              <div key={i} className="dc-team-card">
                <div className="dc-team-image">
                  <img src={member.image} alt={t(member.name)} loading="lazy" />
                </div>
                <div className="dc-team-info">
                  <h4>{t(member.name)}</h4>
                  <p className="dc-team-role">{t(member.role)}</p>
                  <p className="dc-team-specialty">{t(member.specialty)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="dc-section dc-philosophy light">
        <div className="dc-container">
          <div className="dc-philosophy-content">
            <span className="dc-philosophy-icon">道</span>
            <h2>{language === 'zh' ? '烹饪哲学' : 'Culinary Philosophy'}</h2>
            <div className="dc-philosophy-text">
              <p>
                {language === 'zh'
                  ? '在龙庭，我们相信烹饪是一门艺术，更是一种文化的传承。每一道菜品都凝聚着厨师们的心血与智慧，从选材到烹制，每一个环节都追求极致。'
                  : 'At Dragon Court, we believe cooking is an art and a cultural heritage. Every dish embodies the dedication and wisdom of our chefs, pursuing excellence in every step from sourcing to preparation.'}
              </p>
              <p>
                {language === 'zh'
                  ? '我们尊重传统，同时拥抱创新。将千年宫廷御膳的精髓与现代烹饪技艺相结合，为宾客带来前所未有的美食体验。'
                  : 'We respect tradition while embracing innovation. Combining the essence of thousand-year imperial cuisine with modern culinary techniques, we bring guests an unprecedented dining experience.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChefPage
