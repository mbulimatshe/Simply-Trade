import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Invest", "Trade", "Crypto", "Cash", "Tax", "Retirement"];

const AppNavigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-black">SimplyTrade</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-black transition-colors duration-200 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 pb-4 text-gray-600 text-sm font-medium space-y-3"
          >
            {navLinks.map((link) => (
              <li key={link} className="hover:text-black cursor-pointer">
                {link}
              </li>
            ))}
            <li>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
                Get Started
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AppNavigation;
