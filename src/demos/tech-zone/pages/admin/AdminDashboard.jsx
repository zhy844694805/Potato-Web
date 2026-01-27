import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTZLanguage } from '../../context/TZLanguageContext';
import { useTZAdmin } from '../../context/TZAdminContext';
import { translations, siteConfig } from '../../data/siteData';
import { dashboardStats } from '../../data/mockData';

export default function AdminDashboard() {
  const { t } = useTZLanguage();
  const { isAuthenticated, login, logout, products, users, orders, resetData } = useTZAdmin();
  const admin = translations.admin;

  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const basePath = '/demo/tech-zone';

  // Login form
  if (!isAuthenticated) {
    const handleLogin = (e) => {
      e.preventDefault();
      const success = login(loginForm.username, loginForm.password);
      if (success) {
        setLoginError('');
      } else {
        setLoginError('Invalid credentials. Try admin / admin123');
      }
    };

    return (
      <div className="tz-admin-login">
        <div className="tz-login-card">
          <div className="tz-login-header">
            <span className="tz-logo-icon">⚡</span>
            <h1>{t(admin.login)}</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="tz-form-group">
              <label htmlFor="username">{t(admin.username)}</label>
              <input
                type="text"
                id="username"
                value={loginForm.username}
                onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                placeholder="admin"
                required
              />
            </div>
            <div className="tz-form-group">
              <label htmlFor="password">{t(admin.password)}</label>
              <input
                type="password"
                id="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                placeholder="admin123"
                required
              />
            </div>
            {loginError && <p className="tz-login-error">{loginError}</p>}
            <button type="submit" className="tz-btn tz-btn-primary tz-btn-lg tz-btn-block">
              {t(admin.login)}
            </button>
          </form>
          <p className="tz-login-hint">
            Demo credentials: <strong>admin</strong> / <strong>admin123</strong>
          </p>
          <Link to={basePath} className="tz-back-link">← Back to Store</Link>
        </div>
      </div>
    );
  }

  // Dashboard stats
  const stats = [
    {
      label: admin.totalSales,
      value: `${siteConfig.currency.symbol}${dashboardStats.totalSales.toLocaleString()}`,
      change: `+${dashboardStats.salesGrowth}%`,
      icon: '💰',
      color: '#10b981'
    },
    {
      label: admin.totalOrders,
      value: orders.length,
      change: `+${dashboardStats.ordersGrowth}%`,
      icon: '📦',
      color: '#3b82f6'
    },
    {
      label: admin.totalProducts,
      value: products.length,
      change: `${products.filter(p => p.isActive).length} active`,
      icon: '🏷️',
      color: '#8b5cf6'
    },
    {
      label: admin.totalUsers,
      value: users.length,
      change: `${users.filter(u => u.isActive).length} active`,
      icon: '👥',
      color: '#f59e0b'
    }
  ];

  const recentOrders = orders.slice(0, 5);
  const orderStatusColors = {
    pending: '#f59e0b',
    processing: '#3b82f6',
    shipped: '#8b5cf6',
    delivered: '#10b981',
    cancelled: '#ef4444'
  };

  return (
    <div className="tz-admin-dashboard">
      {/* Admin Header */}
      <header className="tz-admin-header">
        <div className="tz-admin-header-left">
          <Link to={basePath} className="tz-admin-logo">
            <span className="tz-logo-icon">⚡</span>
            <span>{t({ zh: '科技领域', en: 'TechZone', it: 'TechZone' })} Admin</span>
          </Link>
        </div>
        <nav className="tz-admin-nav">
          <Link to={`${basePath}/admin`} className="active">{t(admin.dashboard)}</Link>
          <Link to={`${basePath}/admin/products`}>{t(admin.products)}</Link>
          <Link to={`${basePath}/admin/users`}>{t(admin.users)}</Link>
          <Link to={`${basePath}/admin/orders`}>{t(admin.orders)}</Link>
        </nav>
        <div className="tz-admin-header-right">
          <Link to={basePath} className="tz-admin-view-store">View Store</Link>
          <button className="tz-btn tz-btn-outline" onClick={logout}>
            {t(admin.logout)}
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="tz-admin-main">
        <div className="tz-admin-container">
          <div className="tz-admin-page-header">
            <h1>{t(admin.dashboard)}</h1>
            <button className="tz-btn tz-btn-outline" onClick={resetData}>
              Reset Demo Data
            </button>
          </div>

          {/* Stats Grid */}
          <div className="tz-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="tz-stat-card">
                <div className="tz-stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="tz-stat-info">
                  <span className="tz-stat-label">{t(stat.label)}</span>
                  <span className="tz-stat-value">{stat.value}</span>
                  <span className="tz-stat-change" style={{ color: stat.color }}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions & Recent Orders */}
          <div className="tz-dashboard-grid">
            {/* Quick Actions */}
            <div className="tz-dashboard-card">
              <h3>Quick Actions</h3>
              <div className="tz-quick-actions">
                <Link to={`${basePath}/admin/products`} className="tz-quick-action">
                  <span className="tz-action-icon">📦</span>
                  <span>Manage Products</span>
                </Link>
                <Link to={`${basePath}/admin/orders`} className="tz-quick-action">
                  <span className="tz-action-icon">📋</span>
                  <span>View Orders</span>
                </Link>
                <Link to={`${basePath}/admin/users`} className="tz-quick-action">
                  <span className="tz-action-icon">👤</span>
                  <span>Manage Users</span>
                </Link>
                <Link to={basePath} className="tz-quick-action">
                  <span className="tz-action-icon">🏪</span>
                  <span>View Store</span>
                </Link>
              </div>
            </div>

            {/* Order Status Summary */}
            <div className="tz-dashboard-card">
              <h3>Order Status</h3>
              <div className="tz-order-status-grid">
                {Object.entries(dashboardStats.ordersByStatus).map(([status, count]) => (
                  <div key={status} className="tz-status-item">
                    <span className="tz-status-dot" style={{ backgroundColor: orderStatusColors[status] }} />
                    <span className="tz-status-name">{t(admin[status])}</span>
                    <span className="tz-status-count">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="tz-dashboard-card tz-dashboard-orders">
              <div className="tz-card-header">
                <h3>Recent Orders</h3>
                <Link to={`${basePath}/admin/orders`}>View All →</Link>
              </div>
              <table className="tz-admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(order => (
                    <tr key={order.id}>
                      <td className="tz-order-id">{order.id}</td>
                      <td>{order.customerName}</td>
                      <td>{siteConfig.currency.symbol}{order.total.toFixed(2)}</td>
                      <td>
                        <span
                          className="tz-status-badge"
                          style={{ backgroundColor: `${orderStatusColors[order.status]}20`, color: orderStatusColors[order.status] }}
                        >
                          {t(admin[order.status])}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Top Products */}
            <div className="tz-dashboard-card tz-dashboard-products">
              <div className="tz-card-header">
                <h3>Top Products</h3>
                <Link to={`${basePath}/admin/products`}>View All →</Link>
              </div>
              <div className="tz-top-products">
                {dashboardStats.topProducts.map((product, index) => (
                  <div key={product.id} className="tz-top-product">
                    <span className="tz-product-rank">{index + 1}</span>
                    <span className="tz-product-name">{product.name}</span>
                    <span className="tz-product-sales">{product.sales} sold</span>
                    <span className="tz-product-revenue">
                      {siteConfig.currency.symbol}{product.revenue.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
