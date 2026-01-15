"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function EgyediAcelszerkezetTervezesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("acelszerkezettervezesTitle")}</h1>
        <p>{t("acelszerkezettervezesLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/egyedi-acelszerkezet-tervezes/viztorony-atalakitas"
          imgSrc="/viztorony-atalakitas.svg"
          imgAlt="ViztoronyAtalakitas"
          title={t("viztoronyTitle")}
          text={t("viztoronyText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/egyedi-acelszerkezet-tervezes/szeleromu-atalakitas"
          imgSrc="/szeleromu-atalakitas.svg"
          imgAlt="SzeleromuAtalakitas"
          title={t("szeleromuTitle")}
          text={t("szeleromuText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok/egyedi-acelszerkezet-tervezes/szalagkorlat-atalakitas"
          imgSrc="/szalagkorlat-atalakitas.svg"
          imgAlt="SzalagkorlatAtalakitas"
          title={t("szalagkorlatTitle")}
          text={t("szalagkorlatText")}
        />
      </div>
       
      </section>
    );
  }
  