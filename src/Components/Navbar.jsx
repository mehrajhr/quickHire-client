import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li className="mx-0 lg:mx-2">Home</li>
      <li className="mx-0 lg:mx-2">Find Jobs</li>
      <li className="mx-0 lg:mx-2">Company list</li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Quick Hire</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 justify-center items-center">
          <button className="text-primary text-xl hover:btn-link hidden lg:block">Login</button>
          <button className="btn btn-primary hidden lg:block">Sign Up</button>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 right-0 w-40 p-2 shadow"
            >
              {links}
              <li>Login</li>
              <li>Sign UP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
