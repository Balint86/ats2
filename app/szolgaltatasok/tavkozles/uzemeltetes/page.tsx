"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function UzemeltetesPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("uzemeltetesTitle")}</h1>
        <p>{t("uzemeltetesLong")}</p>
      </section>
    );
  }
  