"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { useTheme } from "@/context/ThemeProvider";

export default function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Full-Stack Developer (Incoming) — RBC",
      description:
        "Incoming Full-Stack Developer co-op on the marketing technology team at RBC.",
      tech: ["React", "TypeScript", "Node.js"],
      period: "Sep 2026 — Present",
    },
    {
      title: "Software Developer — Bell",
      description:
        "Architected a full-stack Next.js/TypeScript app for managing IVR broadcast messages, cutting update turnaround to under 60s and processing 35,000 lines (8MB) in under 20 seconds via a bulk CSV pipeline. Minimized Azure Cosmos DB load with an in-memory cache and secured external APIs with SHA-256-hashed, rate-limited keys. Deployed to Azure Container Apps with auto-scaling and zero-downtime releases. Built IRIS, an LLM-powered intern onboarding tool that won 2nd place at Bell's intern hackathon.",
      tech: ["Next.js", "TypeScript", "Azure", "Cosmos DB", "Docker"],
      period: "May — Aug 2026",
    },
    {
      title: "Automation Analyst — RBC",
      description:
        "Built a Python/React tool to automate PDF report validation, reducing manual verification time by 96% and improving throughput 10x with parallel processing and caching. Developed an automated health-check system scanning 22 endpoints daily with Slack alerts, detecting 6 critical issues. Validated a regression suite via GitHub Actions CI, catching 3 critical defects before production.",
      tech: ["Python", "React", "GitHub Actions", "CI/CD", "SQL"],
      period: "Jan — Apr 2026",
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-6 transition-colors duration-500
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-stone-50 text-gray-800"}`}
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
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
