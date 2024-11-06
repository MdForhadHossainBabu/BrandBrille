import logo from '/public/logo.svg'


export const Navbar = () => {
  return (
    <div className=" lg:pl-52 pl-24 lg:pr-36 pr-16 flex items-center justify-between">
    <div>
     <img className='w-28' src={logo} alt="" />
      </div>
      <div>Menu</div>
    </div>
  );
}
