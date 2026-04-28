"use client";

import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "@/context/ThemeProvider";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <main
      className={`py-20 px-6 min-h-screen transition-colors duration-500
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <h1 className="text-4xl font-bold text-center text-cyan-600 dark:text-cyan-400">
        All Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {allProjects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </main>
  );
}
