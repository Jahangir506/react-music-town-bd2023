import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active bg-green-500 py-1 px-4 rounded" : "hover:text-green-500 hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active bg-green-500 py-1 px-4 rounded" : "hover:text-green-500 hover:underline"
          }
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/playSongs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active bg-green-500 py-1 px-4 rounded" : "hover:text-green-500 hover:underline"
          }
        >
          Play Songs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lyrics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active bg-green-500 py-1 px-4 rounded" : "hover:text-green-500 hover:underline"
          }
        >
          Lyrics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signUp"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active bg-green-500 py-1 px-4 rounded" : "hover:text-green-500 hover:underline"
          }
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );

  return (
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
        <Link to='/' className="normal-case text-xl">Music Town</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-6 menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
