import React from "react";
import xmas from "../christmas-app.png"


const Projects = () => {
    return (
        <div className="grid gap-x-10 text-neon-teal bg-default-black py-10">
            <div className="grid sm:text-6xl text-4xl font-lalezar col-span-full justify-center">
                <header className="text-neon-pink">My Projects</header>
            </div>
            <div className="grid sm:text-left sm:grid-cols-2 sm:text-2xl sm:justify-center font-jura py-10">
                <img src={xmas} alt="" className="w-full px-20 hidden sm:block" />
                <div className="sm:text-left text-center">
                    <header className="font-lalezar text-4xl">Christmas List App</header>
                    <img src={xmas} alt="" className="sm:hidden flex justify-center" />
                    <p>
                        A Web app that lets users enter items to be rendered into their very
                        own Christmas list! Also has edit and delete functionality as well :)
                    </p>
                    <p className="sm:my-7 my-1">
                        Made using CSS3, React, Tailwind and hosted with Netlify
                    </p>
                    <div className="flex sm:justify-start justify-center gap-2">
                        <a href="https://www.github.com/dwaynerilljr/christmas-list-app" className="bg-neon-pink text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-dark-teal" rel="noreferrer" target="_blank">Github Repo</a>
                        <a href="https://xmas-list.netlify.app/" className="bg-neon-pink text-white text-center sm:text-2xl border-none rounded-md p-2 hover:bg-dark-teal" rel="noreferrer" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects