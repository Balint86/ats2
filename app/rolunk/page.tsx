"use client";

import { useLanguage } from "../components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "34px 0" }}>
      <h1>{t("aboutTitle")}</h1>
      <p style={{ color: "rgba(0,0,0,0.65)" }}>{t("aboutText")}</p>
    </section>
  );
}
