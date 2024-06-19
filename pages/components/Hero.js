import React from 'react'
import Image from 'next/image'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import { fadeIn } from '../../variants'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useState,useEffect } from 'react'

const locationSequence = [
    'los angeles ,usa',
    3000,
    'paris angeles, usa',
    3000,
    'bermin angeles, usa',
    3000
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://i.pinimg.com/564x/1e/b2/15/1eb2158aff0362eeb8fa233ee55b4bb8.jpg',
    'https://i.pinimg.com/564x/58/68/f0/5868f0775199a1f4e84159c194a9feab.jpg',
    'https://i.pinimg.com/564x/94/6c/b6/946cb6847fcbbd0046fe48ae9cd9f125.jpg',
    'https://i.pinimg.com/564x/dc/1c/8c/dc1c8c0592e83a0c013d7a9b9ea443a4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 10000 milliseconds = 10 seconds

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
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <img src={src} className="block w-full h-full  object-top" alt={`Slide ${index + 1}`} />
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

export default Hero
