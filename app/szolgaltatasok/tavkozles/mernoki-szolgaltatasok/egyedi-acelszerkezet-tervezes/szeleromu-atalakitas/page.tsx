"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function SzeleromuAtalakitasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("szeleromuTitle")}</h1>
        <p>{t("szeleromuLong")}</p>
      </section>
    );
  }
  