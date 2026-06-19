import { useMediaQuery } from "../hooks/useMediaQuery";

/**
 * Breakpoints match Tailwind's defaults so JS and CSS agree:
 *   mobile  : < 768px
 *   tablet  : 768px – 1023px
 *   desktop : >= 1024px
 */
export const BREAKPOINTS = { md: 768, lg: 1024 };

/**
 * Returns the current device class as booleans.
 * Use this when you need responsive *behaviour* (not just layout).
 * For plain layout changes, prefer Tailwind's md: / lg: utilities.
 */
export function useBreakpoint() {
  const isTabletUp = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);

  return {
    isMobile: !isTabletUp,
    isTablet: isTabletUp && !isDesktop,
    isDesktop,
    isTabletUp, // tablet or desktop
    isTabletAndBelow: !isDesktop, // mobile or tablet
  };
}

/** Renders children only on mobile (< 768px). */
export function Mobile({ children }) {
  return useBreakpoint().isMobile ? children : null;
}

/** Renders children only on tablet (768px – 1023px). */
export function Tablet({ children }) {
  return useBreakpoint().isTablet ? children : null;
}

/** Renders children only on desktop (>= 1024px). */
export function Desktop({ children }) {
  return useBreakpoint().isDesktop ? children : null;
}

/** Renders children on mobile and tablet (< 1024px) — the touch devices. */
export function TabletAndBelow({ children }) {
  return useBreakpoint().isTabletAndBelow ? children : null;
}