"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function BazisallomasokPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("bazisallomasokTitle")}</h1>
        <p>{t("bazisallomasokLong")}</p>
      </section>
    );
  }
  