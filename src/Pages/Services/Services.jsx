import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import backImg3 from '../../assets/images/bg_3.jpg'

import { AppWindow, Code, Database, GlobeLock, MonitorSmartphone, Palette, Shield } from 'lucide-react'
import Card from '../../components/Card/Card'
import ImgCard from '../../components/Card/ImgCard'
import work_1 from '../../assets/images/work-1.jpg'
import work_2 from '../../assets/images/work-2.jpg'
import work_3 from '../../assets/images/work-3.jpg'
import work_4 from '../../assets/images/work-4.jpg'
import contact from '../../assets/images/contact.jpg'
import FAQcard from '../../components/Card/FAQcard'
import Footer from '../../components/Footer/Footer'

const Services = () => {
  const service = [
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
        
        <div className="h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backImg3})` }}>
          <div className="h-full w-full  flex flex-col items-center text-center justify-center bg-black/50">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Welcome to My Services
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white">
                  This is a beautiful banner with text on top
              </p>
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
                  {service.map((card) => (
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

        <Footer />
    </>
  )
}

export default Services
