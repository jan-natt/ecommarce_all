import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

export default function Payment() {
  const [card, setCard] = useState({ number: '', name: '', exp: '', cvc: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setCard((c) => ({ ...c, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // client-side minimal validation
    if (!card.number || !card.name) {
      setError('Please provide card details');
      return;
    }
    setError(null);
    // TODO: integrate payment gateway
    navigate('/orders');
  }

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Card number
          <input name="number" value={card.number} onChange={handleChange} placeholder="4242 4242 4242 4242" />
        </label>
        <label>
          Name on card
          <input name="name" value={card.name} onChange={handleChange} />
        </label>
        <div className="row">
          <label>
            Expiry
            <input name="exp" value={card.exp} onChange={handleChange} placeholder="MM/YY" />
          </label>
          <label>
            CVC
            <input name="cvc" value={card.cvc} onChange={handleChange} placeholder="123" />
          </label>
        </div>
        <button type="submit" className="btn">Pay now</button>
      </form>
    </div>
  );
}
