import { CircleUser, Gauge, KeyRound, LogOut } from 'lucide-react'
import React from 'react'

const SideNavbar = ({ isOpen}) => {
  return (
    <>
    <div className={`fixed top-12 left-0 w-full z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='w-1/6 h-screen bg-gray-950 text-gray-400'>
            <div className='flex flex-col mx-7 pt-8 space-y-8'>
                <div className='flex'>
                    <p className='font-bold'>Core</p>
                </div>
                <div className='flex space-x-4'>
                    <Gauge className='text-gray-500'/>
                    <p className='font-semibold hover:text-white'>Dashboard</p>
                </div>
                <div className='flex space-x-4'>
                    <CircleUser className='text-gray-500'/>
                    <p className='font-semibold hover:text-white'>Profile</p>
                </div>
                <div className='flex space-x-4'>
                    <KeyRound className='text-gray-500'/>
                    <p className='font-semibold hover:text-white'>Change Password</p>
                </div>
                <div className='flex space-x-4'>
                    <LogOut className='text-gray-500'/>
                    <p className='font-semibold hover:text-white'>Signout</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideNavbar
