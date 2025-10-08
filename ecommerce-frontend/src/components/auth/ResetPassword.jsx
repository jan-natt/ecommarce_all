import React, { useState } from 'react';
import { isEmail, required } from '../utils/validations';
import './auth.css';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!required(email)) {
      setError('Please enter your email');
      return;
    }
    if (!isEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    // TODO: call reset password API
    setError(null);
    setMessage('If that email exists, a reset link was sent.');
  }

  return (
    <div className="auth-page">
      <h2>Reset Password</h2>
      {error && <div className="auth-error">{error}</div>}
      {message && <div className="auth-success">{message}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit" className="btn">Send Reset Link</button>
      </form>
    </div>
  );
}
