"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function HuszkVPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("erosaramuellatasTitle"), href: "/szolgaltatasok/tavkozles/erosaramu-ellatas"},
          { label: t("huszkvTitle")}
        ]}
      />
        <h1>{t("huszkvTitle")}</h1>
        <p>{t("huszkvLong")}</p>
      </section>
    );
  }
  