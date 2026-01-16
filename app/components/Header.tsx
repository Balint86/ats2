"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    setClosing(true);
    // MUST match .mobileMenu.closing animation duration in globals.css (menuUp)
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 400);
  };

  // Close menu when route changes (with reverse animation)
  useEffect(() => {
    if (open) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="header">
      <nav className="nav navFull" aria-label="Primary navigation">
        {/* Left (desktop links) */}
        <div className="navLeftArea">
          <Link className="navLink" href="/szolgaltatasok">
            {t("services")}
          </Link>
          <Link className="navLink" href="/rolunk">
            {t("about")}
          </Link>
          <Link className="navLink" href="/kapcsolat">
            {t("contact")}
          </Link>
        </div>

        {/* Center (ALWAYS centered in window) */}
        <Link href="/" className="navCenterLogo" aria-label="ATS-mobile home">
          <Image
            src="/logo.svg"
            alt="ATS-mobile logo"
            width={140}
            height={70}
            className="logo"
            priority
          />
        </Link>

        {/* Right (ALWAYS pinned right) */}
        <div className="navRightArea">
          <div className="langDesktop">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="menuBtn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              if (!open) {
                setOpen(true);
              } else {
                closeMenu();
              }
            }}
          >
            <span className="menuIcon" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown (kept mounted during closing animation) */}
      {open && (
        <div
          className={`mobileMenu ${closing ? "closing" : ""}`}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="mobileMenuInner">
            <Link className="mobileLink" href="/szolgaltatasok" onClick={closeMenu}>
              {t("services")}
            </Link>
            <Link className="mobileLink" href="/rolunk" onClick={closeMenu}>
              {t("about")}
            </Link>
            <Link className="mobileLink" href="/kapcsolat" onClick={closeMenu}>
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
