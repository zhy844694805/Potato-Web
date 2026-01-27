import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZAdmin } from '../context/TZAdminContext';
import { useDebounce } from '../hooks/useDebounce';
import { translations, siteConfig } from '../data/siteData';

export default function TZSearchBar({ onClose }) {
  const { t } = useTZLanguage();
  const { getActiveProducts } = useTZAdmin();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const basePath = '/demo/tech-zone';

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Search when query changes
  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      const products = getActiveProducts();
      const lowercaseQuery = debouncedQuery.toLowerCase();
      const filtered = products.filter(p =>
        p.name.en.toLowerCase().includes(lowercaseQuery) ||
        p.name.zh.includes(debouncedQuery) ||
        p.name.it.toLowerCase().includes(lowercaseQuery) ||
        p.brand.toLowerCase().includes(lowercaseQuery) ||
        p.category.toLowerCase().includes(lowercaseQuery)
      ).slice(0, 6);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults(filtered);
       
      setIsOpen(true);
    } else {
       
      setResults([]);
       
      setIsOpen(false);
    }
  }, [debouncedQuery, getActiveProducts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`${basePath}/shop?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setIsOpen(false);
      onClose?.();
    }
  };

  const handleResultClick = () => {
    setQuery('');
    setIsOpen(false);
    onClose?.();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onClose?.();
    }
  };

  return (
    <div className="tz-search-bar">
      <form onSubmit={handleSubmit} className="tz-search-form">
        <div className="tz-search-input-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t(translations.nav.search)}
            className="tz-search-input"
          />
          {query && (
            <button
              type="button"
              className="tz-search-clear"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
        <button type="submit" className="tz-search-submit">
          Search
        </button>
        {onClose && (
          <button type="button" className="tz-search-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </form>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="tz-search-results">
          {results.map(product => (
            <Link
              key={product.id}
              to={`${basePath}/product/${product.id}`}
              className="tz-search-result"
              onClick={handleResultClick}
            >
              <img src={product.images[0]} alt={t(product.name)} />
              <div className="tz-search-result-info">
                <span className="tz-search-result-name">{t(product.name)}</span>
                <span className="tz-search-result-price">
                  {siteConfig.currency.symbol}{product.price.toFixed(2)}
                </span>
              </div>
            </Link>
          ))}
          <Link
            to={`${basePath}/shop?search=${encodeURIComponent(query)}`}
            className="tz-search-view-all"
            onClick={handleResultClick}
          >
            View all results for "{query}"
          </Link>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="tz-search-results">
          <p className="tz-search-no-results">{t(translations.common.noResults)}</p>
        </div>
      )}
    </div>
  );
}
