import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const hamburgerButtonHandler = () => {
    setMenuActive(prevMenu => !prevMenu);
  }

  return ( 
    <header className={`navbar-section ${menuActive ? "" : "overflow-hidden"} border-b-4 border-slate-950 z-50 bg-slate-200`}>
      <nav className="navbar relative flex py-6 px-[7%] lg:px-[5%] h-full justify-between items-center">
        <Link to="/" className="navbar-logo font-semibold text-2xl lg:text-3xl text-neutral-700">charity<span>hub.</span></Link>

        <ul className={`navbar-links inline-block text-neutral-700 bg-slate-200 text-lg absolute z-[9999] w-full top-20 left-0 pt-4 px-[7%] max-lg:h-[100vh] transform transition-transform duration-200 ease-in-out ${menuActive ? "translate-x-0" : "translate-x-full"} lg:static flex flex-col gap-4 lg:gap-8 lg:flex-row lg:justify-end lg:translate-x-0 lg:px-0`}>
          <li className="navbar-menu cursor-pointer after:transform after:transition-transform after:ease-linear after:duration-100 after:border-[0.05rem] after:content-[''] after:border-solid after:border-neutral-600 after:origin-left after:scale-x-0 hover:after:scale-x-[10%] lg:hover:after:scale-x-110 after:block"><Link to="/">Home</Link></li>
          <li className="navbar-menu cursor-pointer after:transform after:transition-transform after:ease-linear after:duration-100 after:border-[0.05rem] after:content-[''] after:border-solid after:border-neutral-600 after:origin-left after:scale-x-0 hover:after:scale-x-[10%] lg:hover:after:scale-x-110 after:block"><a href="#">About</a></li>
          <li className="navbar-menu cursor-pointer after:transform after:transition-transform after:ease-linear after:duration-100 after:border-[0.05rem] after:content-[''] after:border-solid after:border-neutral-600 after:origin-left after:scale-x-0 hover:after:scale-x-[13%] lg:hover:after:scale-x-110 after:block"><a href="#">Charities</a></li>
          <li className="navbar-menu cursor-pointer after:transform after:transition-transform after:ease-linear after:duration-100 after:border-[0.05rem] after:content-[''] after:border-solid after:border-neutral-600 after:origin-left after:scale-x-0 hover:after:scale-x-[16%] lg:hover:after:scale-x-110 after:block"><Link to="/contact-us">Contact Us</Link></li>
        </ul>

        <div className="navbar-extra lg:hidden">
          <a className="text-2xl cursor-pointer" id="hamburgerButton" onClick={hamburgerButtonHandler}>{menuActive ? <RxCross1 /> : <RxHamburgerMenu />}</a>
        </div>
      </nav>
    </header>
   );
}
 
export default Navbar;