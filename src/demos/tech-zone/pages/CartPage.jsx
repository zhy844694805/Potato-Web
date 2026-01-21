import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZCart } from '../context/TZCartContext';
import { translations, siteConfig } from '../data/siteData';

export default function CartPage() {
  const { t } = useTZLanguage();
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useTZCart();
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const freeShippingThreshold = siteConfig.shipping.freeThreshold;
  const shippingCost = cartTotal >= freeShippingThreshold ? 0 : siteConfig.shipping.standardPrice;
  const orderTotal = cartTotal + shippingCost;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  if (cart.length === 0) {
    return (
      <div className="tz-cart-page tz-cart-empty-page">
        <div className="tz-container">
          <div className="tz-empty-state">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h2>{t(common.emptyCart)}</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary tz-btn-lg">
              {t(common.continueShopping)}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tz-cart-page">
      <div className="tz-container">
        <h1>{t(translations.nav.cart)}</h1>

        {/* Free Shipping Progress */}
        <div className="tz-free-shipping-progress">
          {amountToFreeShipping > 0 ? (
            <>
              <p>
                Add <strong>{siteConfig.currency.symbol}{amountToFreeShipping.toFixed(2)}</strong> more for free shipping!
              </p>
              <div className="tz-progress-bar">
                <div
                  className="tz-progress-fill"
                  style={{ width: `${Math.min(100, (cartTotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </>
          ) : (
            <p className="tz-free-shipping-achieved">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Congratulations! You qualify for free shipping!
            </p>
          )}
        </div>

        <div className="tz-cart-content">
          {/* Cart Items */}
          <div className="tz-cart-items-list">
            <div className="tz-cart-table-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {cart.map(item => (
              <div key={item.id} className="tz-cart-item-row">
                <div className="tz-cart-product">
                  <Link to={`${basePath}/product/${item.id}`} className="tz-cart-product-image">
                    <img src={item.images[0]} alt={t(item.name)} />
                  </Link>
                  <div className="tz-cart-product-info">
                    <Link to={`${basePath}/product/${item.id}`} className="tz-cart-product-name">
                      {t(item.name)}
                    </Link>
                    <span className="tz-cart-product-brand">{item.brand}</span>
                  </div>
                </div>

                <div className="tz-cart-price">
                  {item.originalPrice && (
                    <span className="tz-original-price">
                      {siteConfig.currency.symbol}{item.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="tz-current-price">
                    {siteConfig.currency.symbol}{item.price.toFixed(2)}
                  </span>
                </div>

                <div className="tz-cart-quantity">
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

                <div className="tz-cart-total">
                  {siteConfig.currency.symbol}{(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="tz-cart-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            ))}

            <div className="tz-cart-actions">
              <button className="tz-btn tz-btn-outline" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to={`${basePath}/shop`} className="tz-btn tz-btn-secondary">
                {t(common.continueShopping)}
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="tz-order-summary">
            <h3>Order Summary</h3>

            <div className="tz-summary-row">
              <span>{t(common.subtotal)}</span>
              <span>{siteConfig.currency.symbol}{cartTotal.toFixed(2)}</span>
            </div>

            <div className="tz-summary-row">
              <span>{t(common.shipping)}</span>
              <span>
                {shippingCost === 0
                  ? t(common.freeShipping)
                  : `${siteConfig.currency.symbol}${shippingCost.toFixed(2)}`
                }
              </span>
            </div>

            <div className="tz-summary-divider" />

            <div className="tz-summary-row tz-summary-total">
              <span>{t(common.total)}</span>
              <span>{siteConfig.currency.symbol}{orderTotal.toFixed(2)}</span>
            </div>

            <Link to={`${basePath}/checkout`} className="tz-btn tz-btn-primary tz-btn-lg tz-btn-block">
              {t(common.checkout)}
            </Link>

            <div className="tz-payment-methods">
              <p>We accept:</p>
              <div className="tz-payment-icons">
                <span>💳 Visa</span>
                <span>💳 Mastercard</span>
                <span>💳 PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
