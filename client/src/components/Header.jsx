import React from "react";

const Header = () => {
  return (
    <header className="bg-header shadow-md ">
        <div className="flex p-3 justify-between items-center max-w-[88rem] mx-auto">
        <h1 className="font-roboto">Estatex</h1>
        <div>
          <ul className="flex gap-2">
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <button className="bg-header hover:bg-blue-700 text-black font-roboto py-2 px-4 rounded">Login</button>
          <button className="bg-[#7065f0] hover:bg-blue-700 text-white font-roboto py-2 px-4 rounded">Sign up</button>
        </div>
        </div>
    </header>
  );
};

export default Header;
