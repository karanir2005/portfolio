"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2 };
    const particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];

    // Create particles
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const distX = p.x - mouse.x;
        const distY = p.y - mouse.y;
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < 120) {
          p.x += (distX / dist) * 0.8;
          p.y += (distY / dist) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = theme === "dark"
          ? "rgba(34,211,238,0.3)"
          : "rgba(8,145,178,0.25)";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);


  // Highlight cyan accents
  const highlightClass =
    theme === "dark"
      ? "text-cyan-400 font-semibold"
      : "text-cyan-600 font-semibold";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Foreground Content */}
      <div className="relative z-10">
        <motion.h1
          className={`text-5xl md:text-7xl font-bold transition-colors duration-500 
          ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m Rushil
        </motion.h1>

        <motion.p
          className={`mt-6 text-xl md:text-2xl max-w-2xl transition-colors duration-500 
          ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Aspiring <span className={highlightClass}>Software Engineer</span>{" "}
          passionate about <span className={highlightClass}>AI</span>,{" "}
          <span className={highlightClass}>Cloud</span>, and{" "}
          <span className={highlightClass}>Cybersecurity</span>.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className={`px-6 py-3 rounded-xl border font-bold transition-colors duration-500
            ${theme === "dark"
              ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/20"
              : "border-cyan-600 text-cyan-600 hover:bg-cyan-600/20"}`}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`px-6 py-3 rounded-xl border font-bold transition-colors duration-500
            ${theme === "dark"
              ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/20"
              : "border-cyan-600 text-cyan-600 hover:bg-cyan-600/20"}`}
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
