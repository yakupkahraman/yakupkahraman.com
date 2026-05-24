"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { fadeUpVariants, staggerContainer } from "@/lib/motion-variants";

function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const dotsRef = useRef<
    { x: number; y: number; currentX: number; currentY: number }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 40;
    const maxDistance = 120;
    const attractionStrength = 0.25;
    const returnSpeed = 0.08;

    const initDots = () => {
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      dotsRef.current = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + spacing / 2;
          const y = row * spacing + spacing / 2;
          dotsRef.current.push({ x, y, currentX: x, currentY: y });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      for (const dot of dotsRef.current) {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.x;
        let targetY = dot.y;

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * attractionStrength;
          targetX = dot.x + dx * strength;
          targetY = dot.y + dy * strength;
        }

        dot.currentX += (targetX - dot.currentX) * returnSpeed;
        dot.currentY += (targetY - dot.currentY) * returnSpeed;

        const distFromBase = Math.sqrt(
          Math.pow(dot.currentX - dot.x, 2) + Math.pow(dot.currentY - dot.y, 2)
        );
        const intensity = Math.min(1, distFromBase / 15);
        const radius = 1 + intensity * 1.5;
        const opacity = 0.25 + intensity * 0.5;

        ctx.beginPath();
        ctx.arc(dot.currentX, dot.currentY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107, 107, 107, ${opacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <InteractiveDotGrid />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,8vw,8rem)] font-bold leading-none tracking-tighter text-text"
        >
          Yakup Kahraman
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-xl md:text-2xl text-muted font-medium"
        >
          Flutter Mobile Developer · C · Web · Python
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted max-w-xl mx-auto"
        >
          Cross-platform mobile apps, solid systems thinking, and interfaces
          that feel as good as they look.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButton href="#projects" variant="primary">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </AnimatedButton>
          <AnimatedButton
            href="https://github.com/yakupkahraman"
            variant="secondary"
            external
          >
            GitHub
            <Github className="w-4 h-4" />
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
