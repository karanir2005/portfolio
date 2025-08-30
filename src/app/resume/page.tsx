"use client";
import { useTheme } from "@/context/ThemeProvider";
import Link from "next/link";
import { FileDown } from "lucide-react";

export default function ResumePage() {
  const { theme } = useTheme();
  const buttonClasses =
    "flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md transition transform hover:scale-105 active:scale-95";

  return (
    <main
      className={`min-h-screen pt-24 px-6 pb-12 transition-colors duration-500 
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>
          My Resume
        </h1>

        {/* Download Button */}
        <a
          href="/Rushil_Karani_Resume.pdf"
          download
          className={`${buttonClasses} bg-green-600 text-white hover:bg-green-700`}
        >
          <FileDown size={20} />
          Download Resume
        </a>

        {/* Embedded PDF */}
        <div className="w-full h-[80vh] mt-6 border rounded-lg overflow-hidden">
          <iframe
            src="/Rushil_Karani_Resume.pdf"
            title="Resume"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </main>
  );
}
