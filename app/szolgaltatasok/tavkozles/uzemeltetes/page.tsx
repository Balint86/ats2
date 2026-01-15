"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function UzemeltetesPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("uzemeltetesTitle")}
        ]}
      />
        <h1>{t("uzemeltetesTitle")}</h1>
        <p>{t("uzemeltetesLong")}</p>
      </section>
    );
  }
  