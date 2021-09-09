import React from "react";
import { RiGithubLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai'


const Footer = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-2 py-10 font-jura sm:text-2xl">
                <div className="flex flex-col items-center">
                    <header className="sm:text-3xl font-lalezar">Contact</header>
                    <a href="mailto:dwayne@dwaynerilljr.dev" className="flex items-center text-neon-pink hover:text-neon-teal mt-1">
                        <AiOutlineMail size={25} />
                        Email Me
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <header className="sm:text-3xl font-lalezar">Connect</header>
                    <a href="https://www.github.com/dwaynerilljr" rel="noreferrer" target="_blank" className="flex items-center text-neon-pink hover:text-neon-teal mt-1">
                        <RiGithubLine size={25} />
                        GitHub
                    </a>
                    <a href="https://www.instagram.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center text-neon-pink hover:text-neon-teal my-1">
                        <RiInstagramLine size={25} />
                        Instagram
                    </a>
                    <a href="https://www.twitter.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center text-neon-pink hover:text-neon-teal">
                        <RiTwitterLine size={25} />
                        Twitter
                    </a>
                </div>
            </div>
            <p className="w-full text-neon-pink text-center font-jura sm:text-2xl mb-3">Made with &#9829; by Dwayne Rill Jr. <br /> Copyright &copy; 2021 Dwayne Rill Jr.</p>
        </React.Fragment>
    )
}

export default Footer