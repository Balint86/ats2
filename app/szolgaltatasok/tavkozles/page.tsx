"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Reveal from "@/app/components/Reveal";

export default function TavkozlesPage() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "32px 0" }}>
      <Reveal>
        <Breadcrumbs
          items={[
            { label: t("services"), href: "/szolgaltatasok" },
            { label: t("tavkozlesTitle") },
          ]}
        />
      </Reveal>

      <Reveal>
        <h1>{t("tavkozlesTitle")}</h1>
      </Reveal>

      <Reveal>
        <p>{t("tavkozlesLong")}</p>
      </Reveal>

      <div style={{ height: 24 }} />

      <div className="overlayGrid">
        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/projekt-elokeszites"
            imgSrc="/projekt.svg"
            imgAlt="Projekt"
            title={t("projektTitle")}
            text={t("projektText")}
          />
        </Reveal>

        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/tervezes"
            imgSrc="/tervezes.svg"
            imgAlt="Tervezes"
            title={t("tervezesTitle")}
            text={t("tervezesText")}
          />
        </Reveal>

        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/mernoki-szolgaltatasok"
            imgSrc="/mernoki.svg"
            imgAlt="MernokiSzolgaltatasok"
            title={t("mernokiTitle")}
            text={t("mernokiText")}
          />
        </Reveal>

        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/radio-kivitel"
            imgSrc="/radio-kivitel.svg"
            imgAlt="RadioKivitel"
            title={t("radioTitle")}
            text={t("radioText")}
          />
        </Reveal>

        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/acelszerkezet-gyartas"
            imgSrc="/acelszerkezet-gyartas.svg"
            imgAlt="AcelszerkezetGyartas"
            title={t("acelszerkezetTitle")}
            text={t("acelszerkezetText")}
          />
        </Reveal>

        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/erosaramu-ellatas"
            imgSrc="/erosaramu.svg"
            imgAlt="ErosaramuEllatas"
            title={t("erosaramuellatasTitle")}
            text={t("erosaramuellatasText")}
          />
        </Reveal>

        <Reveal>
          <OverlayCard
            href="/szolgaltatasok/tavkozles/uzemeltetes"
            imgSrc="/uzemeltetes.svg"
            imgAlt="Uzemeletetes"
            title={t("uzemeltetesTitle")}
            text={t("uzemeltetesText")}
          />
        </Reveal>
      </div>
    </section>
  );
}
