// src/hooks/useScrollPosition.js
import { useState, useEffect, useRef } from "react";

function useScrollPosition() {
  // State to store the vertical scroll position
  const [scrollY, setScrollY] = useState(0);
  // State to store the scroll direction ('up' or 'down')
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY.current) {
        setScrollDirection("down");
      }
      if (currentScrollY < previousScrollY.current) {
        setScrollDirection("up");
      }

      previousScrollY.current = currentScrollY;

      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For now, just return the states
  return { scrollY, scrollDirection };
}

export default useScrollPosition;
