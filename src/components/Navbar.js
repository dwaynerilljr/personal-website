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
            <nav className={navbar ? "bg-neon-teal flex text-default-black text-2xl font-jura fixed w-screen" : "bg-transparent flex text-neon-teal text-2xl font-jura fixed w-screen"}>
                <a href="https://www.google.com" className="hover:text-neon-pink flex p-6">Dwayne Rill Jr. | Web Developer</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6 ml-auto">About</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6">Projects</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6">Contact</a>
            </nav>
        </React.Fragment>
    )
}