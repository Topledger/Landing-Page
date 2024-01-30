import cx from "classnames";
import Image from "next/image";

import Button from "../Button";

import styles from "./index.module.scss";
import HeaderMenu from "./components/HeaderMenu";

const productsHeaderLinks = [
  {
    icon: "analytics",
    title: "SQL based analytics platform",
    description: "Create comprehensive dashboards with deeper analysis",
    href: "/web3-teams",
  },
  {
    icon: "wallet-profiler",
    title: "Wallet profiler",
    description:
      "Track individual wallet activity across entire solana ecosystem",
    href: "/wallet-profiler",
    comingSoon: true,
  },
  {
    icon: "research",
    title: "Top Ledger for research",
    description: "Access Solana's decoded data directly on your private cloud",
    href: "/research",
  },
  {
    icon: "artificial-intelligence",
    title: "Top Ledger AI",
    description: "Simplifying large-scale insight consumption",
    href: "/artifical-intelligence",
    comingSoon: true,
  },
];

const useCasesHeaderLinks = [
  {
    icon: "web3-teams",
    title: "For web3 teams",
    description: "Your partner in buildinga data culture",
    href: "/web3-teams",
  },
  {
    icon: "institutions",
    title: "For institutions",
    description: "Powering advanced analyticsuse cases",
    href: "/research",
  },
  {
    icon: "developers",
    title: "For developers",
    description: "Enhance your development usingTop Ledger API",
    href: "https://docs.topledger.xyz",
    target: "_blank",
  },
];

const Header = ({ className }) => {
  return (
    <header className={cx(styles.appHeader, className)}>
      <span className={styles.headerWrapper}>
        <Button.Link className={styles.logoContainer} href="/landing" tertiary>
          <Image
            src={"/assets/images/logo/topledger-full.svg"}
            width={144}
            height={50}
            alt="Top Ledger logo"
          />
        </Button.Link>
        <nav className={styles.headerLinks}>
          <HeaderMenu
            className={styles.headerLink}
            menuItems={productsHeaderLinks}
          >
            <a className={styles.headerLink}>Product</a>
          </HeaderMenu>
          <HeaderMenu
            className={styles.headerLink}
            menuItems={useCasesHeaderLinks}
          >
            <a className={styles.headerLink}>User cases</a>
          </HeaderMenu>
          <Button.Link tertiary className={styles.headerLink} href="/pricing">
            Pricing
          </Button.Link>
          <Button.Link
            tertiary
            className={styles.headerLink}
            href="https://blogs.topledger.xyz/"
            target="_blank"
            noArrow
          >
            Blogs
          </Button.Link>
          <Button.Link
            tertiary
            className={styles.headerLink}
            href="https://docs.topledger.xyz/"
            target="_blank"
            noArrow
          >
            Docs
          </Button.Link>
        </nav>
        <span className={styles.headerButtons}>
          <Button.Link
            href="https://analytics.topledger.xyz/login"
            target="_blank"
            noArrow
            color="#085ED4"
          >
            Login
          </Button.Link>
        </span>
      </span>
    </header>
  );
};

export default Header;
