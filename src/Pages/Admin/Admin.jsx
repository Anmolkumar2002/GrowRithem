import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar/Navbar'
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import SideNavbar from '../../components/Navbar/SideNavbar';

function Admin() {
  const { logout } = useAuth();

  return (
    <>
    <div style={{ textAlign: 'center' }}>
      <AdminNavbar />
      {/* <SideNavbar />     */}
      
      <h1>👑 Welcome to Admin Dashboard</h1>
      <p>You are logged in as admin.</p>
      <button onClick={logout}>Logout</button>
      {/* <Navbar /> */}
    </div>
    </>
  );
}

export default Admin;
