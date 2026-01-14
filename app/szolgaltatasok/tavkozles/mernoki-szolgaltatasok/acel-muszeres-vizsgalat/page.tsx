"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function AcelMuszeresVizsgalatPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("acelszerkezetmuszeresTitle")}</h1>
        <p>{t("acelszerkezetmuszeresLong")}</p>
      </section>
    );
  }
  