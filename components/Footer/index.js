import cx from "classnames";
import Image from "next/image";

import Button from "../Button";
import Section from "../Section";
import ContactUs from "./components/ContactUs";
import FooterLinks from "./components/FooterLinks";
import MobileOnly from "../MobileOnly";
import MobileHidden from "../MobileHidden";
import { getId } from "helpers/utils";

import styles from "./index.module.scss";

const footerLinks = [
  {
    id: 1,
    title: "Products",
    links: [
      {
        id: "sql-analytics",
        text: "SQL platform",
        href: "/web3-teams",
      },
      {
        id: "wallet-profiler",
        text: "Wallet behaviour analytics",
        href: `/web3-teams#${getId("Wallet behaviour analytics")}`,
      },
      {
        id: "research",
        text: "TL for research",
        href: "/research",
      },
    ],
  },
  {
    id: 2,
    title: "Use Cases",
    links: [
      {
        id: "web3-teams",
        text: "For web3 teams",
        href: "/web3-teams",
      },
      {
        id: "institutions",
        text: "For institutions",
        href: "/research",
      },
      {
        id: "developers",
        text: "For developers",
        href: "https://docs.topledger.xyz",
        target: "_blank",
      },
    ],
  },
  {
    id: 3,
    title: "Other links",
    links: [
      {
        id: "pricing",
        text: "Pricing",
        href: "/pricing",
      },
      {
        id: "blogs",
        text: "Blogs",
        href: "https://blogs.topledger.xyz",
        target: "_blank",
      },
      {
        id: "docs",
        text: "Docs",
        href: "https://docs.topledger.xyz",
        target: "_blank",
      },

      {
        id: "media-kit",
        text: "Media Kit",
        href: "https://www.figma.com/design/Vs0VeatB3BvTmwks7A2bIj/Media-Kit?t=NRw317rA76LJKm6P-1",
        target: "_blank",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/ledger_top",
    icon: "/assets/images/twitter.svg"
  },
  {
    name: "Telegram",
    href: "https://telegram.me/ergon50",
    icon: "/assets/images/telegram.svg"
  },
  {
    name: "Github",
    href: "https://github.com/Topledger/solana-programs",
    icon: "/assets/images/github.svg"
  }
];

const Footer = () => {
  return (
    <Section
      id="app-footer"
      style={{ backgroundColor: "#edf2ff" }}
      component="footer"
    >
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image
                src="/assets/images/logo/topledger-full.svg"
                width={120}
                height={40}
                alt="Top Ledger"
              />
            </div>
            <p className={styles.description}>
              Empowering web3 teams with powerful analytics and insights for the Solana ecosystem.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <Button.Link
                  key={social.name}
                  href={social.href}
                  style={{ backgroundColor: "transparent", padding: 0, border: "none" }}
                  target="_blank"
                  className={styles.socialLink}
                  noArrow
                >
                  <Image
                    src={social.icon}
                    width={32}
                    height={32}
                    alt={social.name}
                  />
                </Button.Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            {footerLinks.map((footerLink) => (
              <FooterLinks footerLinks={footerLink} key={footerLink.id} />
            ))}
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <ContactUs />
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <span>© 2025 Top Ledger. All rights reserved.</span>
          </div>
          <div className={styles.legalLinks}>
            <Button.Link
              tertiary
              className={styles.legalLink}
              href="/tnc"
            >
              Terms & Conditions
            </Button.Link>
            <span className={styles.separator}>•</span>
            <Button.Link
              tertiary
              className={styles.legalLink}
              href="/privacy-policy"
            >
              Privacy Policy
            </Button.Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
