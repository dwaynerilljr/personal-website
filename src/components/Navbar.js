import React from 'react';
import { BsCodeSlash } from 'react-icons/bs'

export default function Nav() {
    return (
        <React.Fragment>
            <nav className="flex bg-default-black text-neon-teal text-2xl font-jura">
                <a href="#" className="hover:text-neon-pink flex p-6">Dwayne Devs</a>
                <a className="hover:text-neon-pink p-6 ml-auto" href="#">About</a>
                <a className="hover:text-neon-pink p-6" href="#">Contact</a>
            </nav>
        </React.Fragment>
    )
}