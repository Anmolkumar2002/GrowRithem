import React from 'react'
import image1 from '../../assets/images/image_1.jpg'
import image2 from '../../assets/images/image_2.jpg'
import image3 from '../../assets/images/image_3.jpg'
import Footer from '../Footer/Footer'

const BlogCard = () => {
    const blogCards = [
        {
            id: 1,
            image: image1,
            text: "Why Lead Generation is Key for Business Growth",
        },
        {
            id: 2,
            image: image2,
            text: "Why Lead Generation is Key for Business Growth",
        },
        {
            id: 3,
            image: image3,
            text: "Why Lead Generation is Key for Business Growth.",    
        },
    ];
  return (
    <>
        <div className='mt-20 flex items-center justify-center'>
            <div className='w-full px-10 md:px-0 md:w-[1100px]'>
                <div className='flex flex-row justify-center pb-5'>
                    <div className='sm:w-1/2 flex flex-col justify-center items-center text-center'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Read our latest blog </h1>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-1 mt-10'>
                    {blogCards.map((item, idx) => (
                        <div key={idx} className="h-[400px] self-stretch md:w-[350px] flex flex-col mb-2 justify-start items-start shadow-lg  ">
                            <div className='overflow-hidden w-full'>
                                <img className='w-full duration-300  object-cover' src={item.image} alt="" />
                            </div>
                            <div className='mt-6'>
                                <h1 className='text-center text-2xl font-semibold text-blue-800 px-3 sm:mb-0 mb-10'>{item.text}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default BlogCard
