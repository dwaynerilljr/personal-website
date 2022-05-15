import { SiTwitter, SiInstagram, SiGithub } from 'react-icons/si';


const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-4 h-full xl:h-screen-75 2xl:text-2xl text-lg text-ternary pt-10 md:pt-0 md:mt-10" id="footer">
                <div className="col-span-2 text-white font-regular md:text-3xl flex flex-col items-center justify-center gap-y-10 md:col-start-2" id="contact">
                    <div className="flex flex-col items-center text-center">
                        <span>Like my work?  </span>
                        <span>Then reach out to me and we can begin building your next project!</span>
                    </div>
                    <div className="md:flex hidden items-center md:text-4xl md:gap-x-10">
                        <a href="https://www.twitter.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary">
                            <SiTwitter className="mr-1" />
                        </a>
                        <a href="https://www.github.com/dwaynerilljr" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary">
                            <SiGithub className="mr-1" />
                        </a>
                        <a href="https://www.instagram.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary my-1">
                            <SiInstagram className="mr-1" />
                        </a>
                    </div>
                </div>
                {/* <div className="grid col-span-2 py-5 justify-items-center text-xl md:hidden text-white">
                        <header className="font-semibold">Connect on Social</header>
                        <div className="flex gap-x-5">
                            <a href="https://www.twitter.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary">
                                <SiTwitter className="mr-1" />
                            </a>
                            <a href="https://www.github.com/dwaynerilljr" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary">
                                <SiGithub className="mr-1" />
                            </a>
                            <a href="https://www.instagram.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary my-1">
                                <SiInstagram className="mr-1" />
                            </a>
                        </div>
                </div> */}
            </div>
        </>
    )
}

export default Footer