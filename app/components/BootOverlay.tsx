"use client";

import { useLayoutEffect, useState } from "react";

export default function BootOverlay() {
  const [phase, setPhase] = useState<"cover" | "fade" | "gone">("cover");

  useLayoutEffect(() => {
    // Wait 2 frames so Framer has mounted + applied initial styles
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase("fade"));
    });

    const t = window.setTimeout(() => setPhase("gone"), 520); // match CSS fade duration
    return () => window.clearTimeout(t);
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`bootOverlay ${phase === "fade" ? "bootOverlayFade" : ""}`} aria-hidden="true">
      <div className="bootSpinner" />
    </div>
  );
}
