"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function MonopoleToronyPage() {
  const { t } = useLanguage();    

    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("acelszerkezetTitle"), href: "/szolgaltatasok/tavkozles/acelszerkezet-gyartas"},
          { label: t("tornyokTitle"), href: "/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok"},
          { label: t("monopoletoronyTitle")}
        ]}
      />
        <h1>{t("monopoletoronyTitle")}</h1>
        <p>{t("monopoletoronyLong")}</p>
      </section>
    );
  }
  