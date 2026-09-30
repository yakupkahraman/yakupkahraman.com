"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react/ssr";
import { getTheme, setTheme } from "@/lib/theme";

const REVEAL_DURATION_MS = 650;

/**
 * Switches theme with a circle that grows out of the button until it covers the page.
 * Falls back to an instant switch without View Transitions or with reduced motion.
 */
function switchTheme(origin: HTMLElement) {
  const next = getTheme() === "dark" ? "light" : "dark";
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!document.startViewTransition || reducedMotion) {
    setTheme(next);
    return;
  }

  const rect = origin.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => setTheme(next));
  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: REVEAL_DURATION_MS,
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
}

export function ThemeToggle() {
  // Both icons are always rendered; CSS swaps them with a rotate-and-scale
  // transition keyed off the theme tokens, so server and client markup match.
  return (
    <button
      type="button"
      onClick={(event) => switchTheme(event.currentTarget)}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="theme-toggle relative rounded-md p-2 text-muted transition-colors hover:text-text"
    >
      <SunIcon size={20} weight="light" className="theme-toggle-sun" />
      <MoonIcon
        size={20}
        weight="light"
        className="theme-toggle-moon absolute inset-2"
      />
    </button>
  );
}
