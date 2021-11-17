import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa'

export default function Nav({ isOpen, toggle }) {
    const [navbar, setNavbar] = useState(false);

    const changeBackgroundOnScroll = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackgroundOnScroll);

    const filledBg = "font-semibold md:transition md:ease-in md:duration-300 z-50 bg-secondary flex flex-col md:flex-row md:items-center md:justify-center md:justify-between text-white text-lg md:text-2xl font-primary fixed w-screen"
    const transparentBg = "font-semibold md:transition md:ease-in md:duration-300 z-50 bg-secondary md:bg-transparent flex flex-col md:flex-row md:items-center md:justify-center md:justify-between text-white text-lg md:text-2xl font-primary fixed w-screen"

    return (
        <>
            <nav className={navbar ? filledBg : transparentBg} id="nav">
                <div className="flex items-center font-secondary md:text-3xl">
                    <a href="#home" className="hover:text-ternary flex p-2 md:py-4 mr-auto md:mr-0">Dwayne Rill Jr. | Web Developer</a>
                    <div 
                        className="md:hidden"
                        onClick={toggle}
                    >
                        <FaHamburger className="mr-2" />
                    </div>
                </div>
                <div className="md:flex hidden">
                    <a href="#about" className="hover:text-primary px-6">About</a>
                    <a href="#projects" className="hover:text-primary px-6">Projects</a>
                    <a href="#footer" className="hover:text-primary px-6">Contact</a>
                </div>
                <div className={
                isOpen 
                    ? 'grid grid-rows-3 text-center w-full z-0 items-center bg-neon-teal' 
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