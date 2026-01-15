"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function MikroOsszekottetesekPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("radioTitle"), href: "/szolgaltatasok/tavkozles/radio-kivitel"},
          { label: t("mikroTitle")}
        ]}
      />
        <h1>{t("mikroTitle")}</h1>
        <p>{t("mikroLong")}</p>
      </section>
    );
  }
  