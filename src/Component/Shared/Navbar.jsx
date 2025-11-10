import { motion, AnimatePresence } from "framer-motion";
import { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import { LogOut } from "lucide-react";


const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const [isHovered, setIsHovered] = useState(false);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-all duration-300 ${isActive
              ? "text-st font-semibold border-b-2 border-indigo-600"
              : "hover:text-indigo-500"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-art"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-all duration-300 ${isActive
              ? "text-st font-semibold border-b-2 border-indigo-600"
              : "hover:text-indigo-500"
            }`
          }
        >
          Explore Artworks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-art"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-all duration-300 ${isActive
              ? "text-st font-semibold border-b-2 border-indigo-600"
              : "hover:text-indigo-500"
            }`
          }
        >
          Add Artwork
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-gallery"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-all duration-300 ${isActive
              ? "text-st font-semibold border-b-2 border-indigo-600"
              : "hover:text-indigo-500"
            }`
          }
        >
          My Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-favorite"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-all duration-300 ${isActive
              ? "text-st font-semibold border-b-2 border-indigo-600"
              : "hover:text-indigo-500"
            }`
          }
        >
          My Favorites
        </NavLink>
      </li>
    </>
  );



  // firebase auth function implement
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('successfuly logout')


      })
      .catch(error => {
        toast.error(error.message)
      })
  }

  return (
    <div className='bg-gradient-to-r from-gray-50 to-gray-100 w-full border-b border-gray-100'>
      <div className="navbar container md:w-11/12 mx-auto">
        <div className=" navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn flex items-center justify-center btn-ghost lg:hidden text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <div>
            <Link to={'/'}
              className="btn btn-ghost text-lg  sm:text-2xl font-extrabold text-st"
            >
              ARTIFY
            </Link>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 font-medium text-gray-800">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className="w-11 h-11 rounded-full border-2 border-indigo-500 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 "
                src={user.photoURL || "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                alt={user.displayName || "User"}
              />

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-52 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg rounded-xl p-4 z-50"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={user.photoURL || "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
                        alt="profile"
                        className="w-12 h-12 rounded-full border-2 border-indigo-400 shadow-sm object-contain"
                      />
                      <p className="font-semibold text-gray-800 text-sm text-center">
                        {user.displayName || "Anonymous User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate text-center">
                        {user.email}
                      </p>
                    </div>

                    <div className="mt-3">
                      <button
                        onClick={handleLogout}
                        className="w-full py-1.5 flex items-center justify-center gap-x-1.5 rounded-lg btn-st text-white text-sm font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
                      >
                        Logout<LogOut size={20} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/auth/login"
                className="btn bg-white text-st border border-purple-500 hover:bg-indigo-100 hover:border-indigo-600 transition-all"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-st text-white hover:opacity-90"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;