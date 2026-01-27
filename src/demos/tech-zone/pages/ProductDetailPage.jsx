import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZCart } from '../context/TZCartContext';
import { useTZWishlist } from '../context/TZWishlistContext';
import { useTZAdmin } from '../context/TZAdminContext';
import { translations, siteConfig, categories, brands } from '../data/siteData';
import { getReviewsByProductId } from '../data/mockData';
import TZImageGallery from '../components/TZImageGallery';
import TZRatingStars from '../components/TZRatingStars';
import TZCountdownTimer from '../components/TZCountdownTimer';
import TZProductCard from '../components/TZProductCard';
import TZReviewCard, { TZReviewForm } from '../components/TZReviewCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTZLanguage();
  const { addToCart, isInCart, openCart } = useTZCart();
  const { toggleWishlist, isInWishlist } = useTZWishlist();
  const { getProductById, getActiveProducts } = useTZAdmin();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState([]);

  const product = getProductById(id);
  const common = translations.common;
  const productTrans = translations.product;
  const basePath = '/demo/tech-zone';

  // Load reviews and reset state on product change
  useEffect(() => {
    if (product) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReviews(getReviewsByProductId(product.id));
    }
     
    setQuantity(1);
     
    setActiveTab('description');
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="tz-not-found">
        <h2>Product not found</h2>
        <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary">
          {t(common.continueShopping)}
        </Link>
      </div>
    );
  }

  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);

  const category = categories.find(c => c.id === product.category);
  const brand = brands.find(b => b.id === product.brand);

  // Related products (same category, excluding current)
  const relatedProducts = getActiveProducts()
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openCart();
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate(`${basePath}/checkout`);
  };

  const handleReviewSubmit = (review) => {
    setReviews(prev => [review, ...prev]);
  };

  return (
    <div className="tz-product-detail">
      <div className="tz-container">
        {/* Breadcrumb */}
        <nav className="tz-breadcrumb">
          <Link to={basePath}>Home</Link>
          <span>/</span>
          <Link to={`${basePath}/shop`}>Shop</Link>
          {category && (
            <>
              <span>/</span>
              <Link to={`${basePath}/shop/${category.id}`}>{t(category.name)}</Link>
            </>
          )}
          <span>/</span>
          <span>{t(product.name)}</span>
        </nav>

        {/* Product Main */}
        <div className="tz-product-main">
          {/* Gallery */}
          <div className="tz-product-gallery">
            <TZImageGallery images={product.images} productName={t(product.name)} />
          </div>

          {/* Info */}
          <div className="tz-product-info">
            {/* Badges */}
            <div className="tz-product-badges-detail">
              {product.isNew && <span className="tz-badge-new">{t(common.new)}</span>}
              {product.discount > 0 && <span className="tz-badge-sale">-{product.discount}%</span>}
            </div>

            {/* Brand */}
            <span className="tz-product-brand-label">{brand?.name}</span>

            {/* Name */}
            <h1 className="tz-product-title">{t(product.name)}</h1>

            {/* Rating */}
            <div className="tz-product-rating-detail">
              <TZRatingStars rating={product.rating} showValue />
              <span className="tz-review-count">({product.reviewCount} {t(common.reviews)})</span>
            </div>

            {/* Price */}
            <div className="tz-product-price-detail">
              <span className="tz-current-price">
                {siteConfig.currency.symbol}{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="tz-original-price">
                  {siteConfig.currency.symbol}{product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount > 0 && (
                <span className="tz-save-amount">
                  Save {siteConfig.currency.symbol}{(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Sale Countdown */}
            {product.saleEndsAt && new Date(product.saleEndsAt) > new Date() && (
              <TZCountdownTimer endDate={product.saleEndsAt} />
            )}

            {/* Stock */}
            <div className={`tz-stock-detail ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {t(common.inStock)} ({product.stock} available)
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  {t(common.outOfStock)}
                </>
              )}
            </div>

            {/* Quantity & Actions */}
            {product.stock > 0 && (
              <>
                <div className="tz-quantity-selector">
                  <label>{t(common.quantity)}:</label>
                  <div className="tz-quantity-input">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                      min="1"
                      max={product.stock}
                    />
                    <button
                      onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="tz-product-actions">
                  <button
                    className={`tz-btn tz-btn-primary tz-btn-lg ${inCart ? 'added' : ''}`}
                    onClick={handleAddToCart}
                  >
                    {inCart ? 'Added to Cart' : t(common.addToCart)}
                  </button>
                  <button className="tz-btn tz-btn-secondary tz-btn-lg" onClick={handleBuyNow}>
                    {t(common.buyNow)}
                  </button>
                  <button
                    className={`tz-btn tz-btn-icon ${inWishlist ? 'active' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label={inWishlist ? t(common.removeFromWishlist) : t(common.addToWishlist)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>
              </>
            )}

            {/* Features */}
            <div className="tz-product-features">
              <div className="tz-feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" rx="2"/>
                  <path d="M16 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2"/>
                </svg>
                <span>Free shipping over €{siteConfig.shipping.freeThreshold}</span>
              </div>
              <div className="tz-feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10"/>
                  <path d="M1 20v-6a8 8 0 0 1 8-8h13"/>
                </svg>
                <span>30-day returns</span>
              </div>
              <div className="tz-feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tz-product-tabs">
          <div className="tz-tabs-nav">
            <button
              className={`tz-tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              {t(productTrans.description)}
            </button>
            <button
              className={`tz-tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              {t(productTrans.specifications)}
            </button>
            <button
              className={`tz-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              {t(productTrans.customerReviews)} ({reviews.length})
            </button>
          </div>

          <div className="tz-tabs-content">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="tz-tab-panel">
                <p>{t(product.description)}</p>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="tz-tab-panel">
                <table className="tz-specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="tz-tab-panel tz-reviews-panel">
                <div className="tz-reviews-header">
                  <div className="tz-reviews-summary">
                    <span className="tz-big-rating">{product.rating.toFixed(1)}</span>
                    <TZRatingStars rating={product.rating} size="large" />
                    <span>{product.reviewCount} reviews</span>
                  </div>
                </div>

                <div className="tz-reviews-container">
                  <div className="tz-reviews-list">
                    {reviews.length > 0 ? (
                      reviews.map(review => (
                        <TZReviewCard key={review.id} review={review} />
                      ))
                    ) : (
                      <p className="tz-no-reviews">No reviews yet. Be the first to review this product!</p>
                    )}
                  </div>

                  <div className="tz-review-form-container">
                    <h3>{t(productTrans.writeReview)}</h3>
                    <TZReviewForm productId={product.id} onSubmit={handleReviewSubmit} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="tz-related-products">
            <h2>{t(productTrans.relatedProducts)}</h2>
            <div className="tz-products-grid">
              {relatedProducts.map(p => (
                <TZProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
