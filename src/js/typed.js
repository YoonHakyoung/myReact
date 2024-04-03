import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  useEffect(() => {
    // Select the element with class 'typed'
    const typedElement = document.querySelector('.typed');
    
    if (typedElement) {
      // Text to be typed
      const typedText = "welcome to anemone.";

      // Initialize Typed.js
      new Typed('.typed', {
        strings: [typedText],
        typeSpeed: 100, // Typing speed in milliseconds
        loop: false // Do not loop
      });
    }
  }, []);

  return (
    <div className="typed"></div>
  );
};

export default TypedComponent;
