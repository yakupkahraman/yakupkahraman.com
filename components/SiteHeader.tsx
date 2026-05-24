"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSmoothScrollAnchor } from "@/hooks/use-smooth-scroll";

const NAV_SECTIONS = ["about", "projects", "contact"] as const;

export function SiteHeader() {
  return (
    <>
      <Logo />
      <Navigation />
    </>
  );
}

function Logo() {
  const scrollToAnchor = useSmoothScrollAnchor();

  return (
    <motion.a
      href="#hero"
      onClick={(event) => scrollToAnchor(event, "#hero")}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 left-8 z-50 text-2xl font-bold text-accent font-mono tracking-tighter"
    >
      YK
    </motion.a>
  );
}

function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollToAnchor = useSmoothScrollAnchor();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    NAV_SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about", section: "about" },
    { label: "WORK", href: "#projects", section: "projects" },
    { label: "CONTACT", href: "#contact", section: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 right-8 z-50 flex flex-col items-end gap-1"
    >
      {navLinks.map((link) => {
        const isActive = activeSection === link.section;
        return (
          <a
            key={link.label}
            href={link.href}
            onClick={(event) => scrollToAnchor(event, link.href)}
            className={`group relative text-xs font-medium tracking-widest pr-4 transition-colors duration-300 ${
              isActive ? "text-text" : "text-muted"
            }`}
          >
            {link.label}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-accent transition-all duration-300 w-0 group-hover:w-3" />
          </a>
        );
      })}
    </motion.nav>
  );
}
