import React from 'react';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <div className="md:h-full h-full bg-primary grid grid-cols-8 justify-center font-secondary font-semibold pt-64" id="home">
            <img src={me} alt="" className="col-start-1 col-span-4 w-full"/>
            <div className="flex items-center text-white text-5xl col-span-3">
                <p>
                    Hello! I'm Dwayne
                    <br />
                    I'm a Front End Developer who builds really cool websites
                </p>
            </div>
        </div>
    )
}