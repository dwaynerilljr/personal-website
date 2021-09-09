import React from 'react';
import { RiReactjsLine, RiHtml5Line, RiCss3Line } from 'react-icons/ri';
import { SiTailwindcss, SiBootstrap, SiRedux, SiJavascript, SiJquery, SiGit, SiNpm, SiYarn, SiNetlify } from 'react-icons/si';



const Toolbox = () => {
    return (
        <React.Fragment>
            <div className="grid my-10 justify-center text-6xl font-lalezar">
                <header className="flex items-center"> My Dev Toolkit</header>
            </div>
            <div className="grid grid-cols-3 justify-items-center font-jura mb-10 text-neon-pink">
                <ul>
                    <header className="text-4xl mb-2 font-audiowide text-default-black">Languages:</header>
                    <li className="flex text-3xl items-center py-1"> <RiHtml5Line size={30} className="mr-2" /> HTML5 </li>
                    <li className="flex text-3xl items-center pb-1"><RiCss3Line size={30} className="mr-2" /> CSS3 </li>
                    <li className="flex text-3xl items-center"> <SiJavascript size={30} className="mr-2" /> JavaScript (ES6)</li>
                    <li className="flex text-3xl items-center"> <SiGit size={30} className="mr-2" /> Git</li>
                </ul>
                <ul>
                    <header className="text-4xl mb-2 font-audiowide text-default-black">Frameworks:</header>
                    <li className="flex text-3xl items-center py-1"> <RiReactjsLine size={30} className="mr-2" /> React</li>
                    <li className="flex text-3xl items-center pb-1"> <SiTailwindcss size={30} className="mr-2" /> Tailwind</li>
                    <li className="flex text-3xl items-center pb-1"> <SiBootstrap size={30} className="mr-2" /> Bootstrap</li>
                    <li className="flex text-3xl items-center pb-1"> <SiRedux size={30} className="mr-2" /> React Redux</li>
                    <li className="flex text-3xl items-center"> <SiJquery size={30} className="mr-2" /> jQuery</li>
                </ul>
                <ul>
                    <header className="text-4xl mb-2 font-audiowide text-default-black">Other Tools:</header>
                    <li className="flex text-3xl items-center py-1"> <SiNpm size={30} className="mr-2" /> NPM</li>
                    <li className="flex text-3xl items-center pb-1"> <SiYarn size={30} className="mr-2" /> Yarn</li>
                    <li className="flex text-3xl items-center pb-1"> <SiNetlify size={30} className="mr-2" /> Netlify</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Toolbox