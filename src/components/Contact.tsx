"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rushil.karani@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
      >
        Let&apos;s Get in Touch!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-10"
      >
        Whether you want to collaborate, discuss opportunities, or just say hi, feel free to reach out!
      </motion.p>

      <div className="flex gap-6 flex-wrap justify-center">
        {/* Copy Email */}
        <button
          onClick={handleCopy}
          className=" min-w-[255px] flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md
          bg-cyan-500 text-white hover:bg-cyan-600 transition"
        >
          <Copy size={20} />
          {copied ? "Copied!" : "rushil.karani@gmail.com"}
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rushil-karani/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md
          bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/karanir2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md
          bg-gray-800 text-white hover:bg-gray-900 transition"
        >
          <Github size={20} />
          GitHub
        </a>

        {/* Resume */}
        <a
          href="/Rushil_Karani_Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md
          bg-green-600 text-white hover:bg-green-700 transition"
        >
          <FileDown size={20} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
