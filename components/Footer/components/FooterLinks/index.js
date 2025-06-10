import Button from "@/components/Button";

import styles from "./index.module.scss";

const FooterLinks = ({ footerLinks = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{footerLinks.title}</div>
      <ul className={styles.links}>
        {footerLinks.links.map((link) => (
          <li key={link.id} className={styles.linkWrapper}>
            <Button.Link
              href={link.href}
              style={{
                //padding: "0 !important",
                marginTop: "0rem !important",
              }}
              tertiary
              className={styles.link}
              target={link.target}
              noArrow={link.noArrow}
              arrowOnHover
            >
              {link.text}
            </Button.Link>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default FooterLinks;
