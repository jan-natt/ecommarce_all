import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

export default function Sidebar({ isOpen = false, onClose }) {
  return (
    <aside className={`app-sidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <button className="close-btn" onClick={onClose} aria-label="Close sidebar">×</button>
      <nav className="sidebar-nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </aside>
  );
}
