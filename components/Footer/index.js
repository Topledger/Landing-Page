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
        href: "/web3-teams",
      },
      {
        text: "Wallet profiler",
        href: "",
      },
      {
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
        text: "For web3 teams",
        href: "/web3-teams",
      },
      {
        text: "For institutions",
        href: "/research",
      },
      {
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
        text: "Pricing",
        href: "/pricing",
      },
      {
        text: "Blogs",
        href: "https://blog.topledger.xyz",
        target: "_blank",
      },
      {
        text: "Docs",
        href: "https://docs.topledger.xyz",
        target: "_blank",
      },
      {
        text: "Github",
        href: "https://github.com/Topledger",
        target: "_blank",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Section style={{ backgroundColor: "#E9EFFF" }} component="footer">
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
