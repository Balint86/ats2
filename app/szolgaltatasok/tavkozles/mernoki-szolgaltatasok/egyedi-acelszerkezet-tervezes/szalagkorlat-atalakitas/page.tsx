"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function SzalagkorlatAtalakitasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("szalagkorlatTitle")}</h1>
        <p>{t("szalagkorlatLong")}</p>
      </section>
    );
  }
  