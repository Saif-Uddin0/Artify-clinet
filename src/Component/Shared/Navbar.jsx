import { motion, AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { toast } from 'react-toastify';
import { BookImage, BookmarkPlus, Earth, House, LogOut, Star } from "lucide-react";


const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light")

  }


  const navLinks = (
    <>
      <li >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md sm:font-semibold text-white transition-all duration-300 flex items-center justify-center gap-1 ${isActive
              ? "text-st font-semibold border-b border-white"
              : "hover:text-indigo-500"
            }`
          }
        >
          <House color="white" size={16} />Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-art"
          className={({ isActive }) =>
            `px-4 py-2 sm:font-semibold text-white flex items-center justify-center gap-1  rounded-md transition-all duration-300 ${isActive
              ? "text-st font-semibold border-b border-white"
              : "hover:text-indigo-500"
            }`
          }
        >
          <Earth color="white" size={16} />Explore Artworks
        </NavLink>
      </li>




      {
        user && <>
          <li>
            <NavLink
              to="/add-art"
              className={({ isActive }) =>
                `px-4 py-2 sm:font-semibold text-white flex items-center justify-center gap-1 rounded-md transition-all duration-300 ${isActive
                  ? "text-st font-semibold border-b border-white"
                  : "hover:text-indigo-500"
                }`
              }
            >
              <BookmarkPlus color="white" size={16} />Add Artwork
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-gallery"
              className={({ isActive }) =>
                `px-4 py-2 sm:font-semibold text-white flex items-center justify-center gap-1 rounded-md transition-all duration-300 ${isActive
                  ? "text-st font-semibold border-b border-white"
                  : "hover:text-indigo-500"
                }`
              }
            >
              <BookImage color="white" size={16} />My Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-favorite"
              className={({ isActive }) =>
                `px-4 py-2 sm:font-semibold text-white flex items-center justify-center gap-1 rounded-md transition-all duration-300 ${isActive
                  ? "text-st font-semibold border-b border-white"
                  : "hover:text-indigo-500"
                }`
              }
            >
              <Star color="white" size={16} /> My Favorites
            </NavLink>
          </li>

        </>
      }
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
    <div className='bg-indigo-600 w-full '>
      <div className="navbar container md:max-w-full xl:container mx-auto">
        <div className=" navbar-start space-x-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" flex items-center justify-center btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black  rounded-box z-1 mt-3 w-50 p-2 shadow">
              {navLinks}
            </ul>

          </div>
          <div>
            <Link to={'/'}
              className="btn-ghost text-lg  sm:text-2xl font-extrabold text-white"
            >
              ARTIFY
            </Link>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center px-1 gap-2 font-medium text-gray-800">
            {navLinks}
          </ul>
        </div>




        <div className="navbar-end flex items-center gap-2">
          {/* theme */}
          <ul>
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input type="checkbox"
                onChange={(e) => handleTheme(e.target.checked)}
                 defaultChecked={localStorage.getItem('theme') === "dark"}
                  className="toggle theme-controller" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
          {user ? (
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className="w-11 h-11 rounded-full border border-white/40 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 "
                src={user.photoURL || "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}

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
                        className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-contain"
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