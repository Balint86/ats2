"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function AcelStatikaiVizsgalatPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("mernokiTitle"), href: "/szolgaltatasok/tavkozles/mernoki-szolgaltatasok"},
          { label: t("acelszerkezetstatikaTitle")}
        ]}
      />
        <h1>{t("acelszerkezetstatikaTitle")}</h1>
        <p>{t("acelszerkezetstatikaLong")}</p>
      </section>
    );
  }
  