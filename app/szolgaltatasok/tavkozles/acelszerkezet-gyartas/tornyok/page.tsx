"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function TornyokPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("tornyokTitle")}</h1>
        <p>{t("tornyokLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok/racsos"
          imgSrc="/racsos-torony.svg"
          imgAlt="RacsosTorony"
          title={t("racsostoronyTitle")}
          text={t("racsostoronyText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok/monopole"
          imgSrc="/monopole-torony.svg"
          imgAlt="MonopoleTorony"
          title={t("monopoletoronyTitle")}
          text={t("monopoletoronyText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok/elofeszitett-beton"
          imgSrc="/elofeszitett-beton-torony.svg"
          imgAlt="ElofeszitettBetonTorony"
          title={t("elofeszitettbetontoronyTitle")}
          text={t("elofeszitettbetontoronyText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok/satortetos-tarto"
          imgSrc="/satortetos-tarto.svg"
          imgAlt="SatortetosTarto"
          title={t("satortetostartoTitle")}
          text={t("satortetostartoText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas/tornyok/lapostetos-tarto"
          imgSrc="/lapostetos-tarto.svg"
          imgAlt="LapostetosTarto"
          title={t("lapostetostartoTitle")}
          text={t("lapostetostartoText")}
        />
      </div>
       
      </section>
    );
  }
  