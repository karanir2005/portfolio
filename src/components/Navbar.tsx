"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react"; 

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">Rushil.dev</h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
