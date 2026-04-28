"use client";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { allProjects } from "@/data/projects";

export default function Projects() {
  const { theme } = useTheme();

  const highlightProjects = allProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`py-20 px-6 transition-colors duration-500
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-3xl font-bold text-center mb-10 
          ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {highlightProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/projects"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
}
