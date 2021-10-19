import React from 'react';
import { RiReactjsLine, RiHtml5Line, RiCss3Line } from 'react-icons/ri';
import { SiTailwindcss, SiBootstrap, SiNextDotJs, SiJavascript, SiGit, SiNpm, SiYarn, SiNetlify } from 'react-icons/si';



const Toolbox = () => {
    return (
        <React.Fragment>
            <div className="grid sm:my-10 justify-center sm:text-6xl text-4xl font-lalezar text-center">
                <header className="flex items-center text-center"> My Dev Toolkit</header>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center font-jura mb-10 text-neon-pink text-center">
                <ul>
                    <header className="text-2xl  sm:text-4xl mt-4 mb-1 font-lalezar text-default-black">Languages:</header>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiJavascript size={25} className="mr-2" /> JavaScript (ES6)</li>
                    <li className="flex sm:text-3xl items-center pb-1"> <RiHtml5Line size={25} className="mr-2" /> HTML5 </li>
                    <li className="flex sm:text-3xl items-center pb-1"><RiCss3Line size={25} className="mr-2" /> CSS3 </li>
                    <li className="flex sm:text-3xl items-center"> <SiGit size={25} className="mr-2" /> Git</li>
                </ul>
                <ul>
                    <header className="text-2xl sm:text-4xl mt-4 mb-1 font-lalezar text-default-black">Frameworks:</header>
                    <li className="flex sm:text-3xl items-center pb-1"> <RiReactjsLine size={25} className="mr-2" /> React</li>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiNextDotJs size={25} className="mr-2" /> Next.js</li>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiTailwindcss size={25} className="mr-2" /> Tailwind</li>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiBootstrap size={25} className="mr-2" /> Bootstrap</li>
                </ul>
                <ul>
                    <header className="text-2xl sm:text-4xl mt-4 mb-1 font-lalezar text-default-black">Other Tools:</header>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiNpm size={25} className="mr-2" /> NPM</li>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiYarn size={25} className="mr-2" /> Yarn</li>
                    <li className="flex sm:text-3xl items-center pb-1"> <SiNetlify size={25} className="mr-2" /> Netlify</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Toolbox