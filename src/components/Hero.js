import React from 'react';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <div className="h-full bg-primary grid grid-cols-2  md:grid-cols-8 justify-items-center md:justify-center font-secondary font-semibold py-64" id="home">
            <img src={me} alt="" className="md:col-start-1 col-span-4 w-4/6 md:w-full"/>
            <div className="flex items-center text-white md:text-5xl col-span-3 text-center">
                <p>
                    Hello! I'm Dwayne
                    <br />
                    I'm a Front End Developer who builds really cool websites
                </p>
            </div>
        </div>
    )
}