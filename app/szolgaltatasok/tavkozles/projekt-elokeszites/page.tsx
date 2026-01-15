"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function ProjektElokeszitesPage() {
  const { t } = useLanguage();
    

    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("projektTitle")}
        ]}
      />
        <h1>{t("projektTitle")}</h1>
        <p>{t("projektLong")}</p>
      </section>
    );
  }
  