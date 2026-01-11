"use client";

import { useLanguage } from "../components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "34px 0" }}>
      <h1>{t("contactTitle")}</h1>
      <p style={{ color: "rgba(0,0,0,0.65)" }}>{t("contactLead")}</p>

      <div style={{ marginTop: 14 }}>
        <strong>{t("emailLabel")}:</strong> contact@ats-mobile.com
      </div>
    </section>
  );
}
