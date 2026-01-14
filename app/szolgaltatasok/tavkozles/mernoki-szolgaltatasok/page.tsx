"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function MernokiSzolgaltatasokPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("mernokiTitle")}</h1>
        <p>{t("mernokiLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/felmeres"
          imgSrc="/felmeres.svg"
          imgAlt="Felmeres"
          title={t("epitmenyfelmeresTitle")}
          text={t("epitmenyfelmeresText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/acel-statikai-vizsgalat"
          imgSrc="/statikai-vizsgalat.svg"
          imgAlt="AcelStatikaiVizsgalata"
          title={t("acelszerkezetstatikaTitle")}
          text={t("acelszerkezetstatikaText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok6acel-muszeres-vizsgalat"
          imgSrc="/muszeres.svg"
          imgAlt="AcekMuszeresVizsgalata"
          title={t("acelszerkezetmuszeresTitle")}
          text={t("acelszerkezetmuszeresText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/egyedi-acelszerkezet-tervezes"
          imgSrc="/egyedi-acelszerkezet.svg"
          imgAlt="EgyediAcelszerkezetTervezes"
          title={t("acelszerkezettervezesTitle")}
          text={t("acelszerkezettervezesText")}
        />
      </div>
       
      </section>
    );
  }
  