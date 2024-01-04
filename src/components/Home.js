import React from 'react';
import TypingText from './TypingText';

const Home = () => {
    const textOptions = ['Daniel.', 'Front End Developer.'];
    const [dynamicTextIndex, setDynamicTextIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setDynamicTextIndex((prevIndex) =>
                prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, [ ]);

    return (
        <div className="container mx-auto px-12 w-full">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm <TypingText text={textOptions[dynamicTextIndex]} /></h1>
        </div>
    );

}

export default Home;