import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss } from "react-icons/si";

const Home = () => {

    return (
        <>
            <div className="flex mx-auto max-w-[960px] h-full center">
                {/*picture*/}
                <div className="relative lg:mr-96 lg:mt-20 lg:w-full md:mr-72 md:mt-16 md:w-96 sm:w-64">
                    <img
                        src="./Face.png"
                        alt="Me"
                        className="opacity-75"
                        style={{ clipPath: 'circle(40% at 50% 40%)' }}
                    />
                </div>
                {/*animated typing*/}
                <div className="absolute lg:mt-52 lg:ml-96 md:mt-32 md:ml-72 z-10" id="typing-text">
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
                    {/*tech stack description*/}
                    <h1 className="md:text-2xl]">My tech stack includes the following technologies:</h1>
                    {/*tech stack logos*/}
                    <div className="flex mt-2">
                        <SiHtml5 size={36} className="mr-5 transition-transform transform hover:scale-110" title="HTML" />
                        <SiCss3 size={36} className="mr-5 transition-transform transform hover:scale-110" title="CSS" />
                        <SiJavascript size={36} className="mr-5 transition-transform transform hover:scale-110" title="JS" />
                        <SiReact size={36} className="mr-5 transition-transform transform hover:scale-110" title="React" />
                        <SiBootstrap size={36} className="mr-5 transition-transform transform hover:scale-110" title="Bootstrap" />
                        <SiTailwindcss size={36} className="mr-5 transition-transform transform hover:scale-110" title="Tailwind" />
                    </div>
                </div>
            </div>
            {/*in&GitHub logos*/}
            <div className="animated-box in flex mx-auto max-w-[960px] items-center justify-center mt-24 z-20">
                    <a href="https://www.linkedin.com/in/daniel-kovalovsk%C3%BD-5b07a4219/" target="_blank" rel="noopener noreferrer">
                        <RxLinkedinLogo size={36} className="mb-[4px] mr-3 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/RideN91" target="_blank" rel="noopener noreferrer">
                        <RxGithubLogo size={36} className='transition-transform transform hover:scale-110' />
                    </a>
                </div>
        </>
    );
}

export default Home;