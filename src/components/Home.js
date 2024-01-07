import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss } from "react-icons/si";

const Home = () => {

    return (
        <>
            <div className="max-w-[800px] h-screen flex">

                <div className="static absolute top-1/2 left-72 transform -translate-y-1/2">
                    <img
                        src="./Face.png"
                        alt="Me"
                        className="opacity-75"
                        style={{ clipPath: 'circle(50% at 50% 50%)' }}
                    />
                </div>

                <div className="absolute top-1/2 left-2/4 font-bold"
                    id="typing-text"
                >
                    <TypeAnimation
                        sequence={[
                            'Hello, My Name is Daniel!',
                            1000,
                            'I am a Front-End Developer.',
                            1000,
                            'Explore My Portfolio!',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>

                <div className="flex absolute bottom-0 left-1/2 mb-12">
                    <a href="https://www.linkedin.com/in/daniel-kovalovsk%C3%BD-5b07a4219/" target="_blank" rel="noopener noreferrer">
                        <RxLinkedinLogo size={36} className="mb-[4px] mr-3 transition-transform transform hover:scale-110" />
                    </a>

                    <a href="https://github.com/RideN91" target="_blank" rel="noopener noreferrer">
                        <RxGithubLogo size={36} className='transition-transform transform hover:scale-110' />
                    </a>
                </div>

                <div className="absolute top-1/2 left-2/4 mt-14 font-bold">
                    <h1>My tech stack includes the following technologies:</h1>    
                </div>       

                <div className="absolute top-1/2 left-2/4 mt-24 flex">
                    <SiHtml5 size={36} className="mr-5 transition-transform transform hover:scale-110" title="HTML"/>
                    <SiCss3 size={36} className="mr-5 transition-transform transform hover:scale-110" title="CSS"/>
                    <SiJavascript size={36} className="mr-5 transition-transform transform hover:scale-110" title="JS"/>
                    <SiReact size={36} className="mr-5 transition-transform transform hover:scale-110" title="React"/>
                    <SiBootstrap size={36} className="mr-5 transition-transform transform hover:scale-110" title="Bootstrap"/>
                    <SiTailwindcss size={36} className="mr-5 transition-transform transform hover:scale-110" title="Tailwind"/>
                </div>            
            </div>
        </>
    );
}

export default Home;