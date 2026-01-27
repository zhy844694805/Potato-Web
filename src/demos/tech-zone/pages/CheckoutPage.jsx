import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZCart } from '../context/TZCartContext';
import { translations, siteConfig } from '../data/siteData';

export default function CheckoutPage() {
  const { t } = useTZLanguage();
  const { cart, cartTotal, clearCart } = useTZCart();
  const checkout = translations.checkout;
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Italy'
  });

  const shippingCosts = {
    standard: cartTotal >= siteConfig.shipping.freeThreshold ? 0 : siteConfig.shipping.standardPrice,
    express: siteConfig.shipping.expressPrice
  };

  const orderTotal = cartTotal + shippingCosts[shippingMethod];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Complete order (demo)
      const newOrderId = `ORD-${Date.now().toString().slice(-8)}`;
      setOrderId(newOrderId);
      setOrderComplete(true);
      clearCart();
    }
  };

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="tz-checkout-page tz-cart-empty-page">
        <div className="tz-container">
          <div className="tz-empty-state">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h2>{t(common.emptyCart)}</h2>
            <p>Add some items to your cart before checking out.</p>
            <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary tz-btn-lg">
              {t(common.continueShopping)}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="tz-checkout-page tz-order-complete">
        <div className="tz-container">
          <div className="tz-success-state">
            <div className="tz-success-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1>{t(checkout.orderSuccess)}</h1>
            <p className="tz-order-id">{t(checkout.orderNumber)}: <strong>{orderId}</strong></p>
            <p>A confirmation email has been sent to {formData.email}</p>
            <div className="tz-success-actions">
              <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary tz-btn-lg">
                {t(common.continueShopping)}
              </Link>
              <Link to={basePath} className="tz-btn tz-btn-secondary tz-btn-lg">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tz-checkout-page">
      <div className="tz-container">
        <h1>{t(checkout.title)}</h1>

        {/* Progress Steps */}
        <div className="tz-checkout-steps">
          <div className={`tz-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <span className="tz-step-number">1</span>
            <span className="tz-step-label">{t(checkout.shippingInfo)}</span>
          </div>
          <div className={`tz-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <span className="tz-step-number">2</span>
            <span className="tz-step-label">{t(checkout.paymentMethod)}</span>
          </div>
          <div className={`tz-step ${step >= 3 ? 'active' : ''}`}>
            <span className="tz-step-number">3</span>
            <span className="tz-step-label">{t(checkout.orderSummary)}</span>
          </div>
        </div>

        <div className="tz-checkout-content">
          {/* Form Section */}
          <div className="tz-checkout-form-section">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping Info */}
              {step === 1 && (
                <div className="tz-checkout-step-content">
                  <h2>{t(checkout.shippingInfo)}</h2>

                  <div className="tz-form-row">
                    <div className="tz-form-group">
                      <label htmlFor="firstName">{t(checkout.firstName)} *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="tz-form-group">
                      <label htmlFor="lastName">{t(checkout.lastName)} *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="tz-form-row">
                    <div className="tz-form-group">
                      <label htmlFor="email">{t(checkout.email)} *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="tz-form-group">
                      <label htmlFor="phone">{t(checkout.phone)} *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="tz-form-group">
                    <label htmlFor="address">{t(checkout.address)} *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="tz-form-row">
                    <div className="tz-form-group">
                      <label htmlFor="city">{t(checkout.city)} *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="tz-form-group">
                      <label htmlFor="postalCode">{t(checkout.postalCode)} *</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="tz-form-group">
                      <label htmlFor="country">{t(checkout.country)} *</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Italy">Italy</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Spain">Spain</option>
                      </select>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="tz-shipping-methods">
                    <h3>Shipping Method</h3>
                    <label className={`tz-shipping-option ${shippingMethod === 'standard' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={(e) => setShippingMethod(e.target.value)}
                      />
                      <div className="tz-shipping-info">
                        <span className="tz-shipping-name">{t(checkout.standardShipping)}</span>
                        <span className="tz-shipping-time">
                          {siteConfig.shipping.estimatedDays.standard.min}-{siteConfig.shipping.estimatedDays.standard.max} {t(checkout.days)}
                        </span>
                      </div>
                      <span className="tz-shipping-cost">
                        {shippingCosts.standard === 0
                          ? t(common.freeShipping)
                          : `${siteConfig.currency.symbol}${shippingCosts.standard.toFixed(2)}`
                        }
                      </span>
                    </label>
                    <label className={`tz-shipping-option ${shippingMethod === 'express' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={(e) => setShippingMethod(e.target.value)}
                      />
                      <div className="tz-shipping-info">
                        <span className="tz-shipping-name">{t(checkout.expressShipping)}</span>
                        <span className="tz-shipping-time">
                          {siteConfig.shipping.estimatedDays.express.min}-{siteConfig.shipping.estimatedDays.express.max} {t(checkout.days)}
                        </span>
                      </div>
                      <span className="tz-shipping-cost">
                        {siteConfig.currency.symbol}{shippingCosts.express.toFixed(2)}
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="tz-btn tz-btn-primary tz-btn-lg">
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="tz-checkout-step-content">
                  <h2>{t(checkout.paymentMethod)}</h2>

                  <div className="tz-payment-options">
                    <label className="tz-payment-option selected">
                      <input type="radio" name="payment" value="card" defaultChecked />
                      <div className="tz-payment-info">
                        <span className="tz-payment-icon">💳</span>
                        <span>Credit/Debit Card</span>
                      </div>
                    </label>
                    <label className="tz-payment-option">
                      <input type="radio" name="payment" value="paypal" />
                      <div className="tz-payment-info">
                        <span className="tz-payment-icon">🅿️</span>
                        <span>PayPal</span>
                      </div>
                    </label>
                    <label className="tz-payment-option">
                      <input type="radio" name="payment" value="bank" />
                      <div className="tz-payment-info">
                        <span className="tz-payment-icon">🏦</span>
                        <span>Bank Transfer</span>
                      </div>
                    </label>
                  </div>

                  <div className="tz-card-form">
                    <div className="tz-form-group">
                      <label>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="tz-form-row">
                      <div className="tz-form-group">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" />
                      </div>
                      <div className="tz-form-group">
                        <label>CVV</label>
                        <input type="text" placeholder="123" />
                      </div>
                    </div>
                    <div className="tz-form-group">
                      <label>Cardholder Name</label>
                      <input type="text" placeholder="Name on card" />
                    </div>
                  </div>

                  <p className="tz-demo-notice">
                    <strong>Demo Mode:</strong> No real payment will be processed.
                  </p>

                  <div className="tz-step-actions">
                    <button type="button" className="tz-btn tz-btn-secondary" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button type="submit" className="tz-btn tz-btn-primary tz-btn-lg">
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="tz-checkout-step-content">
                  <h2>{t(checkout.orderSummary)}</h2>

                  <div className="tz-review-section">
                    <h3>Shipping Address</h3>
                    <p>
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.postalCode}<br />
                      {formData.country}<br />
                      {formData.phone}
                    </p>
                    <button type="button" className="tz-edit-link" onClick={() => setStep(1)}>
                      Edit
                    </button>
                  </div>

                  <div className="tz-review-section">
                    <h3>Payment Method</h3>
                    <p>Credit Card ending in ****3456</p>
                    <button type="button" className="tz-edit-link" onClick={() => setStep(2)}>
                      Edit
                    </button>
                  </div>

                  <div className="tz-review-section">
                    <h3>Order Items</h3>
                    <div className="tz-review-items">
                      {cart.map(item => (
                        <div key={item.id} className="tz-review-item">
                          <img src={item.images[0]} alt={t(item.name)} />
                          <div className="tz-review-item-info">
                            <span className="tz-review-item-name">{t(item.name)}</span>
                            <span className="tz-review-item-qty">Qty: {item.quantity}</span>
                          </div>
                          <span className="tz-review-item-price">
                            {siteConfig.currency.symbol}{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tz-step-actions">
                    <button type="button" className="tz-btn tz-btn-secondary" onClick={() => setStep(2)}>
                      Back
                    </button>
                    <button type="submit" className="tz-btn tz-btn-primary tz-btn-lg">
                      {t(checkout.placeOrder)}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="tz-checkout-summary">
            <h3>{t(checkout.orderSummary)}</h3>

            <div className="tz-summary-items">
              {cart.map(item => (
                <div key={item.id} className="tz-summary-item">
                  <div className="tz-summary-item-image">
                    <img src={item.images[0]} alt={t(item.name)} />
                    <span className="tz-summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="tz-summary-item-info">
                    <span className="tz-summary-item-name">{t(item.name)}</span>
                    <span className="tz-summary-item-price">
                      {siteConfig.currency.symbol}{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="tz-summary-divider" />

            <div className="tz-summary-row">
              <span>{t(common.subtotal)}</span>
              <span>{siteConfig.currency.symbol}{cartTotal.toFixed(2)}</span>
            </div>

            <div className="tz-summary-row">
              <span>{t(common.shipping)}</span>
              <span>
                {shippingCosts[shippingMethod] === 0
                  ? t(common.freeShipping)
                  : `${siteConfig.currency.symbol}${shippingCosts[shippingMethod].toFixed(2)}`
                }
              </span>
            </div>

            <div className="tz-summary-divider" />

            <div className="tz-summary-row tz-summary-total">
              <span>{t(common.total)}</span>
              <span>{siteConfig.currency.symbol}{orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
