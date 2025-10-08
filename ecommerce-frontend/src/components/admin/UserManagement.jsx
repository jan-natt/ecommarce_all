import React, { useEffect, useState } from 'react';
import './admin.css';

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/admin/users')
      .then((r) => r.json())
      .then((d) => setUsers(d || []))
      .catch((e) => console.warn('users fetch', e));
  }, []);

  return (
    <div className="admin-users">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Email</th><th>Role</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td><button className="btn">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
