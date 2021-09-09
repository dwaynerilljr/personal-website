import React from 'react';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <div className="sm:h-screen h-screen-50 bg-default-black flex flex-col justify-center content-center font-lalezar">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:content-center sm:py-10">
                <img src={me} alt="" className="w-1/2"/>
                <div className="flex flex-col justify-center content-center w-1/2 text-neon-teal sm:text-left text-center sm:text-4xl">
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