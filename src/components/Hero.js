import React from 'react';
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <section className="h-80v grid grid-cols-8 items-center bg-light">
            <div className="col-span-3 col-start-2 text-dark flex flex-col gap-y-5">
                <div className="flex gap-x-3">
                    <a className='border-2 transform transition ease-in-out hover:scale-125 duration-150 border-secondary p-2 rounded-3xl text-primary' rel="noreferrer" target="_blank" href="https://www.twitter.com/dwayne_devs"><FiTwitter size={24} /></a>
                    <a className='border-2 transform transition ease-in-out hover:scale-125 duration-150 border-secondary p-2 rounded-3xl text-primary' rel="noreferrer" target="_blank" href="https://www.instagram.com/dwayne_devs"><FiInstagram size={24} /></a>
                    <a className='border-2 transform transition ease-in-out hover:scale-125 duration-150 border-secondary p-2 rounded-3xl text-primary' rel="noreferrer" target="_blank" href="https://www.github.com/dwaynerilljr"><FiGithub size={24} /></a>
                </div>
                <header><span className="text-primary text-5xl font-semibold">Heya! <span role="img" aria-label="sheep">👋</span> <br /> I'm Dwayne Rill Jr.</span></header>
                <header className='text-xl font-light'>
                    I'm a(n): <br />
                    - Front-End Developer (React is my best friend).<br/>
                    - Animal lover. <br />
                    - Otaku.
                </header>
                <div id="circle"></div>
                <div id="circle-1"></div>
                <div id="circle-2"></div>
                <div className='flex gap-x-2 text-xl'>
                <a href="#about" className="transform transition ease-in-out hover:scale-110 py-2 px-4 bg-primary hover:bg-secondary text-white rounded-3xl">My Portfolio</a>
                </div>
            </div>
            <div className="col-span-3 z-40 text-light flex flex-col gap-y-4">
                <img className='w-full' src={me} alt="" />
            </div>
        </section>
    )
}