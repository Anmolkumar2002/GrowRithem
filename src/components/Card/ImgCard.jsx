import React from 'react'

const ImgCard = ({image, title, text}) => {
  return (
    <>
        <div className="h-[475px] self-stretch sm:w-[256px] flex flex-col mb-2 justify-start items-start shadow-lg  ">
            <div className='overflow-hidden w-full'>
                <img className='w-full duration-300 hover:scale-125 object-cover' src={image} alt="" />
            </div>
            <div className='mt-6'>
                <span className='text-md text-gray-500 flex justify-center'>{title}</span>
                <h1 className='text-center text-2xl font-semibold text-blue-800 px-3 sm:mb-0 mb-10'>{text}</h1>
            </div>
        </div>
    </>
  )
}

export default ImgCard
