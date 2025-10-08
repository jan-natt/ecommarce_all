import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmail, isStrongPassword, required } from '../utils/validations';
import './auth.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!required(email) || !required(password) || !required(confirm)) {
      setError('Please fill in all fields');
      return;
    }
    if (!isEmail(email)) {
      setError('Invalid email');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    if (!isStrongPassword(password)) {
      setError('Password must be at least 8 characters and include a number');
      return;
    }
    // TODO: call registration API
    setError(null);
    navigate('/login');
  }

  return (
    <div className="auth-page">
      <h2>Create Account</h2>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirm Password
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        </label>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}
