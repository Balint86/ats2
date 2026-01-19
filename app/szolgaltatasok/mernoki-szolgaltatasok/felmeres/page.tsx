"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function EpitmenyFelmeresPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("mernokiTitle"), href: "/szolgaltatasok/tavkozles/mernoki-szolgaltatasok"},
          { label: t("epitmenyfelmeresTitle")}
        ]}
      />
        <h1>{t("epitmenyfelmeresTitle")}</h1>
        <p>{t("epitmenyfelmeresLong")}</p>
      </section>
    );
  }
  