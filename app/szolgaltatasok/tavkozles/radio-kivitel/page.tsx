"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function RadiotechnikaiKivitelezesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle"), href: "/szolgaltatasok/tavkozles" },
          { label: t("radioTitle")}
        ]}
      />
        <h1>{t("radioTitle")}</h1>
        <p>{t("radioLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/radio-kivitel/bazisallomasok"
          imgSrc="/bazisallomasok.svg"
          imgAlt="Bazisallomasok"
          title={t("bazisallomasokTitle")}
          text={t("bazisallomasokText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/radio-kivitel/mikro-osszekottetesek"
          imgSrc="/mikro-osszekottetesek.svg"
          imgAlt="MikroOsszekottetes"
          title={t("mikroTitle")}
          text={t("mikroText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/radio-kivitel/bsc-rnc-dwdm"
          imgSrc="/bsc-rnc-dwdm.svg"
          imgAlt="BscRncDwdm"
          title={t("bscTitle")}
          text={t("bscText")}
        />
      </div>
       
      </section>
    );
  }
  