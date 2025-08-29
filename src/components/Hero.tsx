"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import HeroBackground from "./HeroBackground";
import { useState, useEffect } from "react";

export default function Hero() {
  const { theme } = useTheme();

  // Slightly brighter cyan for contrast
  const highlightClass =
    theme === "dark"
      ? "text-cyan-300 font-semibold"
      : "text-cyan-500 font-semibold";

  const phrases = ["Artificial Intelligence", "Cybersecurity", "Cloud Computing"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);


  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className={`text-5xl md:text-6xl font-bold transition-colors duration-500 
          ${theme === "dark" ? "text-cyan-300" : "text-cyan-500"}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m Rushil

        </motion.h1>

        <motion.p
          className={`mt-4 text-2xl md:text-3xl max-w-2xl text-center transition-colors duration-500 
          ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Aspiring <span className={highlightClass}>Software Engineer</span>
        </motion.p>

        <motion.p
          className={`mt-3 text-xl md:text-2xl max-w-2xl text-center transition-colors duration-500 
          ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          Passionate about{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              className={highlightClass}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {phrases[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className={`px-6 py-3 rounded-xl border font-semibold transition-colors duration-500
            ${theme === "dark"
              ? "text-white hover:bg-cyan-300/70"
              : "border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"}`}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`px-6 py-3 rounded-xl border font-semibold transition-colors duration-500
            ${theme === "dark"
              ? "text-white hover:bg-cyan-300/70"
              : "border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"}`}
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      {/* Background credit text */}
      <p className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-70">
        Background inspired by Neural Networks
      </p>
    </section>
  );
}
