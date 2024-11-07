import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiMiniXMark } from 'react-icons/hi2';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Menu Button */}
      <div
        className="absolute -top-7 lg:-right-[86px] -right-14 z-50 cursor-pointer p-3 text-white  rounded-full"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <div className="hover:border p-[8px] rounded-full text-black hover:border-black/80">
            <HiMiniXMark className="text-lg" />
          </div>
        ) : (
          <div className="border p-[8px] bg-black rounded-full hover:bg-white hover:text-black">
            <RxHamburgerMenu className="text-lg" />
          </div>
        )}
      </div>

      {/* Full Screen Rounded Menu */}
      <motion.div
        initial={{ clipPath: 'circle(2rem at calc(100% - 2.5rem) 2.5rem)' }}
        animate={{
          clipPath: isOpen
            ? 'circle(150% at calc(100% - 2.5rem) 2.5rem)'
            : 'circle(0rem at calc(100% - 2.5rem) 2.5rem)',
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className={`${
          isOpen ? ' top-0 right-0  ' : 'top-6 right-12'
        }  fixed w-full h-full bg-white z-40`}
      >
        {isOpen && (
          <div className="text-black p-8 flex justify-center items-center h-full">
            <h1 className="text-4xl">Menu Content</h1>
            {/* Add additional menu items as needed */}
          </div>
        )}
      </motion.div>
    </div>
  );
};
