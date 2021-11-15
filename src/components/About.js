import me from '../about.jpg';




const About = () => {
    return (
        <div className="md:bg-white bg-white grid gap-x max-w-full" id="about">
            <div className="grid md:grid-cols-11 text-sm md:text-xl justify-center px-5 md:px-0 gap-x font-primary">
                <div className="flex items-center col-start-2 col-span-4">
                    <img src={me} alt="" className="px-10 my-10" />
                </div>
                <div className="flex flex-col sm:text-left text-ternary justify-center col-span-5">
                    <header className="text-3xl font-secondary my-4">Let me introduce myself</header>
                    <hr className="h-1 bg-secondary w-32" />
                    <div className="pr-4 my-4 grid gap-y-5 text-base">
                        <div className="flex flex-col">
                            <header className="text-2xl font-secondary">Who I Am</header>
                            <p className="mb-4">
                            A Maryland/Washington D.C. based Front End Web Developer who loves expressing my
                            creative vision through technology.
                            </p>
                            <hr className="self-center h-0.5 bg-secondary w-36 opacity-50" />
                        </div>
                        <div className="flex flex-col">
                            <header className="text-2xl font-secondary">How I Got Here</header>
                            <p className="mb-4">
                            Ever since I was old enough to know what I wanted to do, I knew that I wanted to be in 
                            tech somehow. Growing up in a rural Maryland town, it was hard to envision anything besides 
                            blue-collar work. But when I was <em>finally</em> able to afford to go to college, I immediately
                            knew that I wanted to major in Computer Science. However, after spending time studying the typical
                            college curriculum, I was bored and tired of the same old Java programs. I happened upon a beginner's
                            web developer class, and from there I was absolutely hooked.
                            </p>
                            <hr className="self-center h-0.5 bg-secondary w-36 opacity-50" />
                        </div>
                        <div className="flex flex-col">
                            <header className="text-2xl font-secondary">Things I Love Besides Programming</header>
                            <p>
                            When I'm not programming, I enjoy watching anime (I'm a huge otaku), collecting Pokemon Cards, finding good 
                            Japanese restaurants, playing my PS4/Switch, spending time with my chihuahua Leo, and trying to find whatever my next adventure
                            is going to be.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About