"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

let hasCountedThisLoad = false; // resets only on hard refresh / full reload

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const METRICS = [
  { key: "szamlalo1", value: 128, suffix: "+" },
  { key: "szamlalo2", value: 24, suffix: "+" },
  { key: "szamlalo3", value: 12, suffix: "+" },
  { key: "szamlalo4", value: 340, suffix: "+" },
  { key: "szamlalo5", value: 99.9, suffix: "%" },
] as const;

export default function Counters() {
  const { t } = useLanguage();

  // IMPORTANT: stable array (does not change on each render)
  const values = useMemo(() => METRICS.map((m) => m.value), []);

  const [numbers, setNumbers] = useState<number[]>(
    () => (hasCountedThisLoad ? values : values.map(() => 0))
  );

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Run only once per hard refresh
    if (hasCountedThisLoad) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const start = () => {
      const duration = 3000;
      const startTime = performance.now();
      const from = values.map(() => 0);

      const tick = (now: number) => {
        const p = Math.min(1, (now - startTime) / duration);
        const e = easeOutCubic(p);

        const next = values.map((target, idx) => {
          const hasDecimal = String(target).includes(".");
          const v = from[idx] + (target - from[idx]) * e;
          return hasDecimal ? Math.round(v * 10) / 10 : Math.round(v);
        });

        setNumbers(next);

        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setNumbers(values);
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
  }, [values]);

  return (
    <section className="countersSection" aria-label="Key metrics">
      <div className="countersInner" ref={ref}>
        <div className="countersGrid">
          {METRICS.map((m, idx) => (
            <div className="counterCard" key={m.key}>
              <div className="counterValue">
                {numbers[idx]}
                {m.suffix}
              </div>
              <div className="counterLabel">{t(m.key as any)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
