import React from 'react';

export default function Nav() {
    return (
        <React.Fragment>
            <nav className="flex text-neon-teal text-2xl font-jura bg-transparent fixed w-full">
                <a href="https://www.google.com" className="hover:text-neon-pink flex p-6">Dwayne Rill Jr. | Web Developer</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6 ml-auto">About</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6">Projects</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6">Contact</a>
            </nav>
        </React.Fragment>
    )
}