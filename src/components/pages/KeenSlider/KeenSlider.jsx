/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export const KeenSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide w-full mb-12">
            Content
          </div>
          <div className="keen-slider__slide number-slide w-full mb-12">
            Content
          </div>
          <div className="keen-slider__slide number-slide w-full mb-12">
            Content
          </div>
          <div className="keen-slider__slide number-slide w-full mb-12">
            Content
          </div>
          <div className="keen-slider__slide number-slide w-full mb-12">
            Content
          </div>
          <div className="keen-slider__slide number-slide w-full mb-12">
            Content
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex py-4 pt-12 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  'w-1 h-1 bg-white rounded-full mx-2 p-[5px] cursor-pointer dot ' +
                  (currentSlide === idx ? 'active' : '')
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow({ left, onClick, disabled }) {
  const arrowClass = disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={onClick}
      className={`w-5 h-7 absolute fill-[#EBCEB5] ${
        left
          ? 'lg:left-[22rem] left-[9rem] -bottom-16'
          : 'lg:right-[22rem] right-[9rem] -bottom-16'
      } ${arrowClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path
          d="M16.5839 4.59807C17.4665 3.72332 17.4728 2.29871 16.5981 1.41612C15.7233 0.533533 14.2987 0.527177 13.4161 1.40193L8.03193 6.73829C6.00401 8.74812 4.34659 10.3908 3.17117 11.8544C1.94888 13.3764 1.06408 14.9212 0.827727 16.7755C0.724091 17.5886 0.724091 18.4114 0.827727 19.2245C1.06408 21.0788 1.94888 22.6236 3.17117 24.1456C4.34658 25.6092 6.00398 27.2519 8.03189 29.2617L13.4161 34.5981C14.2987 35.4728 15.7233 35.4665 16.5981 34.5839C17.4728 33.7013 17.4665 32.2767 16.5839 31.4019L11.295 26.16C9.14849 24.0326 7.67608 22.5685 6.67978 21.3279C5.71199 20.1228 5.37997 19.3487 5.29161 18.6555C5.23613 18.2202 5.23613 17.7798 5.29161 17.3445C5.37997 16.6513 5.71199 15.8772 6.67978 14.6721C7.67608 13.4315 9.14849 11.9674 11.295 9.84L16.5839 4.59807Z"
          fill="#EBCEB5"
        />
      ) : (
        <path
          d="M4.58388 1.40193C3.70129 0.527177 2.27668 0.533533 1.40193 1.41612C0.527177 2.29871 0.533533 3.72332 1.41612 4.59807L6.70503 9.83999C8.85151 11.9674 10.3239 13.4315 11.3202 14.6721C12.288 15.8772 12.62 16.6513 12.7084 17.3445C12.7639 17.7798 12.7639 18.2202 12.7084 18.6555C12.62 19.3487 12.288 20.1228 11.3202 21.3279C10.3239 22.5685 8.85151 24.0326 6.70503 26.16L1.41612 31.4019C0.533533 32.2767 0.527177 33.7013 1.40193 34.5839C2.27668 35.4665 3.70129 35.4728 4.58388 34.5981L9.96807 29.2617C11.996 27.2519 13.6534 25.6092 14.8288 24.1456C16.0511 22.6236 16.9359 21.0788 17.1723 19.2245C17.2759 18.4114 17.2759 17.5886 17.1723 16.7755C16.9359 14.9212 16.0511 13.3764 14.8288 11.8544C13.6534 10.3908 11.996 8.74812 9.96806 6.73828L4.58388 1.40193Z"
          fill="#EBCEB5"
        />
      )}
    </svg>
  );
}
