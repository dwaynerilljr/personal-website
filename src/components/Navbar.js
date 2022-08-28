import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa'

export default function Nav({ isOpen, toggle }) {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className="flex p-10 items-center text-xl" id="nav">
                <div className="flex font-semibold">
                    <a href="#home" className="text-primary flex p-2 md:py-4 mr-auto md:mr-0">Dwayne Rill Jr.</a>
                    {/* Hide navbar toggle on larger screens  */}
                    <div 
                        className="md:hidden"
                        onClick={toggle}
                    >
                        <FaHamburger className="mr-2" />
                    </div>
                </div>
                <div className="md:flex hidden ml-auto">
                    <a href="#about" className="hover:text-primary px-6">About</a>
                    <a href="#projects" className="hover:text-primary px-6">Projects</a>
                    <a href="#footer" className="hover:text-primary px-6">Contact</a>
                </div>
                <div className={
                isOpen 
                    ? 'grid grid-rows-3 text-center w-full z-0 items-center' 
                    :  'hidden'
                }
                onClick={toggle}
                >
                    <a href="#about" className="hover:text-primary text-default-black">About</a>
                    <a href="#projects" className="hover:text-primary text-default-black p-0 md:px-6">Projects</a>
                    <a href="#footer" className="hover:text-primary text-default-black md:px-6">Contact</a>
                </div>
            </nav>
        </>
    )
}