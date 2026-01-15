"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function TavkozlesPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <Breadcrumbs
        items={[
          { label: t("services"), href: "/szolgaltatasok" },
          { label: t("tavkozlesTitle") },
        ]}
      />
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
          href="/szolgaltatasok/tavkozles/tervezes"
          imgSrc="/tervezes.svg"
          imgAlt="Tervezes"
          title={t("tervezesTitle")}
          text={t("tervezesText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok"
          imgSrc="/mernoki.svg"
          imgAlt="MernokiSzolgaltatasok"
          title={t("mernokiTitle")}
          text={t("mernokiText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/radio-kivitel"
          imgSrc="/radio-kivitel.svg"
          imgAlt="RadioKivitel"
          title={t("radioTitle")}
          text={t("radioText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas"
          imgSrc="/acelszerkezet-gyartas.svg"
          imgAlt="AcelszerkezetGyartas"
          title={t("acelszerkezetTitle")}
          text={t("acelszerkezetText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/erosaramu-ellatas"
          imgSrc="/erosaramu.svg"
          imgAlt="ErosaramuEllatas"
          title={t("erosaramuellatasTitle")}
          text={t("erosaramuellatasText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/uzemeltetes"
          imgSrc="/uzemeltetes.svg"
          imgAlt="Uzemeletetes"
          title={t("uzemeltetesTitle")}
          text={t("uzemeltetesText")}
        />
      </div>
       
      </section>
    );
  }
  