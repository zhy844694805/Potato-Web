import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZCart } from '../context/TZCartContext';
import { translations, siteConfig } from '../data/siteData';

export default function TZCartSidebar() {
  const { t } = useTZLanguage();
  const { cart, cartTotal, isCartOpen, closeCart, removeFromCart, updateQuantity } = useTZCart();
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const freeShippingThreshold = siteConfig.shipping.freeThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="tz-cart-overlay" onClick={closeCart} />

      {/* Sidebar */}
      <div className="tz-cart-sidebar">
        {/* Header */}
        <div className="tz-cart-header">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {t(translations.nav.cart)} ({cart.length})
          </h3>
          <button className="tz-cart-close" onClick={closeCart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cart.length > 0 && (
          <div className="tz-free-shipping-bar">
            {amountToFreeShipping > 0 ? (
              <>
                <p>
                  Add <strong>{siteConfig.currency.symbol}{amountToFreeShipping.toFixed(2)}</strong> more for free shipping!
                </p>
                <div className="tz-shipping-progress">
                  <div
                    className="tz-shipping-progress-fill"
                    style={{ width: `${Math.min(100, (cartTotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </>
            ) : (
              <p className="tz-free-shipping-achieved">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                You qualify for free shipping!
              </p>
            )}
          </div>
        )}

        {/* Cart Items */}
        <div className="tz-cart-items">
          {cart.length === 0 ? (
            <div className="tz-cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p>{t(common.emptyCart)}</p>
              <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary" onClick={closeCart}>
                {t(common.continueShopping)}
              </Link>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="tz-cart-item">
                <Link to={`${basePath}/product/${item.id}`} className="tz-cart-item-image" onClick={closeCart}>
                  <img src={item.images[0]} alt={t(item.name)} />
                </Link>
                <div className="tz-cart-item-details">
                  <Link to={`${basePath}/product/${item.id}`} className="tz-cart-item-name" onClick={closeCart}>
                    {t(item.name)}
                  </Link>
                  <span className="tz-cart-item-price">
                    {siteConfig.currency.symbol}{item.price.toFixed(2)}
                  </span>
                  <div className="tz-cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="tz-cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="tz-cart-footer">
            <div className="tz-cart-subtotal">
              <span>{t(common.subtotal)}</span>
              <span>{siteConfig.currency.symbol}{cartTotal.toFixed(2)}</span>
            </div>
            <Link to={`${basePath}/cart`} className="tz-btn tz-btn-secondary" onClick={closeCart}>
              {t(translations.nav.cart)}
            </Link>
            <Link to={`${basePath}/checkout`} className="tz-btn tz-btn-primary" onClick={closeCart}>
              {t(common.checkout)}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
