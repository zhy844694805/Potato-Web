import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZCart } from '../context/TZCartContext';
import { useTZWishlist } from '../context/TZWishlistContext';
import { translations, siteConfig } from '../data/siteData';
import TZRatingStars from './TZRatingStars';

export default function TZProductCard({ product, showQuickActions = true }) {
  const { t } = useTZLanguage();
  const { addToCart, isInCart } = useTZCart();
  const { toggleWishlist, isInWishlist } = useTZWishlist();
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="tz-product-card">
      {/* Badges */}
      <div className="tz-product-badges">
        {product.isNew && (
          <span className="tz-badge-new">{t(common.new)}</span>
        )}
        {product.discount > 0 && (
          <span className="tz-badge-sale">-{product.discount}%</span>
        )}
      </div>

      {/* Wishlist Button */}
      {showQuickActions && (
        <button
          className={`tz-wishlist-toggle ${inWishlist ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label={inWishlist ? t(common.removeFromWishlist) : t(translations.product.addToWishlist)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      )}

      {/* Image */}
      <Link to={`${basePath}/product/${product.id}`} className="tz-product-image">
        <img
          src={product.images[0]}
          alt={t(product.name)}
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="tz-product-content">
        {/* Brand */}
        <span className="tz-product-brand">{product.brand.toUpperCase()}</span>

        {/* Name */}
        <Link to={`${basePath}/product/${product.id}`} className="tz-product-name">
          {t(product.name)}
        </Link>

        {/* Rating */}
        <div className="tz-product-rating">
          <TZRatingStars rating={product.rating} />
          <span className="tz-review-count">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="tz-product-price">
          <span className="tz-current-price">
            {siteConfig.currency.symbol}{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="tz-original-price">
              {siteConfig.currency.symbol}{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className={`tz-stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
          {product.stock > 0 ? t(common.inStock) : t(common.outOfStock)}
        </div>

        {/* Quick Add Button */}
        {showQuickActions && product.stock > 0 && (
          <button
            className={`tz-quick-add ${inCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={inCart}
          >
            {inCart ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Added
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {t(common.addToCart)}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
