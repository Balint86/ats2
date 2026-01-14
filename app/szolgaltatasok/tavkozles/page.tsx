"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "../../components/LanguageProvider";

export default function TavkozlesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("tavkozlesTitle")}</h1>
        <p>{t("tavkozlesLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/projekt-elokeszites"
          imgSrc="/projekt.svg"
          imgAlt="Projekt"
          title={t("projektTitle")}
          text={t("projektText")}
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
  