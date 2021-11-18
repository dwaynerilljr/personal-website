import { SiTailwindcss, SiReact, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiGit, SiNpm, SiYarn, SiNetlify } from 'react-icons/si';



const Toolbox = () => {
    return (
        <div className="grid p-4 md:p-20 bg-split gap-y-2 md:grid-rows-2 h-full md:grid-cols-10 min-h-full" id="toolbox">
            <header className="md:col-span-10 col-span-2 text-3xl md:text-6xl text-white text-center font-secondary">My Dev Toolkit</header>
            <div className="grid col-span-2 md:col-start-2 md:col-end-10 grid-cols-2 md:grid-cols-5 gap-1 md:gap-4 md:text-2xl xl:text-3xl text-white font-primary">
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">JavaScript <SiJavascript  /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">CSS3 <SiCss3  /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">HTML5 <SiHtml5 /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">Git <SiGit /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">React <SiReact /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">Tailwind <SiTailwindcss /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">Bootstrap <SiBootstrap /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">NPM <SiNpm /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">Yarn <SiYarn /></span>
                <span className="flex md:gap-y-2 border border-white p-2 flex-col items-center justify-center">Netlify <SiNetlify /></span>
            </div>
        </div>
    )
}

export default Toolbox