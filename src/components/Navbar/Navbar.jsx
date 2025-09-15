import React, { useState } from 'react'
import { X } from "lucide-react"; 
import { Menu } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className='fixed flex items-center justify-center top-0 left-0 w-full h-16 bg-black text-white lg:text-black lg:bg-white  z-50'>
        <div className='w-[400px] sm:w-[600px] md:w-[780px] lg:w-[1000px] xl:w-[1100px]'>
          <div className='flex items-center justify-between relative'>
            <a href="#" className="text-2xl font-bold tracking-wide"><span className="text-blue-800">Grows</span><span className="text-orange-400 ">Rithem</span></a>
            <button className="lg:hidden ml-auto "onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 text-white hover:text-blue-800" />
              ) : (
                <Menu className="w-6 h-6 text-white hover:text-blue-800" />
              )}
            </button>
            <div>
              <ul className="hidden lg:flex space-x-10 font-medium">
                <li className="hover:text-blue-800 cursor-pointer">Home</li>
                <li className="hover:text-blue-800 cursor-pointer">Services</li>
                <li className="hover:text-blue-800 cursor-pointer">About</li>
                <li className="hover:text-blue-800 cursor-pointer">Blog</li>
                <li className="hover:text-blue-800 cursor-pointer">Contact us</li>
              </ul>
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-black text-white lg:hidden">
              <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
                <li className="hover:text-blue-800 cursor-pointer">Home</li>
                <li className="hover:text-blue-800 cursor-pointer">Services</li>
                <li className="hover:text-blue-800 cursor-pointer">About</li>
                <li className="hover:text-blue-800 cursor-pointer">Blog</li>
                <li className="hover:text-blue-800 cursor-pointer">Contact us</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
