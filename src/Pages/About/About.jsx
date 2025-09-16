import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import backImg3 from '../../assets/images/bg_3.jpg'
import contact from '../../assets/images/contact.jpg'
import backImg1 from '../../assets/images/background.jpg'
import { AppWindow, GlobeLock, MonitorSmartphone } from 'lucide-react'
import BlogCard from '../../components/Card/BlogCard'
import TestimonialSlider from '../../components/Slider/TestimonialSlider'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <>
        <Navbar />
        
        <div className="h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backImg3})` }}>
            <div className="h-full w-full  flex flex-col items-center text-center justify-center bg-black/50">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    About Us
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white">
                    This is a beautiful banner with text on top
                </p>
            </div>
        </div>

        <div className='mt-20 flex items-center justify-center'>
            <div className='w-[420px] sm:w-[620px] md:w-[700px] lg:w-[900px] xl:w-[1100px]'>
                <div className='flex flex-row justify-center'>
                    <div className='sm:w-1/2 flex flex-col justify-center items-center text-center'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>More than <span className='text-blue-800'>20+</span> years we provide <span className='text-blue-800'>Grow Rithem</span></h1>
                        <p className='text-sm sm:text-md text-gray-600 mt-10'>Far Far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className='flex flex-col items-center sm:flex-row pb-5 w-full mt-10'>
                    <div className='w-1/2 sm:w-1/3 flex flex-col items-center text-center mt-10'>
                        <AppWindow className='text-blue-800 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'/>
                        <h1 className='text-md md:text-lg lg:text-xl font-bold mt-4'>Web Development</h1>
                        <p className='text-sm md:text-base lg:text-md text-gray-600 mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                    <div className='w-1/2 sm:w-1/3 flex text-blue-800 justify-center mt-10'>
                        <MonitorSmartphone className='w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 font-thin'/>
                    </div>
                    <div className='w-1/2 sm:w-1/3 flex flex-col items-center text-center mt-10'>
                        <GlobeLock className='text-blue-800 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'/>
                        <h1 className='text-md md:text-lg lg:text-xl font-bold mt-4'>Server Security</h1>
                        <p className='text-sm md:text-base lg:text-md text-gray-600 mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-20 flex items-center justify-center'>
            <div className='w-full md:w-[700px] lg:w-[900px] xl:w-[1100px] px-10 md:px-0'>
                <div className='flex flex-col items-center md:flex-row'>
                    <div className='md:w-1/2'>
                        <img src={contact} alt="" className='object-cover h-[560px]' />
                    </div>
                    <div className='md:w-1/2 flex flex-col bg-blue-700 text-white sm:h-[560px] px-12 py-5'>
                        <div className='flex flex-row justify-start mt-10'>
                            <div className='flex flex-col'>
                                <h1 className='text-4xl font-bold'>Consult us here in <span className='text-orange-400'>Grow Rithem</span></h1>
                                <p className='text-md text-gray-300 mt-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            </div>
                        </div>
                        <div className='flex flex-row flex-wrap mt-10'>
                            <div className='w-1/2 flex justify-start items-center mt-5'>
                                <div className='mb-10'>
                                    <h1 className='text-4xl font-bold'>750</h1>
                                    <p className='text-md text-gray-300 mt-2 text-wrap'>Project Complete</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-start items-center mt-5'>
                                <div className='mb-10'>
                                    <h1 className='text-4xl font-bold'>568</h1>
                                    <p className='text-md text-gray-300 mt-2 text-wrap'>Happy Clients</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-start items-center mt-5'>
                                <div className='mb-10'>
                                    <h1 className='text-4xl font-bold'>478</h1>
                                    <p className='text-md text-gray-300 mt-2 text-wrap'>Business Partners</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-start items-center mt-5'>
                                <div className='mb-10'>
                                    <h1 className='text-4xl font-bold'>780</h1>
                                    <p className='text-md text-gray-300 mt-2 text-wrap'>IT Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="h-screen bg-fixed bg-cover bg-center"  style={{ backgroundImage: `url(${backImg1})` }}>
            <div className="h-full w-full bg-black/50">
                <div className='pt-32'>
                    <div className='flex items-center justify-center'>
                        <div className='w-full lg:w-[990px] xl:w-[1100px] px-10 lg:px-0 flex flex-col items-center justify-center'>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Our insights & creative ideas            
                            </h1>
                        </div>
                    </div>
                    <div>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </>
  )
}

export default About
