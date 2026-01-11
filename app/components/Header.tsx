"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <nav className="nav centeredNav">
        {/* Left links (desktop) */}
        <div className="navSide navLeft">
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
              width={120}
              height={70}
              className="logo"
              priority
            />
          </span>
        </Link>

        {/* Right side (desktop language + mobile menu button) */}
        <div className="navSide navRight">
          <div className="langDesktop">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="menuBtn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menuIcon" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobileMenu" role="dialog" aria-label="Mobile menu">
          <div className="mobileMenuInner">
            <Link className="mobileLink" href="/about">
              {t("about")}
            </Link>
            <Link className="mobileLink" href="/contact">
              {t("contact")}
            </Link>

            <div className="mobileLang">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
