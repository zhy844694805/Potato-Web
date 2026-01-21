import { useTZLanguage } from '../context/TZLanguageContext';
import { siteConfig, translations, features } from '../data/siteData';

export default function AboutPage() {
  const { t } = useTZLanguage();
  const about = translations.about;

  const stats = [
    { value: '50K+', label: { zh: '满意客户', en: 'Happy Customers', it: 'Clienti Soddisfatti' } },
    { value: '1000+', label: { zh: '产品种类', en: 'Products', it: 'Prodotti' } },
    { value: '15+', label: { zh: '品牌合作', en: 'Brand Partners', it: 'Partner Brand' } },
    { value: '99%', label: { zh: '好评率', en: 'Satisfaction Rate', it: 'Tasso di Soddisfazione' } }
  ];

  const values = [
    {
      icon: '🎯',
      title: { zh: '品质优先', en: 'Quality First', it: 'Qualità Prima' },
      description: {
        zh: '我们只销售经过严格筛选的优质产品，确保每一件商品都能满足您的期望。',
        en: 'We only sell carefully selected premium products, ensuring every item meets your expectations.',
        it: 'Vendiamo solo prodotti premium accuratamente selezionati, garantendo che ogni articolo soddisfi le tue aspettative.'
      }
    },
    {
      icon: '💡',
      title: { zh: '创新科技', en: 'Innovation', it: 'Innovazione' },
      description: {
        zh: '紧跟科技前沿，为您带来最新、最酷的电子产品。',
        en: 'Staying at the forefront of technology, bringing you the latest and coolest electronics.',
        it: 'Restare all\'avanguardia della tecnologia, portandoti l\'elettronica più recente e innovativa.'
      }
    },
    {
      icon: '🤝',
      title: { zh: '客户至上', en: 'Customer Focus', it: 'Focus sul Cliente' },
      description: {
        zh: '您的满意是我们的追求。我们提供全方位的售前售后服务。',
        en: 'Your satisfaction is our pursuit. We provide comprehensive pre and post-sales service.',
        it: 'La tua soddisfazione è il nostro obiettivo. Forniamo un servizio pre e post-vendita completo.'
      }
    },
    {
      icon: '🌍',
      title: { zh: '可持续发展', en: 'Sustainability', it: 'Sostenibilità' },
      description: {
        zh: '我们致力于环保包装和负责任的产品回收计划。',
        en: 'We are committed to eco-friendly packaging and responsible product recycling programs.',
        it: 'Siamo impegnati in imballaggi eco-friendly e programmi di riciclo responsabile dei prodotti.'
      }
    }
  ];

  const team = [
    {
      name: 'Marco Chen',
      role: { zh: '创始人兼CEO', en: 'Founder & CEO', it: 'Fondatore e CEO' },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80'
    },
    {
      name: 'Sofia Li',
      role: { zh: '首席运营官', en: 'Chief Operating Officer', it: 'Direttore Operativo' },
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80'
    },
    {
      name: 'Alessandro Wu',
      role: { zh: '技术总监', en: 'Tech Director', it: 'Direttore Tecnico' },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80'
    },
    {
      name: 'Elena Zhang',
      role: { zh: '客户体验主管', en: 'Customer Experience Lead', it: 'Responsabile Esperienza Cliente' },
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80'
    }
  ];

  return (
    <div className="tz-about-page">
      {/* Hero */}
      <section className="tz-about-hero">
        <div className="tz-container">
          <h1>{t(about.title)}</h1>
          <p>{t(siteConfig.description)}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="tz-about-stats">
        <div className="tz-container">
          <div className="tz-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="tz-stat-item">
                <span className="tz-stat-value">{stat.value}</span>
                <span className="tz-stat-label">{t(stat.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="tz-about-section">
        <div className="tz-container">
          <div className="tz-about-content">
            <div className="tz-about-text">
              <h2>{t(about.story)}</h2>
              <p>
                {t({
                  zh: '科技领域成立于2020年，由一群热爱科技的年轻人创立。我们的目标很简单：让每个人都能轻松获得最新的科技产品。',
                  en: 'TechZone was founded in 2020 by a group of young tech enthusiasts. Our goal is simple: to make the latest tech accessible to everyone.',
                  it: 'TechZone è stata fondata nel 2020 da un gruppo di giovani appassionati di tecnologia. Il nostro obiettivo è semplice: rendere la tecnologia più recente accessibile a tutti.'
                })}
              </p>
              <p>
                {t({
                  zh: '从最初的小型网店发展到如今服务数万客户的电商平台，我们始终坚持为客户提供最优质的产品和服务。我们与全球顶级品牌建立了长期合作关系，确保每一件产品都是正品。',
                  en: 'From a small online store to an e-commerce platform serving tens of thousands of customers, we have always been committed to providing the best products and services. We have established long-term partnerships with top global brands to ensure every product is authentic.',
                  it: 'Da un piccolo negozio online a una piattaforma e-commerce che serve decine di migliaia di clienti, ci siamo sempre impegnati a fornire i migliori prodotti e servizi. Abbiamo stabilito partnership a lungo termine con i migliori brand globali per garantire l\'autenticità di ogni prodotto.'
                })}
              </p>
            </div>
            <div className="tz-about-image">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80"
                alt="TechZone Office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="tz-about-section tz-about-mission">
        <div className="tz-container">
          <h2>{t(about.mission)}</h2>
          <p className="tz-mission-text">
            {t({
              zh: '让科技改变生活，让每个人都能享受智能时代带来的便利与乐趣。',
              en: 'Let technology change lives, enabling everyone to enjoy the convenience and joy of the smart era.',
              it: 'Lasciare che la tecnologia cambi la vita, permettendo a tutti di godere della convenienza e della gioia dell\'era digitale.'
            })}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="tz-about-section">
        <div className="tz-container">
          <h2>{t(about.values)}</h2>
          <div className="tz-values-grid">
            {values.map((value, index) => (
              <div key={index} className="tz-value-card">
                <span className="tz-value-icon">{value.icon}</span>
                <h3>{t(value.title)}</h3>
                <p>{t(value.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="tz-about-section tz-about-team">
        <div className="tz-container">
          <h2>{t({ zh: '我们的团队', en: 'Our Team', it: 'Il Nostro Team' })}</h2>
          <div className="tz-team-grid">
            {team.map((member, index) => (
              <div key={index} className="tz-team-card">
                <div className="tz-team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{t(member.role)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="tz-about-section tz-about-features">
        <div className="tz-container">
          <h2>{t({ zh: '为什么选择我们', en: 'Why Choose Us', it: 'Perché Sceglierci' })}</h2>
          <div className="tz-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="tz-feature-card">
                <span className="tz-feature-icon">{feature.icon}</span>
                <h3>{t(feature.title)}</h3>
                <p>{t(feature.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
