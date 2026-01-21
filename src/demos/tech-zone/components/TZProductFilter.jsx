import { useState } from 'react';
import { useTZLanguage } from '../context/TZLanguageContext';
import { translations, categories, brands } from '../data/siteData';

export default function TZProductFilter({
  selectedCategory,
  selectedBrand,
  priceRange,
  minRating,
  onSaleOnly,
  onFilterChange,
  onClearFilters,
  showMobileFilter,
  onCloseMobileFilter
}) {
  const { t } = useTZLanguage();
  const common = translations.common;
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  const handlePriceChange = (type, value) => {
    const newRange = { ...localPriceRange, [type]: value === '' ? null : Number(value) };
    setLocalPriceRange(newRange);
  };

  const applyPriceFilter = () => {
    onFilterChange('priceRange', localPriceRange);
  };

  const ratingOptions = [4, 3, 2, 1];

  return (
    <>
      {/* Mobile overlay */}
      {showMobileFilter && (
        <div className="tz-filter-overlay" onClick={onCloseMobileFilter} />
      )}

      <aside className={`tz-product-filter ${showMobileFilter ? 'mobile-open' : ''}`}>
        {/* Mobile Header */}
        <div className="tz-filter-mobile-header">
          <h3>{t(common.filter)}</h3>
          <button className="tz-filter-close" onClick={onCloseMobileFilter}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Categories */}
        <div className="tz-filter-section">
          <h4>{t(common.allCategories)}</h4>
          <ul className="tz-filter-list">
            <li>
              <button
                className={`tz-filter-btn ${!selectedCategory ? 'active' : ''}`}
                onClick={() => onFilterChange('category', null)}
              >
                {t(common.allCategories)}
              </button>
            </li>
            {categories.map(cat => (
              <li key={cat.id}>
                <button
                  className={`tz-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => onFilterChange('category', cat.id)}
                >
                  <span className="tz-filter-icon">{cat.icon}</span>
                  {t(cat.name)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div className="tz-filter-section">
          <h4>{t(common.allBrands)}</h4>
          <ul className="tz-filter-list">
            <li>
              <button
                className={`tz-filter-btn ${!selectedBrand ? 'active' : ''}`}
                onClick={() => onFilterChange('brand', null)}
              >
                {t(common.allBrands)}
              </button>
            </li>
            {brands.map(brand => (
              <li key={brand.id}>
                <button
                  className={`tz-filter-btn ${selectedBrand === brand.id ? 'active' : ''}`}
                  onClick={() => onFilterChange('brand', brand.id)}
                >
                  <span className="tz-filter-icon">{brand.logo}</span>
                  {brand.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="tz-filter-section">
          <h4>{t(common.priceRange)}</h4>
          <div className="tz-price-inputs">
            <input
              type="number"
              placeholder="Min"
              value={localPriceRange.min || ''}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              min="0"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              value={localPriceRange.max || ''}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              min="0"
            />
            <button className="tz-btn-apply" onClick={applyPriceFilter}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Rating */}
        <div className="tz-filter-section">
          <h4>{t(common.reviews)}</h4>
          <ul className="tz-filter-list">
            <li>
              <button
                className={`tz-filter-btn ${!minRating ? 'active' : ''}`}
                onClick={() => onFilterChange('minRating', null)}
              >
                All Ratings
              </button>
            </li>
            {ratingOptions.map(rating => (
              <li key={rating}>
                <button
                  className={`tz-filter-btn ${minRating === rating ? 'active' : ''}`}
                  onClick={() => onFilterChange('minRating', rating)}
                >
                  <span className="tz-filter-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < rating ? 'filled' : ''}>★</span>
                    ))}
                  </span>
                  & Up
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* On Sale */}
        <div className="tz-filter-section">
          <label className="tz-filter-checkbox">
            <input
              type="checkbox"
              checked={onSaleOnly}
              onChange={(e) => onFilterChange('onSale', e.target.checked)}
            />
            <span className="tz-checkbox-custom"></span>
            {t(common.sale)} Only
          </label>
        </div>

        {/* Clear Filters */}
        <button className="tz-btn tz-btn-outline tz-clear-filters" onClick={onClearFilters}>
          {t(common.clearFilters)}
        </button>

        {/* Mobile Apply Button */}
        <button className="tz-btn tz-btn-primary tz-mobile-apply" onClick={onCloseMobileFilter}>
          Apply Filters
        </button>
      </aside>
    </>
  );
}
