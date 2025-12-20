import { useLanguage } from '../../context/LanguageContext'
import './TestimonialCard.css'

function TestimonialCard({ testimonial }) {
  const { language } = useLanguage()

  const renderStars = (rating) => {
    return (
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        {renderStars(testimonial.rating)}
      </div>

      <div className="testimonial-content">
        <p className="testimonial-quote">"{testimonial.content[language]}"</p>
      </div>

      <div className="testimonial-author">
        <div className="author-name">{testimonial.name[language]}</div>
        <div className="author-role">
          {testimonial.role[language]} · {testimonial.company[language]}
        </div>
      </div>

      <div className="testimonial-tags">
        {testimonial.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag[language]}
          </span>
        ))}
      </div>

      <div className="testimonial-date">{testimonial.date}</div>
    </div>
  )
}

export default TestimonialCard
