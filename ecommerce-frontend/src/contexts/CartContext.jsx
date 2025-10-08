import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { storage } from '../utils/helpers';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => storage.get('cart', []));

  useEffect(() => {
    storage.set('cart', items);
  }, [items]);

  function addItem(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + qty } : p));
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQty(id, qty) {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(() => items.reduce((s, i) => s + (i.qty || 0), 0), [items]);
  const totalPrice = useMemo(() => items.reduce((s, i) => s + (Number(i.price) || 0) * (i.qty || 0), 0), [items]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (ctx === undefined) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
