import { useState, useEffect } from "react";

/**
 * Tracks whether a CSS media query currently matches.
 * Updates automatically when the viewport crosses the breakpoint.
 *
 * @param {string} query - e.g. "(min-width: 768px)"
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    // Sync immediately in case the query changed between renders.
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}