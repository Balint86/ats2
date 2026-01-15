"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function RadioElrendezesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("tervezesTitle"), href: "/szolgaltatasok/tavkozles/tervezes"},
          { label: t("radioelrendezesTitle")}
        ]}
      />
        <h1>{t("radioelrendezesTitle")}</h1>
        <p>{t("radioelrendezesLong")}</p>
      </section>
    );
  }
  