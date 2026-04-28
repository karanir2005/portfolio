"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiLinux,
  SiSpringboot,
  SiGooglecloud,
  SiSwagger,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useTheme } from "@/context/ThemeProvider";

const categories = {
  Languages: [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <SiPython className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "SQL", icon: <SiMysql className="text-teal-500" /> },  
  ],
  Frameworks: [
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-500" /> },
  ],
  "Tools & Platforms": [
    { name: "Git/GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Linux/Bash", icon: <SiLinux className="text-black dark:text-cyan-500" /> },
    { name: "Google Cloud Vision", icon: <SiGooglecloud className="text-blue-500" /> },
    { name: "REST APIs", icon: <SiSwagger className="text-green-500" /> },
  ],
};

export default function TechStack() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`w-full py-20 px-6 md:px-12 lg:px-20 transition-colors duration-500 
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center text-cyan-500">
          Tech Stack
        </h2>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(categories).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-2xl shadow-lg transition-colors duration-500 
                ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
            >
              <h3
                className={`text-xl font-semibold mb-6 
                  ${theme === "dark" ? "text-cyan-500" : "text-cyan-500"}`}
              >
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
                    <p
                      className={`text-sm text-center 
                        ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
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
