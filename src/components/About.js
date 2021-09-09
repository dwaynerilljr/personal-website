import React from 'react';
import me from '../me2.svg';




const About = () => {
    return (
        <div className="sm:bg-split-bg bg-neon-pink grid gap-x-10 text-default-black">
            <div className="grid text-4xl sm:text-6xl font-lalezar col-span-full py-3 sm:py-10 justify-center">
                <header>My Story</header>
            </div>
            <div className="grid sm:grid-cols-2 text-base sm:text-2xl justify-center gap-x-20 mb-20 font-jura">
                <img src={me} alt="" className="hidden sm:block w-full px-20" />
                <div className="text-center sm:text-left">
                    <p>
                        Ever since I was old enough to know what I wanted to do, I knew that I wanted to be in 
                        tech somehow. Growing up in a rural Maryland town, it was hard to envision anything besides 
                        blue-collar work. But when I was <em>finally</em> able to afford to go to college, I immediately
                        knew that I wanted to major in Computer Science. However, after spending time studying the typical
                        college curriculum, I was bored and tired of the same old Java programs. I happened upon a beginner's
                        web developer class, and from there I was absolutely hooked. <br /> <br />
                        When I'm not programming, I enjoy watching anime (I'm a huge otaku), collecting Pokemon Cards, finding good 
                        Japanese restaurants, playing my PS4/Switch, spending time with my chihuahua Leo, and trying to find whatever my next adventure
                        is going to be.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About