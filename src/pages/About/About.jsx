import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { organizationSchema } from '../../utils/schemas'
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
