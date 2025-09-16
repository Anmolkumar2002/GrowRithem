import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contactus from './Pages/Contactus/Contactus'





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
  )
}

export default App
