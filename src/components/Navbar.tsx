"use client";

import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import Link from "next/link";  // ✅ import Link

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-500
      ${theme === "dark" ? "bg-gray-800/70" : "bg-gray-200/70"}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center px-6 py-4">
        
        {/* Logo (Left) */}
        <h1
          className={`text-2xl font-extrabold transition-colors duration-500 
          ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
        >
          <Link href="/" className="hover:underline">
            RK
          </Link>
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12 justify-end col-span-2">
          <ul
            className={`flex gap-12 font-medium transition-colors duration-100
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            <li>
              <Link href="/#home" className="hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-cyan-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-cyan-400 transition-colors duration-300">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-cyan-400 transition-colors duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-cyan-400 transition-colors duration-300">
                Resume
              </Link>
            </li>
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
              key={theme}
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
