"use client";

import Image from "next/image";
import { useLanguage } from "./components/LanguageProvider";
import Counters from "./components/Counters";

export default function Home() {
  const { t } = useLanguage();

  const partnerLogos = [
    { src: "/partners/partner1.svg", alt: "Partner 1" },
    { src: "/partners/partner2.svg", alt: "Partner 2" },
    { src: "/partners/partner3.svg", alt: "Partner 3" },
    { src: "/partners/partner4.svg", alt: "Partner 4" },
    { src: "/partners/partner5.svg", alt: "Partner 5" },
    { src: "/partners/partner6.svg", alt: "Partner 6" },
    { src: "/partners/partner7.png", alt: "Partner 7" },
    { src: "/partners/partner8.svg", alt: "Partner 8" },
    { src: "/partners/partner9.svg", alt: "Partner 9" },
    { src: "/partners/partner10.png", alt: "Partner 10" },
    { src: "/partners/partner11.jpeg", alt: "Partner 11" },
  ];

  return (
    <>
      {/* Logo mark hero (fade is on the image via CSS mask) */}
      <section className="heroHex">
        <div className="bleed">
          <Image
            src="/logo-mark.jpg"
            alt="ATS-mobile"
            width={10241}
            height={4400}
            className="heroLogo"
            priority
          />

          {/* Text stays nicely centered */}
          <div className="heroHexInner">
            <div className="homeText">
              <h1 className="homeTitle">{t("homeTitle")}</h1>
              <p className="homeSubtitle">{t("homeSubtitle")}</p>
            </div>
          </div>
        </div>
      </section>

      <Counters />

      <section className="partnersSection" aria-label="Partners">
        <div className="partnersInner">
          <h2 className="partnersTitle">{t("partnersTitle")}</h2>
          <p className="partnersSub">{t("partnersText")}</p>

          <div className="partnersGrid">
            {partnerLogos.map((p) => (
              <div className="partnerLogoCard" key={p.src}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={220}
                  height={120}
                  className="partnerLogo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
