import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTZLanguage } from '../../context/TZLanguageContext';
import { useTZAdmin } from '../../context/TZAdminContext';
import { translations, siteConfig, categories, brands } from '../../data/siteData';
import TZModal from '../../components/TZModal';

export default function AdminProducts() {
  const { t } = useTZLanguage();
  const { isAuthenticated, logout, products, updateProductPrice, toggleProductStatus } = useTZAdmin();
  const admin = translations.admin;
  const basePath = '/demo/tech-zone';

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [newPrice, setNewPrice] = useState('');

  if (!isAuthenticated) {
    return <Navigate to={`${basePath}/admin`} />;
  }

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === '' ||
      product.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === '' || product.category === categoryFilter;

    const matchesStatus = statusFilter === '' ||
      (statusFilter === 'active' && product.isActive) ||
      (statusFilter === 'inactive' && !product.isActive);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleEditPrice = (product) => {
    setEditingProduct(product);
    setNewPrice(product.price.toString());
  };

  const handleSavePrice = () => {
    const price = parseFloat(newPrice);
    if (!isNaN(price) && price > 0) {
      updateProductPrice(editingProduct.id, price);
      setEditingProduct(null);
      setNewPrice('');
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? t(category.name) : categoryId;
  };

  const getBrandName = (brandId) => {
    const brand = brands.find(b => b.id === brandId);
    return brand ? brand.name : brandId;
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
          <Link to={`${basePath}/admin/products`} className="active">{t(admin.products)}</Link>
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

      {/* Main Content */}
      <main className="tz-admin-main">
        <div className="tz-admin-container">
          <div className="tz-admin-page-header">
            <h1>{t(admin.products)}</h1>
            <span className="tz-product-count">{products.length} total products</span>
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="tz-filter-select"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{t(cat.name)}</option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="tz-filter-select"
            >
              <option value="">All Status</option>
              <option value="active">{t(admin.active)}</option>
              <option value="inactive">{t(admin.inactive)}</option>
            </select>
          </div>

          {/* Products Table */}
          <div className="tz-admin-table-container">
            <table className="tz-admin-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product.id} className={!product.isActive ? 'tz-inactive-row' : ''}>
                    <td>
                      <div className="tz-product-cell">
                        <img src={product.images[0]} alt={t(product.name)} className="tz-product-thumb" />
                        <div>
                          <span className="tz-product-name">{t(product.name)}</span>
                          <span className="tz-product-id">{product.id}</span>
                        </div>
                      </div>
                    </td>
                    <td>{getCategoryName(product.category)}</td>
                    <td>{getBrandName(product.brand)}</td>
                    <td>
                      <div className="tz-price-cell">
                        <span className="tz-current-price">
                          {siteConfig.currency.symbol}{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="tz-original-price">
                            {siteConfig.currency.symbol}{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className={`tz-stock ${product.stock < 10 ? 'low' : ''}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td>
                      <span className={`tz-status-badge ${product.isActive ? 'active' : 'inactive'}`}>
                        {product.isActive ? t(admin.active) : t(admin.inactive)}
                      </span>
                    </td>
                    <td>
                      <div className="tz-action-buttons">
                        <button
                          className="tz-btn tz-btn-sm tz-btn-outline"
                          onClick={() => handleEditPrice(product)}
                          title={t(admin.editPrice)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                        <button
                          className={`tz-btn tz-btn-sm ${product.isActive ? 'tz-btn-danger' : 'tz-btn-success'}`}
                          onClick={() => toggleProductStatus(product.id)}
                          title={t(admin.toggleStatus)}
                        >
                          {product.isActive ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
                              <line x1="12" y1="2" x2="12" y2="12"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </button>
                        <Link
                          to={`${basePath}/product/${product.id}`}
                          className="tz-btn tz-btn-sm tz-btn-secondary"
                          title="View"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="tz-no-results">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Edit Price Modal */}
      <TZModal
        isOpen={!!editingProduct}
        onClose={() => setEditingProduct(null)}
        title={t(admin.editPrice)}
        size="small"
      >
        {editingProduct && (
          <div className="tz-edit-price-form">
            <div className="tz-edit-product-info">
              <img src={editingProduct.images[0]} alt={t(editingProduct.name)} />
              <div>
                <h4>{t(editingProduct.name)}</h4>
                <p>Current: {siteConfig.currency.symbol}{editingProduct.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="tz-form-group">
              <label>New Price ({siteConfig.currency.code})</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                min="0"
                step="0.01"
                autoFocus
              />
            </div>
            <div className="tz-modal-actions">
              <button className="tz-btn tz-btn-secondary" onClick={() => setEditingProduct(null)}>
                Cancel
              </button>
              <button className="tz-btn tz-btn-primary" onClick={handleSavePrice}>
                Save Price
              </button>
            </div>
          </div>
        )}
      </TZModal>
    </div>
  );
}
