"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function MegujuloPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("megujuloTitle") },
        ]}
      />
        <h1>{t("megujuloTitle")}</h1>
        <p>{t("megujuloLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/megujulo/lakossagi"
          imgSrc="/lakossagi.svg"
          imgAlt="Lakossagi"
          title={t("lakossagiTitle")}
          text={t("lakossagiText")}
        />

        <OverlayCard
          href="/szolgaltatasok/megujulo/ipari"
          imgSrc="/ipari.svg"
          imgAlt="Ipari"
          title={t("ipariTitle")}
          text={t("ipariText")}
        />
      </div>
       
      </section>
    );
  }
  