"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function BscRncDwdmPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("bscTitle")}</h1>
        <p>{t("bscLong")}</p>
      </section>
    );
  }
  