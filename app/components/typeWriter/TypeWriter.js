'use client'
import { useState, useEffect } from 'react';
import '../../globals.css'
const TypeWriter = ({ textArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentText.length === textArray[currentIndex].length) {
        // If current text is fully typed, move to the next text in the array
        setCurrentIndex((currentIndex + 1) % textArray.length);
        setCurrentText('');
      } else {
        // Type the next character of the current text
        setCurrentText(textArray[currentIndex].substring(0, currentText.length + 1));
      }
    }, 400); // Adjust typing speed here (milliseconds)
    
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, textArray]);

  return (
    <span className="text-5xl font-serif font-bold umar">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypeWriter;