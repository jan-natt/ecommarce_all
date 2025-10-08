import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, required } from '../utils/validations';
import './auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!required(email) || !required(password)) {
      setError('Please fill in all fields');
      return;
    }
    if (!isEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    // TODO: call API to log in
    setError(null);
    // fake success
    navigate('/');
  }

  return (
    <div className="auth-page">
      <h2>Login</h2>
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
        <button type="submit" className="btn">Login</button>
      </form>
      <div className="auth-links">
        <Link to="/register">Create account</Link>
        <Link to="/reset-password">Forgot password?</Link>
      </div>
    </div>
  );
}
