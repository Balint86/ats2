"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function SzeleromuAtalakitasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("mernokiTitle"), href: "/szolgaltatasok/tavkozles/mernoki-szolgaltatasok"},
          { label: t("acelszerkezettervezesTitle"), href: "/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/egyedi-acelszerkezet-tervezes"},
          { label: t("szeleromuTitle")}
        ]}
      />
        <h1>{t("szeleromuTitle")}</h1>
        <p>{t("szeleromuLong")}</p>
      </section>
    );
  }
  