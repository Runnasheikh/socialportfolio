import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/jha/jha1.jpg',
    '/jha/jha2.jpg',
    '/jha/jha3.JPG',
    '/jha/jha4.jpg',
    '/jha/jha5.png',
    '/jha/jha6.jpg',
    '/jha/jha7.JPG',
    '/jha/jha8.jpg',
    '/jha/jha9.jpg',
    // '/jha/jha10.jpg',
    '/jha/jha11.JPG',
    '/jha/jha12.jpg',
    '/jha/jha13.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const prevSlide = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[calc(100vh+30px)] flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="custom-object-position w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 p-2 bg-black bg-opacity-50 rounded-lg">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
