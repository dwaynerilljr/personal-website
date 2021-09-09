import React, { useState } from 'react';

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <React.Fragment>
            <nav className={navbar ? "transition ease-in duration-300 bg-neon-teal flex text-default-black text-lg sm:text-2xl font-jura fixed w-screen" : "transition ease-in duration-300 bg-transparent flex text-neon-teal text-lg sm:text-2xl font-jura fixed w-screen"}>
                <a href="https://www.google.com" className="hover:text-neon-pink flex sm:p-6">Dwayne Rill Jr. | Web Developer</a>
                <a href="https://www.google.com" className="hover:text-neon-pink hidden sm:flex p-6 ml-auto">About</a>
                <a href="https://www.google.com" className="hover:text-neon-pink hidden sm:flex p-6">Projects</a>
                <a href="https://www.google.com" className="hover:text-neon-pink hidden sm:flex p-6">Contact</a>
            </nav>
        </React.Fragment>
    )
}