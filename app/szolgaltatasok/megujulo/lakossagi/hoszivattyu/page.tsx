"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function HoszivattyuPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("hoszivattyuTitle")}</h1>
        <p>{t("hoszivattyuLong")}</p>
      </section>
    );
  }
  