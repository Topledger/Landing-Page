import cx from "classnames";

import Button from "../Button";
import Section from "../Section";
import ContactUs from "./components/ContactUs";
import FooterLinks from "./components/FooterLinks";

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
        href: "/web3-teams",
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
        href: "https://blog.topledger.xyz",
        target: "_blank",
      },
      {
        id: "docs",
        text: "Docs",
        href: "https://docs.topledger.xyz",
        target: "_blank",
      },
      {
        id: "github",
        text: "Github",
        href: "https://github.com/Topledger",
        target: "_blank",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Section
      id="app-footer"
      style={{ backgroundColor: "#edf2ff" }}
      component="footer"
    >
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.footerLinksContainer}>
            {footerLinks.map((footerLink) => (
              <FooterLinks footerLinks={footerLink} key={footerLink.id} />
            ))}
          </div>
          <div className={styles.copyContainer}>
            <Button.Link tertiary color="#374151" className={styles.copyLink}>
              © 2024, Top Ledger, All rights reserved
            </Button.Link>
            <Button.Link
              tertiary
              color="#374151"
              className={cx(styles.copyLink, styles.privacyPolicy)}
            >
              Privacy Policy
            </Button.Link>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.contactUsContainer}>
            <ContactUs />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Footer;
