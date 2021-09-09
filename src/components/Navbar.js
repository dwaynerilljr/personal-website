import React, { useState } from 'react';
import logo from '../no-bg-nav.svg'

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    const filledBg = "transition ease-in duration-300 bg-neon-teal flex items-center text-default-black text-lg sm:text-2xl font-jura fixed w-screen"
    const transparentBg = "transition ease-in duration-300 bg-transparent flex items-center text-neon-teal text-lg sm:text-2xl font-jura fixed w-screen"

    return (
        <React.Fragment>
            <nav className={navbar ? filledBg : transparentBg}>
                <img src={logo} alt="" className="h-8 sm:h-14" />
                <a href="https://www.google.com" className="hover:text-neon-pink flex sm:py-4">Dwayne Rill Jr. | Web Developer</a>
                <a href="https://www.google.com" className="hover:text-neon-pink hidden sm:flex px-6 ml-auto">About</a>
                <a href="https://www.google.com" className="hover:text-neon-pink hidden sm:flex px-6">Projects</a>
                <a href="https://www.google.com" className="hover:text-neon-pink hidden sm:flex px-6">Contact</a>
            </nav>
        </React.Fragment>
    )
}