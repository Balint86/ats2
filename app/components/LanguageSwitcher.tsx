"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="langSwitch">
      <button
        className={`langBtn ${lang === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
        aria-label="Switch language to English"
      >
        EN
      </button>

      <button
        className={`langBtn ${lang === "hu" ? "active" : ""}`}
        onClick={() => setLang("hu")}
        aria-label="Switch language to Hungarian"
      >
        HU
      </button>
    </div>
  );
}
