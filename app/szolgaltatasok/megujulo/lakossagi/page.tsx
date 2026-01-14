"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function LakossagiPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("lakossagiTitle")}</h1>
        <p>{t("lakossagiLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/megujulo/lakossagi/napelem"
          imgSrc="/napelem.svg"
          imgAlt="Napelem"
          title={t("napelemTitle")}
          text={t("napelemText")}
        />

        <OverlayCard
          href="/szolgaltatasok/megujulo/lakossagi/energiatarolo"
          imgSrc="/energiatarolo.svg"
          imgAlt="Energiatarolo"
          title={t("energiataroloTitle")}
          text={t("energiataroloText")}
        />

        <OverlayCard
          href="/szolgaltatasok/megujulo/lakossagi/hoszivattyu"
          imgSrc="/hoszivattyu.svg"
          imgAlt="Hoszivattyu"
          title={t("hoszivattyuTitle")}
          text={t("hoszivattyuText")}
        />

        <OverlayCard
          href="/szolgaltatasok/megujulo/lakossagi/nyilaszaro-csere"
          imgSrc="/nyilaszaro.svg"
          imgAlt="NyilaszaroCsere"
          title={t("nyilaszaroTitle")}
          text={t("nyilaszaroText")}
        />

      </div>
       
      </section>
    );
  }
  