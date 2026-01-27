/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const TZWishlistContext = createContext();
const WISHLIST_KEY = 'tz-wishlist';

export function TZWishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(WISHLIST_KEY);
        return saved ? JSON.parse(saved) : [];
      } catch { return []; }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = useCallback((product) => {
    setWishlist(prev => {
      if (prev.some(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  }, []);

  const toggleWishlist = useCallback((product) => {
    setWishlist(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const clearWishlist = useCallback(() => setWishlist([]), []);
  const isInWishlist = useCallback((productId) => wishlist.some(item => item.id === productId), [wishlist]);
  const wishlistCount = wishlist.length;

  const value = {
    wishlist, wishlistCount, addToWishlist, removeFromWishlist,
    toggleWishlist, clearWishlist, isInWishlist
  };

  return <TZWishlistContext.Provider value={value}>{children}</TZWishlistContext.Provider>;
}

export function useTZWishlist() {
  const context = useContext(TZWishlistContext);
  if (!context) throw new Error('useTZWishlist must be used within a TZWishlistProvider');
  return context;
}
