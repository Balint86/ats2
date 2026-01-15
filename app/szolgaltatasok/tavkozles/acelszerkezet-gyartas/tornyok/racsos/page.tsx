"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function RacsosToronyPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("racsostoronyTitle")}</h1>
        <p>{t("racsostoronyLong")}</p>
      </section>
    );
  }
  