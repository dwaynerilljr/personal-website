import React from "react";
import xmas from "../christmas-app.png"


const Projects = () => {
    return (
        <div className="grid gap-x-10 text-neon-teal bg-default-black py-10">
            <div className="grid text-6xl font-lalezar col-span-full justify-center">
                <header className="text-neon-pink">My Projects</header>
            </div>
            <div className="grid grid-cols-2 text-2xl justify-center font-jura py-10">
                <img src={xmas} alt="" className="w-full px-20" />
                <div>
                    <header className="font-lalezar">Christmas List App</header>
                    <p>
                        A Web app that lets users enter items to be rendered into their very
                        own Christmas list! Also has edit and delete functionality as well :)
                    </p>
                    <p className="my-7">
                        Made using CSS3, React, Tailwind and hosted with Netlify
                    </p>
                    <div className="flex justify-start gap-2">
                        <a href="https://www.github.com/dwaynerilljr/christmas-list-app" className="bg-neon-pink text-white text-center text-2xl border-none rounded-md p-2 hover:bg-dark-teal" rel="noreferrer" target="_blank">Github Repo</a>
                        <a href="https://admiring-haibt-178288.netlify.app/" className="bg-neon-pink text-white text-center text-2xl border-none rounded-md p-2 hover:bg-dark-teal" rel="noreferrer" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects