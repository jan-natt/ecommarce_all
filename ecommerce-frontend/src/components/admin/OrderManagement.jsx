import React, { useEffect, useState } from 'react';
import './admin.css';

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/admin/orders')
      .then((r) => r.json())
      .then((d) => setOrders(d || []))
      .catch((e) => console.warn('admin orders fetch', e));
  }, []);

  return (
    <div className="admin-orders">
      <h2>Order Management</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>#{o.id} - {o.status}</li>
        ))}
      </ul>
    </div>
  );
}
