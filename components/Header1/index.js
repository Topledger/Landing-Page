import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import Image from "next/image";

import { DarkModeContext } from "../../context/DarkMode";

import styles from "./index.module.scss";

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
      className={cx(styles.pageHeader, {
        blackBg: router.pathname === "/dashboards" && isDarkMode,
      })}
    >
      {/* <div className="container"> */}
      <div className={`navMain ${menuOpen && "boxNavMain"}`}>
        <div className="logo">
          <Link href="/">
            {router.pathname === "/dashboards" && isDarkMode ? (
              <Image src="/assets/images/black-logo.png" alt="Top Ledger Logo" />
            ) : (
              <Image src="/assets/images/logo.png" alt="Top Ledger Logo" />
            )}
          </Link>
        </div>
        <div className="right-section">
          <button
            className="login-btn"
            onClick={() => window.open("https://analytics.topledger.xyz")}
          >
            Login
          </button>
          <div className="navLink" onClick={() => toggleMenu()}>
            {menuOpen ? (
              <Image src="/assets/images/cross.svg" alt="cross-icon" />
            ) : (
              <Image src="/assets/images/navIcon.png" alt="menu-icon" />
            )}
          </div>
        </div>
      </div>
      {/* </div> */}

      {menuOpen && (
        <div className="head-menu">
          <div
            className={`active ${router.pathname === "/dashboards" ? "active-link" : null
              }`}
          >
            <Link href="/dashboards">Dashboards</Link>
          </div>
          <div
            className={`active ${router.pathname === "https://docs.topledger.xyz/"
                ? "active-link"
                : null
              }`}
          >
            <Link href="https://docs.topledger.xyz/" target="_blank">
              Docs
            </Link>
          </div>
          <div
            className={`active ${router.pathname === "https://docs.topledger.xyz/"
                ? "active-link"
                : null
              }`}
          >
            <Link href="https://blogs.topledger.xyz/" target="_blank">
              Blogs
            </Link>
          </div>
          <div
            className={`active ${router.pathname === "/about-us" ? "active-link" : null
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
