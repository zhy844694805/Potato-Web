import './Loading.css'

function Loading({ text }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  )
}

export default Loading
