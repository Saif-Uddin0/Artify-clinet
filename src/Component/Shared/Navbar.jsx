
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
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
            `px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
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
            `px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
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
            `px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
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
            `px-4 py-2 rounded-md transition-all duration-300 ${
              isActive
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
    // const { user, logOut } = use(AuthContext)
    // const handleLogout = () => {
    //     // console.log('user i trying logout');
    //     logOut()
    //         .then(() => {
    //             toast.success('successfuly logout')
    //         })
    //         .catch(error => {
    //             toast.error(error)
    //         })
    // }

    return (
        <div className='bg-gray-50 w-full shadow-sm'>
            <div className="navbar md:w-11/12  md:mx-auto">
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
                    <ul className="menu menu-horizontal px-1 flex gap-5 font-medium text-gray-600">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3 md:gap-2">


                    {/* <button className="btn btn-primary text-white">Logout</button> : <ul className='flex items-center justify-center gap-1'> */}
                    <Link to={'/auth/login'} className="btn bg-white text-purple-500 border border-purple-500 ">Login</Link>
                    <Link to={'/auth/register'} className="btn btn-st text-white">Register</Link>
                    {/* </ul> */}


                </div>
            </div>
        </div>
    );
};

export default Navbar;