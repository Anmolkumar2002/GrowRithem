import { ChevronDown, CircleUser, Contact, Contact2Icon, Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar';

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidenav, setIsSidenav] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsSidenav(false);
        } else {
            setIsSidenav(true);
        }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
        <nav className='fixed top-0 left-0 w-full h-12 bg-gray-950 text-white'>
            <div className='flex justify-between mx-8 pt-2'>
                <div className='flex space-x-28 justify-center items-center'>
                    <h1 className='text-xl'>Admin Panel</h1>
                    <Menu className='hidden lg:flex size-5 stroke-[3] text-gray-400 hover:text-gray-300 cursor-pointer transition' onClick={() =>setIsSidenav(!isSidenav)} />
                </div>
                <div className='flex justify-center items-center space-x-1 group'>
                    <CircleUser className='size-5 stroke-[3] text-gray-400 group-hover:text-gray-300 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                    <ChevronDown className='size-5 stroke-[3] text-gray-400 group-hover:text-gray-300 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                    {isOpen && (
                        <div className="absolute right-0 top-10 w-40 bg-white text-black rounded-md shadow-lg py-2">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Activity Log</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200">Logout</li>
                            </ul>
                        </div>
                    )}
                    <div className="block lg:hidden">
                        <Menu className="size-5 stroke-[3] text-gray-400 hover:text-gray-300 cursor-pointer transition" onClick={() =>setIsSidenav(!isSidenav)}/>
                    </div>
                </div>
            </div>
        </nav>
        {/* {isSidenav && (
            <SideNavbar />
        )} */}
        <SideNavbar isOpen={isSidenav} />
    </>
  )
}

export default AdminNavbar
