"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function TervezesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("tervezesTitle")}</h1>
        <p>{t("tervezesLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/tervezes/epiteszeti"
          imgSrc="/epiteszeti.svg"
          imgAlt="Epiteszeti"
          title={t("epiteszetiTitle")}
          text={t("epiteszetiText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/tervezes/radio-elrendezesi"
          imgSrc="/radio-elrendezes.svg"
          imgAlt="RadioElrendezesi"
          title={t("radioelrendezesTitle")}
          text={t("radioelrendezesText")}
        />


        <OverlayCard
          href="/szolgaltatasok/tavkozles/tervezes/erosaramu-ellatasi-terv"
          imgSrc="/erosaramu-ellatasi-terv.svg"
          imgAlt="ErosaramuEllatasiTerv"
          title={t("erosaramtervezesTitle")}
          text={t("erosaramtervezesText")}
        />
      </div>
       
      </section>
    );
  }
  