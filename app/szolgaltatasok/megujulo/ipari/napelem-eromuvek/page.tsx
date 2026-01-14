"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function NapelemEromuvekPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("napelemeromuTitle")}</h1>
        <p>{t("napelemeromuLong")}</p>
      </section>
    );
  }
  