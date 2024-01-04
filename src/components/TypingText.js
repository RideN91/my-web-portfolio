import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setVisibleText((prevText) => {
        if (index < text.length) {
          index += 1;
          return text.substring(0, index);
        }
        clearInterval(intervalId);
        return prevText;
      });
    }, 100); // Adjust the interval duration for typing speed

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{visibleText}</span>;
};

export default TypingText;