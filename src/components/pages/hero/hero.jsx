import AnimatedButton1 from "../../AnimateButton1";
import { Navbar } from "../navbar/navbar"
import bg from '../../../assets/herobg.mp4'

export const Hero = () => {
  return (
    <div className=" text-white">
      <video
        className="w-full h-[600px] object-cover absolute top-0 left-0"
        autoPlay
        muted
        loop
        playsInline
        src={bg}
      ></video>

      {/* Navbar  */}
      <Navbar />
      {/* content */}
      <div className=" lg:pl-52 pl-24 lg:pr-36 pr-16 flex flex-col pt-48">
        <div>
          <h1 className="lg:text-8xl text-6xl text-[#ccc] absolute t">
            Sharp Minds,
            <br />
            Sparkling Ideas
          </h1>
        </div>
        {/* animate button */}
        <div className="pt-9 absolute bottom-64">
          <AnimatedButton1 />
        </div>
      </div>
    </div>
  );
}
