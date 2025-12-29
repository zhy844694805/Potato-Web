import { useLanguage } from '../../context/LanguageContext'
import './SearchInput.css'

const defaultPlaceholders = {
  zh: '搜索文章...',
  en: 'Search articles...',
  it: 'Cerca articoli...'
}

function SearchInput({ value, onChange, placeholder, className = '' }) {
  const { language } = useLanguage()

  const placeholderText = placeholder || defaultPlaceholders[language] || defaultPlaceholders.en

  return (
    <div className={`search-input-wrapper ${className}`}>
      <svg
        className="search-input-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  )
}

export default SearchInput
