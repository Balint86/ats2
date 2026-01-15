"use client";

import OverlayCard from "@/app/components/OverlayCard";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function ErosaramuEllatasPage() {
  const { t } = useLanguage();
    
    return (
      <section style={{ padding: "32px 0" }}>
        <h1>{t("erosaramuellatasTitle")}</h1>
        <p>{t("erosaramuellatasLong")}</p>

        <div style={{ height: 18 }} />

      <div className="overlayGrid">
        <OverlayCard
          href="/szolgaltatasok/tavkozles/erosaramu-ellatas/20kv"
          imgSrc="/20kv.svg"
          imgAlt="20kV"
          title={t("huszkvTitle")}
          text={t("huszkvText")}
        />

        <OverlayCard
          href="/szolgaltatasok/tavkozles/erosaramu-ellatas/04kv"
          imgSrc="/04kv.svg"
          imgAlt="04kV"
          title={t("nullanegykvTitle")}
          text={t("nullanegykvText")}
        />
      </div>
       
      </section>
    );
  }
  