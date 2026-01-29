'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,        // Scroll duration (1.2 = smooth but not too slow)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      orientation: 'vertical', // Vertical scrolling only
      gestureOrientation: 'vertical', // Touch gesture direction
      smoothWheel: true,    // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1,   // Mouse wheel sensitivity
      touchMultiplier: 2,   // Touch sensitivity
      infinite: false,      // No infinite scroll
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element, {
            offset: 0,
            duration: 1.5,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
