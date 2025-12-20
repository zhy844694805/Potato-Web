import './SectionHeader.css'

function SectionHeader({ number, title, description }) {
  return (
    <div className="section-header">
      {number && <div className="section-number">{number}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeader
