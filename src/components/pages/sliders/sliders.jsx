import AnimatedButton2 from "../../AnimateButton2";
import { KeenSlider } from "../KeenSlider/KeenSlider";



export const Sliders = () => {
  return (
    <div className=" bg-black w-full text-white lg:pl-52 pl-24 lg:pr-36 pr-16  flex flex-col items-center justify-center gap-16 pb-12 mt-[21rem] ">
    <div className=" mt-36 w-full">
<KeenSlider/>
</div>
    <div>
     {/* animated button */}
     <AnimatedButton2 />
</div>
   </div>
  );
}
