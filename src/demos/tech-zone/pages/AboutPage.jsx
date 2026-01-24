import { useTZLanguage } from '../context/TZLanguageContext';
import { siteConfig, translations, features } from '../data/siteData';

export default function AboutPage() {
  const { t } = useTZLanguage();
  const about = translations.about;

  const stats = [
    { value: '98.4%', label: { zh: '系统正常运行时间', en: 'System Uptime', it: 'Tempo di Attività' }, code: 'UPTIME' },
    { value: '50K+', label: { zh: '已连接节点', en: 'Connected Nodes', it: 'Nodi Connessi' }, code: 'NODES' },
    { value: '150+', label: { zh: '全球合作伙伴', en: 'Global Protocols', it: 'Protocolli Globali' }, code: 'PRTCLS' },
    { value: '24/7', label: { zh: '监控覆盖', en: 'Monitoring', it: 'Monitoraggio' }, code: 'MNTR' }
  ];

  const values = [
    {
      icon: '01',
      title: { zh: '精准', en: 'Precision', it: 'Precisione' },
      description: {
        zh: '零误差容忍。我们筛选的产品如同经过编译的代码一样精确。',
        en: 'Zero error tolerance. Our curated products are as precise as compiled code.',
        it: 'Tolleranza zero errori. I nostri prodotti curati sono precisi come codice compilato.'
      }
    },
    {
      icon: '02',
      title: { zh: '创新', en: 'Innovation', it: 'Innovazione' },
      description: {
        zh: '始终运行在最新版本。我们为您带来科技前沿的测试版体验。',
        en: 'Always running on the latest build. We bring you the bleeding-edge beta experience.',
        it: 'Sempre in esecuzione sull\'ultima build. Ti offriamo l\'esperienza beta all\'avanguardia.'
      }
    },
    {
      icon: '03',
      title: { zh: '安全', en: 'Security', it: 'Sicurezza' },
      description: {
        zh: '端到端加密的购物体验。您的满意度和隐私受到最高级别的保护。',
        en: 'End-to-end encrypted shopping experience. Your satisfaction and privacy are protected at the kernel level.',
        it: 'Esperienza di acquisto crittografata end-to-end. La tua soddisfazione e privacy sono protette a livello di kernel.'
      }
    }
  ];

  const team = [
    {
      name: 'Marco Chen',
      role: 'SYS_ADMIN // CEO',
      status: 'ONLINE',
      image: '/images/blog/api-design.jpg' 
    },
    {
      name: 'Sofia Li',
      role: 'OPS_LEAD // COO',
      status: 'BUSY',
      image: '/images/blog/devops.jpg'
    },
    {
      name: 'Alex Wu',
      role: 'NET_ARCH // CTO',
      status: 'ONLINE',
      image: '/images/blog/security.jpg'
    },
    {
      name: 'Elena Zhang',
      role: 'UX_CORE // CPO',
      status: 'AWAY',
      image: '/images/blog/react-perf.jpg'
    }
  ];

  return (
    <div className="tz-about-page">
      {/* Cyber Hero */}
      <section className="tz-about-hero-cyber">
        <div className="tz-hero-grid-bg"></div>
        <div className="tz-container">
          <div className="tz-hero-cyber-content">
            <div className="tz-glitch-wrapper">
              <h1 className="tz-glitch-text" data-text={t(about.title)}>{t(about.title)}</h1>
            </div>
            <p className="tz-terminal-text">
              <span className="tz-prompt">root@techzone:~$</span> {t(about.subtitle)}
              <span className="tz-cursor">_</span>
            </p>
          </div>
        </div>
      </section>

      {/* System Metrics */}
      <section className="tz-section tz-metrics-section">
        <div className="tz-container">
          <div className="tz-section-header-cyber">
            <span className="tz-section-idx">01</span>
            <h2>SYSTEM_METRICS</h2>
            <div className="tz-line-deco"></div>
          </div>
          <div className="tz-stats-grid-cyber">
            {stats.map((stat, index) => (
              <div key={index} className="tz-stat-card-cyber">
                <div className="tz-stat-header">
                  <span className="tz-stat-code">[{stat.code}]</span>
                  <div className="tz-status-dot"></div>
                </div>
                <span className="tz-stat-value-cyber">{stat.value}</span>
                <span className="tz-stat-label-cyber">{t(stat.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initialization Sequence (Story) */}
      <section className="tz-section tz-story-section">
        <div className="tz-container">
          <div className="tz-split-layout">
            <div className="tz-story-visual">
              <div className="tz-image-frame-cyber">
                <img
                  src="/images/blog/server-room.jpg" 
                  alt="Server Room"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=600&q=80'; // Fallback
                  }}
                />
                <div className="tz-frame-corner tl"></div>
                <div className="tz-frame-corner tr"></div>
                <div className="tz-frame-corner bl"></div>
                <div className="tz-frame-corner br"></div>
              </div>
            </div>
            <div className="tz-story-content">
              <div className="tz-section-header-cyber">
                <span className="tz-section-idx">02</span>
                <h2>{t(about.ourStory)}</h2>
              </div>
              <div className="tz-terminal-log">
                <div className="tz-log-entry">
                  <span className="tz-log-time">[2020.01.15]</span>
                  <span className="tz-log-msg">{t({
                    zh: '启动核心模块。TechZone 协议v1.0 上线。',
                    en: 'Initiating core modules. TechZone Protocol v1.0 online.',
                    it: 'Avvio moduli core. Protocollo TechZone v1.0 online.'
                  })}</span>
                </div>
                <div className="tz-log-entry">
                  <span className="tz-log-time">[2021.06.20]</span>
                  <span className="tz-log-msg">{t({
                    zh: '带宽扩展。用户基数突破 10,000 节点。',
                    en: 'Bandwidth expansion. User base exceeds 10,000 nodes.',
                    it: 'Espansione larghezza di banda. Base utenti supera 10.000 nodi.'
                  })}</span>
                </div>
                <div className="tz-log-entry">
                  <span className="tz-log-time">[2023.11.11]</span>
                  <span className="tz-log-msg active">{t({
                    zh: '系统全面升级。建立全球物流网络接口。',
                    en: 'Full system upgrade. Established global logistics network interface.',
                    it: 'Aggiornamento completo sistema. Interfaccia rete logistica globale stabilita.'
                  })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Protocols (Values) */}
      <section className="tz-section tz-values-section">
        <div className="tz-container">
          <div className="tz-section-header-cyber">
            <span className="tz-section-idx">03</span>
            <h2>{t(about.ourValues)}</h2>
            <div className="tz-line-deco"></div>
          </div>
          <div className="tz-values-grid-cyber">
            {values.map((value, index) => (
              <div key={index} className="tz-value-card-cyber">
                <div className="tz-value-icon-cyber">{value.icon}</div>
                <h3>{t(value.title)}</h3>
                <p>{t(value.description)}</p>
                <div className="tz-card-scanline"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Units (Team) */}
      <section className="tz-section tz-team-section">
        <div className="tz-container">
          <div className="tz-section-header-cyber">
            <span className="tz-section-idx">04</span>
            <h2>{t(about.ourTeam)}</h2>
            <div className="tz-line-deco"></div>
          </div>
          <div className="tz-team-grid-cyber">
            {team.map((member, index) => (
              <div key={index} className="tz-team-card-cyber">
                <div className="tz-team-visual">
                  <div className="tz-team-img-wrapper">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className={`tz-unit-status ${member.status.toLowerCase()}`}>
                    {member.status}
                  </div>
                </div>
                <div className="tz-team-info">
                  <h3>{member.name}</h3>
                  <p className="tz-mono-text">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}