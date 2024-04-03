import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../css/typedTitle.css';

const TypedComponent = () => {
  useEffect(() => {
    // Select the element with class 'typed'
    const typedElement = document.querySelector('.typed');
    
    if (typedElement) {
      // Text to be typed
      const typedText = "Welcome to Anemone.";

      // Initialize Typed.js
      new Typed('.typed', {
        strings: [typedText],
        typeSpeed: 50, // Typing speed in milliseconds (adjust this value)
        loop: false, // Do not loop
        showCursor: false
      });
    }
  }, []);

  return (
    <div className="typed"></div>
  );
};

export default TypedComponent;
