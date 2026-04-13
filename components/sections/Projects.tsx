"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { fadeUpVariants } from "@/lib/motion-variants";

function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.08 : 1,
        rotateX: isHovered ? -5 : 0,
        rotateY: isHovered ? 5 : 0,
        z: isHovered ? 50 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-80 flex-shrink-0 p-6 bg-surface border border-border rounded-xl overflow-hidden cursor-pointer"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, #f97316 0%, transparent 50%, #f97316 100%)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />

      {isHovered && (
        <>
          <motion.div
            className="absolute w-2 h-2 bg-accent rounded-full"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], x: 30, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-accent rounded-full right-10"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], x: -20, y: -50 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-1 h-1 bg-accent rounded-full left-1/2"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], x: 10, y: -35 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          />
        </>
      )}

      <div className="relative z-10">
        <motion.h3
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xl font-semibold text-text mb-2"
        >
          {title}
        </motion.h3>
        <p className="text-muted text-sm line-clamp-2 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              animate={{
                y: isHovered ? -2 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 400 }}
              className="px-2 py-1 text-xs font-mono bg-bg border border-border rounded text-muted group-hover:border-accent/50 group-hover:text-text transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-border group-hover:border-accent/30 transition-colors">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-muted hover:text-accent transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="text-muted hover:text-accent transition-colors"
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "FlutterFlow Dashboard",
      description:
        "A comprehensive admin dashboard built with Flutter for web and mobile platforms.",
      tags: ["Flutter", "Dart", "Firebase"],
      githubUrl: "https://github.com/yakupkahraman",
      liveUrl: "https://yakupkahraman.com",
    },
    {
      title: "E-Commerce App",
      description:
        "Cross-platform shopping app with real-time inventory and payment integration.",
      tags: ["Flutter", "Stripe", "Node.js"],
      githubUrl: "https://github.com/yakupkahraman",
      liveUrl: "https://yakupkahraman.com",
    },
    {
      title: "Task Manager",
      description:
        "Productivity app with offline-first architecture and cloud sync capabilities.",
      tags: ["Flutter", "SQLite", "REST API"],
      githubUrl: "https://github.com/yakupkahraman",
      liveUrl: "https://yakupkahraman.com",
    },
    {
      title: "Portfolio Website",
      description:
        "This site: Next.js App Router, Tailwind v4, Motion, and Lenis smooth scroll.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/yakupkahraman",
      liveUrl: "https://yakupkahraman.com",
    },
  ];

  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
            Selected Work
          </h2>
        </motion.div>
      </div>

      <div className="relative group/marquee">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 py-4"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
