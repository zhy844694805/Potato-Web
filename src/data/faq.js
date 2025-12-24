// FAQ categories
export const faqCategories = [
  {
    id: 'process',
    name: { zh: '服务流程', en: 'Service Process', it: 'Processo di Servizio' },
    icon: '📋'
  },
  {
    id: 'technical',
    name: { zh: '技术问题', en: 'Technical Questions', it: 'Domande Tecniche' },
    icon: '💻'
  }
]

// FAQ data
export const faqs = [
  // Service Process Category
  {
    id: 'consultation-process',
    category: 'process',
    question: {
      zh: '咨询流程是怎样的？',
      en: 'What is the consultation process?',
      it: 'Qual è il processo di consulenza?'
    },
    answer: {
      zh: '首先，您可以通过网站联系表单或邮件与我联系，描述您的项目需求。我会在24小时内回复，并安排一次免费的线上沟通（约30分钟），了解您的详细需求。之后我会提供一份项目方案和报价供您参考。',
      en: 'First, you can contact me through the website contact form or email, describing your project requirements. I will reply within 24 hours and schedule a free online consultation (about 30 minutes) to understand your detailed needs. Then I will provide a project proposal and quote for your reference.',
      it: 'Innanzitutto, puoi contattarmi tramite il modulo di contatto del sito o email, descrivendo le tue esigenze. Risponderò entro 24 ore e fisserò una consulenza online gratuita (circa 30 minuti) per comprendere le tue necessità. Successivamente fornirò una proposta di progetto e un preventivo.'
    }
  },
  {
    id: 'development-timeline',
    category: 'process',
    question: {
      zh: '开发周期一般需要多久？',
      en: 'How long does development typically take?',
      it: 'Quanto tempo richiede tipicamente lo sviluppo?'
    },
    answer: {
      zh: '开发周期取决于项目复杂度。一个简单的单页网站通常需要1-2周；中等复杂的企业官网需要3-4周；全栈应用可能需要6-12周。我会在项目开始前提供详细的时间表。',
      en: 'Development time depends on project complexity. A simple single-page website typically takes 1-2 weeks; a medium-complexity corporate website takes 3-4 weeks; full-stack applications may take 6-12 weeks. I will provide a detailed timeline before the project starts.',
      it: 'I tempi di sviluppo dipendono dalla complessità del progetto. Un semplice sito one-page richiede 1-2 settimane; un sito aziendale di media complessità 3-4 settimane; applicazioni full-stack possono richiedere 6-12 settimane. Fornirò una timeline dettagliata prima dell\'inizio del progetto.'
    }
  },
  {
    id: 'payment-method',
    category: 'process',
    question: {
      zh: '付款方式是怎样的？',
      en: 'What are the payment terms?',
      it: 'Quali sono i termini di pagamento?'
    },
    answer: {
      zh: '一般采用分期付款：项目开始前支付30%定金，中期验收后支付40%，项目交付后支付剩余30%。支持银行转账、支付宝、PayPal等多种付款方式。',
      en: 'Generally, we use installment payments: 30% deposit before project starts, 40% after mid-term review, and remaining 30% upon delivery. We support various payment methods including bank transfer, PayPal, and Stripe.',
      it: 'Generalmente utilizziamo pagamenti rateali: 30% di anticipo prima dell\'inizio del progetto, 40% dopo la revisione intermedia e il restante 30% alla consegna. Accettiamo bonifico bancario, PayPal e Stripe.'
    }
  },
  {
    id: 'after-sales',
    category: 'process',
    question: {
      zh: '售后服务包括哪些？',
      en: 'What does after-sales service include?',
      it: 'Cosa include il servizio post-vendita?'
    },
    answer: {
      zh: '每个项目都包含一定期限的免费维护期（30-90天，视套餐而定），包括bug修复、小功能调整等。维护期结束后，可以选择购买月度或年度维护服务，或按需付费。',
      en: 'Each project includes a free maintenance period (30-90 days, depending on the package), including bug fixes and minor adjustments. After the maintenance period, you can choose monthly or annual maintenance services, or pay as needed.',
      it: 'Ogni progetto include un periodo di manutenzione gratuito (30-90 giorni, a seconda del pacchetto), inclusa la correzione di bug e piccole modifiche. Dopo il periodo di manutenzione, puoi scegliere servizi mensili o annuali, oppure pagare a consumo.'
    }
  },
  {
    id: 'revision-policy',
    category: 'process',
    question: {
      zh: '修改次数有限制吗？',
      en: 'Are there limits on revisions?',
      it: 'Ci sono limiti alle revisioni?'
    },
    answer: {
      zh: '在开发过程中，每个阶段都有合理的修改机会。设计阶段通常包含2-3轮修改，开发阶段的功能调整也在合理范围内无额外收费。大规模的需求变更可能需要额外评估。',
      en: 'During development, each stage includes reasonable revision opportunities. The design phase typically includes 2-3 rounds of revisions, and functional adjustments during development are included within reasonable limits. Major requirement changes may need additional evaluation.',
      it: 'Durante lo sviluppo, ogni fase include opportunità di revisione ragionevoli. La fase di design include tipicamente 2-3 round di revisioni, e gli aggiustamenti funzionali durante lo sviluppo sono inclusi entro limiti ragionevoli. Modifiche sostanziali potrebbero richiedere una valutazione aggiuntiva.'
    }
  },
  {
    id: 'communication',
    category: 'process',
    question: {
      zh: '项目进行中如何沟通？',
      en: 'How do we communicate during the project?',
      it: 'Come comunichiamo durante il progetto?'
    },
    answer: {
      zh: '我会定期（通常每周）提供项目进度更新。日常沟通可通过微信、邮件或其他您偏好的方式。重要节点会安排视频会议进行演示和讨论。',
      en: 'I provide regular project updates (usually weekly). Daily communication can be through email, Slack, or your preferred method. Video meetings are scheduled for important milestones for demos and discussions.',
      it: 'Fornisco aggiornamenti regolari sul progetto (di solito settimanali). La comunicazione quotidiana può avvenire via email, Slack o il metodo che preferisci. Le videochiamate sono programmate per i milestone importanti per demo e discussioni.'
    }
  },
  // Technical Questions Category
  {
    id: 'tech-stack',
    category: 'technical',
    question: {
      zh: '你使用什么技术栈？',
      en: 'What tech stack do you use?',
      it: 'Quale stack tecnologico utilizzi?'
    },
    answer: {
      zh: '前端主要使用React、Vue等现代框架，配合Vite构建工具。后端使用Node.js/Express或根据需求选择其他方案。数据库常用MongoDB、PostgreSQL、MySQL。会根据项目需求选择最合适的技术方案。',
      en: 'For frontend, I mainly use modern frameworks like React and Vue with Vite as the build tool. Backend uses Node.js/Express or other solutions based on requirements. Common databases include MongoDB, PostgreSQL, and MySQL. I choose the most suitable technology based on project needs.',
      it: 'Per il frontend, utilizzo principalmente framework moderni come React e Vue con Vite come strumento di build. Il backend usa Node.js/Express o altre soluzioni in base alle esigenze. I database comuni includono MongoDB, PostgreSQL e MySQL. Scelgo la tecnologia più adatta in base alle necessità del progetto.'
    }
  },
  {
    id: 'seo-optimization',
    category: 'technical',
    question: {
      zh: 'SEO优化包括哪些内容？',
      en: 'What does SEO optimization include?',
      it: 'Cosa include l\'ottimizzazione SEO?'
    },
    answer: {
      zh: 'SEO优化包括：语义化HTML结构、Meta标签优化、Open Graph社交分享优化、sitemap生成、robots.txt配置、页面加载速度优化、移动端适配、结构化数据（JSON-LD）等。',
      en: 'SEO optimization includes: semantic HTML structure, meta tag optimization, Open Graph social sharing optimization, sitemap generation, robots.txt configuration, page load speed optimization, mobile responsiveness, structured data (JSON-LD), and more.',
      it: 'L\'ottimizzazione SEO include: struttura HTML semantica, ottimizzazione meta tag, ottimizzazione Open Graph per la condivisione social, generazione sitemap, configurazione robots.txt, ottimizzazione velocità di caricamento, responsive mobile, dati strutturati (JSON-LD) e altro.'
    }
  },
  {
    id: 'performance',
    category: 'technical',
    question: {
      zh: '如何保证网站性能？',
      en: 'How do you ensure website performance?',
      it: 'Come garantisci le prestazioni del sito?'
    },
    answer: {
      zh: '我采用多种优化策略：代码分割与懒加载、图片优化与WebP格式、CSS/JS压缩、CDN部署、浏览器缓存策略、关键渲染路径优化等。目标是达到Google PageSpeed 90+分数。',
      en: 'I use multiple optimization strategies: code splitting and lazy loading, image optimization with WebP format, CSS/JS minification, CDN deployment, browser caching strategies, critical rendering path optimization, etc. The goal is to achieve 90+ Google PageSpeed scores.',
      it: 'Utilizzo molteplici strategie di ottimizzazione: code splitting e lazy loading, ottimizzazione immagini con formato WebP, minificazione CSS/JS, deployment CDN, strategie di caching del browser, ottimizzazione del critical rendering path, ecc. L\'obiettivo è raggiungere punteggi Google PageSpeed 90+.'
    }
  },
  {
    id: 'security',
    category: 'technical',
    question: {
      zh: '网站安全如何保障？',
      en: 'How is website security ensured?',
      it: 'Come viene garantita la sicurezza del sito?'
    },
    answer: {
      zh: '安全措施包括：HTTPS加密、输入验证与XSS防护、CSRF保护、安全的身份认证（JWT等）、定期依赖更新、安全的第三方服务集成。对于敏感数据会采用加密存储。',
      en: 'Security measures include: HTTPS encryption, input validation and XSS protection, CSRF protection, secure authentication (JWT, etc.), regular dependency updates, and secure third-party service integration. Sensitive data is stored with encryption.',
      it: 'Le misure di sicurezza includono: crittografia HTTPS, validazione input e protezione XSS, protezione CSRF, autenticazione sicura (JWT, ecc.), aggiornamenti regolari delle dipendenze e integrazione sicura di servizi di terze parti. I dati sensibili sono archiviati con crittografia.'
    }
  },
  {
    id: 'hosting',
    category: 'technical',
    question: {
      zh: '网站部署在哪里？',
      en: 'Where is the website hosted?',
      it: 'Dove viene ospitato il sito?'
    },
    answer: {
      zh: '根据项目需求，可以选择Vercel、Netlify（静态站点）、AWS、阿里云、腾讯云等主流云服务。我会帮助您选择性价比最高的方案，并提供部署和域名配置支持。',
      en: 'Depending on project needs, we can choose from Vercel, Netlify (static sites), AWS, or other major cloud services. I will help you choose the most cost-effective solution and provide deployment and domain configuration support.',
      it: 'A seconda delle esigenze del progetto, possiamo scegliere tra Vercel, Netlify (siti statici), AWS o altri importanti servizi cloud. Ti aiuterò a scegliere la soluzione più conveniente e fornirò supporto per il deployment e la configurazione del dominio.'
    }
  },
  {
    id: 'responsive-design',
    category: 'technical',
    question: {
      zh: '网站支持哪些设备？',
      en: 'What devices does the website support?',
      it: 'Quali dispositivi supporta il sito?'
    },
    answer: {
      zh: '所有网站都采用响应式设计，支持桌面电脑、平板、手机等各种设备。会在主流浏览器（Chrome、Firefox、Safari、Edge）上进行测试，确保一致的用户体验。',
      en: 'All websites use responsive design, supporting desktops, tablets, phones, and other devices. Testing is done on major browsers (Chrome, Firefox, Safari, Edge) to ensure a consistent user experience.',
      it: 'Tutti i siti utilizzano design responsive, supportando desktop, tablet, telefoni e altri dispositivi. I test vengono eseguiti sui principali browser (Chrome, Firefox, Safari, Edge) per garantire un\'esperienza utente coerente.'
    }
  }
]

// Helper functions
export const getFaqsByCategory = (categoryId) =>
  faqs.filter(faq => faq.category === categoryId)

export const getFaqById = (id) =>
  faqs.find(faq => faq.id === id)
