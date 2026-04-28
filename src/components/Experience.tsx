"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { useTheme } from "@/context/ThemeProvider";

export default function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Software Developer — Bell",
      description:
        " Summer 2026 Software Developer co-op on the Enterprise Architecture team.",
      tech: ["React", "Node.js", "Java", "Docker"],
      period: "May — Aug 2026",
    },
    {
      title: "Automation Analyst — RBC",
      description:
        "Built a Python automation system to validate PDF reports, reducing manual effort by 96%. Automated API health checks using Playwright. Performed regression testing and maintained CI/CD pipelines.",
      tech: ["Python", "Playwright", "Selenium", "CI/CD", "SQL"],
      period: "Jan — Apr 2026",
    },
  ];

  return (
    <section
      id="experience"
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
        Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
        {experiences.map((e, i) => (
          <ExperienceCard
            key={i}
            title={e.title}
            description={e.description}
            tech={e.tech}
            period={e.period}
          />
        ))}
      </div>
    </section>
  );
}
