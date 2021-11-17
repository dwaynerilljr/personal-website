import { SiTwitter, SiInstagram, SiGithub } from 'react-icons/si';
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import ContactForm from './ContactForm';


const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-8 h-screen-75 font-jura 2xl:text-2xl text-lg text-ternary mt-10" id="footer">
                <div className="col-span-3 text-white font-regular text-3xl flex flex-col items-center justify-center gap-y-10 col-start-2" id="contact">
                    <div className="flex flex-col items-center text-center">
                        <span>Like my work?  </span>
                        <span>Then reach out to me and we can begin building your next project!</span>
                        <span className="mt-2 arrow-bounce self-center" id="arrow"><IoArrowForwardCircleSharp size={64} /></span>
                    </div>
                    <div className="flex items-center col-span-2 text-4xl gap-x-10">
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
                <div className="grid grid-cols-4 col-span-3 items-center">
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Footer