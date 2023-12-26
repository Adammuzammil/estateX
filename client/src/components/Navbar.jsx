import React, { useState, useEffect } from "react";

import { close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    // Function to close the menu when the screen size becomes larger
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", closeMenuOnResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  return (
    <header className="bg-header shadow-md">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <a href="#" className="flex items-center py-2 px-3">
              <svg
                className="h-6 w-6 mr-1 text-[#7065f0]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>

              <span>EstateX</span>
            </a>
          </div>
          {/* Menus */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="py-4">
              Buy
            </a>
            <a href="#">Rent</a>
            <a href="#">Sell</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          {/* Login */}
          <div className="hidden md:flex space-x-2">
            <a href="#" className="px-3 py-2 border rounded">
              Login
            </a>
            <a href="#" className="px-3 bg-[#7065f0] py-2 rounded text-white">
              Sign up
            </a>
          </div>

          {/* Mobile Menu Button*/}
          <div className="md:hidden flex items-center pr-2">
            <button onClick={handleToggle}>
              {toggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } md:hidden flex-col space-y-2 items-center`}
      >
        <a href="#" className="py-2">
          Rent
        </a>
        <a href="#" className="py-2">
          Sell
        </a>
        <a href="#" className="py-2">
          Buy
        </a>
        <a href="#" className="py-2">
          Login
        </a>
        <a href="#" className="py-2">
          About
        </a>
        <a href="#" className="py-2">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
