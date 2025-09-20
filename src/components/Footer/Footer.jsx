import { Facebook, Instagram, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex justify-center bg-[#05091f] text-white'>
            <div className='w-full md:w-[650px] lg:w-[900px] xl:w-[1100px]'>
                <div className='flex flex-col items-baseline md:px-0 md:flex-row mt-20 space-x-6 lg:space-x-12'>
                    <div className='md:w-1/4 mx-5 md:mx-0'>
                        <div className='flex flex-col'>
                            <h1><span className='text-xl font-bold text-blue-800'>Grow</span><span className='text-xl font-bold text-orange-400'>Rithem</span></h1>
                            <p className='mt-8 text-gray-300  lg:tracking-wider leading-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul className='mt-5 text-gray-300 flex flex-row md:flex-col lg:flex-row space-y-0 md:space-y-3 lg:space-y-0 lg:space-x-7 md:space-x-0 space-x-7'>
                                <li><a href="#"><span><Twitter className="w-10 h-10 bg-slate-600 rounded-full p-2"/></span></a></li>
                                <li><a href="#"><span><Facebook className="w-10 h-10 bg-slate-600 rounded-full p-2"/></span></a></li>
                                <li><a href="#"><span><Instagram className="w-10 h-10 bg-slate-600 rounded-full p-2"/></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-1/4 mt-16 md:mt-0'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-bold'>Explore</h1>
                            <ul className='mt-8 text-gray-300 space-y-4'>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">What We Do</a></li>
                                <li><a href="">Plan & Pricing</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><a href="">Call Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-1/4 mt-16 md:mt-0'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-bold'>Legal</h1>
                            <ul className='mt-8 text-gray-300 space-y-4'>
                                <li><a href="">Join Us</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Privacy & Policy</a></li>
                                <li><a href="">Terms & Condition</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-1/4 mt-16 md:mt-0'>
                        <div className='flex flex-col'>
                            <h2 className='text-xl font-bold'>Have a Questions?</h2>
                            <ul className='mt-8 text-gray-300 space-y-5'>
                                <li className='flex space-x-3'>
                                    <span><MapPin /></span>
                                    <span className='md:tracking-wider md:leading-7'>New Ashok Nagar, New Delhi, India</span>
                                </li>
                                <li>
                                    <a className='flex space-x-3' href="#">
                                        <span><Phone /></span>
                                        <span>+91 9910137726</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='flex space-x-3' href="#">
                                        <span><Send /></span>
                                        <span>Dheeraj@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mt-20 flex px-5 md:px-0 items-center justify-center text-center text-gray-300  tracking-wider leading-7 pb-8'> 
                    <p>Copyright ©2025 All rights reserved | This template is made by Dheeraj</p>
                </div>           
            </div>
        </div>
    </>
  )
}

export default Footer
