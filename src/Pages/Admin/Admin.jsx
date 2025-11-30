import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import SideNavbar from '../../components/Navbar/SideNavbar';

function Admin() {

  const [isSidenav, setIsSidenav] = useState(window.innerWidth >= 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);

      if (window.innerWidth < 1024) {
        setIsSidenav(false);   // mobile me sidenav hidden
      } else {
        setIsSidenav(true);    // desktop me sidenav visible
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AdminNavbar toggleSide={() => setIsSidenav(!isSidenav)} />

      <SideNavbar isOpen={isSidenav} />

      <div className={`pt-14 transition-all duration-300 ${isDesktop && isSidenav ? "ml-72" : "ml-8"}`}>
        <h1 className="text-3xl font-bold">👑 Welcome to Admin Dashboard</h1>
        <p>You are logged in as admin.</p>
      </div>
    </>
  );
}

export default Admin;
