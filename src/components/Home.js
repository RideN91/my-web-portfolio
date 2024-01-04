import React, {useState, useEffect } from 'react';

const Home = () => {
    const textOptions = ['Daniel', 'Front End Developer'];
    const [dynamicTextIndex, setDynamicTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDynamicTextIndex((prevIndex) => 
            prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mx-auto px-12 w-full">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm {textOptions[dynamicTextIndex]}.</h1>
        </div>
    );

}

export default Home;