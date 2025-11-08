import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contactus from './Pages/Contactus/Contactus'
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Admin/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';





const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
