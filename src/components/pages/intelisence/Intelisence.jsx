/* eslint-disable no-irregular-whitespace */
import EinsteinButton from '../../EinsteinButton';
import Einstein from '/public/einstain.jpg';

export const Intelisence = () => {
  return (
    <div className="m-6 px-12">
      <div className="group flex items-center justify-around px-16 bg-[#000] py-6 rounded-full hover:bg-[#EBCEB5] duration-700 relative">
        <div className="relative z-10">
          <img
            className="w-56 h-56 rounded-full transition-all duration-700 transform group-hover:translate-x-[52rem]"
            src={Einstein}
            alt="Einstein"
          />
        </div>
        <div
          className="flex flex-col z-10
        transition-all duration-700 transform group-hover:-translate-x-[40rem]
        "
        >
          <h1 className="uppercase text-6xl font-semibold text-[#FFFFFF] group-hover:text-black">
            Creativity is <br /> Intelligence <br /> Having Fun.
          </h1>
          <h6 className="text-white italic group-hover:text-black">
            -Albert Einstein
          </h6>
        </div>
      </div>
      <div className="px-96 py-5 text-lg font-semibold">
        V BrandBrillé věříme v sílu kreativní komunikace, která vyrůstá
        z hravosti inteligence a profesních zkušeností. To je kreativita, na
        které podle nás má stát efektivní marketing. Jednoduše jiskrně chytrá
     komunikace.
     
     <div className='flex items-center justify-end'>
      <EinsteinButton/>
     </div>
      </div>
    </div>
  );
};
