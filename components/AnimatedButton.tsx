"use client";

import { motion } from "framer-motion";

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg overflow-hidden ${
        isPrimary
          ? "bg-accent text-bg"
          : "border border-border text-text"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span
        className={`absolute inset-0 ${
          isPrimary ? "bg-text" : "bg-accent"
        } translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`}
      />
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
          isPrimary ? "group-hover:text-bg" : "group-hover:text-bg"
        }`}
      >
        {children}
      </span>
    </motion.a>
  );
}
