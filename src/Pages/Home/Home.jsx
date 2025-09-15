import { AppWindow, Biohazard, CloudLightning, Code, Database, GlobeLock, Lightbulb, MonitorSmartphone, Palette, Shield, User, Zap } from 'lucide-react';
import React, { useState } from 'react'
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import backImg1 from '../../assets/images/background.jpg'
import work_1 from '../../assets/images/work-1.jpg'
import work_2 from '../../assets/images/work-2.jpg'
import work_3 from '../../assets/images/work-3.jpg'
import work_4 from '../../assets/images/work-4.jpg'
import contact from '../../assets/images/contact.jpg'
import backImg2 from '../../assets/images/bg_2.jpg'
import FAQcard from '../../components/Card/FAQcard';
import Card from '../../components/Card/Card';
import ImgCard from '../../components/Card/ImgCard';
import BlogCard from '../../components/Card/BlogCard';
import ContactForm from '../../components/Form/ContactForm';


const Home = () => {
    const cards = [
        { id: 1, text: "Information Technology Consultancy", icon: Zap },
        { id: 2, text: "Product Design Strategy", icon: Lightbulb },
        { id: 3, text: "Services", icon: CloudLightning },
        { id: 4, text: "Cyber Security & Web Sevelopment", icon: Biohazard },
        { id: 5, text: "Cyber Security & Web", icon: User },
    ];
    const services = [
        { 
            id: 1, 
            title: "Web Development", 
            text: "Building modern, scalable and responsive web applications.", 
            icon: Code 
        },
        { 
            id: 2, 
            title: "Database Analysis", 
            text: "Optimizing and managing structured data with efficiency.", 
            icon: Database 
        },
        { 
            id: 3, 
            title: "Server Security", 
            text: "Protecting servers and networks from threats & vulnerabilities.", 
            icon: Shield 
        },
        { 
            id: 4, 
            title: "UX/UI Strategy", 
            text: "Designing user-friendly and engaging digital experiences.", 
            icon: Palette 
        },
    ];
    const imgCards = [
        {
            id: 1,
            image: work_1,
            title: "Web Development",
            text: "Best Solution for Information Technology",
        },
        {
            id: 2,
            image: work_2,
            title: "Server Security",
            text: "Analyze and optimize your data effectively.",
        },
        {
            id: 3,
            image: work_3,
            title: "Database Analysis",
            text: "Keep your systems safe and protected.",
        },
        {
            id: 4,
            image: work_4,
            title: "UX/UI Strategy",
            text: "Strategy for Enduring Customer Relationships",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "How Can We Help Your Business?",
            answers: [
                "Far far away, behind the word mountains",
                "Consonantia, there live the blind texts",
                "When she reached the first hills of the Italic Mountains",
                "Bookmarksgrove, the headline of Alphabet Village",
                "Separated they live in Bookmarksgrove right"
            ]
        },
        {
            question: "How Can We Help Your Business?",
            answers: [
                "Far far away, behind the word mountains",
                "Consonantia, there live the blind texts",
                "When she reached the first hills of the Italic Mountains",
                "Bookmarksgrove, the headline of Alphabet Village",
                "Separated they live in Bookmarksgrove right"
            ]
        },
        {
            question: "How Can We Help Your Business?",
            answers: [
                "Far far away, behind the word mountains",
                "Consonantia, there live the blind texts",
                "When she reached the first hills of the Italic Mountains",
                "Bookmarksgrove, the headline of Alphabet Village",
                "Separated they live in Bookmarksgrove right"
            ]
        },
        {
            question: "How Can We Help Your Business?",
            answers: [
                "Far far away, behind the word mountains",
                "Consonantia, there live the blind texts",
                "When she reached the first hills of the Italic Mountains",
                "Bookmarksgrove, the headline of Alphabet Village",
                "Separated they live in Bookmarksgrove right"
            ]
        },
    ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <>
        
        <Navbar />

        <div className="h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backImg1})` }}>
            <div className="h-full w-full  flex flex-col items-center text-center justify-center bg-black/50">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Welcome to My Website
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    This is a beautiful banner with text on top
                </p>
                <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">
                    Get Started
                </button>
            </div>
        </div>

        <div className="mt-20 flex items-center justify-center">
            <div className='w-full px-8 md:w-[1100px]'>
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-center jutify-center gap-1'>
                    {cards.map((card) => (
                    <Card key={card.id}  text={card.text} Icon={card.icon} />
                    ))}
                </div>
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

        <div className='mt-20 flex items-center justify-center'>
            <div className='w-full px-8 md:w-[1100px]'>
                <div className='flex flex-row justify-center pb-5'>
                    <div className='sm:w-1/2 flex flex-col justify-center items-center text-center'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>Our Exclusive <span className='text-blue-800'>Grow Rithem</span> Services</h1>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-1 mt-10'>
                    {services.map((card) => (
                    <Card key={card.id} title={card.title}  text={card.text} Icon={card.icon} />
                    ))}
                </div>             
            </div>
        </div>

        <div className='mt-20 flex items-center justify-center'>
            <div className='w-full px-10 md:px-0 md:w-[1100px]'>
                <div className='flex flex-row justify-center pb-5'>
                    <div className='sm:w-1/2 flex flex-col justify-center items-center text-center'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>Our Strategic <span className='text-blue-800'>Work</span></h1>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-1 mt-10'>
                    {imgCards.map((imgcard) => (
                        <ImgCard key={imgcard.id} image={imgcard.image} title={imgcard.title} text={imgcard.text} />
                    ))}
                </div>
            </div>
        </div>
        
        <div className='mt-20 flex items-center justify-center mb-10 bg-gray-50 py-20'>
            <div className='w-full lg:w-[990px] xl:w-[1100px] px-10 lg:px-0'>
                <div className='flex flex-col lg:flex-row justify-center'>
                    <div className='lg:w-1/2 p-2'>
                        <div className='mb-5 mt-5 lg:mt-0'>
                            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>Frequently Asks Questions</h1>
                        </div>
                        <div className='w-full mt-20'>
                            {faqs.map((faq, index) => (
                                <FAQcard
                                key={index}
                                question={faq.question}
                                answers={faq.answers}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex flex-col p-2'>
                        <div className='mb-[10px] '>
                            <img src={contact} alt="" className='object-cover' />
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div><img src={work_2} alt="" className='object-cover' /></div>
                            <div><img src={work_3} alt="" className='object-cover' /></div>
                            {/* <img src="/images/work-2.jpg" alt="" className='object-cover' />
                            <img src="/images/work-3.jpg" alt="" className='object-cover' /> */}
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

        <BlogCard />

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

export default Home
