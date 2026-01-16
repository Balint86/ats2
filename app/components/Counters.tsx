"use client";

import { useEffect, useMemo, useRef, useState } from "react";

let hasCountedThisLoad = false; // resets only on hard refresh / full reload

type CounterItem = {
  label: string;
  value: number;
  suffix?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counters() {
  const items: CounterItem[] = useMemo(
    () => [
      { label: "Projects", value: 128, suffix: "+" },
      { label: "Partners", value: 24, suffix: "+" },
      { label: "Years of experience", value: 12, suffix: "+" },
      { label: "Deployments", value: 340, suffix: "+" },
      { label: "Uptime", value: 99.9, suffix: "%" },
    ],
    []
  );

  const [numbers, setNumbers] = useState<number[]>(
    () => (hasCountedThisLoad ? items.map((i) => i.value) : items.map(() => 0))
  );

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If already counted in this load, do nothing
    if (hasCountedThisLoad) return;

    // Respect reduced motion
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      setNumbers(items.map((i) => i.value));
      hasCountedThisLoad = true;
      return;
    }

    const el = ref.current;
    if (!el) return;

    let started = false;
    let raf = 0;

    const start = () => {
      if (started) return;
      started = true;

      const duration = 3000;
      const startTime = performance.now();
      const from = items.map(() => 0);
      const to = items.map((i) => i.value);

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const e = easeOutCubic(t);

        const next = to.map((target, idx) => {
          // keep decimals if target has decimals (e.g., 99.9)
          const hasDecimal = String(target).includes(".");
          const v = from[idx] + (target - from[idx]) * e;
          return hasDecimal ? Math.round(v * 10) / 10 : Math.round(v);
        });

        setNumbers(next);

        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setNumbers(to);
          hasCountedThisLoad = true;
        }
      };

      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <section className="countersSection" aria-label="Key metrics">
      <div className="countersInner" ref={ref}>
        <div className="countersGrid">
          {items.map((item, idx) => (
            <div className="counterCard" key={item.label}>
              <div className="counterValue">
                {numbers[idx]}
                {item.suffix ?? ""}
              </div>
              <div className="counterLabel">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
