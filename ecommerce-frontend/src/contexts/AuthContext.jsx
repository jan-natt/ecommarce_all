import React, { createContext, useContext, useEffect, useState } from 'react';
import { storage } from '../utils/helpers';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => storage.get('user', null));
  const [token, setToken] = useState(() => storage.get('token', null));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    storage.set('user', user);
  }, [user]);

  useEffect(() => {
    storage.set('token', token);
  }, [token]);

  async function login(credentials) {
    // credentials: { email, password }
    setLoading(true);
    try {
      // Replace with your API call
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Login failed');
      }
      const data = await res.json();
      // expected shape: { user, token }
      setUser(data.user || null);
      setToken(data.token || null);
      return { success: true };
    } catch (e) {
      return { success: false, message: e.message };
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
    setToken(null);
    storage.remove('user');
    storage.remove('token');
  }

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    setUser,
    setToken,
    isAuthenticated: Boolean(token),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
