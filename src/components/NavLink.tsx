import { Link } from 'react-router-dom';

interface navLink {
  children: string,
  link: string
}

const NavLink = ({ children, link }: navLink) => {
  return ( 
    <li className="navbar-menu cursor-pointer after:transform after:transition-transform after:ease-linear after:duration-100 after:border-[0.05rem] after:content-[''] after:border-solid after:border-neutral-600 after:origin-left after:scale-x-0 hover:after:scale-x-[10%] lg:hover:after:scale-x-110 after:block">
      <Link to={link}>
        { children }
      </Link>
    </li>
   );
}
 
export default NavLink;