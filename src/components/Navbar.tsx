import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import Cookies from 'js-cookie';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavLink from './NavLink';
import { Api } from '../network/api';
import { preLoadOverlayStore } from '../zustand/preloadOverlayAnimation';
import { tokenStore } from '../zustand/accessToken';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  // const cookie = Cookies.get("session");
  const { token, setToken } = tokenStore();
  const navRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const { headerMenuClicked, setHeaderMenuClicked } = preLoadOverlayStore();

  const handleMenuClick = () => {
    setHeaderMenuClicked(true);
  }

  console.log(headerMenuClicked);

  useLayoutEffect(() => {
    const navbar = navRef.current;

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      if(st > lastScrollTop) {
        gsap.to(navbar, {
          y: "-100%",
          duration: 0.3,
        });
      } else {
        gsap.to(navbar, {
          y: "0",
          duration: 0.5
        })
      }

      lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  useEffect(() => {
    setMenuActive(false);
  }, []);

  const hamburgerButtonHandler = () => {
    setMenuActive(prevMenu => !prevMenu);
  }

  const logoutHandler = async () => {
    await Api.logout()
      .then(() => {
        setToken("");
        navigate("/");
        return toast.success("Successfully Logged Out");
      })
      .catch((err) => {
        console.error(err);
        return toast.error(`Oops! There's an error ${err}`);
      });
    }

  return ( 
    <header ref={navRef} className={`navbar-section fixed w-full ${menuActive ? "" : "overflow-hidden"} border-b-4 lg:border-b-2 border-slate-950 z-50 bg-slate-200`}>
      <nav className="navbar relative flex py-6 px-[7%] lg:px-[2%] lg:py-1 h-full justify-between items-center">
        <Link to="/" className="navbar-logo font-normal text-2xl lg:text-3xl text-neutral-700 font-neueMontreal">charity<span>hub.</span></Link>

        <ul className={`navbar-links inline-block text-neutral-700 bg-slate-200 text-lg absolute z-[99] w-full top-20 left-0 pt-4 lg:pt-1 px-[7%] max-lg:h-[100vh] transform transition-transform duration-200 ease-in-out ${menuActive ? "translate-x-0" : "translate-x-full"} lg:static flex gap-4 lg:gap-6 lg:w-fit lg:justify-end lg:items-end lg:translate-x-0 lg:px-0`}>
          { !token ? (
            <>
              <NavLink onClick={handleMenuClick} link="/">Home</NavLink>
              <NavLink onClick={handleMenuClick} link="/charities">Charities</NavLink>
              <NavLink onClick={handleMenuClick} link="/contact-us">Contact Us</NavLink>
              <NavLink onClick={handleMenuClick} link="/login">Login</NavLink>
            </>
          ) : (
            <>
              <NavLink onClick={handleMenuClick} link="/">Home</NavLink>
              <NavLink onClick={handleMenuClick} link="/charities">Charities</NavLink>
              <NavLink onClick={handleMenuClick} link="/contact-us">Contact Us</NavLink>
              <NavLink onClick={logoutHandler} link="/">Logout</NavLink>
              {/* <Button type="button" onClick={logoutHandler} text="Logout"/> */}
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