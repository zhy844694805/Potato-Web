import { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZAdmin } from '../context/TZAdminContext';
import { translations, categories } from '../data/siteData';
import { sortProducts as sortProductsFn } from '../data/productsData';
import TZProductCard from '../components/TZProductCard';
import TZProductFilter from '../components/TZProductFilter';

export default function ShopPage() {
  const { category: urlCategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTZLanguage();
  const { getActiveProducts } = useTZAdmin();
  const common = translations.common;

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [minRating, setMinRating] = useState(null);
  const [onSaleOnly, setOnSaleOnly] = useState(searchParams.get('sale') === 'true');
  const [sortBy, setSortBy] = useState('default');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const searchQuery = searchParams.get('search') || '';

  // Update category when URL changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(urlCategory || null);
  }, [urlCategory]);

  // Get active products from admin context
  const allProducts = getActiveProducts();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Search filter
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.en.toLowerCase().includes(lowercaseQuery) ||
        p.name.zh.includes(searchQuery) ||
        p.name.it.toLowerCase().includes(lowercaseQuery) ||
        p.brand.toLowerCase().includes(lowercaseQuery)
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand) {
      result = result.filter(p => p.brand === selectedBrand);
    }

    // Price range filter
    if (priceRange.min !== null) {
      result = result.filter(p => p.price >= priceRange.min);
    }
    if (priceRange.max !== null) {
      result = result.filter(p => p.price <= priceRange.max);
    }

    // Rating filter
    if (minRating !== null) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Sale filter
    if (onSaleOnly) {
      result = result.filter(p => p.discount > 0);
    }

    // Sort
    result = sortProductsFn(result, sortBy);

    return result;
  }, [allProducts, searchQuery, selectedCategory, selectedBrand, priceRange, minRating, onSaleOnly, sortBy]);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'category':
        setSelectedCategory(value);
        break;
      case 'brand':
        setSelectedBrand(value);
        break;
      case 'priceRange':
        setPriceRange(value);
        break;
      case 'minRating':
        setMinRating(value);
        break;
      case 'onSale':
        setOnSaleOnly(value);
        break;
      default:
        break;
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setPriceRange({ min: null, max: null });
    setMinRating(null);
    setOnSaleOnly(false);
    setSearchParams({});
  };

  const categoryName = selectedCategory
    ? categories.find(c => c.id === selectedCategory)?.name
    : null;

  return (
    <div className="tz-shop">
      <div className="tz-container">
        {/* Page Header */}
        <div className="tz-shop-header">
          <div className="tz-shop-title">
            <h1>
              {searchQuery
                ? `Search: "${searchQuery}"`
                : categoryName
                  ? t(categoryName)
                  : t(translations.nav.shop)}
            </h1>
            <span className="tz-results-count">
              {filteredProducts.length} {t(common.results)}
            </span>
          </div>

          <div className="tz-shop-controls">
            {/* Mobile Filter Toggle */}
            <button
              className="tz-filter-toggle"
              onClick={() => setShowMobileFilter(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <line x1="1" y1="14" x2="7" y2="14"/>
                <line x1="9" y1="8" x2="15" y2="8"/>
                <line x1="17" y1="16" x2="23" y2="16"/>
              </svg>
              {t(common.filter)}
            </button>

            {/* Sort Dropdown */}
            <div className="tz-sort-dropdown">
              <label>{t(common.sort)}:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">{t(common.sortBy.default)}</option>
                <option value="priceAsc">{t(common.sortBy.priceAsc)}</option>
                <option value="priceDesc">{t(common.sortBy.priceDesc)}</option>
                <option value="nameAsc">{t(common.sortBy.nameAsc)}</option>
                <option value="rating">{t(common.sortBy.rating)}</option>
                <option value="newest">{t(common.sortBy.newest)}</option>
              </select>
            </div>
          </div>
        </div>

        <div className="tz-shop-content">
          {/* Sidebar Filter */}
          <TZProductFilter
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            priceRange={priceRange}
            minRating={minRating}
            onSaleOnly={onSaleOnly}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            showMobileFilter={showMobileFilter}
            onCloseMobileFilter={() => setShowMobileFilter(false)}
          />

          {/* Products Grid */}
          <div className="tz-shop-products">
            {filteredProducts.length > 0 ? (
              <div className="tz-products-grid">
                {filteredProducts.map(product => (
                  <TZProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="tz-no-products">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <h3>{t(common.noResults)}</h3>
                <p>Try adjusting your filters or search terms</p>
                <button className="tz-btn tz-btn-primary" onClick={handleClearFilters}>
                  {t(common.clearFilters)}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
