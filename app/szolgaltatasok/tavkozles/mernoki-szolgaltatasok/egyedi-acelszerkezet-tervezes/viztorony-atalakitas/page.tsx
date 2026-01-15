"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function ViztoronyAtalakitasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("viztoronyTitle")}</h1>
        <p>{t("viztoronyLong")}</p>
      </section>
    );
  }
  