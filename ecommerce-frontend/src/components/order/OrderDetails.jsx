import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './order.css';

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/orders/${id}`)
      .then((r) => r.json())
      .then((data) => setOrder(data))
      .catch((e) => console.warn('order fetch', e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading order...</div>;
  if (!order) return <div>Order not found.</div>;

  return (
    <div className="order-details">
      <h2>Order #{order.id}</h2>
      <div>Status: {order.status}</div>
      <h3>Items</h3>
      <ul>
        {order.items.map((it) => (
          <li key={it.id}>{it.name} x {it.qty}</li>
        ))}
      </ul>
      <div>Total: {order.total}</div>
    </div>
  );
}
