import React from "react";
import { SiCss3, SiJavascript, SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";
import xmas from "../christmas-app.png"
import knd from '../knights-and-dragons.png'
import poke from "../pokestox.png"


const Projects = () => {
    return (
        <div className="grid gap-12 md:gap-10 grid-cols-2 md:grid-cols-6 xl:grid-cols-8 p-5 md:py-10 justify-items-center" id="projects">
            <div className="grid sm:text-6xl text-2xl col-span-2 sm:col-span-full justify-center">
                <header className="text-primary font-secondary text-3xl">My Projects</header>
            </div>
            <div className="flex text-ternary flex-col items-center gap-2 md:gap-4 p-4 col-span-2 xl:col-start-2 md:py-10 h-full shadow-2xl border border-secondary">
                    <header className="font-secondary text-primary text-xl md:text-4xl">Christmas List App</header>
                    <hr className="h-1 bg-secondary w-12 md:w-32" />
                    <img src={xmas} alt="" className="hidden p-1 sm:block border border-primary" />
                    <div className="flex justify-center sm:hidden">
                        <img src={xmas} alt="" className="" />
                    </div>
                    <p className="text-center text-sm md:text-base">
                        A Web app that lets users enter items to be rendered into their very
                        own Christmas list! Also has edit and delete functionality as well :)
                    </p>
                    <div className="flex mt-auto flex-col gap-2 items-center md:text-xl font-semibold">
                        Technologies used:
                        <div className="flex md:text-4xl gap-x-2 justify-center">
                            <SiCss3 />
                            <SiJavascript />
                            <SiReact />
                            <SiTailwindcss />
                             <SiNetlify />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.github.com/dwaynerilljr/christmas-list-app" className="bg-primary text-white text-center 2xl:text-2xl xl:text-lg border-none rounded-md p-1 xl:p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Github Repo</a>
                        <a href="https://xmas-list.netlify.app/" className="bg-primary text-white text-center 2xl:text-2xl xl:text-lg border-none rounded-md p-1 xl:p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Live Demo</a>
                    </div>
            </div>
            <div className="flex text-ternary flex-col items-center gap-2 md:gap-4 p-4 col-span-2 md:py-10 h-full shadow-2xl border border-secondary">
                    <header className="font-secondary text-primary text-xl md:text-4xl">Knights & Dragons (Desktop Only)</header>
                    <hr className="h-1 bg-secondary w-12 md:w-32" />
                    <img src={knd} alt="" className="hidden p-1 sm:block border border-primary" />
                    <div className="flex justify-center sm:hidden">
                        <img src={knd} alt="" />
                    </div>
                    <p className="text-center md:text-base text-sm">
                        A desktop fantasy card battling application that lets users select a character of their choice and then use that
                        character to battle their way through a series of opponents!
                    </p>
                    <div className="flex mt-auto flex-col gap-2 items-center md:text-xl font-semibold">
                        Technologies used:
                        <div className="flex md:text-4xl gap-x-2 justify-center">
                            <SiCss3 />
                            <SiJavascript />
                            <SiReact />
                            <SiTailwindcss />
                            <SiNetlify />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.github.com/dwaynerilljr/knights-and-dragons" className="bg-primary text-white text-center 2xl:text-2xl xl:text-lg border-none rounded-md p-1 xl:p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Github Repo</a>
                        <a href="https://knights-and-dragons.netlify.app/" className="bg-primary text-white text-center 2xl:text-2xl xl:text-lg border-none rounded-md p-1 xl:p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Live Demo</a>
                    </div>
            </div>
            <div className="flex text-ternary flex-grow flex-col items-center gap-2 md:gap-4 p-4 col-span-2 md:py-10 h-full shadow-2xl border border-secondary">
                    <header className="font-secondary text-primary text-xl md:text-4xl">PokeStox (In progress)</header>
                    <hr className="h-1 bg-secondary w-12 md:w-32" />
                    <img src={poke} alt="" className="hidden p-1 sm:flex border border-primary" />
                    <div className="flex justify-center sm:hidden">
                        <img src={poke} alt="" />
                    </div>
                    <p className="text-center md:text-base text-sm">
                        A web app that will allow users to view and save prices of Pokemon cards in their collection! Users will be able to get real-time appraisals of the worth of their cards.
                    </p>
                    <div className="flex mt-auto flex-col gap-2 items-center md:text-xl font-semibold">
                        Technologies used:
                        <div className="flex md:text-4xl gap-x-2 justify-center">
                            <SiCss3 />
                            <SiJavascript />
                            <SiReact />
                            <SiTailwindcss />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.github.com/dwaynerilljr/pokestox" className="bg-primary text-white text-center 2xl:text-2xl xl:text-lg border-none rounded-md p-1 xl:p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Github Repo</a>
                        {/* <a href="https://knights-and-dragons.netlify.app/" className="bg-primary text-white text-center 2xl:text-2xl xl:text-lg border-none rounded-md p-1 xl:p-2 hover:bg-secondary" rel="noreferrer" target="_blank">Live Demo</a> */}
                    </div>
            </div>
        </div>
    )
}

export default Projects