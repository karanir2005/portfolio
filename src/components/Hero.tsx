"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();

  // Highlight cyan accents
  const highlightClass =
    theme === "dark"
      ? "text-cyan-400 font-semibold"
      : "text-cyan-600 font-semibold";

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Animated intro */}
      <motion.h1
        className={`text-5xl md:text-7xl font-bold transition-colors duration-500 
        ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Rushil
      </motion.h1>

      <motion.p
        className={`mt-6 text-xl md:text-2xl max-w-2xl transition-colors duration-500 
        ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aspiring <span className={highlightClass}>Software Engineer</span>{" "}
        passionate about <span className={highlightClass}>AI</span>,{" "}
        <span className={highlightClass}>Cloud</span>, and{" "}
        <span className={highlightClass}>Cybersecurity</span>.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="#projects"
          className={`px-6 py-3 rounded-xl border font-bold transition-colors duration-500
          ${theme === "dark"
            ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/20"
            : "border-cyan-600 text-cyan-600 hover:bg-cyan-600/20"}`}
        >
          View Projects
        </a>
        <a
          href="#contact"
          className={`px-6 py-3 rounded-xl border font-bold transition-colors duration-500
          ${theme === "dark"
            ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/20"
            : "border-cyan-600 text-cyan-600 hover:bg-cyan-600/20"}`}
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
