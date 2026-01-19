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

        {/* Megújuló energia */}
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

        {/* Mérnöki szolgáltatások */}
        <Link href="/szolgaltatasok/mernoki-szolgaltatasok" className="serviceCard">
          <Image
            src="/mernoki.svg"
            alt="Mernoki"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>{t("mernokiTitle")}</h2>
          <p>
            {t("mernokiText")}
          </p>
        </Link>

        {/* Infrastruktúra projektek */}
        <Link href="/szolgaltatasok/infrastruktura" className="serviceCard">
          <Image
            src="/infrastruktura.svg"
            alt="Infrastruktura"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>{t("infrastrukturaTitle")}</h2>
          <p>
            {t("infrastrukturaText")}
          </p>
        </Link>

        {/* Megújuló */}
        <Link href="/szolgaltatasok/acelszerkezet-gyartas" className="serviceCard">
          <Image
            src="/acelszerkezet.svg"
            alt="Acelszerkezet"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>{t("acelszerkezetTitle")}</h2>
          <p>
            {t("acelszerkezetText")}
          </p>
        </Link>

        {/* Üzemeltetés */}
        <Link href="/szolgaltatasok/uzemeltetes" className="serviceCard">
          <Image
            src="/uzemeltetes.svg"
            alt="Uzemeltetes"
            width={600}
            height={400}
            className="serviceImage"
          />
          <h2>{t("uzemeltetesTitle")}</h2>
          <p>
            {t("uzemeltetesText")}
          </p>
        </Link>

      </div>
    </section>
  );
}
