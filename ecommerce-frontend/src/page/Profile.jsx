import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
