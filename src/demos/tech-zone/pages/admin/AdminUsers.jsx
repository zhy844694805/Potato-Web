import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTZLanguage } from '../../context/TZLanguageContext';
import { useTZAdmin } from '../../context/TZAdminContext';
import { translations, siteConfig } from '../../data/siteData';
import TZModal from '../../components/TZModal';

export default function AdminUsers() {
  const { t } = useTZLanguage();
  const { isAuthenticated, logout, users, addUser, toggleUserStatus } = useTZAdmin();
  const admin = translations.admin;
  const basePath = '/demo/tech-zone';

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    name: { zh: '', en: '', it: '' },
    phone: ''
  });

  if (!isAuthenticated) {
    return <Navigate to={`${basePath}/admin`} />;
  }

  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === '' ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.en.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === '' ||
      (statusFilter === 'active' && user.isActive) ||
      (statusFilter === 'inactive' && !user.isActive);

    return matchesSearch && matchesStatus;
  });

  const handleAddUser = () => {
    if (newUser.username && newUser.email) {
      addUser({
        username: newUser.username,
        email: newUser.email,
        name: {
          zh: newUser.name.en || newUser.username,
          en: newUser.name.en || newUser.username,
          it: newUser.name.en || newUser.username
        },
        phone: newUser.phone,
        address: ''
      });
      setShowAddModal(false);
      setNewUser({ username: '', email: '', name: { zh: '', en: '', it: '' }, phone: '' });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
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
          <Link to={`${basePath}/admin/users`} className="active">{t(admin.users)}</Link>
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
            <h1>{t(admin.users)}</h1>
            <button className="tz-btn tz-btn-primary" onClick={() => setShowAddModal(true)}>
              + {t(admin.addUser)}
            </button>
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
                placeholder="Search users..."
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
              <option value="active">{t(admin.active)}</option>
              <option value="inactive">{t(admin.inactive)}</option>
            </select>
          </div>

          {/* Users Table */}
          <div className="tz-admin-table-container">
            <table className="tz-admin-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Joined</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id} className={!user.isActive ? 'tz-inactive-row' : ''}>
                    <td>
                      <div className="tz-user-cell">
                        <div className="tz-user-avatar">
                          {user.name.en.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <span className="tz-user-name">{t(user.name)}</span>
                          <span className="tz-username">@{user.username}</span>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{formatDate(user.joinDate)}</td>
                    <td>{user.totalOrders}</td>
                    <td>{siteConfig.currency.symbol}{user.totalSpent.toFixed(2)}</td>
                    <td>
                      <span className={`tz-status-badge ${user.isActive ? 'active' : 'inactive'}`}>
                        {user.isActive ? t(admin.active) : t(admin.inactive)}
                      </span>
                    </td>
                    <td>
                      <button
                        className={`tz-btn tz-btn-sm ${user.isActive ? 'tz-btn-danger' : 'tz-btn-success'}`}
                        onClick={() => toggleUserStatus(user.id)}
                        title={user.isActive ? t(admin.disableUser) : t(admin.enableUser)}
                      >
                        {user.isActive ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="tz-no-results">
              <p>No users found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Add User Modal */}
      <TZModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title={t(admin.addUser)}
        size="small"
      >
        <div className="tz-add-user-form">
          <div className="tz-form-group">
            <label>Username *</label>
            <input
              type="text"
              value={newUser.username}
              onChange={(e) => setNewUser(prev => ({ ...prev, username: e.target.value }))}
              placeholder="johndoe"
              required
            />
          </div>
          <div className="tz-form-group">
            <label>Email *</label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="tz-form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={newUser.name.en}
              onChange={(e) => setNewUser(prev => ({
                ...prev,
                name: { zh: e.target.value, en: e.target.value, it: e.target.value }
              }))}
              placeholder="John Doe"
            />
          </div>
          <div className="tz-form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={newUser.phone}
              onChange={(e) => setNewUser(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+39 333 123 4567"
            />
          </div>
          <div className="tz-modal-actions">
            <button className="tz-btn tz-btn-secondary" onClick={() => setShowAddModal(false)}>
              Cancel
            </button>
            <button
              className="tz-btn tz-btn-primary"
              onClick={handleAddUser}
              disabled={!newUser.username || !newUser.email}
            >
              Add User
            </button>
          </div>
        </div>
      </TZModal>
    </div>
  );
}
