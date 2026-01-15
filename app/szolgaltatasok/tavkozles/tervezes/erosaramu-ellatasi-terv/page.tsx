"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function ErosaramuEllatasiTervPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("tervezesTitle"), href: "/szolgaltatasok/tavkozles/tervezes"},
          { label: t("erosaramtervezesTitle")}
        ]}
      />
        <h1>{t("erosaramtervezesTitle")}</h1>
        <p>{t("erosaramtervezesLong")}</p>
      </section>
    );
  }
  