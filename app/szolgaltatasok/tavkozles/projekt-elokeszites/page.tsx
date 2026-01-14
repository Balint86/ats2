"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function ProjektElokeszitesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("projektTitle")}</h1>
        <p>{t("projektLong")}</p>
      </section>
    );
  }
  