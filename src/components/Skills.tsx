"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  //SiJava,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiSnowflake,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiLinux,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const categories = {
    Languages: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "SQL", icon: <SiMysql className="text-teal-500" /> },
    ],
    Frameworks: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "Pandas", icon: <SiPandas className="text-violet-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
    ],
    Tools: [
      { name: "Git", icon: <SiGit className="text-red-600" /> },
      { name: "Linux", icon: <SiLinux className="text-black dark:text-gray-200" /> },
      { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Snowflake", icon: <SiSnowflake className="text-cyan-500" /> },
    ],
  };
  
  export default function TechStack() {
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Tech Stack
          </h2>
  
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10">
            {Object.entries(categories).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }