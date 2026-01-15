"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function BazisallomasokPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("radioTitle"), href: "/szolgaltatasok/tavkozles/radio-kivitel"},
          { label: t("bazisallomasokTitle")}
        ]}
      />
        <h1>{t("bazisallomasokTitle")}</h1>
        <p>{t("bazisallomasokLong")}</p>
      </section>
    );
  }
  