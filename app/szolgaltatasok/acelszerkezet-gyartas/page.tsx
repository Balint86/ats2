"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function AcelszerkezetGyartasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("acelszerkezetTitle")}
        ]}
      />
        <h1>{t("acelszerkezetTitle")}</h1>
        <p>{t("acelszerkezetLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok"
          imgSrc="/tornyok.svg"
          imgAlt="Tornyok"
          title={t("tornyokTitle")}
          text={t("tornyokText")}
        />
      </div>
       
      </section>
    );
  }
  