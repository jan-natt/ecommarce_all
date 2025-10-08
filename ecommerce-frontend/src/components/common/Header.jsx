import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

export default function Header({ title = 'Shop', onToggleSidebar }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <button className="menu-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">☰</button>
        <Link to="/" className="logo">{title}</Link>
      </div>
      <nav className="header-nav">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
