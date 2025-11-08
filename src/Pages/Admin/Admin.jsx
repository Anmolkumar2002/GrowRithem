import React from 'react';
import { useAuth } from '../../context/AuthContext';

function Admin() {
  const { logout } = useAuth();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>👑 Welcome to Admin Dashboard</h1>
      <p>You are logged in as admin.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Admin;
