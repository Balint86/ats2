"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealStagger({
  children,
  stepMs = 120,
  className = "",
}: {
  children: React.ReactNode;
  stepMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // apply stagger delays once
    const kids = Array.from(el.children) as HTMLElement[];
    kids.forEach((k, i) => k.style.setProperty("--d", `${i * stepMs}ms`));
  }, [stepMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <div ref={ref} className={`revealStagger ${shown ? "show" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
