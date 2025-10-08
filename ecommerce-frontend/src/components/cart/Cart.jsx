import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storage, formatCurrency } from '../utils/helpers';
import './cart.css';

export default function Cart() {
  const [items, setItems] = useState(() => storage.get('cart', []));

  useEffect(() => {
    storage.set('cart', items);
  }, [items]);

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function changeQty(id, qty) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  const total = items.reduce((s, i) => s + (Number(i.price) || 0) * (i.qty || 1), 0);

  if (!items.length) return (
    <div className="cart-empty">
      <h2>Your cart is empty</h2>
      <Link to="/shop" className="btn">Go to shop</Link>
    </div>
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {items.map((it) => (
          <li key={it.id} className="cart-item">
            <img src={it.image || '/placeholder.png'} alt={it.name} />
            <div className="meta">
              <h3>{it.name}</h3>
              <div className="price">{formatCurrency(it.price)}</div>
              <label>
                Qty
                <input type="number" min="1" value={it.qty || 1} onChange={(e) => changeQty(it.id, Number(e.target.value))} />
              </label>
              <button className="btn btn-link" onClick={() => removeItem(it.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Subtotal: {formatCurrency(total)}</h3>
        <Link to="/checkout" className="btn">Proceed to checkout</Link>
      </div>
    </div>
  );
}
