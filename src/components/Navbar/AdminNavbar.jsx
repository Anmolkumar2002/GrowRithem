import { ChevronDown, CircleUser, Menu } from 'lucide-react';
import React, { useState } from 'react';

const AdminNavbar = ({ toggleSide }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 w-full h-12 bg-gray-950 text-white z-[999]'>
        <div className='flex justify-between mx-8 pt-2'>
          <div className='flex space-x-28 items-center'>
            <h1 className='text-xl'>Admin Panel</h1>
            <Menu className='hidden lg:block size-5 cursor-pointer text-gray-400 hover:text-gray-200' onClick={toggleSide}/>
          </div>
          <div className='flex items-center space-x-2 relative'>
            <CircleUser className='size-5 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
            <ChevronDown className='size-5 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && (
              <div className='absolute right-0 top-8 bg-white text-black w-40 rounded shadow'>
                <ul>
                  <li className='px-4 py-2 hover:bg-gray-200'>Settings</li>
                  <li className='px-4 py-2 hover:bg-gray-200'>Activity Log</li>
                  <li className='px-4 py-2 hover:bg-gray-200 border-t'>Logout</li>
                </ul>
              </div>
            )}
            <Menu className='lg:hidden size-5 cursor-pointer'onClick={toggleSide}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
