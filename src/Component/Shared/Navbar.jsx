import { NavLink } from "react-router";
import navImg from '../../assets/Navlogo.png'

const Navbar = () => {
    const links = <>
        <li><NavLink className={({isActive})=> isActive? 'hover:opacity-80' : ''} to={'/'}>Home</NavLink></li>
        <li className="hover:opacity-80"><NavLink className={({isActive})=> isActive? '' : ''} to={'/explore-art'}>Explore Artworks</NavLink></li>
        <li className="hover:opacity-80"><NavLink className={({isActive})=> isActive? 'hover:opacity-80' : ''} to={'/add-art'}>Add Artwork</NavLink></li>
        <li className="hover:opacity-80"><NavLink className={({isActive})=> isActive? 'hover:opacity-80' : ''} to={'/my-gallery'}>My
Gallery</NavLink></li>
        <li className="hover:opacity-80"><NavLink className={({isActive})=> isActive? 'hover:opacity-80' : ''} to={'/my-favorite'}>My Favorites</NavLink></li>
    </>
    return (
        <header className="bg-[#570CE3] text-white py-4">
            <div className="container mx-auto flex items-center justify-between px-4">

                <div className="flex items-center space-x-2">

                    <div>
                        <img src={navImg} className="w-32 h-fit" alt="" />
                    </div>
                </div>



                <div className=" flex items-center justify-between gap-15">
                    {/* Navlink */}
                    <nav className="">
                        <ul className=" hidden lg:flex items-center space-x-6 font-medium text-md ">
                            {links}
                        </ul>


                    </nav>
                </div>






                {/* mobile responsive */}
                <div className="dropdown">
                    {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul> */}

                    <div className="navbar">
                        <button></button>
                    </div>
                </div>

            </div>

        </header>
    );
};

export default Navbar;
