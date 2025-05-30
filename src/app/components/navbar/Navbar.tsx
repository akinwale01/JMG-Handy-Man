'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';  // disable scroll
  } else {
    document.body.style.overflow = 'auto';    // restore scroll
  }
  return () => {
    document.body.style.overflow = 'auto';    // cleanup
  };
}, [isOpen]);

    return (
        <nav className='flex px-5 justify-between items-center w-full relative z-50 py-3 lg:w-full lg:py-3 lg:px-20 lg:justify-between lg:items-center'>
            <div className='bg-[url(/assets/logo/bag.png)] h-20 w-20 bg-cover bg-center'
            />
            <div className='bg-[url(/assets/icons/menu-03.svg)] h-20 w-20 bg-cover bg-center lg:hidden' onClick={handleMenuClick}/>

            <div
                className={`fixed top-0 right-0 h-full  w-[60%] bg-[#5e0000] text-white p-6 transition-transform transform lg:hidden z-50 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
                } overflow-y-auto`}
            >

            <div className="flex justify-end pr-5">
                <div className='bg-[url(/assets/icons/icon-menu-close.svg)] w-10 h-10 bg-center bg-no-repeat bg-cover' onClick={handleClose}/>
            </div>

                <ul className='mt-20 space-y-10'>
                    <li><a href='#Why Choose Us' className='hover:underline text-xl' onClick={() => setIsOpen(false)}> Why Choose Us?</a></li>
                    <li><a href='#Services' className='hover:underline text-xl' onClick={() => setIsOpen(false)}> Our Services</a></li>
                    <li><a href='#About Us' className='hover:underline text-xl' onClick={() => setIsOpen(false)}> About Us</a></li>
                    <li><a href='#FAQ' className='hover:underline text-xl' onClick={() => setIsOpen(false)}>FAQ</a></li>
                </ul>

            </div>

                <ul className='hidden lg:flex items-center space-x-5'>
                    <li><a href='#Why Choose Us' className='text-base capitalize font-medium'>Why Choose Us?</a></li>
                    <li><a href='#Services' className='hover:underline text-base capitalize font-medium'>Our Services</a></li>
                    <li><a href='#About Us' className='hover:underline text-base capitalize font-medium'>About Us</a></li>
                    <li><a href='#FAQ' className='hover:underline text-base capitalize font-medium'>FAQ</a></li>
                </ul>

              <div className='hidden lg:flex lg:py-4 lg:bg-[#DA2327] lg:text-white lg:justify-center lg:items-center lg:px-6 lg:text-sm'>Request A Quote</div>

                 {/* Overlay */}
            {isOpen && (
                <div
                className="fixed inset-0 h-screen bg-opacity-50 lg:hidden z-40"
                onClick={handleClose}
                ></div>
            )}
    </nav>
    );
};