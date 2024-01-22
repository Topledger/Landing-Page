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
        text: "SQL platform",
        href: "/sql-platform",
      },
      {
        text: "Wallet profiler",
        href: "/wallet-profiler",
      },
      {
        text: "TL for research",
        href: "/top-ledger-for-research",
      },
    ],
  },
  {
    id: 2,
    title: "Use Cases",
    links: [
      {
        text: "For web3 teams",
        href: "/for-web3-teams",
      },
      {
        text: "For institutions",
        href: "/for-institutions",
      },
      {
        text: "For developers",
        href: "/for-developers",
      },
    ],
  },
  {
    id: 3,
    title: "Other links",
    links: [
      {
        text: "Pricing",
        href: "/pricing",
      },
      {
        text: "Blogs",
        href: "/blogs",
      },
      {
        text: "Docs",
        href: "/docs",
      },
      {
        text: "Github",
        href: "/github",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Section
      style={{ minHeight: "432px", backgroundColor: "#E9EFFF" }}
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
            <Button.Link tertiary color="#1A3989" className={styles.copyLink}>
              © 2024, Top Ledger, All rights reserved
            </Button.Link>
            <Button.Link tertiary color="#1A3989" className={styles.copyLink}>
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
