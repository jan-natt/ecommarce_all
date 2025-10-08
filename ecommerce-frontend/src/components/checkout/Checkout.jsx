import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

export default function Checkout() {
  const [form, setForm] = useState({ name: '', address: '', city: '', postal: '', country: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // simple client-side check
    if (!form.name || !form.address) {
      setError('Please complete the shipping information');
      return;
    }
    // TODO: create order in backend and redirect to payment
    setError(null);
    navigate('/payment');
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Full name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} />
        </label>
        <label>
          City
          <input name="city" value={form.city} onChange={handleChange} />
        </label>
        <label>
          Postal code
          <input name="postal" value={form.postal} onChange={handleChange} />
        </label>
        <label>
          Country
          <input name="country" value={form.country} onChange={handleChange} />
        </label>
        <button type="submit" className="btn">Continue to payment</button>
      </form>
    </div>
  );
}
