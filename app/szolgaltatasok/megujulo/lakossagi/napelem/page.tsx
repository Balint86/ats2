"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function NapelemPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("napelemTitle")}</h1>
        <p>{t("napelemLong")}</p>
      </section>
    );
  }
  