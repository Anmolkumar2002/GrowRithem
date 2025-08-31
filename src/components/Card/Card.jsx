import React from 'react'

const Card = ({Icon, title, text }) => {
  return (
    <>
      <div className=" relative self-stretch sm:w-[202px] h-56 flex flex-col mb-2 justify-start items-start  bg-blue-700  p-4 group group-hover:bg-blue-800  shadow-lg ">
          {/* <span className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-white transition-colors duration-300 group-hover:border-orange-400"></span> */}
          <span className="absolute top-0 right-0 w-3 h-3  border-t-4 border-r-4 border-white transition-all duration-300 group-hover:border-orange-400 group-hover:w-9 group-hover:h-9"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3  border-b-4 border-l-4 border-white transition-all duration-300 group-hover:border-orange-400 group-hover:w-9 group-hover:h-9"></span>
          {/* <span className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-white transition-colors duration-300 group-hover:border-orange-400"></span> */}
          <Icon size={40} className="mt-4 text-white group-hover:text-orange-400"/>
          <h1 className='mt-4 text-xl text-bold text-white group-hover:text-orange-400'>{title}</h1>
          <p className='mt-4 text-md text-white group-hover:text-orange-400'>{text}</p>
      </div>
    </>
  );
}

export default Card
