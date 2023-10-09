import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active hover:bg-white/30  backdrop-brightness-75 py-2 px-3 rounded text-center"
              : "hover:bg-white/30  backdrop-brightness-75 py-2 px-3 rounded text-center"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/serviceDetails"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-white/30  backdrop-brightness-75 py-2 px-3 rounded text-center"
              : "hover:bg-white/30  backdrop-brightness-75 py-2 px-3 rounded"
          }
        >
          Service
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/playSongs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active bg-white/30  backdrop-brightness-75 py-2 px-3 rounded text-center"
                  : "hover:bg-white/30  backdrop-brightness-75 py-2 px-3 rounded"
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
                  ? "active bg-white/30  backdrop-brightness-75 py-2 px-3 rounded text-center"
                  : "hover:bg-white/30  backdrop-brightness-75 py-2 px-3 rounded"
              }
            >
              Lyrics
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar justify-evenly text-white py-10 mx-auto">
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
            <img src={logo} alt="" className="w-72" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 menu-horizontal px-1">
            {navLinks}
            {user ? (
              <li onClick={handleLogOut}>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : "bg-white/5 hover:bg-white/30  backdrop-brightness-75 py-2 px-3 rounded text-center"
                  }
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active hover:bg-white/30 backdrop-brightness-75 py-1 px-4 rounded"
                      : "hover:bg-white/30  backdrop-brightness-75 py-1 px-4 rounded"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
          {user && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ml-12"
              >
                <div className="w-10 rounded-full">
                  {user && <img src={user?.photoURL} />}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-4 shadow backdrop-brightness-5 rounded-box w-40 mt-4"
              >
                <div className="text-center">
                  {user && <p>{user?.displayName}</p>}
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
