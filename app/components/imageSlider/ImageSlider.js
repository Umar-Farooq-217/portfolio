'use client'// components/ImageSlider.js// components/ImageSlider.js
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const [Slideer, setSlideer] = useState(null);

  useEffect(() => {
    // Dynamically import react-slick when component mounts on the client side
    import('react-slick').then((slick) => {
      setSlideer(slick.default);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    Slideer && (
      <div>
        <Slideer {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slideer>
      </div>
    )
  );
};

export default ImageSlider;


