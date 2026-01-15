"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function SatortetosTartoPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("satortetostartoTitle")}</h1>
        <p>{t("satortetostartoLong")}</p>
      </section>
    );
  }
  