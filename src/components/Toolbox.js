import { SiTailwindcss, SiReact, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiGit, SiNpm, SiYarn, SiNetlify } from 'react-icons/si';



const Toolbox = () => {
    return (
        <div className="grid p-20 bg-split gap-y-2 grid-rows-2 h-full grid-cols-10 min-h-full" id="toolbox">
            <header className="col-span-10 text-6xl text-white text-center font-secondary">My Dev Toolkit</header>
            <div className="grid col-start-2 col-end-10 grid-cols-5 gap-4 text-3xl text-white font-primary">
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">JavaScript <SiJavascript  /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">CSS3 <SiCss3  /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">HTML5 <SiHtml5 /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">Git <SiGit /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">React <SiReact /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">Tailwind <SiTailwindcss /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">Bootstrap <SiBootstrap /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">NPM <SiNpm /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">Yarn <SiYarn /></span>
                <span className="flex gap-y-2 border border-white p-2 flex-col items-center justify-center">Netlify <SiNetlify /></span>
            </div>
        </div>
    )
}

export default Toolbox