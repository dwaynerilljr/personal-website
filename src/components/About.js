import me from '../about.jpg';
import { GrTopCorner } from 'react-icons/gr'




const About = () => {
    return (
        <section className="grid relative bg-primary-light grid-cols-8 my-20 py-16 gap-5">
            <div className="col-span-3 col-start-2 flex flex-col z-10">
                <img className='' src={me} alt="" />
            </div>
            <div className="col-span-3 text-dark flex flex-col">
                <div className='flex flex-col py-4 gap-y-5'>
                    <div className="text-4xl flex flex-col gap-y-3">
                        <header className='uppercase z-40'>About</header>
                        <hr className="h-1 bg-secondary w-1/12" />
                        <div id="shape"></div>
                        <div id="shape-1"></div>
                    </div>
                    <p className='text-lg font-light z-40'>
                        I am a DMV-based Front End Web Developer who loves expressing my creative vision by designing websites that are not only visually compelling but also meet the needs of an audience. 
                    </p>
                    <p className='text-lg font-light z-40'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus doloribus atque, praesentium porro ipsa illo repellat officiis repellendus modi, recusandae ad est, rerum dolore ea. Eveniet inventore provident fuga itaque?
                    </p>
                    <p className='text-lg font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus doloribus atque, praesentium porro ipsa illo repellat officiis repellendus modi, recusandae ad est, rerum dolore ea. Eveniet inventore provident fuga itaque?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About