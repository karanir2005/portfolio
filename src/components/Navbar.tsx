"use client";

import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-500
      ${theme === "dark" ? "bg-gray-800/70" : "bg-gray-200/70"}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center px-6 py-4">
        
        {/* Logo (Left) */}
        {/* Logo (Left) */}
        <h1
          className={`text-2xl font-semibold transition-colors duration-500 
          ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
        >
          <a href="#" className="hover:underline">
            Rushil | Portfolio
          </a>
        </h1>

        <div className="hidden md:flex items-center gap-12 justify-end col-span-2">
          <ul
            className={`flex gap-12 font-medium transition-colors duration-100
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-500 
              ${theme === "dark" 
                ? "bg-gray-700 hover:bg-gray-600 text-gray-100" 
                : "bg-gray-300 hover:bg-gray-400 text-gray-900"}`}
            >
              <motion.div
                key={theme} // this ensures it re-animates when theme changes
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </button>
        </div>
      </div>
    </nav>
  );
}
