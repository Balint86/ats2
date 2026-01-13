"use client";

import Image from "next/image";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="homeHero">
      <div className="fullBleed">
        <Image
          src="/hero.svg"
          alt="ATS-mobile"
         width={1920}
          height={800}
          style={{ width: "100%", height: "auto" }}
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
