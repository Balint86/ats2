"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function EnergiataroloPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("megujuloTitle"), href: "/szolgaltatasok/megujulo" },
          { label: t("lakossagiTitle"), href: "/szolgaltatasok/megujulo/lakossagi"},
          { label: t("energiataroloTitle")}
        ]}
      />
        <h1>{t("energiataroloTitle")}</h1>
        <p>{t("energiataroloLong")}</p>
      </section>
    );
  }
  