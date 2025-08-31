import React from 'react'
import { Plus, Minus } from "lucide-react";
const FAQcard = ({question, answers, isOpen, onClick}) => {
  return (
    <>
        <div className=' mb-5'>
            <div className={`rounded-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition ${isOpen ? "bg-blue-800 text-white" : "bg-white text-black"}`}>
                <button 
                    onClick={onClick}
                    className='w-full flex justify-between items-center px-4 sm:px-6 py-4 transition'
                >
                    <p className='text-base sm:text-xl'>{question}</p>
                    <span className='ml-2'>
                        {isOpen ? <Minus size={20}/> : <Plus size={20}/>}
                    </span>
                </button>
            </div>
            <div className={`transition-all duration-300 ${isOpen ? "sm:    max-h-60 opacity-100" : "max-h-0 opacity-0"} mt-3 rounded-[35px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-orange-400 overflow-hidden`}>
                <div className="px-6 py-4">
                    <ol className="list-decimal pl-5 space-y-2 text-white">
                        {answers.map((ans, i) => (
                            <li className='text-base' key={i}>{ans}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    </>
  )
}

export default FAQcard
