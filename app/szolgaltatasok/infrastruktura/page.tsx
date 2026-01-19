"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function InfrastrukturaProjektekPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("infrastrukturaTitle")}
        ]}
      />
        <h1>{t("infrastrukturaTitle")}</h1>
        <p>{t("infrastrukturaLong")}</p>
      </section>
    );
  }
  