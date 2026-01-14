"use client";

import { useLanguage } from "@/app/components/LanguageProvider";

export default function ErosaramuEllatasiTervPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("erosaramtervezesTitle")}</h1>
        <p>{t("erosaramtervezesLong")}</p>
      </section>
    );
  }
  