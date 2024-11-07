
import { BurgerMenu } from '../../BurgerMenu';
import logo from '/public/logo.svg'


export const Navbar = () => {
  return (
    <div className=" lg:pl-52 pl-24 lg:pr-36 pr-16 flex items-center justify-between">
    <div>
     <img className='w-28 absolute' src={logo} alt="" />
      </div>
      <div className='pt-16 '>
        <BurgerMenu/>
      </div>
    </div>
  );
}
