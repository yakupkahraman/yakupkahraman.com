"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";

const SCROLL_OFFSET = -88;
const SCROLL_DURATION = 1.35;

export function useSmoothScrollAnchor() {
  const lenis = useLenis();

  return useCallback(
    (event: React.MouseEvent<HTMLElement>, href: string) => {
      if (!href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();

      if (lenis) {
        lenis.scrollTo(target, {
          offset: SCROLL_OFFSET,
          duration: SCROLL_DURATION,
        });
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [lenis]
  );
}
