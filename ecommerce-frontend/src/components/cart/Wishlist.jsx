import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../utils/helpers';
import './cart.css';

export default function Wishlist() {
  const [items, setItems] = useState(() => storage.get('wishlist', []));

  function remove(id) {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    storage.set('wishlist', next);
  }

  if (!items.length) return (
    <div className="wishlist-empty">
      <h2>Your wishlist is empty</h2>
      <Link to="/shop" className="btn">Browse products</Link>
    </div>
  );

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      <ul className="wishlist-list">
        {items.map((it) => (
          <li key={it.id} className="wishlist-item">
            <img src={it.image || '/placeholder.png'} alt={it.name} />
            <div>
              <h3>{it.name}</h3>
              <div className="actions">
                <Link to={`/product/${it.id}`} className="btn btn-secondary">View</Link>
                <button className="btn btn-link" onClick={() => remove(it.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
