import RoundShape from '/public/roundShape.WEBM';

export const VideoMarquee = () => {
  return (
    <div className='flex items-center justify-around my-12'>
      <div>
        <video
          className="w-52 rounded-full"
          src={RoundShape}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    <div className='flex flex-col items-center justify-center'>
     <h1 className='text-8xl'>Sharp Brands</h1>
<h4 className='text-5xl tracking-wide'>Sparking Communication</h4>
      </div>
      <div>
        <video
          className="w-52 rounded-full"
          src={RoundShape}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
}
