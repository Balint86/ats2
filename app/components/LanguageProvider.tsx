"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "hu";

type Dict = Record<string, { en: string; hu: string }>;

const dict = {
  // Nav / common
  home: { en: "Home", hu: "Kezdőlap" },
  services: { en: "Services", hu: "Szolgáltatások" },
  about: { en: "About", hu: "Rólunk" },
  contact: { en: "Contact", hu: "Kapcsolat" },
  tagline: { en: "Mobile solutions made simple", hu: "Mobil megoldások egyszerűen" },

  // Home
  homeTitle: { en: "ATS-mobile", hu: "ATS-mobile" },
  homeSubtitle: {
    en: "A clean, modern site with smooth animations and mobile-first design.",
    hu: "Letisztult, modern weboldal sima animációkkal és mobilra optimalizált megjelenéssel.",
  },
  partnersTitle: { en: "Our partners:", hu: "Partnereink:"},
  partnersText: { en: "We are proud to have worked with these companies.", hu: "Büszkék vagyunk rá, hogy ezekkel a cégekkel dolgoztunk."},

  // About
  aboutTitle: { en: "About ATS-mobile", hu: "Az ATS-mobile-ról" },
  aboutText: {
    en: "ATS-mobile provides reliable mobile and digital solutions for modern businesses.",
    hu: "Az ATS-mobile megbízható mobil és digitális megoldásokat nyújt modern vállalkozások számára.",
  },

  // Contact
  contactTitle: { en: "Contact", hu: "Kapcsolat" },
  contactLead: {
    en: "Send us a message and we’ll get back to you.",
    hu: "Írj nekünk üzenetet, és hamarosan válaszolunk.",
  },
  emailLabel: { en: "Email", hu: "Email" },

  // Szolgáltatások
  szolgaltatasTitle: { en: "Services", hu: "Szolgáltatások"},

  // Megújuló
  megujuloTitle: { en: "Renewable", hu: "Megújuló"},
  megujuloText: { en: "Medium lenght.", hu: "Közepesen hosszú lehet."},
  megujuloLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  // Távközlés
  tavkozlesTitle: { en: "Telecommunication", hu: "Távközlés"},
  tavkozlesText: { en: "Medium lenght.", hu: "Közepesen hosszú lehet."},
  tavkozlesLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Lakossági
  lakossagiTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  lakossagiText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  lakossagiLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Ipari
  ipariTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  ipariText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  ipariLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Projekt előkészítés
  projektTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  projektText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  projektLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Tervezés, helyspecifikus tervek
  tervezesTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  tervezesText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  tervezesLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Mérnöki szakértői szolgáltatások
  mernokiTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  mernokiText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  mernokiLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},
 
  //Rádiótechnikai kivitelezés
  radioTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  radioText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  radioLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Acélszerkezetek gyártása, építészeti kivitelezés
  acelszerkezetTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  acelszerkezetText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  acelszerkezetLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Erősáramú energiaellátás
  erosaramuellatasTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  erosaramuellatasText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  erosaramuellatasLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Üzemeltetés
  uzemeltetesTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  uzemeltetesText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  uzemeltetesLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Napelem
  napelemTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  napelemText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  napelemLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Energiatároló
  energiataroloTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  energiataroloText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  energiataroloLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Hőszivattyú
  hoszivattyuTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  hoszivattyuText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  hoszivattyuLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Nyílászáró csere
  nyilaszaroTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  nyilaszaroText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  nyilaszaroLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Napelem, erőművek
  napelemeromuTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  napelemeromuText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  napelemeromuLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Építészeti tervezés
  epiteszetiTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  epiteszetiText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  epiteszetiLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Rádiótechnikai berendezések elrendezési tervei
  radioelrendezesTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  radioelrendezesText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  radioelrendezesLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Erősáramú energiaellátás tervezése
  erosaramtervezesTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  erosaramtervezesText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  erosaramtervezesLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Építmények felmérése, szakvélemény készítése
  epitmenyfelmeresTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  epitmenyfelmeresText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  epitmenyfelmeresLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Acélszerkezetek statikai vizsgálata, erősítési tervek készítése
  acelszerkezetstatikaTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  acelszerkezetstatikaText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  acelszerkezetstatikaLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Acélszerkezetek műszeres vizsgálata, adatelemzés, kiértékelés
  acelszerkezetmuszeresTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  acelszerkezetmuszeresText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  acelszerkezetmuszeresLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Egyedi acélszerkezetek tervezése
  acelszerkezettervezesTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  acelszerkezettervezesText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  acelszerkezettervezesLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Bázisállomások
  bazisallomasokTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  bazisallomasokText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  bazisallomasokLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Mikrohullámú összeköttetések
  mikroTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  mikroText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  mikroLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //BSC, RNC, DWDM
  bscTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  bscText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  bscLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Távközlési tornyok
  tornyokTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  tornyokText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  tornyokLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //20 kV kivitelezés, hálózatfejlesztés, transzformátor telepítés, csere
  huszkvTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  huszkvText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  huszkvLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //0,4 kV földkábeles, légkábeles kivitelezés, mérőhely kiépítés
  nullanegykvTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  nullanegykvText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  nullanegykvLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Víztorony fejszerkezet átalakítás
  viztoronyTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  viztoronyText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  viztoronyLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Szélerőmű törzsszerkezet átalakítása bázisállomás befogadására
  szeleromuTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  szeleromuText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  szeleromuLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Szalagkorlát átalakítása energiaelnyelő elemekkel
  szalagkorlatTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  szalagkorlatText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  szalagkorlatLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Rácsos szerkezetű tornyok
  racsostoronyTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  racsostoronyText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  racsostoronyLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Monopole acélszerkezetű tornyok
  monopoletoronyTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  monopoletoronyText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  monopoletoronyLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Előfeszített beton oszlopok
  elofeszitettbetontoronyTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  elofeszitettbetontoronyText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  elofeszitettbetontoronyLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Sátortetős antennatartó szerkezetek
  satortetostartoTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  satortetostartoText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  satortetostartoLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},

  //Lapostetős antennatartó szerkezetek
  lapostetostartoTitle: { en: "Projektspecifikus típustervekkkkkk", hu: "Projektspecifikus típustervekkkkkk"},
  lapostetostartoText: { en: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről.", hu: "Ide jönnek majd az információk a projekt előkészítés, projektspecifikus típustervekről."},
  lapostetostartoLong: { en: "Here comes the long description.", hu: "Ide jön a hosszabb leírása."},



} as const;


const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("hu");

  useEffect(() => {
    const saved = window.localStorage.getItem("ats_lang") as Lang | null;
    if (saved === "en" || saved === "hu") setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ats_lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key: keyof typeof dict) => dict[key][lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
