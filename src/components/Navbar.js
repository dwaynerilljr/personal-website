import React from 'react';

export default function Nav() {
    return (
        <React.Fragment>
            <nav className="flex bg-default-black text-neon-teal text-2xl font-jura">
                <a href="https://www.google.com" className="hover:text-neon-pink flex p-6">Dwayne Devs</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6 ml-auto">About</a>
                <a href="https://www.google.com" className="hover:text-neon-pink p-6">Contact</a>
            </nav>
        </React.Fragment>
    )
}