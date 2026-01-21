import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTZLanguage } from '../../context/TZLanguageContext';
import { useTZAdmin } from '../../context/TZAdminContext';
import { translations, siteConfig } from '../../data/siteData';
import TZModal from '../../components/TZModal';

export default function AdminOrders() {
  const { t } = useTZLanguage();
  const { isAuthenticated, logout, orders, updateOrderStatus } = useTZAdmin();
  const admin = translations.admin;
  const basePath = '/demo/tech-zone';

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  if (!isAuthenticated) {
    return <Navigate to={`${basePath}/admin`} />;
  }

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchesSearch = searchTerm === '' ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === '' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Sort by date (newest first)
  const sortedOrders = [...filteredOrders].sort((a, b) =>
    new Date(b.orderDate) - new Date(a.orderDate)
  );

  const orderStatusColors = {
    pending: '#f59e0b',
    processing: '#3b82f6',
    shipped: '#8b5cf6',
    delivered: '#10b981',
    cancelled: '#ef4444'
  };

  const statusOptions = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="tz-admin-page">
      {/* Admin Header */}
      <header className="tz-admin-header">
        <div className="tz-admin-header-left">
          <Link to={basePath} className="tz-admin-logo">
            <span className="tz-logo-icon">⚡</span>
            <span>{t({ zh: '科技领域', en: 'TechZone', it: 'TechZone' })} Admin</span>
          </Link>
        </div>
        <nav className="tz-admin-nav">
          <Link to={`${basePath}/admin`}>{t(admin.dashboard)}</Link>
          <Link to={`${basePath}/admin/products`}>{t(admin.products)}</Link>
          <Link to={`${basePath}/admin/users`}>{t(admin.users)}</Link>
          <Link to={`${basePath}/admin/orders`} className="active">{t(admin.orders)}</Link>
        </nav>
        <div className="tz-admin-header-right">
          <Link to={basePath} className="tz-admin-view-store">View Store</Link>
          <button className="tz-btn tz-btn-outline" onClick={logout}>
            {t(admin.logout)}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="tz-admin-main">
        <div className="tz-admin-container">
          <div className="tz-admin-page-header">
            <h1>{t(admin.orders)}</h1>
            <span className="tz-order-count">{orders.length} total orders</span>
          </div>

          {/* Filters */}
          <div className="tz-admin-filters">
            <div className="tz-search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="tz-filter-select"
            >
              <option value="">All Status</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>{t(admin[status])}</option>
              ))}
            </select>
          </div>

          {/* Orders Table */}
          <div className="tz-admin-table-container">
            <table className="tz-admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.map(order => (
                  <tr key={order.id}>
                    <td className="tz-order-id">{order.id}</td>
                    <td>
                      <div className="tz-customer-cell">
                        <span className="tz-customer-name">{order.customerName}</span>
                        <span className="tz-customer-email">{order.customerEmail}</span>
                      </div>
                    </td>
                    <td>{order.items.length} items</td>
                    <td className="tz-order-total">
                      {siteConfig.currency.symbol}{order.total.toFixed(2)}
                    </td>
                    <td>{formatDate(order.orderDate)}</td>
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className="tz-status-select"
                        style={{
                          backgroundColor: `${orderStatusColors[order.status]}20`,
                          color: orderStatusColors[order.status]
                        }}
                      >
                        {statusOptions.map(status => (
                          <option key={status} value={status}>{t(admin[status])}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button
                        className="tz-btn tz-btn-sm tz-btn-secondary"
                        onClick={() => setSelectedOrder(order)}
                        title="View Details"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {sortedOrders.length === 0 && (
            <div className="tz-no-results">
              <p>No orders found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Order Details Modal */}
      <TZModal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={`Order ${selectedOrder?.id}`}
        size="medium"
      >
        {selectedOrder && (
          <div className="tz-order-details">
            {/* Order Status */}
            <div className="tz-order-status-section">
              <span
                className="tz-status-badge large"
                style={{
                  backgroundColor: `${orderStatusColors[selectedOrder.status]}20`,
                  color: orderStatusColors[selectedOrder.status]
                }}
              >
                {t(admin[selectedOrder.status])}
              </span>
              <span className="tz-order-date">{formatDate(selectedOrder.orderDate)}</span>
            </div>

            {/* Customer Info */}
            <div className="tz-order-section">
              <h4>Customer Information</h4>
              <p><strong>{selectedOrder.customerName}</strong></p>
              <p>{selectedOrder.customerEmail}</p>
              <p>{selectedOrder.shippingAddress}</p>
            </div>

            {/* Order Items */}
            <div className="tz-order-section">
              <h4>Order Items</h4>
              <div className="tz-order-items-list">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="tz-order-item">
                    <span className="tz-item-name">{item.name}</span>
                    <span className="tz-item-qty">x{item.quantity}</span>
                    <span className="tz-item-price">
                      {siteConfig.currency.symbol}{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="tz-order-section tz-order-summary">
              <div className="tz-summary-row">
                <span>Subtotal</span>
                <span>{siteConfig.currency.symbol}{selectedOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="tz-summary-row">
                <span>Shipping ({selectedOrder.shippingMethod})</span>
                <span>
                  {selectedOrder.shipping === 0
                    ? 'Free'
                    : `${siteConfig.currency.symbol}${selectedOrder.shipping.toFixed(2)}`
                  }
                </span>
              </div>
              <div className="tz-summary-row total">
                <span>Total</span>
                <span>{siteConfig.currency.symbol}{selectedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Info */}
            <div className="tz-order-section">
              <h4>Payment</h4>
              <p>{selectedOrder.paymentMethod === 'credit_card' ? 'Credit Card' :
                  selectedOrder.paymentMethod === 'paypal' ? 'PayPal' : 'Bank Transfer'}</p>
            </div>

            {/* Delivery Info */}
            {selectedOrder.deliveredDate && (
              <div className="tz-order-section">
                <h4>Delivered</h4>
                <p>{formatDate(selectedOrder.deliveredDate)}</p>
              </div>
            )}

            <div className="tz-modal-actions">
              <button className="tz-btn tz-btn-secondary" onClick={() => setSelectedOrder(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </TZModal>
    </div>
  );
}
