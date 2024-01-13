// pages/index.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <Slider {...sliderSettings}>
        <div>
          <img src="/card2.png" alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src="/card.png" alt="Slide 2" className="w-full" />
        </div>
        <div>
          <img src="/card1.png" alt="Slide 3" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
