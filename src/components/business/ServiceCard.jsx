import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { trackServiceView } from '../Analytics'
import './ServiceCard.css'

function ServiceCard({ service }) {
  const { language } = useLanguage()
  const navigate = useNavigate()

  const handleClick = () => {
    trackServiceView(service.id, service.title[language])
    navigate(`/services/${service.id}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div className="service-card" onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title[language]}</h3>
      <p className="service-description">{service.description[language]}</p>
      <div className="service-tags">
        {service.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag[language]}
          </span>
        ))}
      </div>
      <div className="service-arrow">→</div>
    </div>
  )
}

export default ServiceCard
