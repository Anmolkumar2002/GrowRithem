import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import backImg3 from '../../assets/images/bg_3.jpg'
import backImg2 from '../../assets/images/bg_2.jpg'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/Form/ContactForm'

const Contactus = () => {
  return (
    <>
        <Navbar />
        
        <div className="h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backImg3})` }}>
            <div className="h-full w-full  flex flex-col items-center text-center justify-center bg-black/50">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Contact Us
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white">
                    This is a beautiful banner with text on top
                </p>
            </div>
        </div>

        

        <div className="h-screen bg-fixed bg-cover bg-top"  style={{ backgroundImage: `url(${backImg2})` }}>
            <div className="h-full w-full bg-black/20">
                <div className='pt-32 flex justify-center items-center'>
                    <div className='w-full md:w-[700px] lg:w-[900px] xl:w-[1100px] px-10 md:px-0'>
                        <div className='md:w-1/2 flex flex-col justify-center'>
                            <h1 className='text-3xl xl:text-4xl font-bold text-white'>
                                Don't hesitate to contact us            
                            </h1>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </>
  )
}

export default Contactus
