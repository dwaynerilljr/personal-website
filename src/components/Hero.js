import React from 'react';
import logo from '../no-bg-logo.svg'
import { RiGithubLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';


export default function Hero() {
    return (
        <div className="h-screen bg-default-black flex flex-col justify-center content-center font-jura">
            <div className="flex w-screen justify-center content-center">
                <img src={logo} alt="" className="w-1/3"/>
                <div className="flex flex-col justify-center content-center w-3/6 text-cyber-white text-3xl">
                    Hello, I'm Dwayne
                    <br />
                    I'm a Maryland Based Web Developer Student
                    <br />
                    This is my portfolio site!
                    <h5 className="mt-4">My Socials:</h5>
                    <div className="flex mt-1">
                        <a href="https://www.github.com/dwaynerilljr" rel="noreferrer" target="_blank">
                            <RiGithubLine size={40} className="mx-2 text-neon-pink hover:text-neon-teal" />
                        </a>
                        <a href="https://www.instagram.com/dwayne_devs" rel="noreferrer" target="_blank">
                            <RiInstagramLine size={40} className="mx-2 text-neon-pink hover:text-neon-teal" />
                        </a>
                        <a href="https://www.instagram.com/dwaynerill_jr" rel="noreferrer" target="_blank">
                            <RiTwitterLine size={40} className="mx-2 text-neon-pink hover:text-neon-teal"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}