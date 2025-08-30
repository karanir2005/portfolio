"use client";

import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "@/context/ThemeProvider";

export default function ProjectsPage() {
  const { theme } = useTheme();

  const allProjects = [
    {
      title: "HealthConnect",
      description:
        "A healthcare app designed to reduce clinic wait times by 20%. Features a chatbot powered by Cohere API with context-aware responses.",
      tech: ["React", "Node.js", "Cohere API", "MongoDB"],
      link: "https://devpost.com/software/health-connect-0z8v4s?ref_content=my-projects-tab&ref_feature=my_projects",
    },
    {
      title: "EquiHire",
      description:
        "AI resume screening tool, designed to reduce bias during hiring by 30%. Uses Cloud Vision API to match candidates to job descriptions.",
      tech: ["Pyhton", "JavaScript", "React", "SQL", "Java"],
      link: "https://devpost.com/software/equihire-m486b7",
    },
    {
      title: "MatrixMate",
      description:
        "Terminal app built using C, to performing 6+ complex matrix operations. Highly memory efficient compared to other apps, making it useful for large data sets.",
      tech: ["C", "Bash", "Git", "Terminal"],
      link: "https://github.com/Sam-Scott-McMaster/the-team-assignment-team-33-press-alt-f4",
    },
    {
      title: "ScholarSync",
      description:
        "Organizer app to help students log notes, set reminders, track tasks, and calculate GPA, boosting productivity by 30%.",
      tech: ["Java", "Vaadin"],
      link: "",
    },
    {
      title: "Coming Up - FinTech Dashboard",
      description:
        "A full-stack dashboard for visualizing financial transactions and analytics.",
      tech: ["Next.js", "MongoDB", "Express", "Chart.js"],
      link: "",
    },
    {
      title: "Coming Up - Cloud Automation Tool",
      description:
        "CLI tool to automate cloud resource provisioning across AWS & GCP.",
      tech: ["Python", "Bash", "Docker", "GCP/AWS SDK"],
      link: "",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js, Tailwind, and Framer Motion.",
      tech: ["Next.js", "React", "Tailwind"],
      link: "https://github.com/karanir2005/portfolio",
    },
    // add more...
  ];

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
