"use client";

import { motion } from "framer-motion";

type AnimatedIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  rotateOnHover?: number;
  className?: string;
};

export function AnimatedIconLink({
  href,
  label,
  children,
  rotateOnHover = 10,
  className = "",
}: AnimatedIconLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.3, rotate: rotateOnHover }}
      whileTap={{ scale: 0.9 }}
      className={`text-muted hover:text-accent transition-colors ${className}`}
      aria-label={label}
    >
      {children}
    </motion.a>
  );
}
