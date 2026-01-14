"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function EpitmenyFelmeresPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("epitmenyfelmeresTitle")}</h1>
        <p>{t("epitmenyfelmeresLong")}</p>
      </section>
    );
  }
  