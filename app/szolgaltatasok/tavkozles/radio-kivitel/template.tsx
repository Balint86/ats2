"use client";

import { useEffect, useState } from "react";

export default function SzolgaltatasokTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEnter(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return <div className={`pageWrap ${enter ? "pageWrapEnter" : ""}`}>{children}</div>;
}
