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

    const filledBg = "transition ease-in duration-300 bg-neon-teal flex items-center justify-center sm:justify-between text-default-black text-lg sm:text-2xl font-jura fixed w-screen"
    const transparentBg = "transition ease-in duration-300 bg-transparent flex items-center justify-center sm:justify-between text-neon-teal text-lg sm:text-2xl font-jura fixed w-screen"

    return (
        <React.Fragment>
            <nav className={navbar ? filledBg : transparentBg}>
                <a href="https://www.google.com" className="hover:text-neon-pink flex pl-2 sm:py-4">Dwayne Rill Jr. | Web Developer</a>
                <img src={logo} alt="" className="h-8 sm:h-16" />
                <div className="sm:flex hidden">
                    <a href="https://www.google.com" className="hover:text-neon-pink px-6">About</a>
                    <a href="https://www.google.com" className="hover:text-neon-pink px-6">Projects</a>
                    <a href="https://www.google.com" className="hover:text-neon-pink px-6">Contact</a>
                </div>
            </nav>
        </React.Fragment>
    )
}