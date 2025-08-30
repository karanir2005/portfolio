"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Linkedin, Github, FileText } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const email = "rushil.karani@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttonClasses =
    "flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md transition transform hover:scale-105 active:scale-95";

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-colors duration-500
        ${theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-white text-gray-800"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-6 text-cyan-500"
      >
        Let&apos;s Get in Touch!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-center max-w-3xl mb-10"
      >
        Whether you want to collaborate, discuss opportunities, or just say hi, I&apos;d love to hear from you!
      </motion.p>

      <div className="flex gap-6 flex-wrap justify-center">
        {/* Copy Email */}
        <button
          onClick={handleCopy}
          className={`${buttonClasses} min-w-[255px] bg-cyan-500 text-white hover:bg-cyan-600`}
        >
          <Copy size={20} />
          {copied ? "Copied!" : email}
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rushil-karani/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClasses} bg-blue-600 text-white hover:bg-blue-700`}
        >
          <Linkedin size={20} />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/karanir2005/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClasses} bg-gray-800 text-white hover:bg-gray-900`}
        >
          <Github size={20} />
          GitHub
        </a>

        {/* Resume */}
        <a
          href="/resume"
          className={`${buttonClasses} bg-green-600 text-white hover:bg-green-700`}
        >
          <FileText size={20} />
          Resume
        </a>

      </div>
    </section>
  );
}
