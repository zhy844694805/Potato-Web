import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { products as initialProducts } from '../data/productsData';
import { mockUsers as initialUsers, mockOrders as initialOrders, adminCredentials } from '../data/mockData';

const TZAdminContext = createContext();

const PRODUCTS_KEY = 'tz-products';
const USERS_KEY = 'tz-users';
const ORDERS_KEY = 'tz-orders';
const SESSION_KEY = 'tz-admin-session';

export function TZAdminProvider({ children }) {
  // Admin authentication
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(SESSION_KEY) === 'true';
    }
    return false;
  });

  // Products state with localStorage persistence
  const [products, setProducts] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(PRODUCTS_KEY);
        return saved ? JSON.parse(saved) : initialProducts;
      } catch {
        return initialProducts;
      }
    }
    return initialProducts;
  });

  // Users state
  const [users, setUsers] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(USERS_KEY);
        return saved ? JSON.parse(saved) : initialUsers;
      } catch {
        return initialUsers;
      }
    }
    return initialUsers;
  });

  // Orders state
  const [orders, setOrders] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(ORDERS_KEY);
        return saved ? JSON.parse(saved) : initialOrders;
      } catch {
        return initialOrders;
      }
    }
    return initialOrders;
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(SESSION_KEY, isAuthenticated.toString());
  }, [isAuthenticated]);

  // Authentication
  const login = useCallback((username, password) => {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  // Product management
  const updateProductPrice = useCallback((productId, newPrice) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === productId ? { ...p, price: newPrice } : p
      )
    );
  }, []);

  const toggleProductStatus = useCallback((productId) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === productId ? { ...p, isActive: !p.isActive } : p
      )
    );
  }, []);

  const updateProduct = useCallback((productId, updates) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === productId ? { ...p, ...updates } : p
      )
    );
  }, []);

  // User management
  const addUser = useCallback((userData) => {
    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      joinDate: new Date().toISOString().split('T')[0],
      totalOrders: 0,
      totalSpent: 0,
      isActive: true
    };
    setUsers(prev => [...prev, newUser]);
    return newUser;
  }, []);

  const toggleUserStatus = useCallback((userId) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === userId ? { ...u, isActive: !u.isActive } : u
      )
    );
  }, []);

  const updateUser = useCallback((userId, updates) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === userId ? { ...u, ...updates } : u
      )
    );
  }, []);

  // Order management
  const updateOrderStatus = useCallback((orderId, status) => {
    setOrders(prev =>
      prev.map(o =>
        o.id === orderId
          ? {
              ...o,
              status,
              deliveredDate: status === 'delivered' ? new Date().toISOString() : o.deliveredDate
            }
          : o
      )
    );
  }, []);

  // Reset to initial data
  const resetData = useCallback(() => {
    setProducts(initialProducts);
    setUsers(initialUsers);
    setOrders(initialOrders);
    localStorage.removeItem(PRODUCTS_KEY);
    localStorage.removeItem(USERS_KEY);
    localStorage.removeItem(ORDERS_KEY);
  }, []);

  // Stats
  const getActiveProducts = useCallback(() => {
    return products.filter(p => p.isActive);
  }, [products]);

  const getProductById = useCallback((id) => {
    return products.find(p => p.id === id);
  }, [products]);

  const value = {
    // Auth
    isAuthenticated,
    login,
    logout,
    // Products
    products,
    getActiveProducts,
    getProductById,
    updateProductPrice,
    toggleProductStatus,
    updateProduct,
    // Users
    users,
    addUser,
    toggleUserStatus,
    updateUser,
    // Orders
    orders,
    updateOrderStatus,
    // Utils
    resetData
  };

  return (
    <TZAdminContext.Provider value={value}>
      {children}
    </TZAdminContext.Provider>
  );
}

export function useTZAdmin() {
  const context = useContext(TZAdminContext);
  if (!context) {
    throw new Error('useTZAdmin must be used within a TZAdminProvider');
  }
  return context;
}
