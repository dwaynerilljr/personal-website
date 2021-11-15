import { RiGithubLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'


const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-6 h-screen-75 font-jura sm:text-2xl text-ternary mt-10" id="footer">
                <div className="col-span-3 bg-primary text-white font-semibold text-4xl flex flex-col items-center justify-center" id="contact">
                    <span>Want to know more? </span>
                    <span>Let's Work Together!</span>
                    <span className="mt-2 arrow-bounce" id="arrow"><IoArrowForwardCircleSharp size={64} /></span>
                </div>
                <div className="grid grid-cols-4 justify-center col-span-3 items-center">
                    <div className="flex flex-col items-center col-span-2">
                        <header className="sm:text-5xl font-secondary text-primary">Contact</header>
                        <hr className="h-1 bg-secondary w-32" />
                        <a href="mailto:dwayne@dwaynerilljr.dev" className="flex items-center hover:text-secondary mt-1">
                            <AiOutlineMail size={24} className="mr-1" />
                            Email Me
                        </a>
                    </div>
                    <div className="flex flex-col items-center col-span-2">
                        <header className="sm:text-5xl font-secondary text-primary">Connect</header>
                        <hr className="h-1 bg-secondary w-32" />
                        <a href="https://www.github.com/dwaynerilljr" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary mt-1">
                            <RiGithubLine size={24} className="mr-1" />
                            GitHub
                        </a>
                        <a href="https://www.instagram.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary my-1">
                            <RiInstagramLine size={24} className="mr-1" />
                            Instagram
                        </a>
                        <a href="https://www.twitter.com/dwayne_devs" rel="noreferrer" target="_blank" className="flex items-center hover:text-secondary">
                            <RiTwitterLine size={24} className="mr-1" />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            <p className="w-full text-white bg-ternary text-center font-jura text-base p-2">Made with &#9829; by Dwayne Rill Jr. <br /> Copyright &copy; 2021 Dwayne Rill Jr.</p>
        </>
    )
}

export default Footer