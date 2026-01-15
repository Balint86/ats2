"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function EpiteszetiPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("tervezesTitle"), href: "/szolgaltatasok/tavkozles/tervezes"},
          { label: t("epiteszetiTitle")}
        ]}
      />
        <h1>{t("epiteszetiTitle")}</h1>
        <p>{t("epiteszetiLong")}</p>
      </section>
    );
  }
  