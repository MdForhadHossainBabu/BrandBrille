import AnimatedButton1 from "../../AnimateButton1";
import { Navbar } from "../navbar/navbar"


export const Hero = () => {
  return (
    <div className="h-[95vh] bg-black text-white pt-4">
      {/* Navbar  */}
      <Navbar />
      {/* content */}
      <div className=" lg:pl-52 pl-24 lg:pr-36 pr-16 flex flex-col pt-48">
        <div>
      <h1 className="lg:text-8xl text-6xl text-[#ccc]">Sharp Minds,
       <br />
       Sparkling Ideas</h1>
     </div>
     {/* animate button */}
     <div className="pt-9">
      <AnimatedButton1/>
        </div>
    </div>
    </div>
  );
}
