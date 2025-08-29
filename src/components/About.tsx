"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`w-full py-20 px-6 md:px-12 lg:px-20 transition-colors duration-500 
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <Image
            src="/profile.jpg" // place your photo in public/profile.jpg
            alt="Rushil"
            width={180}
            height={180}
            className="rounded-2xl shadow-lg border-4 border-cyan-400 object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold mb-4 text-cyan-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I&apos;m Rushil 👋 an aspiring <span className="font-semibold text-cyan-400">Software Engineer </span> 
            with a strong interest in <span className="font-semibold">AI/ML</span>, 
            <span className="font-semibold"> Cybersecurity</span>, and 
            <span className="font-semibold"> Cloud Technologies</span>.  
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I&apos;m currently pursuing my degree in Software Engineering @ McMaster University, and aiming to secure a software engineering internship for Winter 2026. 
            My long-term goal is to grow into a role at a <span className="font-semibold">MAANG+</span> company, where I can build innovative and secure technologies at scale.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of tech, I enjoy exploring new hobbies, running maratho learning about finance & investing, and sharing ideas that push me to grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
