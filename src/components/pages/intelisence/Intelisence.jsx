/* eslint-disable no-irregular-whitespace */
import EinsteinButton from '../../EinsteinButton';
import Einstein from '/public/einstain.jpg';

export const Intelisence = () => {
  return (
    <div className="m-6 px-12">
      <div className="group flex items-center justify-around px-16 bg-[#000] py-6 rounded-full hover:bg-[#EBCEB5] duration-700 relative">
        <div className="relative z-10">
          <img
            className="lg:w-56 lg:h-56 size-40 rounded-full transition-all duration-700 transform lg:group-hover:translate-x-[46rem] group-hover:translate-x-[18rem]"
            src={Einstein}
            alt="Einstein"
          />
        </div>
        <div
          className="flex flex-col z-10
        transition-all duration-700 transform lg:group-hover:-translate-x-[34rem] group-hover:-translate-x-[12rem]
        "
        >
          <h1 className="uppercase lg:text-6xl text-4xl font-semibold text-[#FFFFFF] group-hover:text-black">
            Creativity is <br /> Intelligence <br /> Having Fun.
          </h1>
          <h6 className="text-white italic group-hover:text-black">
            -Albert Einstein
          </h6>
        </div>
      </div>
      <div className="lg:px-9 md:px-0 py-5 text-lg font-semibold">
        V BrandBrillé věříme v sílu kreativní komunikace, která vyrůstá
        z hravosti inteligence a profesních zkušeností. To je kreativita, na
        které podle nás má stát efektivní marketing. Jednoduše jiskrně chytrá
        komunikace.
        <div className="flex items-center justify-end mt-8">
          <EinsteinButton />
        </div>
      </div>
    </div>
  );
};
