"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function IpariPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("ipariTitle")}</h1>
        <p>{t("ipariLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/megujulo/ipari/napelem-eromuvek"
          imgSrc="/napelem-eromuvek.svg"
          imgAlt="NapelemEromuvek"
          title={t("napelemeromuTitle")}
          text={t("napelemeromuText")}
        />

      </div>
       
      </section>
    );
  }
  