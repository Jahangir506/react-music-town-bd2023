import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-green-500 py-1 px-4 rounded"
              : "hover:text-green-500 hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-green-500 py-1 px-4 rounded"
              : "hover:text-green-500 hover:underline"
          }
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/playSongs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-green-500 py-1 px-4 rounded"
              : "hover:text-green-500 hover:underline"
          }
        >
          Play Songs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lyrics"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-green-500 py-1 px-4 rounded"
              : "hover:text-green-500 hover:underline"
          }
        >
          Lyrics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-green-500 py-1 px-4 rounded"
              : "hover:text-green-500 hover:underline"
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar justify-between text-white py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            <img src={logo} alt="" className="w-60"/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 menu-horizontal px-1">{navLinks}</ul>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar ml-12"
            >
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-4 shadow bg-gray-500 rounded-box w-40 mt-4"
            >
              <div className="text-center">
                <p className="mb-2">MD. Jahangir Alam</p>
               <button className="py-1 px-3 bg-red-500 rounded">Log Out</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
