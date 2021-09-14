import React from 'react';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <div className="md:h-screen h-screen-50 bg-default-black flex flex-col justify-center content-center font-lalezar" id="home">
            <div className="flex flex-col md:flex-row justify-center items-center md:content-center md:py-10">
                <img src={me} alt="" className="w-1/2 sm:w-1/6 md:w-1/2"/>
                <div className="flex flex-col justify-center content-center w-1/2 text-neon-teal md:text-left text-center md:text-4xl">
                    Hello, I'm Dwayne
                    <br />
                    I'm an Aspiring Full Stack Developer
                    <br />
                    This is my portfolio site!
                </div>
            </div>
        </div>
    )
}