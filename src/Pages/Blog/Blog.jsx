import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import backImg3 from '../../assets/images/bg_3.jpg'
import BlogCard from '../../components/Card/BlogCard'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
  return (
    <>
        <Navbar />
        
        <div className="h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backImg3})` }}>
            <div className="h-full w-full  flex flex-col items-center text-center justify-center bg-black/50">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Read Our Blog
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white">
                    This is a beautiful banner with text on top
                </p>
            </div>
        </div>

        <BlogCard/>

        <Footer />
    </>
  )
}

export default Blog
