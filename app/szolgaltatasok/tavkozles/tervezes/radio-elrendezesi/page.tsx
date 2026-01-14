"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function RadioElrendezesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("radioelrendezesTitle")}</h1>
        <p>{t("radioelrendezesLong")}</p>
      </section>
    );
  }
  