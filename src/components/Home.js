import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Home = () => {
    const textOptions = ['<Daniel>!', '<Front End Developer>!'];
    const [dynamicTextIndex, setDynamicTextIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setDynamicTextIndex((prevIndex) =>
                prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="max-w-[800px] w-full h-screen flex">

                <div className="static absolute top-1/2 left-72 transform -translate-y-1/2">
                    <img
                        src="./Face.png"
                        alt="Me"
                        className="opacity-75"
                        style={{ clipPath: 'circle(50% at 50% 50%)' }}
                    />
                </div>

                <div className="absolute top-1/2 left-2/4 transform -translate-y-1/2 font-bold"
                    id="typing-text"
                >
                    <TypeAnimation
                        sequence={[
                            'Hello, My Name is Daniel!',
                            1000,
                            'I am a Front-End Developer.',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>

                <div className="fixed ml-60 top-1/2 transform -translate-x-1/2">
                    <a href="https://www.linkedin.com/in/daniel-kovalovsk%C3%BD-5b07a4219/" target="_blank" rel="noopener noreferrer">
                        <RxLinkedinLogo size={36} className="mb-[4px]" />
                    </a>
                    
                    <a href="https://github.com/RideN91" target="_blank" rel="noopener noreferrer">
                        <RxGithubLogo size={36} />
                    </a>
                </div>

            </div>


        </>
    );
}

export default Home;