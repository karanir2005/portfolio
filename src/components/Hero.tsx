"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Animated intro */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-indigo-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Rushil
      </motion.h1>

      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aspiring <span className="text-indigo-400">Software Engineer</span> passionate about{" "}
        <span className="text-indigo-400">AI, Cloud, and Cybersecurity</span>.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 font-semibold shadow-lg"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500/20 font-semibold"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
