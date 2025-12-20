import { useRestaurantLanguage } from '../SakuraMilano'
import { translations, chefImage } from '../data/restaurant-data'

function AboutPage() {
  const { language } = useRestaurantLanguage()
  const t = translations[language]

  const awards = [
    { icon: '⭐', title: t.about.awards.michelin },
    { icon: '🦐', title: t.about.awards.gambero },
    { icon: '🏆', title: t.about.awards.traveler }
  ]

  const timeline = [
    {
      year: '2015',
      title: { it: 'Tokyo', en: 'Tokyo', zh: '东京' },
      desc: {
        it: 'Marco Tanaka lavora al fianco di Jiro Ono',
        en: 'Marco Tanaka works alongside Jiro Ono',
        zh: '田中马可在小野二郎身边学习'
      }
    },
    {
      year: '2017',
      title: { it: 'Modena', en: 'Modena', zh: '摩德纳' },
      desc: {
        it: 'Stage presso Osteria Francescana',
        en: 'Internship at Osteria Francescana',
        zh: '在 Osteria Francescana 实习'
      }
    },
    {
      year: '2018',
      title: { it: 'Milano', en: 'Milan', zh: '米兰' },
      desc: {
        it: 'Apertura di Sakura Milano',
        en: 'Opening of Sakura Milano',
        zh: 'Sakura Milano 开业'
      }
    },
    {
      year: '2024',
      title: { it: 'Oggi', en: 'Today', zh: '今天' },
      desc: {
        it: 'Raccomandazione Michelin',
        en: 'Michelin Recommendation',
        zh: '获得米其林推荐'
      }
    }
  ]

  return (
    <div className="sushi-page-content">
      {/* Page Header */}
      <section className="sushi-page-header">
        <div className="sushi-container">
          <h1 className="sushi-heading-1">{t.about.title}</h1>
          <div className="sushi-divider" />
        </div>
      </section>

      {/* Story Section */}
      <section className="sushi-section">
        <div className="sushi-container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="sushi-heading-2 sushi-text-gold">{t.about.story.title}</h2>
          <div className="sushi-divider" />
          <p style={{ color: 'var(--sushi-gray-light)', lineHeight: 2, fontSize: '1.1rem' }}>
            {t.about.story.text}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="sushi-section" style={{ background: 'var(--sushi-bg-secondary)' }}>
        <div className="sushi-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 'var(--sushi-space-lg)'
            }}
          >
            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  flex: '1 1 200px',
                  maxWidth: '250px'
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    color: 'var(--sushi-gold)',
                    fontFamily: 'var(--sushi-font-display)',
                    marginBottom: 'var(--sushi-space-sm)'
                  }}
                >
                  {item.year}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--sushi-font-display)',
                    fontSize: '1.25rem',
                    marginBottom: 'var(--sushi-space-xs)'
                  }}
                >
                  {item.title[language]}
                </h3>
                <p style={{ color: 'var(--sushi-gray)', fontSize: '0.9rem' }}>
                  {item.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="sushi-section sushi-chef-section">
        <div className="sushi-container">
          <div className="sushi-section-header">
            <h2 className="sushi-heading-2">{t.about.chef.title}</h2>
            <div className="sushi-divider" />
          </div>

          <div className="sushi-chef-card">
            <img src={chefImage} alt="Chef Marco Tanaka" className="sushi-chef-image" />
            <div className="sushi-chef-info">
              <h3>{t.about.chef.name}</h3>
              <p className="sushi-chef-role">{t.about.chef.role}</p>
              <p className="sushi-chef-bio">{t.about.chef.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="sushi-section">
        <div className="sushi-container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="sushi-heading-2 sushi-text-gold">{t.about.philosophy.title}</h2>
          <div className="sushi-divider" />
          <p
            style={{
              color: 'var(--sushi-gray-light)',
              lineHeight: 2,
              fontSize: '1.1rem',
              fontStyle: 'italic'
            }}
          >
            "{t.about.philosophy.text}"
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="sushi-section" style={{ background: 'var(--sushi-bg-secondary)' }}>
        <div className="sushi-container">
          <div className="sushi-section-header">
            <h2 className="sushi-heading-2">{t.about.awards.title}</h2>
            <div className="sushi-divider" />
          </div>

          <div className="sushi-awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="sushi-award-item">
                <div className="sushi-award-icon">{award.icon}</div>
                <h4>{award.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
