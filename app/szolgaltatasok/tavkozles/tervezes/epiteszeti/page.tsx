"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function EpiteszetiPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("epiteszetiTitle")}</h1>
        <p>{t("epiteszetiLong")}</p>
      </section>
    );
  }
  