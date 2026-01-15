"use client";


import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../components/LanguageProvider";

export default function SzolgaltatasokPage() {

  const { t } = useLanguage();

  return (
    <section className="servicesSection">
      <h1 className="servicesTitle">{t("szolgaltatasTitle")}</h1>

      <div className="servicesGrid">

        {/* Távközlés */}
        <Link href="/szolgaltatasok/tavkozles" className="serviceCard">
          <Image
            src="/tavkozles.svg"
            alt="Tavkozles"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>{t("tavkozlesTitle")}</h2>
          <p>
            {t("tavkozlesText")}
          </p>
        </Link>

        {/* Megújuló */}
        <Link href="/szolgaltatasok/megujulo" className="serviceCard">
          <Image
            src="/megujulo.svg"
            alt="Megujulo"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>{t("megujuloTitle")}</h2>
          <p>
            {t("megujuloText")}
          </p>
        </Link>

      </div>
    </section>
  );
}
