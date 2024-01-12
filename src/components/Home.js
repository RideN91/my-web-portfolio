import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss } from "react-icons/si";

const Home = () => {

    return (
        <>
            <div className="flex mx-auto max-w-[800px]">

                {/*animated typing*/}
                <div className="fixed justify-center top-1/2 left-1/3 sm:bottom-1 z-10" id="typing-text">
                    <TypeAnimation
                        className=''
                        sequence={[
                            'Hello, My Name is Daniel!',
                            1200,
                            'I am a Front-End Developer.',
                            1200,
                            'Explore My Portfolio!',
                            1200,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>

                {/*picture*/}
                <div className="absolute center lg:right-1/3 md:right-1/3">
                    <img
                        src="./Face.png"
                        alt="Me"
                        className="opacity-75"
                        style={{ clipPath: 'circle(50% at 50% 50%)' }}
                    />
                </div>

                {/*description*/}
                <div className="">
                    <h1>My tech stack includes the following technologies:</h1>
                </div>

                {/*tech stack logos*/}
                <div className="">
                    <SiHtml5 size={36} className="mr-5 transition-transform transform hover:scale-110" title="HTML" />
                    <SiCss3 size={36} className="mr-5 transition-transform transform hover:scale-110" title="CSS" />
                    <SiJavascript size={36} className="mr-5 transition-transform transform hover:scale-110" title="JS" />
                    <SiReact size={36} className="mr-5 transition-transform transform hover:scale-110" title="React" />
                    <SiBootstrap size={36} className="mr-5 transition-transform transform hover:scale-110" title="Bootstrap" />
                    <SiTailwindcss size={36} className="mr-5 transition-transform transform hover:scale-110" title="Tailwind" />
                </div>

                {/*in&GitHub logos*/}
                <div className="">
                    <a href="https://www.linkedin.com/in/daniel-kovalovsk%C3%BD-5b07a4219/" target="_blank" rel="noopener noreferrer">
                        <RxLinkedinLogo size={36} className="mb-[4px] mr-3 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/RideN91" target="_blank" rel="noopener noreferrer">
                        <RxGithubLogo size={36} className='transition-transform transform hover:scale-110' />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;