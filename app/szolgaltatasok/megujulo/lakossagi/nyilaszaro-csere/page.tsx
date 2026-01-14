"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function NyilaszaroCserePage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("nyilaszaroTitle")}</h1>
        <p>{t("nyilaszaroLong")}</p>
      </section>
    );
  }
  