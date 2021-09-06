import React from 'react';
import me from '../me2.svg';
import { RiReactjsLine, RiHtml5Line, RiCss3Line } from 'react-icons/ri';
import { SiTailwindcss, SiBootstrap, SiRedux, SiJavascript } from 'react-icons/si'




const About = () => {
    return (
        <div className="bg-split-bg grid gap-x-10 text-dark-teal">
            <div className="grid text-5xl font-jura col-span-full py-10 justify-center">
                <header>About</header>
            </div>
            <div className="grid grid-cols-2 text-3xl justify-center gap-x-20 mb-20 font-jura">
                <img src={me} alt="" className="w-full px-20" />
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat reprehenderit praesentium cupiditate laboriosam laborum mollitia illo quidem suscipit commodi quam, voluptatem ipsum sunt eveniet velit est deserunt magni in blanditiis.</p>
                    <h3 className="grid justify-center">My skills:</h3>
                    <div className="grid grid-cols-2 mt-5">
                        <ul>
                            <header className="text-5xl mb-2">Languages:</header>
                            <li className="flex"> <RiHtml5Line size={22} className="mr-2" /> HTML</li>
                            <li className="flex"><RiCss3Line size={22} className="mr-2" /> CSS </li>
                            <li className="flex"> <SiJavascript size={22} className="mr-2" /> JavaScript (ES6)</li>
                        </ul>
                        <ul>
                            <header className="text-5xl mb-2">Frameworks:</header>
                            <li className="flex"> <RiReactjsLine size={22} className="mr-2" /> React</li>
                            <li className="flex"> <SiTailwindcss size={22} className="mr-2" /> Tailwind</li>
                            <li className="flex"> <SiBootstrap size={22} className="mr-2" /> Bootstrap</li>
                            <li className="flex"> <SiRedux size={22} className="mr-2" /> React Redux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About