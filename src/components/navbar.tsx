'use client';
import React from 'react';
import { useEffect, useState } from 'react';
const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }), [lastScrollY];
    return (
        <div>
            <nav id="nav" className={`fixed top-0 z-50 w-full bg-gray-400 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-700`}>
                <div className='px-3 py-4 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between'>
                    <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
          <span className=" bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:to-pink-500 dark:bg-clip-text dark:text-transparent self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Saravana Kumar I J</span>
      </div>
                        {/* <div className="flex space-x-4">
                    <a href='#about' className='text-gray-800 dark:text-gray-200'>About</a>
                    <a href='#experience' className='text-gray-800 dark:text-gray-200'>Experience</a>
                    <a href='#projects' className='text-gray-800 dark:text-gray-200'>Projects</a>
                    <a href='#education' className='text-gray-800 dark:text-gray-200'>Education</a>
                    <a href='#contact' className='text-gray-800 dark:text-gray-200'>Contact</a>
                </div> */}
                        <div className='flex items-center space-x-4'>
                            <a href="https://www.linked.com">
                                <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6"></img>
                            </a>
                            <a href="https://www.github.com">
                                <img src="/github.png" alt="Github" className="h-6 w-6"></img>
                            </a>
                            <button onClick={toggleDarkMode} className="focus:outline-none">
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-yellow-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                ) :
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.354 15.354a9 9 0 11-11.708-11.708 7.5 7.5 0 1011.708 11.708z" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;