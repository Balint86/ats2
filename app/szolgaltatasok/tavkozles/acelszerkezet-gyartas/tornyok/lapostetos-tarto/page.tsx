"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function LapostetosTartoPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("lapostetostartoTitle")}</h1>
        <p>{t("lapostetostartoLong")}</p>
      </section>
    );
  }
  