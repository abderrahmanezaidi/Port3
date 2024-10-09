import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
