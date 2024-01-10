'use client'
import { useState } from 'react';

const ImageSlider= ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    return (
      <div className="relative w-full h-64 md:h-96 lg:h-128">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 1 }}
          />
        ))}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md z-20"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md z-20"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    );
  };

export default ImageSlider;
