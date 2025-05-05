import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const AppNavigation = () => {
  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-4 bg-[#001F3F] shadow-sm"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Logo or Title */}
      <img src={logo} className="w-24 md:w-32 h-auto" alt="SimplyTrade Logo" />

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-white text-sm font-medium">
        {[
          { name: "Invest", path: "/invest" },
          { name: "Trade", path: "/trade" },
        ].map(({ name, path }) => (
          <motion.li key={name} whileHover={{ scale: 1.1 }}>
            <Link to={path} className="hover:text-sky-400 transition">
              {name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button (optional) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="hidden md:block bg-sky-500 text-white px-4 py-2 rounded-full text-sm hover:bg-sky-600"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
};

export default AppNavigation;
