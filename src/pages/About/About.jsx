import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { organizationSchema } from '../../utils/schemas'
import { teamMembers, teamStats } from '../../data/team'
import './About.css'

function About() {
  const { language } = useLanguage()

  const seoData = {
    zh: {
      title: '关于我',
      description: '独立开发者，专注于Web开发和全栈解决方案，为个人和小型企业提供专业的技术服务',
      keywords: '独立开发者,全栈开发,Web开发,React开发,技术顾问'
    },
    en: {
      title: 'About Me',
      description: 'Independent developer focused on web development and full-stack solutions for individuals and small businesses',
      keywords: 'independent developer,full stack,web development,React,tech consultant'
    },
    it: {
      title: 'Chi Sono',
      description: 'Sviluppatore indipendente focalizzato sullo sviluppo web e soluzioni full-stack per privati e piccole imprese',
      keywords: 'sviluppatore indipendente,full stack,sviluppo web,React,consulente tecnico'
    }
  }

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  return (
    <div className="about-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/about"
      />
      <StructuredData data={organizationSchema(language)} />
      <div className="container">
        <section className="about-hero">
          <h1 className="page-title">
            {t('关于我', 'About Me', 'Chi Sono')}
          </h1>
          <p className="page-subtitle">
            {t('用代码创造价值，用技术解决问题', 'Creating value with code, solving problems with technology', 'Creare valore con il codice, risolvere problemi con la tecnologia')}
          </p>
        </section>

        <section className="about-intro">
          <h2>{t('个人简介', 'Introduction', 'Presentazione')}</h2>
          <p>
            {t(
              '你好！我是一名独立开发者，专注于为客户提供高质量的技术解决方案。\n\n作为独立开发者，我能够全身心投入每一个项目，亲自把控每一个细节，确保交付的质量。直接沟通、快速响应、灵活调整——这是独立开发的优势。我会倾听你的需求，理解你的目标，用最合适的技术方案帮你实现想法。\n\n我专注于Web开发和全栈解决方案，熟悉React、Vue、Node.js等现代化技术栈。无论是企业官网、管理系统，还是数据平台，我都能提供专业的开发服务。每一行代码都经过深思熟虑，每一个功能都追求最佳实践。\n\n选择独立开发者，你得到的是一个会全力以赴、把你的项目当作自己项目来做的合作伙伴。让我们一起，用技术创造价值。',
              'Hello! I\'m an independent developer focused on delivering high-quality technical solutions for clients.\n\nAs an independent developer, I can fully commit to every project, personally overseeing every detail to ensure quality delivery. Direct communication, quick response, flexible adjustments—these are the advantages of independent development. I listen to your needs, understand your goals, and use the most appropriate technical solutions to bring your ideas to life.\n\nI specialize in web development and full-stack solutions, proficient in modern technology stacks like React, Vue, and Node.js. Whether it\'s corporate websites, management systems, or data platforms, I can provide professional development services. Every line of code is carefully considered, every feature follows best practices.\n\nChoosing an independent developer means getting a partner who will go all out and treat your project as their own. Let\'s create value together with technology.',
              'Ciao! Sono uno sviluppatore indipendente focalizzato sulla fornitura di soluzioni tecniche di alta qualità per i clienti.\n\nCome sviluppatore indipendente, posso dedicarmi completamente ad ogni progetto, supervisionando personalmente ogni dettaglio per garantire una consegna di qualità. Comunicazione diretta, risposta rapida, aggiustamenti flessibili: questi sono i vantaggi dello sviluppo indipendente.\n\nMi specializzo nello sviluppo web e soluzioni full-stack, esperto in stack tecnologici moderni come React, Vue e Node.js. Che si tratti di siti aziendali, sistemi gestionali o piattaforme dati, posso fornire servizi di sviluppo professionali.\n\nScegliere uno sviluppatore indipendente significa avere un partner che darà il massimo e tratterà il tuo progetto come se fosse il proprio. Creiamo valore insieme con la tecnologia.'
            )}
          </p>
        </section>

        <section className="about-team">
          <h2>{t('我们的团队', 'Our Team', 'Il Nostro Team')}</h2>
          <p className="team-intro">
            {t(
              '我们是一支多元化的团队，结合技术专长和本地化经验，为客户提供全方位的数字化服务。',
              'We are a diverse team combining technical expertise with localization experience to provide comprehensive digital services.',
              'Siamo un team diversificato che combina competenze tecniche ed esperienza di localizzazione per fornire servizi digitali completi.'
            )}
          </p>
          <div className="team-stats">
            {Object.values(teamStats).map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label[language] || stat.label.en}</span>
              </div>
            ))}
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  <div className="avatar-placeholder">
                    {(member.name[language] || member.name.en).charAt(0)}
                  </div>
                </div>
                <h3 className="team-name">{member.name[language] || member.name.en}</h3>
                <p className="team-role">{member.role[language] || member.role.en}</p>
                <p className="team-bio">{member.bio[language] || member.bio.en}</p>
                {member.skills && (
                  <div className="team-skills">
                    {member.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {typeof skill.name === 'object' ? (skill.name[language] || skill.name.en) : skill.name}
                      </span>
                    ))}
                  </div>
                )}
                <div className="team-social">
                  {member.social?.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} aria-label="Email">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-values">
          <h2>{t('工作理念', 'Work Philosophy', 'Filosofia di Lavoro')}</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>{t('用户至上', 'Users First', 'Utenti Prima di Tutto')}</h3>
              <p>
                {t('好的产品应该以用户为中心。我会认真倾听需求，理解真正的痛点，用最合适的技术方案解决实际问题，而不是为了炫技而堆砌复杂功能。',
                  'Good products should be user-centered. I listen carefully to needs, understand real pain points, and use the most appropriate technical solutions to solve actual problems.',
                  'I buoni prodotti devono essere centrati sull\'utente. Ascolto attentamente le esigenze, comprendo i veri problemi e uso le soluzioni tecniche più appropriate.')}
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>{t('真诚沟通', 'Honest Communication', 'Comunicazione Onesta')}</h3>
              <p>
                {t('我会如实告知项目进度和遇到的问题，不会为了接单而过度承诺。做得到的会全力以赴，做不到的会坦诚说明。信任是合作的基础，我珍惜每一份信任。',
                  'I truthfully communicate project progress and challenges, never over-promising just to close a deal. Trust is the foundation of collaboration.',
                  'Comunico sinceramente i progressi e le sfide del progetto, senza mai promettere troppo. La fiducia è la base della collaborazione.')}
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔨</div>
              <h3>{t('精益求精', 'Pursuit of Excellence', 'Ricerca dell\'Eccellenza')}</h3>
              <p>
                {t('我对代码质量有严格的要求。每一行代码都要写得清晰易懂，每一个功能都要测试完善。我把每个项目都当作自己的作品，用心打磨，追求卓越。',
                  'I have strict requirements for code quality. Every line of code should be clear, every feature thoroughly tested. I treat each project as my own work.',
                  'Ho requisiti rigorosi per la qualità del codice. Ogni riga deve essere chiara, ogni funzione testata. Tratto ogni progetto come mio.')}
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>{t('持续学习', 'Continuous Learning', 'Apprendimento Continuo')}</h3>
              <p>
                {t('技术日新月异，保持学习是必须的。我会关注行业动态，学习新技术，但不会盲目追赶潮流。我相信，选择经过验证、真正好用的工具，比使用最新最炫的技术更重要。',
                  'Technology evolves rapidly, and continuous learning is essential. I stay informed about industry trends but don\'t blindly chase fads.',
                  'La tecnologia evolve rapidamente e l\'apprendimento continuo è essenziale. Seguo le tendenze del settore ma non inseguo ciecamente le mode.')}
              </p>
            </div>
          </div>
        </section>

        <section className="about-skills">
          <h2>{t('技术栈', 'Tech Stack', 'Stack Tecnologico')}</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>{t('前端开发', 'Frontend', 'Frontend')}</h3>
              <ul>
                <li>React / Vue.js</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML5 / CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>{t('后端开发', 'Backend', 'Backend')}</h3>
              <ul>
                <li>Node.js</li>
                <li>Express / Koa</li>
                <li>RESTful API</li>
                <li>Database (MySQL/MongoDB)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>{t('工具 & 其他', 'Tools & Others', 'Strumenti & Altro')}</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>Vite / Webpack</li>
                <li>UI/UX Design Basics</li>
                <li>Agile Development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>{t('开始合作', 'Let\'s Work Together', 'Lavoriamo Insieme')}</h2>
          <p>
            {t('如果你正在寻找一个认真负责、专业可靠的开发者，我很乐意和你聊聊你的项目。让我们一起探讨需求，制定方案，用技术实现你的想法。期待与你合作。',
              'If you\'re looking for a responsible and professional developer, I\'d love to discuss your project. Let\'s explore your requirements together and bring your ideas to life with technology.',
              'Se stai cercando uno sviluppatore responsabile e professionale, sarò felice di discutere il tuo progetto. Esploriamo insieme le tue esigenze e diamo vita alle tue idee con la tecnologia.')}
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
