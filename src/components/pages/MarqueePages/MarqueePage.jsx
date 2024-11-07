/* eslint-disable react/no-unescaped-entities */
import bg from '/public/marquee.MP4';
import profile from '/public/Hossain.PNG'
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';


export const MarqueePage = () => {


 const [data, setData] = useState([]);
 useEffect(() => {
  fetch('/marquee.json').then(res => res.json()).then(data => setData(data))
 },[])

 // console.log(data)

  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={bg}
        // className="w-full h-auto absolute top-0 left-0"
        className="w-full lg:h-[800px] h-[600px] object-cover"
      ></video>

      <div className="absolute lg:-top-72 -top-60 left-0 z-10 w-full h-full flex items-center justify-center text-white">
        <h1 className="text-4xl">/ Naši brillé klienti</h1>
      </div>

      <div className="absolute lg:top-12 top-6 left-0 z-10 w-full h-full flex items-center justify-center text-white">
        <Marquee speed={100}>
          {data.map((item) => (
            <div
              key={item.id}
              className="w-96 border-2 p-4 bg-[#FFF] text-[#5F5F5D] rounded-[25px] mr-12"
            >
              <h1 className="text-7xl">"</h1>
              <div>
                <p className="text-balance">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quae, aperiam nemo voluptatibus ut, error voluptates mollitia
                  saepe explicabo tenetur blanditiis incidunt eligendi numquam
                  reprehenderit eos aliquid vero itaque quaerat sunt fugit
                  architecto placeat adipisci unde voluptate maxime. Cum natus
                  repudiandae non, sit modi, obcaecati voluptatibus nostrum
                  autem reprehenderit molestias quasi!
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <span className="size-12">
                  <img
                    className="size-12 rounded-full flex items-center justify-center"
                    src={profile}
                    alt=""
                  />
                </span>

                <span className="text-sm">
                  <h5>Albert Einstein</h5>
                  <h5>CEO, Founder</h5>
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
