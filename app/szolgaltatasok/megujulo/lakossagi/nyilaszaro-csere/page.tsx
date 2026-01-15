"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function NyilaszaroCserePage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("megujuloTitle"), href: "/szolgaltatasok/megujulo" },
          { label: t("lakossagiTitle"), href: "/szolgaltatasok/megujulo/lakossagi"},
          { label: t("nyilaszaroTitle")}
        ]}
      />
        <h1>{t("nyilaszaroTitle")}</h1>
        <p>{t("nyilaszaroLong")}</p>
      </section>
    );
  }
  