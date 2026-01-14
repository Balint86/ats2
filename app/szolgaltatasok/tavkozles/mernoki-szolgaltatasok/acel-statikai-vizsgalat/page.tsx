"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function AcelStatikaiVizsgalatPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("acelszerkezetstatikaTitle")}</h1>
        <p>{t("acelszerkezetstatikaLong")}</p>
      </section>
    );
  }
  