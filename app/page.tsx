"use client";

import Image from "next/image";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="homeHero">
      <div className="svgCenter" aria-label="Homepage graphic">
        <Image
          src="/hero.svg"
          alt="ATS-mobile graphic"
          width={1200}
          height={1200}
          className="heroSvg"
          priority
        />
      </div>
      
      <div className="homeText">
        <h1 className="homeTitle">{t("homeTitle")}</h1>
        <p className="homeSubtitle">{t("homeSubtitle")}</p>
      </div>
    </section>
  );
}
