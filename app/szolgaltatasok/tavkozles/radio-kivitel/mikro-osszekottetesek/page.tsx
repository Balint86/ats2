"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function MikroOsszekottetesekPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("mikroTitle")}</h1>
        <p>{t("mikroLong")}</p>
      </section>
    );
  }
  