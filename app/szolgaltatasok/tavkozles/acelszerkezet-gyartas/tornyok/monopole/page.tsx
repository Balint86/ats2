"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function MonopoleToronyPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("monopoletoronyTitle")}</h1>
        <p>{t("monopoletoronyLong")}</p>
      </section>
    );
  }
  