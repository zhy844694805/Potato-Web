import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { teamMemberSchema } from '../../utils/schemas'
import { teamMembers, teamStats } from '../../data/team'
import './Team.css'

function Team() {
  const { t, language } = useLanguageText()

  const seoData = {
    zh: {
      title: '我们的团队',
      description: '认识我们专业的技术团队，包括开发者、设计师和本地化顾问',
      keywords: '团队,开发者,设计师,技术团队,专业服务'
    },
    en: {
      title: 'Our Team',
      description: 'Meet our professional team of developers, designers, and localization consultants',
      keywords: 'team,developers,designers,tech team,professional services'
    },
    it: {
      title: 'Il Nostro Team',
      description: 'Incontra il nostro team professionale di sviluppatori, designer e consulenti di localizzazione',
      keywords: 'team,sviluppatori,designer,team tecnico,servizi professionali'
    }
  }

  return (
    <div className="team-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/team"
      />
      <StructuredData data={teamMembers.map(member => teamMemberSchema(member, language))} />

      <div className="container">
        <section className="team-hero">
          <h1 className="page-title">
            {t('我们的团队', 'Our Team', 'Il Nostro Team')}
          </h1>
          <p className="page-subtitle">
            {t(
              '一支多元化的专业团队，结合技术专长和本地化经验',
              'A diverse professional team combining technical expertise and localization experience',
              'Un team professionale diversificato che combina competenze tecniche ed esperienza di localizzazione'
            )}
          </p>
        </section>

        <section className="team-stats">
          {Object.values(teamStats).map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label[language] || stat.label.en}</span>
            </div>
          ))}
        </section>

        <section className="team-grid">
          {teamMembers.map(member => (
            <article key={member.id} className="team-card">
              <div className="team-avatar">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name[language] || member.name.en}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className="avatar-fallback" style={{ display: member.avatar ? 'none' : 'flex' }}>
                  {(member.name[language] || member.name.en).charAt(0)}
                </div>
              </div>

              <div className="team-info">
                <h2 className="team-name">{member.name[language] || member.name.en}</h2>
                <p className="team-role">{member.role[language] || member.role.en}</p>
                <p className="team-bio">{member.bio[language] || member.bio.en}</p>

                {member.skills && member.skills.length > 0 && (
                  <div className="team-skills">
                    <h3 className="skills-title">{t('技能', 'Skills', 'Competenze')}</h3>
                    <div className="skills-list">
                      {member.skills.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                          <span className="skill-name">
                            {typeof skill.name === 'object' ? (skill.name[language] || skill.name.en) : skill.name}
                          </span>
                          <div className="skill-bar">
                            <div
                              className="skill-progress"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
            </article>
          ))}
        </section>

        <section className="team-cta">
          <h2>{t('加入我们', 'Join Our Team', 'Unisciti a Noi')}</h2>
          <p>
            {t(
              '我们随时欢迎有才华的人加入我们的团队',
              'We are always looking for talented people to join our team',
              'Siamo sempre alla ricerca di persone di talento per unirsi al nostro team'
            )}
          </p>
          <a href="mailto:careers@aimodel.it" className="cta-button">
            {t('联系我们', 'Contact Us', 'Contattaci')}
          </a>
        </section>
      </div>
    </div>
  )
}

export default Team
