"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function NapelemEromuvekPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("megujuloTitle"), href: "/szolgaltatasok/megujulo" },
          { label: t("ipariTitle"), href: "/szolgaltatasok/megujulo/ipari"},
          { label: t("napelemeromuTitle")}
        ]}
      />
        <h1>{t("napelemeromuTitle")}</h1>
        <p>{t("napelemeromuLong")}</p>
      </section>
    );
  }
  