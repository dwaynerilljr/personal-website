import React from 'react';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <div className="md:h-screen h-screen-75 bg-default-black flex flex-col justify-center content-center font-lalezar" id="home">
            <div className="flex flex-col md:flex-row justify-center items-center md:content-center md:py-10">
                <img src={me} alt="" className="w-1/2 mt-4 md:mt-0 sm:w-1/6 md:w-1/2"/>
                <div className="flex flex-col justify-center content-center w-full md:w-2/6 text-neon-teal md:text-left text-center md:text-4xl">
                    Hello, I'm Dwayne
                    <br />
                    I'm a Front-End Developer who builds cool things.
                    <br />
                    <div className="font-jura py-2 text-sm">
                        Is that applause I hear?
                        <br />
                        No? Well, okay. 
                        <br />
                        Scroll down to find out about me. Then come back and applaud. 
                        <br />
                        I'll wait. :)
                    </div>
                </div>
            </div>
        </div>
    )
}