import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZWishlist } from '../context/TZWishlistContext';
import { useTZCart } from '../context/TZCartContext';
import { translations, siteConfig } from '../data/siteData';
import TZRatingStars from '../components/TZRatingStars';

export default function WishlistPage() {
  const { t } = useTZLanguage();
  const { wishlist, removeFromWishlist, clearWishlist } = useTZWishlist();
  const { addToCart, isInCart, openCart } = useTZCart();
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const handleAddToCart = (product) => {
    addToCart(product);
    openCart();
  };

  const handleAddAllToCart = () => {
    wishlist.forEach(product => {
      if (!isInCart(product.id) && product.stock > 0) {
        addToCart(product);
      }
    });
    openCart();
  };

  if (wishlist.length === 0) {
    return (
      <div className="tz-wishlist-page tz-wishlist-empty-page">
        <div className="tz-container">
          <div className="tz-empty-state">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <h2>{t(common.emptyWishlist)}</h2>
            <p>Save items you love by clicking the heart icon on any product.</p>
            <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary tz-btn-lg">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tz-wishlist-page">
      <div className="tz-container">
        <div className="tz-wishlist-header">
          <h1>{t(translations.nav.wishlist)} ({wishlist.length})</h1>
          <div className="tz-wishlist-actions">
            <button className="tz-btn tz-btn-primary" onClick={handleAddAllToCart}>
              Add All to Cart
            </button>
            <button className="tz-btn tz-btn-outline" onClick={clearWishlist}>
              Clear Wishlist
            </button>
          </div>
        </div>

        <div className="tz-wishlist-grid">
          {wishlist.map(product => {
            const inCart = isInCart(product.id);
            return (
              <div key={product.id} className="tz-wishlist-item">
                <button
                  className="tz-wishlist-remove"
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label="Remove from wishlist"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>

                <Link to={`${basePath}/product/${product.id}`} className="tz-wishlist-image">
                  <img src={product.images[0]} alt={t(product.name)} />
                  {product.discount > 0 && (
                    <span className="tz-badge-sale">-{product.discount}%</span>
                  )}
                </Link>

                <div className="tz-wishlist-info">
                  <span className="tz-wishlist-brand">{product.brand.toUpperCase()}</span>
                  <Link to={`${basePath}/product/${product.id}`} className="tz-wishlist-name">
                    {t(product.name)}
                  </Link>

                  <div className="tz-wishlist-rating">
                    <TZRatingStars rating={product.rating} />
                    <span>({product.reviewCount})</span>
                  </div>

                  <div className="tz-wishlist-price">
                    <span className="tz-current-price">
                      {siteConfig.currency.symbol}{product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="tz-original-price">
                        {siteConfig.currency.symbol}{product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className={`tz-wishlist-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                    {product.stock > 0 ? t(common.inStock) : t(common.outOfStock)}
                  </div>

                  <button
                    className={`tz-btn ${inCart ? 'tz-btn-secondary' : 'tz-btn-primary'} tz-btn-block`}
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0 || inCart}
                  >
                    {inCart ? 'In Cart' : product.stock === 0 ? t(common.outOfStock) : t(common.addToCart)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
