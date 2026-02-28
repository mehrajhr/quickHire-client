import React, { useContext } from "react";
import { HiBriefcase } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom"; 
import AuthContex from "../Context/AuthContext/AuthContex";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContex);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const links = (
    <>
      <li className="mx-0 lg:mx-2 font-medium">
        <NavLink to='/' className={({ isActive }) => isActive ? "text-[#4F46E5] font-bold" : ""}>Home</NavLink>
      </li>
      <li className="mx-0 lg:mx-2 font-medium hover:text-[#4F46E5] cursor-pointer">Find Jobs</li>
      <li className="mx-0 lg:mx-2 font-medium hover:text-[#4F46E5] cursor-pointer">Company list</li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-4 lg:px-20 py-4">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="bg-[#4F46E5] p-1.5 rounded-lg text-white">
            <HiBriefcase size={24} />
          </div>
          <span className="text-[#18191C]">
            Quick<span className="text-[#4F46E5]">Hire</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-[#5E6670]">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex gap-4 items-center">
          {/* Desktop Auth Logic */}
          {user ? (
            <button 
              onClick={handleLogout} 
              className="btn btn-outline border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:border-[#4F46E5] hover:text-white hidden lg:flex"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to='/login' className="text-[#4F46E5] font-semibold hover:underline hidden lg:block">
                Login
              </Link>
              <Link to='/signup' className="btn bg-[#4F46E5] hover:bg-[#3f37c9] pt-2 text-white border-none hidden lg:block px-6">
                Sign Up
              </Link>
            </>
          )}

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-xl z-[100]">
              {links}
              <div className="divider my-1"></div>
              {user ? (
                <li><button onClick={handleLogout} className="text-red-500 font-bold">Logout</button></li>
              ) : (
                <>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/signup'>Signup</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;