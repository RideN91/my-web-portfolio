import React from 'react';
import { TypeAnimation } from 'react-type-animation';

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
                <div className="static absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        src="./Face.png"
                        alt="Me"
                        className="opacity-75"
                        style={{ clipPath: 'circle(50% at 50% 50%)' }}
                    />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold"
                     id="typing-text"
                    >
                    <TypeAnimation
                        sequence={[
                            'Hello, My name is Daniel!',
                            1000,
                            'I am a front-end developer.',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;