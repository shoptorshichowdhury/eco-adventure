import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className="text-[#064E3B] hover:underline transition-all duration-300"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-[#064E3B] hover:underline transition-all duration-300"
          to="/myProfile"
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-[#064E3B] hover:underline duration-300"
          to="/updateProfile"
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#F9F9F9] sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-50 z-30 border-b border-gray-200 font-bebas">
      <div className="navbar py-3 font-openSans w-11/12 mx-auto">
        <div className="navbar-start">
          <div tabIndex={0} role="button" className="dropdown">
            <div className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl md:text-3xl lg:text-4xl font-bebas text-[#064E3B]"
          >
            Eco Adventure
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 font-medium menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link
            to="/auth/login"
            className="btn btn-sm md:btn-md bg-[#064E3B] border border-transparent text-[#F9F9F9] rounded-2xl md:rounded-[28px] px-4 md:px-8 md:text-base hover:border-[#064E3B] hover:bg-[#F9F9F9] hover:text-[#064E3B] transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
