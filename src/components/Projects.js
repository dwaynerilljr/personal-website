import React from "react";
import { SiCss3, SiJavascript, SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";
import xmas from "../christmas-app.png"
import knd from '../knights-and-dragons.png'
import rta from "../RateThatAnime.png"


const Projects = () => {
    return (
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-8 py-10 justify-items-center" id="projects">
            <div className="grid sm:text-6xl text-4xl col-span-2 sm:col-span-full justify-center">
                <header className="text-primary font-secondary">My Projects</header>
            </div>
            <div className="flex text-ternary flex-col items-center gap-4 p-4 col-span-2 col-start-2 py-10 h-full shadow-2xl border border-secondary">
                    <header className="font-secondary text-primary text-4xl">Christmas List App</header>
                    <hr className="h-1 bg-secondary w-32" />
                    <img src={xmas} alt="" className="hidden p-1 sm:block border border-primary" />
                    <div className="flex justify-center sm:hidden">
                        <img src={xmas} alt="" className="" />
                    </div>
                    <p className="text-center">
                        A Web app that lets users enter items to be rendered into their very
                        own Christmas list! Also has edit and delete functionality as well :)
                    </p>
                    <div className="flex mt-auto flex-col gap-2 items-center text-xl font-semibold">
                        Technologies used:
                        <div className="flex text-4xl gap-x-2 justify-center">
                            <SiCss3 />
                            <SiJavascript />
                            <SiReact />
                            <SiTailwindcss />
                             <SiNetlify />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.github.com/dwaynerilljr/christmas-list-app" className="bg-primary text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Github Repo</a>
                        <a href="https://xmas-list.netlify.app/" className="bg-primary text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Live Demo</a>
                    </div>
            </div>
            <div className="flex text-ternary flex-col items-center gap-4 p-4 col-span-2 py-10 h-full shadow-2xl border border-secondary">
                    <header className="font-secondary text-primary text-4xl">Knights & Dragons</header>
                    <hr className="h-1 bg-secondary w-32" />
                    <img src={knd} alt="" className="hidden p-1 sm:block border border-primary" />
                    <div className="flex justify-center sm:hidden">
                        <img src={knd} alt="" className="w-5/6" />
                    </div>
                    <p className="text-center">
                        A desktop fantasy card battling application that lets users select a character of their choice and then use that
                        character to battle their way through a series of opponents!
                    </p>
                    <div className="flex flex-col gap-2 items-center text-xl font-semibold mt-auto">
                        Technologies used:
                        <div className="flex text-4xl gap-x-2 justify-center">
                            <SiCss3 />
                            <SiJavascript />
                            <SiReact />
                            <SiTailwindcss />
                            <SiNetlify />
                        </div>
                    </div>
                    <div className="flex sm:justify-start justify-center gap-2">
                        <a href="https://www.github.com/dwaynerilljr/knights-and-dragons" className="bg-primary text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Github Repo</a>
                        <a href="https://knights-and-dragons.netlify.app/" className="bg-primary text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Live Demo</a>
                    </div>
            </div>
            <div className="flex text-ternary flex-col items-center gap-4 p-4 col-span-2 py-10 shadow-2xl border border-secondary">
                    <header className="font-secondary text-primary text-4xl">RateThatAnime</header>
                    <hr className="h-1 bg-secondary w-32" />
                    <img src={rta} alt="" className="hidden p-1 sm:block border border-primary" />
                    <div className="flex justify-center sm:hidden">
                        <img src={rta} alt="" className="w-5/6" />
                    </div>
                    <p className="text-center h-40">
                        A desktop fantasy card battling application that lets users select a character of their choice and then use that
                        character to battle their way through a series of opponents! select a character of their choice and then use that
                        character to battle their way through a series of opponents!
                    </p>
                    <div className="flex flex-col gap-2 items-center text-xl font-semibold mt-auto">
                        Technologies used:
                        <div className="flex text-4xl gap-x-2 justify-center">
                            <SiCss3 />
                            <SiJavascript />
                            <SiReact />
                            <SiTailwindcss />
                            <SiNetlify />
                        </div>
                    </div>
                    <div className="flex sm:justify-start justify-center justify-self-end gap-2">
                        <a href="https://www.github.com/dwaynerilljr/knights-and-dragons" className="bg-primary text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Github Repo</a>
                        {/* <a href="https://knights-and-dragons.netlify.app/" className="bg-secondary text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-primary" rel="noreferrer" target="_blank">Live Demo</a> */}
                    </div>
            </div>
        </div>
    )
}

export default Projects