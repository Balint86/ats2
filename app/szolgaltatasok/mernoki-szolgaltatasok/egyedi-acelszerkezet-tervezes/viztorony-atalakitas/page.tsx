"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function ViztoronyAtalakitasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("mernokiTitle"), href: "/szolgaltatasok/tavkozles/mernoki-szolgaltatasok"},
          { label: t("acelszerkezettervezesTitle"), href: "/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/egyedi-acelszerkezet-tervezes"},
          { label: t("viztoronyTitle")}
        ]}
      />
        <h1>{t("viztoronyTitle")}</h1>
        <p>{t("viztoronyLong")}</p>
      </section>
    );
  }
  