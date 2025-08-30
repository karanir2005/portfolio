"use client";
import { useTheme } from "@/context/ThemeProvider";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`shadow-md rounded-2xl p-6 flex flex-col justify-between transition-colors duration-500 
        ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <div>
        <h3
          className={`text-xl font-semibold transition-colors duration-500
            ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 transition-colors duration-500
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 rounded-md text-sm transition-colors duration-500
                ${theme === "dark"
                  ? "bg-cyan-900 text-cyan-300"
                  : "bg-cyan-100 text-cyan-700"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          className={`mt-4 text-sm font-medium hover:underline transition-colors duration-500
            ${theme === "dark" ? "text-cyan-400" : "text-cyan-500"}`}
        >
          View Project →
        </a>
      )}
    </div>
  );
}
