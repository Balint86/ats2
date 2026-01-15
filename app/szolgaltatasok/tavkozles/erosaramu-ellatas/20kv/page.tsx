"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function HuszkVPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("huszkvTitle")}</h1>
        <p>{t("huszkvLong")}</p>
      </section>
    );
  }
  