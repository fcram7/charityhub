import { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import NavLink from './NavLink';
import { Api } from '../network/api';
import Button from './Button';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const cookie = Cookies.get("session");
  const location = useLocation();

  useEffect(() => {
    setMenuActive(false);
  }, [location])

  const hamburgerButtonHandler = () => {
    setMenuActive(prevMenu => !prevMenu);
  }

  const logoutHandler = async () => {
    await Api.logout()
      .then(() => {
        navigate("/");
        return toast.success("Successfully Logged Out");
      })
      .catch((err) => {
        console.error(err);
        return toast.error(`Oops! There's an error ${err}`);
      });
    }

  return ( 
    <header className={`navbar-section ${menuActive ? "" : "overflow-hidden"} border-b-4 lg:border-b-2 border-slate-950 z-50 bg-slate-200`}>
      <nav className="navbar relative flex py-6 px-[7%] lg:px-[2%] lg:py-1 h-full justify-between items-center">
        <Link to="/" className="navbar-logo font-semibold text-2xl lg:text-3xl text-neutral-700">charity<span>hub.</span></Link>

        <ul className={`navbar-links inline-block text-neutral-700 bg-slate-200 text-lg absolute z-[99] w-full top-20 left-0 pt-4 lg:pt-1 px-[7%] max-lg:h-[100vh] transform transition-transform duration-200 ease-in-out ${menuActive ? "translate-x-0" : "translate-x-full"} lg:static flex flex-col gap-4 lg:gap-0 lg:w-fit lg:justify-end lg:items-end lg:translate-x-0 lg:px-0`}>
          { !cookie ? (
            <>
              <NavLink link="/">Home</NavLink>
              {/* <NavLink link="/about">About</NavLink> */}
              <NavLink link="/">Charities</NavLink>
              <NavLink link="/contact-us">Contact Us</NavLink>
              <NavLink link="/login">Login</NavLink>
            </>
          ) : (
            <>
              <NavLink link="/">Home</NavLink>
              <NavLink link="/">About</NavLink>
              <NavLink link="/">Charities</NavLink>
              <NavLink link="/contact-us">Contact Us</NavLink>
              <Button type="button" onClick={logoutHandler} text="Logout"/>
            </>
          )}
        </ul>

        <div className="navbar-extra lg:hidden">
          <a className="text-2xl cursor-pointer" id="hamburgerButton" onClick={hamburgerButtonHandler}>{menuActive ? <RxCross1 /> : <RxHamburgerMenu />}</a>
        </div>
      </nav>
    </header>
   );
}
 
export default Navbar;