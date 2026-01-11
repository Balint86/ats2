"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "hu";

type Dict = Record<string, { en: string; hu: string }>;

const dict = {
  // Nav / common
  home: { en: "Home", hu: "Kezdőlap" },
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

  // Footer
} as const;


const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

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
