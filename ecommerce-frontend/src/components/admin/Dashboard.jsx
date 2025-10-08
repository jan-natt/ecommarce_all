import React from 'react';
import './admin.css';

export default function Dashboard() {
  // For a real app you'd fetch counts and charts
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="cards">
        <div className="card">Users: 123</div>
        <div className="card">Orders: 45</div>
        <div className="card">Products: 67</div>
      </div>
    </div>
  );
}
