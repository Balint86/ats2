"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function NullaNegykVPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("nullanegykvTitle")}</h1>
        <p>{t("nullanegykvLong")}</p>
      </section>
    );
  }
  