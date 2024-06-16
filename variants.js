export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0, // Corrected x for 'right'
      },
      show: {
        y: 0,
        opacity: 1,
        x: 0,
        transition: {
          type: 'tween',
          delay: delay,
          duration: 1.5,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
    };
  };
  