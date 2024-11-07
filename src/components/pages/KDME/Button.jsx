import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Angle from '/public/angleArrow.svg';

const Button = () => {
  const ballRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  const handleHover = () => {
    gsap.to(ballRef.current, {
      scale: 25, // Large scale to cover the entire button
      duration: 0.8, // Smooth scaling over 0.8 seconds
      ease: 'power1.out', // Smooth easing
    });
    gsap.to([textRef.current, arrowRef.current], {
      color: '#000', // Change text color to black on hover
      filter: 'brightness(0)', // Change image to black
      duration: 0.3, // Duration of color change
    });
  };

  const handleHoverEnd = () => {
    gsap.to(ballRef.current, {
      scale: 0, // Shrinks the ball back to original size
      duration: 1, // Match the scale-down duration
      ease: 'power3.out',
    });
    gsap.to([textRef.current, arrowRef.current], {
      color: '#FFF', // Change text color back to white
      filter: 'brightness(1)', // Reset image color
      duration: 0.3,
    });
  };

  return (
    <motion.button
      className="relative px-5 py-5 overflow-hidden border border-[#FFF] bg-black text-[#FFFFFF] rounded-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }} // Tap effect for feedback
    >
      <motion.span
        ref={ballRef}
        className="absolute w-4 h-4 bg-[#FFFFFF] rounded-full top-0 right-0"
        style={{
          transform: 'translate(-50%, -50%) scale(0) rotate(45deg)', // Initial state with 45-degree rotation
          transformOrigin: 'center', // Ensure rotation is centered
        }}
      ></motion.span>

      <span ref={textRef} className="relative z-10 flex items-center gap-5">
        <span>
    <img className='w-5 h-5' src={Angle} alt="" />
          {/* <img ref={arrowRef} className="w-3" src={arrow} alt="" /> */}
        </span>
      </span>
    </motion.button>
  );
};

export default Button;
