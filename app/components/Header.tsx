"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <nav className="nav centeredNav">
        <div className="navSide">
          <Link className="navLink" href="/about">
            {t("about")}
          </Link>
          <Link className="navLink" href="/contact">
            {t("contact")}
          </Link>
        </div>

        {/* Center logo */}
        <Link href="/" className="brand centerBrand" aria-label="ATS-mobile home">
          <span className="logoWrap">
            <Image
              src="/logo.svg"
              alt="ATS-mobile logo"
              width={100}
              height={60}
              className="logo"
              priority
            />
          </span>
        </Link>

        <div className="navSide rightSide">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
