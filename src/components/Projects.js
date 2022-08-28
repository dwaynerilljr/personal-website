import React from "react";
import { SiCss3, SiJavascript, SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";
import xmas from "../christmas-app.png"
import knd from '../knights-and-dragons.png'
import poke from "../pokestox.png"


const Projects = () => {
    return (
        <div className="grid grid-cols-8 p-16 gap-5" id="projects">
            <div className="col-start-2 col-span-8 sm:text-6xl text-2xl">
                <header className="uppercase text-3xl">My Projects</header>
            </div>
            <div className="grid grid-cols-2 col-start-2 col-span-6 gap-y-10">
                <div className="grid grid-cols-2 col-span-2 rounded-lg gap-y-4 shadow-2xl bg-white">
                    <img src={xmas} className='self-center rounded-l-lg' alt="" />
                    <div className="flex flex-col p-3">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quos numquam dolore laboriosam ipsam! Optio dolorem provident quo eius error amet maiores excepturi doloribus voluptatibus veniam vel, tempora adipisci culpa.</p>
                        <div className="flex items-center justify-center h-full rounded-b-lg gap-6">
                            <a href="" className="rounded-full bg-secondary p-3">Github</a>
                            <a href="" className="rounded-full bg-secondary p-3">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 col-span-2 rounded-lg bg-white gap-y-4 shadow-2xl">
                    <img src={knd} className='self-center rounded-l-lg' alt="" />
                    <div className="flex flex-col p-3">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quos numquam dolore laboriosam ipsam! Optio dolorem provident quo eius error amet maiores excepturi doloribus voluptatibus veniam vel, tempora adipisci culpa.</p>
                        <div className="flex items-center justify-center h-full rounded-b-lg gap-6">
                            <a href="" className="rounded-full bg-secondary p-3">Github</a>
                            <a href="" className="rounded-full bg-secondary p-3">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 col-span-2 bg-white rounded-lg gap-y-4 shadow-2xl">
                    <img src={poke} className='self-center rounded-l-lg' alt="" />
                    <div className="flex flex-col">
                        <p className="p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quos numquam dolore laboriosam ipsam! Optio dolorem provident quo eius error amet maiores excepturi doloribus voluptatibus veniam vel, tempora adipisci culpa.</p>
                        <div className="flex items-center justify-center h-full rounded-b-lg gap-6">
                            <a href="" className="rounded-full bg-secondary p-3">Github</a>
                            <a href="" className="rounded-full bg-secondary p-3">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects