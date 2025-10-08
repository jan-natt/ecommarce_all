import React from 'react';
import './common.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} My E-commerce. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
