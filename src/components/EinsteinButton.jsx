import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import arrow from '/public/arrow.svg';

const EinsteinButton = () => {
  const ballRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  const handleHover = () => {
    gsap.to(ballRef.current, {
      scale: 25, // Large scale to cover the entire button
      duration: 0.8, // Smooth scaling over 0.8 seconds
      ease: 'power1.out', // Smooth easing
    });
    gsap.to(textRef.current, {
      color: '#fff', // Change text color to white on hover
      duration: 0.3, // Duration of color change
    });
    gsap.to(arrowRef.current, {
      filter: 'brightness(100)', // Change arrow to white on hover
      duration: 0.3,
    });
  };

  const handleHoverEnd = () => {
    gsap.to(ballRef.current, {
      scale: 0, // Shrinks the ball back to original size
      duration: 1, // Match the scale-down duration
      ease: 'power3.out',
    });
    gsap.to(textRef.current, {
      color: '#000', // Change text color back to black
      duration: 0.3,
    });
    gsap.to(arrowRef.current, {
      filter: 'brightness(0)', // Change arrow back to black
      duration: 0.3,
    });
  };

  return (
    <motion.button
      className="relative px-5 py-2 overflow-hidden border border-[#000] text-[#000] rounded-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }} // Tap effect for feedback
    >
      <motion.span
        ref={ballRef}
        className="absolute w-4 h-4 bg-[#000] rounded-full -bottom-4 left-1/2"
        style={{ transform: 'translate(-50%, -50%) scale(0)' }} // Center the ball initially, scale 0 hides it
      ></motion.span>
      <span ref={textRef} className="relative z-10 flex items-center gap-5">
        Více o nás
        <span>
          <img
            ref={arrowRef}
            className="w-3 filter brightness-0" // Initially black
            src={arrow}
            alt=""
          />
        </span>
      </span>
    </motion.button>
  );
};

export default EinsteinButton;
