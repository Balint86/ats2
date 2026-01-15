"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function NullaNegykVPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("erosaramuellatasTitle"), href: "/szolgaltatasok/tavkozles/erosaramu-ellatas"},
          { label: t("nullanegykvTitle")}
        ]}
      />
        <h1>{t("nullanegykvTitle")}</h1>
        <p>{t("nullanegykvLong")}</p>
      </section>
    );
  }
  