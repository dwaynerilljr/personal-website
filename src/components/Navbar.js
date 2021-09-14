import React, { useState } from 'react';
import logo from '../no-bg-nav.svg'
import { FaHamburger } from 'react-icons/fa'

export default function Nav({ isOpen, toggle }) {
    const [navbar, setNavbar] = useState(false);

    const changeBackgroundOnScroll = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackgroundOnScroll);

    const filledBg = "transition ease-in duration-200 z-50 bg-neon-teal flex flex-col md:flex-row md:items-center md:justify-center md:justify-between text-default-black text-lg md:text-2xl font-jura fixed w-screen"
    const transparentBg = "transition ease-in duration-200 z-50 bg-transparent flex flex-col md:flex-row md:items-center md:justify-center md:justify-between text-neon-teal text-lg md:text-2xl font-jura fixed w-screen"

    return (
        <React.Fragment>
            <nav className={navbar ? filledBg : transparentBg} id="nav">
                <div className="flex items-center">
                    <a href="#home" className="hover:text-neon-pink flex pl-2 md:py-4 mr-auto md:mr-0">Dwayne Rill Jr. | Web Developer</a>
                    <div 
                        className="md:hidden"
                        onClick={toggle}
                    >
                        <FaHamburger className="mr-2" />
                    </div>
                </div>
                <img src={logo} alt="" className="h-8 md:flex hidden md:h-16" />
                <div className="md:flex hidden">
                    <a href="#about" className="hover:text-neon-pink px-6">About</a>
                    <a href="#projects" className="hover:text-neon-pink px-6">Projects</a>
                    <a href="#footer" className="hover:text-neon-pink px-6">Contact</a>
                </div>
                <div className={
                isOpen 
                    ? 'grid grid-rows-3 text-center w-full z-0 items-center bg-neon-teal' 
                    :  'hidden'
                }
                onClick={toggle}
                >
                    <a href="#about" className="hover:text-neon-pink text-default-black">About</a>
                    <a href="#projects" className="hover:text-neon-pink text-default-black p-0 md:px-6">Projects</a>
                    <a href="#footer" className="hover:text-neon-pink text-default-black md:px-6">Contact</a>
                </div>
            </nav>
        </React.Fragment>
    )
}