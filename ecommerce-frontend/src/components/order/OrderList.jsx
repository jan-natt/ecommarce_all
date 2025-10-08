import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './order.css';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: fetch user's orders from API
    fetch('/api/orders')
      .then((r) => r.json())
      .then((data) => setOrders(data || []))
      .catch((e) => console.warn('orders fetch', e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading orders...</div>;
  if (!orders.length) return <div>No orders found.</div>;

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>
      <ul className="orders-list">
        {orders.map((o) => (
          <li key={o.id} className="order-item">
            <div>
              <strong>Order #{o.id}</strong>
              <div>{new Date(o.created_at).toLocaleString()}</div>
            </div>
            <div>
              <Link to={`/orders/${o.id}`} className="btn btn-secondary">View</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
