"use client";

import { useEffect, useRef } from "react";
import { sampleLogo, type Point } from "@/lib/sample-logo";

const POINTER_RADIUS = 36;
const POINTER_FORCE = 0.5;
const SPRING = 0.06;
const DAMPING = 0.82;
const INTRO_OFFSET = 8; // max px a particle starts away from home on load
const SCATTER_THRESHOLD = 3; // px from home before a particle takes the accent color

type Particle = {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function LogoParticles({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let logo: ReturnType<typeof sampleLogo> = null;
    let particles: Particle[] = [];
    let dotSize = 1.5;
    let pointer: Point | null = null;
    let raf = 0;
    let running = false;
    let visible = true;
    let colors = { text: "#000", accent: "#00f" };
    let disposed = false;

    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      colors = {
        text: style.getPropertyValue("--text").trim() || "#000",
        accent: style.getPropertyValue("--accent").trim() || "#00f",
      };
    };

    const layout = (scatter: boolean) => {
      if (!logo) return;
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fit the logo's bounding box, left-aligned to match the text column.
      let drawW = Math.min(width, 420);
      let drawH = drawW / logo.aspect;
      if (drawH > height) {
        drawH = height;
        drawW = drawH * logo.aspect;
      }
      const offsetY = (height - drawH) / 2;
      dotSize = Math.max(1, (drawW / logo.sampleSize) * 1.1);

      const previous = particles;
      particles = logo.points.map((p, i) => {
        const homeX = p.x * drawW;
        const homeY = offsetY + p.y * drawH;
        const old = previous[i];
        if (old) return { ...old, homeX, homeY };
        return {
          homeX,
          homeY,
          x: scatter ? homeX + (Math.random() - 0.5) * 2 * INTRO_OFFSET : homeX,
          y: scatter ? homeY + (Math.random() - 0.5) * 2 * INTRO_OFFSET : homeY,
          vx: 0,
          vy: 0,
        };
      });
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = colors.text;
      ctx.beginPath();
      for (const p of particles) {
        if (Math.abs(p.x - p.homeX) + Math.abs(p.y - p.homeY) > SCATTER_THRESHOLD) continue;
        ctx.rect(p.x, p.y, dotSize, dotSize);
      }
      ctx.fill();

      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      for (const p of particles) {
        if (Math.abs(p.x - p.homeX) + Math.abs(p.y - p.homeY) <= SCATTER_THRESHOLD) continue;
        ctx.rect(p.x, p.y, dotSize, dotSize);
      }
      ctx.fill();
    };

    const step = () => {
      let energy = 0;
      for (const p of particles) {
        if (pointer) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < POINTER_RADIUS * POINTER_RADIUS) {
            const dist = Math.sqrt(distSq) || 1;
            const force = (1 - dist / POINTER_RADIUS) * POINTER_FORCE;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }
        p.vx = (p.vx + (p.homeX - p.x) * SPRING) * DAMPING;
        p.vy = (p.vy + (p.homeY - p.y) * SPRING) * DAMPING;
        p.x += p.vx;
        p.y += p.vy;
        energy += Math.abs(p.vx) + Math.abs(p.vy) + Math.abs(p.homeX - p.x) + Math.abs(p.homeY - p.y);
      }
      return energy / Math.max(particles.length, 1);
    };

    // The loop stops itself once everything is settled and restarts on interaction.
    const tick = () => {
      const energy = step();
      draw();
      if (energy < 0.02 && !pointer) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || !visible || reducedMotion) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside =
        x > -POINTER_RADIUS &&
        y > -POINTER_RADIUS &&
        x < rect.width + POINTER_RADIUS &&
        y < rect.height + POINTER_RADIUS;
      pointer = inside ? { x, y } : null;
      if (inside) start();
    };

    const handlePointerLeave = () => {
      pointer = null;
    };

    const handleThemeChange = () => {
      readColors();
      if (!running) draw();
    };

    const handleResize = () => {
      layout(false);
      if (!running) draw();
    };

    const image = new Image();
    image.src = src;
    image.onload = () => {
      if (disposed) return;
      logo = sampleLogo(image);
      readColors();
      layout(!reducedMotion);
      draw();
      start();
    };

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    schemeQuery.addEventListener("change", handleThemeChange);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    visibilityObserver.observe(canvas);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      schemeQuery.removeEventListener("change", handleThemeChange);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className={className}
    />
  );
}
