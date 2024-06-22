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
            <Image width={200} src={src} className="block w-full h-full  object-top" alt={`Slide ${index + 1}`} />
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


// import React from 'react'
// import Image from 'next/image'
// import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
// import { fadeIn } from '../../variants'
// import { motion } from 'framer-motion'
// import { TypeAnimation } from 'react-type-animation'

// const locationSequence = [
//     'los angeles ,usa',
//     3000,
//     'paris angeles, usa',
//     3000,
//     'bermin angeles, usa',
//     3000
// ]

// const Hero = () => {
//   return (
//     <section className='h-[80vh] xl:h-[850px]' id='home'>
//       <div className='container mx-auto h-full flex justify-center items-center xl:justify-start'>
//         <div className='h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12'>
//           <MouseParallaxContainer 
//             globalFactorX={0.1}
//             globalFactorY={0.2}
//             resetOnLeave
//             className='relative flex items-center h-[120px] xl:h-max xl:w=[840px]'
//           >
//             <MouseParallaxChild
//               factorX={0.2}
//               factorY={0.4}
//               className='relative'
//             >
//               <motion.div
//                 variants={fadeIn('up', 0.4)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 className='w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]'
//               >
//                 <Image
//                   src={'/assets/hero/typo-1.svg'}
//                   fill
//                   alt='singer'
//                   className='object-contain'
//                 />
//               </motion.div>
//             </MouseParallaxChild>
//             <MouseParallaxChild
//               factorX={0.9}
//               factorY={0.9}
//               className='absolute xl:left-6 z-30'
//             >
//               <motion.div
//                 variants={fadeIn('up', 0.7)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 className='w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]'
//               >
//                 <Image
//                   src={'/assets/hero/typo-2.svg'}
//                   fill
//                   alt='singer'
//                   className='object-contain'
//                 />
//               </motion.div>
//             </MouseParallaxChild>
//             <MouseParallaxChild
//               factorX={0.3}
//               factorY={0.6}
//               className='absolute right-0 z-20 opacity-80'
//             >
//               <motion.div
//                 variants={fadeIn('left', 1.4)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 className='w-[150px] h-[100px] xl:w-[248px] xl:h-[280px] mix-blend-luminosity'
//               >
//                 <Image
//                   src={'/assets/hero/bird.png'}
//                   fill
//                   alt='singer'
//                   className='object-contain'
//                 />
//               </motion.div>
//             </MouseParallaxChild>
//           </MouseParallaxContainer>
//           <motion.div
//             variants={fadeIn('up', 0.1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.7 }}
//             className='min-h-[60px] flex items-center mb-6'
//           >
//             <div>World</div>
//             <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
//               <Image fill src={'/assets/hero/dot.svg'} alt='' />
//             </div>
//             <div>tour</div>
//             <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
//               <Image fill src={'/assets/hero/dot.svg'} alt='' />
//             </div>
//             <div>2024</div>
//             <div className='hidden xl:flex items-center justify-center relative w-7 h-7 mx-4'>
//               <Image fill src={'/assets/hero/mic.svg'} alt='' />
//             </div>
//             <TypeAnimation sequence={locationSequence} wrapper='div' speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} />
//           </motion.div>
//           <motion.div
//             variants={fadeIn('up', 1.4)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.7 }}
//           >
//             <button className='btn bg-accent-hover btn-lg'>get tickets</button>
//           </motion.div>
//         </div>
//         <motion.div
//           variants={fadeIn('left', 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.7 }}
//           className='absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'
//         >
//           <Image
//             src={'/assets/hero/singer.png'}
            
//             width={617}
//             height={893}
//             alt=''
//             quality={100}
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero

