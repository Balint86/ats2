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
  megujuloText: { en: "Here come the informations about renewable.", hu: "Ide jönnek az információk a megújulóról."},
  megujuloLong: { en: "Here comes the long description for renewal.", hu: "Ide jön a hosszabb leírása a megújulónak."},

  // Távközlés
  tavkozlesTitle: { en: "Telecommunication", hu: "Távközlés"},
  tavkozlesText: { en: "Here come the informations about telecom.", hu: "Ide jönnek az információk a távközlésről."},
  tavkozlesLong: { en: "Here comes the long description for telecom.", hu: "Ide jön a hosszabb leírása a távközlésnek."},

  //Lakossági
  lakossagiTitle: { en: "Residential", hu: "Lakossági"},
  lakossagiText: { en: "Here come the informations about residential.", hu: "Ide jönnek az információk a lakosságiról."},
  lakossagiLong: { en: "Here comes the long description for residential.", hu: "Ide jön a hosszabb leírása a lakosságinak."},

  //Ipari
  ipariTitle: { en: "Industrial", hu: "Ipari"},
  ipariText: { en: "Here come the informations about industrial.", hu: "Ide jönnek az információk az ipariról."},
  ipariLong: { en: "Here comes the long description for telecom.", hu: "Ide jön a hosszabb leírása az ipariról."},

  //Projekt előkészítés
  projektTitle: { en: "Industrial", hu: "projekt előkészítés, projektspecifikus típustervek"},
  projektText: { en: "Here come the informations about industrial.", hu: "Ide jönnek az információk az ipariról."},
  projektLong: { en: "Here comes the long description for telecom.", hu: "Ide jön a hosszabb leírása az ipariról."},

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
