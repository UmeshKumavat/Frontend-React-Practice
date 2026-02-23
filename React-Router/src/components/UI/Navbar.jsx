import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        Users
      </NavLink>

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link> */}
    </div>
  );
};

export default Navbar;
