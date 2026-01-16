"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Respect reduced motion: show immediately
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el || shown) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "160px 0px 0px 0px" } // start earlier = smoother
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "show" : ""} ${className}`.trim()}
      // CRITICAL: prevents any “flash” before CSS/JS settle
      style={
        shown
          ? { visibility: "visible" }
          : { visibility: "hidden", opacity: 0, transform: "translateY(22px) scale(0.985)" }
      }
    >
      {children}
    </div>
  );
}
