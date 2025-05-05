import React from "react";

const AppNavigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="text-2xl font-bold text-black">SimplyTrade</div>
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
        <li className="hover:text-black cursor-pointer">Invest</li>
        <li className="hover:text-black cursor-pointer">Trade</li>
        <li className="hover:text-black cursor-pointer">Crypto</li>
        <li className="hover:text-black cursor-pointer">Cash</li>
        <li className="hover:text-black cursor-pointer">Tax</li>
        <li className="hover:text-black cursor-pointer">Retirement</li>
      </ul>
      <div className="hidden md:block">
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default AppNavigation;
