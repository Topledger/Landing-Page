import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeContext } from "../../context/DarkMode";

const Header = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <header
      className={
        router.pathname === "/dashboards" && isDarkMode ? "blackBg" : ""
      }
    >
      {/* <div className="container"> */}
      <div className={`navMain ${menuOpen && "boxNavMain"}`}>
        <div className="logo">
          <Link href="/">
            {router.pathname === "/dashboards" && isDarkMode ? (
              <img src="/assets/images/black-logo.png" alt="Top Ledger Logo" />
            ) : (
              <img src="/assets/images/logo.png" alt="Top Ledger Logo" />
            )}
          </Link>
        </div>

        <div className="navLink" onClick={() => toggleMenu()}>
          {menuOpen ? (
            <img src="/assets/images/cross.svg" alt="cross-icon" />
          ) : (
            <img src="/assets/images/navIcon.png" alt="menu-icon" />
          )}
        </div>
      </div>
      {/* </div> */}

      {menuOpen && (
        <div className="head-menu">
          {/* <div className="active">Docs</div> */}
          <div
            className={`active ${
              router.pathname === "/dashboards" ? "active-link" : null
            }`}
          >
            <Link href="/dashboards">Dashboards</Link>
          </div>
          <div
            className={`active ${
              router.pathname === "/about-us" ? "active-link" : null
            }`}
          >
            <Link href="/about-us">About</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
