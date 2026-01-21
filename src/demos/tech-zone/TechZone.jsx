import { Routes, Route } from 'react-router-dom';
import { TZLanguageProvider } from './context/TZLanguageContext';
import { TZCartProvider } from './context/TZCartContext';
import { TZWishlistProvider } from './context/TZWishlistContext';
import { TZAdminProvider } from './context/TZAdminContext';
import TZHeader from './components/TZHeader';
import TZFooter from './components/TZFooter';
import TZCartSidebar from './components/TZCartSidebar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminUsers from './pages/admin/AdminUsers';
import AdminOrders from './pages/admin/AdminOrders';
import './TechZone.css';

function TechZoneLayout({ children }) {
  return (
    <div className="tz-app">
      <TZHeader />
      <main className="tz-main">
        {children}
      </main>
      <TZFooter />
      <TZCartSidebar />
    </div>
  );
}

function TechZoneAdmin({ children }) {
  return (
    <div className="tz-app tz-admin-app">
      {children}
    </div>
  );
}

export default function TechZone() {
  return (
    <TZLanguageProvider>
      <TZAdminProvider>
        <TZCartProvider>
          <TZWishlistProvider>
            <Routes>
              {/* Admin Routes - No Header/Footer */}
              <Route path="admin" element={<TechZoneAdmin><AdminDashboard /></TechZoneAdmin>} />
              <Route path="admin/products" element={<TechZoneAdmin><AdminProducts /></TechZoneAdmin>} />
              <Route path="admin/users" element={<TechZoneAdmin><AdminUsers /></TechZoneAdmin>} />
              <Route path="admin/orders" element={<TechZoneAdmin><AdminOrders /></TechZoneAdmin>} />

              {/* Public Routes - With Header/Footer */}
              <Route path="/" element={<TechZoneLayout><HomePage /></TechZoneLayout>} />
              <Route path="shop" element={<TechZoneLayout><ShopPage /></TechZoneLayout>} />
              <Route path="shop/:category" element={<TechZoneLayout><ShopPage /></TechZoneLayout>} />
              <Route path="product/:id" element={<TechZoneLayout><ProductDetailPage /></TechZoneLayout>} />
              <Route path="cart" element={<TechZoneLayout><CartPage /></TechZoneLayout>} />
              <Route path="checkout" element={<TechZoneLayout><CheckoutPage /></TechZoneLayout>} />
              <Route path="wishlist" element={<TechZoneLayout><WishlistPage /></TechZoneLayout>} />
              <Route path="about" element={<TechZoneLayout><AboutPage /></TechZoneLayout>} />
              <Route path="contact" element={<TechZoneLayout><ContactPage /></TechZoneLayout>} />
            </Routes>
          </TZWishlistProvider>
        </TZCartProvider>
      </TZAdminProvider>
    </TZLanguageProvider>
  );
}
