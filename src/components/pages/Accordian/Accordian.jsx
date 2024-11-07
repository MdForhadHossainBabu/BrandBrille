/* eslint-disable no-unused-vars */
import content from '../../../assets/Content.png'
import social from '../../../assets/social.png'
import digital from '../../../assets/digital.png'
import esg from '../../../assets/ESG.png'
import pr from '../../../assets/Pr.png'
import { motion } from 'framer-motion';
import marketing from '../../../assets/Marketing.png';
import brand from '../../../assets/Brand.png';
import { useState } from 'react';

export const Accordian = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  return (
    <div className="bg-black/90 text-[#7D7D82] py-4 px-12 rounded-t-3xl h-[80vh]">
      {/* Divider */}
      <div className="w-full border-b mt-1 border-b-[#7D7D82]" />
      {/* Accordian 1 */}
      <div
        onMouseEnter={() => setShowContent1(true)}
        onMouseLeave={() => setShowContent1(false)}
        className="group"
      >
        {/* Heading */}
        <motion.div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>01</div>
            <h1 className="lg:text-6xl text-4xl group-hover:text-orange-500 group-hover:font-semibold">
              Marketing Strategy
            </h1>
          </div>
          <motion.img
            className="w-20 transition-all duration-500"
            src={marketing}
            alt=""
            animate={
              showContent1 ? { x: -64, scale: 1.7, y: 16, rotate: -12 } : {}
            }
          />
        </motion.div>
        {showContent1 && (
          <motion.div
            className="pl-8 text-sm py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Aut illo accusamus nesciunt sunt, itaque error obcaecati!</li>
            <li>Autem doloribus nostrum expedita modi sequi excepturi non?</li>
            <li>Debitis quisquam eveniet id animi earum dolores commodi.</li>
            <li>
              Asperiores consequuntur impedit veniam magnam voluptatem ab
              quibusdam.
            </li>
            <li>
              Dolorum ratione voluptatibus repellat. Alias adipisci laborum
              deleniti?
            </li>
          </motion.div>
        )}
      </div>
      {/* Divider */}
      <div className="w-full border-b mt-1 border-b-[#7D7D82]" />

      {/* Accordian 2 */}
      <div
        onMouseEnter={() => setShowContent2(true)}
        onMouseLeave={() => setShowContent2(false)}
        className="group"
      >
        {/* Heading */}
        <motion.div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>02</div>
            <h1 className="lg:text-6xl text-4xl group-hover:text-orange-500 group-hover:font-semibold">
              Brand Identify
            </h1>
          </div>
          <motion.img
            className="w-20 transition-all duration-300"
            src={brand}
            alt=""
            animate={
              showContent2
                ? { x: -64, scale: 1.7, y: 16, rotate: -12, marginTop: 12 }
                : {}
            }
          />
        </motion.div>
        {showContent2 && (
          <motion.div
            className="pl-8 text-sm py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Aut illo accusamus nesciunt sunt, itaque error obcaecati!</li>
            <li>Autem doloribus nostrum expedita modi sequi excepturi non?</li>
            <li>Debitis quisquam eveniet id animi earum dolores commodi.</li>
            <li>
              Asperiores consequuntur impedit veniam magnam voluptatem ab
              quibusdam.
            </li>
            <li>
              Dolorum ratione voluptatibus repellat. Alias adipisci laborum
              deleniti?
            </li>
          </motion.div>
        )}
      </div>
      {/* Divider */}
      <div className="w-full border-b mt-1 border-b-[#7D7D82]" />
    </div>
  );
};
