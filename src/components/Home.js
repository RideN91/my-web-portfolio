import React from 'react';
import TypingText from './TypingText';

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
        <div className="container mx-auto mt-60 relative flex items-center justify-center">
                <div className="fixed top-48 left-64 mr-8">
                    <img 
                        src="./Autoportret.png"
                        alt="Me"
                        className="overflow-hidden rounded-md w-128 h-96 fixed"
                        style={{ clipPath: 'circle(50% at 50% 50%)' }}
                    />
                </div>
                <div className="ml-0">
                    <h1 className="text-4xl font-bold mb-4 fixed">
                        Hello, I'm <TypingText text={textOptions[dynamicTextIndex]} />
                    </h1>
                </div>
        </div>
    );
}

export default Home;