"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footerInner">
        <span>
          © ATS-mobile {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
