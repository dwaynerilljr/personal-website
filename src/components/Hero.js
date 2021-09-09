import React from 'react';
import me from '../headshot.svg'


export default function Hero() {
    return (
        <div className="h-screen bg-default-black flex flex-col justify-center content-center font-jura">
            <div className="flex justify-center content-center">
                <img src={me} alt="" className="w-1/3"/>
                <div className="flex flex-col justify-center content-center w-2/6 text-neon-teal text-3xl">
                    Hello, I'm Dwayne
                    <br />
                    I'm an Aspiring Full Stack Developer
                    <br />
                    This is my portfolio site!
                    <h5 className="mt-4">My Socials:</h5>
                    <div className="flex mt-1">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}